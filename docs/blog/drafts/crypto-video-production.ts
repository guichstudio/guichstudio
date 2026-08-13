import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'crypto-video-production',
  title: 'Crypto video production: what changes when the film is for a protocol',
  metaTitle: 'Crypto Video Production: How It Differs',
  metaDescription:
    'Why crypto video production is a different job: no product to film, a technical audience, a calendar you do not own, and assets built to be remixed.',
  description:
    'Same cameras, same software, completely different job. Four constraints that decide whether a crypto film lands or reads as noise.',
  date: '2026-08-14',
  cluster: 'web3',
  keyword: 'crypto video production',
  answer:
    'Crypto video production is the craft of making films for protocols and onchain apps, where there is no physical product to shoot, the audience reads code, and the calendar moves in hours. BuildLore produces these as motion and interface work rather than as shoots, with every asset built to be cut down and reposted.',
  blocks: [
    {
      type: 'p',
      text: 'Crypto video production uses the same tools as any other video work. What differs is everything around the tools: what you can point a camera at, who is watching, how long the window stays open, and what happens to the file after you publish it.',
    },
    {
      type: 'p',
      text: 'Get those four wrong and you get a film that looks expensive and moves nothing. Here is how each one changes the work.',
    },
    {
      type: 'h2',
      text: '1. There is nothing to film',
    },
    {
      type: 'p',
      text: 'A sneaker brand shoots a sneaker. A protocol has a contract, a frontend and a mental model. So the raw material is interface, motion and type, not footage.',
    },
    {
      type: 'p',
      text: 'That pushes the work upstream. The decisions that used to happen on set now happen in the design of the shots: what appears on screen, in what order, at what speed, and which single number the frame is built around.',
    },
    {
      type: 'ul',
      items: [
        '**Capture the real frontend**, on testnet if mainnet is not live. A mocked screen with invented numbers gets spotted and quoted back at you.',
        '**Slow the interaction down.** Real transaction speed is either too fast to read or too slow to hold. Retime it, then hold the confirmation a beat.',
        '**Design the empty states out.** A wallet with three dollars in it reads as a project nobody uses.',
        '**Type carries the argument.** In a film with no faces, typography is the actor. Set it two sizes larger than feels right.',
      ],
    },
    {
      type: 'h2',
      text: '2. The audience reads code',
    },
    {
      type: 'p',
      text: 'This is the constraint most agencies coming from consumer work underestimate. A crypto audience checks. They open the contract, they compare your claim to the docs, and they will reply publicly if a number is inflated.',
    },
    {
      type: 'callout',
      text: 'Rule of thumb: every claim in the film should be something a viewer can verify in under a minute, or it should not be in the film.',
    },
    {
      type: 'p',
      text: 'The practical effect is that vague copy is more dangerous than plain copy. "The fastest onchain execution" invites a fight. "Settles in one block" invites a check that you pass. The second one is also easier to cut to picture, because it points at something happening on screen.',
    },
    {
      type: 'h2',
      text: '3. The calendar is not yours',
    },
    {
      type: 'p',
      text: 'Listings move. Audits come back late. A competitor gets exploited on a Sunday and the whole timeline talks about custody for two days. In consumer marketing that is a scheduling annoyance. Here it is the difference between a film that lands in a live conversation and one that arrives after the conversation ended.',
    },
    {
      type: 'p',
      text: 'That reality shapes how production is organised, not just how fast it runs.',
    },
    {
      type: 'table',
      headers: ['Decision', 'Consumer default', 'Crypto version'],
      rows: [
        [
          'Lock the date',
          'Date drives the edit',
          'Build date-free, add the date card last',
        ],
        [
          'Approvals',
          'Rounds with a committee',
          'One decider, same day, or the window closes',
        ],
        [
          'Project files',
          'Archived at delivery',
          'Kept warm, ready to recut within hours',
        ],
        [
          'Music and sound',
          'Bespoke per film',
          'A reusable sonic kit, so reactions ship fast',
        ],
      ],
    },
    {
      type: 'p',
      text: 'A retainer exists for exactly this reason. Our [Growth retainer](/#service-cards) commits to a 48 hour response on hot moments, which only works because the visual system and the source files are already built and already ours to reopen.',
    },
    {
      type: 'h2',
      text: '4. The file gets remixed, so build for it',
    },
    {
      type: 'p',
      text: 'In crypto, distribution happens through other people. The film gets cropped into a quote tweet, screenshotted into a Telegram group, cut into a thirty second Discord clip and rebuilt into a meme by someone you have never met. That is the goal, not a side effect.',
    },
    {
      type: 'ol',
      items: [
        'Give every scene a frame that works as a still, because half your reach will be a screenshot.',
        'Keep a safe zone at the bottom third so platform UI never covers the claim.',
        'Export the vertical cut and two short loops in the same session, not next week.',
        'Deliver the source files and the fonts, so the community team can make the tenth asset without you.',
      ],
    },
    {
      type: 'p',
      text: 'The teams that compound are the ones whose assets other people can extend. The teams that stall are the ones where every new format requires a purchase order.',
    },
    {
      type: 'h2',
      text: 'What a production actually looks like',
    },
    {
      type: 'p',
      text: 'For a launch, we run it as a two week [Launch Sprint](/#service-cards): narrative spine and visual micro system first, teaser film next, launch page art direction after that, then the social starter kit. No shoot days, no location, no talent. The cost sits in art direction and animation, which is also where the perceived value sits for this audience.',
    },
    {
      type: 'p',
      text: 'For a live product, the same system runs weekly instead, which is how a protocol ends up with a look people recognise before they read the logo. Examples across Web3 and commercial clients are in [the work](/work).',
    },
    {
      type: 'cta',
      text: 'We produce launch films, brand systems and weekly assets for protocols and onchain apps.',
      label: 'Book a call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'How much does crypto video production cost?',
      answer:
        'It depends on whether you need a single launch or a weekly output. BuildLore runs a fixed two week Launch Sprint for launches, then monthly retainers sized by volume, from three to five assets a week up to fifteen to twenty five with a quarterly cinematic film.',
    },
    {
      question: 'How long does a crypto launch film take to produce?',
      answer:
        'Two weeks for a launch package built from scratch, including the narrative spine, the teaser, the launch page art direction and the social cuts. Reactive assets for a live product ship inside a 48 hour window because the visual system already exists.',
    },
    {
      question: 'Do you film anything, or is it all motion design?',
      answer:
        'For protocols it is motion, interface capture and 3D rather than a shoot. There is no physical product, and a technical audience trusts a real frontend far more than stock footage of people looking at laptops.',
    },
    {
      question: 'What do you need from us to start?',
      answer:
        'Access to the product, even on testnet, the claims you are willing to defend publicly, and one person who can approve same day. The approval speed matters more than the size of the brief.',
    },
  ],
  related: [
    { label: 'Web3 launch video', href: '/blog/web3-launch-video' },
    {
      label: 'How to choose a Web3 marketing agency',
      href: '/blog/how-to-choose-a-web3-marketing-agency',
    },
    { label: 'Selected work', href: '/work' },
  ],
};
