# ShipTeaser MCP — Réalignement : Context-first, pas Claude-first

Directive du 2026-07-27 : ShipTeaser est un produit **context-first**. Le
moteur comprend le produit à partir de plusieurs sources (URL, GitHub, Figma,
Storybook, OpenAPI, design tokens, documentation, MCP) ; le dashboard est la
valeur (éditer, régénérer, styler, exporter, partager) ; **le MCP est un point
d'entrée parmi d'autres, jamais le produit**. Le plugin Claude fait une seule
chose — *Generate teaser* — puis ouvre `shipteaser.com/video/:id`.

Ce document réaligne les documents 02–05. Ce qui n'est pas amendé ici reste
valable.

---

## 1. Le constat qui rend le réalignement naturel

**ShipTeaser est déjà context-first — pour une seule source.** La chaîne
URL → extraction Playwright → `LightweightBrandProfile` → `mineClaims` →
director → render est exactement l'architecture demandée : une source, une
représentation interne, un moteur qui ne connaît que la représentation.

Le réalignement n'est donc pas un pivot, c'est une **généralisation** : chaque
source future (Figma, Storybook, OpenAPI…) est un *extracteur* qui produit des
fragments de la même représentation interne — profil + claims. Le MCP est le
**deuxième extracteur**, avec une particularité précieuse : l'extraction est
faite côté client par le Claude de l'utilisateur (qui lit le repo, le diff,
les composants, les tokens), et ShipTeaser reçoit du contexte déjà structuré.

`mineClaims` (`pipeline/src/v2/claims.ts`) est le point de convergence rêvé :
il consomme un `ProfileLike`, produit des `Claim[]` typés
(`benefit|proof|mechanism|number|social`) avec `source` et `strength`, sous la
règle « texte verbatim, invention interdite ». Un bundle de contexte poussé =
des claims supplémentaires avec des sources comme `git.diff`,
`component.copy`, `changelog` — la règle verbatim-first s'applique telle
quelle, et le director en aval ne voit aucune différence.

---

## 2. Ce que la directive dissout dans le plan précédent

C'est la partie la plus importante : le réalignement **supprime** les deux
plus gros problèmes du build.

### 2.1 La boucle de qualification côté client disparaît

La spec faisait du client le traducteur dev → marketing : schémas `describe()`
directifs, `min()` anti-paresse, boucle `quality_flags` → corriger →
rappeler `prepare_brief`, `ready_to_render: false` bloquant. Tout ce
mécanisme déplaçait l'intelligence chez le client — c'est exactement ce que la
directive refuse.

Context-first : la traduction est le travail du **moteur**, comme elle l'est
déjà pour la source URL (personne ne demande à un site d'écrire son brief —
on extrait). Le client pousse du contexte brut mais riche ; `mineClaims` et le
director en font la matière marketing. La qualité ne vient plus d'un
formulaire bien rempli mais de **plus de contexte en entrée + l'édition au
dashboard en sortie** (revise-with-AI et l'éditeur existent déjà :
`web/pages/api/revise.ts`, `EditPanel`).

Conséquence : **jamais bloquant**. `generate_teaser` rend toujours — comme la
démo URL. Les avertissements de qualité (« pas de métrique chiffrée dans le
contexte ») sont retournés à titre indicatif et visibles au dashboard, pas
opposés au client.

### 2.2 Le problème de frontière de packages s'évapore

L'option A (mirrorer les guards d'angles et la qualification dans `web/`,
`02-plan.md` §4.3) existait parce que `prepare_brief` devait être un appel
Claude **synchrone dans la route web** — et que `web/` ne peut pas importer le
pipeline.

Si la compréhension du contexte est le travail du moteur, elle se fait **côté
pipeline, où elle vit déjà**. La route MCP devient : auth → validation Zod du
bundle → stockage → `enqueueJob` → URL de retour. Zéro logique métier dans
`web/` — le principe « wrapper fin » de la spec d'origine, enfin réalisable,
précisément parce qu'on a cessé de vouloir une qualification synchrone.

Ce qui reste mirroré : l'enum d'angles (3 valeurs) et le schéma du bundle.
Des constantes, pas de la logique — le niveau de duplication que le repo
pratique déjà (`templates.ts`).

### 2.3 La skill cliente devient triviale

`03-adequation-besoin.md` s'inquiétait : la skill était le composant le plus
délicat (le traducteur) et n'était pas planifiée. Réalignée, la skill fait ce
que Joao décrivait littéralement : *fetch context, send*. Lire le diff, les
composants touchés, les tokens, le changelog ; les ranger dans le bundle ;
appeler `generate_teaser` ; ouvrir l'URL retournée. Plus de boucle de
correction, plus d'expertise marketing embarquée. Elle redevient livrable en
une journée — et le trou n°2 de `03` (pas de screen recording) reste vrai
mais cesse d'être structurel : le bundle accepte des URLs d'assets, le
dashboard permet d'en ajouter après coup.

---

## 3. La nouvelle surface MCP

Un tool, plus un de courtoisie :

### `generate_teaser` — la seule action

Input : un **ContextBundle** — le format d'ingestion du produit, pas un
schéma propre au MCP. Les futurs extracteurs serveur (Figma, Storybook…)
produiront le même format.

```ts
const ContextBundle = z.object({
  // Résolution de brand : par URL normalisée (unique (user_id, url) existe
  // déjà sur brand_profiles). Profil absent → un job extract est enchaîné.
  product_url: z.string().url(),

  feature: z.object({
    name: z.string().min(3).max(80),
    description: z.string().min(20).max(1000),   // ce que ça fait, pour qui
  }),

  // Chaque source est optionnelle et typée. Le moteur en fait des claims.
  sources: z.object({
    git_diff_summary: z.string().max(4000).optional(),   // résumé, pas le diff brut
    changelog: z.string().max(2000).optional(),
    component_copy: z.array(z.string().max(300)).max(30).optional(), // textes UI réels
    design_tokens: z.record(z.string()).optional(),      // couleurs, fonts — croisés avec le brand kit
    docs_excerpts: z.array(z.string().max(1000)).max(10).optional(),
    metrics: z.array(z.string().max(200)).max(5).optional(),  // chiffres réels uniquement
  }).default({}),

  visual_assets: z.array(z.object({
    url: z.string().url(),
    type: z.enum(['screen_recording','screenshot','logo','other']),
    description: z.string().max(200),
  })).max(10).optional(),

  angle: z.enum(['mechanism','pain_point','fomo']).optional(), // absent → guards du pipeline
  format: z.enum(['9x16','16x9','1x1']).default('9x16'),
});
```

Output :

```json
{
  "video_url": "https://shipteaser.com/video/<job_id>",
  "job_id": "…",
  "eta_seconds": 120,
  "context_notes": ["no numeric metric found — the proof beats will lean on copy"]
}
```

Le plugin ouvre `video_url`. C'est la page qui montre le progrès du render,
puis la vidéo, puis les actions — éditer, régénérer, styler, exporter. La
relation client se noue là, pas dans le terminal.

### `get_render_status` — conservé, rétrogradé

Courtoisie CLI (savoir quand c'est prêt sans quitter le terminal). Même
façade `getJobRecord` + `friendlyError`. Ce n'est plus un maillon du funnel.

### Supprimés

`prepare_brief`, `get_brand_profile`, `list_brands`. Le premier est absorbé
par le moteur ; les deux autres perdaient leur raison d'être — la brand se
résout par `product_url`, et le dashboard montre déjà tout.

---

## 4. Le trajet du contexte

```
Claude client (skill) ──ContextBundle──▶ POST /api/mcp  (auth clé, Zod)
                                            │  bundle → object storage (précédent input_spec_key)
                                            │  enqueueJob kind='manual', config.context_key
                                            ▼
                                    render_jobs (queue existante)
                                            ▼
worker ──▶ pipeline : profil (extrait ou existant) ⊕ bundle ──▶ mineClaims merge
                                            ▼
                          selectAngle (guards existants) ─▶ director V2 ─▶ render
                                            ▼
                              dashboard shipteaser.com/video/:id
```

Points d'appui, tous existants : `unique (user_id, url)` sur `brand_profiles`
pour la résolution de brand ; `specStore`/`input_spec_key` comme précédent
exact du « gros payload via storage, clé sur le job » ; `mineClaims` comme
point de fusion ; l'index « un manual en vol par compte » comme garde-fou.

### Phasage

- **v0 — zéro modification du pipeline.** Le bundle est condensé côté web en
  un `ProfileLike` enrichi écrit dans `render_jobs.brand_profile` (colonne
  existante, précédent existant : le worker la remplit déjà pour les demos) +
  `config.angle`. Le pipeline consomme sans savoir que la source est un repo.
  Limite assumée : le contexte passe par le goulot du profil.
- **v1 — fusion de claims native.** `mineClaims` accepte des claims poussés
  (sources `git.*`, `component.*`) fusionnés aux claims minés. Modification
  additive de `claims.ts` + un argument CLI + 2 lignes dans `worker.ts` pour
  transmettre `context_key`. **Touche le worker** — écart au périmètre à
  valider explicitement, comme l'exception dashboard de `04` (borné :
  transmission d'argument, pas de logique).

---

## 5. Ce qui survit inchangé des documents 02–05

| Élément | Statut |
|---|---|
| `api_keys` (sans `brand_ids`), clé self-service, section settings (04) | **Inchangé** — infrastructure de compte, indépendante de la surface |
| Débit quota atomique `UPDATE … RETURNING` (05 §2.2) | **Inchangé** — se déclenche dans `generate_teaser` |
| Jobs en `kind='manual'`, zéro migration CHECK (05 §2.3) | **Inchangé** |
| Taxonomie V2 exposée (02, décision 1) | **Inchangé** — `angle` optionnel du bundle |
| Streamable HTTP stateless sans Redis (05 §2.4) | **Inchangé** |
| `app/api/mcp/route.ts`, seul fichier App Router (02) | **Inchangé** |
| zod ≥ 3.25, modèle en paramètre (05 §1) | **Inchangé** |
| Migration `angle` optionnelle | **Inchangée** |
| Table `briefs` (02) | **Remplacée** — plus de brief itératif ; le bundle stocké (storage + `context_key`) le remplace. Une migration de moins encore. |
| `POST /api/v1/briefs` (02, « le gros morceau ») | **Supprimé** en tant que route de qualification synchrone. |
| Option A/B/C (02 §4.3) | **Caduque** — le problème qu'elle résolvait a disparu. |
| `list_brands` (03) | **Supprimé** — résolution par `product_url`. |
| Skill « livrable jumeau » (03) | **Maintenue, dégonflée** — collecte + un appel, plus de traduction. |

---

## 6. Lecture business (résumé de la directive, pour mémoire)

Le MCP est un **canal d'acquisition** et une expérience power-user — « generate
launch videos directly from Claude Code » attire les développeurs — mais le
produit reste ShipTeaser : l'interface, la relation client, l'upsell, les
analytics, et un marché plus large que les seuls développeurs. Chaque source
ajoutée élargit le marché ; le moteur et le dashboard restent le cœur. La
surface MCP minimale (un tool) est aussi la moins coûteuse à maintenir pendant
que le produit évolue.

---

## 7. Effet net sur l'effort

| | Plan 02/05 | Réaligné |
|---|---|---|
| Migrations | 2 + 1 optionnelle | **1** (`api_keys`) + 1 optionnelle (`angle`) |
| Routes nouvelles | 4 (`/api/v1/*`) + MCP | **1 façade status** + MCP (v0) |
| Appel Claude côté web | 1 (qualification Haiku) | **0** |
| Logique mirrorée | guards + qualification | **constantes seulement** |
| Gros morceau | `POST /api/v1/briefs` | **le ContextBundle et sa condensation v0** — nettement plus petit |
| Skill cliente | complexe, non planifiée | **triviale, planifiable** |
| Pipeline/worker | intacts | v0 : intacts ; v1 : touche additive à valider |

Le chemin critique change de nature : ce n'est plus « écrire la
qualification », c'est « définir le format d'ingestion » — un choix de
produit qui servira toutes les sources futures, MCP compris.
