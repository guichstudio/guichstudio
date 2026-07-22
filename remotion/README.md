# BuildLore — Remotion motion

Studio-grade, programmatic video for BuildLore. Every composition is an
executable expression of [`../docs/motion-design.md`](../docs/motion-design.md):
the timing, easing, and rhythm come from `src/theme/tokens.ts`, not magic numbers.

## Compositions

| id | Aspect | Duration | What |
|---|---|---|---|
| `BrandMark` | 16:9 (1920×1080) | 2.5s | The BuildLore logo sting — anticipation → build → settle → hold |
| `BrandMarkSquare` | 1:1 (1080×1080) | 2.5s | Same mark, recomposed for square feeds (never cropped) |

## Run

```bash
npm install
npm run studio        # live preview + scrubbing (Remotion Studio)
npm run still         # export a single frame → out/brand-mark.png
npm run render        # export the 16:9 MP4 → out/brand-mark.mp4
npm run render:square # export the 1:1 MP4
```

### Rendering in a locked-down environment

Remotion normally downloads its own Chrome Headless Shell. If the network blocks
that, point it at any local Chromium:

```bash
REMOTION_BROWSER_EXECUTABLE=/path/to/chrome npm run render
```

`remotion.config.ts` reads that env var automatically.

## Structure

```
src/
  index.ts                 # registerRoot
  Root.tsx                 # <Composition> registry (author once, recompose per aspect)
  theme/
    tokens.ts              # EASE / DUR / STAGGER / TRAVEL / COLORS  (the motion system)
    Fonts.tsx              # brand font loading (Inter + PP Editorial Old)
  compositions/
    BrandMark.tsx          # the logo sting
public/fonts/              # brand fonts, mirrored from ../landing/public/fonts
```

## Adding a composition

1. Build it in `src/compositions/`, composing from `theme/tokens.ts`.
2. Register it in `src/Root.tsx`.
3. Preview with `npm run studio`, then wire a `render:*` script if needed.
