import DestinationSearchBar from '@components/search-bar/destination-search-bar';
import SectionHeader from '@components/wrappers/section-header';
import SectionWrapper from '@components/wrappers/section-wrapper';
import React from 'react';

const SearchDestinations = () => {
  return (
    <div className="relative h-screen bg-blue-950 py-16">
      <div className="absolute inset-0 bg-black/50" />
      <SectionWrapper>
        <SectionHeader
          title="Search Sacred Places"
          subTitle="Search sacred places across India"
        />
        <DestinationSearchBar />
        <div className="mt-12 w-full max-w-4xl">
          <p className="mb-4 text-center text-gray-100">Popular Destinations</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Amarnath',
              'Vaishno Devi',
              'Vrindavan',
              'Tirupati',
              'Kedarnath',
            ].map((place) => (
              <button
                key={place}
                className="hover-scale-105 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
              >
                {place}
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SearchDestinations;
