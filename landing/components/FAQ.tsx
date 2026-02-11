'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '@/lib/cms';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
          Questions ?
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index}>
            <motion.button
              type="button"
              whileHover={openIndex !== index ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
              className={`w-full flex items-center justify-between py-4 cursor-pointer transition-colors duration-300 ${
                openIndex === index
                  ? 'bg-neutral-100 rounded-t-lg px-6'
                  : 'hover:bg-neutral-50 rounded-lg px-6'
              }`}
            >
              <h3 className="text-lg font-bold text-black pr-4 text-left">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-6 h-6 bg-neutral-600 rounded flex items-center justify-center flex-shrink-0"
              >
                <span className="text-white text-sm font-bold">+</span>
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="bg-neutral-100 rounded-b-lg px-6 pb-4">
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      className="text-base text-black leading-relaxed"
                    >
                      {item.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
