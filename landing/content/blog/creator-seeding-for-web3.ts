import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'creator-seeding-for-web3',
  title: 'Creator seeding for web3: sending assets people actually use',
  metaTitle: 'Creator Seeding for Web3: What to Send',
  metaDescription:
    'What belongs in a creator seeding drop for a web3 project, why most kits go unused, when to send one, and how to tell whether the seeding is working.',
  description:
    'Most seeding drops are a Drive folder and a polite request. What gets posted is the kit that saves the creator twenty minutes of unpaid production.',
  date: '2026-09-01',
  cluster: 'web3',
  keyword: 'creator seeding for web3',
  answer:
    'Creator seeding for web3 means handing the people who already post about your category material they can publish without doing production work first. BuildLore builds those drops as usable kits rather than brand folders: cut out marks, motion backplates, empty frames, real product capture and a short note saying what is allowed, sent before a moment rather than on the morning of it.',
  blocks: [
    {
      type: 'p',
      text: 'A growth lead decides to work with creators. What goes out is a direct message with a Drive link, a folder named brand-assets-final, and a sentence asking for support around the launch. Inside the folder there is a logo as a PNG on a white square, one app screenshot, and a twelve page PDF of brand guidelines.',
    },
    {
      type: 'p',
      text: 'Nothing gets posted. Not because the creators refused, but because the folder asked them to do work. Someone has to cut the mark off the white square, find a background, guess whether recolouring is allowed, and decide what is safe to claim about a token. That is twenty minutes of unpaid production before a post exists, and the same creator has three other projects in the inbox who sent something easier to use.',
    },
    {
      type: 'p',
      text: 'Seeding is not a budget line, it is a supply problem. The projects that get posted about constantly are the ones whose material is the path of least resistance. So the useful questions are what goes in the drop, when it goes out, and what the message around it actually says.',
    },
    {
      type: 'h2',
      text: 'What creator seeding is, and what it is not',
    },
    {
      type: 'p',
      text: 'Seeding is giving people who publish in your category the raw material to make better work, in return for nothing enforceable. No contract, no posting schedule, no approval loop. You are betting that a creator who was going to make something this week will make it about you because you made that the cheapest option available to them.',
    },
    {
      type: 'p',
      text: 'It is worth naming what it is not, because the words get used interchangeably and they buy very different things.',
    },
    {
      type: 'ul',
      items: [
        '**Not paid placement.** A paid post is a media buy with a deliverable and a date. That is a legitimate spend, it is simply a different one, and it stops the day the budget stops.',
        '**Not an ambassador programme.** Those come with obligations, tiers and administration. Seeding has none, which is why it can run continuously without anyone managing it.',
        '**Not a press kit.** A press kit is built for a journalist who needs a correct logo at print resolution. A seeding drop is built for someone who needs a post to look good in a feed by tonight.',
        '**Not community management.** Nobody is moderating a Discord here. The material is what you supply, the conversation belongs to the people having it.',
      ],
    },
    {
      type: 'p',
      text: 'The practical difference is who does the production. In paid placement you are buying someone else attention and they build the asset. In seeding you are supplying the asset and letting them decide whether it is worth their attention. That is why the quality of the kit is the entire strategy, and why a spreadsheet of two hundred handles with nothing good to send them is a plan that does not survive first contact.',
    },
    {
      type: 'h2',
      text: 'Why most drops go unused',
    },
    {
      type: 'p',
      text: 'The reasons repeat across projects, and none of them are about the creator being unresponsive.',
    },
    {
      type: 'ul',
      items: [
        '**The mark is flattened.** A logo baked onto a white or dark square cannot go on anything. Transparent, in every colour variant, in a format that survives being dropped straight into an editor, or it will not be used.',
        '**Nothing moves.** Feeds reward motion. If the entire drop is static, every creator who works in video has to source their own footage, and most will source someone else.',
        '**Rules that read as legal risk.** A guidelines PDF written for an agency of record tells a creator, in effect, that using your mark wrongly is dangerous. The safe response to that is not using it at all.',
        '**No product footage.** Screenshots at browser resolution with empty test data. Clean capture of the real interface doing a real thing is the single asset creators ask for most and receive least.',
        '**It arrives on the morning of.** A drop sent the day of a listing or a mint arrives after everyone has already planned what they are posting. The kit needed to be there a week earlier.',
        '**One size, one ratio.** Assets exported for a single platform put the resizing work back on the creator, and the resize is where a brand quietly falls apart.',
      ],
    },
    {
      type: 'callout',
      text: 'A useful test before sending anything: could a creator with no design skill and no context make a competent post from this folder in five minutes? If the honest answer is no, the drop is a request for a favour, not a gift.',
    },
    {
      type: 'h2',
      text: 'What belongs in the drop',
    },
    {
      type: 'p',
      text: 'This is the shape we build for projects running seeding continuously. It is not large, and once it exists it barely changes between moments.',
    },
    {
      type: 'table',
      headers: ['Piece', 'Form it takes', 'What it saves the creator'],
      rows: [
        [
          'The mark set',
          'Transparent files, light and dark variants, a version legible at 24 pixels',
          'Cutting a logo out of a square and hoping the recolour is allowed',
        ],
        [
          'Motion backplates',
          'Short looping clips with no text, in vertical and square',
          'Sourcing footage, which is the step where an unrelated stock look creeps in',
        ],
        [
          'Empty frames',
          'Layouts with a blank caption area, in the two ratios they actually post in',
          'Building a layout from nothing, and guessing where your mark belongs',
        ],
        [
          'Real product capture',
          'Clean screen recording of one genuine flow, at full resolution',
          'Filming your interface off a laptop screen, or inventing it in a mockup',
        ],
        [
          'A reaction set',
          'Stickers and small loops with no announcement attached',
          'Waiting for a launch to have a reason to mention you',
        ],
        [
          'The note',
          'One short page, plain language, in the same folder',
          'Asking permission and waiting two days for an answer',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Two of those deserve a note. The empty frames matter more than they look: a finished asset invites nothing, while a frame with a blank area invites a caption, and a caption is a post. The reaction set matters because it decouples seeding from your launch calendar. A creator who has your stickers can post about you on a Tuesday when nothing is happening, which is most Tuesdays. The same principle drives the channel kits described in our post on [Discord and Telegram visual assets](/blog/discord-and-telegram-visual-assets), where the pieces people reuse are the ones deliberately left unfinished.',
    },
    {
      type: 'h2',
      text: 'The note that goes with it',
    },
    {
      type: 'p',
      text: 'The one page of text in the folder does more work than any single asset, because it removes the hesitation. It needs to answer four questions and then stop.',
    },
    {
      type: 'ol',
      items: [
        '**What you may do without asking.** Recolour within this set, crop, add captions, cut the loops, post anywhere. Say it explicitly, because silence reads as no.',
        '**What you may not do.** Announce partnerships that do not exist, imply returns, restyle the mark into something else, use it to promote a token sale you are not running. Short list, plain words, no legal register.',
        '**What is not public yet.** If something in the folder is under embargo until a date, say the date. Creators respect embargoes far more reliably than people expect, provided they are told rather than discovered.',
        '**Who to reach, and how fast.** One name, one channel, and an honest response time. A creator who can get a variant within a few hours becomes a repeat poster.',
      ],
    },
    {
      type: 'p',
      text: 'The tone matters here as much as the content. Written like a licence agreement, it produces the same paralysis as the guidelines PDF. Written as a colleague explaining what is fine, it produces posts. This is downstream of the identity work itself: a system with clear rules is easy to describe in a paragraph, and one that was never systematised needs twelve pages to defend, which is part of why we treat [web3 branding](/blog/web3-branding) as the thing that makes everything after it cheaper.',
    },
    {
      type: 'h2',
      text: 'Timing: before the moment, not during it',
    },
    {
      type: 'p',
      text: 'The most common failure is not the kit at all, it is the calendar. Assets sent on the day of a mint, a listing or an airdrop arrive after every creator has already decided what they are making. Send a week ahead with the embargo stated, and you are in the plan rather than competing with it.',
    },
    {
      type: 'p',
      text: 'Between moments, seeding should be a habit rather than a campaign: a small drop when the visual system changes, when a real feature ships, when a new set of loops exists. Volume is not the point. Being the project whose folder is already on their desktop is the point.',
    },
    {
      type: 'p',
      text: 'Then there is the request you cannot plan for, when a creator with real reach asks for one specific thing today and nobody is free to make it. We would rather point at something of ours than at a competitor here: [ShipTeaser](https://shipteaser.com) is a product from the same founder as this studio, where a product URL goes in and a 15 second 1080p motion graphics teaser comes out, sized for muted feeds, with an optional music bed and the first video free without a card. It reads a page, not your kit, so it will not match your motion language, and there is no voice-over, no avatars and no timeline to edit. As a way to answer a creator the same hour instead of two days later, it is a fair trade. As the thing the rest of the drop is built from, it is not.',
    },
    {
      type: 'h2',
      text: 'How to tell it is working',
    },
    {
      type: 'p',
      text: 'Follower counts and impression screenshots are the wrong instrument, because a seeding programme does not produce a spike. It produces a slow change in who makes content about you without being asked. The signals worth watching are all about circulation.',
    },
    {
      type: 'ul',
      items: [
        '**Assets appearing you did not place.** The clearest signal in the whole programme, and the one nobody reports because it does not arrive in a dashboard.',
        '**Requests for variants.** A creator asking for a vertical version or a different colourway has already decided to post. Answer those first, always.',
        '**Your frames coming back edited.** Someone took the empty layout and put their own thing in it. That is the asset doing exactly what it was built to do.',
        '**Repeat posters.** The same handful of accounts using your material across several months is worth more than a hundred one time mentions.',
        '**Fewer requests for basics.** When people stop asking for a usable logo, the folder is finally doing its job.',
      ],
    },
    {
      type: 'p',
      text: 'One caution on measurement. Do not build an attribution model for this. The cost of instrumenting seeding usually exceeds the cost of running it, and the honest read is qualitative: are more competent people making better looking things about you this quarter than last. If the answer is no, the kit is the first place to look, not the outreach list.',
    },
    {
      type: 'p',
      text: 'Seeding sits on top of the same asset system as everything else you publish, which is why we do not treat it as a separate workstream. It draws from the identity, the motion language and the weekly output described in our post on [crypto community content](/blog/crypto-community-content). You can see the kind of systems these drops come out of across [the projects](/work), and the monthly shapes that keep them stocked on the [service cards](/#service-cards).',
    },
    {
      type: 'cta',
      text: 'If you have a list of creators and nothing good to send them, that is a two week problem, not a quarter long one. Tell us what exists today and what moment is coming, and we will tell you what the drop should contain.',
      label: 'Book a 30 minute call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'What is creator seeding in web3?',
      answer:
        'It is giving creators who already post in your category the material to make something about your project, with no payment and no obligation to post. The bet is that people producing content this week will make it about you because you made that the easiest option. It is supply, not media buying.',
    },
    {
      question: 'Do you have to pay creators to seed them?',
      answer:
        'No, and mixing the two muddles both. Paid placement buys a deliverable on a date and stops when the budget does. Seeding costs the production of a kit that then serves everyone you send it to. Many projects run both, but the seeding drop should stand on its own without a payment attached.',
    },
    {
      question: 'What should a creator seeding kit contain?',
      answer:
        'Transparent marks in every variant, short motion backplates with no text, empty frames in the ratios creators post in, clean capture of the real product, a set of stickers and loops with no announcement attached, and one short page saying what is allowed. Everything sized for at least two ratios.',
    },
    {
      question: 'When should assets be sent to creators before a launch?',
      answer:
        'About a week ahead, with any embargo date stated plainly. Anything arriving on the morning of the listing or the mint lands after creators have planned their week. Between moments, send small drops when the visual system changes or a real feature ships, so your folder stays the one already on their desktop.',
    },
    {
      question: 'How do you measure whether creator seeding works?',
      answer:
        'By circulation rather than reach. Watch for assets appearing you did not place, requests for variants, your empty frames coming back with someone else content in them, and the same accounts posting across months. Building an attribution model for this usually costs more than running the programme itself.',
    },
  ],
  related: [
    {
      label: 'Crypto community content',
      href: '/blog/crypto-community-content',
    },
    {
      label: 'Discord and Telegram visual assets',
      href: '/blog/discord-and-telegram-visual-assets',
    },
    { label: 'Web3 branding', href: '/blog/web3-branding' },
  ],
};
