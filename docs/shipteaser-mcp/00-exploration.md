# ShipTeaser MCP — Section 0 : rapport d'exploration

Statut : **bloqué avant écriture de code.** Le pipeline ShipTeaser que la spec
demande de wrapper n'existe pas dans ce repo.

---

## Conclusion en une ligne

`guichstudio/guichstudio` est un site vitrine Next.js **Pages Router**. Aucune
trace de Supabase, de `render_jobs`, de creative-director, d'archetypes ou de
Remotion. La spec dit « ne pas réécrire la logique métier — la réutiliser » :
il n'y a rien à réutiliser ici.

---

## Réponses aux 4 points de la section 0

### 1. Schéma Supabase (`brands`, `render_jobs`, colonne `angle`)

**Introuvable.** Pas de client Supabase, pas de migrations, pas de dossier
`supabase/`. `grep -i` sur `supabase|render_job|api_keys` → 0 occurrence sur
l'ensemble du repo (hors `node_modules`).

Le prérequis bloquant annoncé par la spec (persistence de l'angle dans
`render_jobs`) ne peut pas être évalué : la table n'existe pas ici.

### 2. Creative-director call, `eligibleAngles`, trigger de render, BrandProfile

**Aucun des quatre.** `grep -i` sur
`creative.director|eligibleAngles|BrandProfile|archetype|remotion|anthropic`
→ 0 occurrence. Pas de dépendance `@anthropic-ai/sdk`, pas de `zod`, pas de
`mcp-handler`, pas de `@modelcontextprotocol/sdk` dans `landing/package.json`.

### 3. Inventaire routes API vs server actions

Deux routes, toutes deux en Pages Router (`landing/pages/api/`) :

| Route | Rôle réel |
|---|---|
| `POST /api/brief` | Formulaire de brief vidéo → e-mail via Resend. Aucun stockage, aucun LLM. |
| `POST /api/create-checkout-session` | Stripe Checkout. |

`landing/pages/api/brief.js` porte un nom trompeusement proche du
`POST /api/v1/briefs` de la spec, mais n'a rien en commun : il sérialise un
formulaire en HTML et l'envoie par mail à `guich.studio@gmail.com`. Il
n'appelle aucun modèle et ne persiste rien.

Pas de server actions (Pages Router uniquement), donc rien à extraire vers
`lib/`.

### 4. Contrainte d'architecture supplémentaire

La spec impose `app/api/mcp/route.ts` via `mcp-handler` (Vercel), qui est un
route handler **App Router**. Ce projet est intégralement en Pages Router
(`landing/pages/`, pas de dossier `app/`). Même si le pipeline existait ici,
il faudrait d'abord activer l'App Router en cohabitation.

---

## Contenu réel du repo (pour référence)

```
landing/                 Next.js 14.2.5, Pages Router, Tailwind
  pages/                 index, work, work/[slug], sphere, success
  pages/api/             brief.js (Resend), create-checkout-session.js (Stripe)
  components/            15 composants de landing (Hero, PricingCards, FAQ…)
  lib/cms.ts             données projets/tweets en dur
  lib/seo.config.ts, structured-data.ts
*.html                   maquettes statiques (form, hero-fan-demo, text-sphere-demo)
```

Dépendances : `next`, `react`, `framer-motion`, `next-seo`, `next-sitemap`,
`resend`, `stripe`. Rien d'autre.

---

## Piste identifiée

`guichstudio/buildlore` (privé, dernier push le jour même de cette
exploration) est le candidat le plus probable pour héberger le pipeline
ShipTeaser. Indice corroborant : le pied de page de l'e-mail généré par
`landing/pages/api/brief.js` porte la mention « Sent from buildlore.top ».

Ce repo n'est pas rattaché à la session. Il faut l'ajouter explicitement
avant de pouvoir vérifier — et donc avant de pouvoir écrire la moindre ligne
des étapes 1 à 6 de la section 0.

---

## Ce qui reste vrai quel que soit le repo cible

Ces points de la spec ne dépendent pas de l'exploration et tiennent tels
quels :

- Transport Streamable HTTP via `mcp-handler`, App Router requis.
- `create_teaser` n'inline jamais un render — insert dans `render_jobs`, retour
  immédiat du `job_id`.
- `brief_id` obligatoire sur `create_teaser` : le funnel de qualification est
  dans le type system, pas de bypass.
- Quota décrémenté à l'insert du job, pas au succès du render.
- Les schémas Zod de la section 5 sont la source de vérité, à ajuster
  uniquement si le schéma DB réel l'exige.

## Ce qui ne peut pas être tranché avant accès au vrai repo

- Étape 1 — migration `api_keys` + colonne `angle` : cible inconnue.
- Étape 2 — middleware auth Bearer : dépend de la stack de la cible.
- Étape 3 — `POST /api/v1/briefs` : dépend du creative-director existant.
- Étape 4 — façades `brands` / `renders` : rien à « façader » ici.
- Étapes 5–6 — route MCP + E2E : dépendent de tout ce qui précède.
