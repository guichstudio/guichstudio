import { logos } from '@/lib/cms';
import Image from 'next/image';

export default function LogoCarousel() {
  return (
    <div className="mt-6 relative">
      {/* Gradient de gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

      {/* Gradient de droite */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {/* Logos originaux */}
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-1 sm:mx-4">
              <Image
                src={`/logo/${logo}`}
                alt={logo.replace('.png', '')}
                width={120}
                height={60}
                className="h-6 sm:h-12 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplication pour la boucle - exactement la même chose */}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-8"
            >
              <Image
                src={`/logo/${logo}`}
                alt={logo.replace('.png', '')}
                width={120}
                height={60}
                className="h-6 sm:h-12 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
