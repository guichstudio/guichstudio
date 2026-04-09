'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const services = [
  {
    id: 'promo-video',
    label: 'Promo video',
    description:
      'Motion, narrative and campaign films, from first concept to final delivery. We handle creative direction, production and edit.',
  },
  {
    id: 'branding',
    label: 'Branding',
    description:
      'Identity and visual systems for brands that need to hold across mediums, from screen to space.',
  },
  {
    id: 'visual-installation',
    label: 'Visual installation',
    description:
      'Projection mapping, generative environments and spatial light experiences, from intimate room-scale to architectural.',
  },
  {
    id: 'artistic-direction',
    label: 'Artistic direction',
    description:
      'Creative direction for events, shoots, live productions and campaigns. We define the vision and make sure every element serves it.',
  },
  {
    id: 'design-support',
    label: 'Design Support',
    description:
      'Ongoing design support for teams that need consistent, high-quality output. Social visuals, brand assets, UI touches, and marketing collateral on demand.',
  },
];

export default function ServiceCards() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const active = services.find((s) => s.id === activeTab) ?? services[0];

  const getCalendlyUrl = () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    return `https://calendly.com/guichstudio/30min?back=1&month=${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      className="mt-16 bg-neutral-50 rounded-3xl p-8 sm:p-10 lg:p-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="text-xs sm:text-sm tracking-[0.2em] text-neutral-400 uppercase mb-8 lg:mb-10 text-center">
        What we do
      </p>

      {/* Pill tabs */}
      <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-10 lg:mb-12">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={`rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium tracking-tighter transition-all duration-200 border ${
              activeTab === service.id
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-neutral-300 hover:border-neutral-500'
            }`}
          >
            {service.label}
          </button>
        ))}
      </div>

      {/* Active service content */}
      <div className="max-w-2xl lg:max-w-3xl mx-auto text-center">
        <p
          key={active.id}
          className="text-neutral-600 tracking-tighter lg:text-lg leading-relaxed mb-8 animate-fade-in"
        >
          {active.description}
        </p>

        <Button
          variant="secondary"
          size="md"
          onClick={() => window.open(getCalendlyUrl(), '_blank')}
        >
          Start a project
        </Button>
      </div>
    </motion.div>
  );
}
