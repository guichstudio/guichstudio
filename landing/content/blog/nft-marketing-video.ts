import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'nft-marketing-video',
  title: 'NFT marketing video: what to show instead of the art loop',
  metaTitle: 'NFT Marketing Video: Past the Art Loop',
  metaDescription:
    'Most collection reveals are a rotating art loop with a synth track. Here is what an NFT marketing video has to establish instead, and the assets a mint needs.',
  description:
    'A rotating grid of traits set to a synth track is not a marketing video, it is a screensaver. What a collection reveal has to establish, and what to build around it.',
  date: '2026-08-15',
  cluster: 'web3',
  keyword: 'nft marketing video',
  answer:
    'An NFT marketing video is a short film that gives a collection a reason to exist beyond its art. The art loop shows what the pieces look like; the film has to answer who made this, what the world is, and why now. BuildLore builds these as a narrative spine plus a mint asset kit, not as a single reveal clip.',
  blocks: [
    {
      type: 'p',
      text: 'The default reveal video is the same every time. A grid of traits rotates in, pieces flip through variations, a synth track builds, the logo lands, a date appears. It is posted three days before mint and it gets polite engagement from people already in the Discord.',
    },
    {
      type: 'p',
      text: 'It fails for a structural reason, not a taste one. The loop shows the art, and the art is the one thing a buyer can already scroll through on the mint page. The video spends its entire runtime answering a question nobody had.',
    },
    {
      type: 'p',
      text: 'The questions people actually have are different, and none of them are answered by watching a JPEG turn.',
    },
    {
      type: 'h2',
      text: 'What the art loop leaves unanswered',
    },
    {
      type: 'p',
      text: 'Put yourself in the timeline of someone who has never heard of the collection. They see nine seconds of stylized characters. Here is the gap between what the film says and what they are deciding.',
    },
    {
      type: 'table',
      headers: ['What the viewer is asking', 'What the art loop answers'],
      rows: [
        ['Who made this and can they finish it?', 'Nothing'],
        ['What is this a piece of, beyond an image?', 'Nothing'],
        ['Is anyone I recognize already here?', 'Nothing'],
        ['What happens after I hold one?', 'Nothing'],
        ['Does the art look good?', 'Yes, this part works'],
      ],
    },
    {
      type: 'p',
      text: 'One row out of five. That is a fair description of most reveal videos, and it explains why they perform the way they do: they are a gallery, and galleries do not convert strangers.',
    },
    {
      type: 'h2',
      text: 'Establish the world before you show the pieces',
    },
    {
      type: 'p',
      text: 'A collection that reads as valuable reads as a piece of something larger. The film is the cheapest place to establish that larger thing, because motion can imply a world in three seconds where a static grid cannot.',
    },
    {
      type: 'p',
      text: 'Concretely, that means the first shots are not the assets. They are the environment, the typography, the interface, the rules of the place. The pieces arrive as inhabitants of a world the viewer has already accepted.',
    },
    {
      type: 'callout',
      text: 'A useful test: mute the film and remove every piece of art from it. If what is left says nothing about the project, the film has no spine, only a subject.',
    },
    {
      type: 'ul',
      items: [
        '**Give it a physics.** How things move in your world is a brand decision. Weightless drifting reads as generic; a specific motion signature is remembered.',
        '**Show the surface, not just the asset.** The mint page, the terminal, the map, the inventory. Interfaces make a project feel built rather than drawn.',
        '**Name the maker on screen.** Anonymous is a choice, but an unattributed collection has to work harder in the first three seconds, not less.',
        '**Hold one piece long enough to read it.** Twenty pieces at four frames each is a texture. One piece held for a full second is a character.',
      ],
    },
    {
      type: 'h2',
      text: 'One film is not a campaign',
    },
    {
      type: 'p',
      text: 'The other failure is treating the reveal as the deliverable. A mint is a schedule, and each date on it wants a different asset. Producing them separately is how budgets disappear; producing them from one build is how they stay sane.',
    },
    {
      type: 'table',
      headers: ['Moment', 'Asset', 'Job'],
      rows: [
        [
          'Two weeks out',
          'Teaser, under 15 seconds',
          'Establish the world, not the art',
        ],
        [
          'One week out',
          'Trait or mechanic explainer',
          'Make the system legible without a thread',
        ],
        [
          'Mint day',
          'Countdown and confirmation cuts',
          'Reduce hesitation at the click',
        ],
        [
          'After',
          'Holder cuts and community loops',
          'Give holders something to repost',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Every row here is a reframe or a recut of the same visual system. That is the whole argument for building the system first: the fourth asset costs a fraction of the first one only if the first one was built to be reused.',
    },
    {
      type: 'h2',
      text: 'Design for the timeline it lands in',
    },
    {
      type: 'p',
      text: 'The film will be watched on a phone, muted, autoplaying between a chart and an argument. That placement is not a constraint to work around afterwards, it is the format itself.',
    },
    {
      type: 'ul',
      items: [
        '**Three seconds decide the rest.** If second three is still a logo animation, the viewer is gone before the world appears.',
        '**Every claim carries visually.** Sound is a bonus track, never the delivery mechanism.',
        '**The first frame has to work as a still.** Quote posts and Discord embeds show a frame, not a film.',
        '**Vertical is not a crop.** Compose for 9:16 and 16:9 from the start, or accept that one of them will look like an accident.',
      ],
    },
    {
      type: 'h2',
      text: 'In house, automated, or a studio',
    },
    {
      type: 'p',
      text: 'Three honest routes, and the right one depends on whether the collection needs a look that outlives the mint.',
    },
    {
      type: 'p',
      text: 'In house works when someone on the team has motion skills and enough runway to spend two weeks on it. The hidden cost is that the mint then competes with everything else on their plate, and the reveal is usually what slips.',
    },
    {
      type: 'p',
      text: 'Automated is worth naming precisely, because we built one: [ShipTeaser](https://shipteaser.com) is our own product, from the same founder as this studio. You give it a URL, it reads the page and returns a 15 second 1080p motion graphics teaser, no voice-over, made for muted feeds, the first one free without a card. For a mint page that already has its art direction settled, that is a fast way to get a competent teaser. It will not invent your world, write your narrative spine or hold a collection together across four launch moments. That is the trade, and it is a real one.',
    },
    {
      type: 'p',
      text: 'A studio is the call when the collection is meant to be the start of something. That is what a [Launch Sprint](/#service-cards) covers: narrative and visual system first, then the teaser, then the mint page art direction, then the social kit, in two weeks. Past mints and brand work sit on [our work page](/work).',
    },
    {
      type: 'h2',
      text: 'The pre production checklist',
    },
    {
      type: 'p',
      text: 'Answer these on one page before anyone opens a project file. Every argument later gets settled by pointing at it.',
    },
    {
      type: 'ol',
      items: [
        'The world in one sentence, with no mention of the art style.',
        'The single claim the teaser carries, written as a text message.',
        'The motion signature: how things enter, settle and leave.',
        'The four moments on the mint schedule, each with its asset.',
        'The ratios and the first frame, decided before the edit starts.',
      ],
    },
    {
      type: 'p',
      text: 'None of that is a production question. It is all decided on paper, which is exactly why teams skip it and then pay to fix it in the edit, where changes cost the most and help the least.',
    },
    {
      type: 'cta',
      text: 'We build the narrative spine, the reveal film and the full mint asset kit for Web3 collections.',
      label: 'See the work',
      href: '/work',
    },
  ],
  faq: [
    {
      question: 'How long should an NFT marketing video be?',
      answer:
        'Under fifteen seconds for the teaser that runs in a feed, and up to forty five for the version on the mint page where intent is already high. Length follows the job: establishing a world takes seconds, explaining a trait system takes a little longer.',
    },
    {
      question: 'Why do collection reveal videos underperform?',
      answer:
        'Because they show the art, which buyers can already browse on the mint page, and skip the questions that decide a purchase: who made this, what world it belongs to, and what holding one leads to. BuildLore treats the reveal as one asset in a mint kit rather than the campaign itself.',
    },
    {
      question: 'What assets does an NFT mint actually need?',
      answer:
        'A teaser two weeks out, a mechanic or trait explainer a week out, countdown and confirmation cuts for mint day, and holder loops afterwards. Built from one visual system, each additional asset is a recut rather than a new production.',
    },
    {
      question: 'Can an AI tool make the reveal video?',
      answer:
        'For a straightforward teaser from an existing page, yes. ShipTeaser, which we also built, turns a URL into a 15 second muted teaser without a card for the first one. It does not create a visual world or a narrative spine, so it suits projects whose art direction is already settled.',
    },
  ],
  related: [
    { label: 'Web3 launch video', href: '/blog/web3-launch-video' },
    {
      label: 'Crypto video production',
      href: '/blog/crypto-video-production',
    },
    {
      label: 'How to choose a Web3 marketing agency',
      href: '/blog/how-to-choose-a-web3-marketing-agency',
    },
  ],
};
