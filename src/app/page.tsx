'use client';
import Destinations from '@components/pages/home/destinations';
import Packages from '@components/pages/home/packages';
import HeroSection from '@components/pages/home/home';
import AboutUs from '@components/pages/home/about-us';
import WhyChooseUs from '@components/pages/home/why-choose-us';
import OurExperiences from '@components/pages/home/our-experiences';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <div className="space-y-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 px-4 py-20 md:px-10">
        <AboutUs />
        <WhyChooseUs />
        <Destinations />
        <Packages />
        <OurExperiences />
      </div>
    </main>
  );
}
