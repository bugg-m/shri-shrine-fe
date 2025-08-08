'use client';
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { packagesData } from '@constants/static-data';
import PackageCard from '@components/cards/package-card';
import PackagesHero from '@components/pages/packages/packages-hero';

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
  const filteredPackages = packagesData.filter((pkg) => {
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

  return (
    <div className="min-h-screen bg-secondary-200">
      {/* Hero Section */}
      <PackagesHero />

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Filters & Sort */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Difficulty
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Duration
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="mt-4 border-t border-secondary-200 pt-4">
            <p className="text-neutral-600">
              Showing {sortedPackages.length} package
              {sortedPackages.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedPackages.map((pkg) => (
            <PackageCard packageItem={pkg} key={pkg.id} />
          ))}
        </div>

        {/* No Results */}
        {sortedPackages.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-4 text-neutral-400">
              <Calendar className="mx-auto mb-4 size-16" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-neutral-600">
              No packages found
            </h3>
            <p className="text-neutral-500">
              Try adjusting your filters to see more options
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
