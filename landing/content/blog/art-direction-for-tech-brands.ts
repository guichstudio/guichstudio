import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'art-direction-for-tech-brands',
  title: 'Art direction for tech brands: why the same components look expensive or cheap',
  metaTitle: 'Art Direction for Tech Brands, Explained',
  metaDescription:
    'Two companies use the same typeface and components, and one looks expensive. Art direction is the difference: the decisions taken before a design file opens.',
  description:
    'The assets are not the problem. Why identical building blocks read premium or cut rate, the seven decisions that make up a direction, and who has to hold it.',
  date: '2026-09-13',
  cluster: 'tech',
  keyword: 'art direction for tech brands',
  answer:
    'Art direction is the set of decisions taken before anyone opens a design file: one reference world, a type hierarchy, a colour ratio, one lighting logic, a motion grammar, and a list of what never happens. It is why two companies using the same typeface and the same components look expensive or cheap. BuildLore sets that direction for tech brands and holds it across film, identity and the assets that ship every week.',
  blocks: [
    {
      type: 'p',
      text: 'Two seed stage companies launch in the same month. Both use a well chosen sans serif, a dark hero, a product screenshot, one accent colour and a grid anyone would recognise. On paper they are built from the same parts. One of them reads like a company with a board and a roadmap. The other reads like a template someone filled in over a weekend.',
    },
    {
      type: 'p',
      text: 'When a founder sees that gap, the usual reaction is to buy more assets: a new mark, another film, a landing page refresh. Sometimes that is the right spend. More often the assets were never the problem. The problem sits one layer above them, in the decisions nobody wrote down, which is why the new assets come back looking like the old ones with a different logo on top.',
    },
    {
      type: 'p',
      text: 'That layer is art direction. It is the least visible thing a studio sells and the thing that most decides whether the work looks worth its price. This post is about what it actually consists of, where the cheap signals come from, and who has to hold the line once the direction exists.',
    },
    {
      type: 'h2',
      text: 'Art direction is the layer above design',
    },
    {
      type: 'p',
      text: 'Design is execution: this frame, this page, this cut. Art direction is the constraint that execution happens inside. It decides what the work is allowed to look like before anyone opens a file, and it says no far more often than it says yes. A brand with no direction still produces assets, it just produces a different brand every time.',
    },
    {
      type: 'p',
      text: 'The practical test is what happens when a new person makes something. If a contractor, a growth hire or a founder in a hurry can produce a post that sits naturally beside everything else, a direction exists and is written down well enough to be followed. If every asset needs the one designer who has it in their head, there is taste in the company but no direction, and it will not survive that person getting busy.',
    },
    {
      type: 'callout',
      text: 'A direction is not a mood board. A mood board is forty images that agree with each other. A direction is the five or six rules you extracted from them, written plainly enough that someone can apply them without asking you.',
    },
    {
      type: 'h2',
      text: 'Where cheap actually comes from',
    },
    {
      type: 'p',
      text: 'Almost nobody looks at a page and thinks the typeface is wrong. The reaction is faster and vaguer than that: this feels a bit off. What produces the feeling is usually a short list of very specific slips, and every one of them is a decision that was left to whoever was building at the time.',
    },
    {
      type: 'table',
      headers: ['The tell', 'What a viewer registers', 'The decision that removes it'],
      rows: [
        [
          'Seven type sizes on one page',
          'Nothing looks important, so nothing is read',
          'Three sizes and two weights, fixed, for every surface',
        ],
        [
          'Four blues that nearly match',
          'The eye reads it as a mistake rather than a choice',
          'One accent, one neutral family, a stated ratio for how much of each',
        ],
        [
          'Default shadows and gradients',
          'The visual grammar of every free template',
          'One light source and one depth treatment, applied everywhere or not at all',
        ],
        [
          'Corner radii that vary by component',
          'Parts look borrowed from different products',
          'One radius scale, written down in two lines',
        ],
        [
          'Screenshots at different crops and angles',
          'The product looks unfinished',
          'A fixed product framing: same angle, same crop, same treatment',
        ],
        [
          'Motion with default easing',
          'Movement feels mechanical, like a slide transition',
          'One easing curve and one duration family across film and interface',
        ],
        [
          'The logo scaled to fit each space',
          'Improvisation, which reads as lack of care',
          'Minimum sizes and clear space, and a rule for what it never sits on',
        ],
      ],
    },
    {
      type: 'p',
      text: 'None of these are expensive to fix. They are cheap to fix and cheap to break, which is exactly why they need a written rule rather than a good instinct. Expensive looking work is not the result of a bigger budget on any single asset. It is the result of the same small set of choices being repeated until a viewer stops noticing them individually and starts reading them as a company.',
    },
    {
      type: 'h2',
      text: 'The seven decisions that make up a direction',
    },
    {
      type: 'p',
      text: 'When we set a direction for a tech brand, this is the list. It fits on two pages, and two pages get read, which a forty page document does not.',
    },
    {
      type: 'ul',
      items: [
        '**One reference world.** Not a folder of things you like. Three or four references you are willing to be compared to, plus a sentence on what you are taking from each and what you are explicitly not taking.',
        '**A type hierarchy.** Three sizes, two weights, one measure for body text, and a rule for numbers, because tech brands show numbers constantly and they are where amateur typesetting shows first.',
        '**A colour ratio, not a palette.** Ten swatches tell nobody anything. What matters is the proportion: how much neutral, how much accent, where the accent is never used.',
        '**One lighting logic.** Whether the world is lit hard or soft, from where, and whether 3D and product renders obey the same rule as photography. Mixed lighting logic is the fastest way to make a premium render look synthetic.',
        '**Product framing.** How the interface appears: cropped or whole, in a device or floating, static or moving, real data or plausible data. Pick one and keep it for a year.',
        '**Motion grammar.** One easing curve, a duration family, and a position on whether things move because they are alive or because they are being read. It applies to a film and to a button, and the fact that it applies to both is the point.',
        '**What never happens.** The shortest section and the most useful. No drop shadows on type, no stock photography of people at laptops, no third font, no accent on accent. A direction is defined by its refusals.',
      ],
    },
    {
      type: 'p',
      text: 'That list overlaps with a visual identity without being one. The identity is the artefact: the mark, the files, the assets. The direction is the reasoning that keeps new work consistent with it. If you are assembling the artefact from scratch, the [minimum kit at seed stage](/blog/brand-assets-a-startup-needs-at-seed-stage) is the companion piece to this one.',
    },
    {
      type: 'h2',
      text: 'Repetition is the part that costs nothing',
    },
    {
      type: 'p',
      text: 'The habit that quietly destroys direction is treating every asset as a fresh creative opportunity. A new gradient for the funding announcement. A different type treatment for the conference banner because it needed to feel special. Each decision is defensible alone. Together they spend the one thing a young brand cannot buy, which is recognition.',
    },
    {
      type: 'p',
      text: 'Companies that look expensive are usually doing less, not more. The same two type sizes for two years. The same accent in the same proportion. The same product framing in every asset, on every channel, until the framing itself becomes the recognisable thing. Restraint of that kind reads as confidence, and it is free.',
    },
    {
      type: 'p',
      text: 'This is also what makes a direction pay for itself operationally. Once the rules are fixed, an asset stops being a project. The weekly output of a [content calendar](/blog/video-content-calendar-for-startups) becomes assembly inside known constraints instead of a new argument every Monday about what it should look like.',
    },
    {
      type: 'h2',
      text: 'Direction under real time pressure',
    },
    {
      type: 'p',
      text: 'The honest objection is speed. A listing lands on Thursday, a page has to go live on Friday, and a direction written in a document does not make the file. That pressure is real, and it is where most brands drift: whoever is available builds something plausible, and plausible is how the cheap tells get in.',
    },
    {
      type: 'p',
      text: 'Two things help. The first is a short list of pre decided formats, so the rushed asset is a fill in rather than a design. The second is being clear about which slots genuinely need direction and which just need filling. For the second kind, we would rather point at our own tool than a competitor, so to be explicit about the ownership: [ShipTeaser](https://shipteaser.com) comes from the same founder as this studio. It takes a URL and returns a 15 second 1080p motion graphics teaser built for muted feeds, with an optional music bed and the first one free without a card. Its limitation is exactly the subject of this article: it reads a page, so it carries no visual system of yours and no narrative spine. It covers the slot. It does not set the direction.',
    },
    {
      type: 'p',
      text: 'Knowing which is which is the skill. An asset that carries a claim about the company deserves the direction. A placeholder that fills a slot in a feed for two days does not, and pretending otherwise is how teams spend a week of craft on something nobody will see twice.',
    },
    {
      type: 'h2',
      text: 'Somebody has to hold it',
    },
    {
      type: 'p',
      text: 'Directions do not fail because they were wrong. They fail because nobody owned them after the deck was approved. Six people with edit access, all reasonable, all slightly different, produce drift that is invisible week to week and obvious across a quarter.',
    },
    {
      type: 'p',
      text: 'One named person has to be able to say no, and that authority has to be granted out loud rather than assumed. It can sit with a design hire, with a founder who genuinely has the eye, or with the studio. What it cannot do is sit with a committee. The [in house versus studio decision](/blog/in-house-designer-vs-creative-agency) is mostly a question about who is available to hold this, week after week, not about who makes the nicer single asset.',
    },
    {
      type: 'p',
      text: 'The review question that keeps it honest is not whether the asset is good. It is whether it looks like it came from the same place as the last four. That question is answerable by someone who is not a designer, which is why it works as a governance rule.',
    },
    {
      type: 'h2',
      text: 'How we run art direction at BuildLore',
    },
    {
      type: 'p',
      text: 'It starts with an audit rather than a concept: every asset from the last quarter on one wall, which is usually the moment a founder sees the drift without being told about it. Then the seven decisions, written in two pages. Then one or two reference assets built to the rules, because a direction nobody has seen applied is still an opinion.',
    },
    {
      type: 'p',
      text: 'After that it is maintenance, which is the unglamorous part that actually compounds: new assets checked against the rules, the document updated when a real exception earns its place, and the same direction carried into film so a [brand video](/blog/brand-video-for-tech-startups) and a landing page look like one company. Artistic direction, identity and film sit under [our services](/#service-cards), and recent work is on [selected work](/work).',
    },
    {
      type: 'cta',
      text: 'If your assets are individually fine and collectively unconvincing, send us the last quarter of output. We will tell you which decisions are missing.',
      label: 'Book a call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'What is the difference between art direction and graphic design?',
      answer:
        'Design is execution: the specific page, frame or cut. Art direction is the constraint that execution happens inside, decided before any file opens. It covers the reference world, type hierarchy, colour ratio, lighting logic, product framing, motion grammar and the list of things that never happen. Design makes the asset. Direction makes every asset look related.',
    },
    {
      question: 'Why does our branding look cheap when we used a good typeface?',
      answer:
        'Because the tells are rarely the typeface. They are seven type sizes where three would do, four near identical blues, default shadows, corner radii that vary by component, screenshots at different crops, and a logo scaled to fit each space. Each is a decision left to whoever was building at the time. Fixing them costs a written rule, not a budget.',
    },
    {
      question: 'Do we need art direction at seed stage?',
      answer:
        'Yes, and it is cheaper then than later. At seed the asset count is small, so a direction can be applied across everything in a week. Two years of drift takes months to unwind. It does not need to be elaborate: two pages of rules that a non designer can follow will outperform a forty page document nobody opens.',
    },
    {
      question: 'How long does setting an art direction take?',
      answer:
        'An audit and a written direction is typically a week or two of studio time, including one or two reference assets built to the rules so the direction is visible rather than theoretical. Our Launch Sprint packages that work with a teaser film and launch page direction inside two weeks, which suits a fixed launch date.',
    },
    {
      question: 'Who should own art direction inside the company?',
      answer:
        'One named person with the authority to say no, granted out loud. A design hire, a founder with the eye, or the studio. Never a committee: six reasonable people with edit access produce drift that is invisible weekly and obvious quarterly. The review question is whether the asset looks like it came from the same place as the last four.',
    },
  ],
  related: [
    {
      label: 'Brand assets a startup needs at seed stage',
      href: '/blog/brand-assets-a-startup-needs-at-seed-stage',
    },
    { label: 'In house designer vs creative agency', href: '/blog/in-house-designer-vs-creative-agency' },
    { label: 'Brand video for tech startups', href: '/blog/brand-video-for-tech-startups' },
    { label: 'Selected work', href: '/work' },
  ],
};
