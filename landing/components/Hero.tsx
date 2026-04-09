import { motion } from 'framer-motion';
import LogoCarousel from './LogoCarousel';
import TwitterCarouselScratch from './TwitterCarouselScratch';
import ServiceCards from './ServiceCards';
import CTA from './CTA';

const sectionAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="container-gs pt-16 pb-0 overflow-hidden tracking-tighter">
      <h1 className="sr-only">
        BuildLore — Creative Agency for Branding, Video Marketing &amp; Content
        Production for Tech Companies and Web3 Projects
      </h1>
      <motion.p
        aria-hidden="true"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-center "
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
          Build fans.
        </motion.span>
      </motion.p>

      <div className="flex justify-center">
        <p className="mt-5 lg:mt-6 max-w-2xl lg:max-w-3xl text-neutral-600 text-center tracking-tighter lg:text-lg">
          Narrative-led branding, video production, and content for tech &amp; Web3.
        </p>
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

      {/* Mission statement */}
      <motion.div
        className="mt-12 lg:mt-16 flex justify-center"
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="max-w-3xl lg:max-w-4xl text-black text-center tracking-tighter text-xl lg:text-2xl font-semibold leading-relaxed">
          Visual experience studio for brands, founders and product leaders in Web3 and live events. We move fast, work with full autonomy, and deliver high-quality brands and products that stay ahead. Enhanced by deep Web3 expertise, applied AI, and structured yet flexible processes. From installations and projection mapping to films and creative direction, anywhere in the world.
        </p>
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
