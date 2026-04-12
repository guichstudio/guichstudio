import { motion } from 'framer-motion';
import LogoCarousel from './LogoCarousel';
import TwitterCarouselScratch from './TwitterCarouselScratch';
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

/**
 * Interactive fanning cards that flank the hero heading. Each card is a
 * placeholder for a video/asset. They spread outward in 3D perspective
 * from the center, getting darker and more rotated at the edges.
 */
const CARD_COUNT = 5;
const CARDS = Array.from({ length: CARD_COUNT }, (_, i) => {
  // 0 = closest to center (lightest, least rotated), 4 = furthest (darkest)
  const t = i / (CARD_COUNT - 1);
  return {
    shade: Math.round(210 - t * 140), // 210 (light gray) → 70 (dark gray)
    rotateY: 5 + t * 40,              // 5° → 45° rotation
    translateX: 30 + i * 55,          // spread outward
    translateZ: -i * 30,              // push back in Z
    scale: 1 - t * 0.08,             // slightly smaller at edges
    delay: 0.15 + i * 0.08,          // staggered animation
  };
});

function FanCards({ side }: { side: 'left' | 'right' }) {
  const flip = side === 'right' ? -1 : 1;
  return (
    <div
      className="absolute top-1/2 hidden lg:flex items-center"
      style={{
        [side]: 0,
        transform: 'translateY(-50%)',
        perspective: '800px',
      }}
    >
      {CARDS.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: flip * -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: card.delay,
            ease: 'easeOut',
          }}
          whileHover={{ scale: card.scale + 0.04 }}
          className="absolute cursor-pointer rounded-md shadow-lg
                     transition-shadow duration-300 hover:shadow-2xl"
          style={{
            width: 220,
            height: 300,
            background: `rgb(${card.shade}, ${card.shade}, ${card.shade})`,
            transform: `
              translateX(${flip * -card.translateX}px)
              translateZ(${card.translateZ}px)
              rotateY(${flip * card.rotateY}deg)
              scale(${card.scale})
            `,
            transformStyle: 'preserve-3d',
            zIndex: CARD_COUNT - i,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="container-gs pt-16 pb-0 overflow-hidden tracking-tighter">
      <h1 className="sr-only">
        BuildLore — Creative Agency for Branding, Video Marketing &amp; Content
        Production for Tech Companies and Web3 Projects
      </h1>

      {/* Hero heading with fanning cards */}
      <div className="relative min-h-[420px] lg:min-h-[520px] flex flex-col items-center justify-center">
        <FanCards side="left" />
        <FanCards side="right" />

        <motion.p
          aria-hidden="true"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                     font-extrabold tracking-tighter text-center"
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

        <div className="relative z-10 flex justify-center">
          <p className="mt-5 lg:mt-6 max-w-2xl lg:max-w-3xl text-neutral-600 text-center tracking-tighter lg:text-lg">
            Narrative-led branding, video production, and content for tech &amp; Web3.
          </p>
        </div>
      </div>

      <LogoCarousel />

      <TwitterCarouselScratch />

      <motion.div
        id="service-cards"
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ServiceCards />
      </motion.div>

      {/* Mission statement — rendered as a 3D text sphere */}
      <motion.div
        className="mt-12 lg:mt-16 flex justify-center"
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
    </section>
  );
}
