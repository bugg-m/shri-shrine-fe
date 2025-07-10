import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredDestinations = [
    {
      name: 'Amarnath',
      href: '/destinations/amarnath',
      image: '/images/amarnath.jpg',
    },
    {
      name: 'Vaishno Devi',
      href: '/destinations/vaishno-devi',
      image: '/images/vaishno.jpg',
    },
    {
      name: 'Tirupati',
      href: '/destinations/tirupati',
      image: '/images/tirupati.jpg',
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
    <main className="flex-1">
      {/* <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Embark on Your Spiritual Journey
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Discover sacred temples and pilgrimage routes across India
          </p>
          <Link
            href="/destinations"
            className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 hover:bg-indigo-700"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-semibold">Featured Destinations</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDestinations.map((dest) => (
            <Link
              key={dest.href}
              href={dest.href}
              className="group block overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={40}
                  height={40}
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-4">
                <h3 className="text-xl font-medium">{dest.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-semibold">Popular Packages</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.href}
                className="rounded-lg border p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="mb-2 text-2xl font-bold">{pkg.title}</h3>
                <p className="mb-4 font-semibold text-indigo-600">
                  {pkg.price}
                </p>
                <p className="mb-4 text-gray-700">{pkg.description}</p>
                <Link
                  href={pkg.href}
                  className="text-indigo-600 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-semibold">From Our Blog</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.href}
              className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl"
            >
              <div className="bg-white p-6">
                <h3 className="mb-2 text-xl font-medium">{post.title}</h3>
                <p className="mb-4 text-gray-700">{post.excerpt}</p>
                <Link
                  href={post.href}
                  className="text-indigo-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-600 px-4 py-16 text-white">
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
