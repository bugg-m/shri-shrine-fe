'use client';

import React, { useState } from 'react';
import SectionHeader from '@components/wrappers/section-header';
import SectionWrapper from '@components/wrappers/section-wrapper';
import { packageResponsiveness, packagesData } from '@constants/static-data';
import PackageCard from '@components/cards/package-card';
import SliderCarousel from '@components/carousel/slider-carousel';

const PackagesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Easy', 'Moderate', 'Challenging', 'Popular'];

  const filteredPackages = packagesData.filter((packageItem) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Popular') return packageItem.isPopular;
    return packageItem.difficulty === activeFilter;
  });

  return (
    <SectionWrapper>
      <SectionHeader
        title="Popular Packages"
        subTitle="Choose from a variety of spiritual packages tailored for your comfort
        and devotion. From luxury stays to budget yatras, we have something for
        everyone."
      />
      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap justify-start gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-1 text-sm font-medium transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-primary-500 text-white shadow-lg'
                : 'border border-secondary-200 bg-white text-neutral-600 hover:bg-primary-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <SliderCarousel
        data={filteredPackages}
        renderItem={(packageItem) => <PackageCard packageItem={packageItem} />}
        responsive={packageResponsiveness}
      />
    </SectionWrapper>
  );
};

export default PackagesSection;
