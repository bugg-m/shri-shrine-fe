'use client';
import { RouteEnums } from '@enums/route-enums';
import { Image } from '@bugg-m/bugg-ui';
import Link from 'next/link';
import Destinations from '@components/pages/home/destinations';
import Packages from '@components/pages/home/packages';
import Blogs from '@components/pages/home/blogs';

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative h-[50vh] bg-cover bg-center md:h-screen bg-blue-950">
        <Image
          src="/illustrations/krishna-flute.svg"
          alt="img"
          className="absolute inset-0 size-full object-fill"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-2 py-10 text-center">
          <h1 className="header text-2xl font-bold text-neutral-50 hover:text-neutral-100 sm:text-4xl md:text-6xl">
            Embark on Your Spiritual Journey
          </h1>
          <p className="title text-xs mb-10 text-neutral-100 hover:text-neutral-200 sm:text-sm md:text-xl">
            Discover sacred temples and pilgrimage routes across India
          </p>
          <Link
            className="hover-scale-105 rounded-full bg-primary-500 px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm"
            href={RouteEnums.DESTINATION}
          >
            Explore Destinations
          </Link>
        </div>
      </section>
      <div className="px-4 md:px-10 space-y-16 mt-16">
        <Destinations />
        <Packages />
        <Blogs />
      </div>
    </main>
  );
}
