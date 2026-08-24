import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'teaser-video-for-app-launch',
  title: 'Teaser video for app launch: fifteen seconds, sound off',
  metaTitle: 'Teaser Video for App Launch: The 15 Second Cut',
  metaDescription:
    'A launch teaser runs 15 seconds, muted, in a feed you do not control. What the format has to show, what to cut, and how to brief it properly.',
  description:
    'The teaser is the only asset most people will ever see of your launch, and it is usually cut last, from a film built for a page where the sound was on.',
  date: '2026-08-24',
  cluster: 'tech',
  keyword: 'teaser video for app launch',
  answer:
    'A teaser video for an app launch is a 10 to 15 second cut built for a muted, vertical feed you do not control. It shows the product working, carries one legible claim on screen, and ends on a name people can search. BuildLore builds the visual system first, then cuts the teaser, the launch film and the store assets from the same build.',
  blocks: [
    {
      type: 'p',
      text: 'Two weeks before the launch, someone asks for the social cut. The 90 second film is finished, approved and beautiful, so the editor trims it to fifteen seconds. The result opens on a logo, the voice-over is gone so the first line of the story is missing, and the product appears at second nine. In a feed, second nine does not exist.',
    },
    {
      type: 'p',
      text: 'This is the standard order of operations and it is backwards. The launch film gets watched by people who already decided to care: press, investors, your own team, visitors who came to the site on purpose. The teaser is what everyone else gets. It runs in a place you do not control, next to content that is not yours, with the sound off and a thumb already moving.',
    },
    {
      type: 'p',
      text: 'So the teaser is not a shorter version of the film. It is a different asset with different rules, and it deserves to be designed rather than salvaged.',
    },
    {
      type: 'h2',
      text: 'The teaser has one job: buy three more seconds',
    },
    {
      type: 'p',
      text: 'Every other format assumes a decision has already been made. A landing page video plays because someone arrived. An explainer plays because someone pressed play. A teaser plays because an algorithm put it in front of a stranger who was looking for something else.',
    },
    {
      type: 'p',
      text: 'That single difference sets everything. The first frame cannot be abstract, because abstraction reads as an ad. The claim cannot be spoken, because nothing is spoken. The pacing cannot build, because there is nothing to build on. What the teaser has to do in its first second is answer the only question the viewer is actually asking: is this worth three more seconds.',
    },
    {
      type: 'callout',
      text: 'A quick test before you approve a cut. Mute it, play the first two seconds, stop. If you cannot say what the product is, neither can anyone else, and the remaining thirteen seconds will never be watched.',
    },
    {
      type: 'h2',
      text: 'The placement writes the spec',
    },
    {
      type: 'p',
      text: 'App launches spread the same asset across four or five surfaces, each with its own crop, its own length ceiling and its own audience posture. One build should cover all of them, but only if the ratios were planned before anything was animated.',
    },
    {
      type: 'table',
      headers: ['Surface', 'Ratio and length', 'Sound', 'What it has to do'],
      rows: [
        [
          'Social feed, organic',
          '9:16 or 4:5, 10 to 15 seconds',
          'Off',
          'Show the product working, carry one written claim',
        ],
        [
          'Paid social',
          '9:16, 6 to 15 seconds',
          'Off',
          'Same claim, brand visible by second two, one clear action',
        ],
        [
          'App store preview',
          '9:16, 15 to 30 seconds',
          'Off',
          'Real interface, real flow, no marketing framing',
        ],
        [
          'Website hero',
          '16:9, 10 to 20 seconds, looping',
          'Off, no controls',
          'Prove the product exists before the visitor scrolls',
        ],
        [
          'Press and investor sends',
          '16:9, 30 to 90 seconds',
          'On',
          'The full story, the film the teaser was cut from',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The row people forget is the app store preview. It is governed by the platform, it gets reviewed, and it is one of the few places where a viewer is already deciding whether to install. A teaser recut for that slot converts better than anything else you will make, and almost nobody briefs it.',
    },
    {
      type: 'h2',
      text: 'What actually goes in the fifteen seconds',
    },
    {
      type: 'p',
      text: 'Fifteen seconds is roughly four beats. Not four scenes, four beats: things the viewer registers. Spending one of them on a logo animation costs you a quarter of the asset before anything has been said.',
    },
    {
      type: 'ol',
      items: [
        '**Seconds 0 to 2, the product on screen.** Real interface, moving, doing the thing the app is for. Not a phone floating in gradient. Not a hand holding a device. The screen itself, large enough to read on a phone.',
        '**Seconds 2 to 6, the claim, written.** One sentence a viewer could repeat to a colleague. On screen, in type big enough to survive a small crop, held long enough to read twice.',
        '**Seconds 6 to 12, the proof.** The part of the flow that is not obvious. If the app removes three steps, show the three steps disappearing. This is the only stretch where craft can show off, and it is where most teasers go quiet instead.',
        '**Seconds 12 to 15, the name and the action.** Name legible, spelled the way someone would type it, plus one instruction. A URL nobody can read at 9:16 is not a call to action.',
      ],
    },
    {
      type: 'p',
      text: 'Notice what is not on the list: a tagline before the product, a founder speaking, a countdown, a date card that will be wrong in a week. Each of those is a beat spent on something the viewer did not ask for.',
    },
    {
      type: 'h2',
      text: 'Cut the teaser first, not last',
    },
    {
      type: 'p',
      text: 'The cheapest change you can make to a launch is the order. Build the visual system first: type, motion behavior, color, how the interface is framed, how numbers and states appear on screen. Then cut the teaser from that system, before the long film exists. If the fifteen second version does not hold, the ninety second version was never going to, and you have found that out while it is still cheap to fix.',
    },
    {
      type: 'p',
      text: 'Working in that order also means the launch film, the store preview and the paid variants are recuts of one build rather than three productions with three different looks. That is the same sequencing behind the four decisions in our post on the [product launch video](/blog/product-launch-video), and it is how our [Launch Sprint](/#service-cards) runs: narrative and visual micro system in the first two days, teaser next, everything else after.',
    },
    {
      type: 'p',
      text: 'There is also the case where the launch is on Thursday and there is no system to build from. We should be transparent here, because the tool is ours: [ShipTeaser](https://shipteaser.com) was built by the same founder as this studio. It takes a product URL and returns a 15 second 1080p motion graphics teaser made for muted feeds, with an optional music bed and the first one free without a card. What it does not do is give you a narrative spine or a visual system the rest of the launch can inherit, and there is no voice-over, no screen recording and no timeline to edit. For a feed cut you needed yesterday, that trade is usually worth taking. For the launch you have been building toward for a year, it is not the whole job.',
    },
    {
      type: 'h2',
      text: 'The five failures that kill a launch teaser',
    },
    {
      type: 'p',
      text: 'These come up on almost every project that arrives with an existing cut. None of them are craft problems. They are all decisions made before anyone opened a project file.',
    },
    {
      type: 'ul',
      items: [
        '**Cut down from the long film.** The structure was built for a viewer who chose to watch. Trimming it removes the setup and keeps the pacing, which is the worst of both.',
        '**Type sized for a desktop review.** It was approved on a large monitor and it ships to a phone at half the size, inside a crop nobody checked.',
        '**The claim carried by the voice-over.** With the sound off, the film says nothing. Most feed views are muted, including the ones that convert.',
        '**Safe zones ignored.** The bottom fifth of a vertical feed post is covered by captions, handles and buttons. Anything placed there is gone.',
        '**One master, no variants.** A single 16:9 file gets letterboxed everywhere, which reads instantly as an asset that was not made for the platform it is on.',
      ],
    },
    {
      type: 'p',
      text: 'The fix for all five is the same and it is not a bigger budget. It is deciding the surfaces before the storyboard, so the frame is designed for the crop it will live in.',
    },
    {
      type: 'h2',
      text: 'The brief that gets you a usable first cut',
    },
    {
      type: 'p',
      text: 'Before you talk to a studio, a freelancer or your own designer, write these five lines. They take twenty minutes and they settle the arguments that would otherwise happen during revisions, when changes cost real money.',
    },
    {
      type: 'ul',
      items: [
        '**The surfaces**, named, with the ratio and length ceiling for each one.',
        '**One claim**, written as a single checkable sentence, the one that will sit on screen.',
        '**The moment of proof**: the exact part of the product you want shown working, with a recording of it.',
        '**The name treatment**: how the brand appears at the end, and what the viewer is meant to do next.',
        '**The date you can no longer change anything**, which is usually earlier than the launch date.',
      ],
    },
    {
      type: 'p',
      text: 'A team that gets that page back delivers something close on the first pass. A team that gets a deck and a launch date delivers a beautiful film in a format nobody can use, two weeks before you need it, and the recut comes out of your budget rather than theirs. If you want to see how this plays out across a full engagement rather than one asset, our [brand video for tech startups](/blog/brand-video-for-tech-startups) post covers the same ground at the level of the whole brand.',
    },
    {
      type: 'cta',
      text: 'We design the teaser as its own asset, built from the same visual system as your launch film, sized for every surface it has to run on.',
      label: 'See the work',
      href: '/work',
    },
  ],
  faq: [
    {
      question: 'How long should an app launch teaser be?',
      answer:
        'Ten to fifteen seconds for organic and paid social, fifteen to thirty for an app store preview, ten to twenty on a looping website hero. The ceiling comes from the surface, not from how much you have to say. One build should produce every length rather than one file stretched across all of them.',
    },
    {
      question: 'Should a launch teaser have a voice-over?',
      answer:
        'Plan for it to be watched muted, because most feed views are. If a voice-over exists it should add texture for the minority who hear it, never carry the claim. Anything the viewer must understand belongs on screen as type, sized to stay readable inside a vertical crop on a phone.',
    },
    {
      question: 'Can we just cut the teaser from our launch film?',
      answer:
        'You can, and it is the most common reason a teaser underperforms. The long film assumes a viewer who chose to watch, so its first seconds are setup. Cut the teaser first instead, from the same visual system. If the fifteen second version does not hold attention, the long film will not either.',
    },
    {
      question: 'Do we need a separate video for the app store?',
      answer:
        'A recut, not a separate production. Store previews are reviewed by the platform and watched by people already deciding to install, so they need the real interface and a real flow rather than marketing framing. It is the highest intent placement most launches have, and the one teams most often skip.',
    },
    {
      question: 'Is an automated tool enough for a launch teaser?',
      answer:
        'For a feed cut you need this week, often yes. ShipTeaser, which we built, turns a URL into a 15 second muted teaser with no voice-over and no editing timeline. What it cannot give you is a narrative spine or a visual system the launch page and the long film can inherit, which is the part that makes a launch look deliberate.',
    },
  ],
  related: [
    { label: 'Product launch video', href: '/blog/product-launch-video' },
    { label: 'SaaS explainer video', href: '/blog/saas-explainer-video' },
    {
      label: 'Brand video for tech startups',
      href: '/blog/brand-video-for-tech-startups',
    },
  ],
};
