import { Image } from '@bugg-m/bugg-ui';
import React from 'react';

const DestinationHero = () => {
  return (
    <main className="relative min-h-[80vh] bg-blue-900 py-20 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <section className="absolute inset-0">
        <Image
          src="/illustrations/krishna-gau.svg"
          alt="krishna"
          className="size-full object-contain"
        />
      </section>
      <section className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold">Explore Destinations</h1>
        <p className="mx-auto max-w-2xl text-xl opacity-90">
          Discover divine pilgrimage sites across India, each offering unique
          spiritual experiences
        </p>
      </section>
    </main>
  );
};

export default DestinationHero;
