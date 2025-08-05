import React from 'react';
import { MapPin, Clock, Camera, Phone, Mail } from 'lucide-react';

const DestinationPage: React.FC = () => {
  const temples = [
    {
      name: 'Banke Bihari Temple',
      image: '/images/bankey-bihari.jpg',
      description: 'Most famous Krishna temple with unique darshan timings',
      timing: '5:45 AM - 12:00 PM, 5:30 PM - 9:30 PM',
    },
    {
      name: 'Prem Mandir',
      image: '/images/prem-mandir.jpg',
      description: 'Modern architectural marvel with light shows',
      timing: '5:30 AM - 12:00 PM, 4:30 PM - 8:30 PM',
    },
    {
      name: 'ISKCON Temple',
      image: '/images/iskcon.jpg',
      description: 'International spiritual center with grand celebrations',
      timing: '4:30 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
  ];

  const packages = [
    {
      title: '1 Day Mathura-Vrindavan Tour',
      price: '₹2,500',
      duration: '12 hours',
      highlights: ['5 major temples', 'AC transport', 'Guide', 'Meals'],
    },
    {
      title: '2D/1N Spiritual Retreat',
      price: '₹4,500',
      duration: '2 days',
      highlights: ['Temple stays', 'Morning aarti', 'Parikrama', 'All meals'],
    },
    {
      title: '3D/2N Complete Braj Darshan',
      price: '₹7,500',
      duration: '3 days',
      highlights: [
        '15+ temples',
        'Govardhan visit',
        'Yamuna aarti',
        'Cultural shows',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-gradient-to-r from-orange-600 to-yellow-500">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Mathura & Vrindavan
            </h1>
            <p className="text-xl opacity-90 md:text-2xl">
              The Sacred Land of Lord Krishna
            </p>
            <div className="mt-4 flex items-center justify-center text-sm">
              <MapPin className="mr-2 size-4" />
              <span>150 km from Delhi • Best time: Oct - March</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            About the Destination
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 leading-relaxed text-gray-700">
                The birthplace of Lord Krishna, where every stone echoes with
                divine leelas. Mathura, the sacred birthplace, and Vrindavan,
                the playground of childhood Krishna, form the heart of Braj
                Bhoomi.
              </p>
              <div className="rounded-lg bg-orange-50 p-6">
                <h3 className="mb-3 font-semibold text-gray-800">
                  Historical Significance
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Birthplace of Lord Krishna (3228 BCE)</li>
                  <li>• 5000+ temples in the region</li>
                  <li>• Part of Chaturvedi pilgrimage circuit</li>
                  <li>• Center of Bhakti movement</li>
                </ul>
              </div>
            </div>
            <div className="flex h-64 items-center justify-center rounded-lg bg-gray-200">
              <div className="text-center text-gray-500">
                <Camera className="mx-auto mb-2 size-12" />
                <p>Destination Image</p>
                <p className="text-sm">800x400px</p>
              </div>
            </div>
          </div>
        </section>

        {/* Major Temples */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            Major Temples & Attractions
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {temples.map((temple, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex h-48 items-center justify-center bg-gray-200">
                  <div className="text-center text-gray-500">
                    <Camera className="mx-auto mb-2 size-8" />
                    <p className="text-sm">Temple Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    {temple.name}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    {temple.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="mr-1 size-4" />
                    <span>{temple.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Experiences */}
        <section className="mb-16 rounded-xl bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Spiritual Experiences
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="mb-2 font-semibold">Morning Mangala Aarti</h3>
              <p className="text-sm text-gray-600">
                Experience divine awakening at 4:30 AM
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-2xl">🌅</span>
              </div>
              <h3 className="mb-2 font-semibold">Yamuna Evening Aarti</h3>
              <p className="text-sm text-gray-600">
                Sacred river worship at sunset
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-2xl">👣</span>
              </div>
              <h3 className="mb-2 font-semibold">Parikrama Walks</h3>
              <p className="text-sm text-gray-600">
                Sacred circumambulation paths
              </p>
            </div>
          </div>
        </section>

        {/* Travel Information */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            Travel Information
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">How to Reach</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>By Air:</strong> Agra Airport (60 km)
                </div>
                <div>
                  <strong>By Train:</strong> Mathura Junction
                </div>
                <div>
                  <strong>By Road:</strong> 150 km from Delhi (3 hours)
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Best Time to Visit</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Peak:</strong> October - March
                </div>
                <div>
                  <strong>Festivals:</strong> Janmashtami, Holi
                </div>
                <div>
                  <strong>Avoid:</strong> May - July (heat)
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Important Tips</h3>
              <div className="space-y-2 text-sm">
                <div>• Dress modestly</div>
                <div>• Remove shoes in temples</div>
                <div>• Book darshan slots advance</div>
                <div>• Carry ID proofs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tour Packages */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            Our Tour Packages
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{pkg.title}</h3>
                  <span className="text-2xl font-bold text-orange-600">
                    {pkg.price}
                  </span>
                </div>
                <p className="mb-4 text-sm text-gray-600">{pkg.duration}</p>
                <div className="mb-6">
                  <h4 className="mb-2 font-medium">Highlights:</h4>
                  <ul className="text-sm text-gray-600">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full rounded-lg bg-orange-600 py-2 text-white transition-colors hover:bg-orange-700">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="rounded-xl bg-gray-800 p-8 text-white">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Plan Your Visit</h2>
              <p className="mb-6 text-gray-300">
                Ready for a spiritual journey? Our experts will help you plan
                the perfect pilgrimage.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="mr-3 size-5 text-orange-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 size-5 text-orange-400" />
                  <span>mathura@shrishrine.com</span>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded bg-gray-700 p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded bg-gray-700 p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-orange-500"
                />
                <select className="w-full rounded bg-gray-700 p-3 text-white focus:ring-2 focus:ring-orange-500">
                  <option>Select Package</option>
                  <option>1 Day Tour</option>
                  <option>2D/1N Retreat</option>
                  <option>3D/2N Complete Tour</option>
                </select>
                <button
                  type="button"
                  className="w-full rounded bg-orange-600 py-3 text-white transition-colors hover:bg-orange-700"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationPage;
