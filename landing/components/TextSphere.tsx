import { useRef, useEffect, useState, useMemo } from 'react';

interface TextSphereProps {
  text?: string;
  /** Number of lines (auto-split by word count) or explicit array of lines. */
  lines?: number | string[];
  /** Target radius on a wide viewport. Automatically scaled down on mobile. */
  radius?: number;
  /** Font size on a wide viewport. Automatically scaled down on mobile. */
  fontSize?: number;
  /** Continuous auto-rotation around Y axis, in degrees per second. 0 disables. */
  spin?: number;
  /** Initial X tilt in degrees (locked — user input cannot change this). */
  tiltX?: number;
  /** Z rotation of the whole text stage in degrees. */
  tiltZ?: number;
  className?: string;
}

/**
 * 3D text wrapped around a sphere. Pure CSS 3D transforms — no 3D library.
 *
 * Typography is normalized: every glyph sits in a 1em-tall inline-block box
 * so baselines align, and per-character arc widths come from canvas
 * measurement of the actual loaded Inter font. All lines share a single
 * uniform degrees-per-pixel density derived from the longest line, so the
 * apparent letter spacing stays homogeneous between rings.
 *
 * Interaction is drag-based (pointer events) with `touch-action: none` on
 * the stage, so dragging a finger rotates the sphere instead of scrolling
 * the page. Auto-spin pauses while the user is dragging.
 */
export default function TextSphere({
  text = 'Buildlore is a design brand directive studio. Here to get high value content and build the lore you need',
  lines: linesProp = 3,
  radius: maxRadius = 260,
  fontSize: maxFontSize = 32,
  spin = 0,
  tiltX = -8,
  tiltZ = -12,
  className = '',
}: TextSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotY, setRotY] = useState(0);
  const [measured, setMeasured] = useState<{
    angles: number[][];
  } | null>(null);

  // Responsive sizing: scale the sphere down on narrow viewports so the box
  // always fits on screen and stays centered. Computed on mount and on
  // resize / orientation change.
  const BOX_TO_R_RATIO = 2.4;
  const [viewportW, setViewportW] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1440,
  );
  useEffect(() => {
    const onResize = () => setViewportW(window.innerWidth);
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, []);
  const scale = Math.min(1, (viewportW * 0.92) / (maxRadius * BOX_TO_R_RATIO));
  const radius = Math.max(80, Math.round(maxRadius * scale));
  const fontSize = Math.max(12, Math.round(maxFontSize * scale));

  // Split the text into lines. Caller may pass an explicit array.
  const lines = useMemo(() => {
    if (Array.isArray(linesProp)) {
      return linesProp.filter((s) => s && s.length > 0);
    }
    const numLines = Math.max(1, linesProp);
    const words = text.trim().split(/\s+/);
    const per = Math.ceil(words.length / numLines);
    const out: string[] = [];
    for (let i = 0; i < numLines; i++) {
      const slice = words.slice(i * per, (i + 1) * per).join(' ');
      if (slice) out.push(slice);
    }
    return out;
  }, [text, linesProp]);

  // Measure each character using real DOM inline-block spans with the exact
  // same CSS as the final render. getBoundingClientRect().width returns the
  // browser's actual advance width for that glyph in that font — 100%
  // matching what will be drawn. Canvas.measureText is unreliable on iOS
  // Safari when the requested font is loaded via a non-blocking <link>.
  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const measureDOM = (): number[][] | null => {
      if (lines.length === 0) return null;
      const container = document.createElement('div');
      container.setAttribute('aria-hidden', 'true');
      container.style.cssText = [
        'visibility:hidden',
        'position:absolute',
        'pointer-events:none',
        'top:-99999px',
        'left:0',
        "font-family:'Inter',ui-sans-serif,system-ui,sans-serif",
        'font-weight:800',
        `font-size:${fontSize}px`,
        'line-height:1',
        'letter-spacing:0',
        'font-kerning:none',
        'white-space:nowrap',
      ].join(';');
      document.body.appendChild(container);

      const perLineSpans: HTMLSpanElement[][] = lines.map((line) => {
        const lineDiv = document.createElement('div');
        lineDiv.style.whiteSpace = 'nowrap';
        const spans: HTMLSpanElement[] = [];
        for (let i = 0; i < line.length; i++) {
          const ch = line[i] === ' ' ? '\u00A0' : line[i];
          const s = document.createElement('span');
          s.style.cssText =
            'display:inline-block;padding:0;margin:0;line-height:1;height:1em;letter-spacing:0;white-space:pre';
          s.textContent = ch;
          lineDiv.appendChild(s);
          spans.push(s);
        }
        container.appendChild(lineDiv);
        return spans;
      });

      // Force layout so bounding rects are fresh.
      void container.offsetHeight;

      const widths = perLineSpans.map((spans) =>
        spans.map((s) => {
          const w = s.getBoundingClientRect().width;
          // Safety floor so a 0-width measurement can never collapse all
          // following chars onto the same angle.
          return Math.max(1, w);
        }),
      );

      document.body.removeChild(container);
      return widths;
    };

    const computeAndSet = () => {
      if (cancelled) return;
      const widths = measureDOM();
      if (!widths) return;

      const totals = widths.map((w) => w.reduce((a, b) => a + b, 0) || 1);
      const maxTotal = Math.max(...totals);
      const degPerPx = 360 / maxTotal;

      const angles = widths.map((lineWidths, li) => {
        const total = totals[li];
        const lineArcDeg = total * degPerPx;
        const start = -lineArcDeg / 2;
        const out: number[] = [];
        let cursor = 0;
        for (let i = 0; i < lineWidths.length; i++) {
          const centerPx = cursor + lineWidths[i] / 2;
          cursor += lineWidths[i];
          out.push(start + centerPx * degPerPx);
        }
        return out;
      });

      if (!cancelled) setMeasured({ angles });
    };

    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    const fontSpec = `800 ${fontSize}px Inter`;

    const run = async () => {
      // Explicitly ask the browser to load Inter at this weight/size, race
      // with a 2s timeout so we don't hang on a failing network.
      if (fonts && fonts.load) {
        try {
          await Promise.race([
            fonts.load(fontSpec),
            new Promise((r) => {
              const id = window.setTimeout(r, 2000);
              timers.push(id);
            }),
          ]);
        } catch {
          /* ignore */
        }
      }
      // Settle delay — iOS Safari sometimes reports the font as loaded
      // before the glyph metrics are actually applied to the DOM.
      await new Promise((r) => {
        const id = window.setTimeout(r, 50);
        timers.push(id);
      });
      if (cancelled) return;
      computeAndSet();

      // One retry 500ms later in case the first measurement happened while
      // the font was still swapping. If the layout is identical, this is a
      // cheap no-op.
      await new Promise((r) => {
        const id = window.setTimeout(r, 500);
        timers.push(id);
      });
      if (cancelled) return;
      computeAndSet();
    };

    run();

    return () => {
      cancelled = true;
      for (const id of timers) clearTimeout(id);
    };
  }, [lines, fontSize, radius]);

  // Drag-based interaction — pointer events give us unified mouse / touch
  // handling, setPointerCapture keeps the drag locked to one pointer, and
  // touch-action: none on the stage stops the mobile browser from stealing
  // the gesture for scrolling.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let baseY = 0; // accumulated rotation from auto-spin + finished drags
    let liveY = 0; // live rotation from current drag (before release)
    let displayY = 0; // smoothed value actually applied
    let dragging = false;
    let pointerId: number | null = null;
    let dragStartX = 0;
    let dragStartBaseY = 0;
    let lastTs: number | null = null;

    const pxToDeg = 0.5; // how much rotation per px of finger travel

    const onPointerDown = (e: PointerEvent) => {
      if (dragging) return;
      dragging = true;
      pointerId = e.pointerId;
      dragStartX = e.clientX;
      // freeze the current total rotation into baseY so liveY starts at 0
      dragStartBaseY = baseY + liveY;
      baseY = dragStartBaseY;
      liveY = 0;
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* not all browsers */
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging || e.pointerId !== pointerId) return;
      const dx = e.clientX - dragStartX;
      liveY = dx * pxToDeg;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!dragging || e.pointerId !== pointerId) return;
      dragging = false;
      pointerId = null;
      baseY += liveY;
      liveY = 0;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('lostpointercapture', onPointerUp);

    const rafRef = { id: 0 };
    const loop = (ts: number) => {
      if (lastTs === null) lastTs = ts;
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;

      // Auto-spin only when idle
      if (!dragging && spin > 0) {
        baseY = (baseY + spin * dt) % 360;
      }

      const target = baseY + liveY;
      // Smooth so fast drags don't jitter, but stay snappy.
      const ease = dragging ? 0.35 : 0.18;
      displayY += (target - displayY) * ease;

      setRotY(displayY);
      rafRef.id = requestAnimationFrame(loop);
    };
    rafRef.id = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('lostpointercapture', onPointerUp);
      cancelAnimationFrame(rafRef.id);
    };
  }, [spin]);

  const sphereSize = radius * 2;
  const boxSize = Math.round(radius * 2.8);
  // ~20% leading so glyph ascenders/descenders of one line don't bleed
  // into the next. Still tight but visually clean.
  const lineHeight = Math.round(fontSize * 1.2);

  // Uniform fallback step used while fonts load / before canvas measurement.
  const fallbackDegPerChar = ((fontSize * 0.42) / radius) * (180 / Math.PI);

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto select-none ${className}`}
      style={{
        width: boxSize,
        height: boxSize,
        perspective: `${radius * 5}px`,
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        touchAction: 'none',
        cursor: 'grab',
      }}
      aria-label={text}
      role="img"
    >
      {/* The white 3D-looking sphere */}
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: sphereSize,
          height: sphereSize,
          left: '50%',
          top: '50%',
          marginLeft: -radius,
          marginTop: -radius,
          background:
            'radial-gradient(circle at 35% 28%, #ffffff 0%, #fafafa 35%, #eaeaea 70%, #cfcfcf 100%)',
          boxShadow:
            '0 30px 80px rgba(0,0,0,0.18), inset -20px -35px 70px rgba(0,0,0,0.08), inset 15px 20px 40px rgba(255,255,255,0.65)',
        }}
      />

      {/* 3D text stage */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          width: 0,
          height: 0,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tiltX}deg) rotateY(${rotY}deg) rotateZ(${tiltZ}deg)`,
          willChange: 'transform',
        }}
      >
        {lines.map((line, li) => {
          const n = line.length;
          const y = (li - (lines.length - 1) / 2) * lineHeight;
          const measuredAngles = measured?.angles[li];
          return (
            <div
              key={li}
              className="absolute"
              style={{
                left: 0,
                top: 0,
                transformStyle: 'preserve-3d',
              }}
            >
              {line.split('').map((ch, i) => {
                const angle = measuredAngles
                  ? measuredAngles[i]
                  : (i - (n - 1) / 2) * fallbackDegPerChar;
                const display = ch === ' ' ? '\u00A0' : ch;
                return (
                  <span
                    key={i}
                    className="absolute font-extrabold text-neutral-900"
                    style={{
                      left: 0,
                      top: 0,
                      display: 'inline-block',
                      fontSize,
                      lineHeight: 1,
                      height: '1em',
                      padding: 0,
                      margin: 0,
                      letterSpacing: 0,
                      transformOrigin: '0 0 0',
                      // translate(-50%, -50%) MUST be at the end of the chain
                      // so it's applied FIRST — in the glyph's local space
                      // before rotation. Otherwise the -50% shift happens in
                      // world space after rotation and each char's actual
                      // position ends up offset by its own width, creating
                      // a visible stagger along the curve.
                      transform: `translateY(${y}px) rotateY(${angle}deg) translateZ(${radius}px) translate(-50%, -50%)`,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      whiteSpace: 'pre',
                    }}
                  >
                    {display}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
