'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { tweets } from '@/lib/cms';

export default function TwitterCarouselScratch() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth >= 1280 ? 484 : window.innerWidth >= 1024 ? 444 : window.innerWidth >= 640 ? 384 : 320;
      const scrollPosition = index * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 320;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="mt-6">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {tweets.map(tweet => (
          <div
            key={tweet.id}
            className="flex-shrink-0 w-80 sm:w-96 lg:w-[420px] xl:w-[460px] snap-center"
          >
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg overflow-hidden">
              <div className="flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-neutral-50 border-b border-neutral-200">
                <Image
                  src={tweet.avatar}
                  alt={`${tweet.username} avatar`}
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-xs sm:text-sm truncate">
                    {tweet.username}
                  </div>
                  <div className="text-xs text-neutral-500 truncate">
                    {tweet.handle}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {tweet.content}
                </p>

                {/* Video */}
                <div className="relative bg-black rounded-lg overflow-hidden mb-3 sm:mb-4">
                  <video
                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
                    controls
                    loop
                    playsInline
                    preload="metadata"
                    poster={tweet.thumbnail}
                  >
                    <source src={tweet.video} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Stats */}
              <div className="px-2 sm:px-3 py-2 sm:py-3 bg-neutral-50 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <Image
                      src={tweet.imageStats}
                      alt={`${tweet.username} tweet engagement stats`}
                      width={400}
                      height={40}
                      className="w-full h-12 sm:h-12 md:h-16 lg:h-20 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {tweets.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-neutral-600' : 'bg-neutral-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
