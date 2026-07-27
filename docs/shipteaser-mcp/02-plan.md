# ShipTeaser MCP — Plan d'implémentation (section 0, livrable final)

Suite de `01-buildlore-exploration.md`. Les trois décisions ouvertes par
l'exploration sont tranchées ; ce document liste les fichiers à créer, les
migrations et l'ordre d'exécution. **Rien n'est implémenté à ce stade.**

Cible : `guichstudio/buildlore`. Ce dépôt-ci ne porte que la documentation.

---

## Décisions verrouillées (2026-07-27)

| # | Décision | Choix |
|---|---|---|
| 1 | Taxonomie d'angles exposée | **V2 : `mechanism \| pain_point \| fomo`** |
| 2 | Cible de `brand_id` | **`brand_profiles.id`** |
| 3 | Frontière `web/` ↔ `pipeline/` | **A — mirroring dans `web/` avec tests de pin** |

### Ce que la décision 1 change dans la spec

La section 5 est écrite pour l'enum V1. Trois conséquences à assumer :

- L'enum de `create_teaser.angle` et de `eligible_angles` devient
  `["mechanism","pain_point","fomo"]`. Plus aucune conversion lossy : l'angle
  demandé est l'angle rendu.
- **`proof_points` cesse d'être un déclencheur d'angle.** Il reste dans
  l'input — c'est de la matière verbatim de premier ordre pour le director,
  qui exige du claim réel — mais il alimente désormais les `quality_flags`, pas
  l'éligibilité. La règle « pas de proof → angle proof inéligible » disparaît
  avec l'angle.
- `urgency_or_scarcity` reste le signal de `fomo`, mais ne le rend pas
  *inéligible* en son absence : `fomo` est le défaut universel côté pipeline
  (`selectAngle` le retourne quand aucun guard ne mord). Il passe simplement
  de `strong` à `weak`.

`reveal` disparaît de la surface publique. Son intention (« montrer le produit
qui tourne ») est couverte par `mechanism`, cible de `mapV1AngleToV2` pour
`reveal`.

### Ce que la décision 2 impose au schéma `api_keys`

`brand_profiles` a `user_id NOT NULL` et une contrainte
`unique (user_id, url)`. Une clé API qui scope des `brand_profiles.id` doit
donc porter le compte auquel ces lignes appartiennent — sinon `create_teaser`
ne peut pas renseigner `render_jobs.user_id`, dont dépendent le quota et
l'historique.

`api_keys` gagne donc un `user_id` par rapport à la section 2 de la spec.
C'est l'ajustement que la spec autorise explicitement (« ajuster uniquement si
le schéma DB réel l'exige — le signaler »). Signalé.

---

## Migrations

Trois fichiers dans `web/sql/`. **Chacun se termine par son propre
`insert into public.schema_migrations` `on conflict do nothing`** — sans quoi
la porte de `deploy/deploy.sh` bloque le déploiement suivant.

### `2026-07-27-api-keys.sql`

```sql
create table if not exists public.api_keys (
  id                       uuid primary key default gen_random_uuid(),
  key_hash                 text not null unique,   -- sha256, jamais la clé en clair
  client_name              text not null,
  user_id                  uuid not null references auth.users (id) on delete cascade,
  brand_ids                uuid[] not null default '{}',
  monthly_render_quota     int not null default 20,
  renders_used_this_month  int not null default 0,
  quota_period_start       date not null default date_trunc('month', now())::date,
  created_at               timestamptz not null default now(),
  revoked_at               timestamptz null
);
create index if not exists api_keys_hash_idx on public.api_keys (key_hash) where revoked_at is null;
alter table public.api_keys enable row level security;  -- zéro policy, comme render_jobs
```

Deux écarts par rapport à la section 2, tous deux forcés par le réel :

- `user_id` — justifié ci-dessus.
- `quota_period_start` — la spec dit « quota mensuel » sans dire qui remet le
  compteur à zéro. Il n'y a pas de cron dans ce repo. Stocker le début de
  période permet de faire le reset **à la lecture** (si le mois a changé,
  `renders_used_this_month` repart à 0 dans la même transaction que le débit),
  sans machinerie supplémentaire.

### `2026-07-27-briefs.sql`

La spec veut un `brief_id` « persisté, réutilisable », et `create_teaser` le
rend obligatoire. Il faut donc une table — elle n'existe pas.

```sql
create table if not exists public.briefs (
  id               uuid primary key default gen_random_uuid(),
  api_key_id       uuid not null references public.api_keys (id) on delete cascade,
  brand_profile_id uuid not null references public.brand_profiles (id) on delete cascade,
  input            jsonb not null,   -- PrepareBriefInput validé
  output           jsonb not null,   -- FeatureBrief (hook, headline, summary, eligible_angles…)
  ready_to_render  boolean not null,
  created_at       timestamptz not null default now()
);
create index if not exists briefs_key_idx on public.briefs (api_key_id, created_at desc);
alter table public.briefs enable row level security;
```

`create_teaser` relit `output.eligible_angles` pour valider l'angle demandé —
c'est ce qui rend l'erreur `angle_not_eligible` possible sans refaire d'appel
Claude.

### `2026-07-27-render-jobs-angle.sql`

**Déclassée de bloquante à souhaitable** (cf. exploration §1 : l'angle
transite déjà par `config` jsonb, de `api/generate.ts` jusqu'à
`worker.ts:376`). Normalisation, à jouer quand ça arrange :

```sql
alter table public.render_jobs add column if not exists angle text null;
alter table public.render_jobs drop constraint if exists render_jobs_angle_check;
alter table public.render_jobs add constraint render_jobs_angle_check
  check (angle is null or angle in ('mechanism','pain_point','fomo','reveal','proof'));
```

Le CHECK accepte les cinq valeurs — les deux taxonomies coexistent en base
tant que la rotation hebdo V1 (`contentmap/weeklySelect.ts`) écrit des jobs.
Le `drop constraint if exists` d'abord : c'est le piège que
`2026-07-16-extract-kind.sql` et `2026-07-25-video-editing.sql` documentent
tous les deux.

Tant qu'elle n'est pas jouée, le MCP écrit l'angle dans `config` comme le
dashboard. Une fois jouée, on écrit **les deux** le temps d'une transition,
puis on retire la lecture depuis `config` dans le worker.

---

## Fichiers à créer

### `web/lib/mcp/` — la logique mirrorée (décision 3)

| Fichier | Rôle |
|---|---|
| `angles.ts` | Copie de `ANGLES` + portage des guards de `selectAngle` vers `eligibleAngles(brief)` → `Array<{angle, rationale, confidence}>`. `fomo` toujours présent (défaut universel), `strong` seulement si `urgency_or_scarcity` est renseigné. |
| `schemas.ts` | Schémas Zod de la section 5, enum V2. Les `.describe()` sont conservés mot pour mot — ils sont lus par le Claude client, c'est le contrat de traduction dev → marketing. |
| `auth.ts` | `Bearer st_live_…` → sha256 → ligne `api_keys` ; rejet si `revoked_at` ; scope `brand_ids` ; quota mensuel avec reset à la lecture. Fail closed sur erreur de compteur, comme `web/lib/security.ts`. |
| `qualify.ts` | L'appel Claude de `prepare_brief`. Haiku, timeout 30 s, `maxRetries: 1` — même discipline que `pipeline/src/providers/anthropic.ts`. Produit `hook`/`headline`/`summary`/`quality_flags`. |
| `briefs.ts` | Persistence : insert dans `briefs`, relecture par `brief_id`. |

### Tests de pin cross-package — non négociables

C'est ce qui rend l'option A tenable. Même convention que
`web/tests/contentMap.test.ts`, qui rejoue la recette `cellId()` du pipeline.

| Fichier | Assertion |
|---|---|
| `web/tests/mcp-angles-pin.test.ts` | L'enum de `web/lib/mcp/angles.ts` est **exactement** `ANGLES` de `pipeline/src/v2/angle.ts` (valeurs lues en dur, commentaire pointant le fichier source). |
| `web/tests/mcp-angles.test.ts` | Les guards portés donnent le même verdict que `selectAngle` sur les fixtures existantes (`pipeline/src/v2/fixtures/*.profile.json`). |
| `web/tests/mcp-auth.test.ts` | Clé valide / révoquée / hors scope brand / quota épuisé — les quatre cas du done criteria n°2. |

### Routes API — en Pages Router

`/api/v1/*` reste en `web/pages/api/`, comme les vingt routes existantes.
**Seule la route MCP a besoin de l'App Router**, donc on réduit la surface
App Router à un unique fichier.

| Fichier | Rôle |
|---|---|
| `web/pages/api/v1/briefs.ts` | `POST` — la seule vraie nouveauté. Valide, qualifie, persiste, retourne le `FeatureBrief`. |
| `web/pages/api/v1/renders/index.ts` | `POST` — façade sur `enqueueJob()`. Résout `brief_id` → URL + config + angle. |
| `web/pages/api/v1/renders/[id].ts` | `GET` — façade sur `getJobRecord()` + `friendlyError()`, tous deux déjà écrits. |
| `web/pages/api/v1/brands/[id].ts` | `GET` — lit `brand_profiles`, condense le `LightweightBrandProfile` en version LLM-readable. |

### La route MCP

| Fichier | Rôle |
|---|---|
| `web/app/api/mcp/route.ts` | `createMcpHandler` + les 4 tools. Chaque tool : auth → Zod → appel de la fonction `web/lib/mcp/*` correspondante → réponse formatée. **Zéro logique métier.** |

Cohabitation `pages/` + `app/` : supportée par Next 14.2.35. Rien d'autre ne
migre.

### Dépendances à ajouter à `web/package.json`

`zod`, `@anthropic-ai/sdk`, `mcp-handler`, `@modelcontextprotocol/sdk`.

`zod` sera en `^3.23.8` pour matcher `pipeline/`, qui l'importe en `zod/v4`
(l'espace de noms v4 embarqué dans zod 3).

Note : ajouter `@anthropic-ai/sdk` à `web/` casse l'invariant « un seul
fichier parle à Anthropic », qui existait parce que le worker tourne à
concurrence 1 et qu'un appel pendu bloquait toute la file. Cet argument ne
s'applique pas au web (Vercel, requêtes indépendantes) — mais `qualify.ts`
garde le timeout explicite et `maxRetries: 1` par discipline.

---

## Ordre d'exécution et done criteria

Repris de la section 0, corrigé.

| # | Étape | Done |
|---|---|---|
| 1 | Migrations `api_keys` + `briefs` (+ `angle` optionnelle) | Jouées en local, présentes dans `schema_migrations`, `deploy.sh` passe sa porte |
| 2 | `web/lib/mcp/auth.ts` + middleware | `mcp-auth.test.ts` vert sur les 4 cas |
| 3 | `web/lib/mcp/angles.ts` + pins | Les deux tests de pin verts |
| 4 | `POST /api/v1/briefs` | Un contexte volontairement vague → `ready_to_render: false` + `quality_flags` pertinents ; un contexte propre → `eligible_angles` cohérents |
| 5 | Façades `brands` / `renders` | Appelables en curl avec une clé de test |
| 6 | `web/app/api/mcp/route.ts` | `claude mcp add --transport http shipteaser http://localhost:3000/api/mcp`, les 4 tools listés et appelables |
| 7 | E2E | `prepare_brief` → `create_teaser` → job visible dans `render_jobs` avec l'angle persisté |

Portes existantes à ne pas casser : `tsc` web, `next build`, et les 628 tests
`web/`. Les 1632 tests `pipeline/` ne devraient pas bouger — aucune étape ne
touche `pipeline/`.

L'étape 7 suppose un worker qui consomme la queue. La spec le notait comme une
inconnue (§7 : « le test E2E aura besoin d'un worker qui consomme la queue
quelque part ») — **c'est réglé** : `buildlore-worker.service` est un service
systemd déjà installé sur le VPS, redémarré avec drainage par `deploy/deploy.sh`
(SIGTERM, il finit le job en vol avant de sortir). Rien à monter.

Corollaire sur le déploiement : `web/` n'est pas sur Vercel mais auto-hébergé
(`next start` derrière systemd, `shipteaser.com`). Livrer le MCP = jouer les
migrations dans l'éditeur SQL Supabase, puis un `deploy.sh`.

---

## Ce qui reste hors périmètre

Inchangé par rapport à la spec : le worker de render, le dashboard,
l'extraction Playwright, la skill Claude Code cliente. Aucune des sept étapes
ne les touche.

Une conséquence de la décision 1 mérite d'être suivie séparément : l'angle
`proof` n'existe pas en V2. S'il compte pour le produit, c'est un vrai gabarit
V2 à écrire (`pipeline/src/v2/gabarits.ts`) — un chantier pipeline, pas MCP.
