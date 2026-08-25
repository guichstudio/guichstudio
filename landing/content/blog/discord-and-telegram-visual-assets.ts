import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'discord-and-telegram-visual-assets',
  title: 'Discord and Telegram visual assets: the day one kit',
  metaTitle: 'Discord and Telegram Visual Assets: The Day One Kit',
  metaDescription:
    'The visual assets a Discord or Telegram community needs on day one: what each surface has to survive, what breaks at small sizes, and what to hand the mods.',
  description:
    'The community is the surface your most engaged audience stares at every day, and it is usually the one nobody designed. Here is the kit, and the order to build it in.',
  date: '2026-08-25',
  cluster: 'web3',
  keyword: 'discord and telegram visual assets',
  answer:
    'Discord and Telegram visual assets are the kit a community server needs to look like the brand it belongs to: server icon, banner and invite splash, role colours, emotes and stickers, announcement frames, pinned message art and link previews. BuildLore builds them from the same visual system as the launch work, sized for the small circles and dark themes they actually render in.',
  blocks: [
    {
      type: 'p',
      text: 'The brand book gets signed off, the launch film gets approved, the site goes live. Then someone remembers the server. It gets set up in an afternoon by whoever is around, with the logo cropped into a square, role colours picked from a palette in a hurry, and a welcome graphic made at midnight by a moderator who was trying to help.',
    },
    {
      type: 'p',
      text: 'A week later that server holds the most attentive audience the project will ever have. They are in it every day. They screenshot it, they repost from it, they judge the project by it. And it looks like a different company from the one on the landing page.',
    },
    {
      type: 'p',
      text: 'The fix is not more design. It is deciding that the community surfaces are part of the identity, not an afterthought attached to it, and building the small set of assets that place actually needs before the doors open.',
    },
    {
      type: 'h2',
      text: 'The server is the brand surface people spend the most time in',
    },
    {
      type: 'p',
      text: 'A feed post gets a second and a half. A launch film gets watched once. The server sits open in a tab all day, next to the other servers someone is in, and it is the only brand surface a person returns to on purpose several times a week.',
    },
    {
      type: 'p',
      text: 'It is also the surface with the most components. The icon in the sidebar, the banner above the channel list, the colour attached to every name in every message, the emotes people use instead of words, the pinned message someone reads before deciding to stay. Each one is small, none of them are hard, and together they decide whether the place reads as a project or as a group chat with a logo.',
    },
    {
      type: 'callout',
      text: 'A quick test. Open your server on a phone, in dark mode, in the list next to every other server the person is in. If you cannot pick your own icon out of that column in under a second, neither can the member you are hoping will come back tomorrow.',
    },
    {
      type: 'h2',
      text: 'What each surface actually has to survive',
    },
    {
      type: 'p',
      text: 'These assets fail in ways feed graphics never do. They get shrunk to the height of a line of text, masked into circles, rendered on a dark background nobody tested, and shown next to content that is not yours. The spec is not a pixel size, it is a condition.',
    },
    {
      type: 'table',
      headers: ['Surface', 'Where it is seen', 'What kills it'],
      rows: [
        [
          'Server icon',
          'A small circle in a vertical list of other servers',
          'A full wordmark shrunk until it reads as a smudge',
        ],
        [
          'Banner and invite splash',
          'The invite preview, before anyone has joined',
          'A crop that puts the mark behind the join button',
        ],
        [
          'Role colours',
          'Every name, in every message, permanently',
          'Colours chosen on white, unreadable on the dark theme',
        ],
        [
          'Emotes and stickers',
          'Inline, roughly the height of one line of text',
          'Detail that only exists above thumbnail size',
        ],
        [
          'Announcement frames',
          'Screenshots, quote posts, other people servers',
          'Type near the edges, cut off by the repost crop',
        ],
        [
          'Pinned welcome art',
          'The first thing a new member reads',
          'A wall of decoration with no instruction in it',
        ],
        [
          'Telegram channel avatar',
          'A circle in a chat list beside personal chats',
          'A square lockup with its own corners cut off',
        ],
        [
          'Link preview image',
          'Every time your link is pasted into a group',
          'No preview image set, so a grey box ships instead',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The last row is the one teams find hardest to believe. The preview image on your own site is a community asset, because most people meet your link inside a chat rather than in a browser. If nothing is set, the platform renders a blank card, and a blank card in a group of two thousand people is a worse first impression than a mediocre graphic.',
    },
    {
      type: 'h2',
      text: 'Build the kit in this order',
    },
    {
      type: 'p',
      text: 'Most kits are built largest first, because that is the flattering way to present work. Community assets should be built the other way round, because the smallest rendering is the one that decides whether the rest is ever seen.',
    },
    {
      type: 'ol',
      items: [
        '**The mark at its smallest, first.** Draw the icon at the size it will actually appear, in a circular mask, before touching anything else. If it needs a simplified variant, that variant is the real mark for every social and community surface, and the full lockup is the exception.',
        '**Colour, dark theme first.** Pick the role colours and the accent against the dark background the app defaults to, then check they survive the light one. Doing it in the other order produces a palette that looks correct in the brand book and illegible in the product.',
        '**The emote and sticker set.** Six to ten, drawn to read at text height, covering the reactions the community already uses in words. This is the asset members touch most and the one almost nobody briefs.',
        '**Announcement and update frames.** Two or three locked layouts with the safe areas already fixed, so a moderator filling in a headline cannot break the composition.',
        '**Structure art.** Channel category headers, role art, event covers. Cosmetic on their own, but they are what makes the channel list scan as a designed space rather than a list of nouns.',
        '**The handover file.** The editable templates, the naming, and one page saying what may be changed and what may not.',
      ],
    },
    {
      type: 'p',
      text: 'Six items, and none of them require a new visual language. If the identity already exists, this is a translation job. If it does not, building the community kit is a fast way to find out which parts of the identity were never resolved, because everything vague collapses at small sizes.',
    },
    {
      type: 'h2',
      text: 'Design for dark, then check it inside the app',
    },
    {
      type: 'p',
      text: 'Crypto communities live in dark mode. A mark built on white with thin strokes and a soft gradient will disappear, and a transparent export that looked clean on the presentation slide will show a grey halo against a dark panel. Both problems are invisible in a design file and obvious to every member.',
    },
    {
      type: 'p',
      text: 'So the review has to happen in the actual place. Put the icon in a test server, sit it beside real servers, post the emotes in a channel, send the link into a chat and look at the preview card. This takes twenty minutes and it catches the failures that a full page mockup is specifically designed to hide.',
    },
    {
      type: 'p',
      text: 'It is the same principle as designing a teaser for a muted feed instead of a boardroom screen, which we cover in the post on [teaser video for app launch](/blog/teaser-video-for-app-launch): the review context has to match the delivery context, or the approval means nothing.',
    },
    {
      type: 'h2',
      text: 'Templates keep the volume honest',
    },
    {
      type: 'p',
      text: 'The kit is day one. The problem starts on day thirty, when there is an announcement every other day and no time for a design round on any of them. That is where communities drift: the first announcements are on brand, then a mod makes one, then someone screenshots a spreadsheet, and by month three the channel is a scrapbook.',
    },
    {
      type: 'p',
      text: 'Locked templates fix that better than a style guide does, because a template makes the correct output the fastest one. A moderator who can drop a headline into a frame in two minutes will use the frame. A moderator who has to read a fourteen page guide will open whatever tool is nearest. The weekly rhythm on top of those templates is its own subject, covered in our post on [crypto community content](/blog/crypto-community-content).',
    },
    {
      type: 'p',
      text: 'There is also the moment when the announcement wants motion and nobody has a day to spend on it. We should be transparent, because the tool is ours: [ShipTeaser](https://shipteaser.com) was built by the same founder as this studio, and it turns a product URL into a 15 second 1080p motion graphics teaser made for muted feeds, with an optional music bed and the first one free without a card. It has no voice-over, no screen recording and no timeline to edit, and it will not give you the visual system the rest of the kit inherits from. For a pinned clip you needed this morning, that trade usually works. For the identity underneath it, it is not the job.',
    },
    {
      type: 'h2',
      text: 'Hand the community the tools, and be clear about the boundary',
    },
    {
      type: 'p',
      text: 'The best outcome is not that every asset comes from us. It is that members make things that look like they belong. That only happens if the raw material is available: the mark in the formats people actually paste, the emote set as files, a frame that can be filled in, the fonts named, the colours listed as values rather than described in prose.',
    },
    {
      type: 'ul',
      items: [
        '**Editable frames**, not flattened exports, for anything a moderator has to fill in weekly.',
        '**The icon and mark in several forms**, including the simplified small size variant, so nobody has to improvise a crop.',
        '**Named colours and fonts**, listed as values, in the same file as the templates rather than in a separate brand PDF.',
        '**One page of rules**, short enough to read once: what can be recoloured, what cannot be redrawn, what must never be stretched.',
        '**Source files and usage rights**, delivered as part of the engagement so the team is not blocked when we are not around.',
      ],
    },
    {
      type: 'p',
      text: 'And the boundary, said plainly: we make the material, we do not run the room. Moderation, community management and paid distribution are not what we do, and a studio that offers all of it at once is usually thin at each. What we do is the identity, the kit and the ongoing assets, which you can see across the projects on [the work](/work) and in the shape of each engagement on the [service cards](/#service-cards).',
    },
    {
      type: 'cta',
      text: 'We build community kits from the same visual system as the launch work, sized and tested for the surfaces they actually render in.',
      label: 'See the work',
      href: '/work',
    },
  ],
  faq: [
    {
      question: 'What visual assets does a Discord server need at launch?',
      answer:
        'A server icon that reads inside a small circle, a banner and invite splash, role colours checked against the dark theme, an emote and sticker set, two or three locked announcement frames, and pinned welcome art that gives an instruction rather than decoration. Everything else can wait until the community tells you what it needs.',
    },
    {
      question: 'How are Telegram assets different from Discord assets?',
      answer:
        'Telegram leans on the channel avatar, sticker packs and the link preview card, because most of what people see arrives inside a chat rather than inside a designed space. Discord has more furniture: role colours, category headers, event covers, emotes. The kit overlaps heavily, but the crops and the masks differ, so exports should be made per platform.',
    },
    {
      question: 'Can our moderators make the announcement graphics themselves?',
      answer:
        'Yes, and they should, provided they are given locked templates rather than a style guide. A frame with fixed safe areas and type sizes takes two minutes to fill and cannot be broken. A written guide takes half an hour to follow, so under pressure it gets skipped and the channel drifts off brand within weeks.',
    },
    {
      question: 'Do we need a new identity before building a community kit?',
      answer:
        'Not usually. If an identity exists, this is a translation job into small, dark, masked surfaces. If building the kit turns out to be difficult, that is useful information: it normally means the mark has no small size variant and the palette was never tested on a dark background, both of which are worth fixing anyway.',
    },
    {
      question: 'How long does a community asset kit take to produce?',
      answer:
        'When the visual system already exists, it is a short piece of work that runs alongside the launch build rather than after it. When it does not, the kit comes out of the same first days that settle the narrative and the visual system, because every community asset inherits from decisions made there.',
    },
  ],
  related: [
    { label: 'Crypto community content', href: '/blog/crypto-community-content' },
    { label: 'Token launch marketing', href: '/blog/token-launch-marketing' },
    { label: 'Web3 branding', href: '/blog/web3-branding' },
  ],
};
