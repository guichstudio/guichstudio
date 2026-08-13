import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'web3-launch-video',
  title: 'Web3 launch video: what actually makes people care',
  metaTitle: 'Web3 Launch Video: What Actually Converts',
  metaDescription:
    'How a Web3 launch video is built: the narrative spine, the first three seconds, the cuts that survive a muted timeline, and the assets you need around it.',
  description:
    'Most crypto launch films look expensive and say nothing. Here is the structure we use to make a launch video that a timeline actually stops for.',
  date: '2026-08-13',
  cluster: 'web3',
  keyword: 'web3 launch video',
  answer:
    'A Web3 launch video is a short film, usually 20 to 60 seconds, that turns a protocol or app launch into one legible idea. It works when it opens on a concrete promise, shows the product doing the thing, and closes on a single action. BuildLore builds these as part of a two week Launch Sprint, alongside the page art direction and the social cuts.',
  blocks: [
    {
      type: 'p',
      text: 'Every Web3 launch ships with a video. Most of them are the same video: an abstract 3D grid, a synth swell, a word like "sovereign" fading in, then a logo. It looks like money was spent. It says nothing a holder can repeat to a friend.',
    },
    {
      type: 'p',
      text: 'The problem is not the render quality. It is that the film was briefed as decoration instead of as an argument. A launch video has one job: make a stranger scrolling a muted timeline understand what you built and why it matters, before they swipe. Everything else is craft in service of that.',
    },
    {
      type: 'h2',
      text: 'Start from the narrative spine, not the shot list',
    },
    {
      type: 'p',
      text: 'Before anyone opens a 3D scene, write the spine. Five lines, no more, each one a beat the viewer has to accept before the next one lands.',
    },
    {
      type: 'ol',
      items: [
        '**Hook.** The concrete thing that is wrong today, or the concrete thing that just became possible. No adjectives.',
        '**Stakes.** Who pays for that today, and in what currency: time, fees, risk, missed upside.',
        '**Reveal.** What you shipped, shown as an interface or a mechanic, not as a claim.',
        '**Proof.** One number, one integration, one name. Something checkable.',
        '**Action.** One verb, one destination. Mint, trade, join the beta, read the docs. Pick one.',
      ],
    },
    {
      type: 'p',
      text: 'If the spine reads well as five sentences of plain text, the film will hold. If it only works with music and motion under it, you do not have a spine, you have a mood.',
    },
    {
      type: 'callout',
      text: 'Test: read your five lines out loud to someone who does not hold the token. If they can repeat the reveal back to you, the spine works.',
    },
    {
      type: 'h2',
      text: 'The first three seconds carry the whole file',
    },
    {
      type: 'p',
      text: 'On a feed, the film is competing against a thumb, not against other films. The opening frame has to be readable at a glance and the first motion has to answer a question the viewer did not know they had.',
    },
    {
      type: 'ul',
      items: [
        'Open on the product state, not on the logo. The logo is the payoff, not the greeting.',
        'Put one legible line of text in the first frame, large enough to read on a phone held at arm length.',
        'Cut on the beat of an action, not on the beat of the track. Action cuts survive muting, music cuts do not.',
        'Never open on a countdown or a date card. A date is not a reason to watch.',
      ],
    },
    {
      type: 'h2',
      text: 'Design for silence, then add sound',
    },
    {
      type: 'p',
      text: 'Most of your audience will see the film with the sound off, inside a quote tweet, at a size where fine typography disappears. That constraint should be the first design input, not a late compromise.',
    },
    {
      type: 'p',
      text: 'In practice: type set two sizes bigger than feels right, contrast that holds after platform compression, and every claim that matters carried by an image or a caption rather than by a voice. Then the sound design is free to do what it is good at, which is rhythm and weight, instead of carrying information.',
    },
    {
      type: 'h2',
      text: 'One film is not a launch',
    },
    {
      type: 'p',
      text: 'The hero film is the anchor, but it is the least used asset of the week. The launch actually runs on the cuts around it, and those need to be planned while the project file is still open.',
    },
    {
      type: 'table',
      headers: ['Asset', 'Where it runs', 'Why it exists'],
      rows: [
        [
          'Hero film, 20 to 60s',
          'Pinned post, landing page, partner reposts',
          'The full argument, one time, at full quality',
        ],
        [
          'Vertical cut, 9:16',
          'Stories, Shorts, Reels',
          'Same spine, reframed, hook moved earlier',
        ],
        [
          'Mechanic loop, 3 to 6s',
          'Replies, Discord, docs',
          'Shows one feature working, no context needed',
        ],
        [
          'Static frames',
          'Quote tweets, banners, decks',
          'Keeps the launch alive after day one',
        ],
      ],
    },
    {
      type: 'p',
      text: 'This is why we ship launches as a package rather than as a single deliverable. The [Launch Sprint](/#service-cards) runs two weeks: narrative and visual micro system in the first days, the teaser film next, then the launch page art direction, then the social starter kit.',
    },
    {
      type: 'h2',
      text: 'What changes in Web3 specifically',
    },
    {
      type: 'p',
      text: 'Three things behave differently from a normal software launch, and they all affect the edit.',
    },
    {
      type: 'ul',
      items: [
        '**Your audience is technical and skeptical.** A vague claim reads as a red flag, not as polish. Show the mechanic. Name the chain. Show the interface.',
        '**The community is a distribution channel.** Assets get remixed, cropped and quote tweeted within an hour. Give them frames worth stealing, and keep the source files usable at other ratios.',
        '**Timing is brutal.** A hot moment lasts a day. Anything that takes a week to produce misses it, which is why a retainer with a fast response window beats a project quote when you are live.',
      ],
    },
    {
      type: 'p',
      text: 'We built the [Growth retainer](/#service-cards) around that last point: three to five on brand assets a week and a 48 hour response window on hot moments, so the reaction ships while the moment is still worth reacting to.',
    },
    {
      type: 'h2',
      text: 'A checklist before you approve the final cut',
    },
    {
      type: 'ol',
      items: [
        'Watch it muted, on a phone, at arm length. Do you understand it?',
        'Can a viewer name the product and the action after one view?',
        'Is there a checkable proof point, or only adjectives?',
        'Does the first frame work as a still, in a quote tweet?',
        'Do you have the vertical cut and at least two loops from the same file?',
      ],
    },
    {
      type: 'p',
      text: 'If four of those five are true, ship it. The fifth one you can fix in the week after launch, and you should, because the week after launch is when most of the views actually arrive.',
    },
    {
      type: 'cta',
      text: 'We art direct and produce launch films for Web3 teams, from the narrative spine to the social cuts.',
      label: 'See the work',
      href: '/work',
    },
  ],
  faq: [
    {
      question: 'How long should a Web3 launch video be?',
      answer:
        'Twenty to sixty seconds for the hero film. Under twenty seconds you cannot land stakes and proof, over sixty you lose the feed. BuildLore delivers the hero film plus a vertical cut and short loops from the same project file.',
    },
    {
      question: 'What should a crypto launch video actually show?',
      answer:
        'The mechanic working, in the real interface, plus one checkable proof point. Abstract 3D and slogan typography read as decoration to a technical audience, which is exactly the audience a token or protocol launch needs to convince.',
    },
    {
      question: 'How long does it take to produce a launch film?',
      answer:
        'Two weeks end to end in the BuildLore Launch Sprint: narrative and visual system in days one and two, teaser film through day seven, launch page art direction through day eleven, social starter kit by day fourteen.',
    },
    {
      question: 'Do we need a separate video for each platform?',
      answer:
        'Not a separate production, a separate cut. One shoot or one animation build should produce the 16:9 hero, a 9:16 vertical with the hook moved earlier, and several short loops for replies and Discord.',
    },
  ],
  related: [
    {
      label: 'Crypto video production',
      href: '/blog/crypto-video-production',
    },
    {
      label: 'How to choose a Web3 marketing agency',
      href: '/blog/how-to-choose-a-web3-marketing-agency',
    },
    {
      label: 'Brand video for tech startups',
      href: '/blog/brand-video-for-tech-startups',
    },
    { label: 'Selected work', href: '/work' },
  ],
};
