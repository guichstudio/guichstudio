/**
 * BuildLore — Motion Mark
 *
 * A restrained, premium logo sting that applies docs/motion-design.md §7:
 *   anticipation → build → settle → hold.
 *
 * Craft checklist embodied here:
 *   • Signature easing on every move (§4)            • Per-letter stagger (§6)
 *   • Clip-reveal (letters rise from a mask)         • Follow-through: tagline
 *     settles a beat after the wordmark (§3.5)         and rule trail the letters
 *   • Overshoot "settle" 101%→100% (§4)              • Secondary action: a single
 *   • Dead-still hold on the payoff (§6)               soft sheen pass (§3.8)
 *   • Handcrafted texture: paper + grain + vignette (§1)
 */
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASE, STAGGER, s } from "../theme/tokens";
import { Fonts, FONT_SANS, FONT_SERIF } from "../theme/Fonts";

export type BrandMarkProps = {
  square?: boolean;
};

/** The wordmark, split so "Build" is the grotesk and "Lore" the editorial serif. */
const SEGMENTS = [
  { text: "Build", serif: false },
  { text: "Lore", serif: true },
] as const;

/** eased 0→1 reveal for one keyframed segment of the timeline. */
const reveal = (
  frame: number,
  from: number,
  dur: number,
  easing = EASE.signature,
) =>
  interpolate(frame, [from, from + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

export const BrandMark: React.FC<BrandMarkProps> = ({ square = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const F = (sec: number) => s(sec, fps);

  const size = square ? 168 : 208; // wordmark font-size
  const tagSize = square ? 20 : 22;

  // ---- Timeline (seconds) -------------------------------------------------
  const RULE_IN = 0.1; // baseline rule draws first (anticipation)
  const LETTERS_IN = 0.24; // letters begin to rise
  const LETTER_DUR = 0.62; // each letter's glide
  const STAG = STAGGER.base; // 0.08s offset per letter
  const TAG_IN = 1.18; // tagline follows through after the wordmark

  // Flatten to letters, tracking a global index for the stagger cascade.
  const letters = SEGMENTS.flatMap((seg, si) =>
    seg.text.split("").map((char, ci) => ({ char, serif: seg.serif, si, ci })),
  );

  // ---- Baseline hairline: draws from center outward -----------------------
  const ruleR = reveal(frame, F(RULE_IN), F(0.55));

  // ---- Settle: whole lockup overshoots 101% then rests (§4) ---------------
  const settle = interpolate(
    frame,
    [F(LETTERS_IN + 0.7), F(LETTERS_IN + 0.9), F(LETTERS_IN + 1.06)],
    [1.014, 1.0, 1.0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE.emphasized },
  );

  // ---- Secondary action: one soft sheen sweep across the lockup (§3.8) -----
  const sheenX = interpolate(frame, [F(0.95), F(1.85)], [-140, 140], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE.standard,
  });
  const sheenOpacity = interpolate(
    frame,
    [F(0.95), F(1.25), F(1.85)],
    [0, 0.16, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // ---- Tagline: fade + rise, trailing the wordmark ------------------------
  const tagR = reveal(frame, F(TAG_IN), F(0.5), EASE.decelerate);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.paper }}>
      <Fonts />

      {/* Warm vignette for depth (handcrafted, not flat) */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(120% 120% at 50% 42%, ${COLORS.paper} 55%, ${COLORS.paperDeep} 100%)`,
        }}
      />

      {/* Lockup, centered, with the overshoot settle applied to the group */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "stretch",
            transform: `scale(${settle})`,
            transformOrigin: "center",
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              lineHeight: 0.9,
              paddingBottom: square ? 10 : 14,
            }}
          >
            {letters.map((l, i) => {
              const r = reveal(
                frame,
                F(LETTERS_IN) + i * F(STAG),
                F(LETTER_DUR),
              );
              return (
                // Mask: inner glyph rises from below (clip-reveal)
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    overflow: "hidden",
                    verticalAlign: "bottom",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      transform: `translateY(${(1 - r) * 118}%)`,
                      opacity: r,
                      fontFamily: l.serif ? FONT_SERIF : FONT_SANS,
                      fontStyle: l.serif ? "italic" : "normal",
                      fontWeight: l.serif ? 400 : 900,
                      fontSize: l.serif ? size * 1.04 : size,
                      letterSpacing: l.serif ? "0" : "-0.045em",
                      color: COLORS.ink,
                      paddingLeft: l.serif && l.ci === 0 ? size * 0.04 : 0,
                    }}
                  >
                    {l.char}
                  </span>
                </span>
              );
            })}

            {/* Sheen — a single soft light pass (secondary action) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                width: "48%",
                transform: `translateX(${sheenX}%) skewX(-14deg)`,
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
                mixBlendMode: "soft-light",
                opacity: sheenOpacity,
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Baseline hairline — draws from center outward */}
          <div
            style={{
              height: 2,
              backgroundColor: COLORS.rule,
              transform: `scaleX(${ruleR})`,
              transformOrigin: "center",
              opacity: 0.9,
            }}
          />

          {/* Tagline — trails the wordmark, muted, letter-spaced */}
          <div
            style={{
              marginTop: square ? 22 : 26,
              textAlign: "center",
              fontFamily: FONT_SANS,
              fontWeight: 600,
              fontSize: tagSize,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: COLORS.inkSoft,
              transform: `translateY(${(1 - tagR) * 14}px)`,
              opacity: tagR,
              paddingLeft: "0.34em", // optical centering for tracked caps
            }}
          >
            Narrative-led creative studio
          </div>
        </div>
      </AbsoluteFill>

      {/* Fine film grain for the handcrafted texture (§1) */}
      <AbsoluteFill
        style={{
          opacity: 0.05,
          mixBlendMode: "multiply",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
