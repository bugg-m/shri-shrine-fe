import React from 'react';
import { Button, Image } from '@bugg-m/bugg-ui';
import { ArrowBigDownIcon } from 'lucide-react';
import FloatingParticlesEffect from '@components/effects/floating-particle-effect';
import RadheyCalligraphy from './radhey-calligraphy';

const HeroSection: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <section className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40">
        <div className="absolute right-2 top-8 h-20 w-16 opacity-40 sm:right-8 sm:top-8 sm:h-24 sm:w-20 md:right-0 md:top-16 md:h-40 md:w-32 lg:right-1/4 lg:h-48 lg:w-40 xl:-top-8">
          <Image
            src="/illustrations/feather.svg"
            className="size-full -rotate-45 object-cover lg:rotate-180"
            alt="peacock feather"
          />
        </div>

        <div className="absolute -left-4 top-[48%] h-24 w-20 opacity-30 sm:-left-12 sm:bottom-10 sm:h-28 sm:w-24 md:-left-10 md:top-3/4 md:h-40 md:w-32 lg:h-48 lg:w-40">
          <Image
            src="/illustrations/feather.svg"
            className="size-full rotate-90 object-cover"
            alt="peacock feather"
          />
        </div>
      </section>

      <FloatingParticlesEffect />

      <section className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <div className="order-2 col-span-1 flex min-h-[50vh] flex-col items-center justify-start px-2 text-center lg:order-1 lg:min-h-screen lg:items-start lg:justify-center lg:text-left">
          <div className="flex flex-col items-center px-10 lg:items-start">
            <div className="absolute left-1/2 top-20 flex -translate-x-1/2 flex-col gap-20 opacity-20 md:flex-row md:gap-10 md:opacity-30 lg:static lg:left-0 lg:top-0 lg:mb-8 lg:transform-none lg:opacity-100">
              <RadheyCalligraphy />
              <RadheyCalligraphy />
            </div>

            <h2 className="mb-4 w-full text-4xl font-semibold leading-snug text-neutral-50 md:mb-6 md:text-6xl md:font-medium md:text-blue-200 lg:text-left lg:text-5xl">
              Explore the Soul of Mathura & Vrindavan
            </h2>

            <p className="mb-6 max-w-xl text-xs leading-relaxed text-blue-300 opacity-90 sm:mb-8 md:mb-10 md:text-base lg:max-w-md lg:text-left">
              Step into a realm where spirituality flows in the air, temple
              bells chime with the rhythm of your heartbeat, and every street
              whispers divine stories from the Dwapar Yug.
            </p>

            <div className="flex w-4/5 max-w-sm flex-row gap-3 sm:gap-4">
              <Button
                rounded="full"
                className="hover-scale-90 flex-1 text-xs font-semibold sm:text-base"
              >
                Start Your Journey
              </Button>

              <Button
                tone={200}
                rounded="full"
                variant="outline"
                colorScheme="secondary"
                className="hover-scale-90 shrink-0 px-6 text-xs font-semibold sm:text-base"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="order-1 col-span-1 flex items-center justify-center sm:min-h-[50vh] lg:order-2 lg:min-h-screen">
          <div className="relative size-4/5 md:size-[90%] lg:size-full">
            <Image
              src="illustrations/krishna-makkhan.svg"
              className="size-full -scale-x-100 object-contain"
              alt="Krishna with butter"
            />
          </div>
        </div>
      </section>

      <div className="absolute bottom-0.5 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-xs text-white/60">Scroll Down</span>
          <div className="flex-center mt-5 size-8 animate-bounce rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 sm:size-10">
            <ArrowBigDownIcon className="size-4 text-white sm:size-5" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <Image
          src="/illustrations/wave.svg"
          className="h-12 w-full object-cover sm:h-16 md:h-20 lg:h-24"
          alt="decorative wave"
        />
      </div>
    </main>
  );
};

export default HeroSection;
