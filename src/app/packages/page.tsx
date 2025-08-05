'use client';
import React, { useState } from 'react';
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  Filter,
  MapPin,
  Calendar,
  IndianRupee,
} from 'lucide-react';

const packages = [
  {
    id: 1,
    slug: 'divine-amarnath-yatra',
    name: 'Divine Amarnath Yatra',
    shortDescription: 'Sacred journey to the ice lingam of Lord Shiva',
    image: '/images/amarnath.jpg',
    duration: '7 days',
    price: 25000,
    originalPrice: 30000,
    difficulty: 'Moderate to Difficult',
    groupSize: '15-20 people',
    rating: 4.8,
    reviews: 342,
    category: 'Adventure Pilgrimage',
    destinations: ['Jammu', 'Pahalgam', 'Amarnath Cave'],
    highlights: [
      'Sacred ice lingam darshan',
      'Helicopter ride option',
      'Medical support',
    ],
    badge: 'Popular',
  },
  {
    id: 2,
    slug: 'mathura-vrindavan-package',
    name: 'Mathura Vrindavan Divine Tour',
    shortDescription: "Complete spiritual journey through Krishna's land",
    image: '/images/bankey-bihari.jpg',
    duration: '4 days',
    price: 8000,
    originalPrice: 10000,
    difficulty: 'Easy',
    groupSize: '10-25 people',
    rating: 4.9,
    reviews: 567,
    category: 'Pilgrimage',
    destinations: ['Mathura', 'Vrindavan'],
    highlights: [
      'Banke Bihari darshan',
      'Yamuna aarti',
      'Local saint meetings',
    ],
    badge: 'Best Seller',
  },
  {
    id: 3,
    slug: 'vaishno-devi-complete',
    name: 'Vaishno Devi Complete Darshan',
    shortDescription: 'Sacred journey to Mata Vaishno Devi shrine',
    image: '/images/maa-vaishno-devi.jpg',
    duration: '3 days',
    price: 12000,
    originalPrice: 15000,
    difficulty: 'Moderate',
    groupSize: '15-30 people',
    rating: 4.7,
    reviews: 423,
    category: 'Pilgrimage',
    destinations: ['Katra', 'Vaishno Devi'],
    highlights: [
      'Sacred cave darshan',
      'Helicopter option',
      'Ardhkuwari visit',
    ],
  },
  {
    id: 4,
    slug: 'char-dham-yatra',
    name: 'Char Dham Sacred Journey',
    shortDescription: 'Complete pilgrimage to four sacred dhams',
    image: '/images/char-dham.jpg',
    duration: '12 days',
    price: 45000,
    originalPrice: 55000,
    difficulty: 'Difficult',
    groupSize: '12-18 people',
    rating: 4.6,
    reviews: 234,
    category: 'Adventure Pilgrimage',
    destinations: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    highlights: [
      'Four sacred temples',
      'Himalayan experience',
      'Spiritual guides',
    ],
  },
  {
    id: 5,
    slug: 'tirupati-weekend',
    name: 'Tirupati Weekend Darshan',
    shortDescription: 'Quick spiritual getaway to Lord Venkateswara',
    image: '/images/tirupati.jpg',
    duration: '2 days',
    price: 6000,
    originalPrice: 7500,
    difficulty: 'Easy',
    groupSize: '20-35 people',
    rating: 4.5,
    reviews: 789,
    category: 'Pilgrimage',
    destinations: ['Tirupati', 'Tirumala'],
    highlights: ['VIP darshan tickets', 'Laddu prasadam', 'Temple tours'],
  },
  {
    id: 6,
    slug: 'kedarnath-adventure',
    name: 'Kedarnath Trek & Temple',
    shortDescription: 'Adventurous trek to one of twelve Jyotirlingas',
    image: '/images/kedarnath.jpg',
    duration: '5 days',
    price: 18000,
    originalPrice: 22000,
    difficulty: 'Difficult',
    groupSize: '10-15 people',
    rating: 4.4,
    reviews: 156,
    category: 'Adventure Pilgrimage',
    destinations: ['Haridwar', 'Gaurikund', 'Kedarnath'],
    highlights: ['Himalayan trek', 'Ancient temple', 'Mountain views'],
  },
];

const categories = ['All', 'Pilgrimage', 'Adventure Pilgrimage'];
const difficulties = [
  'All',
  'Easy',
  'Moderate',
  'Moderate to Difficult',
  'Difficult',
];
const durations = ['All', '1-3 days', '4-7 days', '8+ days'];

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPackages = packages.filter((pkg) => {
    const matchesCategory =
      selectedCategory === 'All' || pkg.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === 'All' || pkg.difficulty === selectedDifficulty;
    const matchesDuration =
      selectedDuration === 'All' ||
      (selectedDuration === '1-3 days' && parseInt(pkg.duration) <= 3) ||
      (selectedDuration === '4-7 days' &&
        parseInt(pkg.duration) >= 4 &&
        parseInt(pkg.duration) <= 7) ||
      (selectedDuration === '8+ days' && parseInt(pkg.duration) >= 8);
    return matchesCategory && matchesDifficulty && matchesDuration;
  });

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews; // popular
    }
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Moderate to Difficult':
        return 'bg-orange-100 text-orange-700';
      case 'Difficult':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 py-20 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold">
            Sacred Pilgrimage Packages
          </h1>
          <p className="mx-auto max-w-2xl text-xl opacity-90">
            Carefully crafted spiritual journeys designed to touch your soul and
            awaken divine consciousness
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Filters & Sort */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Difficulty
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Duration
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4">
            <p className="text-gray-600">
              Showing {sortedPackages.length} package
              {sortedPackages.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Category & Rating */}
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
                    {pkg.category}
                  </span>
                  <div className="flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
                    <Star className="size-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>

                {/* Difficulty */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${getDifficultyColor(pkg.difficulty)}`}
                  >
                    {pkg.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {pkg.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-gray-600">
                  {pkg.shortDescription}
                </p>

                {/* Package Details */}
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="size-4" />
                    <span>{pkg.destinations.length} destinations</span>
                  </div>
                </div>

                {/* Destinations */}
                <div className="mb-4">
                  <p className="mb-2 text-sm text-gray-500">Destinations:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.slice(0, 3).map((dest, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-600"
                      >
                        {dest}
                      </span>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                        +{pkg.destinations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center text-2xl font-bold text-orange-600">
                        <IndianRupee className="size-5" />
                        {pkg.price.toLocaleString()}
                      </span>
                      {pkg.originalPrice > pkg.price && (
                        <span className="flex items-center text-sm text-gray-500 line-through">
                          <IndianRupee className="size-3" />
                          {pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>

                  {pkg.originalPrice > pkg.price && (
                    <div className="text-right">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-medium text-green-700">
                        Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:from-orange-600 hover:to-amber-600">
                  View Package Details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedPackages.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-4 text-gray-400">
              <Calendar className="mx-auto mb-4 size-16" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-600">
              No packages found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters to see more options
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
