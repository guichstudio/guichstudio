# CLAUDE.md — project context for AI coding sessions

This file is loaded automatically at the start of every Claude Code session. It
tells the assistant how this repo is organized and how to produce **studio-grade
motion** that is consistent with the house style.

## Repositories & apps

- **`landing/`** — the marketing site (Next.js 14 · React 18 · **Framer Motion 10**
  · Tailwind). This is the live web product. UI/web motion lives here.
- **`remotion/`** — programmatic video (**Remotion 4** · React 18). Brand marks,
  showcases, explainers, and reusable motion templates render to MP4 here.
- **`docs/`** — house documentation. **`docs/motion-design.md` is canonical for
  all motion decisions.** Read it before animating anything.

## Motion rules (always apply)

Follow **`docs/motion-design.md`**. The non-negotiables:

- **Never ship a default/linear ease.** House curves live in code:
  - Web (Framer Motion): `ease: [0.23, 1, 0.32, 1]` (signature), springs
    `{ stiffness: 400, damping: 34, mass: 0.9 }` for interactive elements.
  - Video (Remotion): `remotion/src/theme/tokens.ts` — `EASE`, `DUR`, `STAGGER`,
    `TRAVEL`, `COLORS`. Compose from these tokens; do not hard-code numbers.
- **One focal move per beat**; supporting motion is quieter. Restraint is the
  signature.
- **Entrances settle** with a subtle 1–6% overshoot; a **brand mark never**
  distorts and resolves to an exact, dead-still lock-up + hold.
- **Stagger, don't stack** — ~0.08s between grouped elements.
- **Accessibility:** honour `prefers-reduced-motion` (swap large translation for a
  fade, keep the state change); no >3Hz flashing; UI holds 60fps; animate only
  `transform`/`opacity` in the browser.
- **Design for sound-off** — social cuts get burned-in captions.

## Brand

- **Name:** BuildLore (formerly Guich Studio). Positioning: *narrative-led
  branding, video production & content for tech & Web3.*
- **Look:** minimal, near-black on warm paper; no loud accent colors.
- **Type:** **Inter** (grotesk, weights to 900) + **PP Editorial Old** (editorial
  italic serif) for contrast. Both are in `landing/public/fonts/` and mirrored to
  `remotion/public/fonts/`.
- **Palette tokens:** see `remotion/src/theme/tokens.ts` → `COLORS`.

## Working with Remotion (`remotion/`)

- Preview: `cd remotion && npm run studio` (opens the Remotion Studio).
- Render: `npm run render` (16:9) · `npm run render:square` (1:1) · `npm run still`.
- Compositions are registered in `remotion/src/Root.tsx`. Author once, **recompose
  per aspect ratio — never crop** (doc §12).
- This environment's network is locked down; Remotion may not be able to download
  its own Chrome Headless Shell. A Chromium is pre-installed — render with
  `REMOTION_BROWSER_EXECUTABLE=<path> npm run render` (see `remotion.config.ts`).

## Conventions

- TypeScript. Match the surrounding code's style, naming, and comment density.
- Keep motion logic in tokens/helpers, not scattered magic numbers.
- Do **not** commit or push unless explicitly asked. `remotion/out/` and
  `node_modules/` are gitignored.
