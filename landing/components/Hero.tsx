import { motion } from 'framer-motion';
import LogoCarousel from './LogoCarousel';
import TwitterCarouselScratch from './TwitterCarouselScratch';
import Button from './Button';
import ServiceCards from './ServiceCards';
import PricingCards from './PricingCards';
import FAQ from './FAQ';
import CTA from './CTA';

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

      <div className="mt-8 flex justify-center">
        <Button
          onClick={() => {
            const element = document.getElementById('service-cards');
            if (element) {
              const navbarHeight = 80;
              const elementPosition = element.offsetTop - navbarHeight;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
              });
            }
          }}
          variant="primary"
          size="md"
        >
          See more
        </Button>
      </div>

      <div id="service-cards">
        <ServiceCards />
      </div>

      <PricingCards />

      <FAQ />

      <CTA />
    </section>
  );
}
