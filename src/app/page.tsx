'use client';
import Destinations from '@components/pages/home/destinations';
import Packages from '@components/pages/home/packages';
import HeroSection from '@components/pages/home/home';
import AboutUs from '@components/pages/home/about-us';
import WhyChooseUs from '@components/pages/home/why-choose-us';
import OurExperiences from '@components/pages/home/our-experiences';
import Testimonials from '@components/pages/home/testimonials';
import ContactForm from '@components/pages/home/contact-from';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <div className="space-y-20 px-4 py-10 md:px-10 md:py-16">
        <AboutUs />
        <WhyChooseUs />
        <Destinations />
        <Packages />
        <OurExperiences />
        <Testimonials />
        <ContactForm />
      </div>
    </main>
  );
}
