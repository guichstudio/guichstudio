# ShipTeaser MCP — Section 0 : exploration de `guichstudio/buildlore`

Repo réel du pipeline. Exploré au commit `cd51360` (2026-07-27).
Complète `00-exploration.md`, qui n'établissait que l'absence du pipeline dans
`guichstudio/guichstudio`.

Verdict : le pipeline existe et il est riche. Mais **trois hypothèses de la
spec sont fausses**, et l'une d'elles remet en cause le principe même du
« wrapper fin ». Rien n'est infaisable ; il faut trancher avant de coder.

---

## 1. Schéma Supabase

Migrations : `web/sql/*.sql`, jouées **à la main dans l'éditeur SQL Supabase**
(pas de CLI de migration). 16 fichiers, tous enregistrés dans
`schema_migrations`.

### `render_jobs` — existe, mais pas de colonne `angle`

Colonnes réelles, agrégées sur toutes les migrations :

| Origine | Colonnes |
|---|---|
| `2026-07-08-render-jobs.sql` | `id`, `user_id`, `url`, `config` jsonb, `kind`, `priority`, `status`, `attempts`, `max_attempts`, `claimed_by`, `started_at`, `finished_at`, `duration_s`, `video_key`, `thumb_key`, `error_tail`, `created_at` |
| `2026-07-08-demo-ip-limit.sql` | `ip` |
| `2026-07-18-brand-profile-column.sql` | `brand_profile` jsonb |
| `2026-07-17-revisions.sql` | `revision_root`, `revision_prompt`, `quota_exempt` |
| `2026-07-25-video-editing.sql` | `spec_key`, `input_spec_key` |

`kind` est sous contrainte CHECK, élargie deux fois — état actuel
`('demo','manual','weekly','extract','edit')`. **Un `kind = 'brief'` ou
`'mcp'` exigerait une migration de la contrainte**, avec le
`drop constraint if exists` d'abord (les deux migrations existantes
documentent le piège : un `add` seul laisse deux contraintes).

Le claim se fait par la fonction `claim_render_job(worker_id)` —
`FOR UPDATE SKIP LOCKED` + reprise des jobs orphelins à 10 min. RLS activée,
**zéro policy** : tout passe par la clé service.

**Colonne `angle` : absente.** `grep -i angle web/sql/` → 0 occurrence.

**Mais le prérequis n'est pas ce que la spec croit.** L'angle est déjà
persisté et déjà consommé de bout en bout — il voyage dans `config` jsonb :

- `web/pages/api/generate.ts` lit `config.angle` pour le gating de plan
  (`requestedTemplateMinPlan`) ;
- `web/lib/queue.ts` `enqueueJob()` l'écrit tel quel dans `config` ;
- `pipeline/src/worker.ts:376` le relit :
  `const v1angle = (job.config as { angle?: string } | null)?.angle`.

Donc l'item Phase 1 n'est pas « débloquer l'angle », c'est **le normaliser en
colonne de premier ordre**. Ça reste souhaitable (requêtable, indexable,
contraignable par CHECK), mais ce n'est **pas bloquant** : le MCP peut écrire
l'angle dans `config` dès le premier jour, exactement comme le dashboard le
fait aujourd'hui. Le séquençage de la spec peut être desserré d'autant.

### Pas de table `brands`

Il y a trois objets voisins, aucun ne s'appelle `brands` :

- `brand_profiles` — **scopée compte** (`user_id NOT NULL`,
  `unique (user_id, url)`), `profile` jsonb = `LightweightBrandProfile`
  (`pipeline/src/contentmap/lightweight.ts`). Écrite par le worker sur succès
  d'un job `extract`, lue par `/api/map/*`.
- `render_jobs.brand_profile` jsonb — snapshot sur le job. Existe
  précisément parce que `brand_profiles` ne peut pas servir les demos
  anonymes (`user_id` non nul).
- `brand_kits` + `brand_assets` — logo, polices, couleurs uploadés par le
  client.

Conséquence directe : `get_brand_profile(brand_id)` n'a pas de cible
évidente. Le `brand_id` de la spec devra désigner soit un `brand_profiles.id`
(donc lié à un `user_id`, ce qui interagit avec le scoping par clé API), soit
un `brand_kits.id`. **À trancher.**

### Pas de table `api_keys`

À créer, conforme à la section 2. L'auth actuelle ne connaît que trois
classes (cf. §3).

### Contrat de migration — non négociable

`2026-07-25-schema-migrations.sql` documente un incident de production : le
24ᵉ déploiement a livré du code écrivant `render_jobs.input_spec_key` sans que
la migration ait été jouée ; PostgREST a rejeté **tous** les inserts (42703),
toutes générations à l'arrêt. La table `schema_migrations` et la porte de
`deploy/deploy.sh` en sont la réponse.

> Toute migration ajoutée à `web/sql/` DOIT se terminer par son propre
> `insert into public.schema_migrations (filename) values ('…') on conflict do nothing;`
> L'oublier bloque le déploiement suivant.

Ça s'applique aux deux migrations que le MCP demande (`api_keys`, `angle`).

---

## 2. Localisation des briques

### Creative-director : il y en a deux

| | V1 | V2 (flagship actuel) |
|---|---|---|
| Fichier | `pipeline/src/director/index.ts` | `pipeline/src/v2/director.ts` |
| Signature | `director(profile: BrandProfile): Promise<CreativeBrief>` | `directSpec(...)` → `{ spec, path: 'llm'\|'fallback', attempts }` |
| Prompt | `pipeline/src/prompts/director.md` (fichier) | constante `SYSTEM_PROMPT` (méthode Schwartz) |
| Modèle | `claude-opus-4-8` | via `callClaude` |
| Robustesse | try/catch → `heuristicBrief(profile)` | validation `validateLaunchSpec` + `schwartzReport`, ≤3 tentatives avec feedback `VIOLATIONS:`, sinon fallback silencieux. **Ne lève jamais.** |

Le routage V1/V2 se fait dans le worker (`shouldUseV2(job)`, kill-switch
`WORKER_USE_V2`).

Accès Anthropic centralisé dans `pipeline/src/providers/anthropic.ts` —
explicitement « the only file in the pipeline that imports
`@anthropic-ai/sdk` directly ». Timeout 60 s, `maxRetries: 1`, parce que le
worker tourne à concurrence 1 et qu'un appel pendu bloque toute la file.

### `eligibleAngles` : n'existe pas

Le plus proche est `selectAngle(claims, override)` —
`pipeline/src/v2/angle.ts`. Il retourne **un** angle et sa raison, pas une
liste avec `confidence`. Les guards mécaniques sont déjà là et constituent le
substrat réutilisable :

- `mechanism` si un claim `type === 'mechanism'` a `strength >= 4` ;
- `pain_point` si un claim matche `/(stop|tired|waste|scramble|hours|weekend)/i`,
  ou si `copy.headline` se termine par « ? » ;
- `fomo` sinon — défaut universel, **toujours éligible**.

Un override hors guard est respecté avec un `console.warn`, jamais rejeté.
À noter : la spec veut l'inverse (erreur `angle_not_eligible`). Divergence
délibérée à assumer côté MCP.

### ⚠️ Deux taxonomies d'angles, et la spec utilise la mauvaise

| | Valeurs | Où |
|---|---|---|
| **V1** | `reveal`, `pain_point`, `proof`, `fomo` | `pipeline/src/types.ts` (`AngleId`), dupliqué dans `web/lib/templates.ts`, rotation hebdo `contentmap/weeklySelect.ts` |
| **V2** | `mechanism`, `pain_point`, `fomo` | `pipeline/src/v2/angle.ts` (`ANGLES`) |

Pont : `mapV1AngleToV2` (`pipeline/src/v2/angleMap.ts`), **lossy et assumé** —
`reveal → mechanism`, `pain_point → pain_point`, `fomo → fomo`, et
**`proof → fomo`**, décrit dans le fichier comme « un DÉFAUT retunable
(décision DA — une ligne à changer ici) », faute d'équivalent V2.

La spec MCP (§5.2, §5.4) fige l'enum V1 :
`["pain_point","reveal","proof","fomo"]`. Sur le chemin V2 — le flagship —
un `create_teaser(angle: "proof")` rendra donc du **fomo**. Pire pour le
produit : la spec construit tout `proof_points` / l'angle `proof` comme un
pilier de qualification, alors que V2 ne sait pas le rendre.

Trois issues, à trancher avant d'écrire les schémas Zod :
1. exposer l'enum V1 et accepter la conversion lossy (statu quo, mais
   `proof` ment au client) ;
2. exposer l'enum V2 (`mechanism|pain_point|fomo`) et réécrire les schémas de
   la section 5 en conséquence ;
3. implémenter un vrai gabarit `proof` en V2 — hors scope de ce build.

Accessoirement, `pipeline/src/v2/launchSpec.ts:312` porte déjà un
`z.enum(['mechanism','pain_point','reveal','proof','fomo'])` — l'union des
deux. À regarder avant de choisir.

### Trigger de render

Exactement le modèle que veut la spec, déjà en place :

- `web/lib/queue.ts` → `enqueueJob(opts)` : un INSERT dans `render_jobs`, rien
  d'autre. Le web **n'exécute jamais** de render.
- `pipeline/src/worker.ts` claim les jobs et spawne le CLI en process détaché,
  avec timeout et kill du groupe de process.
- Les collisions de concurrence sont gérées par des index d'unicité + mapping
  du SQLSTATE 23505 vers des erreurs typées (`FreeTierUsedError`,
  `RenderInProgressError`, `ExtractInProgressError`, `EditInProgressError`).

`create_teaser` n'a donc rien à inventer : il appelle `enqueueJob`.

### Extraction BrandProfile

`pipeline/src/extract/` — ~25 modules Playwright (couleurs, logo, typo,
tagline, features, CTA, curation d'éléments), avec `ssrfGuard.ts`. Version
condensée persistée : `pipeline/src/contentmap/lightweight.ts`. Hors scope
selon la spec, cohérent.

---

## 3. Routes API vs server actions

**Aucune server action.** `web/` est intégralement en Pages Router : ~20
routes sous `web/pages/api/**` (`generate`, `generate/status`,
`generate/video`, `videos`, `revise`, `edit/*`, `brand-kits/*`, `map/*`,
`billing/*`, `auth/*`, `music/upload`, `onboarding`, `lead`,
`webhooks/outrank`).

Il n'y a donc **rien à extraire** : le point 3 de la section 0 est sans objet.
Mieux, la logique est déjà dans `web/lib/` sous la forme exacte que la spec
réclame — `queue.ts`, `security.ts`, `subscription.ts`, `validation.ts`,
`brandKitServer.ts`, `billing.ts`. Les routes sont des handlers minces
au-dessus. Les façades `/api/v1/*` seront de vraies façades.

### Auth existante — trois classes, aucune n'est une clé API tierce

Dans `web/pages/api/generate.ts` :

1. **admin** — header `x-buildlore-key`, sans limite ;
2. **subscriber** — Bearer token Supabase + plan actif, quota hebdo par
   compte persisté dans `renders` ;
3. **anonyme** — demo, une vidéo gratuite par IP (index d'unicité
   `render_jobs_demo_ip_key` en filet atomique).

Le middleware `Bearer st_live_…` est donc bien à créer, mais
`web/lib/security.ts` (`checkQuota`, `consumeQuota`, `recordAttempt`,
`sanitizeConfigOverride`, `assertPublicUrl`, `botCheck`) et
`web/lib/subscription.ts` donnent le pattern à copier, y compris la stratégie
« fail closed » systématique des compteurs.

---

## 4. Contraintes d'architecture — le vrai point dur

### 4.1 `web/` est en Pages Router

Next `14.2.35`, aucun dossier `app/`. `mcp-handler` est un route handler App
Router. Next 14 supporte la cohabitation `pages/` + `app/`, donc c'est
faisable, mais ça reste **l'introduction de l'App Router dans le projet** —
pas le détail d'intégration que la spec suppose.

### 4.2 `web/` n'a ni `zod` ni `@anthropic-ai/sdk`

| | `web/` | `pipeline/` |
|---|---|---|
| `zod` | ✗ | ✓ `^3.23.8` (importé en `zod/v4`) |
| `@anthropic-ai/sdk` | ✗ | ✓ `^0.104.2` |
| `@supabase/supabase-js` | ✓ | ✓ |

La spec impose Zod partout et un appel Claude synchrone dans la route
`prepare_brief`. Les deux dépendances sont à ajouter à `web/` — et la seconde
casse l'invariant « un seul fichier parle à Anthropic », qui existe pour une
raison précise (le budget de timeout du worker).

### 4.3 ⛔ `web/` et `pipeline/` ne s'importent JAMAIS

C'est une décision structurante, explicite et testée. Extrait de
`web/lib/templates.ts` :

> « The angle ids below MUST match `pipeline/src/types.ts` AngleId. **web/
> cannot import from pipeline/** (separate packages; the pipeline is spawned
> as a child process), so the enum is duplicated — the same tradeoff
> SCENE_KINDS in `lib/security.ts` already makes. Drift fails safe. »

Même note dans `web/lib/brandKit.ts` (« Mirrors `BrandKitRef` in
`pipeline/src/types.ts` — the packages do not [share] ») et
`web/lib/contentMap.ts`. La dérive est retenue par des tests de pin
cross-package (`web/tests/contentMap.test.ts` rejoue la recette `cellId()` du
pipeline).

**Le principe fondateur de la spec — « wrapper fin, zéro logique métier, on
réutilise `eligibleAngles` / archetype routing / creative-director du
pipeline » — ne peut pas s'appliquer tel quel.** Un
`web/app/api/mcp/route.ts` ne peut importer ni `selectAngle`, ni `director`,
ni `directSpec`.

Trois options :

| | Approche | Coût | Risque |
|---|---|---|---|
| **A** | Mirrorer dans `web/` (guards d'angles + appel Claude de qualification), avec tests de pin, comme le repo le fait déjà 3 fois | faible, cohérent avec l'existant | duplication de logique produit, pas juste d'un enum |
| **B** | Extraire un package partagé (`shared/` ou workspaces npm) pour angles + schémas | moyen, structurellement propre | touche le build et le déploiement des deux packages |
| **C** | `prepare_brief` devient un job `kind='brief'` dans la queue, exécuté par le worker qui, lui, a accès au pipeline | faible côté web | rompt le synchrone 30 s de la spec ; le client MCP devrait poller |

Recommandation : **A** pour v0. C'est le seul choix qui respecte à la fois la
frontière de packages existante et le `prepare_brief` synchrone, et il suit
une convention que le repo assume déjà explicitement. B est le bon geste
quand un deuxième consommateur apparaîtra.

---

## 5. Ordre d'exécution révisé

Réécriture de la liste de la section 0 à la lumière de ce qui précède.

| # | Étape spec | Révision |
|---|---|---|
| 0 | — | **Trancher : taxonomie d'angles (§2), cible de `brand_id` (§1), option A/B/C (§4.3).** Bloquant, décisions produit. |
| 1 | migration `api_keys` + `angle` | `api_keys` : à créer. `angle` : **déclassée de bloquante à souhaitable** — l'angle transite déjà par `config`. Les deux DOIVENT se self-register dans `schema_migrations`. |
| 2 | middleware auth Bearer | Confirmé. Copier le pattern `web/lib/security.ts` (fail closed). |
| 3 | `POST /api/v1/briefs` | Confirmé, le gros morceau. Nécessite `zod` + `@anthropic-ai/sdk` dans `web/`, et l'option de §4.3. |
| 4 | façades `brands` / `renders` | `renders` : trivial, `enqueueJob` + `getJobRecord` existent. `brands` : dépend de la cible de `brand_id`. |
| 5 | `app/api/mcp/route.ts` | Ajouter d'abord l'App Router à `web/` (cohabitation Next 14). |
| 6 | E2E | Nécessite un worker qui tourne — hors scope de ce build, la spec le note déjà. |

---

## 6. Ce que la spec avait juste

Pour ne pas donner l'impression que tout est à revoir :

- `create_teaser` = insert seul, jamais de render inline → **exactement**
  l'architecture en place (`enqueueJob` / `claim_render_job` / worker).
- Le quota décrémenté à l'insert plutôt qu'au succès → c'est déjà le
  raisonnement de `consumeQuota` et de l'index `renders_job_id_key`
  (idempotence du débit).
- Zéro webhook, pas d'`upload_asset` en v0 → cohérent, `brand-kits/*` couvre
  déjà l'upload par ailleurs.
- Le worker, le dashboard et l'extraction Playwright ne sont pas à toucher →
  aucune des tâches ci-dessus ne les touche.
