import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'how-many-videos-does-a-startup-need',
  title: 'How many videos does a startup actually need?',
  metaTitle: 'How Many Videos Does a Startup Actually Need?',
  metaDescription:
    'The count a startup argues about hides two different purchases. How to separate productions from cuts, and how to land on a number you can defend.',
  description:
    'Ask five people how many videos the company needs this year and you get five numbers, all defensible, because nobody agreed on what is being counted.',
  date: '2026-09-17',
  cluster: 'tech',
  keyword: 'how many videos does a startup actually need',
  answer:
    'Most startups need two to four video productions a year and far more cuts than that. A production is a new build: new claim, new capture, new system decisions. A cut is a derivative of one. BuildLore counts the moments in the next quarter, assigns each one a production or a cut, and only the first kind is a new project.',
  blocks: [
    {
      type: 'p',
      text: 'Someone asks the question in a planning meeting: how many videos do we need this year? One person says four. Another says one good one. The growth lead says about forty, because she is thinking about the feed. Everyone in the room is right, and the number that ends up in the budget is whichever one was said with the most confidence.',
    },
    {
      type: 'p',
      text: 'The disagreement is not about ambition. It is about the noun. Four and forty are answers to two different questions, and until the room separates them the budget is being set on a word nobody defined.',
    },
    {
      type: 'p',
      text: 'So this is not a post with a number in it. It is the counting method that produces your number, which is a different and more useful thing to own.',
    },
    {
      type: 'h2',
      text: 'Two different purchases hide inside one number',
    },
    {
      type: 'p',
      text: 'Every moving asset a company ships is either a production or a cut. A production is a new build: something gets invented, captured or decided for the first time. A cut is a derivative of a build that already exists. They cost different things, they take different amounts of time, and they fail for different reasons.',
    },
    {
      type: 'table',
      headers: ['', 'A production', 'A cut'],
      rows: [
        [
          'What it is',
          'New claim, new capture or new visual decisions. Nothing to derive it from.',
          'A recut, a reframe, a new duration or a new end card from material you own.',
        ],
        [
          'What it needs from you',
          'Decisions: what it says, who it is for, what it looks like, who signs off.',
          'A brief sentence and a deadline. The decisions were already made.',
        ],
        [
          'What sets the lead time',
          'Approval rounds, not render time. Weeks, and mostly your weeks.',
          'Queue position. Hours or days, if the master was built to be reopened.',
        ],
        [
          'How it goes wrong',
          'It gets commissioned under deadline pressure and sets a precedent by accident.',
          'It cannot be made at all, because the last production shipped as a flat export.',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Once the two nouns are separate, the argument in the meeting resolves itself. Four was a count of productions. Forty was a count of cuts. Both numbers can be true in the same year, and the only one that is genuinely expensive is the first.',
    },
    {
      type: 'h2',
      text: 'Count moments, not videos',
    },
    {
      type: 'p',
      text: 'A number pulled from nothing is impossible to defend and impossible to cut. A number derived from moments is neither. Open the next ninety days of the roadmap and list every date where somebody will turn round and ask whether we have something for this.',
    },
    {
      type: 'ul',
      items: [
        '**Things you ship.** A feature, a redesign, a public beta, an integration going live.',
        '**Things that happen to the company.** A round closing, a hire announcement, a partnership, a pricing change.',
        '**Things on a calendar you do not control.** A conference, an industry moment, a competitor launch you will be asked about.',
        '**Surfaces that are always on.** The site hero, the deck, the sales follow up, the app listing, the recurring feed slot.',
        '**Things sales keeps asking for.** The same objection answered badly in writing four times a week.',
      ],
    },
    {
      type: 'p',
      text: 'That list is usually somewhere between fifteen and forty entries, which is why the forty answer felt right to the growth lead. Now go down it and write one word next to each: production or cut. The honest result surprises most teams. The overwhelming majority are cuts, and the handful that are not tend to cluster around two or three real events in the year.',
    },
    {
      type: 'p',
      text: 'This is a counting exercise and nothing more. Where the material to cut from comes from is a separate decision, argued in our post on [startup video marketing strategy](/blog/startup-video-marketing-strategy), and turning the list into dates, owners and lead times belongs to the [video content calendar](/blog/video-content-calendar-for-startups). Do the count first: the other two are much easier when the nouns are already assigned.',
    },
    {
      type: 'h2',
      text: 'What actually forces a new production',
    },
    {
      type: 'p',
      text: 'A moment earns a production when there is genuinely nothing to derive it from. There are five honest triggers, and a long list of things that feel like triggers and are not.',
    },
    {
      type: 'ol',
      items: [
        'The claim changed. What the company says it does is different enough that old material argues the wrong thing.',
        'The thing itself has never been seen. A new product surface, a new physical object, a mechanism nobody has watched work.',
        'The visual system changed. After a rebrand, every cut from the old build is now evidence of the old brand.',
        'The footage does not exist. You cannot cut a customer on camera out of an animation that never filmed one.',
        'The surface asks for a different kind of attention. A film someone chose to watch and a loop behind a headline are not the same asset in two lengths.',
      ],
    },
    {
      type: 'p',
      text: 'Everything else that arrives wearing a production costume is a cut. This is the list worth keeping, because these are the requests that quietly double a budget.',
    },
    {
      type: 'ul',
      items: [
        '**A new ratio or duration.** An export, assuming the master was structured for it.',
        '**A new language or market.** A text and voice pass over an existing build.',
        '**A new channel.** The channel changes the crop and the first second, not the asset.',
        '**A new audience.** Usually a different opening and a different end card over the same middle.',
        '**A date with nothing behind it.** A deadline is not a reason to invent something new, it is a reason to reach for what exists.',
        '**A new person asking.** The most expensive trigger of all, and the least examined.',
      ],
    },
    {
      type: 'callout',
      text: 'If a request cannot name which of the five triggers it meets, it is a cut with a production budget attached to it.',
    },
    {
      type: 'h2',
      text: 'What a year looks like when you count this way',
    },
    {
      type: 'p',
      text: 'What follows is what we would plan for, not a measurement of anyone else. Treat it as a starting shape to argue with, and note that the production column moves slowly while the cut column moves with headcount and channel count.',
    },
    {
      type: 'table',
      headers: ['Stage', 'Productions to plan', 'What the cuts cover'],
      rows: [
        [
          'Pre seed and seed',
          'One, maybe two. The film that explains what this is, and a product capture pass.',
          'The site hero, the deck, feed posts for each ship, the sales follow up.',
        ],
        [
          'Post raise, first real go to market',
          'Two to three. The anchor film, a product mechanism build, one event or campaign piece.',
          'Launch sets per shipped moment, vertical cuts, the objection answers sales forwards.',
        ],
        [
          'Scaling, multiple surfaces and markets',
          'Three to four, usually one per quarter, plus whatever a rebrand forces.',
          'Everything above, multiplied by markets, plus a weekly always on slot.',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The pattern that matters is not the numbers in the middle column, it is that they barely grow. A company shipping ten times more content than it did last year is usually not commissioning ten times more production, it is cutting a great deal more from roughly the same number of builds. That ratio is the whole economics of the thing.',
    },
    {
      type: 'p',
      text: 'It also explains why the last item on a production brief matters more than it looks. If the master is handed over flat, with no project file and no usage rights, next year every cut is a production again and the count resets. We hand source files and usage rights over monthly for exactly that reason.',
    },
    {
      type: 'h2',
      text: 'The two ways the number goes wrong',
    },
    {
      type: 'p',
      text: 'Over-counting is the loud failure. Twenty briefs go out, twenty separate setups get paid for, and the company ends the year owning twenty assets that do not look related and cannot be recut into anything. Nobody decides to do this. It happens one reasonable request at a time, which is why the noun test is worth running on every one of them.',
    },
    {
      type: 'p',
      text: 'Under-counting is the quiet one, and it is more common. One good film gets made, everyone is proud of it, and then for eight months there is nothing to post because no cuts were scoped and the master was flattened on delivery. The budget was spent correctly and the year still produced almost nothing.',
    },
    {
      type: 'p',
      text: 'There is one version of the under-count worth naming a fast option for: the week a cut is genuinely needed and there is no build to cut from yet. Since the honest recommendation there is ours, we will say so plainly. [ShipTeaser](https://shipteaser.com) comes from the same founder as this studio: a product URL goes in, a 15 second 1080p motion graphics teaser comes out, made for muted feeds, with an optional music bed and the first one free without a card. It counts as a cut and never as a production, because it has no timeline, no voice-over and no visual system of yours to inherit. That is the right trade for one empty week and the wrong one for the asset the year is built on.',
    },
    {
      type: 'p',
      text: 'The number you want is the smallest set of productions that covers the five triggers, plus a master built so that every cut on the moment list is an export rather than a new brief. Argue about the first part. The second part is not a preference, it is what makes the first number hold for a year. You can see the shape of that across projects in [the work](/work), and how our packages split the build from the flow on the [service cards](/#service-cards).',
    },
    {
      type: 'cta',
      text: 'We count the moments first, name which ones are genuinely new, and build so the rest are cuts, for tech and Web3 teams.',
      label: 'Book a call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'How many videos does a startup actually need in a year?',
      answer:
        'Two to four productions and considerably more cuts. A production is a new build, where something is invented, captured or decided for the first time. A cut is a derivative of one. Most companies need a large number of assets and a very small number of builds, and confusing the two is what makes video budgets feel unpredictable.',
    },
    {
      question: 'What counts as a new video production rather than a cut?',
      answer:
        'Five things force a production: the claim changed, the thing has never been seen on camera, the visual system changed, the footage does not exist, or the surface needs a different kind of attention. A new ratio, language, channel, audience or deadline does not. Those are exports from material you already own.',
    },
    {
      question: 'Is one really good video enough for a startup?',
      answer:
        'Only if it was built to be cut. One film with a structured master behind it can fill a year of feed slots, deck moments and sales follow ups. The same film delivered as a flat export leaves you with one asset and eight quiet months, which is the most common way a correct budget still produces nothing.',
    },
    {
      question: 'How do we decide the number without guessing?',
      answer:
        'List every moment in the next ninety days where someone will ask whether you have something for it, then write production or cut beside each one. The count of the first word is your real number. The count of the second word tells you how much the master has to support before anyone starts building it.',
    },
  ],
  related: [
    {
      label: 'Startup video marketing strategy',
      href: '/blog/startup-video-marketing-strategy',
    },
    {
      label: 'Video content calendar for startups',
      href: '/blog/video-content-calendar-for-startups',
    },
    {
      label: 'How much does a brand video cost',
      href: '/blog/how-much-does-a-brand-video-cost',
    },
  ],
};
