import React from 'react';
import { Image } from '@bugg-m/bugg-ui';
import { ArrowBigDownIcon } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[50vh] bg-blue-950 bg-cover bg-center md:h-screen">
      <Image
        src="/illustrations/krishna-flute.svg"
        alt="img"
        className="absolute inset-0 size-full object-fill"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-4 py-10 text-white">
        <div className="flex h-full flex-col items-center justify-end space-y-5 px-2 text-center">
          <h1 className="header text-2xl font-bold text-neutral-50 hover:text-neutral-100 sm:text-4xl md:text-6xl">
            Embark on Your Spiritual Journey
          </h1>
          <p className="mb-10 max-w-3xl text-xs tracking-tighter text-neutral-100 hover:text-neutral-50 sm:text-sm md:text-lg">
            Discover divine destinations and embark on spiritual adventures
            across India&apos;s most revered places
          </p>
        </div>

        <div className="flex-center mt-12 w-full max-w-4xl flex-col">
          <p className="mb-4 text-center text-gray-100">Explore Destinations</p>
          <div className="flex-center animate-bounce rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20">
            <ArrowBigDownIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
