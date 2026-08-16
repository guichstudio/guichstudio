import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'saas-explainer-video',
  title: 'SaaS explainer video: which format your page actually needs',
  metaTitle: 'SaaS Explainer Video: Which Format You Need',
  metaDescription:
    'Explainer, product film or teaser: the three videos SaaS teams confuse, how to tell which one your page needs, and what to brief before production.',
  description:
    'Three different films get ordered under the same word. Picking the wrong one is why a video costs a quarter of the marketing budget and moves nothing.',
  date: '2026-08-16',
  cluster: 'tech',
  keyword: 'saas explainer video',
  answer:
    'A SaaS explainer video makes an unfamiliar product understandable, usually in 60 to 90 seconds, on a page where someone is already paying attention. It is not a teaser and not a product film: those two serve feeds and feature pages instead. BuildLore builds one visual system per product, then cuts the explainer, the film and the teaser from it.',
  blocks: [
    {
      type: 'p',
      text: 'A marketing lead asks for an explainer video. The studio quotes an explainer video. Everyone agrees on the word, nobody agrees on the film. Six weeks later there is a 90 second animated piece with a voice-over sitting above the fold, where visitors wanted to see the product, and a launch two weeks away with no asset that works in a feed.',
    },
    {
      type: 'p',
      text: 'The word covers at least three deliverables that share almost no craft decisions. Different lengths, different audiences, different first frames, different budgets. Ordering one and needing another is the most expensive mistake in SaaS video, and it happens before anyone opens a project file.',
    },
    {
      type: 'p',
      text: 'So the first job is not writing a script. It is deciding which of the three you are buying.',
    },
    {
      type: 'h2',
      text: 'The three films that get called an explainer',
    },
    {
      type: 'p',
      text: 'They answer different questions. A viewer arrives with one of them already in their head, and the film either matches it or gets closed.',
    },
    {
      type: 'table',
      headers: ['Format', 'The question it answers', 'Where it belongs'],
      rows: [
        [
          'Explainer',
          'What is this and why would I need it',
          'Homepage second screen, docs, sales follow up',
        ],
        [
          'Product film',
          'Does it actually do the job, and how',
          'Feature pages, launch day, onboarding',
        ],
        [
          'Teaser',
          'Is this worth three more seconds',
          'Social feeds, ads, announcements',
        ],
        [
          'Brand film',
          'Who are these people and do I trust them',
          'Fundraise, careers page, conference loop',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The pattern to notice: only the explainer assumes attention. The other three have to earn it or already have it for other reasons. That single difference sets length, pacing, sound design and whether the first frame can afford to be abstract.',
    },
    {
      type: 'h2',
      text: 'When an explainer is the right buy',
    },
    {
      type: 'p',
      text: 'An explainer earns its cost when the product cannot be understood from a screenshot. That is a narrower case than most teams assume.',
    },
    {
      type: 'ul',
      items: [
        '**The category is new.** If you have to define the problem before you can sell the solution, prose on a page loses people and a film does not.',
        '**The value is invisible before signup.** Infrastructure, security, data plumbing, anything whose benefit is an absence of pain.',
        '**A human explains it on every call.** If your founder gives the same five minute explanation to every prospect, that explanation is the script and it is already validated.',
        '**The buying committee includes someone who never opens the app.** A finance or legal stakeholder needs the mechanism, not the interface.',
      ],
    },
    {
      type: 'p',
      text: 'And when it is the wrong buy: the product is self evident in one screenshot, the real objection is pricing rather than comprehension, or the actual need is something that survives two seconds in a feed. In that last case you want a teaser, and calling it an explainer will get you 90 seconds of animation that nobody on social will ever finish.',
    },
    {
      type: 'callout',
      text: 'A quick test. Read your homepage headline to someone outside your market and ask what the product does. If they get it roughly right, you do not need an explainer, you need a better product film.',
    },
    {
      type: 'h2',
      text: 'The placement sets the length, not the ambition',
    },
    {
      type: 'p',
      text: 'Length is not a taste question. It is a function of where the video sits and what the viewer was doing one second before it started.',
    },
    {
      type: 'table',
      headers: ['Placement', 'Length', 'Sound', 'What it must do'],
      rows: [
        [
          'Above the fold',
          '20 to 30 seconds',
          'Off by default',
          'Show the product working before the viewer scrolls',
        ],
        [
          'Second screen or dedicated page',
          '60 to 90 seconds',
          'On, viewer pressed play',
          'Explain the mechanism, one idea at a time',
        ],
        [
          'Sales follow up email',
          '90 to 120 seconds',
          'On',
          'Arm your champion to explain you internally',
        ],
        [
          'Feed and ads',
          '10 to 15 seconds',
          'Off',
          'One claim, legible, no context assumed',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The above the fold row is where most SaaS explainers die. A film built for a dedicated page gets dropped into the hero, where it opens on a logo animation and a slow abstract shape, and the visitor leaves before the product appears. Same file, wrong slot, wasted spend.',
    },
    {
      type: 'h2',
      text: 'What the first ten seconds have to contain',
    },
    {
      type: 'p',
      text: 'Every explainer that works front loads the same four things. Every one that fails saves them for later, in the belief that setup buys patience. It does not.',
    },
    {
      type: 'ol',
      items: [
        'The problem, stated as a situation the viewer recognizes, not as a category noun.',
        'The product, on screen, doing something. Real interface, not a floating rectangle standing in for one.',
        'The one claim you want repeated, written on screen so it survives the sound being off.',
        'A reason to keep watching, usually the part of the mechanism that is not obvious.',
      ],
    },
    {
      type: 'p',
      text: 'Notice that three of the four are visual. An explainer that only works with the voice-over playing is a podcast with pictures, and it will be watched muted more often than not, even on a page where someone chose to press play.',
    },
    {
      type: 'h2',
      text: 'Build one system, cut every format from it',
    },
    {
      type: 'p',
      text: 'The reason teams end up with the wrong format is sequencing. They commission a single film, discover the gaps at launch, and then commission more films from scratch, each with its own look. Three productions, three visual languages, one incoherent brand.',
    },
    {
      type: 'p',
      text: 'The cheaper order is to build the visual system first: type, motion behavior, color, how the interface is framed, how numbers appear. Once that exists, the explainer, the product film and the feed cuts are recuts of one build rather than three separate jobs. This is the same logic behind the four decisions in our post on the [product launch video](/blog/product-launch-video), and it is how our [Launch Sprint](/#service-cards) is sequenced: narrative and visual micro system first, assets after.',
    },
    {
      type: 'p',
      text: 'If what you need this week is only the feed cut, there is a faster route and we should be clear that it is ours: [ShipTeaser](https://shipteaser.com) is a product built by the same founder as this studio. You paste a product URL and it returns a 15 second 1080p motion graphics teaser designed for muted feeds, with an optional music bed and the first video free without a card. It is deliberately not an explainer: there is no voice-over, no screen recording, no timeline to edit, and it will not give you a visual system your other pages can inherit. For a teaser you need on Thursday it is the right tool. For the film that has to make a new category understandable, it is not.',
    },
    {
      type: 'h2',
      text: 'The one page brief that prevents the rework',
    },
    {
      type: 'p',
      text: 'Before you talk to any studio, freelancer or internal designer, write these five lines. They take twenty minutes and they settle every argument that would otherwise happen during revisions, when changes are expensive.',
    },
    {
      type: 'ul',
      items: [
        '**Format**, named: explainer, product film, teaser or brand film. One of them.',
        '**Placement**, named: the exact page or feed, with the length that placement allows.',
        '**One claim**, written as a single checkable sentence a viewer could repeat.',
        '**The mechanism**, in three steps maximum. If it needs five, the film is too early.',
        '**The action** at the end, and where it leads.',
      ],
    },
    {
      type: 'p',
      text: 'A studio that gets that page back writes a script that is close on the first pass. A studio that gets "we need an explainer, here is our deck" writes three scripts, and you pay for the two you throw away.',
    },
    {
      type: 'cta',
      text: 'We build the visual system first, then cut the explainer, the product film and the social versions from it, for tech and Web3 teams.',
      label: 'See the work',
      href: '/work',
    },
  ],
  faq: [
    {
      question: 'What is a SaaS explainer video?',
      answer:
        'A short film, usually 60 to 90 seconds, that makes an unfamiliar product understandable to someone who is already paying attention. It states the problem, shows the product working, and carries one claim. It is distinct from a teaser, which has to earn attention in a feed, and from a product film, which proves the job gets done.',
    },
    {
      question: 'How long should a SaaS explainer video be?',
      answer:
        'The placement decides it. Twenty to thirty seconds above the fold where the sound is off, 60 to 90 seconds on a dedicated page where the viewer pressed play, and 10 to 15 seconds for feeds and ads. One build should produce all three lengths rather than three separate productions.',
    },
    {
      question: 'Do we need an explainer or a product demo?',
      answer:
        'An explainer if prospects do not yet understand the problem you solve, a demo if they understand it and are judging whether your product does the job. BuildLore usually recommends the demo first for products that are legible from a screenshot, because it converts closer to the decision.',
    },
    {
      question: 'Can an AI tool make our SaaS explainer video?',
      answer:
        'Automated tools, including ShipTeaser which we built, turn a URL into a short teaser for muted feeds. That is a different asset from an explainer: no voice-over, no screen recording, no narrative spine. Use one for the feed cut you need this week, and a studio for the film that has to teach a new category.',
    },
  ],
  related: [
    {
      label: 'Product launch video',
      href: '/blog/product-launch-video',
    },
    {
      label: 'Brand video for tech startups',
      href: '/blog/brand-video-for-tech-startups',
    },
    {
      label: 'Web3 launch video',
      href: '/blog/web3-launch-video',
    },
  ],
};
