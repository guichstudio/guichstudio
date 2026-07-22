# Motion Design — World-Class Documentation

> Bold, handcrafted 2D motion graphics for tech companies — animation people
> actually watch.

A complete, opinionated reference for producing world-class motion design:
product showcases, explainer videos, brand films, motion marks, and UI
animation. It codifies a house style into a repeatable **system** — principles,
timing, tokens, choreography, pipeline, and delivery specs — so that quality is
engineered, not lucked into.

The system is stack-aware: UI-motion examples target this repository's stack —
**Next.js 14 + React 18 + Framer Motion 10 + Tailwind** — and reuse the signature
easing curve already used in the landing hero, `cubic-bezier(.23, 1, .32, 1)`.

---

## Provenance

This documentation was seeded from the public content of **[Warmblu](https://warmblu.com/)**
— a 2D motion-graphics studio positioned as *"Bold, handcrafted 2D motion
graphics for tech companies"*, with services spanning **product showcases,
explainer videos, brand films, and UI animation**, a portfolio including the
**Stripe Motion Mark** (a wordmark that assembles from flowing gradient lines
converging into the logo, to convey *instant, seamless transactions*), and a
paid **[Warmblu Community](https://warmblu.com/community/)** for intermediate
motion designers.

The live site is JavaScript-rendered and bot-protected (Cloudflare 403 to
automated fetchers), so its deeper page copy could not be scraped verbatim. The
positioning, service taxonomy, and portfolio references above are reconstructed
from publicly indexed metadata. Everything below — the principles, numbers,
tokens, curves, choreography, pipeline, and specs — is the **world-class system
built on top of that seed**, and is original craft guidance, not a copy of any
third party's private material.

---

## Table of contents

1. [Philosophy — what "world-class" means](#1-philosophy)
2. [What we make](#2-what-we-make)
3. [The 12 principles, applied to motion graphics](#3-the-12-principles)
4. [Timing & easing](#4-timing--easing)
5. [The motion token system](#5-the-motion-token-system)
6. [Choreography & staging](#6-choreography--staging)
7. [The motion mark — animating a brand logo](#7-the-motion-mark)
8. [Explainer video craft](#8-explainer-video-craft)
9. [UI animation (Framer Motion + Lottie)](#9-ui-animation)
10. [Sound design](#10-sound-design)
11. [The production pipeline](#11-the-production-pipeline)
12. [Deliverable specifications](#12-deliverable-specifications)
13. [Accessibility & performance](#13-accessibility--performance)
14. [The quality bar — review checklist](#14-the-quality-bar)
15. [Tooling](#15-tooling)
16. [Glossary](#16-glossary)

---

## 1. Philosophy

Motion design is not decoration applied after the fact. It is **the choreography
of attention over time**. Three commitments separate world-class work from
competent work.

- **Motion must mean something.** Every move should carry information — direction
  of a data flow, hierarchy of a reveal, the personality of a brand, the state
  change of a button. Motion with no referent is noise, and noise is the first
  thing an audience tunes out.
- **Handcrafted, not defaulted.** The 30% of polish an audience *feels* but can't
  name — overshoot, follow-through, secondary motion, offset timing, a curve that
  isn't the tool's default — is where craft lives. Anyone can `ease-in-out`; a
  studio ships intent.
- **Restraint is the signature.** The hardest motion decision is what *not* to
  animate. One focal move beats five competing ones. World-class reels feel calm
  even when they are dense, because attention is directed, never split.

**The North-Star test.** Before a frame ships, it must pass three questions:
*Does the motion clarify the message? Does it feel like the brand? Would someone
watch it twice?* If any answer is "no," it is not done.

---

## 2. What we make

| Format | Purpose | Typical length | Where it lives |
|---|---|---|---|
| **Product showcase** | Show the product doing the thing, beautifully | 15–60 s | Landing hero, launch tweet, paid social |
| **Explainer** | Make a complex idea click | 45–120 s | Homepage, onboarding, sales |
| **Brand film** | Set tone and belief, sell the *feeling* | 30–90 s | Launch, brand refresh, event opener |
| **Motion mark / logo reveal** | A brand's signature 1–3 s of motion | 1–3 s | Video sting, app splash, sign-off |
| **UI animation** | Make the interface feel alive and legible | 120–600 ms per move | The live product |

These are not silos. A launch typically ships a **brand film** for tone, a
**product showcase** for proof, a **motion mark** to sign off, and **UI
animation** so the real product matches the promise of the film.

---

## 3. The 12 principles

Disney's 12 principles of animation, translated from character work to motion
graphics and interface motion. This is the grammar; everything downstream is
vocabulary.

1. **Squash & stretch** — mass responds to force. Even a rigid card can "settle"
   with a 2–4% scale overshoot. Never distort a logo's silhouette; volume must be
   conserved.
2. **Anticipation** — a small counter-move before the main action. A button dips
   ~2px before it pops; a title pulls back before it flies in. Prepares the eye.
3. **Staging** — direct the eye to one thing at a time. Use contrast, motion, and
   negative space so the focal point is never ambiguous.
4. **Straight-ahead vs. pose-to-pose** — block the key poses first (pose-to-pose)
   for control, then add the in-betweens and organic passes (straight-ahead).
5. **Follow-through & overlapping action** — parts don't stop at once. Trailing
   elements settle after the lead; a card's shadow lands a beat after the card.
6. **Slow in & slow out (easing)** — nothing in the physical world starts or stops
   instantly. Ease everything. This is the single biggest tell of amateur work.
7. **Arcs** — natural motion travels on curves, not straight lines. Move elements
   along subtle arcs; straight-line tweens read as robotic.
8. **Secondary action** — supporting motion that enriches the main one: a glint on
   a coin as it flips, particles drifting off a reveal. Adds without distracting.
9. **Timing** — the number of frames a move occupies defines its weight and mood.
   Fewer frames = snappy and light; more = heavy and deliberate.
10. **Exaggeration** — push past literal reality for clarity and appeal. A "loading
    complete" checkmark that overshoots reads as *satisfying*, not wrong.
11. **Solid drawing** — respect volume, perspective, and consistent light even in
    2D. Shadows and highlights must agree on one light source.
12. **Appeal** — the intangible "want to keep watching." Comes from confident
    timing, clean silhouettes, and personality. It is the sum of the other eleven
    done with taste.

---

## 4. Timing & easing

Timing is the discipline that most separates studios. Two rules govern it:
**snap in, glide out**, and **match duration to distance**.

### Duration scale

Design in a small, memorable set of durations. Reaching for arbitrary values is
the fastest way to make a piece feel incoherent.

| Token | ms | Frames @24fps | Use |
|---|---|---|---|
| `instant` | 80 | 2 | Hover tint, checkbox fill, tiny state flips |
| `fast` | 160 | ~4 | Button press, toggle, icon swap |
| `base` | 240 | ~6 | Default UI transition, card hover |
| `moderate` | 400 | ~10 | Entrances, modal open, section reveal |
| `slow` | 640 | ~15 | Hero titles, large surfaces, feature reveals |
| `cinematic` | 900–1400 | 22–34 | Brand-film beats, motion-mark builds |

**Distance–duration coupling.** A move across 40px and a move across 1200px
should *not* share a duration; the long move needs more time or it reads as
teleporting. Rule of thumb: `duration ≈ base + (distance / velocity)`, where
velocity ≈ 1200–1800 px/s for UI, slower for cinematic reveals.

### Easing curves

Never ship the tool default (`ease` / linear) for anything the audience sees.
Standardize on a house set of `cubic-bezier` curves.

| Name | cubic-bezier | Feel | Use |
|---|---|---|---|
| **Signature out** | `.23, 1, .32, 1` | Fast start, long luxurious glide to rest | Entrances, hero reveals (this repo's default) |
| **Standard** | `.4, 0, .2, 1` | Balanced, material-like | General UI transitions |
| **Decelerate** | `0, 0, .2, 1` | Enters and lands softly | Elements arriving on screen |
| **Accelerate** | `.4, 0, 1, 1` | Leaves with intent | Elements exiting screen |
| **Emphasized** | `.2, 0, 0, 1` | Dramatic, weighty settle | Big focal moments |
| **Spring (overshoot)** | — | Tiny overshoot + settle | Playful confirmations, pops |

**Springs over durations for interactive UI.** For anything the user triggers
(drag, toggle, drawer), a spring feels more alive than a fixed-duration tween
because it responds to velocity. In Framer Motion:

```ts
// Interactive: physical, velocity-aware
const spring = { type: "spring", stiffness: 400, damping: 34, mass: 0.9 };

// Choreographed reveal: duration + the house signature curve
const reveal = { duration: 0.64, ease: [0.23, 1, 0.32, 1] };
```

**Frame rate.** Author cinematic pieces at **24fps** for a filmic cadence, or
**30fps** for a cleaner "tech" feel. Deliver UI/Lottie at **60fps** so motion
stays smooth on high-refresh displays. Never mix authored frame rates within a
single piece.

### The "settle" — the world-class detail

Amateur motion stops on the target value. Professional motion *arrives*: it
overshoots by 2–6% and settles back over 2–3 frames. This micro-overshoot is why
polished work feels physical. Apply it to entrances, pops, and confirmations —
never to a brand mark's final locked position.

---

## 5. The motion token system

Treat motion like a design system, not a per-shot decision. Tokens make an
entire body of work feel like it came from one hand — and make UI motion
reviewable in code.

```ts
// motion.tokens.ts — single source of truth
export const duration = {
  instant: 0.08, fast: 0.16, base: 0.24,
  moderate: 0.4, slow: 0.64, cinematic: 1.1,
} as const;

export const ease = {
  signature:  [0.23, 1, 0.32, 1],   // fast-out, long glide  (house default)
  standard:   [0.4, 0, 0.2, 1],
  decelerate: [0, 0, 0.2, 1],
  accelerate: [0.4, 0, 1, 1],
  emphasized: [0.2, 0, 0, 1],
} as const;

export const spring = {
  soft:   { type: "spring", stiffness: 260, damping: 30 },
  snappy: { type: "spring", stiffness: 400, damping: 34, mass: 0.9 },
  bouncy: { type: "spring", stiffness: 500, damping: 22 },
} as const;

// Distance the eye should travel on entrance, in px
export const travel = { sm: 12, md: 24, lg: 48, xl: 96 } as const;

// Choreography rhythm
export const stagger = { tight: 0.05, base: 0.08, loose: 0.14 } as const;
```

Everything else composes from these. A reveal is `duration.slow` + `ease.signature`
+ `travel.lg`; a stagger group is `stagger.base` between children. When a token
changes, the whole system moves in step.

---

## 6. Choreography & staging

Choreography is how multiple elements share the stage over time. The goal is a
**single readable line of attention** — the eye is led, never forced to choose.

- **One focal move per beat.** At any instant, one element owns the frame. Support
  moves are quieter (smaller, slower, dimmer) so they never compete.
- **Stagger, don't stack.** Reveal a group with a small offset per child
  (`stagger.base` ≈ 80ms) so the eye reads them as a sequence, not a wall. Staggers
  create rhythm; simultaneous entrances create chaos.
- **Enter from meaning.** Direction encodes information: content slides *up* into
  place (arriving), errors shake *horizontally* (rejection), a nav drawer comes
  *from its edge*. Never move something in a direction that contradicts its logic.
- **Spatial continuity.** If element A becomes element B, morph or move between
  them — don't cut. Shared-element transitions preserve the user's mental model.
- **Hold, then resolve.** Give the eye a beat to rest on the payoff. Cutting away
  the instant a reveal completes robs it of impact. A 300–500ms hold on the key
  frame is often the difference between "nice" and "memorable."
- **Rhythm and the cut.** In video, cut on the beat or on motion (a "whip" or
  match-cut). Pacing should breathe: tension → release → tension. A reel that is
  relentlessly fast is as fatiguing as one that is uniformly slow.

**Staggered reveal in Framer Motion** (mirrors this repo's `whileInView` hero
pattern):

```tsx
const group = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.64, ease: [0.23, 1, 0.32, 1] } },
};

<motion.ul variants={group} initial="hidden" whileInView="show"
           viewport={{ once: true, amount: 0.4 }}>
  {features.map((f) => <motion.li key={f.id} variants={item}>{f.label}</motion.li>)}
</motion.ul>
```

---

## 7. The motion mark

A brand's motion mark is its signature few seconds — the animated equivalent of
a logo. Reference: the **Stripe Motion Mark**, where the wordmark assembles from
flowing gradient lines that converge into the logo, encoding the brand promise of
*instant, seamless transactions*. The lesson generalizes.

**Principles for a motion mark:**

- **The build should mean the brand.** Stripe's lines *flow and converge* because
  the product is *movement of money that just works*. Derive the build metaphor
  from the single truest thing about the product, then animate *that*.
- **Silhouette integrity.** The mark may assemble, morph, or draw on — but it must
  resolve to the exact, un-distorted logo. Never leave the brand asset in a
  stretched or off-model state, even for a frame.
- **Short and repeatable.** 1–3 seconds. It will play thousands of times (app
  launch, video sign-off); it must never feel long or wear out.
- **A confident landing.** The final lock-up settles crisply — a subtle
  scale-down from 101% to 100% on the last 2 frames — then holds, dead still.
  Stillness after motion is what makes the mark feel *placed*, not floating.
- **Sound-married.** A motion mark lives or dies on its audio sting. Design the
  final "click"/"whoosh" to hit exactly on the lock-up frame.

**Anatomy of a 2-second mark:** *anticipation* (0–0.2s, elements gather) →
*build* (0.2–1.4s, the meaningful assembly, eased with `emphasized`) →
*settle* (1.4–1.7s, overshoot resolves) → *hold* (1.7–2.0s, dead still + audio
tail).

---

## 8. Explainer video craft

An explainer earns attention it never assumes. Structure is everything.

**The narrative spine (45–90s):**

1. **Hook (0–3s).** State the tension or promise before the logo. You have ~2
   seconds before a scroll. Open on the problem, a surprising visual, or the
   payoff — never on a slow logo fade.
2. **Problem (3–15s).** Make the pain concrete and felt. The viewer must think
   *"that's me."*
3. **Solution (15–45s).** The product as the turn. Show it *doing the thing*, not
   a feature list. One clear mechanism, animated so the "aha" is visual.
4. **Proof (45–70s).** Why it's credible — a metric, a logo wall, a result.
5. **Payoff + CTA (70–90s).** The better world, then one unambiguous next step.

**Craft rules:**

- **Script first, always.** Motion follows story. Lock the voiceover/script before
  a single frame is animated; animating to a script that will change is how budgets
  die.
- **Storyboard, then animatic.** Prove the pacing with a timed animatic (still
  frames on the real audio track) *before* full animation. 80% of pacing problems
  are cheapest to fix here.
- **One idea per shot.** If a shot is teaching two things, it's two shots.
- **Kinetic type earns its keep.** Animate text to emphasize meaning (the key word
  arrives last, or scales), not to fill silence. Legibility beats flourish: text
  must be readable at its smallest on-screen size and hold long enough to read
  (≈ reading speed of 3–4 words/second, minimum ~0.8s on screen).
- **Design for sound-off.** 85% of social views are muted. Every essential message
  must land through visuals and captions alone; audio is an enhancement, not a
  dependency.

---

## 9. UI animation

Interface motion has a job the moment it appears: **explain state and preserve
continuity**. It is functional first, delightful second.

**When to animate:**

- **State changes** — loading, success, error, empty. Motion tells the user *what
  just happened*.
- **Spatial relationships** — where a panel came from, where a dismissed card
  went. Motion preserves the user's map.
- **Focus & feedback** — press, hover, drag. Instant response (< 100ms) makes the
  UI feel *direct*.

**When NOT to animate:**

- Anything on the critical path to a frequent task. Motion that repeats 50×/day
  becomes friction. Make high-frequency transitions **fast** (`instant`/`fast`)
  or instant.
- Decorative motion that competes with content the user is trying to read.

**Rules:**

- **Interruptible & reversible.** If a user reverses an action mid-animation, the
  motion must reverse from its *current* position, not snap and restart. This is
  why springs beat fixed tweens for interactive elements.
- **Enter animated, exit fast.** Entrances can be expressive; exits should get out
  of the way quickly (`accelerate`, ~120–160ms).
- **Respect the compositor.** Animate only `transform` and `opacity` — they run on
  the GPU. Animating `width`, `top`, `box-shadow`, or `background-position` forces
  layout/paint and drops frames. Promote with `will-change` sparingly.
- **60fps or it didn't happen.** A janky micro-interaction is worse than none.
  Budget every UI animation to hold 60fps on mid-tier hardware.

**Micro-interaction in Framer Motion:**

```tsx
<motion.button
  whileHover={{ y: -2, scale: 1.02 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 34, mass: 0.9 }}
>
  Get a quote
</motion.button>
```

**Lottie for shipped UI.** Author complex UI motion (success checks, empty-state
loops, onboarding illustrations) in After Effects → export via **Bodymovin/Lottie**
as vector JSON. It stays crisp at any resolution, weighs far less than video, and
plays at 60fps. Keep Lottie files lean: no huge image layers, no unnecessary
keyframes, and always gate looping animations behind `prefers-reduced-motion`.

---

## 10. Sound design

Sound is half of motion design, and the half most people neglect. It is what
makes motion feel *physical* and premium.

- **Sync to the frame.** Every impact, whoosh, and pop lands on the exact frame of
  the visual event. A sound one frame early or late reads as "cheap" even when the
  viewer can't say why.
- **Design the silence.** Contrast makes hits land. A quiet beat before a big
  reveal makes the reveal hit harder than wall-to-wall sound.
- **Whooshes sell movement, impacts sell arrival.** Fast moves get a whoosh that
  crescendos into the landing frame's impact/click.
- **Music sets pace; edit to it.** Cut on the beat. Let the track's dynamics drive
  the piece's tension-and-release.
- **Always ship a muted-safe version.** See §8 — the piece must work silent, then
  be elevated by sound.

---

## 11. The production pipeline

A repeatable pipeline is what lets a studio ship world-class work *on schedule*.
Each stage has an artifact and an approval gate; nothing proceeds until the prior
gate is signed off, because every stage is 3–10× cheaper to fix than the next.

| # | Stage | Artifact | Gate / approval |
|---|---|---|---|
| 1 | **Brief & discovery** | One-page brief: goal, audience, message, one KPI | Client signs the single-sentence message |
| 2 | **Script / concept** | Voiceover script or shot concept | Script locked (no changes downstream) |
| 3 | **Moodboard & style frames** | 2–3 fully-rendered still frames in final look | Visual language approved |
| 4 | **Storyboard** | Shot-by-shot boards with camera/notes | Narrative flow approved |
| 5 | **Animatic** | Timed stills on the real audio track | **Pacing locked** — the critical gate |
| 6 | **Design** | Final-quality frames for every scene | Look approved on real frames |
| 7 | **Animation** | Animated scenes, no sound | Motion quality approved |
| 8 | **Sound design & mix** | Score, SFX, VO mixed to picture | Full A/V approved |
| 9 | **Finishing** | Grade, grain, final comp, format exports | QC checklist passed (§14) |
| 10 | **Delivery** | Masters + platform cuts + source files | Handoff + usage rights |

**Why the animatic gate matters most.** Pacing is the property clients react to
emotionally and the one that's ruinously expensive to change after full
animation. Get the animatic right and the back half of the pipeline is
execution, not discovery.

---

## 12. Deliverable specifications

Deliver a **master** plus purpose-built cuts. Reframing a 16:9 master to 9:16 by
cropping is a tell; recompose for each aspect ratio.

| Placement | Aspect | Resolution | fps | Codec / format | Notes |
|---|---|---|---|---|---|
| Master (archival) | 16:9 | 3840×2160 | authored | ProRes 422 HQ | Source of all derivatives |
| Web hero (self-host) | 16:9 | 1920×1080 | 30 | H.264 + **WebM/VP9**, ~6–10 Mbps | Provide a poster frame; `muted autoplay playsinline` |
| YouTube | 16:9 | 1920×1080 / 2160p | 24/30 | H.264, high bitrate | — |
| Feed (IG/LinkedIn) | 1:1 or 4:5 | 1080×1080 / 1080×1350 | 30 | H.264 | Recompose; burn-in captions |
| Stories / Reels / TikTok | 9:16 | 1080×1920 | 30 | H.264 | Safe zones: keep text off top/bottom ~14% |
| UI motion (in-product) | any | vector | 60 | **Lottie JSON** | Prefer over video for interface motion |
| App splash / sting | square/native | vector or 2160 | 60 | Lottie / ProRes 4444 (alpha) | Include alpha for overlays |

**Universal delivery rules:**

- Provide a **poster/first-frame** image for every self-hosted web video.
- Burn in captions for all social cuts (sound-off default).
- Keep the master's authored frame rate; never re-time by dropping frames.
- Deliver **source/project files + usage rights** in the handoff — it's part of
  professional delivery, not an upsell.
- Name files predictably: `client_project_placement_aspect_v03.mp4`.

---

## 13. Accessibility & performance

World-class motion is inclusive and light. Non-negotiable.

- **`prefers-reduced-motion`.** Honour it everywhere. Replace large translational
  and parallax motion with a simple opacity fade; never remove the state change
  itself (the user still needs feedback), only the movement.

  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: .01ms !important;
      transition-duration: .01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

  ```tsx
  // Framer Motion: gate motion on the user's OS setting
  import { useReducedMotion } from "framer-motion";
  const reduce = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show:   { opacity: 1, y: 0 },
  };
  ```

- **Vestibular safety.** Avoid large-field parallax, spinning, zooming, and rapid
  scaling for users who don't opt into it — these trigger motion sickness.
- **No seizure risk.** Never flash more than **3 times per second** (WCAG 2.3.1).
- **Performance budget.** UI animation holds 60fps on mid-tier mobile. Web hero
  videos are compressed and lazy-loaded with a poster; hero Lottie files stay
  under a few hundred KB. Motion should never be the reason a page feels slow.
- **Contrast survives motion.** Text must meet contrast ratios at *every* frame of
  a transition, not just at rest.

---

## 14. The quality bar

The checklist a piece must pass before it ships. If any box is unchecked, it is
not done.

**Motion craft**
- [ ] Nothing moves linearly; everything eases (§4).
- [ ] Entrances "settle" with a subtle overshoot; the brand mark does not.
- [ ] Follow-through and offset present — parts don't all stop at once.
- [ ] One clear focal move per beat; supporting motion is subordinate.
- [ ] Elements travel on arcs, not straight lines, where natural.
- [ ] Durations come from the token scale; nothing is arbitrary.

**Story & clarity**
- [ ] The single message lands in the first 3 seconds.
- [ ] Every shot teaches exactly one idea.
- [ ] Text is legible at its smallest size and holds long enough to read.
- [ ] The piece is fully understandable **with sound off**.

**Brand & sound**
- [ ] Look matches brand: color, type, light source consistent.
- [ ] Logo/mark resolves to an exact, un-distorted lock-up.
- [ ] Every impact/whoosh is synced to the frame; silence is used for contrast.

**Technical**
- [ ] Holds 60fps (UI) / no dropped frames (video); only `transform`/`opacity`
      animated in UI.
- [ ] `prefers-reduced-motion` handled; no >3Hz flashing.
- [ ] All delivery formats, aspect recomposes, captions, and poster frames exported.
- [ ] Source files + usage rights included in handoff.

**The final test:** *Clarify · On-brand · Watch-it-twice.* All three, or iterate.

---

## 15. Tooling

| Job | Primary | Alternatives / notes |
|---|---|---|
| 2D motion graphics | **After Effects** | The industry backbone |
| Procedural / generative 2D | **Cavalry** | Data-driven, systemic motion |
| Real-time & interactive UI motion | **Rive** | State machines, ships to app/web |
| Vector export for UI | **Lottie / Bodymovin** | AE → JSON, 60fps, tiny |
| 3D (when the story needs depth) | **Blender / Cinema 4D** | Composite back into 2D |
| Design & handoff | **Figma** | Style frames, specs, tokens |
| Web/UI implementation | **Framer Motion** (this repo) | Variants, springs, `whileInView` |
| Sound | **Ableton / Logic / Audition** | SFX libraries + custom design |

**Framer Motion house defaults for this codebase:** signature reveal =
`{ duration: 0.64, ease: [0.23, 1, 0.32, 1] }`; interactive =
`{ type: "spring", stiffness: 400, damping: 34, mass: 0.9 }`; group stagger =
`0.08s`; always pair `whileInView` with `viewport={{ once: true, amount: 0.4 }}`
and gate on `useReducedMotion()`.

---

## 16. Glossary

- **Animatic** — timed still frames cut to the real audio; the pacing proof.
- **Easing** — the rate-of-change curve of a motion; the opposite of linear.
- **Follow-through** — trailing parts settling after the lead element stops.
- **Kinetic typography** — animated text used to convey meaning and emphasis.
- **Lottie** — vector animation format (JSON) exported from After Effects.
- **Motion mark** — a brand's signature 1–3s animated logo/sting.
- **Overshoot / settle** — passing the target value then easing back, for physicality.
- **Recompose** — rebuilding a shot for a new aspect ratio (vs. cropping).
- **Stagger** — a small time offset between elements entering as a group.
- **Style frame** — a fully-rendered still that establishes the final look.

---

*Motion is the choreography of attention over time. Make every move mean
something, handcraft the 30% they feel but can't name, and know what not to
animate. That's the whole game.*
