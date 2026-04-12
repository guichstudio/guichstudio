import { useRef, useEffect, useState, useMemo } from 'react';

interface TextSphereProps {
  text?: string;
  /** Number of lines (auto-split by word count) or explicit array of lines. */
  lines?: number | string[];
  /** Target radius on a wide viewport. Automatically scaled down on mobile. */
  radius?: number;
  /** Font size on a wide viewport. Automatically scaled down on mobile. */
  fontSize?: number;
  /**
   * Continuous auto-rotation speed in degrees/second around the Y axis.
   * Positive values spin the text left-to-right, negative spins right-to-left.
   * 0 disables the auto-spin entirely.
   */
  spin?: number;
  /** Fixed X tilt in degrees — not affected by user input. */
  tiltX?: number;
  /** Z rotation of the whole text stage in degrees. */
  tiltZ?: number;
  className?: string;
}

/**
 * 3D text wrapped around a sphere. Pure CSS 3D transforms — no 3D library.
 *
 * Typography: every glyph sits in a 1em-tall inline-block box so baselines
 * align, and per-character arc widths come from real DOM measurement
 * (getBoundingClientRect on inline-block spans with the same CSS as the final
 * render). Each line is then scaled to fill exactly 360° of arc, so the
 * first and last glyph of every ring meet at the back of the sphere with no
 * visible seam.
 *
 * Interaction: drag-based pointer events with `touch-action: none` on the
 * stage so dragging a finger rotates the sphere instead of scrolling the
 * page. Auto-spin pauses while the user is actively dragging, and the
 * whole animation loop pauses when the sphere is scrolled off-screen
 * (IntersectionObserver) to save mobile battery.
 *
 * Perf: the per-frame rotation is applied directly to the text-stage DOM
 * node via a ref — not through React state — so the RAF loop never triggers
 * a React re-render. Measurement state only flips once per font load.
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
  const textStageRef = useRef<HTMLDivElement>(null);
  const [measured, setMeasured] = useState<number[][] | null>(null);

  // Responsive sizing — the sphere scales down on narrow viewports so the
  // box always fits on screen and stays centered.
  //
  // IMPORTANT: the initial state is a hard-coded 1440, NOT window.innerWidth.
  // If we read window.innerWidth in the useState initializer the server
  // renders with 1440 but the client initializer returns e.g. 390 on mobile,
  // which causes a React 18 hydration mismatch. React 18 then keeps the
  // server markup (desktop sphere) and never re-renders with the mobile
  // viewport — the symptom is a desktop-sized sphere on mobile. We instead
  // start with a server-safe default and force a sync inside useEffect.
  const BOX_TO_R_RATIO = 2.4;
  const [viewportW, setViewportW] = useState<number>(1440);
  useEffect(() => {
    const sync = () => setViewportW(window.innerWidth);
    sync(); // initial post-hydration sync
    window.addEventListener('resize', sync);
    window.addEventListener('orientationchange', sync);
    return () => {
      window.removeEventListener('resize', sync);
      window.removeEventListener('orientationchange', sync);
    };
  }, []);

  // "Narrow" = anything smaller than a desktop window. Threshold 900 covers
  // iPad portrait (768-834) so it also gets the smaller-sphere layout.
  const isNarrow = viewportW < 900;
  // Narrow: sphere fills ~70% of viewport (≈ the user's red-circle target).
  // Wide: sphere fills up to 92% of viewport.
  const fillRatio = isNarrow ? 0.7 : 0.92;
  const scale = Math.min(
    1,
    (viewportW * fillRatio) / (maxRadius * BOX_TO_R_RATIO),
  );
  const radius = Math.max(80, Math.round(maxRadius * scale));
  // Clamp fontSize to 14 minimum — below that the text is unreadable on
  // mobile even though it still fits the circumference geometrically.
  const fontSize = Math.max(14, Math.round(maxFontSize * scale));

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

  // Measure each character with real DOM inline-block spans that have the
  // exact same CSS as the final render. getBoundingClientRect().width gives
  // the browser's true advance width, so measurement and render can never
  // diverge regardless of which font actually ends up loaded.
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

      // Force layout so rects are fresh.
      void container.offsetHeight;

      // Small constant pad added to every measured width. It becomes extra
      // breathing room between glyphs once the line is scaled to fill 360°.
      const SPACING_PX = 0;
      const widths = perLineSpans.map((spans) =>
        spans.map(
          (s) => Math.max(1, s.getBoundingClientRect().width) + SPACING_PX,
        ),
      );

      document.body.removeChild(container);
      return widths;
    };

    const computeAndSet = () => {
      if (cancelled) return;
      const widths = measureDOM();
      if (!widths) return;

      // Each line is scaled to fill exactly 360° of arc so there is never
      // a visible gap at the line's seam. Letter spacing is adjusted
      // per-line: a shorter line stretches, a longer line compresses. The
      // first and last chars then meet exactly at the back of the sphere.
      const angles = widths.map((lineWidths) => {
        const total = lineWidths.reduce((a, b) => a + b, 0) || 1;
        const out: number[] = [];
        let cursor = 0;
        for (let i = 0; i < lineWidths.length; i++) {
          const centerPx = cursor + lineWidths[i] / 2;
          cursor += lineWidths[i];
          // centered on 0 (middle of the line faces the camera at rest)
          out.push((centerPx / total) * 360 - 180);
        }
        return out;
      });

      if (!cancelled) setMeasured(angles);
    };

    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    const fontSpec = `800 ${fontSize}px Inter`;
    const delay = (ms: number) =>
      new Promise<void>((r) => {
        const id = window.setTimeout(r, ms);
        timers.push(id);
      });

    const run = async () => {
      if (fonts && fonts.load) {
        try {
          await Promise.race([fonts.load(fontSpec), delay(2000)]);
        } catch {
          /* ignore */
        }
      }
      // iOS Safari settle delay — the font sometimes isn't fully applied the
      // instant fonts.load() resolves.
      await delay(50);
      if (cancelled) return;
      computeAndSet();
      await delay(500);
      if (cancelled) return;
      computeAndSet();
    };

    run();

    return () => {
      cancelled = true;
      for (const id of timers) clearTimeout(id);
    };
  }, [lines, fontSize, radius]);

  // Drag-based interaction + off-screen pause. Pointer events unify mouse
  // and touch, pointer capture locks the drag to one pointer, and
  // `touch-action: none` on the stage (set in the JSX style) stops the
  // mobile browser from stealing the gesture for page scroll. An
  // IntersectionObserver pauses the whole RAF loop whenever the sphere is
  // scrolled out of view, so the animation doesn't waste battery on mobile.
  //
  // The per-frame transform is written directly to textStageRef.current
  // via style.transform — no React state, no reconciliation every frame.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let baseY = 0;
    let liveY = 0;
    let displayY = 0;
    let dragging = false;
    let pointerId: number | null = null;
    let dragStartX = 0;
    let lastTs: number | null = null;
    let rafId = 0;
    let visible = true;

    const PX_TO_DEG = 0.5;

    const applyTransform = () => {
      const stage = textStageRef.current;
      if (stage) {
        stage.style.transform = `rotateX(${tiltX}deg) rotateY(${displayY}deg) rotateZ(${tiltZ}deg)`;
      }
    };

    const loop = (ts: number) => {
      if (lastTs === null) lastTs = ts;
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;

      if (!dragging && spin !== 0) {
        baseY = (baseY + spin * dt) % 360;
      }
      const target = baseY + liveY;
      const ease = dragging ? 0.35 : 0.18;
      displayY += (target - displayY) * ease;

      applyTransform();
      rafId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (rafId !== 0) return;
      lastTs = null;
      rafId = requestAnimationFrame(loop);
    };
    const stopLoop = () => {
      if (rafId === 0) return;
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (dragging) return;
      dragging = true;
      pointerId = e.pointerId;
      dragStartX = e.clientX;
      liveY = 0;
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* older browser */
      }
      // If the user drags a sphere that was paused off-screen (unlikely
      // but possible with flaky observers), kick the loop back on.
      if (visible) startLoop();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging || e.pointerId !== pointerId) return;
      liveY = (e.clientX - dragStartX) * PX_TO_DEG;
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

    // Paint the initial transform so the text stage doesn't flash untilted
    // before the first RAF fires.
    applyTransform();

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              const entry = entries[0];
              visible = !!entry?.isIntersecting;
              if (visible) startLoop();
              else stopLoop();
            },
            { threshold: 0 },
          )
        : null;
    if (observer) {
      observer.observe(el);
    } else {
      // No IO support — just run the loop unconditionally.
      startLoop();
    }

    return () => {
      if (observer) observer.disconnect();
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('lostpointercapture', onPointerUp);
      stopLoop();
    };
  }, [spin, tiltX, tiltZ]);

  const sphereSize = radius * 2;
  // Box uses the SAME ratio as the responsive scale calc above — otherwise
  // the box ends up wider than the available viewport and the sphere
  // overflows off-screen on mobile.
  const boxSize = Math.round(radius * BOX_TO_R_RATIO);
  // ~20% leading so glyph ascenders/descenders of one line don't bleed
  // into the next.
  const lineHeight = Math.round(fontSize * 0.95);
  // Uniform fallback step used before DOM measurement has run.
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
      {/* White 3D sphere. Gradient tuned so the outer edge is distinctly
          darker than the page background — otherwise the sphere becomes
          invisible against a white body. */}
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
            'radial-gradient(circle at 35% 28%, #fafafa 0%, #ededed 35%, #d0d0d0 70%, #a8a8a8 100%)',
          boxShadow:
            '0 30px 80px rgba(0,0,0,0.28), inset -25px -40px 80px rgba(0,0,0,0.18), inset 15px 20px 40px rgba(255,255,255,0.55)',
        }}
      />

      {/* 3D text stage — transform is written imperatively in the RAF loop */}
      <div
        ref={textStageRef}
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          width: 0,
          height: 0,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tiltX}deg) rotateY(0deg) rotateZ(${tiltZ}deg)`,
          willChange: 'transform',
        }}
      >
        {lines.map((line, li) => {
          const n = line.length;
          const y = (li - (lines.length - 1) / 2) * lineHeight;
          const measuredAngles = measured?.[li];
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
                      // translate(-50%, -50%) MUST be last in the chain so
                      // it's applied FIRST — in the glyph's local frame
                      // before rotation. Any other order offsets each char
                      // by its own width and creates a visible stagger.
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
