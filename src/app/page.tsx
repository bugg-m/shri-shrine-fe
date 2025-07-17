'use client';
import { Card } from '@bugg-m/bugg-ui';
import { RouteEnums } from '@enums/route-enums';
import { Image } from '@bugg-m/bugg-ui';
import Link from 'next/link';

export default function Home() {
  const featuredDestinations = [
    {
      name: 'Amarnath Yatra',
      href: '/destinations/amarnath',
      image: '/amarnath.jpg',
    },
    {
      name: 'Vaishno Devi',
      href: '/destinations/vaishno-devi',
      image: '/maa-vaishno-devi.jpg',
    },
    {
      name: 'Vrindavan',
      href: '/destinations/bankey-bihari',
      image: '/bankey-bihari.jpg',
    },
  ];

  const featuredPackages = [
    {
      title: 'Premium Yatra',
      href: '/packages/premium',
      price: '₹20,000',
      description: 'Comfortable stay, helicopter ride, guided meals',
    },
    {
      title: 'Standard Yatra',
      href: '/packages/standard',
      price: '₹12,000',
      description: 'Base camp stay, trekking support, meals',
    },
    {
      title: 'Budget Yatra',
      href: '/packages/budget',
      price: '₹8,000',
      description: 'Basic accommodation, group trekking',
    },
  ];

  const blogPosts = [
    {
      title: 'History of Amarnath Yatra',
      href: '/blog/amarnath-history',
      excerpt: 'Explore the rich history of the Amarnath pilgrimage...',
    },
    {
      title: 'Pilgrimage Packing Checklist',
      href: '/blog/packing-checklist',
      excerpt: 'Essentials you must carry for a smooth journey...',
    },
    {
      title: 'Spiritual Significance Explained',
      href: '/blog/spiritual-significance',
      excerpt: 'Understand the deeper meaning behind the yatra...',
    },
  ];
  return (
    <main className="flex-1 space-y-16">
      <section
        className="relative h-[50vh] bg-cover bg-center md:h-[95vh]"
        style={{ backgroundImage: "url('/mountain.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end space-y-4 px-2 py-10 text-center">
          <h1 className="header text-2xl font-bold text-neutral-50 hover:text-neutral-100 sm:text-4xl md:text-5xl">
            Embark on Your Spiritual Journey
          </h1>
          <p className="title text-xs text-neutral-100 hover:text-neutral-200 sm:text-sm md:text-xl">
            Discover sacred temples and pilgrimage routes across India
          </p>
          <Link
            className="rounded-full bg-primary-500 px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm"
            href={RouteEnums.DESTINATION}
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8">
        <h2 className="header text-xl font-semibold md:text-3xl">
          Featured Destinations
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDestinations.map((dest) => (
            <Card
              key={dest.name}
              className="group block overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl"
              variant="outlined"
              colorScheme="secondary"
              tone={200}
            >
              <div className="relative h-72 transition group-hover:scale-105">
                <Image
                  rounded="md"
                  size="full"
                  src={dest.image}
                  alt={dest.name}
                />
              </div>
              <div className="bg-white p-4">
                <span className="block text-xl font-semibold capitalize text-neutral-700 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-800 md:text-lg">
                  {dest.name}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8">
        <h2 className="header text-xl font-semibold md:text-3xl">
          Popular Packages
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPackages.map((pkg) => (
            <Card key={pkg.href} hoverAble className="space-y-4">
              <h3 className="title text-xl font-semibold">{pkg.title}</h3>
              <p className="font-semibold text-indigo-600">{pkg.price}</p>
              <p className="paragraph-sm text-secondary-600">
                {pkg.description}
              </p>
              <Link href={pkg.href} className="text-indigo-600 hover:underline">
                Learn More →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="header text-xl font-semibold md:text-3xl">
          From Our Blog
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.href} hoverAble className="space-y-4">
              <div className="bg-white p-6">
                <h3 className="title mb-2 text-lg">{post.title}</h3>
                <p className="mb-4 text-sm font-medium text-neutral-600">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="text-indigo-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* <section className="bg-indigo-600 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-semibold">What Our Pilgrims Say</h2>
          <div className="space-y-8">
            <blockquote>
              <p className="text-lg italic">
                “shrishrine made my Amarnath journey seamless and spiritually
                fulfilling. Highly recommended!”
              </p>
              <footer className="mt-4 font-semibold">— Anjali Sharma</footer>
            </blockquote>
            <blockquote>
              <p className="text-lg italic">
                “The guided package and local insights were top-notch. A trip to
                remember.”
              </p>
              <footer className="mt-4 font-semibold">— Rahul Desai</footer>
            </blockquote>
          </div>
        </div>
      </section> */}
    </main>
  );
}
