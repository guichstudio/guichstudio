import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'web3-branding',
  title: 'Web3 branding that survives a bear market',
  metaTitle: 'Web3 Branding That Survives a Bear Market',
  metaDescription:
    'What Web3 branding covers beyond the logo: naming, coin mark, type, colour, motion, templates and the rules that hold through a bear market and a rebrand.',
  description:
    'Most crypto brands are a logo and a folder of exports. Here is the identity system that still holds twelve months later, through a quiet market and a rebrand.',
  date: '2026-08-19',
  cluster: 'web3',
  keyword: 'web3 branding',
  answer:
    'Web3 branding is the identity system a protocol runs on: naming and ticker, mark and coin icon, typography, colour, motion language, asset templates and the written rules that keep them consistent. BuildLore builds it as a system rather than a logo file, so it holds through a bear market, a pivot and a rebrand, and so a second studio could extend it without guessing.',
  blocks: [
    {
      type: 'p',
      text: 'Most Web3 branding starts with a logo round and ends with a folder of exports. Six months later the project has a mark, three fonts nobody agreed on, a Discord banner made by a community member, and an exchange listing tile built at 2am by whoever was awake.',
    },
    {
      type: 'p',
      text: 'That is not a taste problem, it is a systems problem. A crypto brand gets used by more people, on more surfaces, faster than a normal startup brand. Your community makes assets. Exchanges crop your mark. Wallets render it at 24 pixels. A chart tool decides what colour sits next to your ticker, and nobody asks you first.',
    },
    {
      type: 'p',
      text: 'So the useful question is not what the logo looks like on the presentation slide. It is what the identity does when you are not in the room.',
    },
    {
      type: 'h2',
      text: 'What Web3 branding actually covers',
    },
    {
      type: 'p',
      text: 'Branding here means the whole system, not the mark. The mark is a small part of the work and most of the argument, which is why so many projects spend a month on it and then improvise everything that comes after.',
    },
    {
      type: 'table',
      headers: ['Layer', 'What it is', 'What breaks without it'],
      rows: [
        [
          'Naming and ticker',
          'Project name, token symbol, product names',
          'Two products with names nobody can tell apart in a tweet',
        ],
        [
          'Mark and coin icon',
          'Logo, monochrome variant, a separate 24px token icon',
          'A mark that turns to mush in a wallet list',
        ],
        [
          'Type and colour',
          'One or two licensed typefaces, a palette with contrast rules',
          'Every asset drifts a little, and after a month none of them look related',
        ],
        [
          'Motion language',
          'How things enter, hold and leave, with fixed timing curves',
          'Video that looks bought from three different studios',
        ],
        [
          'Templates',
          'Announcement frames, community kit, listing tiles, docs pages',
          'Your community produces assets that fight your own',
        ],
        [
          'Written rules',
          'A short document, not a hundred page bible',
          'Arguments in Figma at midnight before a listing',
        ],
      ],
    },
    {
      type: 'h2',
      text: 'Design for the surfaces you do not control',
    },
    {
      type: 'p',
      text: 'A startup brand mostly appears where the company puts it. A token appears in places that were designed by other people, with their own rules, their own dark mode and their own crops. That is the real design brief.',
    },
    {
      type: 'ul',
      items: [
        'Wallet lists, where the icon is tiny, circular and sitting on dark grey.',
        'Exchange and aggregator pages, where your mark is one row among hundreds.',
        'Chart tools, where your colour lands next to green and red candles.',
        'Social avatars, cropped to a circle whatever you upload.',
        'Community made memes, which will use your palette badly and often.',
      ],
    },
    {
      type: 'callout',
      text: 'Test the mark at 24 pixels, on a dark background, in a list next to two competitors. If it fails there, it fails in the place most people will actually see it.',
    },
    {
      type: 'p',
      text: 'This is why a monochrome variant and a dedicated coin icon are not optional extras. The full logo carries the story. The icon carries recognition at a size where the story is invisible.',
    },
    {
      type: 'h2',
      text: 'The token is part of the identity, not a badge on top of it',
    },
    {
      type: 'p',
      text: 'Teams often design the brand first and bolt the token on afterwards. The result is a beautiful identity and a coin icon that looks like a sticker. Treat the ticker, the coin mark and the chart colour as first class parts of the system, decided at the same time as the logo.',
    },
    {
      type: 'ol',
      items: [
        'Pick a ticker that survives autocorrect, ALL CAPS and a small screen.',
        'Draw the coin icon as its own object, not as the logo scaled down.',
        'Avoid a primary colour that fights green and red on a candle chart.',
        'Decide the on chain and off chain naming once, then write it down.',
      ],
    },
    {
      type: 'h2',
      text: 'What actually survives a bear market',
    },
    {
      type: 'p',
      text: 'Quiet markets do not usually kill a brand with a bad decision. They kill it with attrition. The budget drops, the designer who held the taste leaves, and the person left standing has exports but no source files. Six weeks later everything looks slightly off and nobody can say why.',
    },
    {
      type: 'p',
      text: 'What survives is boring and specific:',
    },
    {
      type: 'ul',
      items: [
        'Source files handed over on a schedule, not on request at the end.',
        'Fonts licensed in your name, with the licence written down.',
        'Templates a non designer can fill without breaking the system.',
        'A short rules document that answers the ten questions people actually ask.',
        'One named owner of the visual system inside the team.',
      ],
    },
    {
      type: 'p',
      text: 'That last one matters more than it sounds. A system with no owner becomes a suggestion within a month. You can see the difference in the projects on our [selected work](/work): the ones that still look coherent a year later are the ones where somebody on the team was allowed to say no.',
    },
    {
      type: 'h2',
      text: 'Rebranding without losing the community',
    },
    {
      type: 'p',
      text: 'Crypto communities are attached to marks in a way most industries are not. People put your logo in their display name. A rebrand that ignores that reads as a betrayal, however good the new work is.',
    },
    {
      type: 'p',
      text: 'Three rules keep it clean. Keep one recognisable constant, usually the colour or the silhouette, so the change reads as growth rather than a new project. Ship the whole surface in one day, because a half migrated brand looks like a hack. And announce it with assets people can immediately reuse, which turns the community into the distribution instead of the opposition.',
    },
    {
      type: 'p',
      text: 'A rebrand is also the moment to fix the things the first identity never had: the coin icon, the motion language, the announcement templates. If you are rewriting the system anyway, rewrite all of it.',
    },
    {
      type: 'h2',
      text: 'How we build it, and what to do when the date is already set',
    },
    {
      type: 'p',
      text: 'Our [Launch Sprint](/#service-cards) runs two weeks: a narrative spine and a visual micro system in the first days, then a teaser film, then launch page art direction, then a social starter kit. Two weeks is deliberately short. A protocol brand does not need a year of exploration, it needs a system it can start using on Monday and extend for the next twelve months.',
    },
    {
      type: 'p',
      text: 'Sometimes the date arrives before the system does. When that happens, we would rather point at something of ours than at a competitor: [ShipTeaser](https://shipteaser.com) is a product from the same founder as this studio. A product URL goes in, a 15 second 1080p motion graphics teaser comes out, sized for muted feeds, with an optional music bed and the first video free without a card. It reads your page, not your brand book, so it will not give you a coin icon, a motion language or the rules described above. It gets you one competent asset while the system is still being built.',
    },
    {
      type: 'p',
      text: 'Once the identity exists, everything downstream gets cheaper. The [Web3 launch video](/blog/web3-launch-video) inherits the motion language instead of inventing one, and the [token launch marketing](/blog/token-launch-marketing) calendar stops being a series of one off design requests.',
    },
    {
      type: 'cta',
      text: 'If your brand is a logo and a folder of exports, we can turn it into a system your team and your community can both use.',
      label: 'Book a call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'What does Web3 branding include beyond a logo?',
      answer:
        'Naming and ticker, a logo with a monochrome variant, a separate coin icon, typography, a palette with contrast rules, a motion language, asset templates for announcements and community channels, and a short rules document. The logo is the visible part. The templates and rules are what keep everything after it consistent.',
    },
    {
      question: 'How long does a Web3 brand identity take to build?',
      answer:
        'A usable system takes about two weeks when the scope is a launch: narrative spine, visual micro system, teaser, art direction and a starter kit. Deeper work such as full 3D language or a naming architecture across several products takes longer, but the launch does not need to wait for it.',
    },
    {
      question: 'Should the token icon be different from the project logo?',
      answer:
        'Usually yes. The logo carries the story at large sizes, the token icon has to be readable at 24 pixels in a circular crop on a dark background. Scaling the logo down almost always produces a muddy icon, so draw the coin mark as its own object from the start.',
    },
    {
      question: 'How do you rebrand a crypto project without upsetting holders?',
      answer:
        'Keep one recognisable constant such as the colour or the silhouette, migrate every surface on the same day, and release the new assets in formats the community can reuse immediately. People are attached to the mark they put in their display name, so give them something better to put there.',
    },
    {
      question: 'What should we own at the end of a branding engagement?',
      answer:
        'Source files, fonts licensed in your name, editable templates, and a rules document short enough that people read it. If a second studio could pick up your system and extend it without calling the first one, the handover was done properly.',
    },
  ],
  related: [
    {
      label: 'How to choose a Web3 marketing agency',
      href: '/blog/how-to-choose-a-web3-marketing-agency',
    },
    { label: 'Token launch marketing', href: '/blog/token-launch-marketing' },
    { label: 'Crypto video production', href: '/blog/crypto-video-production' },
    { label: 'Selected work', href: '/work' },
  ],
};
