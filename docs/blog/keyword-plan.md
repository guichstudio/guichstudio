# BuildLore blog: keyword plan

The publishing queue. The daily routine takes the **first row with status
`todo`**, writes it, publishes it, and flips it to `done` with the date.

Rules:

- One keyword, one URL. Never two rows targeting the same intent.
- Alternate clusters when possible, so neither side of the site goes stale.
- Commercial-intent rows (marked **C**) matter most for leads, informational
  rows (**I**) build the surface that AI answers cite. Keep roughly one C for
  every two I.
- Une ligne `drafted` a déjà son fichier dans `docs/blog/drafts/` : le runbook le
  déplace au lieu de le réécrire (Étape 2).
- Adding rows is expected. When a row turns out to be off-ICP or to collide
  with a published post, mark it `dropped` with the reason instead of deleting
  it, so it does not come back.

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

> Note: the three seed posts share a launch date because they shipped with the
> blog itself, and `crypto-video-production` was published the same day on Louis'
> explicit call. From here on it is strictly one per day.
>
> Note 2026-08-17: the machine clock was a day behind at the start of that day's
> run, so the Step 0 cadence gate read `saas-explainer-video` (2026-08-16) as
> "already published today" and stopped. It was yesterday's post. Check the clock
> against an external source before trusting `git log --since=midnight`.

## Queue

| # | Keyword | Cluster | Type | Angle | Status |
|---|---|---|---|---|---|
| 9 | discord and telegram visual assets | web3 | I | The asset kit a community needs on day one | todo |
| 10 | brand guidelines for startups | tech | I | The smallest brand system that still holds | todo |
| 11 | projection mapping for events | web3 | C | When a launch deserves a room instead of a feed | todo |
| 12 | 3d product animation | tech | C | When 3D pays for itself and when it is decoration | todo |
| 13 | how to brief a creative agency | tech | I | The brief that gets you a good first cut | todo |
| 14 | crypto conference booth content | web3 | I | Content built for a loud room and a passing glance | todo |
| 15 | video for fundraising deck | tech | I | What investors actually watch, and for how long | todo |
| 16 | memecoin marketing | web3 | I | Speed as a craft discipline, not an excuse for slop | todo |
| 17 | ai video vs studio production | tech | I | Where generated video is fine and where it reads as cheap | todo |
| 18 | rebranding a crypto project | web3 | C | Changing the mark without losing the community | todo |
| 19 | social media video sizes and formats | tech | I | One build, every ratio, no reshoot | todo |
| 20 | creator seeding for web3 | web3 | I | Seeding assets that creators want to use | todo |
| 21 | landing page video | tech | I | The film above the fold, and what it must not do | todo |
| 22 | exchange listing announcement | web3 | I | The announcement kit, ready before the date is public | todo |
| 23 | video content calendar for startups | tech | I | Planning a month of cuts from one shoot | todo |
| 24 | art direction for tech brands | tech | C | Why the same components look expensive or cheap | todo |
| 25 | web3 pitch video | web3 | I | Explaining a protocol without a whiteboard | todo |
| 26 | animated logo for startups | tech | I | The 2 second asset used more than any film | todo |
| 27 | gaming and metaverse trailers | web3 | C | Trailer beats borrowed from games, applied to launches | todo |
| 28 | how much does a brand video cost | tech | C | What drives the number, without quoting ours | todo |

## Dropped

| Keyword | Reason |
|---|---|
| after effects tutorial | Designer-side intent, not buyer-side. Wrong reader entirely. |
| best video editing software | Tool comparison, brings editors, not clients. |
| free video maker | Free-tool intent, no overlap with an agency engagement. |
| smart contract audit | Named as not included in the service scope. |
