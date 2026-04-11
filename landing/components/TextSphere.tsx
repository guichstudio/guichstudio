import { useRef, useEffect, useState, useMemo } from 'react';

interface TextSphereProps {
  text?: string;
  /** Number of lines (auto-split by word count) or explicit array of lines. */
  lines?: number | string[];
  radius?: number;
  fontSize?: number;
  /** Continuous auto-rotation around Y axis, in degrees per second. 0 disables. */
  spin?: number;
  /** Initial X tilt in degrees. */
  tiltX?: number;
  /** Z rotation of the whole text stage in degrees. */
  tiltZ?: number;
  className?: string;
}

/**
 * 3D text wrapped around a sphere. Pure CSS 3D transforms — no 3D library.
 *
 * When `spin` > 0, each line is force-wrapped to a full 360° so the text
 * becomes a continuous marquee that rotates around the sphere. The user can
 * still tilt / offset the rotation with the mouse or a finger.
 */
export default function TextSphere({
  text = 'Buildlore is a design brand directive studio. Here to get high value content and build the lore you need',
  lines: linesProp = 3,
  radius = 200,
  fontSize = 22,
  spin = 0,
  tiltX = -8,
  tiltZ = -12,
  className = '',
}: TextSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: tiltX, y: 0 });
  const [charAngles, setCharAngles] = useState<number[][] | null>(null);

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

  // Uniform fallback step used while fonts load / before canvas measurement.
  const fallbackDegPerChar = ((fontSize * 0.42) / radius) * (180 / Math.PI);

  // Measure each character's natural width with a canvas and convert to
  // angles along the sphere equator. This gives proportional, typographically
  // correct letter spacing (narrow chars take less arc, wide chars more).
  useEffect(() => {
    let cancelled = false;
    const measure = () => {
      if (cancelled) return;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.font = `800 ${fontSize}px 'Inter', ui-sans-serif, system-ui, sans-serif`;
      // Tightness < 1 packs characters slightly closer than their natural
      // width. 0.93 feels tight but still readable.
      const tightness = 0.93;
      const radToDeg = 180 / Math.PI;

      const result = lines.map((line) => {
        const chars = line.split('');
        const widths = chars.map((ch) =>
          ctx.measureText(ch === '\u00A0' ? ' ' : ch).width,
        );
        const total = widths.reduce((a, b) => a + b, 0);
        const angles: number[] = [];
        let cursor = -total / 2;
        for (let i = 0; i < chars.length; i++) {
          const centerPx = cursor + widths[i] / 2;
          cursor += widths[i];
          const angleRad = (centerPx * tightness) / radius;
          angles.push(angleRad * radToDeg);
        }
        return angles;
      });
      if (!cancelled) setCharAngles(result);
    };

    // Wait for fonts to be ready so measurement matches rendered widths.
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    if (fonts && fonts.ready) {
      fonts.ready.then(measure).catch(measure);
    } else {
      measure();
    }
    return () => {
      cancelled = true;
    };
  }, [lines, fontSize, radius]);

  useEffect(() => {
    // User-driven offsets (tilt in X, Y-shift on top of auto-rotation)
    const userTarget = { x: tiltX, yOffset: 0 };
    const userCurrent = { x: tiltX, yOffset: 0 };
    let baseY = 0;
    let lastTs: number | null = null;

    const updateTarget = (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (clientX - cx) / (window.innerWidth / 2);
      const dy = (clientY - cy) / (window.innerHeight / 2);
      userTarget.x = tiltX - dy * 25;
      userTarget.yOffset = dx * 50;
    };

    const onMouseMove = (e: MouseEvent) => updateTarget(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const t = e.touches[0];
      updateTarget(t.clientX, t.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });

    const rafRef = { id: 0 };
    const loop = (ts: number) => {
      if (lastTs === null) lastTs = ts;
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;

      // Continuous auto-rotation around Y
      baseY = (baseY + spin * dt) % 360;

      // Ease user offsets toward targets
      const ease = 0.08;
      userCurrent.x += (userTarget.x - userCurrent.x) * ease;
      userCurrent.yOffset += (userTarget.yOffset - userCurrent.yOffset) * ease;

      setRot({
        x: userCurrent.x,
        y: baseY + userCurrent.yOffset,
      });
      rafRef.id = requestAnimationFrame(loop);
    };
    rafRef.id = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouch);
      cancelAnimationFrame(rafRef.id);
    };
  }, [spin, tiltX]);

  const sphereSize = radius * 2;
  const boxSize = Math.round(radius * 2.8);
  // Line-height multiplier — ~42% tighter than the previous 1.9.
  const lineHeight = Math.round(fontSize * 1.1);

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto select-none font-body ${className}`}
      style={{
        width: boxSize,
        height: boxSize,
        perspective: `${radius * 5}px`,
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      }}
      aria-label={text}
      role="img"
    >
      {/* The white 3D-looking sphere */}
      <div
        aria-hidden="true"
        className="absolute rounded-full"
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
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          width: 0,
          height: 0,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg) rotateZ(${tiltZ}deg)`,
          willChange: 'transform',
        }}
      >
        {lines.map((line, li) => {
          const n = line.length;
          const y = (li - (lines.length - 1) / 2) * lineHeight;
          const measuredAngles = charAngles?.[li];
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
                // Proportional spacing once canvas has measured; uniform
                // fallback before fonts are ready.
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
                      fontSize,
                      letterSpacing: '-0.04em',
                      transformOrigin: '0 0 0',
                      transform: `translate(-50%, -50%) translateY(${y}px) rotateY(${angle}deg) translateZ(${radius}px)`,
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
