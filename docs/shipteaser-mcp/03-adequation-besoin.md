# ShipTeaser MCP — Adéquation au besoin exprimé

Confrontation de la spec au besoin formulé par Joao (message WhatsApp,
2026-07-27) :

> « i think that's nice to be able to create a skill on my claude code that
> fetches context of the new feature and send to shipteaser using the mcp »

Trois exigences dans cette phrase : **une skill** dans son Claude Code, qui
**récupère le contexte** d'une feature, et qui **l'envoie via le MCP**.

---

## Verdict

La spec couvre entièrement la troisième, s'oppose délibérément à la deuxième,
et exclut explicitement la première — celle qui est nommée en premier.

| Exigence | Traitement dans la spec |
|---|---|
| « send to shipteaser using the mcp » | **Couvert de bout en bout.** Transport Streamable HTTP, auth par clé, 4 tools, insert en queue, suivi de statut. Rien ne manque. |
| « fetches context of the new feature » | **Refusé tel quel, par conception.** Voir ci-dessous. |
| « create a skill on my claude code » | **Hors scope**, dit deux fois : section 0 (« repo séparé plus tard ») et section 7. |

Conséquence pratique : à la livraison du build, il y aurait un serveur MCP
fonctionnel et rien pour s'en servir. Les tools devraient être pilotés à la
main, chaque prompt formulé au cas par cas.

---

## Le désaccord de fond, et pourquoi la spec a raison

Le message décrit un tuyau : *fetch* puis *send*. La spec est construite pour
refuser exactement cette forme.

Section 5.1 : « Le contexte qui sort de Claude Code est du langage dev :
diffs, noms de branches, jargon technique. […] Le schéma est le contrat qui
force la traduction — si le schéma accepte du vague, tu renders du vague. »

Les mécanismes qui matérialisent ce refus :

- `raw_context` est plafonné à 4000 caractères et marqué « Used as secondary
  signal only » ;
- les champs structurés portent des `min()` explicitement destinés à
  « interdire les réponses paresseuses » ;
- `create_teaser` exige un `brief_id` issu de `prepare_brief`, sans bypass —
  « le funnel est dans le type system ».

C'est le bon choix produit : c'est le mécanisme qui protège l'objectif
70–80 % vendable, et c'est ce qui évite de brûler des renders sur du contexte
creux.

**Mais il déplace le vrai travail dans la skill.** Elle n'est pas un tuyau :
c'est le traducteur dev → marketing. C'est le composant le plus délicat des
deux, et le seul qui ne soit pas planifié.

---

## Trois trous concrets

Dans l'ordre où ils seraient rencontrés à l'usage.

### 1. Aucun moyen de découvrir son `brand_id`

Les quatre tools prennent un `brand_id` ou un `brief_id`, aucun ne liste les
brands accessibles par la clé. Avec la décision arrêtée
(`brand_id = brand_profiles.id`, cf. `02-plan.md`), la ligne n'existe qu'après
un job `extract` réussi — donc il faut d'abord passer par le dashboard, puis
récupérer un UUID par un moyen non spécifié.

**Correctif : un cinquième tool `list_brands`.** Il lit
`api_keys.brand_ids` → `brand_profiles`, retourne `{id, url, name}`. Une
demi-heure, et c'est le tout premier appel que ferait n'importe quel client.

### 2. Une skill qui lit un repo ne peut pas produire de captures vidéo

`visual_assets` porte la mention « Screen recordings of the actual feature
dramatically improve output quality ». Or une skill qui moissonne un diff, une
PR ou un changelog ne produira jamais de screen recording.

Le chemin le plus automatisé est donc structurellement le moins bon en sortie.
Ce n'est pas un défaut de la spec, mais une attente à cadrer : soit la skill
demande explicitement un asset à l'utilisateur avant d'appeler
`create_teaser`, soit la qualité plafonne. À trancher côté skill, pas côté
MCP.

### 3. Le test de validation suppose la skill

Section 6, point 5 : « Test réel avec Joao : une clé, sa brand, une feature →
mesurer si la vidéo est vendable sans retouche. » Ce test est planifié comme
la validation du MCP, mais sans skill il ne mesure pas ce que le besoin
demande — il mesure la capacité à remplir un formulaire à la main.

---

## Recommandation

Le périmètre MCP est solide, le garder tel quel. Deux ajustements :

1. **Ajouter `list_brands`** aux tools de la v0 (§4 de la spec). Coût
   marginal, débloque le premier appel de tout client.
2. **Requalifier la skill** de « hors scope, repo séparé, plus tard » en
   livrable jumeau du même build. Sans elle, la section 6 point 5 n'est pas
   testable et le besoin exprimé reste sans réponse.

Le reste des décisions de `02-plan.md` est inchangé.
