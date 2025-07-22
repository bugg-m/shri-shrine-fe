import React from 'react';
import { Image } from '@bugg-m/bugg-ui';
import { ArrowBigDownIcon } from 'lucide-react';
import FloatingParticlesEffect from '@components/effects/floating-particle-effect';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-blue-950 bg-cover bg-center">
      <Image
        src="/illustrations/krishna-flute.svg"
        alt="Lord Krishna playing flute"
        className="absolute inset-0 size-full object-fill"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/50" />
      <FloatingParticlesEffect />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-4 py-10 text-white">
        <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-2 text-center">
          <h1 className="header text-3xl font-bold leading-tight text-neutral-50 sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Radhey Radhey
            </span>
            <br />
            <span className="mt-2 block text-2xl font-medium text-neutral-200 sm:text-3xl md:text-4xl lg:text-5xl">
              Explore the Soul of Mathura & Vrindavan
            </span>
          </h1>
          <p className="max-w-3xl text-xs tracking-tighter text-neutral-100 hover:text-neutral-50 md:text-sm">
            Step into a realm where spirituality flows in the air, temple bells
            chime with the rhythm of your heartbeat, and every street whispers
            divine stories from the Dwapar Yug.
          </p>
        </div>

        <div className="flex-center mt-8 w-full max-w-4xl flex-col">
          <p className="mb-6 text-center text-sm font-medium text-yellow-200">
            Discover Sacred Destinations
          </p>
          <div className="flex-center animate-bounce cursor-pointer rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20">
            <ArrowBigDownIcon className="size-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
