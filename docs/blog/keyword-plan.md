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
| 12 | ai video vs studio production | tech | I | Where generated video is fine and where it reads as cheap | todo |
| 13 | pitch video for a web3 protocol | web3 | I | Explaining a protocol without a whiteboard | todo |
| 14 | brand assets a startup needs at seed stage | tech | I | The smallest brand system that still holds | todo |
| 15 | memecoin launch visual identity | web3 | I | Speed as a craft discipline, not an excuse for slop | todo |
| 16 | video content calendar for startups | tech | I | Planning a month of cuts from one build | todo |
| 17 | gaming and metaverse trailers | web3 | C | Trailer beats borrowed from games, applied to launches | todo |
| 18 | video for a saas landing page hero | tech | I | The film above the fold, and what it must not do | todo |
| 19 | projection mapping for a product launch event | web3 | C | When a launch deserves a room instead of a feed | todo |
| 20 | art direction for tech brands | tech | C | Why the same components look expensive or cheap | todo |
| 21 | conference recap video for crypto teams | web3 | I | Three days of booth footage into something usable | todo |
| 22 | 3d product animation for a software launch | tech | C | When 3D pays for itself and when it is decoration | todo |
| 23 | nft collection reveal video | web3 | I | The reveal beat, and why most of them land flat | todo |
| 24 | how many videos does a startup actually need | tech | I | One build, several cuts, versus several productions | todo |

Collision watch, check with `grep` before writing:

- Row 21 sits next to row 3, now published as `crypto-conference-booth-content`.
  That post is the assets you bring to the booth; row 21 is what you cut
  afterwards. It already carries a short "after the doors close" section on the
  follow up, so read it first: row 21 holds only if it stays on the edit itself
  (what to shoot, how to assemble three days of footage), otherwise merge it.
- Row 23 is close to the published `nft-marketing-video`. Read that post first;
  if the reveal is already covered there, extend it and mark row 23 `dropped`.
- Row 11 was published on 2026-09-03 as `rebranding-a-crypto-project`, after
  checking it against `web3-branding`, which already carried a "Rebranding
  without losing the community" h2 and a matching FAQ entry. It was kept as its
  own URL because rebranding is one section of six in that post, not its whole
  subject (the test that sent row 6 to the Dropped table). The new post stays on
  the migration: the surfaces you do not control, the queue times that set the
  date, the single switch day, the announcement package. The identity system
  itself remains the subject of `web3-branding`, which now links to it. Anything
  further on what an identity *contains* extends that post, not this one.
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
