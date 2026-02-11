import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';

export default function CTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mt-16 bg-white py-4">
      <div className="container-gs">
        <div className="text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-12 leading-tight"
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="overflow-hidden"
            >
              Learn how we build
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="overflow-hidden"
            >
              retention with
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="overflow-hidden"
            >
              story.
            </motion.div>
          </motion.h2>

          {/* Email + CTA */}
          {!showForm && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto rounded-full">
              <input
                type="email"
                placeholder="my@email.com"
                aria-label="Email address"
                className="flex-1 w-full px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
              />
              <Button
                variant="black"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => setShowForm(true)}
              >
                Book free audit
              </Button>
            </div>
          )}

          {/* Formulaire Tally - affiché conditionnellement */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <div className="relative">
                <button
                  aria-label="Close form"
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <span aria-hidden="true">×</span>
                </button>

                <iframe
                  src="https://tally.so/embed/nWyevR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact form"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          )}

          {/* Logo footer - Mobile */}
          <div className="mt-8 flex justify-center md:hidden">
            <Image
              src="/logofooter.png"
              alt="Logo footer mobile"
              width={950}
              height={197}
              className="w-auto"
              priority={false}
            />
          </div>

          {/* Logo footer - Desktop */}
          <div className="mt-8 hidden md:flex justify-center">
            <Image
              src="/logofooterdesktop.png"
              alt="Logo footer desktop"
              width={1848}
              height={118}
              className="w-auto "
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
