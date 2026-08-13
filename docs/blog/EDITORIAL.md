# BuildLore blog: editorial policy

Source of truth for anything published on `https://www.buildlore.top/blog`.
Read this before writing a single line. Written in English because the site is
in English; internal notes stay in French.

---

## 1. Product facts (never contradict these)

**BuildLore** (buildlore.top, operated by guichstudio) is a creative agency for
tech companies and Web3 projects. It is a studio, not a software product.

**Services, as stated on the site:**

| Service | What it covers |
|---|---|
| Promo video | Motion, narrative, campaign films, 3D, concept to delivery |
| Branding | Identity, visual systems, 3D design across mediums |
| Visual installation | Projection mapping, generative environments, spatial light |
| Artistic direction | Events, shoots, live productions, campaigns |
| Design support | Ongoing social visuals, brand assets, UI touches, collateral |

**Packages** (as published in the homepage structured data):

- **Launch Sprint**, two weeks: narrative spine, teaser film, launch page art
  direction, social starter kit. Day 1-2 narrative and visual micro system,
  day 3-7 teaser, day 8-11 art direction, day 11-14 social starter kit.
- **Growth**, monthly: 3 to 5 brand assets per week, 48h response on hot
  moments, creator seeding, lore maintenance.
- **Scale**, monthly: 15 to 25 assets, quarterly cinematic video, creator
  orchestration, style governance, UX revision.

Source files and usage rights are delivered monthly.

**Explicitly NOT included** (never imply we do these):

- community moderation
- pure media buying
- smart-contract work
- full app builds

**Never invent**: prices in article copy, client results, campaign metrics,
case studies that are not on `/work`. Naming a client is only allowed if that
client already appears on `/work`.

**Clients on `/work`** (safe to name): Fantasy.top, Pump.fun, Wasabi, Gondi,
H Company, Pressiat, Eterna Labs, Domestique, AAA Lending, Guess Best,
Polycool, Rad Carter, Nganoux, Romsii.

**Contact**: Calendly `https://calendly.com/guichstudio/30min`,
guich.studio@gmail.com, Instagram @guich.studio.

---

## 2. Who we write for

Two clusters, both buyer-side, never designer-side:

- **`web3`** — founders, growth leads and marketing leads at crypto protocols,
  apps, NFT projects, exchanges. They ship on a hostile timeline and judge
  craft harshly.
- **`tech`** — founders and marketing leads at startups and tech companies who
  need brand and product video that does not look like an ad.

**Not our reader**: motion designers looking for tutorials, editors looking for
software tips, e-commerce sellers, media buyers. If an article would be most
useful to someone who wants to *make* the asset themselves in After Effects,
it is the wrong article.

---

## 3. Voice

Direct, concrete, short sentences, opinions with reasons behind them. We are
the studio that ships the work, so the authority comes from process detail, not
from adjectives.

**Banned words** (the linter fails on these): revolutionize, unleash,
seamlessly, game-changing, elevate, delve, "in today's...", unlock the power,
take it to the next level.

**🚨 Absolute rule: no em dash and no en dash, anywhere.** Use a comma, a colon,
a full stop or parentheses. The linter fails the build on `—` and `–`.

Other constraints:

- No fabricated statistics. If a number is not checkable, it does not ship.
- No outbound links except our own Calendly. No competitor links, ever.
- No stock imagery talk, no "in this article we will".
- British or American spelling, pick one per article and stay consistent.

---

## 4. Required structure (every post)

This shape is what makes a post quotable by AI Overviews and by assistants,
which is the cheapest distribution a small site gets.

1. **Intro**, two or three paragraphs. Lead with the wrong thing everyone does.
2. **`answer` field**, 35 to 80 words, self-contained, names BuildLore. It
   renders as the "Short answer" card and is the block most likely to be lifted
   verbatim by an AI answer.
3. **At least 4 `h2` sections.** One idea each. Tables and lists earn their
   place when they compress a comparison.
4. **Exactly one `cta` block**, near the end.
5. **FAQ, 3 to 5 questions**, each answer 25 to 90 words, phrased as a real
   query. Renders as an FAQ section and as `FAQPage` JSON-LD.
6. **2 or more `related` links**, internal only.
7. **900 words minimum.** Below that a post is thin and should not exist.

Internal linking, every post:

- at least one link to another blog post,
- at least one link to `/work` or `/#service-cards`,
- never a link to itself.

---

## 5. Anti-cannibalisation

One keyword, one URL. Before writing, check `docs/blog/keyword-plan.md` and
`grep` the existing posts. If the new keyword is the same intent as a published
post, do not create a second URL: extend the existing post with a new `h2`
instead and note it in the plan.

The linter fails on duplicate `keyword` values, so this is enforced, not
optional.

---

## 6. Cadence

**One post per calendar day, maximum.** A burst of three posts in one day is a
worse signal than three posts across three days. If the routine misses a day,
the gap is not recoverable: publish one, keep going.

---

## 7. Gates before publishing

```bash
cd guichstudio/landing
npm run lint:blog     # policy linter, exits 1 on any violation
npx tsc --noEmit      # types
npm run build         # also runs the linter via prebuild, regenerates sitemap
```

The linter runs as `prebuild`, so a policy violation fails the Vercel build too.
That is deliberate: fail closed rather than publish off-policy copy.
