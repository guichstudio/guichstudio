import { useRef, useEffect, useState, useMemo } from 'react';

interface TextSphereProps {
  text?: string;
  radius?: number;
  fontSize?: number;
  lines?: number;
  className?: string;
}

/**
 * 3D text wrapped around a sphere. Rotates smoothly with the cursor.
 * Pure CSS 3D transforms — no external 3D library required.
 */
export default function TextSphere({
  text = 'Buildlore is a design brand directive studio. Here to get high value content and build the lore you need',
  radius = 200,
  fontSize = 22,
  lines: numLines = 3,
  className = '',
}: TextSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: -8, y: 0 });
  const targetRef = useRef({ x: -8, y: 0 });
  const currentRef = useRef({ x: -8, y: 0 });
  const rafRef = useRef<number | null>(null);

  // Split the text into N lines on word boundaries so each line wraps the sphere.
  const lines = useMemo(() => {
    const words = text.trim().split(/\s+/);
    const per = Math.ceil(words.length / numLines);
    const out: string[] = [];
    for (let i = 0; i < numLines; i++) {
      const slice = words.slice(i * per, (i + 1) * per).join(' ');
      if (slice) out.push(slice);
    }
    return out;
  }, [text, numLines]);

  useEffect(() => {
    const updateTarget = (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (clientX - cx) / (window.innerWidth / 2);
      const dy = (clientY - cy) / (window.innerHeight / 2);
      targetRef.current = {
        x: -8 - dy * 25,
        y: dx * 70,
      };
    };

    const onMouseMove = (e: MouseEvent) => updateTarget(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const t = e.touches[0];
      updateTarget(t.clientX, t.clientY);
    };
    const onTouchStart = onTouchMove;

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    const loop = () => {
      const ease = 0.07;
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * ease;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * ease;
      setRot({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const sphereSize = radius * 2;
  const boxSize = Math.round(radius * 2.8);
  const lineHeight = Math.round(fontSize * 1.9);
  // Arc length per character (in px along the sphere surface).
  // Gives natural spacing regardless of how long the line is.
  const arcPerChar = fontSize * 0.58;
  const degPerChar = (arcPerChar / radius) * (180 / Math.PI);

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto select-none ${className}`}
      style={{
        width: boxSize,
        height: boxSize,
        perspective: `${radius * 5}px`,
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

      {/* 3D text stage, rotated by the mouse */}
      <div
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          width: 0,
          height: 0,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg) rotateZ(-12deg)`,
          willChange: 'transform',
        }}
      >
        {lines.map((line, li) => {
          const n = line.length;
          const y = (li - (lines.length - 1) / 2) * lineHeight;
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
                // Center line at angle 0 so the middle of the text faces the camera.
                const angle = (i - (n - 1) / 2) * degPerChar;
                const display = ch === ' ' ? '\u00A0' : ch;
                return (
                  <span
                    key={i}
                    className="absolute font-extrabold text-neutral-900"
                    style={{
                      left: 0,
                      top: 0,
                      fontSize,
                      letterSpacing: '0.01em',
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
