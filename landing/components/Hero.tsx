import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ServiceCards from './ServiceCards';
import CTA from './CTA';
import TextSphere from './TextSphere';

const sectionAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const MISSION_LINES = [
  'Visual experience studio for brands, founders and product leaders in Web3 and live events.',
  'We move fast, delivering high-quality brands and products that consistently stay ahead.',
  'Shaped by Web3 expertise, AI, and Branding yet flexible processes for scalable execution.',
  'From live installations and mapping to films and creative direction, anywhere in the world.',
];
const MISSION_TEXT = MISSION_LINES.join(' ');

// ---- Fan cards data ----
const FAN_VIDEOS = [
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/web-3/fantasy-1.mp4',         poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/web-3/fantasy-1-thumbnail.webp',         label: 'Fantasy Top — Brand film',      slug: 'fantasy-top-1' },
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/H-company-1.mp4',  poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/H-company-1-thumbnail.webp',  label: 'H Company — Commercial',        slug: 'H-company-1' },
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/projection/pressiat.mp4',     poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/projection/pressiat-thumbnail.webp',     label: 'Pressiat — Projection mapping',  slug: 'pressiat-1' },
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/web-3/eterna.mp4',            poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/web-3/eterna-thumbnail.webp',             label: 'Eterna Labs — Web3',             slug: 'eterna-labs' },
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/H-company-2.mp4',  poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/H-company-2-thumbnail.webp',  label: 'H Company — Brand',              slug: 'H-company-2' },
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/pressiat-1.mp4',   poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/pressiat-2-thumbnail.webp',    label: 'Pressiat — Commercial',          slug: 'pressiat-2' },
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/pressiat-2.mp4',   poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/pressiat-2-thumbnail.webp',    label: 'Pressiat — Event',               slug: 'pressiat-3' },
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/domestique-1.mp4', poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/domestique-1-thumbnail.webp',  label: 'Domestique — Commercial',        slug: 'domestique-1' },
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/domestique-2.mp4', poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/commercial/domestique-2-thumbnail.webp',  label: 'Domestique — Brand',             slug: 'domestique-2' },
  { src: 'https://d8clex4mautkm.cloudfront.net/video-landing/web-3/pump-fun.mp4',          poster: 'https://d8clex4mautkm.cloudfront.net/video-landing/web-3/pump-fun-thumbnail.webp',           label: 'Pump Fun — Web3',                slug: 'pump-fun' },
];

const ROTATE_Y = 84;
const SPACING = 40;
const COUNT = 5;
const INNER_GAP = 340;

/**
 * Builds the perspective fan of video cards on each side of the heading.
 * Cards are positioned imperatively after mount to read viewport dimensions.
 */
function HeroFan() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Don't create fan cards on mobile — shown as carousel below CTA instead
    if (window.innerWidth < 1024) return;

    const vw = hero.offsetWidth;
    const cx = vw / 2;
    const cy = hero.offsetHeight * 0.46;

    const cw = Math.min(360, Math.max(240, vw * 0.22));
    const ch = cw * 9 / 16;
    const topY = cy - ch / 2;
    const gap = INNER_GAP;
    const space = SPACING;

    const cards: HTMLDivElement[] = [];
    let scrollRy = 0;

    function createCard(
      data: (typeof FAN_VIDEOS)[0],
      x: number, y: number, ry: number,
      origin: string, z: number, delay: number,
    ) {
      const sign = ry > 0 ? 1 : -1;
      const getT = () => `rotateY(${sign * (ROTATE_Y + scrollRy)}deg)`;

      const card = document.createElement('div');
      card.className = 'absolute rounded-lg overflow-hidden cursor-pointer backface-hidden';
      card.setAttribute('role', 'img');
      card.setAttribute('aria-label', data.label);
      card.setAttribute('tabindex', '0');
      card.style.cssText = `
        width:${cw}px;height:${ch}px;left:${x}px;top:${y}px;
        z-index:${z};transform-origin:${origin};
        transform:${getT()};backface-visibility:hidden;
        transition:transform .5s cubic-bezier(.23,1,.32,1);opacity:0;
      `;

      const vid = document.createElement('video');
      vid.src = data.src;
      vid.poster = data.poster;
      vid.preload = 'none';
      vid.muted = true;
      vid.loop = true;
      vid.playsInline = true;
      vid.setAttribute('playsinline', '');
      vid.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;pointer-events:none';
      card.appendChild(vid);

      const lbl = document.createElement('div');
      lbl.textContent = data.label;
      lbl.style.cssText = `
        position:absolute;bottom:0;left:0;right:0;padding:10px 14px;
        background:linear-gradient(transparent,rgba(0,0,0,.7));
        color:#fff;font-size:13px;font-weight:600;opacity:0;
        transition:opacity .3s;pointer-events:none;
      `;
      card.appendChild(lbl);

      // Lazy play
      const io = new IntersectionObserver((e, o) => {
        if (e[0].isIntersecting) { vid.play().catch(() => {}); o.disconnect(); }
      }, { threshold: 0.1 });
      io.observe(card);

      // Hover / focus (desktop only)
      const activate = () => {
        card.style.zIndex = '50';
        card.style.transform = 'rotateY(0deg) translateY(-60px) scale(1.05)';
        if (lbl) lbl.style.opacity = '1';
      };
      const deactivate = () => {
        card.style.zIndex = String(z);
        card.style.transform = getT();
        if (lbl) lbl.style.opacity = '0';
      };
      card.addEventListener('mouseenter', activate);
      card.addEventListener('mouseleave', deactivate);
      card.addEventListener('focus', activate);
      card.addEventListener('blur', deactivate);
      card.addEventListener('click', () => { window.location.href = '/work/' + data.slug; });
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter') window.location.href = '/work/' + data.slug; });

      // Entrance
      setTimeout(() => { card.style.opacity = '1'; }, delay);

      hero!.appendChild(card);
      (card as HTMLDivElement & { _sync: () => void })._sync = () => { card.style.transform = getT(); };
      cards.push(card);
    }

    // Build left fan
    for (let i = 0; i < COUNT; i++) {
      const a = cx - gap - i * space;
      createCard(FAN_VIDEOS[i], a - cw, topY, ROTATE_Y, 'right center', COUNT - i, 120 + i * 70);
    }
    // Build right fan
    for (let i = 0; i < COUNT; i++) {
      const a = cx + gap + i * space;
      createCard(FAN_VIDEOS[COUNT + i], a, topY, -ROTATE_Y, 'left center', COUNT - i, 120 + i * 70);
    }

    // Scroll parallax
    const onScroll = () => {
      scrollRy = Math.min(6, (window.scrollY / (window.innerHeight * 0.6)) * 6);
      cards.forEach((c: any) => c._sync?.());
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cards.forEach((c) => c.remove());
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-[280px] lg:min-h-[520px] flex flex-col items-center justify-center"
      style={{ perspective: '1400px', perspectiveOrigin: '50% 46%' }}
    >
      {/* White fades near text */}
      <div className="absolute top-0 bottom-0 w-[42%] left-[12%] z-[25] pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(255,255,255,1) 10%, rgba(255,255,255,0.9) 40%, transparent 100%)' }} />
      <div className="absolute top-0 bottom-0 w-[42%] right-[12%] z-[25] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,1) 10%, rgba(255,255,255,0.9) 40%, transparent 100%)' }} />

      {/* Heading — same font size as production main */}
      <motion.p
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-30 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-center"
      >
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block overflow-hidden"
        >
          Retain attention.
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="block overflow-hidden"
        >
          Build brand.
        </motion.span>
      </motion.p>

      <div className="relative z-30 flex justify-center">
        <p className="mt-5 lg:mt-6 max-w-2xl lg:max-w-3xl text-neutral-600 text-center tracking-tighter lg:text-lg">
          Narrative-led branding, video production, and content for tech &amp; Web3.
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="container-gs pt-10 pb-0 tracking-tighter">
      <h1 className="sr-only">
        BuildLore — Creative Agency for Branding, Video Marketing &amp; Content
        Production for Tech Companies and Web3 Projects
      </h1>

      <HeroFan />

      {/* Key stats */}
      <div className="mt-4 lg:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-3xl mx-auto px-4">
        {[
          { value: '16+', label: 'Brands built' },
          { value: '23M+', label: 'Views generated' },
          { value: '48h', label: 'Avg. turnaround' },
          { value: '100%', label: 'Remote-ready' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl lg:text-4xl font-extrabold tracking-tight text-neutral-900">{s.value}</p>
            <p className="text-xs lg:text-sm text-neutral-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <motion.div
        id="service-cards"
        className="mt-4 lg:mt-6"
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ServiceCards />
      </motion.div>

      {/* Mission statement — 3D text sphere */}
      <motion.div
        className="mt-8 lg:mt-16 flex justify-center"
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="sr-only">{MISSION_TEXT}</p>
        <TextSphere
          text={MISSION_TEXT}
          lines={MISSION_LINES}
          radius={260}
          fontSize={32}
          spin={-14}
          tiltX={-12}
          tiltZ={-8}
        />
      </motion.div>

      <motion.div
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CTA />
      </motion.div>

      {/* Mobile video carousel — auto-scrolling right→left, shown only on mobile */}
      <div className="lg:hidden mt-8 -mx-4 sm:-mx-6 overflow-hidden">
        <div className="flex gap-4 animate-scroll-rtl">
          {[...FAN_VIDEOS, ...FAN_VIDEOS].map((v, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[70vw] max-w-[300px] aspect-video rounded-xl overflow-hidden"
            >
              <video
                src={v.src}
                poster={v.poster}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
