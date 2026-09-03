import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'rebranding-a-crypto-project',
  title: 'Rebranding a crypto project without losing the community',
  metaTitle: 'Rebranding a Crypto Project Without Losing People',
  metaDescription:
    'How to rebrand a crypto project: what to keep as the constant, the surfaces you do not control, and how to migrate all of them on the same day.',
  description:
    'A crypto rebrand is a migration, not a reveal. What to keep, which surfaces you do not control, and why every one of them has to change on the same day.',
  date: '2026-09-03',
  cluster: 'web3',
  keyword: 'rebranding a crypto project',
  answer:
    'Rebranding a crypto project is a migration, not a reveal. Keep one recognisable constant, inventory every surface you do not control (exchanges, aggregators, wallets, explorers, chart tools), then switch all of them on one day with assets the community can reuse the same hour. BuildLore runs the identity work and the migration package together, because a new mark that lands on half the surfaces reads as a hack.',
  blocks: [
    {
      type: 'p',
      text: 'Most crypto rebrands are planned as a design project and end as a reveal post. The team spends six weeks on the mark, argues about the wordmark, books a date, publishes a thread at 4pm, and considers the work shipped.',
    },
    {
      type: 'p',
      text: 'Then the next morning the aggregator still shows the old icon, the exchange listing page still shows the old name, two wallets show a broken image where the token used to be, and the community is asking in Telegram whether the account has been compromised. The design was fine. The migration was never scoped.',
    },
    {
      type: 'p',
      text: 'That is the actual difficulty here, and it is not a taste problem. A normal company rebrands by changing its own website. A protocol rebrands by changing dozens of records held by people who have never heard of you and have a queue.',
    },
    {
      type: 'h2',
      text: 'A rebrand is a migration, not a reveal',
    },
    {
      type: 'p',
      text: 'Your mark does not live on your site. It lives in a wallet list, on an aggregator profile, in a token list JSON file, on a block explorer page, next to a candle chart, in a Discord server icon, and in the display names of people who put your logo there on their own initiative.',
    },
    {
      type: 'p',
      text: 'None of those are yours. Most of them take a form submission and a review queue measured in days, not minutes. So the binding constraint on a rebrand date is not when the design is finished, it is when the slowest third party will have processed your request. Teams discover this in the week of the launch, which is exactly too late.',
    },
    {
      type: 'p',
      text: 'The reframe that fixes the plan: treat the reveal as the last step of a migration you started two or three weeks earlier, not as the moment the work begins.',
    },
    {
      type: 'h2',
      text: 'Decide what stays before you decide what changes',
    },
    {
      type: 'p',
      text: 'Every rebrand needs one recognisable constant. It is the thing that tells a holder scrolling a wallet list that this is the same project, before they have read a single word of your announcement. Choose it first, deliberately, and then protect it through the whole design process.',
    },
    {
      type: 'table',
      headers: ['What you are changing', 'Keep as the constant', 'Why'],
      rows: [
        [
          'The name only',
          'The colour and the coin silhouette',
          'People recognise the icon in a list long before they read the name',
        ],
        [
          'The mark only',
          'The name, the ticker and the palette',
          'Nothing to migrate on exchanges, so the change is almost entirely visual',
        ],
        [
          'The ticker',
          'The mark and the colour',
          'This is the expensive one: every listing, chart and integration carries the symbol',
        ],
        [
          'Name, mark and ticker together',
          'The colour, and the founder voice in the announcement',
          'The hardest version, and the one most likely to be read as a different project',
        ],
      ],
    },
    {
      type: 'p',
      text: 'If you change all four at once with nothing held constant, you have not rebranded, you have launched a new project that happens to share a treasury. Sometimes that is genuinely the intent after a pivot. Say so explicitly if it is, because the community will conclude it anyway and it is better coming from you.',
    },
    {
      type: 'h2',
      text: 'Inventory the surfaces you do not control',
    },
    {
      type: 'p',
      text: 'Before any design is approved, write the list. It is dull work and it is the single thing that separates a clean switch from three weeks of drift. Each row needs an owner, a submission route and a lead time.',
    },
    {
      type: 'ul',
      items: [
        'Exchange listing pages, one form per exchange, each with its own asset spec and review queue.',
        'Price aggregators and data sites, where the name, ticker, icon and description are all separate fields.',
        'Token lists and wallet icon registries, usually a pull request against a public repository.',
        'Block explorer token profiles, which often need a verification step you cannot rush.',
        'Chart tools, where your colour is about to sit next to green and red candles again.',
        'Docs, governance forums and any subdomain running its own theme.',
        'Social handles, avatars, banners and pinned posts, on every account including the dormant ones.',
        'Community run accounts, regional groups and meme templates, which nobody on your team can edit.',
      ],
    },
    {
      type: 'callout',
      text: 'The lead time on a rebrand is the submission queue, not the design. Open the third party requests two to three weeks before the switch date, with the new assets already final.',
    },
    {
      type: 'p',
      text: 'That last constraint has a consequence worth stating plainly: your identity has to be finished, in every format, before the date is announced anywhere. A rebrand cannot absorb a late round of logo revisions the way a website redesign can.',
    },
    {
      type: 'h2',
      text: 'Switch every surface on one day',
    },
    {
      type: 'p',
      text: 'A half migrated brand does not read as a work in progress. It reads as a compromise. Holders in this market have been trained to treat a sudden name change on one channel and not another as the signature of an account takeover, and they are right to. This is the security argument for a single switch day, and it matters more than the aesthetic one.',
    },
    {
      type: 'ol',
      items: [
        'Finalise every asset and every written field, including the one line description each aggregator will show.',
        'Open all third party requests with the same effective date, and chase the ones that have not confirmed.',
        'On the day, change the established accounts first, never a newly created one.',
        'Keep the old handles and redirect them rather than deleting them, so old links and old screenshots still resolve to you.',
        'Publish the announcement from the account people already follow, then update pinned posts and profile links.',
        'Sweep the list the next morning and file a second request for anything that did not take.',
      ],
    },
    {
      type: 'p',
      text: 'Announce from the oldest, most established channel you have. A rebrand communicated from a fresh account with a new name and a new logo is indistinguishable from an impersonation attempt, and telling people to trust it is exactly what an attacker would also do.',
    },
    {
      type: 'h2',
      text: 'Ship an announcement package, not an announcement post',
    },
    {
      type: 'p',
      text: 'The community is either your distribution on switch day or your opposition, and the difference is usually whether you gave them something to use within the hour. People have your old logo in their display name and their profile picture. They will change it if changing it is easy and if the new one is better.',
    },
    {
      type: 'ul',
      items: [
        'Profile pictures in the sizes the main platforms crop to, including a circular safe version.',
        'Banners for each channel, already at the right dimensions.',
        'The updated announcement frames and templates people were already reusing.',
        'A monochrome variant and a transparent file, because someone always needs one at midnight.',
        'A short note on what to say, so the ambassadors are not each inventing the explanation.',
      ],
    },
    {
      type: 'p',
      text: 'This is the same kit discipline described in our piece on [Discord and Telegram visual assets](/blog/discord-and-telegram-visual-assets), reissued in one go. If the templates were already part of the [community content](/blog/crypto-community-content) rhythm, the rebrand is mostly a swap. If they never existed, the rebrand is the moment to build them, because you are rewriting the system anyway.',
    },
    {
      type: 'h2',
      text: 'What to do when the date is fixed and the system is not',
    },
    {
      type: 'p',
      text: 'Sometimes the switch date is set by something outside the design schedule: a listing, a pivot announcement, a legal deadline on the old name. The identity can be compressed, but the migration lead times cannot, so something has to give.',
    },
    {
      type: 'p',
      text: 'Cut scope in this order. Static assets before motion, because a wallet icon is mandatory and a motion language is not. Core surfaces before long tail ones. The constant you chose stays whatever happens, since it is doing the recognition work while the rest catches up.',
    },
    {
      type: 'p',
      text: 'For the feed asset specifically there is a fast route, and we should be clear that it is ours: [ShipTeaser](https://shipteaser.com) comes from the same founder as this studio. You paste a product URL and it returns a 15 second 1080p motion graphics teaser built for muted feeds, with an optional music bed and the first video free without a card. It reads your page, not your new brand book, so it has no voice-over, no timeline to edit, and it cannot carry the narrative spine a rebrand needs. On switch day it fills a slot in the feed while the real system is still being finished.',
    },
    {
      type: 'h2',
      text: 'How we run a rebrand',
    },
    {
      type: 'p',
      text: 'Our [Launch Sprint](/#service-cards) is two weeks: a narrative spine and a visual micro system first, then a teaser film, then art direction, then a social starter kit. Applied to a rebrand, the narrative spine is the explanation of why the change is happening, which is the part teams most often leave to a hurried thread on the day.',
    },
    {
      type: 'p',
      text: 'We run the migration inventory in parallel with the design, because the queue times decide the date. The identity system itself is the subject of our longer piece on [Web3 branding](/blog/web3-branding), and the announcement mechanics overlap with what we describe in [exchange listing announcement assets](/blog/exchange-listing-announcement-assets). You can see how the systems hold up over time in our [selected work](/work).',
    },
    {
      type: 'p',
      text: 'One last thing worth saying to founders: a rebrand does not fix a positioning problem, it publishes whatever positioning you already have. If the team cannot state in one sentence what the project is now, the new mark will make that confusion look more expensive, not less.',
    },
    {
      type: 'cta',
      text: 'If you are changing the name, the mark or the ticker and the date is already circled, we can build the identity and the migration package together.',
      label: 'Book a call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'How do you rebrand a crypto project without losing the community?',
      answer:
        'Hold one recognisable constant, usually the colour or the coin silhouette, so the change reads as growth rather than a new project. Migrate every surface on the same day, announce from your oldest established account, and release assets people can put on their own profiles within the hour. The community changes with you when changing is easy.',
    },
    {
      question: 'How long does a crypto rebrand take?',
      answer:
        'The design can be compressed into about two weeks. The migration cannot: exchange, aggregator and token list submissions run on review queues measured in days. Plan two to three weeks between final assets and the switch date, and treat the slowest third party as the thing that sets your launch day.',
    },
    {
      question: 'Should we change the token ticker during a rebrand?',
      answer:
        'Only if the old symbol is genuinely unusable, because it is the most expensive part to migrate. The ticker appears in every listing, chart, integration and bot. If you do change it, keep the mark and the colour constant so holders still recognise the token in a wallet list while the symbol catches up.',
    },
    {
      question: 'What assets do we need ready before announcing a rebrand?',
      answer:
        'The full mark set with a monochrome variant, a dedicated coin icon, profile pictures and banners at platform crops, updated announcement templates, and the written one line description each aggregator will display. Every third party field has to be final before you open the submissions, because revisions restart the queue.',
    },
    {
      question: 'Why does a partial rebrand look suspicious to holders?',
      answer:
        'A name that changes on one channel but not another is the signature people associate with a compromised account. Holders have been trained to treat inconsistency as a warning sign. Switching every surface on one day, and announcing from the account people already follow, is a security decision as much as a design one.',
    },
  ],
  related: [
    { label: 'Web3 branding that survives a bear market', href: '/blog/web3-branding' },
    {
      label: 'Exchange listing announcement assets',
      href: '/blog/exchange-listing-announcement-assets',
    },
    { label: 'Crypto community content', href: '/blog/crypto-community-content' },
    { label: 'Selected work', href: '/work' },
  ],
};
