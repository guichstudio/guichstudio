import type { BlogPost } from '@/lib/blog';

export const post: BlogPost = {
  slug: 'airdrop-announcement-graphics',
  title: 'Airdrop announcement graphics: announcing a distribution without looking like a scam',
  metaTitle: 'Airdrop Announcement Graphics: Trust by Design',
  metaDescription:
    'What an airdrop announcement has to show, the frames to prepare before eligibility opens, and the design habits that make a real post look like a fake one.',
  description:
    'The visual language of an airdrop post was taken over by impersonators years ago. Announcing a real distribution now means designing against that resemblance, on purpose.',
  date: '2026-08-30',
  cluster: 'web3',
  keyword: 'airdrop announcement graphics',
  answer:
    'Airdrop announcement graphics are the frames, motion cuts and channel assets that publish a distribution: eligibility, the claim window, and the one official link. They work when they look like the project rather than like a giveaway, because impersonators copy the announcement within minutes. BuildLore builds them from an existing brand system so the real post stays the recognisable one.',
  blocks: [
    {
      type: 'p',
      text: 'A team finishes the eligibility logic, agrees a claim window, and then makes the announcement graphic in an afternoon. It comes out looking the way airdrop posts have always looked: a coin with a glow behind it, a countdown, a gradient nobody uses anywhere else in the product, and the words claim now in a heavy typeface.',
    },
    {
      type: 'p',
      text: 'Within the hour, four other accounts publish something almost identical, with a different link. Some of them have more followers than the project does. The holders who have been around a while do the sensible thing and assume all five are fake, including the real one. The support channel fills with the same question for two days: is this actually you?',
    },
    {
      type: 'p',
      text: 'That is the specific problem this post is about. An airdrop is one of the few announcements where the design brief includes a threat model. The assets have to communicate a distribution, and they also have to be hard to counterfeit and easy to tell apart from the counterfeits that will exist by lunchtime.',
    },
    {
      type: 'h2',
      text: 'The look everyone copies is the scam look',
    },
    {
      type: 'p',
      text: 'Impersonators do not invent a visual language. They copy the one that already converts, which means the generic airdrop aesthetic belongs to them now by sheer volume. Every convention in it, the glow, the coins, the countdown, the urgency, has been used against holders more often than it has been used honestly.',
    },
    {
      type: 'p',
      text: 'So a real project that reaches for those conventions is competing on the exact ground where it has no advantage. A fake account can produce that frame faster, publish it more often, and pay to put it in front of more people. The only ground where the real project wins is the ground the fake cannot occupy: your actual brand system, used consistently for months before this post existed.',
    },
    {
      type: 'callout',
      text: 'The design goal is not to look trustworthy. It is to look like yourself, unmistakably, in a way that takes a forger real effort to approximate. Those are different briefs and they lead to different files.',
    },
    {
      type: 'p',
      text: 'This is the practical argument for spending on a visual system before there is a distribution to announce. A project with a distinct type treatment, a fixed palette and a motion grammar has something to be recognised by. A project whose assets are assembled per event has nothing to compare a fake against, which is the position described in our post on [web3 branding](/blog/web3-branding).',
    },
    {
      type: 'h2',
      text: 'What one frame has to answer',
    },
    {
      type: 'p',
      text: 'The announcement frame is read in about two seconds by someone who wants to know whether it concerns them. It has to answer that question and it has to survive being screenshotted out of context, because it will be.',
    },
    {
      type: 'ul',
      items: [
        '**Who is eligible, in plain terms.** A snapshot date, or an activity, or a role. Not a formula. The detail belongs in the docs the frame points to.',
        '**When the window opens and closes.** Real dates with a timezone written out. A relative countdown is the single most impersonated element in the category, and it stops being true the moment the image is reposted.',
        '**Where the claim happens.** One surface you control, named the same way every time. Never a link that only exists in a graphic.',
        '**What it costs.** If there is a gas cost, say so. Free is the word every fake uses, so specificity reads as real.',
        '**What it is not.** No wallet connection required to check eligibility, no purchase, no direct message from the team. Stating the negatives makes the fakes easier to spot.',
      ],
    },
    {
      type: 'p',
      text: 'Everything else is decoration and most of it is working against you. A frame that answers those five things in your own type and colour is a better announcement than a rendered coin, and it takes less time to build.',
    },
    {
      type: 'h2',
      text: 'The kit, file by file',
    },
    {
      type: 'p',
      text: 'A distribution runs over days, not one post, and the assets follow the same phases the eligibility does. What we prepare is short and each piece has a job.',
    },
    {
      type: 'ol',
      items: [
        '**The eligibility frame, in every ratio you post in.** Square, portrait and the wide crop, each composed at its own size rather than resized from one master, so the dates never fall outside a story crop.',
        '**A checker card.** The asset that sends people to the one surface where they find out if they qualify. This one gets reposted most and forged most, so it carries the strongest brand signal you have.',
        '**A short silent motion cut, ten to fifteen seconds.** Readable muted, ending on a static card that holds the window and the official domain. Motion is harder to counterfeit convincingly than a still, which is a security argument as much as a reach argument.',
        '**Window open and window closing frames.** Two variants of the same layout, designed together, so the reminder posts do not look like a different project made them.',
        '**Channel banners and avatars for the period.** Every surface you control saying the same thing on the same day, which is also how a visitor tells your account from a copy of it.',
        '**Reply frames.** Two or three neutral backgrounds with room for a line of copy, for answering in threads without typing into the void.',
        '**A docs and site component.** Eligibility, dates, the claim surface and the contract address, stated plainly on a page you own and can update.',
      ],
    },
    {
      type: 'p',
      text: 'The sequencing is close to what we described for [exchange listing announcement assets](/blog/exchange-listing-announcement-assets), with one difference that matters. A listing date is usually private before it is public, so the kit is built under embargo. An airdrop date is normally yours to set, which means there is no excuse for the assets to be late, and the whole kit should exist before the first teaser goes out.',
    },
    {
      type: 'h2',
      text: 'Real announcement, fake announcement',
    },
    {
      type: 'p',
      text: 'The table below is the working checklist we run a distribution kit against. The left column is not a style preference, it is the set of choices a forger has trouble reproducing quickly.',
    },
    {
      type: 'table',
      headers: ['Choice', 'What the real post does', 'What the copy does'],
      rows: [
        [
          'Typeface',
          'Your licensed brand type, already used across the product',
          'A default sans that ships with the design tool',
        ],
        [
          'Colour',
          'The system palette, applied the way it always is',
          'Purple to blue gradient, high glow, borrowed from the last viral post',
        ],
        [
          'Urgency',
          'Fixed dates with a timezone, stated once',
          'A live countdown and the phrase last chance',
        ],
        [
          'Link',
          'A domain you own, spelled the same in every asset',
          'A shortened link, or a domain one character off yours',
        ],
        [
          'The ask',
          'Go and check eligibility on a page you control',
          'Connect a wallet from the image, immediately',
        ],
        [
          'Voice',
          'The tone the account has used for months',
          'Emoji rows, all caps, an announcement of an announcement',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Read down the right column and notice how much of it is standard practice in crypto marketing. That is the trap. Several of those habits were normal before they were adopted by people impersonating projects, and they have not been normal for a while.',
    },
    {
      type: 'h2',
      text: 'The claim window is an operation, not a post',
    },
    {
      type: 'p',
      text: 'Once the window opens, the work changes shape. It stops being production and becomes response: confirming the real link under a fake reply, correcting an address that is circulating, publishing a reminder that fits the day rather than the plan, answering the same eligibility question in a form people can screenshot.',
    },
    {
      type: 'p',
      text: 'Staff that period with capacity and a queue of pre approved copy rather than with a longer file list. Our post on [crypto community content](/blog/crypto-community-content) covers how that queue is stocked so nothing has to be invented while a thread is moving.',
    },
    {
      type: 'p',
      text: 'One gap the kit does not close: the window is open, a moment worth posting appears, and the person who makes motion is offline in another timezone. For that narrow case we would rather point at something of ours than at a competitor. [ShipTeaser](https://shipteaser.com) is built by the same founder as this studio: it takes a product URL and returns a 15 second 1080p motion graphics teaser designed for muted feeds, with an optional music bed and the first video free without a card. It has no voice-over, no avatars, no timeline and no stock footage, and it inherits none of the brand distinctness this whole post argues for, so it belongs nowhere near the eligibility or claim frames. As a way to put something moving into an hour that would otherwise pass in text, it is a fair trade.',
    },
    {
      type: 'h2',
      text: 'When the window closes',
    },
    {
      type: 'p',
      text: 'Two assets are worth making after the distribution, and both are usually skipped because the team has already moved on.',
    },
    {
      type: 'p',
      text: 'The first is a plain close notice. A window that ends without an announcement leaves the old graphics circulating as live offers, and every fake claim page that survives the event feeds on that ambiguity. Publishing the end of the window is part of protecting the people who missed it.',
    },
    {
      type: 'p',
      text: 'The second is the explainer that outlives the event: what the token is for, what holders can now do, why the distribution was shaped the way it was. Recipients arrive weeks later with none of the context that was obvious in the thread. That asset keeps working long after the announcement frames stop, and it is the one place where the campaign budget compounds. The wider calendar this sits inside is laid out in our post on [token launch marketing](/blog/token-launch-marketing).',
    },
    {
      type: 'h2',
      text: 'The failures we see most often',
    },
    {
      type: 'ul',
      items: [
        '**Announcing before the checker exists.** The gap between the post and the working page is exactly the window a fake page fills.',
        '**A different look for every phase.** Teaser, eligibility, reminder and close made by different hands over three weeks reads as three projects, and it teaches holders that your announcements do not have a consistent look to verify against.',
        '**Countdowns in the artwork.** They expire, they get reposted anyway, and they are the most reliable marker of a fake.',
        '**Putting the claim flow in the image.** Any asset that asks for a wallet action directly is training your audience to do the thing you spend the rest of the year telling them not to do.',
        '**No contract address on a surface you own.** Fakes appear fast. The correction has to be one click from every asset.',
        '**Treating the distribution as the campaign.** It is a moment inside one. The explainer afterwards is what new holders actually read.',
      ],
    },
    {
      type: 'p',
      text: 'None of this is difficult with a system to build from and a week of preparation. Nearly all of it is unavoidable when the first design decision happens the morning of the announcement. You can see the kind of system layer these kits are cut from across [the projects](/work), and how the two week build differs from the monthly rhythm on the [service cards](/#service-cards).',
    },
    {
      type: 'cta',
      text: 'If a distribution is on the calendar and the assets are not built yet, that is the right week to talk. Tell us the dates and what already exists, and we will tell you what is realistic before the first teaser goes out.',
      label: 'Book a 30 minute call',
      href: 'https://calendly.com/guichstudio/30min',
    },
  ],
  faq: [
    {
      question: 'What should an airdrop announcement graphic include?',
      answer:
        'Five things: who is eligible in plain terms, when the window opens and closes with a timezone, where the claim happens on a surface you control, what it costs if there is a gas fee, and what the project will never ask for. Everything else is decoration that makes the frame harder to read.',
    },
    {
      question: 'How do we keep our airdrop post from looking like a scam?',
      answer:
        'Design it like your product rather than like a giveaway. Use your licensed brand type and system palette, drop the glow, the coin renders and the live countdown, state fixed dates instead of urgency, and send people to a domain you own that is spelled identically in every asset. Consistency across months is what a forger cannot copy quickly.',
    },
    {
      question: 'Should the claim link go in the graphic itself?',
      answer:
        'Name the domain in the artwork so it can be verified, but never build an asset that pushes someone straight into a wallet action. Send people to a page you control where eligibility is checked first. A post that asks for an immediate connection is the exact behaviour impersonators rely on.',
    },
    {
      question: 'How far ahead should airdrop assets be prepared?',
      answer:
        'Before the first teaser. Unlike a listing, the date is usually yours to set, so the whole kit can be finished in advance: eligibility frames, the checker card, the motion cut, window open and closing variants, banners and the docs component. Only the dates and final copy should be left to fill in.',
    },
    {
      question: 'Do we need a video for an airdrop announcement?',
      answer:
        'One short silent cut is worth building. It travels further than a still in a feed, it holds the window and the official domain on an end card, and it is meaningfully harder to counterfeit than a static image, which matters more here than in most announcements.',
    },
  ],
  related: [
    { label: 'Token launch marketing', href: '/blog/token-launch-marketing' },
    {
      label: 'Exchange listing announcement assets',
      href: '/blog/exchange-listing-announcement-assets',
    },
    { label: 'Web3 branding', href: '/blog/web3-branding' },
  ],
};
