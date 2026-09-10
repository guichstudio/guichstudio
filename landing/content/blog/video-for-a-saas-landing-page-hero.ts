import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'video-for-a-saas-landing-page-hero',
  title: 'Video for a SaaS landing page hero: what it must not do',
  metaTitle: 'SaaS Landing Page Hero Video: What It Must Not Do',
  metaDescription:
    'The film above the fold is not a shorter explainer. What a SaaS hero video must not do, how long it runs, and when a silent loop beats a film.',
  description:
    'The hero slot is the one place on the site where nobody asked to watch anything. Why the explainer fails there, what the loop has to show, and the three video slots a page actually has.',
  date: '2026-09-10',
  cluster: 'tech',
  keyword: 'video for a saas landing page hero',
  answer:
    'A SaaS landing page hero video is not a shorter explainer. It plays muted and unrequested, next to a headline that is already making the claim, so it works as a short silent loop of the product doing one thing, not as a narrative film. BuildLore builds the hero loop and the longer explainer from one system, so the page and the product tour agree.',
  blocks: [
    {
      type: 'p',
      text: 'A team finishes a 90 second explainer, likes it, and puts it above the fold. It opens on a logo animation, moves through an abstract shape, and reaches the product at around forty seconds. On the page it plays muted, on autoplay, to someone who arrived eleven seconds ago and is scrolling while it runs.',
    },
    {
      type: 'p',
      text: 'Nobody watches forty seconds of it. What the visitor registers instead is motion in the corner of their eye, no information, and a page that got slower. The film is not bad. It is in the wrong slot, and the slot has rules that almost nothing else on the site has.',
    },
    {
      type: 'p',
      text: 'The hero row is the only surface where the video is uninvited. Every other placement follows a decision: someone clicked a thumbnail, opened a tour, landed on a dedicated page. Above the fold there is no decision, only a headline making a claim and a moving rectangle next to it. That changes what the video can be.',
    },
    {
      type: 'h2',
      text: 'The hero slot is a different job from the explainer',
    },
    {
      type: 'p',
      text: 'An explainer answers a question the viewer has already asked. It gets to argue, build, and take its time, because pressing play was an act of consent. Its job is comprehension, and it can spend sixty seconds earning it.',
    },
    {
      type: 'p',
      text: 'The hero video answers a question nobody has asked yet: is this thing what the headline says it is. Its job is corroboration, not comprehension. The copy makes the claim, and the video is the evidence sitting beside it, read in the same glance rather than watched in sequence.',
    },
    {
      type: 'p',
      text: 'That difference decides everything downstream. Evidence does not need a beginning. It does not need a narrative arc, an ending, or a voice. It needs to be legible instantly and to be obviously about the product on the page. The moment a hero video starts telling a story, it has taken on the explainer job in a slot that will never give it the attention that job requires.',
    },
    {
      type: 'callout',
      text: 'The glance test: freeze the hero at a random second and show it to someone for two seconds. If they cannot say what kind of product this is, the loop is decoration.',
    },
    {
      type: 'h2',
      text: 'What the hero film must not do',
    },
    {
      type: 'p',
      text: 'Most of the failures here are inherited habits from formats that had permission the hero does not have. They are worth naming individually, because teams tend to defend each one separately.',
    },
    {
      type: 'ul',
      items: [
        '**No logo animation.** The logo is already in the navigation bar, six centimetres above. Spending the first three seconds on it is spending the only three seconds that were guaranteed.',
        '**No dependence on audio.** It plays muted or it does not play. Any argument carried by a voice-over is an argument the visitor never hears, and captions in a hero compete with the headline for the same attention.',
        '**No slow build.** There is no runway. A cold open on the product, mid action, is not a stylistic preference in this slot, it is the format.',
        '**No abstract opening.** Floating shapes, particle fields and animated gradients all say the same thing to a buyer: this company would rather not show the software.',
        '**No repeat of the headline.** Text on screen that restates the H1 wastes the video on a job the copy already did better, and it dates the asset every time the positioning changes.',
        '**No controls the visitor has to use.** A play button in the hero converts the slot back into an explainer placement, and then measures how few people click it.',
      ],
    },
    {
      type: 'p',
      text: 'The last one is where teams argue hardest, usually on accessibility grounds, and the honest resolution is not a play button. It is a loop short enough and quiet enough that it does not need one, plus the full film one scroll further down where a real play decision can happen.',
    },
    {
      type: 'h2',
      text: 'Loop, film, or no video at all',
    },
    {
      type: 'p',
      text: 'Three options fit the slot, and the right one depends on what the product looks like when it is working, not on the budget available.',
    },
    {
      type: 'table',
      headers: ['Option', 'When it is right', 'What it costs you'],
      rows: [
        [
          'Silent product loop',
          'The interface is the proof and one action shows the value',
          'Nothing narrative: it cannot carry positioning on its own',
        ],
        [
          'Short motion piece',
          'The value is abstract, infrastructure, or has no visible surface',
          'Harder to make specific, easy to slide into stock abstraction',
        ],
        [
          'A still, no video',
          'The product is dense and one frame reads better than movement',
          'No motion to hold attention, so the copy has to carry the row',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The third row is a real answer and it gets chosen more often than agencies admit. Developer tools, data products and anything whose value is a number arriving faster are frequently better served by one composed frame than by a loop of a cursor moving. A page is not improved by motion, it is improved by the fastest possible answer to what is this.',
    },
    {
      type: 'p',
      text: 'When the loop is right, the discipline is picking one action. Not a tour, not three features, one thing the product does that a stranger can follow without a caption: a query returning, a document assembling itself, a route resolving, a dashboard filling. One action, shown at a speed a human can actually read, then repeated.',
    },
    {
      type: 'h2',
      text: 'Length, weight, and the first three seconds',
    },
    {
      type: 'p',
      text: 'A hero loop runs somewhere between six and twelve seconds. Under six it reads as a glitch, and the eye keeps returning to it because it never resolves. Over twelve it becomes something a visitor feels obliged to watch, which is a commitment the slot cannot ask for.',
    },
    {
      type: 'p',
      text: 'It should loop without a visible seam. A hard cut back to the start pulls attention away from the copy every cycle, which is the opposite of the job. Ending on a state that resembles the opening frame, or holding a beat before the reset, is worth the extra pass in the edit.',
    },
    {
      type: 'p',
      text: 'Page weight is part of the brief, not an engineering detail handed over afterwards. The hero video is usually the largest thing competing with the largest text on the page, and a loop that delays the headline has cost more than it delivered. That means a poster frame that is itself a good still, a compressed file rather than a full quality master, and no autoplaying video at all on small screens where the still does the work.',
    },
    {
      type: 'p',
      text: 'There is also a narrow case where the page has to go live before any of this exists, usually a launch date that is already fixed. We would rather point at our own tool than a competitor, so to be clear about who owns it: [ShipTeaser](https://shipteaser.com) is a product from the same founder as this studio. It takes a URL and returns a 15 second 1080p motion graphics teaser built for muted feeds, with an optional music bed and the first video free without a card. Its limit here is specific: it reads a page rather than your product, so it contains no interface footage, no voice-over and no timeline to edit, and it was designed for a feed rather than for a hero row. It covers a launch week. It is not the loop.',
    },
    {
      type: 'h2',
      text: 'The page has three video slots, not one',
    },
    {
      type: 'p',
      text: 'Most of the argument about what belongs in the hero disappears once the page is treated as having three distinct video jobs, each with its own permission level.',
    },
    {
      type: 'table',
      headers: ['Slot', 'Permission', 'What goes there'],
      rows: [
        [
          'Hero',
          'None, it plays uninvited',
          'A six to twelve second silent loop of one action',
        ],
        [
          'Mid page proof',
          'Implicit, the visitor kept scrolling',
          'Short captioned clips against each claim, no sound',
        ],
        [
          'Dedicated page or modal',
          'Explicit, they pressed play',
          'The 60 to 90 second explainer, with voice-over',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Read down that column and the sequence is a widening of consent. Each slot can ask for slightly more than the one above it, and each fails when it asks for more than its permission level allows. The 90 second film in the hero is exactly that failure, and it is the most expensive version of it because the film was the biggest line in the budget.',
    },
    {
      type: 'p',
      text: 'The practical consequence is that these should be commissioned together. One capture pass and one visual system produce all three, and the loop is a by product of the work already being done for the [SaaS explainer](/blog/saas-explainer-video) rather than a separate project. Split across two vendors and two quarters, they will not look like the same product.',
    },
    {
      type: 'h2',
      text: 'How we build one',
    },
    {
      type: 'p',
      text: 'The first session is not about the video. It is about which single action carries the claim in the headline, and that usually surfaces a disagreement inside the team worth resolving before anything is animated. If three people name three different actions, the page has a positioning problem that a loop cannot fix.',
    },
    {
      type: 'p',
      text: 'From there it is a screen capture pass at final quality, a cleanup of the interface for the shots being used, and a motion system that matches the rest of the site rather than arriving from a different visual world. Placeholder data gets replaced with plausible data, because a demo account full of test entries reads as an unfinished product faster than anything else on the page.',
    },
    {
      type: 'p',
      text: 'The same principle governs how we scope the rest of a launch: one build, several cuts, which is the argument behind our [Launch Sprint](/#service-cards) and behind how we plan a [video content calendar](/blog/video-content-calendar-for-startups). A hero loop made in isolation costs almost as much as one made alongside the film, and it is the version most likely to be replaced within a quarter. Recent product films and identity systems are in our [selected work](/work).',
    },
    {
      type: 'cta',
      text: 'If the hero is playing a 90 second film to nobody, we can cut the loop and the explainer from one pass.',
      label: 'Book a call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'Should a SaaS landing page have a video in the hero?',
      answer:
        'Only if the product has something visible that one action can demonstrate. When the interface is the proof, a short silent loop corroborates the headline in the same glance. When the value is abstract or the screen is dense, one well composed still often reads faster, and the film belongs further down the page instead.',
    },
    {
      question: 'How long should a hero video be?',
      answer:
        'Six to twelve seconds, looping without a visible seam. Under six seconds it reads as a glitch and keeps pulling the eye back. Over twelve it starts asking for a commitment the slot cannot request, since nobody chose to press play. The longer explainer runs 60 to 90 seconds on a dedicated page.',
    },
    {
      question: 'Can I reuse my explainer video in the hero?',
      answer:
        'Not as it is. An explainer opens with a build, often carries a voice-over, and reaches the product late, all of which assume a viewer who pressed play. Cut a separate six to twelve second loop from the same footage instead, and keep the full film one scroll down where the play decision is real.',
    },
    {
      question: 'Should the hero video have sound?',
      answer:
        'No. It plays muted by default in every browser, so any argument carried by audio is an argument nobody hears. Avoid on screen captions too: they compete with the headline for the same attention in the same row. Keep sound for the dedicated page, where the viewer opted in.',
    },
    {
      question: 'Does a hero video slow the page down?',
      answer:
        'It can, and that cost is real because the video competes with the headline to load first. Use a compressed file rather than a master, make the poster frame a still that works on its own, and serve the still instead of autoplaying video on small screens where the loop earns the least.',
    },
  ],
  related: [
    { label: 'SaaS explainer video', href: '/blog/saas-explainer-video' },
    { label: 'Brand video for tech startups', href: '/blog/brand-video-for-tech-startups' },
    { label: 'Video content calendar for startups', href: '/blog/video-content-calendar-for-startups' },
    { label: 'Selected work', href: '/work' },
  ],
};
