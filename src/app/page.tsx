'use client';
import Destinations from '@components/pages/home/destinations';
import Packages from '@components/pages/home/packages';
import Blogs from '@components/pages/home/blogs';
import HeroSection from '@components/pages/home/home';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <div className="mt-16 space-y-16 px-4 md:px-10">
        <Destinations />
        <Packages />
        <Blogs />
      </div>
    </main>
  );
}
