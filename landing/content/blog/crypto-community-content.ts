import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'crypto-community-content',
  title: 'Crypto community content a Discord will actually repost',
  metaTitle: 'Crypto Community Content That Gets Reposted',
  metaDescription:
    'The crypto community content that travels: five formats a Discord reposts, a weekly rhythm that holds, and the template kit that keeps the volume cheap.',
  description:
    'Most community content is an announcement with a background image. Here are the weekly formats members actually carry outward, and the kit that produces them.',
  date: '2026-08-23',
  cluster: 'web3',
  keyword: 'crypto community content',
  answer:
    'Crypto community content is the weekly stream a Discord or Telegram can repost without editing it: progress cuts, explainer cards, meme ready frames, ritual posts and asset kits for holders. BuildLore produces it from a fixed template kit rather than from a new brief each week, so the volume stays high, the look stays consistent, and the community does the distribution.',
  blocks: [
    {
      type: 'p',
      text: 'Most crypto community content is an announcement with a background image behind it. A partnership goes live, someone writes three lines, drops a banner made in a hurry, pins it, and the channel goes quiet again. The team calls it content because it was posted.',
    },
    {
      type: 'p',
      text: 'The problem is not effort. A community manager posting five times a day is working harder than anyone else in the company. The problem is that almost none of it is repostable: text a holder cannot forward, images cropped wrong for the app the holder actually uses, updates written for people who already read every message in the channel.',
    },
    {
      type: 'p',
      text: 'Community content earns the name when members carry it outward without being asked. That is a production question before it is a marketing one. So this piece covers the formats that travel, the weekly rhythm that survives a quarter, and the kit that stops each post from costing a fresh brief.',
    },
    {
      type: 'h2',
      text: 'Why most community content stops at the announcements channel',
    },
    {
      type: 'p',
      text: 'A post that stays inside your own server has done nothing your pinned message was not already doing. The reach you want comes from the second hop: a member quoting it, a group forwarding it, a creator building on top of it. Almost all community content fails at that second hop, and usually for the same four reasons.',
    },
    {
      type: 'ul',
      items: [
        '**It is written for insiders.** An update that assumes the reader followed the last six weeks cannot be forwarded to anyone who did not.',
        '**It has no self contained frame.** Screenshots of your own text carry no context once they leave the channel, so the person receiving them has to ask what this is.',
        '**It looks improvised.** Members repost things that make them look informed. An asset that reads as rushed makes the sharer look rushed too.',
        '**It arrives at random.** Nothing to anticipate means nothing to check for. A rhythm is what turns a channel into a habit.',
      ],
    },
    {
      type: 'p',
      text: 'None of that is fixed by posting more often. It is fixed by changing what gets produced, which means deciding on a small set of formats and building them properly once.',
    },
    {
      type: 'h2',
      text: 'The five formats a community actually reposts',
    },
    {
      type: 'p',
      text: 'Across crypto projects the same handful of formats do the travelling. They are not exotic, and that is the point: a member has to understand the shape of the thing in half a second to decide it is worth forwarding.',
    },
    {
      type: 'table',
      headers: ['Format', 'What it is', 'Why it travels'],
      rows: [
        [
          'Progress cut',
          'A 10 to 20 second silent clip of something that now works, framed in the product itself',
          'Proof beats promises, and a working interface is the cheapest proof a project owns',
        ],
        [
          'Explainer card',
          'One mechanism, one card, readable at thumbnail size without opening it',
          'Members forward it to answer a question they would otherwise have to type out',
        ],
        [
          'Meme ready frame',
          'A branded empty frame with the caption area left open on purpose',
          'The community supplies the joke, your identity comes along with it',
        ],
        [
          'Ritual post',
          'The same slot every week: shipped this week, question of the week, community pick',
          'Repetition creates anticipation, and anticipation is what a random calendar never buys',
        ],
        [
          'Holder kit',
          'Avatars, banners, stickers, wallpapers, all in the identity',
          'People wear it, which puts your mark in places you cannot buy your way into',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Notice how little of this is announcements. Announcements are necessary and they are not content: they inform people who are already inside. The five formats above are built so that the person receiving them was not in the room.',
    },
    {
      type: 'h2',
      text: 'A weekly rhythm you can hold for a quarter',
    },
    {
      type: 'p',
      text: 'Volume in crypto is not optional. A quiet week reads as a dead project, and the market has a very short memory. The trick is designing a week that a small team can actually deliver every week, rather than a heroic one that collapses in three.',
    },
    {
      type: 'table',
      headers: ['Slot', 'Cadence', 'Production cost once the kit exists'],
      rows: [
        [
          'Progress cut',
          'Weekly, tied to what shipped',
          'A capture and a template pass, under an hour',
        ],
        [
          'Explainer card',
          'One or two per week',
          'Text into a locked layout, minutes',
        ],
        [
          'Meme frame',
          'Weekly, plus reactive drops on hot moments',
          'Near zero, the frame already exists',
        ],
        [
          'Ritual post',
          'Same day, same hour, every week',
          'Minutes, the format never changes',
        ],
        [
          'Holder kit refresh',
          'Once a month, or on a milestone',
          'A short batch, produced from existing components',
        ],
      ],
    },
    {
      type: 'p',
      text: 'That is three to five assets a week, which is exactly the load our Growth package is built around, alongside a 48 hour response on hot moments. The cadence is only sustainable because none of it starts from a blank canvas.',
    },
    {
      type: 'p',
      text: 'The weeks around a conference are the exception, because the schedule is set by the event rather than by what shipped. Plan those separately, using the loop and the footage the stand produces, which we break down in our post on [crypto conference booth content](/blog/crypto-conference-booth-content).',
    },
    {
      type: 'callout',
      text: 'If a weekly asset takes a new brief, it will not be weekly by week four. The rhythm is a production decision, not a discipline problem.',
    },
    {
      type: 'h2',
      text: 'Build from a kit, not from a blank canvas',
    },
    {
      type: 'p',
      text: 'The kit is what separates a project that posts consistently from one that posts when someone has time. It is a small set of locked components that a community manager can fill in without making a single design decision, and without asking anyone for approval on the look.',
    },
    {
      type: 'ol',
      items: [
        'Locked layouts for each recurring format, with the type sizes, safe areas and crops already fixed for Discord, Telegram and X.',
        'A motion behaviour that is written down: how things enter, how long they hold, how they leave, so two clips made weeks apart still feel like one project.',
        'A component library of brand elements, product frames, icons and end cards, so building a post is assembly rather than design.',
        'Caption rules: what goes in the frame, what goes in the post text, and what never gets typed over the artwork.',
        'Source files and usage rights handed over, so the next person can extend the kit instead of rebuilding it.',
      ],
    },
    {
      type: 'p',
      text: 'This is the same system a proper identity gives you, applied to the weekly grind rather than the launch. If none of it exists yet, the kit is the first thing to buy, and our note on [Web3 branding](/blog/web3-branding) covers what that system has to contain before it can carry a weekly cadence. The static furniture the server itself needs, icon, banner, role colours, emotes and announcement frames, is a separate list, and it is in our post on [Discord and Telegram visual assets](/blog/discord-and-telegram-visual-assets).',
    },
    {
      type: 'p',
      text: 'One gap the kit does not cover: a moment lands today, there is no capture, no components, and nothing worth escalating into a real build. We would rather name something of ours than a competitor for that case. [ShipTeaser](https://shipteaser.com) is a product from the same founder as this studio: you paste a product URL, it returns a 15 second 1080p motion graphics teaser designed for muted feeds, with an optional music bed, and the first video is free without a card. It has no voice over, no timeline to edit and no visual system to inherit, so it fills a slot on a bad week, and it will never be the kit.',
    },
    {
      type: 'h2',
      text: 'Hand the community the tools, not only the output',
    },
    {
      type: 'p',
      text: 'The strongest crypto community content is not made by the team at all. It is made by members using the pieces the team published, which multiplies output and, more importantly, gives people a reason to make something with your mark on it.',
    },
    {
      type: 'ul',
      items: [
        '**Publish the assets, not just the posts.** Logos in every variant, a token icon that survives 24 pixels, backgrounds, stickers, empty frames.',
        '**Say what is allowed.** A short usage note prevents both the awkward takedown message and the fake announcement built from your own banner.',
        '**Leave deliberate blanks.** A frame with an empty caption area invites a post. A finished asset invites nothing.',
        '**Repost the good ones properly.** A member asset shown in the official channel is worth more than any incentive campaign, and it costs nothing.',
        '**Seed the creators who already post.** Give the people making content anyway the pieces that make their work look better.',
      ],
    },
    {
      type: 'p',
      text: 'That last point is a habit rather than a campaign, and it compounds. It also connects to the launch calendar: the same kit that carries a quiet week is what a [token launch marketing](/blog/token-launch-marketing) push draws from when the date finally lands.',
    },
    {
      type: 'h2',
      text: 'How to tell it is working',
    },
    {
      type: 'p',
      text: 'Member count is the vanity number here, and it can be bought. The signals worth tracking are about circulation: whether the content leaves the server, and whether it comes back changed.',
    },
    {
      type: 'ul',
      items: [
        '**Assets appear outside your channels.** Someone posts your explainer card in a group you do not run, without being asked.',
        '**Members answer each other with your material.** A card used as an answer has replaced a support message, and it keeps working.',
        '**Community made versions show up.** Edits, remixes and jokes built on your frames mean the identity is being used rather than admired.',
        '**Profile pictures and banners carry the mark.** A holder kit that people wear is distribution you did not pay for.',
        '**The quiet weeks stop being visible.** With a rhythm in place, a week with no news still looks like a project that is working.',
      ],
    },
    {
      type: 'p',
      text: 'We build this the same way for every project: identity and kit first, then a steady weekly output on top, with creator seeding and lore maintenance in the monthly packages. Recent work across crypto and tech projects is on [the work](/work), and the shape of each engagement is on the [service cards](/#service-cards). What we do not do is moderate your Discord or buy media: the community is yours to run, the material is ours to make.',
    },
    {
      type: 'cta',
      text: 'We build the identity kit and the weekly stream that comes out of it, for crypto projects that need volume without losing the look.',
      label: 'Book a call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'What counts as crypto community content?',
      answer:
        'The recurring material a community can repost outside your own channels: short progress cuts of features that work, explainer cards for one mechanism, branded frames members add captions to, a weekly ritual post, and a downloadable kit of avatars and banners. Announcements are separate. They inform people already inside the server.',
    },
    {
      question: 'How often should a crypto project post community content?',
      answer:
        'Three to five assets a week is a realistic floor for an active project, plus a reactive drop when something in the market moves. The cadence matters more than the count. A fixed weekly slot builds an expectation, while a burst followed by three quiet weeks reads as a project losing momentum.',
    },
    {
      question: 'Can a community manager produce this without a designer?',
      answer:
        'Yes, once a kit exists. Locked layouts, fixed crops for each platform, a component library and written caption rules turn each post into assembly rather than design. Without that kit, the same person is making design decisions at midnight, which is why the look drifts and the cadence quietly collapses.',
    },
    {
      question: 'How do you get a Discord to repost your content?',
      answer:
        'Make assets that make the sharer look informed. That means self contained frames a stranger can understand, thumbnail readable text, and deliberate blanks members can fill with their own caption. Then publish the source pieces so people can build their own versions, and repost the good ones in the official channel.',
    },
    {
      question: 'Is community content the same as a launch campaign?',
      answer:
        'No, but they share a kit. A launch is a dated push with a film, cuts and an announcement sequence. Community content is the weekly stream that runs between launches and keeps the project visible. Both draw on the same identity system, which is why building that system once is what makes either affordable.',
    },
  ],
  related: [
    {
      label: 'Web3 branding',
      href: '/blog/web3-branding',
    },
    {
      label: 'Token launch marketing',
      href: '/blog/token-launch-marketing',
    },
    {
      label: 'NFT marketing video',
      href: '/blog/nft-marketing-video',
    },
  ],
};
