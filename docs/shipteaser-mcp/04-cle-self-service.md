# ShipTeaser MCP — Clé API en self-service

Ajout au périmètre décidé le 2026-07-27 : **le client se connecte à
ShipTeaser, génère sa clé API lui-même, et la colle dans son Claude Code.**

La spec §2 supposait des clés créées à la main côté serveur (« client_name:
"joao" »). Ce document couvre l'écart.

---

## Pourquoi ça change les choses

Sans self-service, la remise d'une clé est un geste manuel par client :
générer, hasher, insérer en base, transmettre par un canal privé — plus
transmettre le `brand_id`, qui n'est découvrable nulle part
(cf. `03-adequation-besoin.md`, trou n°1). Ça ne passe pas l'échelle au-delà
du premier utilisateur test.

Avec self-service, l'onboarding devient : se connecter → *Generate API key* →
copier → `claude mcp add`. Et **le trou n°1 disparaît** : la page qui montre
la clé peut montrer les brands du compte et leurs identifiants, dans le même
écran. `list_brands` reste souhaitable comme tool (le Claude client doit
pouvoir le lire sans quitter son terminal), mais il cesse d'être un
prérequis d'onboarding.

---

## ⚠️ Écart assumé avec la spec

Section 0, « Ne pas faire » : *« toucher au worker de render, au dashboard, ou
à l'extraction Playwright »*.

Cet ajout **touche le dashboard** — une section de plus dans
`web/pages/settings.tsx`. L'écart est délibéré et borné : aucune logique de
génération, de render ou de quota n'est modifiée, on n'ajoute qu'un écran de
gestion de clés. Le worker et l'extraction restent intacts.

**Validé le 2026-07-27.** La consigne d'origine était une clôture de
périmètre, pas une interdiction de principe : les trois zones citées (worker,
dashboard, extraction) sont celles où une régression est immédiatement
visible en production, et la spec ajoutait elle-même « si un blocage dépend
d'eux, le signaler et continuer sur le reste ». C'est ce qui est fait ici —
signalé, borné, validé. Le worker et l'extraction restent hors limites.

---

## Ce qu'il y a déjà

Rien à inventer côté auth : le pattern existe et est utilisé par une vingtaine
de routes.

| Brique | Fichier | Rôle ici |
|---|---|---|
| Session navigateur | `web/lib/supabaseBrowser.ts` | `getAccessToken()` |
| Appel authentifié | `web/lib/authFetch.ts` | Bearer + erreurs lisibles |
| Auth côté serveur | `web/lib/subscription.ts` | `userFromRequest(req)` → `AuthedUser` |
| Page de réglages | `web/pages/settings.tsx` | 270 lignes, 2 sections — on en ajoute une 3ᵉ |

---

## À créer

### Routes

| Fichier | Rôle |
|---|---|
| `web/pages/api/keys/index.ts` | `GET` → liste les clés du compte (préfixe, `client_name`, quota, `created_at`, `revoked_at`) — **jamais le hash, jamais la clé**. `POST` → génère une clé, retourne le secret **une seule fois**. |
| `web/pages/api/keys/[id].ts` | `DELETE` → révocation (`revoked_at = now()`, jamais de suppression de ligne : l'historique des renders y référence). |

Les deux passent par `userFromRequest` et ne voient que les lignes
`api_keys` du `user_id` appelant.

### UI

Une section dans `settings.tsx` : liste des clés, bouton *Generate API key*,
bouton *Revoke*. Plus, dans le même bloc, **la liste des brands du compte avec
leur identifiant** — c'est ce qui rend le `brand_id` copiable sans passer par
toi.

---

## Règles de génération

- Format : `st_live_` + 32 caractères aléatoires (`crypto.randomBytes`), comme
  la spec §2. Le préfixe reste identifiable dans les logs.
- **Seul le sha256 est stocké.** `api_keys.key_hash` est déjà `not null unique`
  dans la migration prévue (`02-plan.md`).
- **Le secret n'est affiché qu'une fois**, à la création. Pas de « revoir ma
  clé » : la seule récupération possible est d'en générer une nouvelle et de
  révoquer l'ancienne. C'est ce que le stockage haché impose, et c'est ce qu'il
  faut dire clairement dans l'UI.
- Un préfixe tronqué (`st_live_a1b2…`) est conservé en clair pour que le client
  reconnaisse ses clés dans la liste.

## Modèle de menace et durcissement

Analyse du 2026-07-27 (question : « est-ce safe d'avoir une clé API ? »).
Réponse : oui — le rayon d'explosion d'une fuite est borné et réversible, à
condition des ajouts ci-dessous.

### Rayon d'explosion d'une clé volée

Le scénario réaliste n°1 est la clé commitée dans un repo public. Ce que le
voleur obtient : générer des teasers sur les brands du compte, lire des
statuts. Rien de destructif — pas de suppression, pas de modification de
compte, pas de facturation. Et c'est borné trois fois :

1. **quota mensuel**, débit atomique (`05` §2.2) — pas de course sur le
   dernier crédit ;
2. **un render en vol par compte** (index existant) — impossible d'empiler
   des jobs et de noyer le worker (concurrence 1) ;
3. **révocation en un clic**, effet immédiat.

Coût maximal connu d'avance : un mois de quota, un job à la fois.

Côté données, le flux est **sortant uniquement** : ShipTeaser ne reçoit
jamais d'accès au repo du client — son Claude lit le code et pousse un
résumé. On ne stocke que ce qu'il choisit d'envoyer. (La skill cliente doit
le dire explicitement : pas de secrets ni de code propriétaire dans le
bundle.)

### Acquis du design (rappel)

- sha256 seul en base, secret affiché une fois — une fuite de la base ne
  fuite pas les clés ;
- préfixe `st_live_` : détectable par les scanners de secrets (GitHub le
  signale), loggable tronqué sans exposer la clé ;
- révocation sans suppression (`revoked_at`), historique conservé ;
- RLS activée zéro policy sur toutes les tables touchées.

### Trois ajouts requis à l'implémentation

1. **Rate-limit sur les échecs d'auth** — quelques clés invalides par IP et
   par minute, sinon la route est scannable. Réutiliser la machinerie de
   `web/lib/security.ts` (`recordAttempt`, buckets par IP). Fail closed.
2. **`product_url` passe par `assertPublicUrl`** — la protection SSRF existe
   (`assertPublicUrl` côté web, `ssrfGuard.ts` côté pipeline) parce que le
   produit crawle des URLs ; ne pas l'oublier sur la route MCP. Sans ça, une
   clé volée devient un proxy pour sonder le réseau interne du VPS.
3. **Plafonds de taille** — `max()` Zod partout sur le ContextBundle (déjà
   dans le schéma de `06`) **plus** un plafond sur l'objet stocké, pour que
   la clé ne serve pas à remplir l'object storage.

### Détail d'implémentation qui rend le reste gratuit

La clé se cherche par son hash — `where key_hash = sha256(clé reçue)` sur
l'index unique — jamais par comparaison de chaîne : pas d'attaque par timing
possible, et le lookup est le chemin le plus rapide de toute façon.

---

### Points à trancher à l'implémentation

- **Combien de clés actives par compte ?** Une seule (simple, mais la rotation
  impose une coupure) ou plusieurs (rotation sans coupure, liste plus
  chargée). Recommandation : plusieurs, avec un plafond bas.
- **Quel `brand_ids` à la création ?** Le plus simple et le plus sûr : toutes
  les brands du compte au moment de l'appel, recalculées à chaque requête MCP
  plutôt que figées dans la colonne. Sinon une brand créée après la clé est
  invisible sans régénération.
- **Qui a droit à une clé ?** Le MCP consomme du render, donc du quota. À
  aligner sur `getSubscription` — probablement réservé aux plans payants,
  comme les templates gated de `web/lib/templates.ts`.

---

## Impact sur l'ordre d'exécution

S'insère dans `02-plan.md` sans rien déplacer :

| # | Étape | Changement |
|---|---|---|
| 1 | Migrations | inchangé — `api_keys` couvre déjà ce besoin |
| 2 | `web/lib/mcp/auth.ts` | inchangé — la vérification de clé est la même, quelle que soit son origine |
| **2 bis** | **Routes `/api/keys/*` + section settings** | **nouveau** — dépend de la migration `api_keys` uniquement, peut se faire en parallèle des étapes 3-6 |
| 3-7 | — | inchangé |

Coût : petit. Deux routes qui suivent un pattern déjà écrit vingt fois, et une
section d'UI. Le gros morceau du build reste `POST /api/v1/briefs`.
