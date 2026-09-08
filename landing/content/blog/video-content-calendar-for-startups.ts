import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'video-content-calendar-for-startups',
  title: 'Video content calendar for startups: a month that actually ships',
  metaTitle: 'Video Content Calendar for Startups',
  metaDescription:
    'How to run a month of startup video: work backwards from material you own, set real lead times, give every slot an owner, and keep one week reactive.',
  description:
    'Most video calendars are lists of ideas with dates attached, and they stop by week three. Here is how to plan a month of cuts from material that already exists.',
  date: '2026-09-08',
  cluster: 'tech',
  keyword: 'video content calendar for startups',
  answer:
    'A video content calendar for startups schedules cuts of material you already own, not ideas you hope to produce. List the existing masters, set a realistic lead time per asset type, give every slot one owner, and leave one week reactive. BuildLore plans the month against the build, so most entries on the grid are exports rather than new productions.',
  blocks: [
    {
      type: 'p',
      text: 'The calendar usually gets built in a spreadsheet on a Monday. Four weeks across the top, channels down the side, and someone fills the cells with ideas: a founder clip here, a customer story there, a product teaser on the Thursday of week three. It looks like a plan. Everyone agrees to it.',
    },
    {
      type: 'p',
      text: 'By week three it has stopped. Not because the ideas were bad, but because almost every cell required something that did not exist yet, and nobody costed the making of it. The customer story needed a customer to agree, a call to be recorded and an edit to be approved. The product teaser needed a build. What was scheduled was output, and what was missing was material.',
    },
    {
      type: 'p',
      text: 'A calendar that survives is built the other way round. You start from what you already have on disk, you attach honest lead times to the few things you do not, and you accept that a good month is mostly exports. That is a less exciting spreadsheet and it is the one that still has entries in it on the last Friday.',
    },
    {
      type: 'h2',
      text: 'A calendar of ideas is not a plan',
    },
    {
      type: 'p',
      text: 'The distinction worth holding onto: a date is not a plan, it is a deadline attached to work nobody has scheduled. Every cell in a video calendar is really two commitments, the publishing one and the production one, and teams routinely make the first while skipping the second.',
    },
    {
      type: 'p',
      text: 'You can see the failure coming by reading the grid and asking one question of each cell: what does this require that we do not have right now? If the honest answer is a shoot, a customer approval, a new visual direction or a feature that has not shipped, that cell is a project, not a post.',
    },
    {
      type: 'ul',
      items: [
        '**Cells written as topics.** "Founder on pricing" is a subject, not an asset. Nobody can tell whether it is a thirty second cut or a two week production.',
        '**No inventory.** The team owns hours of usable material and cannot name any of it, so every entry starts from zero.',
        '**Approval left out of the schedule.** The edit is due Thursday and the person who signs it off is at a conference until Monday.',
        '**Every week fully booked.** The first unplanned moment eats a slot, and the whole grid slides by a week and never recovers.',
      ],
    },
    {
      type: 'h2',
      text: 'Work backwards from what you already own',
    },
    {
      type: 'p',
      text: 'Before any dates go in, do an inventory pass. Open the drives and list what exists as material rather than as finished assets: the anchor film and its project file, product capture, 3D components, brand elements, conference footage, screen recordings, stills. Half an hour of this changes what the month can look like.',
    },
    {
      type: 'p',
      text: 'Material is not the same as an asset. An asset was published once and is finished. Material can be recut, reframed, slowed down, stripped back to a loop, or lifted for a thumbnail. A build that was structured for recutting rather than flattened on export is what makes a month of cuts possible at all, which is the argument behind planning a [quarter from one build](/blog/startup-video-marketing-strategy).',
    },
    {
      type: 'p',
      text: 'Once the inventory is on the table, sort each planned cell into one of three columns. This is the whole planning method, and it takes about twenty minutes.',
    },
    {
      type: 'table',
      headers: ['Column', 'What it means', 'What it costs'],
      rows: [
        [
          'Cut',
          'Exists as material, needs an export, a reframe or a trim',
          'Hours. Schedule it the same week.',
        ],
        [
          'Assemble',
          'Components exist, the arrangement does not',
          'A few days. Schedule it two weeks out.',
        ],
        [
          'Build',
          'Nothing exists yet: new capture, new system, new narrative',
          'Weeks. One per month at most, and it gets its own dates.',
        ],
      ],
    },
    {
      type: 'p',
      text: 'A healthy month is roughly seventy percent cut, twenty percent assemble, ten percent build. If your grid is mostly builds, you are not looking at a calendar, you are looking at a production plan with optimistic dates on it.',
    },
    {
      type: 'callout',
      text: 'If a cell cannot name the file it comes from, it is not scheduled yet. It is a wish with a date next to it.',
    },
    {
      type: 'h2',
      text: 'Lead times are the real calendar',
    },
    {
      type: 'p',
      text: 'The publish dates are the visible layer. Underneath them sits the layer that actually determines whether anything ships: when each item has to start. Most teams never write that layer down, which is why work is discovered to be late on the day it was due.',
    },
    {
      type: 'p',
      text: 'These are the lead times we plan against for teams with an existing visual system. Without a system, every row gets longer, because the decisions have to be made before the work can start.',
    },
    {
      type: 'table',
      headers: ['Asset', 'Working lead time', 'Starts when'],
      rows: [
        ['Vertical or square recut of an existing film', '1 to 2 days', 'Same week'],
        ['Quote card, still, loop from existing components', '1 day', 'Same week'],
        ['Feature explainer, 30 to 60 seconds, from existing capture', '5 to 8 days', 'Two weeks out'],
        ['Launch cut set from an anchor build', '5 to 10 days', 'Two to three weeks out'],
        ['New anchor film or a new visual direction', '3 to 6 weeks', 'Previous month'],
      ],
    },
    {
      type: 'p',
      text: 'Add the approval window to every row before you commit to a date. One round of feedback on a cut is a day if the reviewer is available and a week if they are not, and that variance is larger than the edit time on most small assets. Naming a single approver per slot removes most of it, and so does giving feedback in a form the editor can act on, which we cover in our note on [how to give feedback on a video edit](/blog/how-to-give-feedback-on-a-video-edit).',
    },
    {
      type: 'h2',
      text: 'A four week grid that holds',
    },
    {
      type: 'p',
      text: 'Here is the shape we hand to teams. It is deliberately thin: five to seven published items in a month, each traceable to material that exists, with one week that stays deliberately underbooked.',
    },
    {
      type: 'table',
      headers: ['Week', 'Ships', 'Starts'],
      rows: [
        [
          'Week 1',
          'Two cuts from the anchor build, one still set',
          'The month one explainer',
        ],
        ['Week 2', 'The explainer, one loop', 'Nothing new. Approvals only.'],
        [
          'Week 3',
          'Reserved. Whatever the month actually produced goes here.',
          'Next month one assemble item',
        ],
        [
          'Week 4',
          'One assemble item, one recap or quote set',
          'Next month inventory pass',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Week two starting nothing is not slack, it is the buffer that absorbs the approval round from week one. Teams that book production into all four weeks are the teams whose calendars collapse the first time a reviewer is on a plane.',
    },
    {
      type: 'h2',
      text: 'Keep one slot empty on purpose',
    },
    {
      type: 'p',
      text: 'Week three is reserved and it should stay reserved. Something always happens: a launch moves forward, a competitor does something worth answering, a number gets good enough to post, a founder gets a stage. The teams that can respond are not faster, they simply did not spend that week in advance.',
    },
    {
      type: 'p',
      text: 'If the month is quiet and nothing arrives, the reserved slot is easy to fill from the cut column, and that is the point: filling it takes hours because the material exists. This is the same argument we make about the crypto calendar in [crypto video production](/blog/crypto-video-production), where the schedule is set by events nobody on the team controls.',
    },
    {
      type: 'p',
      text: 'There is one recurring exception where the reserved week gets used up and something small is still needed on short notice. We would rather point at our own tool than a competitor, so to be clear about the ownership: [ShipTeaser](https://shipteaser.com) was built by the same founder as this studio. A product URL goes in and a 15 second 1080p motion graphics teaser comes out, made for muted feeds, with an optional music bed and the first one free without a card. It has no voice-over, no timeline to edit and nothing that inherits your visual system, so it fills a cell rather than advancing the plan. Used once in a month it buys back a week. Used every week it becomes the plan, which is a different and worse problem.',
    },
    {
      type: 'h2',
      text: 'Every cell needs an owner and a source',
    },
    {
      type: 'p',
      text: 'A calendar with no names on it is a shared intention, and shared intentions do not export files. Two fields fix most of it, and both fit in a spreadsheet column.',
    },
    {
      type: 'ol',
      items: [
        'The owner: one person who is accountable for the cell shipping, not the team that will contribute to it.',
        'The source: the file or project the asset comes from, named exactly. If the field is empty, the cell is not ready to be scheduled.',
        'The approver: one name, agreed before the work starts, with their availability checked against the review date.',
        'The format: ratio and duration written down, so the export is not a second conversation after the edit is approved.',
      ],
    },
    {
      type: 'p',
      text: 'The source field does more work than it looks like it should. It converts an argument about priorities into a factual check, because a cell with no source is provably not schedulable this month. That turns the weekly planning meeting from a debate into a five minute pass down a column.',
    },
    {
      type: 'h2',
      text: 'Twenty minutes on a Friday',
    },
    {
      type: 'p',
      text: 'The calendar is maintained in one short weekly pass, not in a monthly replan. Read the four weeks, then do three things: move anything whose source disappeared, start whatever is now inside its lead time, and confirm the reserved slot is still reserved.',
    },
    {
      type: 'p',
      text: 'What not to do in that meeting is add cells. New ideas go into a list and get considered at the next inventory pass, when there is a full picture of what material exists to serve them. Ideas added mid month are the ones that arrive with no source and push out work that was ready.',
    },
    {
      type: 'p',
      text: 'The signal that the calendar is working is boring: the same number of items ships every month without anyone escalating. Not a burst in week one and silence after. A steady output that looks related, because it all comes from the same build and the same [visual system](/blog/web3-branding).',
    },
    {
      type: 'h2',
      text: 'How we run this with clients',
    },
    {
      type: 'p',
      text: 'On our Growth and Scale engagements the month starts with the inventory pass and ends with the assets, and the grid is the thing we agree on rather than a list of deliverables. Three to five brand assets a week on Growth, fifteen to twenty five on Scale with a cinematic build once a quarter, all cut against a system that already exists. The packages are laid out on the [service cards](/#service-cards).',
    },
    {
      type: 'p',
      text: 'Source files and usage rights are handed over monthly, which matters here more than it looks: the calendar only stays cheap if next month can open this month project files. You can see what the output looks like across a range of tech and Web3 teams in our [selected work](/work).',
    },
    {
      type: 'cta',
      text: 'If the calendar keeps stalling by week three, we can do the inventory pass with you and plan the month against what you already own.',
      label: 'Book a call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'How many videos should a startup publish per month?',
      answer:
        'Five to seven items, where most are cuts of material that already exists rather than new productions. The number matters less than the source: a month of seven exports from one build is sustainable, while a month of three new productions is a hiring plan. Count what you can cut before deciding what you can publish.',
    },
    {
      question: 'How far ahead should a video content calendar be planned?',
      answer:
        'One month in detail, with the next month sketched. Anything further out drifts, because the roadmap moves. The important part is not the horizon but the lead times underneath it: each item needs a start date derived from how long it actually takes, plus the approval window, not just a publish date.',
    },
    {
      question: 'What goes in a video content calendar besides the date?',
      answer:
        'Four fields per cell: the owner accountable for it shipping, the source file or project it is cut from, the single named approver, and the ratio and duration. A cell with an empty source field is not scheduled, it is an idea, and that check alone removes most of the entries that would have slipped.',
    },
    {
      question: 'Why do content calendars stop after a few weeks?',
      answer:
        'Because the cells were filled with ideas that each required something nobody had made yet, and no week was left free to absorb a delay. The first slipped approval pushes everything back and the grid never recovers. Planning from existing material and reserving one week per month fixes both causes.',
    },
    {
      question: 'Should a startup make videos in house or with a studio?',
      answer:
        'The weekly cuts are reasonable to run in house once a visual system and a recuttable build exist, because the decisions are already made. The build itself is the part worth outsourcing, since the narrative spine and the system set a precedent that every later cut inherits and they are expensive to reverse.',
    },
  ],
  related: [
    {
      label: 'Startup video marketing strategy',
      href: '/blog/startup-video-marketing-strategy',
    },
    {
      label: 'How to give feedback on a video edit',
      href: '/blog/how-to-give-feedback-on-a-video-edit',
    },
    {
      label: 'Product launch video',
      href: '/blog/product-launch-video',
    },
    { label: 'Selected work', href: '/work' },
  ],
};
