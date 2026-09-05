import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'pitch-video-for-a-web3-protocol',
  title: 'Pitch video for a Web3 protocol: explaining it without a whiteboard',
  metaTitle: 'Pitch Video for a Web3 Protocol: How to Build One',
  metaDescription:
    'How to explain a Web3 protocol on video without a whiteboard: who the pitch is for, what to show when there is no product to film, and the order that holds.',
  description:
    'Most protocol pitch videos are a diagram with a voice over it. Here is how to explain a mechanism on screen so a stranger follows it in ninety seconds.',
  date: '2026-09-05',
  cluster: 'web3',
  keyword: 'pitch video for a web3 protocol',
  answer:
    'A pitch video for a Web3 protocol has to make one mechanism legible to a stranger in about ninety seconds: what breaks today, what your protocol does differently, and what proves it works. BuildLore builds these around the mechanism rather than the architecture, because a viewer who cannot restate what you do will not trust what you built.',
  blocks: [
    {
      type: 'p',
      text: 'Ask a protocol team for a pitch video and you usually get the same artifact back. A camera moves across a system diagram. Boxes light up in sequence. A voice explains that liquidity is routed through a vault, then rehypothecated, then settled, and by the second box nobody outside the team is still following.',
    },
    {
      type: 'p',
      text: 'That video is not wrong, exactly. Everything in it is true. It fails because it was made from the inside: it shows the architecture the engineers built rather than the change a user experiences. Architecture is what you are proud of. Mechanism is what someone can repeat to a colleague an hour later, and repetition is the only distribution a protocol pitch really has.',
    },
    {
      type: 'p',
      text: 'The good news is that this is a structural problem, not a budget problem. Protocols with no interface, no users yet and no visual identity have made pitch videos that land, because they decided what the film had to teach before anyone opened a design tool.',
    },
    {
      type: 'h2',
      text: 'Decide who the pitch is for before deciding what it shows',
    },
    {
      type: 'p',
      text: 'The phrase "pitch video" covers at least four different films in crypto, and teams routinely try to make one film do all four jobs. It cannot, because each audience needs a different level of the same explanation.',
    },
    {
      type: 'table',
      headers: ['Audience', 'What they need in the first 20 seconds', 'What loses them'],
      rows: [
        [
          'Users and depositors',
          'What they can do that they could not do before, and what it costs them in effort',
          'Governance structure, module names, anything about the team',
        ],
        [
          'Investors',
          'Why this market is stuck, why now, and what compounds once it works',
          'A feature tour with no thesis behind it',
        ],
        [
          'Integrators and partners',
          'What the surface is, what they plug into, what they get back',
          'Consumer framing that hides the interface they need',
        ],
        [
          'Exchanges and ecosystem funds',
          'Traction, credibility signals, and how the thing is governed',
          'Vague claims with nothing checkable behind them',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Pick one audience per cut. The mistake is not making several films, it is making one film that hedges between four viewers and convinces none of them. Most teams need the user cut first, because everything else in the launch borrows from it, and the investor cut is closer to the film we describe in our piece on a [video for a seed fundraising deck](/blog/video-for-a-seed-fundraising-deck).',
    },
    {
      type: 'h2',
      text: 'Explain the mechanism, not the architecture',
    },
    {
      type: 'p',
      text: 'A protocol is a set of rules that changes what is possible for someone. That sentence, filled in with your specifics, is the film. The contracts, the modules, the routing layer and the oracle setup are how you keep the promise, and almost none of it belongs on screen in the first ninety seconds.',
    },
    {
      type: 'p',
      text: 'The test we use is the restatement test. Show the cut to someone who works in crypto but not on your protocol, wait an hour, then ask them to explain what it does. If what comes back is your mechanism in their words, the film works. If what comes back is an adjective, usually "faster" or "more efficient", the film taught them nothing and the diagram was doing the talking.',
    },
    {
      type: 'p',
      text: 'Getting there usually means going down one rung on the abstraction ladder, not up. Teams reach for the abstract framing because it sounds bigger, and abstraction is exactly what makes a protocol forgettable.',
    },
    {
      type: 'table',
      headers: ['Too abstract', 'The rung that lands'],
      rows: [
        [
          'A permissionless liquidity layer for real world assets',
          'Post an invoice, borrow against it the same day, repay when the client pays',
        ],
        [
          'Capital efficient perpetuals infrastructure',
          'The same collateral backs your position and keeps earning while it does',
        ],
        [
          'Decentralized identity primitives',
          'Prove you passed a check once, reuse that proof everywhere, without handing over the document again',
        ],
      ],
    },
    {
      type: 'callout',
      text: 'If your one line works equally well for three competitors, it is not a pitch, it is a category description. The pitch is the part only you can say.',
    },
    {
      type: 'h2',
      text: 'What goes on screen when there is no product to film',
    },
    {
      type: 'p',
      text: 'This is the real constraint. A SaaS company films its interface. A protocol at pitch stage often has a testnet, a doc site and a Figma file, which is why the diagram keeps winning by default. There are better options, and they cost about the same.',
    },
    {
      type: 'ul',
      items: [
        'Follow one unit through the system. One deposit, one loan, one trade, one proof. A single object moving through steps is legible in a way a whole system view never is.',
        'Show the before and the after side by side. Five steps and two counterparties on the left, one action on the right. The saving is the pitch.',
        'Build the interface you are going to ship, at design fidelity, and animate that. It doubles as your launch page art direction rather than being thrown away.',
        'Use numbers on screen only where they are real and checkable: an audit, a testnet figure, a live TVL. A fabricated chart is the fastest way to lose a technical viewer.',
        'Let motion carry the causality. What follows what, what unlocks what: sequence explains a mechanism better than any label does.',
        'Keep one visual system across the film so the protocol looks like one thing, which is the whole argument of our [Web3 branding](/blog/web3-branding) piece.',
      ],
    },
    {
      type: 'p',
      text: 'What to avoid is easier to list: rotating globes, glowing blockchains, hooded figures, stock crowds, and the token logo spinning in space. They read as filler because they carry no information, and a technical audience registers filler as an absence of substance.',
    },
    {
      type: 'h2',
      text: 'The order that holds',
    },
    {
      type: 'p',
      text: 'Almost every protocol pitch that works runs the same four beats, in the same order. The order matters more than the production value.',
    },
    {
      type: 'ol',
      items: [
        'The friction, stated as a situation someone recognizes rather than as a market claim. Ten to fifteen seconds.',
        'The mechanism, in one sentence and one visual sequence. This is the center of the film and deserves half its running time.',
        'The proof: audits, live deployments, integrations, the testnet number, the names already building on it. Short, factual, no adjectives.',
        'The one thing to do next. Read the docs, join the testnet, book a call. One action, not four.',
      ],
    },
    {
      type: 'p',
      text: 'Two failure patterns come from breaking this order. Opening on the team or the funding round spends your best seconds on something the viewer does not care about yet. Ending on three competing calls to action means the viewer picks none of them. The launch sequencing around all of this is set out in our [Web3 launch video](/blog/web3-launch-video) piece.',
    },
    {
      type: 'h2',
      text: 'Length, placement, and how many cuts you actually need',
    },
    {
      type: 'p',
      text: 'Length is decided by where the film gets watched, not by how much you have to say. A protocol explanation can fill twenty minutes. Nobody is giving you twenty minutes.',
    },
    {
      type: 'table',
      headers: ['Placement', 'Length', 'What the cut has to do'],
      rows: [
        ['Timeline post on launch day', '15 to 30 seconds', 'One mechanism, muted, no voice needed'],
        ['Docs or landing page hero', '60 to 90 seconds', 'The full four beats, watched deliberately'],
        ['Sent to an investor or a fund', '2 to 3 minutes', 'Beats plus proof and the market thesis'],
        ['Conference or partner meeting', '3 to 5 minutes', 'Room for the integration surface and governance'],
      ],
    },
    {
      type: 'p',
      text: 'The efficient way to cover that spread is one build and several cuts, not four productions. Structure the ninety second version properly, then derive the short social cut and the long room version from the same system and the same assets.',
    },
    {
      type: 'p',
      text: 'For the fastest slot on that list, the launch day post, there is a middle path worth naming, and we should disclose that it is ours. [ShipTeaser](https://shipteaser.com) is an automated product from the same founder as this studio: you give it a URL and it returns a 15 second 1080p motion graphics teaser built for muted feeds, with an optional music bed, and the first one is free without a card. It works from your own page, so what it shows is genuinely yours, but it has no narrative spine and no visual system behind it. It fills a feed slot on a busy week. It is not the film that has to make your mechanism legible.',
    },
    {
      type: 'h2',
      text: 'What makes a protocol pitch read as vapour',
    },
    {
      type: 'p',
      text: 'Crypto viewers are trained skeptics, and they discount hard. The tells that trigger it are consistent across the pitches we get sent for a second opinion.',
    },
    {
      type: 'ul',
      items: [
        'Superlatives with no mechanism behind them. Fastest, safest and most capital efficient all read as unverified until the film shows why.',
        'Numbers with no source on screen. If a figure cannot be traced to an audit, a dashboard or a block explorer, leave it out.',
        'Partner logos used as decoration when the relationship is a conversation, not an integration.',
        'A roadmap doing the work the product should be doing. Future tense stacked five deep is the clearest signal that nothing ships yet.',
        'Borrowed visual language. If the film looks like the last three protocols in the same category, the viewer files you with them.',
        'A tone that treats the audience as an army rather than as users making a decision.',
      ],
    },
    {
      type: 'p',
      text: 'The cure for all six is the same: replace the claim with the mechanism that produces it. A pitch that explains how something works is much harder to dismiss than one that insists it is good, and that is also why the technical explanation discipline in our [SaaS explainer video](/blog/saas-explainer-video) piece transfers cleanly to protocols.',
    },
    {
      type: 'h2',
      text: 'How we build one at BuildLore',
    },
    {
      type: 'p',
      text: 'We start with a working session that produces two artifacts: the one sentence mechanism and the single unit we are going to follow through the system. Nothing gets designed until both are agreed, because every visual decision after that point is downstream of them, and reversing them later is what turns a two week build into a five week one.',
    },
    {
      type: 'p',
      text: 'From there it is a narrative spine, a visual micro system, then the ninety second build, then the cuts. That is the shape of our [Launch Sprint](/#service-cards), and the same system carries into the announcement assets and the launch page art direction rather than being rebuilt for each surface. You can see how these systems hold across protocols and apps in our [selected work](/work).',
    },
    {
      type: 'p',
      text: 'One habit is worth stealing whether or not you work with a studio: before approving anything, run the restatement test on someone outside the team. It is a cheap check, it happens before the expensive part, and it catches the exact failure that most protocol pitch videos ship with.',
    },
    {
      type: 'cta',
      text: 'If you are trying to make a protocol legible in ninety seconds, we can work out the mechanism and the cut with you.',
      label: 'Book a call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'What should a Web3 protocol pitch video include?',
      answer:
        'Four beats in order: the friction stated as a recognizable situation, the mechanism in one sentence and one visual sequence, the proof through audits, deployments and integrations, and a single next action. The mechanism deserves about half the running time, and everything about the team and the roadmap can wait.',
    },
    {
      question: 'How long should a protocol pitch video be?',
      answer:
        'The placement decides it. Fifteen to thirty seconds for a timeline post, sixty to ninety for a docs or landing page hero, two to three minutes when it is sent to a fund, three to five for a room. Build the ninety second version first and derive the others from the same assets.',
    },
    {
      question: 'How do you explain a protocol without a system diagram?',
      answer:
        'Follow one unit through the system instead of showing the whole system at once. One deposit, one loan, one proof, moving step by step. Pair it with a before and after comparison so the saving is visible, and let motion carry the causality rather than labels on boxes.',
    },
    {
      question: 'Do we need a pitch video before mainnet?',
      answer:
        'Usually yes, because the audiences you need before mainnet are the ones a film reaches best: integrators, funds and early testers. Nothing in the four beats requires a shipped product. It requires a decided mechanism, which you have long before the contracts are live.',
    },
    {
      question: 'Why do crypto pitch videos get dismissed as vapour?',
      answer:
        'Superlatives with no mechanism behind them, numbers with no traceable source, partner logos used as decoration, and a roadmap doing the work the product should be doing. Crypto viewers discount hard by default. Replacing each claim with the mechanism that produces it is what earns the attention back.',
    },
  ],
  related: [
    { label: 'Web3 launch video', href: '/blog/web3-launch-video' },
    { label: 'Video for a seed fundraising deck', href: '/blog/video-for-a-seed-fundraising-deck' },
    { label: 'Web3 branding', href: '/blog/web3-branding' },
    { label: 'Selected work', href: '/work' },
  ],
};
