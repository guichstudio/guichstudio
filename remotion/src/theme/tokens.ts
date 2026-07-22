/**
 * Motion tokens — the single source of truth for timing, easing, and rhythm.
 *
 * This is the Remotion translation of `docs/motion-design.md` §4–§5. Compositions
 * compose from these tokens instead of hard-coding numbers, so the whole body of
 * work moves as one system. Change a token here and every shot follows.
 */
import { Easing } from "remotion";

/** House frame rate. 30fps = clean "tech" cadence (doc §4). */
export const FPS = 30;

/** Seconds → frames helper. Keep float precision for smooth interpolation. */
export const s = (seconds: number, fps: number = FPS): number => seconds * fps;

/**
 * House easing curves (doc §4). Never ship the tool default.
 * `signature` is the landing hero's curve: fast start, long luxurious glide.
 */
export const EASE = {
  signature: Easing.bezier(0.23, 1, 0.32, 1), // fast-out, long glide (default)
  standard: Easing.bezier(0.4, 0, 0.2, 1),
  decelerate: Easing.bezier(0, 0, 0.2, 1),
  accelerate: Easing.bezier(0.4, 0, 1, 1),
  emphasized: Easing.bezier(0.2, 0, 0, 1),
} as const;

/** Duration scale in seconds (doc §4). */
export const DUR = {
  instant: 0.08,
  fast: 0.16,
  base: 0.24,
  moderate: 0.4,
  slow: 0.64,
  cinematic: 1.1,
} as const;

/** Choreography rhythm — offset between staggered elements, in seconds (doc §5–§6). */
export const STAGGER = {
  tight: 0.05,
  base: 0.08,
  loose: 0.14,
} as const;

/** Entrance travel distances, in px (doc §5). */
export const TRAVEL = { sm: 12, md: 24, lg: 48, xl: 96 } as const;

/**
 * BuildLore palette — minimal, near-black on warm paper (matches the landing
 * brand: neutral-900 ink, no loud accents). Restraint is the signature (doc §1).
 */
export const COLORS = {
  paper: "#F5F3EE", // warm off-white
  paperDeep: "#ECE8E0", // vignette edge
  ink: "#0B0B0C", // near-black wordmark
  inkSoft: "#8A857C", // muted tagline / captions
  rule: "#14130F", // hairline rule
} as const;
