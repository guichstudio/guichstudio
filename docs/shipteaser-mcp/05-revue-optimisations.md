# ShipTeaser MCP — Revue du plan et optimisations

Relecture critique des documents 01–04, chaque affirmation revérifiée contre
le code de `buildlore` (`cd51360`). Trois corrections, puis les
simplifications qui en découlent. `02-plan.md` reste le plan de référence ;
ce document l'amende.

---

## 1. Corrections au plan

### 1.1 zod : le plancher réel est 3.25, pas 3.23

Le manifest de `pipeline/` déclare `^3.23.8`, mais le lockfile résout
**3.25.76** — et le sous-chemin `zod/v4` qu'importent `director.ts`,
`claims.ts`, `anthropic.ts` n'existe qu'à partir de **3.25.0**. La note du
plan (« `^3.23.8` pour matcher pipeline ») installerait une version
potentiellement trop basse si un lockfile la figeait sous 3.25.

**Amendement** : `web/` installe `zod@^3.25.76` (la version résolue du
pipeline) et importe `zod/v4`, comme le pipeline.

### 1.2 `callClaude` fige le modèle — Haiku exige un paramètre

`pipeline/src/providers/anthropic.ts` code en dur `claude-opus-4-8` dans les
trois appels. La spec impose Haiku pour `prepare_brief`. Le miroir
`web/lib/mcp/qualify.ts` ne peut donc pas copier `callClaude` tel quel : il
prend le modèle en paramètre. On garde le reste du pattern à l'identique —
`zodOutputFormat`, timeout explicite, `maxRetries: 1`.

### 1.3 « Quota débité à l'insert » : ce n'est PAS le pattern existant

La spec (§2) veut le débit à l'insert du job. Or le quota hebdo des abonnés
fait l'inverse : la ligne `renders` est insérée par le **worker à la
livraison** (`worker.ts:587`), l'idempotence venant de l'index
`renders_job_id_key`, et la course concurrentielle étant fermée en amont par
l'index « un render en vol par compte ». Le plan disait que le raisonnement de
la spec était « déjà celui de `consumeQuota` » — inexact : `consumeQuota`
(`web/lib/security.ts`) est un compteur **en mémoire** du free tier, remis à
zéro à chaque redeploy.

**Amendement** : le quota de clé API suit bien la spec (débit à l'insert,
jamais remboursé — c'est l'anti-spam), mais avec son propre mécanisme,
atomique dès le premier jour (cf. §2.2). Il ne réutilise ni `renders` ni
`consumeQuota`.

---

## 2. Optimisations

### 2.1 Supprimer `api_keys.brand_ids` — la colonne crée le problème qu'elle prétend régler

La décision `brand_id = brand_profiles.id` fait déjà porter le scope par
`api_keys.user_id` : les brands accessibles sont, par définition, les lignes
`brand_profiles` du compte. La colonne `brand_ids uuid[]` de la spec
introduit un **second** registre de la même information, d'où la question
ouverte de `04` (figée ou recalculée ?) et le risque de désynchronisation.

**Amendement** : pas de colonne `brand_ids` en v0. Le scope se calcule à
chaque requête : `brand_profiles where user_id = api_keys.user_id`. Une brand
extraite après la création de la clé est visible immédiatement, zéro état à
maintenir. La colonne ne reviendra que si un vrai besoin de restriction
par clé apparaît (agence gérant plusieurs marques clientes sur des clés
séparées) — et ce sera une migration additive triviale.

Ça ferme aussi la question « quel `brand_ids` à la création ? » de `04` :
aucune.

### 2.2 Débit de quota atomique, sans fonction SQL

Pas de lecture-puis-écriture, pas de RPC : un seul UPDATE conditionnel qui
gère le rollover mensuel dans la même instruction —

```sql
update api_keys set
  renders_used_this_month = case
    when quota_period_start < date_trunc('month', now())::date then 1
    else renders_used_this_month + 1 end,
  quota_period_start = greatest(quota_period_start, date_trunc('month', now())::date)
where id = $1
  and revoked_at is null
  and (quota_period_start < date_trunc('month', now())::date
       or renders_used_this_month < monthly_render_quota)
returning renders_used_this_month, monthly_render_quota;
```

Zéro ligne retournée = quota épuisé ou clé révoquée → 429/401, pas d'insert.
Deux `create_teaser` concurrents ne peuvent pas passer tous les deux sur le
dernier crédit. Même philosophie que les index d'unicité du repo : la course
est fermée par la base, pas par le code.

### 2.3 Les renders MCP partent en `kind='manual'` — zéro migration du CHECK

Le plan laissait la question implicite. En l'explicitant : les jobs créés par
`create_teaser` utilisent le `kind='manual'` existant, avec l'angle dans
`config` (puis dans la colonne quand la migration optionnelle sera jouée).

Bénéfices en cascade : la contrainte CHECK sur `kind` n'est pas touchée (une
migration de moins, et la plus piégeuse) ; l'index « un manual en vol par
compte » s'applique tel quel aux clés API — un client MCP ne peut pas empiler
les renders, ce qui borne l'exposition du quota ; le worker ne voit **aucune
différence** avec un job du dashboard. La provenance MCP, si on veut la
tracer, tient dans `config.source = 'mcp'` — informatif, sans schéma.

### 2.4 Streamable HTTP stateless — pas de Redis

`mcp-handler` n'a besoin de Redis que pour le transport SSE legacy. Le
serveur est auto-hébergé (systemd, pas de Vercel) et le client cible est
Claude Code, qui parle Streamable HTTP. **Amendement** : mode stateless
uniquement, pas de SSE, pas de Redis. La « compat gratuite avec les vieux
clients » évoquée par la spec §1 est abandonnée sciemment : elle coûterait
une brique d'infra pour des clients qui n'existent pas dans notre cas.

Corollaire agréable de l'auto-hébergement : la crainte « Claude call
synchrone vs timeout serverless » disparaît — pas de limite de durée sous
systemd. Le timeout de 30 s reste, mais comme discipline, pas comme
contrainte de plateforme.

### 2.5 Le brief fige son contexte — `create_teaser` ne refait aucune lecture

La ligne `briefs` stocke déjà `input` et `output`. On y ajoute le **profil de
marque condensé tel qu'utilisé** au moment de la qualification. `create_teaser`
n'a alors qu'à lire la ligne `briefs` : pas de re-fetch de `brand_profiles`,
pas de fenêtre où une ré-extraction entre `prepare_brief` et `create_teaser`
changerait la matière sous les pieds du client. Le brief est un snapshot
auto-porteur — même logique que `render_jobs.brand_profile`.

### 2.6 Doublons de `create_teaser` : couverts par l'existant, à documenter

Deux appels identiques créeraient deux jobs — mais l'index « un manual en vol
par compte » transforme le second en `RenderInProgressError` → 429 tant que le
premier n'est pas terminé. C'est suffisant pour v0 ; le documenter dans la
description du tool (« if you get render_in_progress, poll get_render_status
instead of retrying ») plutôt que d'ajouter un index de plus.

### 2.7 Fixtures : le cas `ready_to_render: false` est déjà écrit

`pipeline/src/v2/fixtures/poor.profile.json` et `no-number.profile.json`
existent précisément pour les profils pauvres. Les tests de
`POST /api/v1/briefs` les réutilisent comme matière du done criteria n°3 (un
contexte vague → flags pertinents) au lieu d'inventer des fixtures.

---

## 3. Effet net sur le plan

| Poste | Avant (02/04) | Après |
|---|---|---|
| Migrations | 3 (dont CHECK `kind` potentiel) | **2** (`api_keys` sans `brand_ids`, `briefs`) + 1 optionnelle (`angle`) |
| Questions ouvertes de 04 | 3 | **1** (quels plans ont droit à une clé) |
| Infra nouvelle | Redis si SSE | **aucune** |
| Fonction SQL quota | à écrire | **aucune** (UPDATE conditionnel) |
| Worker | inchangé | inchangé — un job MCP est indistinguable d'un job dashboard |

Le chemin critique reste inchangé : `POST /api/v1/briefs` est toujours le
gros morceau, tout le reste s'est raccourci.
