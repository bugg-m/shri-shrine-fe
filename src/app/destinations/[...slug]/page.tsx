'use client';
import React, { use, useState } from 'react';
import { Clock, Star, Calendar, ArrowRight } from 'lucide-react';
import { Image } from '@bugg-m/bugg-ui';
import { destinations } from '@constants/static-data';

export default function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'packages', label: 'Packages' },
  ];

  const destinationData: (typeof destinations)[0] = destinations.find(
    (destination) => destination.slug === slug[0]
  )!;

  return (
    <main className="min-h-screen bg-gray-200">
      <section className="relative h-96 overflow-hidden md:h-[500px]">
        <Image
          src={destinationData.gallery[selectedImage]}
          alt={destinationData.name}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute inset-x-6 bottom-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-primary-800 px-2 py-0.5 text-xs font-medium text-neutral-50">
              {destinationData.category}
            </span>
            <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 backdrop-blur-sm">
              <Star className="size-4 fill-current text-yellow-400" />
              <span className="text-xs font-medium text-neutral-50">
                {destinationData.rating}
              </span>
              <span className="text-xs text-neutral-50">
                ({destinationData.reviews})
              </span>
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-neutral-50 md:text-4xl">
            {destinationData.name}
          </h1>
          <p className="max-w-xl text-sm text-neutral-100">
            {destinationData.subTitle}
          </p>

          <div className="mt-4 flex items-center gap-6 text-xs text-neutral-200">
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>{destinationData.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>Best: {destinationData.bestTime}</span>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          {destinationData.gallery.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`size-12 overflow-hidden rounded-lg border-2 transition-all ${
                selectedImage === index ? 'border-white' : 'border-white/50'
              }`}
            >
              <Image src={img} alt="" className="size-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8 inline-flex flex-wrap gap-2 rounded-md bg-white p-1.5 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-md px-3 py-1 font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-neutral-50 shadow-md'
                  : 'text-neutral-600 hover:bg-secondary-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-neutral-800">
                  About {destinationData.name}
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  {destinationData.description}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-neutral-800">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {destinationData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-2 size-2 shrink-0 rounded-full bg-primary-500"></div>
                      <span className="text-neutral-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-neutral-800">
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Duration:</span>
                    <span className="font-medium">
                      {destinationData.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Best Time:</span>
                    <span className="font-medium">
                      {destinationData.bestTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Category:</span>
                    <span className="font-medium">
                      {destinationData.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-green-500 p-6 text-neutral-50">
                <h3 className="mb-2 text-xl font-bold">Ready to Visit?</h3>
                <p className="mb-4 text-neutral-100">
                  Explore our curated packages for this destination
                </p>
                <button className="w-full rounded-xl bg-white py-3 font-semibold text-neutral-600 transition-all hover:bg-primary-50">
                  View Packages
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attractions' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinationData.attractions.map((attraction, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    className="size-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-neutral-800">
                    {attraction.name}
                  </h3>
                  <p className="mb-3 text-sm text-neutral-600">
                    {attraction.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Clock className="size-3" />
                    <span>{attraction.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {destinationData.packages.map((pkg, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-neutral-800">
                    {pkg.name}
                  </h3>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Clock className="size-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-neutral-600">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="block text-sm text-neutral-500">
                        per person
                      </span>
                    </div>
                  </div>
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-green-500 py-3 font-semibold text-neutral-50 transition-all hover:from-primary-600 hover:to-green-600">
                    View Package Details
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
