'use client';
import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Star,
  Calendar,
  Users,
  ArrowRight,
  ChevronRight,
  Camera,
  Heart,
  Share2,
} from 'lucide-react';

// Sample destination data - in real app, this would be fetched based on slug
const destinationData = {
  id: 1,
  slug: 'vrindavan',
  name: 'Vrindavan',
  shortDescription: 'Divine town where Lord Krishna spent his childhood',
  longDescription:
    'Vrindavan, the sacred land where Lord Krishna spent his divine childhood, is a spiritual paradise that captivates millions of devotees worldwide. Every stone, every tree, and every corner of this holy town resonates with the divine leelas of the Supreme Lord. Walk through the narrow lanes where Krishna once played, visit the temples that echo with his divine presence, and experience the eternal love that flows through this mystical town.',
  image: '/images/bankey-bihari.jpg',
  gallery: [
    '/images/bankey-bihari.jpg',
    '/images/prem-mandir.jpg',
    '/images/vrindavan-street.jpg',
    '/images/yamuna-ghat.jpg',
  ],
  highlights: [
    'Banke Bihari Temple - Most revered Krishna temple',
    'Prem Mandir - Architectural marvel in white marble',
    'ISKCON Temple - International spiritual center',
    'Yamuna Ghat - Sacred river banks for aarti',
  ],
  attractions: [
    {
      name: 'Banke Bihari Temple',
      description:
        'Most famous Krishna temple with unique darshan timings and divine atmosphere',
      image: '/images/bankey-bihari.jpg',
      timing: '7:45 AM - 12:00 PM, 5:30 PM - 9:30 PM',
    },
    {
      name: 'Prem Mandir',
      description:
        'Stunning white marble temple with intricate carvings and spectacular light shows',
      image: '/images/prem-mandir.jpg',
      timing: '5:30 AM - 12:00 PM, 4:30 PM - 9:00 PM',
    },
    {
      name: 'ISKCON Temple',
      description:
        'International spiritual center promoting Krishna consciousness worldwide',
      image: '/images/iskcon.jpg',
      timing: '4:30 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
  ],
  bestTime: 'October to March',
  duration: '2-3 days',
  category: 'Pilgrimage',
  rating: 4.9,
  reviews: 2847,
  packages: [
    {
      id: 1,
      name: 'Mathura Vrindavan Divine Tour',
      duration: '4 days',
      price: 8000,
      image: '/images/bankey-bihari.jpg',
    },
    {
      id: 2,
      name: 'Extended Braj Parikrama',
      duration: '7 days',
      price: 15000,
      image: '/images/vrindavan-street.jpg',
    },
  ],
};

export default function DestinationDetailPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'packages', label: 'Packages' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image Gallery */}
      <div className="relative h-96 overflow-hidden md:h-[500px]">
        <img
          src={destinationData.gallery[selectedImage]}
          alt={destinationData.name}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Breadcrumb */}
        <div className="absolute left-4 top-4 flex items-center text-sm text-white/80">
          <span>Home</span>
          <ChevronRight className="mx-2 size-4" />
          <span>Destinations</span>
          <ChevronRight className="mx-2 size-4" />
          <span className="text-white">{destinationData.name}</span>
        </div>

        {/* Actions */}
        <div className="absolute right-4 top-4 flex gap-2">
          <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30">
            <Heart className="size-5" />
          </button>
          <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30">
            <Share2 className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="absolute inset-x-6 bottom-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
              {destinationData.category}
            </span>
            <div className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
              <Star className="size-4 fill-current text-yellow-400" />
              <span className="text-sm font-medium text-white">
                {destinationData.rating}
              </span>
              <span className="text-sm text-white/80">
                ({destinationData.reviews})
              </span>
            </div>
          </div>
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
            {destinationData.name}
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            {destinationData.shortDescription}
          </p>

          <div className="mt-4 flex items-center gap-6 text-white/80">
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
              <img src={img} alt="" className="size-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-1 rounded-xl bg-white p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-6 py-3 font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  About {destinationData.name}
                </h2>
                <p className="leading-relaxed text-gray-600">
                  {destinationData.longDescription}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {destinationData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-2 size-2 shrink-0 rounded-full bg-orange-500"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">
                      {destinationData.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">
                      {destinationData.bestTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">
                      {destinationData.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-6 text-white">
                <h3 className="mb-2 text-xl font-bold">Ready to Visit?</h3>
                <p className="mb-4 text-orange-100">
                  Explore our curated packages for this destination
                </p>
                <button className="w-full rounded-xl bg-white py-3 font-semibold text-orange-600 transition-all hover:bg-orange-50">
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
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="size-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-gray-800">
                    {attraction.name}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    {attraction.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
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
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    {pkg.name}
                  </h3>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="size-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-orange-600">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="block text-sm text-gray-500">
                        per person
                      </span>
                    </div>
                  </div>
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all hover:from-orange-600 hover:to-amber-600">
                    View Package Details
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
