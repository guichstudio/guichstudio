import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'token-launch-marketing',
  title: 'Token launch marketing: the asset calendar, week by week',
  metaTitle: 'Token Launch Marketing: The Asset Calendar',
  metaDescription:
    'A week by week asset calendar for a token launch, built backwards from a listing date you do not control, and the kit to have ready before it.',
  description:
    'Most teams commission one announcement graphic the week of the listing. The calendar that works starts four weeks earlier, while the date is still private.',
  date: '2026-08-17',
  cluster: 'web3',
  keyword: 'token launch marketing',
  answer:
    'Token launch marketing works backwards from a date you do not control. The assets that decide the launch (narrative, brand system, explainer, teaser cuts) get built in the four weeks before the date is public, so the week of the listing is spent reacting instead of producing. BuildLore sequences that calendar phase by phase.',
  blocks: [
    {
      type: 'p',
      text: 'The exchange confirms on a Tuesday for a Thursday. The audit comes back two days later than promised. A competitor gets exploited over the weekend and every timeline in crypto talks about custody for 48 hours. None of that was on your marketing plan, and all of it lands on the same week.',
    },
    {
      type: 'p',
      text: 'So the plan collapses into what it always collapses into: one announcement graphic, one thread, one video ordered Monday for Thursday, and a launch that looks like the last forty launches. Not because the team lacked taste, but because by then there was no room left to have any.',
    },
    {
      type: 'p',
      text: 'The fix is not more assets. It is separating the work that can be finished before the date exists from the work that can only happen once it does. That split is the whole discipline, and almost nobody does it in the right order.',
    },
    {
      type: 'h2',
      text: 'A token launch is five phases, not one day',
    },
    {
      type: 'p',
      text: 'Treating the listing as the event is the first mistake. It is the loudest phase, not the longest, and it is the only one where nothing can still be changed.',
    },
    {
      type: 'table',
      headers: ['Phase', 'What it has to do', 'When'],
      rows: [
        [
          'Pre narrative',
          'Make the project legible to someone who is not buying yet',
          '4 to 6 weeks out',
        ],
        [
          'Warm up',
          'Give people a reason to be watching on the day',
          '2 to 3 weeks out',
        ],
        [
          'Announcement',
          'Turn attention into a decision within hours',
          'Date confirmed, 24 to 72h out',
        ],
        [
          'Launch window',
          'Hold the room while the price is moving',
          'Day 0 to day 3',
        ],
        [
          'Aftermath',
          'Convert a moment into a position',
          'Week 2 onwards',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Budgets almost always concentrate on the third row. That is the row where the outcome is already mostly decided: by then the story either reads in one sentence or it does not, and no graphic fixes the difference. The first and the last rows are the ones that compound, and they are the two that get cut first when the date moves.',
    },
    {
      type: 'h2',
      text: 'Build backwards from a date you do not control',
    },
    {
      type: 'p',
      text: 'Run one exercise before anything else. List every asset you want for the launch, then sort each one into two columns: does this need the date, the ticker, the exchange name, or the price? If the answer is no, it can be finished now, reviewed calmly, and signed off weeks early.',
    },
    {
      type: 'table',
      headers: ['Asset', 'Needs the date?', 'Build it'],
      rows: [
        ['Narrative and messaging spine', 'No', 'Now'],
        ['Brand and motion system', 'No', 'Now'],
        ['How it works explainer', 'No', 'Now'],
        ['Founder talking points and interview kit', 'No', 'Now'],
        ['Teaser film with the end card left empty', 'No', 'Now'],
        [
          'Announcement cuts naming the exchange and the hour',
          'Yes',
          'Template now, fill 24h before',
        ],
        [
          'Reaction posts on volume and milestones',
          'Yes',
          'Formats only, never pre written copy',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The fifth row is the one worth stealing. A teaser that shows the product and the world of the project, with the final card built as an empty slot, can be approved three weeks early and still ship the hour the date lands. A teaser that says the date out loud cannot, and that single craft decision is what separates a launch film from a disposable one. It is the same reasoning behind the structure we use in our post on the [web3 launch video](/blog/web3-launch-video).',
    },
    {
      type: 'p',
      text: 'The last row matters for a different reason. Pre written reaction copy always reads as pre written, because it was drafted before the thing it reacts to happened. What you prepare is the container: the frame, the type treatment, the export sizes, the approval path. The words stay live.',
    },
    {
      type: 'h2',
      text: 'The four weeks before the date is public',
    },
    {
      type: 'p',
      text: 'This is the part that can be planned properly, because none of it depends on anyone else confirming anything.',
    },
    {
      type: 'ol',
      items: [
        '**Week minus four. Narrative and system.** One sentence on what the token is for, one on why now, one on what it is not. Then the [visual system](/blog/web3-branding) that carries them: type, color, motion behavior, how numbers and charts appear on screen. Every later asset inherits from this, which is why it cannot be week minus one.',
        '**Week minus three. The evergreen films.** The explainer of the mechanism, and the teaser with the empty end card. Both reviewable without pressure, both usable again at every later milestone.',
        '**Week minus two. The community kit.** Banners, avatars, emotes, role art, announcement frames for Discord and Telegram, thread and post templates in the system. Communities repost what looks like it belongs to them, and that kit is what makes user made content look on brand instead of scraped.',
        '**Week minus one. Templates and rehearsal.** Announcement variants for every ratio, the empty end card ready to be filled in minutes, and one dry run where somebody actually publishes a test into a private channel. Rehearsal finds the missing export, the wrong safe area, the login nobody has.',
      ],
    },
    {
      type: 'callout',
      text: 'A useful gate at week minus two: if the launch date slipped by three weeks tomorrow, how much of what you have built would be wasted? If the answer is most of it, you built the wrong things first.',
    },
    {
      type: 'h2',
      text: 'Where a fast tool fits, and where it does not',
    },
    {
      type: 'p',
      text: 'Sometimes the four weeks are not there. The date arrives early, a listing appears out of a conversation nobody told marketing about, and the honest question is what can exist by tomorrow rather than what should exist.',
    },
    {
      type: 'p',
      text: 'For the feed cut specifically, there is a faster route, and we should be clear that it is ours: [ShipTeaser](https://shipteaser.com) is a product built by the same founder as this studio. You paste a URL and it returns a 15 second 1080p motion graphics teaser designed for muted feeds, with an optional music bed, and the first video is free without a card. What it does not give you is the thing the rest of this calendar is about. There is no narrative spine, no visual system your community kit and your announcement frames can inherit, no voice-over and no timeline to edit. For a teaser needed on Thursday it does the job. For a launch that has to still look coherent at week six, it is one asset, not the plan.',
    },
    {
      type: 'p',
      text: 'The general rule holds beyond that one tool. Automation is good at producing a single asset quickly and bad at producing a system, and a token launch is judged on the system: forty pieces of content over two months that clearly come from the same project.',
    },
    {
      type: 'h2',
      text: 'The week of the listing: capacity, not more files',
    },
    {
      type: 'p',
      text: 'Once the date is public, production capacity stops being the constraint. Decision capacity becomes it. Teams lose the launch window waiting for approvals, not waiting for renders.',
    },
    {
      type: 'ul',
      items: [
        '**One named person who can publish** without a review cycle, agreed in writing before the day.',
        '**Three pre approved reaction formats** so a response is a fill in, not a design job.',
        '**A 48 hour response commitment** from whoever makes your assets, tested at least once before the launch, because a studio that answers in five days is not part of this phase.',
        '**A list of what you will not respond to.** Most price movement does not deserve a post, and the projects that post through every candle look nervous.',
      ],
    },
    {
      type: 'p',
      text: 'This is also the phase where the crypto calendar breaks plans, which we cover in more detail in our post on [crypto video production](/blog/crypto-video-production). The teams that come out of it well are not the ones with the most assets. They are the ones who can put something good out within hours of a moment they did not schedule.',
    },
    {
      type: 'h2',
      text: 'What we would not spend on',
    },
    {
      type: 'p',
      text: 'Opinions, with the reasons attached, from launches we have worked on.',
    },
    {
      type: 'ul',
      items: [
        '**A countdown as the entire warm up.** A number going down gives nobody a reason to care. It works only on top of a story that already exists.',
        '**A 90 second explainer as the launch asset.** Nobody watches 90 seconds of an unfamiliar project in a feed. Build it for the site and the calls, then cut something short for the feed.',
        '**A rebrand two weeks out.** Identity work is week minus six work. Started late, it competes with the launch for the same attention and neither wins.',
        '**Amplification before the story is legible.** Pushing a message that does not read yet just buys a wider audience for the confusion.',
      ],
    },
    {
      type: 'p',
      text: 'The pattern behind all four: each one spends launch week money on a problem that was cheaper to solve in week minus four. That is the recurring shape of a launch that felt expensive and landed flat, and it is why we sequence engagements the way our [service cards](/#service-cards) describe, narrative and system first, assets after.',
    },
    {
      type: 'cta',
      text: 'We build the narrative and the visual system first, then the launch kit around a date that can still move, for crypto and tech teams.',
      label: 'See the work',
      href: '/work',
    },
  ],
  faq: [
    {
      question: 'What does token launch marketing actually include?',
      answer:
        'A narrative that explains what the token is for, a visual system everything else inherits from, an explainer of the mechanism, a teaser built for muted feeds, a community asset kit for Discord and Telegram, and announcement templates. The assets that name the date and the exchange stay as templates until the date is confirmed.',
    },
    {
      question: 'When should we start marketing a token launch?',
      answer:
        'Four to six weeks before the date, working on the parts that do not need the date. Narrative, brand system and the evergreen films can all be finished while the listing is still private, which is what leaves the final week free for reacting rather than producing.',
    },
    {
      question: 'What happens to our assets if the listing date moves?',
      answer:
        'Nothing, if you built in the right order. Anything that does not name the date, the exchange or the price survives a slip untouched. That is the reason we keep the date on a separate end card instead of writing it into a film or a voice-over, and why templates hold the specifics.',
    },
    {
      question: 'Can we run a token launch without any video?',
      answer:
        'You can, but you give up the only format that travels in a feed with the sound off. If the budget allows one thing, make it a short teaser built on your visual system, with an end card that can be swapped. A static graphic set is the fallback, not the equivalent.',
    },
  ],
  related: [
    {
      label: 'Web3 launch video',
      href: '/blog/web3-launch-video',
    },
    {
      label: 'Crypto video production',
      href: '/blog/crypto-video-production',
    },
    {
      label: 'NFT marketing video',
      href: '/blog/nft-marketing-video',
    },
    {
      label: 'Web3 branding',
      href: '/blog/web3-branding',
    },
  ],
};
