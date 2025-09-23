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
    <section className="container-gs pt-16 pb-14 overflow-hidden tracking-tighter">
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tighter text-center "
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden"
        >
          Retain attention.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="overflow-hidden"
        >
          Build fans.
        </motion.div>
      </motion.h1>

      <div className="flex justify-center">
        <p className="mt-5 max-w-2xl text-neutral-600 text-center tracking-tighter">
          Marketing should always come first.
        </p>
      </div>

      {/* Composant logos défilants */}
      <LogoCarousel />

      {/* <div className="mt-12 h-64 rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-100 to-neutral-50 grid place-items-center">
        <span className="opacity-60">[ zone 3D / vidéo loop ]</span>
      </div> */}

      {/* Carrousel de tweets */}
      <TwitterCarouselScratch />

      <div className="mt-8 flex justify-center">
        <Button
          onClick={() => {
            const element = document.getElementById('service-cards');
            if (element) {
              const navbarHeight = 80; // Ajustez cette valeur selon la hauteur de votre navbar
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

      {/* Composant des cartes de service */}
      <div id="service-cards">
        <ServiceCards />
      </div>

      {/* Composant des cartes de prix */}
      <PricingCards />

      {/* Composant FAQ */}
      <FAQ />

      {/* Composant CTA de fin */}
      <CTA />
    </section>
  );
}
