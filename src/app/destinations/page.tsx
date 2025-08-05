'use client';

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { destinations } from '@constants/static-data';
import DestinationHero from '@components/pages/destinations/destination-hero';
import DestinationsCard from '@components/cards/destinations-card';

const categories = ['All', 'Pilgrimage', 'Adventure Pilgrimage'];

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory =
      selectedCategory === 'All' || dest.category === selectedCategory;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.subTitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <DestinationHero />

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-3 py-1 text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'border border-primary-200 bg-white text-neutral-600 hover:bg-primary-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 rounded-full border border-primary-600 px-3 py-1 text-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-neutral-600">
            Showing {filteredDestinations.length} destination
            {filteredDestinations.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredDestinations.map((destination) => (
            <DestinationsCard destination={destination} key={destination.id} />
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-4 text-neutral-400">
              <MapPin className="mx-auto mb-4 size-16" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-neutral-600">
              No destinations found
            </h3>
            <p className="text-neutral-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
