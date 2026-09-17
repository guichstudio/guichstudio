# BuildLore blog: keyword plan

The publishing queue. The daily routine takes the **first row with status
`todo`**, writes it, publishes it, and flips it to `done` with the date.

Rules:

- One keyword, one URL. Never two rows targeting the same intent.
- **The queue is ordered by winnability, not by preference.** The top row is the
  one this domain can realistically rank for soonest. Take rows in order, do not
  cherry pick further down because a topic looks more fun.
- Alternate clusters when possible, so neither side of the site goes stale.
- Commercial-intent rows (marked **C**) matter most for leads, informational
  rows (**I**) build the surface that AI answers cite. Keep roughly one C for
  every two I.
- Une ligne `drafted` a déjà son fichier dans `docs/blog/drafts/` : le runbook le
  déplace au lieu de le réécrire (Étape 2).
- Adding rows is expected. When a row turns out to be off-ICP or to collide
  with a published post, mark it `dropped` with the reason instead of deleting
  it, so it does not come back.

## Choosing a keyword (added 2026-08-24)

The first twelve posts targeted head commercial terms: `motion design agency`,
`crypto video production`, `web3 branding`, `product launch video`. Those are
contested by agencies with years of accumulated links. A domain this young does
not reach page one on them, and the Search Console data confirms it: zero
impressions on any of them in three months.

Every new row must pass these four tests before it goes in the queue:

1. **Four words or more, or question form.** `landing page video` is a head
   term. `video for a saas landing page hero` is a query a real buyer types.
   Question phrasings (`how much does...`, `what to...`, `do we need...`) are
   the cheapest wins because they are long, specific, and they are what
   assistants quote.
2. **Buyer-side, always.** Per `EDITORIAL.md` section 2: if the searcher wants
   to *make* the asset in After Effects, it is the wrong row. Tool comparisons,
   format specs and software questions bring designers, not clients.
3. **A situation, not a category.** The best rows name a moment in the buyer's
   year: a seed round, an exchange listing, a conference, a rebrand. Situations
   are specific enough to rank and they map to a budget that already exists.
4. **No overlap with a published post.** `grep` the content directory first.
   Same intent as an existing URL means extending that post, not opening a
   second one.

Ordering is editorial judgment, not tool data: there is no keyword research
subscription behind this file. If one is ever added, revalidate the order
against real volume and difficulty numbers before trusting it.

## Before adding more volume, read this (2026-08-24)

Search Console, two exports pulled on 2026-08-24:

- **Performance**, three months to 2026-08-22: 102 impressions, **0 clicks**.
  Only three queries reported, all navigational: `buildlore` (3), `build lore`
  (2), `polycoolapp` (1). The homepage alone took 90 of the 102 impressions.
  Zero impressions on any targeted commercial keyword.
- **Coverage**: **9 pages indexed, 42 not indexed.** Of those, 36 are
  "Détectée, actuellement non indexée", meaning Google knows the URL from the
  sitemap and has not spent the crawl budget to fetch it. Between 2026-08-13
  and 2026-08-21 the blog published twelve posts and the index count went from
  8 to 9.

The conclusion that matters for this file: **keyword choice is not currently the
binding constraint, indexation is.** A better targeted post that never gets
crawled ranks exactly as well as a badly targeted one. Fixing the targeting is
still worth doing, and this queue does it, but on its own it will not move the
numbers.

The three things that gate everything upstream of this file:

1. **The 33 thin `/work` pages.** Median project description is about 30 words.
   They are two thirds of the sitemap, they hold zero impressions, and they are
   the bulk of the 36 uncrawled URLs. They spend crawl budget and they tell
   Google the domain is mostly filler. Either give each one real content
   (context, problem, approach, outcome, 150 to 300 words) or take them out of
   the sitemap and keep `/work` as a single page.
2. **No inbound links.** Nothing points at this domain, so there is no reason
   for Google to raise its crawl budget. Client credits (Fantasy.top, Pump.fun,
   Wasabi, Gondi, H Company are all on `/work`), agency directories and the
   social profiles are the accessible starting points.
3. **Cadence.** One post a day into an index that absorbs one page a month is
   not compounding, it is queueing. Consider slowing to two or three posts a
   week and spending the freed time on points 1 and 2. This is Louis' call, the
   routine keeps running daily until he says otherwise.

Also worth clearing while in Search Console: the coverage export lists **3 pages
with a redirect and 1 page returning 404** among the known URLs. The export only
gives counts, so the URLs have to be read from the GSC interface directly.

## Published

| Date | Slug | Keyword | Cluster |
|---|---|---|---|
| 2026-08-13 | `web3-launch-video` | web3 launch video | web3 |
| 2026-08-13 | `how-to-choose-a-web3-marketing-agency` | web3 marketing agency | web3 |
| 2026-08-13 | `brand-video-for-tech-startups` | brand video for startups | tech |
| 2026-08-13 | `crypto-video-production` | crypto video production | web3 |
| 2026-08-14 | `product-launch-video` | product launch video | tech |
| 2026-08-15 | `nft-marketing-video` | nft marketing video | web3 |
| 2026-08-16 | `saas-explainer-video` | saas explainer video | tech |
| 2026-08-17 | `token-launch-marketing` | token launch marketing | web3 |
| 2026-08-18 | `motion-design-agency` | motion design agency | tech |
| 2026-08-19 | `web3-branding` | web3 branding | web3 |
| 2026-08-22 | `startup-video-marketing-strategy` | startup video marketing strategy | tech |
| 2026-08-23 | `crypto-community-content` | crypto community content | web3 |
| 2026-08-24 | `teaser-video-for-app-launch` | teaser video for app launch | tech |
| 2026-08-25 | `discord-and-telegram-visual-assets` | discord and telegram visual assets | web3 |
| 2026-08-26 | `how-much-does-a-brand-video-cost` | how much does a brand video cost | tech |
| 2026-08-27 | `crypto-conference-booth-content` | crypto conference booth content | web3 |
| 2026-08-28 | `in-house-designer-vs-creative-agency` | in house designer vs creative agency | tech |
| 2026-08-29 | `exchange-listing-announcement-assets` | exchange listing announcement assets | web3 |
| 2026-08-30 | `airdrop-announcement-graphics` | airdrop announcement graphics | web3 |
| 2026-08-31 | `video-for-a-seed-fundraising-deck` | video for a seed fundraising deck | tech |
| 2026-09-01 | `creator-seeding-for-web3` | creator seeding for web3 | web3 |
| 2026-09-02 | `how-to-give-feedback-on-a-video-edit` | how to give feedback on a video edit | tech |
| 2026-09-03 | `rebranding-a-crypto-project` | rebranding a crypto project | web3 |
| 2026-09-04 | `ai-video-vs-studio-production` | ai video vs studio production | tech |
| 2026-09-05 | `pitch-video-for-a-web3-protocol` | pitch video for a web3 protocol | web3 |
| 2026-09-06 | `brand-assets-a-startup-needs-at-seed-stage` | brand assets a startup needs at seed stage | tech |
| 2026-09-07 | `memecoin-launch-visual-identity` | memecoin launch visual identity | web3 |
| 2026-09-08 | `video-content-calendar-for-startups` | video content calendar for startups | tech |
| 2026-09-09 | `gaming-and-metaverse-trailers` | gaming and metaverse trailers | web3 |
| 2026-09-10 | `video-for-a-saas-landing-page-hero` | video for a saas landing page hero | tech |
| 2026-09-12 | `projection-mapping-for-a-product-launch-event` | projection mapping for a product launch event | web3 |
| 2026-09-13 | `art-direction-for-tech-brands` | art direction for tech brands | tech |
| 2026-09-14 | `conference-recap-video-for-crypto-teams` | conference recap video for crypto teams | web3 |
| 2026-09-15 | `3d-product-animation-for-a-software-launch` | 3d product animation for a software launch | tech |
| 2026-09-16 | `nft-collection-reveal-video` | nft collection reveal video | web3 |
| 2026-09-17 | `how-many-videos-does-a-startup-need` | how many videos does a startup actually need | tech |

> Note: the three seed posts share a launch date because they shipped with the
> blog itself, and `crypto-video-production` was published the same day on Louis'
> explicit call. From here on it is strictly one per day.
>
> Note 2026-08-17: the machine clock was a day behind at the start of that day's
> run, so the Step 0 cadence gate read `saas-explainer-video` (2026-08-16) as
> "already published today" and stopped. It was yesterday's post. Check the clock
> against an external source before trusting `git log --since=midnight`.

## Queue

Reordered 2026-08-24 against the four tests above. Head terms were narrowed to
the situation a buyer is actually in when they search.

Row numbers are stable: a published row is removed from this table but the
remaining numbers keep their original value, so the collision notes below stay
valid.

| # | Keyword | Cluster | Type | Angle | Status |
|---|---|---|---|---|---|

**The queue is empty as of 2026-09-17.** Row 24 was the last `todo` row. The
daily routine has nothing to take tomorrow and will stop at Step 1 until rows
are added. New rows must pass the four tests in "Choosing a keyword" above, and
the note from 2026-08-24 still stands: indexation, not targeting, is the binding
constraint, so adding volume here is not the highest value next move. This is
Louis' call.

Collision watch, check with `grep` before writing:

- Row 24 was published on 2026-09-17 as `how-many-videos-does-a-startup-need`, after reading
  `startup-video-marketing-strategy` and `video-content-calendar-for-startups` in full.
  `grep -rin "how many videos"` returned exactly two hits, one FAQ entry in each: "How many
  videos does a startup need per quarter?" and "How many videos should a startup publish per
  month?". The count is one FAQ answer of five in both posts and never their subject: the same
  test that kept rows 11, 16, 18, 20, 21 and 23 and dropped row 6. So the row held, on the
  condition it stayed on the counting method itself, and it does: the production versus cut
  distinction as two purchases hiding in one number, the ninety day moment list and the noun
  assigned to each entry, the five triggers that force a production and the six that only look
  like triggers, the year shaped by stage where the production column barely grows, and the
  over-count and under-count failures. It re-argues neither where the material comes from (the
  four slots and the build economics stay in `startup-video-marketing-strategy`, now linking
  here) nor the operating grid of dates, owners and lead times (which stays in
  `video-content-calendar-for-startups`) nor what moves a quote (which stays in
  `how-much-does-a-brand-video-cost`). Anything further on planning a quarter extends
  `startup-video-marketing-strategy` rather than this one.

- Row 22 was published on 2026-09-15 as `3d-product-animation-for-a-software-launch`, after
  `grep -ri "3d"` across every published post. 3D appears in nine of them and never as a
  subject: one table row in `how-much-does-a-brand-video-cost` (technique as a cost driver),
  one bullet in `art-direction-for-tech-brands` (lighting logic), one line of the master
  material list in `startup-video-marketing-strategy` and in `video-content-calendar-for-startups`,
  one atmosphere sentence plus one FAQ line in `web3-launch-video`, one FAQ line each in
  `crypto-video-production`, `web3-branding` and `projection-mapping-for-a-product-launch-event`,
  and one discipline in a list in `in-house-designer-vs-creative-agency`. The same test that
  kept rows 11, 16, 18 and 20 and dropped row 6. The new post is the technique decision itself:
  the four situations where there is nothing to film, the five decoration renders and what
  convinces instead, the front loaded schedule (modelling, blocking, animation, render, comp)
  and why a change after rendering costs the render again, the asset versus sequence purchase,
  and the four approval gates. It re-argues neither what moves a quote (which stays in
  `how-much-does-a-brand-video-cost`, now linking here) nor the claim versus slot sort (which
  stays in `ai-video-vs-studio-production`) nor the four launch decisions (which stay in
  `product-launch-video`). Anything further on pricing extends the cost post rather than this one.

- Row 20 was published on 2026-09-13 as `art-direction-for-tech-brands`, after checking it
  against every published post: `grep` for "art direction for tech" returned nothing, and the
  posts that mention art direction in passing were read in full. The three closest are
  `brand-assets-a-startup-needs-at-seed-stage` (the static kit, item by item),
  `motion-design-agency` (how to brief a studio) and `in-house-designer-vs-creative-agency`
  (who to hire). Each carries art direction as one line or one bullet, never as its subject:
  the same test that kept rows 11, 16 and 18 and dropped row 6. The new post is the layer
  above the assets: where the cheap tells come from (the seven tells table), the seven
  decisions that make up a direction, repetition as the free part, which slots deserve
  direction under time pressure, and who holds it. It re-argues neither what the kit
  contains (which stays in `brand-assets-a-startup-needs-at-seed-stage`, now linking here)
  nor the hiring decision (which stays in `in-house-designer-vs-creative-agency`) nor how to
  brief a studio (which stays in `motion-design-agency`). Anything further on what a seed
  brand needs extends the seed stage post rather than this one.

- Row 19 was published on 2026-09-12 as `projection-mapping-for-a-product-launch-event`, after
  checking it against every published post: `grep` for projection mapping returned nothing, so
  there was no collision to resolve. The closest neighbour is `crypto-conference-booth-content`,
  and the two are opposite situations: that post is a stand in a loud bright hall you do not
  control, this one is an evening in a venue you do, with a dark room, a fixed audience and a
  surface designed against. The post is the installation itself: the wall as content rather than
  screen, the flat-screen test that sends a job to an LED wall instead, the five decisions
  (surface, ambient light, projector count, show format, access window), the three formats
  (ambient, reveal, responsive) and the capture plan. It re-argues neither launch sequencing
  (which stays in `web3-launch-video`, now linked) nor booth assets (which stay in
  `crypto-conference-booth-content`, which now links here). Anything further on what a launch
  film contains extends `product-launch-video` rather than this post.

- Row 18 was published on 2026-09-10 as `video-for-a-saas-landing-page-hero`, after
  checking it against `saas-explainer-video`, which is the closest published post. That
  post carries an "Above the fold" row in its placement table and one paragraph on the
  film dying in the hero, one section of six rather than its subject: the same test that
  kept rows 11 and 16 and dropped row 6. The new post is the slot itself: the permission
  difference between corroboration and comprehension, the six things the hero must not do,
  the loop versus film versus still choice, the six to twelve second length and the page
  weight brief, and the three video slots on one page sorted by consent. It re-argues
  neither the explainer format nor the first ten seconds of a film, and
  `saas-explainer-video` now links here. Anything further on what an explainer contains
  extends that post rather than this one. `teaser-video-for-app-launch` mentions a website
  hero only as one surface in a list, so it is untouched.

- Row 21 was published on 2026-09-14 as `conference-recap-video-for-crypto-teams`, after
  reading `crypto-conference-booth-content` in full, as the note below required. That post
  carries the recap as one "after the doors close" section of six, one bullet in the
  sequencing list and one FAQ entry, never as its subject: the same test that kept rows 11,
  16, 18 and 20 and dropped row 6. So the row held, on the condition it stayed on the edit
  itself, and it does: the three claims a recap can make, the six row shot list, the nightly
  offload and log pass, the three cuts from one capture effort, the five beat structure for a
  muted feed, and the forty eight hour window. It re-argues none of the booth assets (which
  stay in `crypto-conference-booth-content`, now linking here) nor the calendar slots (which
  stay in `video-content-calendar-for-startups`). Anything further on what a stand needs
  extends the booth post rather than this one.
- Row 23 was published on 2026-09-16 as `nft-collection-reveal-video`, after reading
  `nft-marketing-video` in full, as the note below required, and re-reading
  `gaming-and-metaverse-trailers`. `nft-marketing-video` is pre mint persuasion: what the
  film has to establish instead of the art loop, and the four moment mint kit. It uses
  "reveal" as a synonym for that film and its "After" row is holder cuts, so the reveal
  hour itself is never its subject: the same test that kept rows 11, 16, 18, 20 and 21 and
  dropped row 6. So the row held, on the condition it stayed on the reveal beat itself, and
  it does: reveal hour as a scheduled event rather than a metadata flip, the three audiences
  watching at the minute, the five reasons a reveal lands flat, the four assets (holding
  pattern, reveal cut, holder frame kit, day after cut), the forty minute window and why
  mint day has no production capacity, and the five line pre reveal checklist. It re-argues
  neither what the marketing film establishes nor the mint asset schedule (both stay in
  `nft-marketing-video`, now linking here) nor the trailer beats (which stay in
  `gaming-and-metaverse-trailers`). Anything further on what the pre mint film contains
  extends `nft-marketing-video` rather than this one.
- Row 17 was published on 2026-09-09 as `gaming-and-metaverse-trailers`, after checking
  it against every published post: `grep` for gaming, metaverse and trailer returned
  nothing, so there was no collision to resolve. The post is the trailer format itself:
  why the cinematic and the feature reel both get skipped, the six beats, the verb as the
  thing being sold, the three cuts from one capture effort, what is shootable before the
  build is playable, and the separate feed edit. It re-argues neither launch sequencing
  (which stays in `web3-launch-video`, now linked) nor the world-before-pieces case
  (which stays in `nft-marketing-video`, which now links here). Anything further on when
  a launch film ships extends `web3-launch-video` rather than this post.
- Row 11 was published on 2026-09-03 as `rebranding-a-crypto-project`, after
  checking it against `web3-branding`, which already carried a "Rebranding
  without losing the community" h2 and a matching FAQ entry. It was kept as its
  own URL because rebranding is one section of six in that post, not its whole
  subject (the test that sent row 6 to the Dropped table). The new post stays on
  the migration: the surfaces you do not control, the queue times that set the
  date, the single switch day, the announcement package. The identity system
  itself remains the subject of `web3-branding`, which now links to it. Anything
  further on what an identity *contains* extends that post, not this one.
- Row 12 was published on 2026-09-04 as `ai-video-vs-studio-production`. It sorts
  assets by whether they carry a claim or fill a slot, and it carries the cost
  comparison for generation versus a build. It stays out of channel planning and
  out of the one build, several cuts argument, so row 16 and row 24 are still
  clear; anything further on where generated work is acceptable extends this post
  rather than opening a second URL.
- Row 13 was published on 2026-09-05 as `pitch-video-for-a-web3-protocol`, after
  checking it against `video-for-a-seed-fundraising-deck` (investor process and
  the deck cuts), `web3-launch-video` (the launch film and its sequencing) and
  `saas-explainer-video` (a product with an interface to film). The new post
  stays on making a mechanism legible when there is no product to show: the
  audience split, the abstraction ladder, what goes on screen instead of a system
  diagram, the four beats. Anything further on launch sequencing extends
  `web3-launch-video`, and anything on the fundraising process extends the seed
  deck post, rather than opening a second URL.
- Row 14 was published on 2026-09-06 as `brand-assets-a-startup-needs-at-seed-stage`, after
  checking it against `brand-video-for-tech-startups` (the four films and their order),
  `web3-branding` (the identity system, web3 side) and `in-house-designer-vs-creative-agency`
  (the hiring decision). The new post is the static kit itself: the seven items, what waits,
  the handover to non designers, the build order and the four checks. It carries no video
  argument beyond one bullet, so `brand-video-for-tech-startups` keeps that intent and now
  links here. Anything further on what a film should be extends that post, and anything on
  identity for a protocol extends `web3-branding`, rather than opening a second URL.
- Row 15 was published on 2026-09-07 as `memecoin-launch-visual-identity`, after checking
  it against `token-launch-marketing` (the six week sequencing of a token launch),
  `web3-branding` (the identity system itself) and `crypto-community-content` (the weekly
  stream, which already carries meme ready frames). The new post is the compressed case:
  the five decisions that fit in one sitting, what the mark has to survive at 32 pixels,
  the kit a non designer posts from, and what waits until week two. It carries no launch
  sequencing beyond one paragraph, so `token-launch-marketing` keeps that intent and now
  links here. Anything further on what an identity contains extends `web3-branding`, and
  anything on the weekly template rhythm extends `crypto-community-content`, rather than
  opening a second URL.
- Row 16 was published on 2026-09-08 as `video-content-calendar-for-startups`, after checking
  it against `startup-video-marketing-strategy`, which is the closest published post. That post
  answers where a quarter of video comes from (one build, four slots), and the calendar is one
  h2 of six inside it, not its subject. It was kept as its own URL on the same test that kept
  row 11 and dropped row 6: one section of six holds, a whole subject does not. The new post
  stays strictly on the operating layer, the inventory pass, the cut/assemble/build sort, lead
  times, the four week grid, the reserved week, the four fields per cell and the Friday pass.
  It re-argues neither the four slots nor the build economics, and
  `startup-video-marketing-strategy` now links to it. Anything further on where the assets come
  from extends that post rather than this one.
- Row 6 was dropped on 2026-08-30, see the Dropped table. The collision was not
  with `product-launch-video` or `teaser-video-for-app-launch`, which carry one
  brief section each, but with `motion-design-agency`, whose whole subject is
  how to brief a studio. If the queue ever needs that intent again, extend that
  post rather than opening a second URL.

## Dropped

| Keyword | Reason |
|---|---|
| after effects tutorial | Designer-side intent, not buyer-side. Wrong reader entirely. |
| best video editing software | Tool comparison, brings editors, not clients. |
| free video maker | Free-tool intent, no overlap with an agency engagement. |
| smart contract audit | Named as not included in the service scope. |
| social media video sizes and formats | Spec-sheet intent. Brings editors looking for a ratio chart, not buyers. Fails test 2. |
| animated logo for startups | Dominated by logo generators and marketplace listings. Tool intent, wrong reader, unwinnable SERP. |
| landing page video | Head term, narrowed to row 18 (`video for a saas landing page hero`). |
| brand guidelines for startups | Head term, narrowed to row 14 (`brand assets a startup needs at seed stage`). |
| 3d product animation | Head term, narrowed to row 22 (`3d product animation for a software launch`). |
| projection mapping for events | Head term, narrowed to row 19 (`projection mapping for a product launch event`). |
| how to brief a creative agency | Narrowed to row 6 (`how to brief a video agency`), closer to what we sell. |
| memecoin marketing | Head term and a messy SERP. Narrowed to row 15 (`memecoin launch visual identity`). |
| web3 pitch video | Narrowed to row 13 (`pitch video for a web3 protocol`). |
| video for fundraising deck | Narrowed to row 8 (`video for a seed fundraising deck`). |
| exchange listing announcement | Narrowed to row 5 (`exchange listing announcement assets`). |
| how to brief a video agency | Row 6, dropped 2026-08-30. Same intent as the published `motion-design-agency` post, titled "how to brief one so the first cut lands": it already holds the four decisions, the reference set, the approval path, how to read the proposal, and an FAQ entry "How do I brief a motion design agency?". A second URL would cannibalise it. Extend that post if the angle needs more room. |
