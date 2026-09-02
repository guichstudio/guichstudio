import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'how-to-give-feedback-on-a-video-edit',
  title: 'How to give feedback on a video edit without burning the budget',
  metaTitle: 'How to Give Feedback on a Video Edit',
  metaDescription:
    'How to run a revision round on a video edit: describing problems instead of prescribing fixes, consolidating notes, timecodes, and what each round is for.',
  description:
    'Most revision rounds cost more than they should because of how the notes are written, not because of how many there are. Here is the format that keeps them cheap.',
  date: '2026-09-02',
  cluster: 'tech',
  keyword: 'how to give feedback on a video edit',
  answer:
    'Give feedback on a video edit as one consolidated, timecoded document per round, describing the problem rather than prescribing the fix, with a single named decision maker. BuildLore runs two structured rounds on every film: the first on structure and story, the second on polish. Notes arriving separately from five people, out of order, is what makes a revision expensive.',
  blocks: [
    {
      type: 'p',
      text: 'The first cut lands in a shared channel on a Thursday afternoon. Within an hour there are nine messages. The founder wants it shorter. The head of product wants the dashboard shot to stay. Someone asks if the music can be more energetic. A designer replies that the logo animation feels off, without saying at which second. Two of the notes contradict each other and nobody says which one wins.',
    },
    {
      type: 'p',
      text: 'The editor now has a choice: guess, or ask. Guessing produces a second cut that satisfies nobody. Asking costs two days of back and forth before any work happens. Either way the round has already become the most expensive part of the week, and none of that expense came from the edit itself.',
    },
    {
      type: 'p',
      text: 'Revision rounds are not the problem. They are how a film gets good. What makes them costly is the format the notes arrive in, and that is entirely inside your control as the client. The rest of this is the format we ask for, and why each part of it exists.',
    },
    {
      type: 'h2',
      text: 'Describe the problem, do not prescribe the fix',
    },
    {
      type: 'p',
      text: 'This is the single highest leverage habit, and most teams get it backwards. A note like "cut the third shot" is a solution. It hides the actual observation, which might have been that the section drags, or that the product appears too late, or that the transition broke the rhythm. The editor executes the solution, the underlying problem survives, and round two opens with the same feeling described differently.',
    },
    {
      type: 'p',
      text: 'Compare the two registers on the same moment in an edit.',
    },
    {
      type: 'table',
      headers: ['Prescriptive note', 'Descriptive note', 'What the editor can do with it'],
      rows: [
        [
          'Make the intro shorter',
          'I lose interest at 0:06, before I know what the product is',
          'Move the product reveal earlier, or hold the opening frame less, or rewrite the first line',
        ],
        [
          'Change the music',
          'The track feels celebratory, the film is about reliability',
          'Rescore to a different register instead of swapping one upbeat track for another',
        ],
        [
          'Add a logo at the start',
          'Nobody watching cold knows whose film this is',
          'Solve attribution anywhere in the first seconds, which is often not a logo',
        ],
        [
          'Speed up the middle',
          'Between 0:14 and 0:22 nothing new appears on screen',
          'Cut, re-time, or add the missing beat, whichever serves the story',
        ],
        [
          'Make it pop',
          'It looks flatter than the reference we agreed on',
          'Grade, contrast and motion, measured against a reference that exists',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The right hand column is the point. A described problem has several possible fixes and the editor is the person best placed to pick one. A prescribed fix has exactly one outcome, and if it was the wrong diagnosis you have paid for a change that did not help. You are not being vague by describing a feeling: "I lose interest at 0:06" is a precise, checkable observation.',
    },
    {
      type: 'callout',
      text: 'A useful test before sending a note: does it contain a timecode and a reason? A note with neither is a preference. A note with both is information, and information is what gets acted on correctly the first time.',
    },
    {
      type: 'h2',
      text: 'One document, one round, one decision maker',
    },
    {
      type: 'p',
      text: 'Notes from five people arriving separately over three days is not a round of feedback, it is five rounds paid at the price of five. Every message restarts the editor, and consolidation gets pushed onto the person least able to resolve a disagreement between your CEO and your head of product.',
    },
    {
      type: 'p',
      text: 'The mechanics that make this work are dull and they matter more than anything creative in this article.',
    },
    {
      type: 'ol',
      items: [
        '**Collect internally first.** Everyone watches, everyone writes, into one shared document. Nothing goes to the studio until the collection window closes.',
        '**Resolve contradictions before sending.** If two stakeholders want opposite things, that is your decision to make, not the editor to arbitrate. Send the resolved version.',
        '**One named owner sends it.** A single person owns the document and is the only channel for notes that round. Everyone else routes through them.',
        '**Set the window and hold it.** Twenty four or forty eight hours, agreed in advance. Notes arriving after the window go into the next round, not this one.',
        '**Number the notes.** So the studio can reply against each one and you can see what was addressed and what was deliberately not.',
      ],
    },
    {
      type: 'p',
      text: 'The named owner is the piece teams resist and the piece that saves the most. Somebody has to be allowed to say "we are not doing that" to a colleague. If nobody has that authority, every preference in the company becomes a change request, and the film converges on the average of all opinions, which is the one version guaranteed to be forgettable. This is the same decision structure we describe in our post on [how to work with a motion design agency](/blog/motion-design-agency), where the approval path is agreed before the first frame exists.',
    },
    {
      type: 'h2',
      text: 'Timecodes, or it did not happen',
    },
    {
      type: 'p',
      text: 'Every note about something visible or audible needs the second it happens at. Not "the middle section", not "the part with the graph". A timecode turns a conversation into a task.',
    },
    {
      type: 'p',
      text: 'A note in the format that works looks like this: **0:14, the caption appears while the voice is still finishing the previous line, so I read and listen at the same time and follow neither.** Timecode, observation, reason. It takes fifteen seconds longer to write than "the captions feel off" and it saves a round.',
    },
    {
      type: 'p',
      text: 'A few practical rules on top of that:',
    },
    {
      type: 'ul',
      items: [
        '**Use a review tool that pins comments to frames** if you have one. If not, a numbered list with timecodes in a document is completely adequate. The tool is not the point, the format is.',
        '**Watch it once through before writing anything.** Notes written while scrubbing catch details and miss the shape, and the shape is what round one is for.',
        '**Watch it on the surface it will be published on.** A film for a muted feed judged on a laptop with headphones is being judged in the wrong conditions.',
        '**Separate opinion from blocker.** Mark each note as must change or would prefer. Studios prioritise correctly when they know which is which, and you get the important ones done.',
        '**Do not send screenshots without timecodes.** A frame grab with no time attached sends someone hunting through the sequence to find it.',
      ],
    },
    {
      type: 'h2',
      text: 'What each round is actually for',
    },
    {
      type: 'p',
      text: 'Rounds are not interchangeable. Each one opens certain kinds of change cheaply and closes others. Sending structural notes at the polish stage is the classic way a budget goes: the work being discarded is finished work.',
    },
    {
      type: 'table',
      headers: ['Stage', 'Cheap to change here', 'Expensive or impossible here'],
      rows: [
        [
          'Script and storyboard',
          'The story, the order, the length, what the film claims',
          'Nothing much, this is the stage where changing costs least',
        ],
        [
          'First cut',
          'Structure, pacing, which shots stay, where the product appears',
          'Grade and sound design that have not been built yet',
        ],
        [
          'Second cut',
          'Timing, transitions, typography, captions, the sound bed',
          'Reordering the narrative, which unpicks everything built on top',
        ],
        [
          'Final',
          'Typos, a wrong logo version, an export spec, a legal line',
          'Anything creative, this stage is for correctness only',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Read that table as a schedule for your own opinions. If the pacing bothers you, say so at the first cut, not after the grade. If the claim in the voice-over makes your legal team uneasy, that belongs at script. Holding a structural doubt until the film looks finished is the most common way a two round project becomes a four round one, and it is also the honest reason many teams believe video is expensive. The cost drivers we listed in [what a brand video actually costs](/blog/how-much-does-a-brand-video-cost) are mostly late direction changes, not day rates.',
    },
    {
      type: 'h2',
      text: 'Some assets do not need a review round at all',
    },
    {
      type: 'p',
      text: 'Not everything you publish deserves the process above. A hero brand film or a launch teaser does, because it carries the story and it will run for a year. A one off cutdown for a Tuesday post, or a quick asset for a moment that will be over by Friday, usually does not: reviewing it costs more attention than making it.',
    },
    {
      type: 'p',
      text: 'Deciding that in advance is worth doing explicitly. Agree at kickoff which deliverables get two rounds, which get one, and which are published on the studio judgement with no round at all. Teams that skip this end up giving the same scrutiny to a fifteen second social cut as to the film it was cut from, which is how a review process quietly becomes the bottleneck it was meant to remove.',
    },
    {
      type: 'p',
      text: 'There is also a category below that: the placeholder you need this afternoon. Rather than point at a competitor, we will point at something of ours. [ShipTeaser](https://shipteaser.com) is a separate product from the same founder as this studio: a product URL goes in, a 15 second 1080p motion graphics teaser comes out, built for muted feeds, with an optional music bed and the first video free without a card. There is no review round because there is nothing to review against, no voice-over, no avatars and no timeline to edit, and it will not match a visual system it has never seen. For a stopgap it is honest work. For the film your launch rests on, it is not what you want.',
    },
    {
      type: 'h2',
      text: 'When the notes mean the brief was wrong',
    },
    {
      type: 'p',
      text: 'Sometimes a round of feedback is not feedback. If the notes on a first cut are about what the film is trying to say, who it is for, or what the product does, the edit is not the thing that failed. The brief was never settled, and the cut is where that surfaced.',
    },
    {
      type: 'p',
      text: 'The signals are recognisable once you know them.',
    },
    {
      type: 'ul',
      items: [
        '**Notes disagree about the audience.** One person is judging it as a sales asset, another as a brand piece. No edit satisfies both readings.',
        '**The reference set changed.** Somebody sends a new film to match at the second cut. That is a new brief wearing the clothes of a note.',
        '**Every section gets a note.** Uniform dissatisfaction is rarely about execution. It usually means the direction was approved without being agreed.',
        '**The claim is contested.** If people argue about whether the product really does the thing on screen, stop editing and settle that.',
      ],
    },
    {
      type: 'p',
      text: 'When you see these, the cheapest move is to pause the round and go back to the brief for an hour, with the same named owner in the room. Pushing a doomed round through produces a second cut that fails for the same reason, and now you have spent two. Studios will not usually force this conversation, so it tends to be the client who has to call it. Calling it early is a sign of a team that has done this before, not a failure.',
    },
    {
      type: 'p',
      text: 'Everything above is a process for buyers rather than for editors, which is deliberate: the leverage sits with whoever writes the notes. If you want to see the kind of work these rounds are protecting, the [projects page](/work) is the honest sample, and the ongoing shapes we work in are on the [service cards](/#service-cards). Teams weighing whether to run this internally instead will find the trade offs in our post on [an in house designer versus an agency](/blog/in-house-designer-vs-creative-agency).',
    },
    {
      type: 'cta',
      text: 'If your last video project turned into four rounds and nobody could say why, that is usually a process problem rather than a craft one. Tell us what happened and what is coming up next, and we will show you how we would run it.',
      label: 'Book a 30 minute call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'How do you give feedback on a video edit?',
      answer:
        'Consolidate every stakeholder note into one numbered, timecoded document per round, and describe what is wrong rather than prescribing the fix. Mark each note as a blocker or a preference, have one named person send it, and hold a fixed window so the studio works from a settled list instead of a moving one.',
    },
    {
      question: 'How many revision rounds should a video project have?',
      answer:
        'Two structured rounds covers most films: the first on structure, pacing and story, the second on timing, typography and sound. A third is usually a symptom of notes arriving in the wrong order rather than a genuine need. Agree the number at kickoff and agree what each round is allowed to change.',
    },
    {
      question: 'What makes video revisions expensive?',
      answer:
        'Late direction changes, not the number of notes. A structural change requested after the grade throws away finished work, while the same note at the first cut costs an afternoon. Unconsolidated feedback is the other driver: five people sending notes separately means the same round gets worked several times.',
    },
    {
      question: 'Should feedback include timecodes?',
      answer:
        'Yes, for anything visible or audible. A timecode plus an observation plus a reason turns a preference into a task an editor can act on the first time. Without one, someone has to hunt through the sequence guessing which moment you meant, and often fixes a different one.',
    },
    {
      question: 'Who should approve a video edit?',
      answer:
        'One named person, agreed before production starts. They collect internal notes, resolve contradictions between colleagues, and are the only channel to the studio during a round. Without that authority every preference becomes a change request and the film converges on the average of all opinions.',
    },
  ],
  related: [
    {
      label: 'How to work with a motion design agency',
      href: '/blog/motion-design-agency',
    },
    {
      label: 'How much does a brand video cost',
      href: '/blog/how-much-does-a-brand-video-cost',
    },
    {
      label: 'In house designer vs creative agency',
      href: '/blog/in-house-designer-vs-creative-agency',
    },
  ],
};
