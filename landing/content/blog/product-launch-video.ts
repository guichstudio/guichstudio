import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'product-launch-video',
  title: 'Product launch video: four decisions that set the film',
  metaTitle: 'Product Launch Video: The 4 Decisions',
  metaDescription:
    'The four choices that decide whether a product launch video works, all made before anyone opens a project file: the moment, the claim, the format, the maker.',
  description:
    'By the time someone is animating, the film is already good or already dead. These are the four calls that decide which one, and they are all made on paper.',
  date: '2026-08-14',
  cluster: 'tech',
  keyword: 'product launch video',
  answer:
    'A product launch video is a short film, usually 15 to 60 seconds, that gives a launch one legible claim and one action. Four decisions set it before production starts: which launch moment it serves, which single claim it carries, where it will be watched, and who makes it. BuildLore art directs these as part of a two week Launch Sprint.',
  blocks: [
    {
      type: 'p',
      text: 'Teams argue about the wrong things during a launch film. Font choices, transition styles, whether the logo should land at second two or second three. Meanwhile the four decisions that actually determine the outcome were made weeks earlier, usually by accident, in a Slack thread nobody treated as a creative brief.',
    },
    {
      type: 'p',
      text: 'Here they are, in the order they have to be answered.',
    },
    {
      type: 'h2',
      text: 'Decision 1: which launch moment is this for',
    },
    {
      type: 'p',
      text: '"Launch" is at least four different events, and each one wants a different film. Conflating them is the single most common reason a launch video underperforms: it tries to serve all four and serves none.',
    },
    {
      type: 'table',
      headers: ['Moment', 'Audience', 'What the film must do'],
      rows: [
        [
          'Announcement',
          'People who do not know you',
          'Make one idea legible in three seconds',
        ],
        [
          'Launch day',
          'People deciding today',
          'Show the product working, then the action',
        ],
        [
          'Fundraise or partnership',
          'People judging the team',
          'Carry ambition and proof, not features',
        ],
        [
          'Ongoing',
          'People already following',
          'One feature, one loop, no context needed',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Pick one. The other three get cuts from the same build, which is cheap, rather than their own production, which is not. And if the film has to make an unfamiliar product understandable rather than announce it, you are not looking at a launch video at all: that is a [SaaS explainer video](/blog/saas-explainer-video), a different format with different rules.',
    },
    {
      type: 'h2',
      text: 'Decision 2: the one claim the film carries',
    },
    {
      type: 'p',
      text: 'Not the value proposition, not the three pillars. One sentence, checkable, that a viewer could repeat to a colleague an hour later. If your film has four claims, viewers remember zero.',
    },
    {
      type: 'callout',
      text: 'A good test: write the claim as a text message. If it needs a second sentence to make sense, it is not the claim yet, it is a category description.',
    },
    {
      type: 'p',
      text: 'The claim decides everything downstream. It sets which screen you shoot, which number appears, how long the hold on the payoff lasts, and what the last frame says. Choosing it late means re-editing, which is where launch budgets actually go.',
    },
    {
      type: 'h2',
      text: 'Decision 3: where it will really be watched',
    },
    {
      type: 'p',
      text: 'Not where you plan to post it, where it will be seen. In practice: on a phone, in a feed, with the sound off, next to something funnier than your product. Design for that first and the other placements come free.',
    },
    {
      type: 'ul',
      items: [
        '**Type two sizes larger than feels right.** What reads on a 27 inch display disappears on a phone in a hand.',
        '**Carry every claim visually.** If the point only lands with sound, most of your audience never gets it.',
        '**Decide the ratios up front.** A 16:9 hero reframed to 9:16 after the fact loses its composition. Built for both from the start, it does not.',
        '**Make the first frame work as a still.** Half your reach will be a screenshot in a quote post.',
      ],
    },
    {
      type: 'h2',
      text: 'Decision 4: who makes it, and how fast',
    },
    {
      type: 'p',
      text: 'This is the decision teams treat as a budget line when it is really a scope choice. There are three honest options and they suit different situations.',
    },
    {
      type: 'table',
      headers: ['Route', 'Good when', 'Real cost'],
      rows: [
        [
          'In house',
          'You have a designer with motion skills and time',
          'The launch competes with their other work',
        ],
        [
          'Automated from your page',
          'You need a teaser this week, not a brand system',
          'You get the format, not the art direction',
        ],
        [
          'Studio',
          'The launch matters and the brand has to hold after it',
          'Two weeks and a real budget',
        ],
      ],
    },
    {
      type: 'p',
      text: 'On the middle row, we can be specific, because we built the tool: [ShipTeaser](https://shipteaser.com) is our own product, made by the same founder as this studio. You paste a product URL, it reads the page and returns a 15 second 1080p motion graphics teaser, no voice-over, designed for muted feeds. The first one is free without a card. It is the studio process compressed into an engine, which means it gets you a competent teaser fast, and it does not give you a visual system, a narrative spine or a launch page that agrees with the film. That is the honest trade.',
    },
    {
      type: 'p',
      text: 'The third row is what a [Launch Sprint](/#service-cards) is: two weeks, narrative and visual micro system first, then the teaser film, then the launch page art direction, then the social starter kit. You pick it when the launch has to look like the start of a brand rather than a one off asset.',
    },
    {
      type: 'h2',
      text: 'What to do with these four answers',
    },
    {
      type: 'p',
      text: 'Write them down before you brief anyone, in one page. Moment, claim, placement, maker. Every downstream argument, and there will be several, gets settled by pointing at that page instead of by opinion.',
    },
    {
      type: 'ol',
      items: [
        'One moment, named. Not "the launch".',
        'One claim, written as a single checkable sentence.',
        'One primary placement, with the ratios listed.',
        'One maker, with the date they need the claim by.',
      ],
    },
    {
      type: 'p',
      text: 'A brief that fits on one page is a brief people actually read. Anything longer gets skimmed, and skimmed briefs produce films that look expensive and say nothing, which is the failure mode this whole article exists to prevent.',
    },
    {
      type: 'cta',
      text: 'We art direct and produce launch films for tech and Web3 teams, from the narrative spine to the social cuts.',
      label: 'See the work',
      href: '/work',
    },
  ],
  faq: [
    {
      question: 'How long should a product launch video be?',
      answer:
        'Fifteen to thirty seconds for the feed version and up to sixty for the version on your launch page. Length follows the moment: an announcement needs to land one idea fast, while a launch day film can afford to show the product actually working.',
    },
    {
      question: 'What makes a product launch video actually work?',
      answer:
        'One claim instead of four, shown rather than stated, readable with the sound off, and a single action at the end. BuildLore treats those as decisions made on paper before production, because fixing them in the edit costs several times more.',
    },
    {
      question: 'Should we use an AI tool or hire a studio?',
      answer:
        'An automated tool like ShipTeaser, which we also built, turns a product URL into a 15 second teaser and suits a launch that needs an asset this week. A studio is the right call when the launch has to establish a visual system that outlives it.',
    },
    {
      question: 'How far ahead should we start the launch video?',
      answer:
        'Two weeks before the date if a studio is building it from scratch, including the narrative spine and the launch page art direction. Reactive cuts for a live product ship far faster because the visual system already exists.',
    },
  ],
  related: [
    {
      label: 'Brand video for tech startups',
      href: '/blog/brand-video-for-tech-startups',
    },
    { label: 'Web3 launch video', href: '/blog/web3-launch-video' },
    {
      label: 'Crypto video production',
      href: '/blog/crypto-video-production',
    },
  ],
};
