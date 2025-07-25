'use client';

import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const DestinationSearchBar = () => {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [groupSize, setGroupSize] = useState('');

  const destinations = [
    'Amarnath Cave',
    'Vaishno Devi',
    'Vrindavan',
    'Tirupati',
    'Kedarnath',
    'Badrinath',
    'Rishikesh',
    'Haridwar',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleSearch = () => {
    // Handle search logic here
  };

  return (
    <div className="w-full max-w-6xl rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-lg md:p-8">
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* Destination */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-white">
            <MapPin className="size-4 text-primary-400" />
            Sacred Destination
          </label>
          <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-sm placeholder:text-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
          >
            <option value="" className="text-neutral-800">
              Choose your destination
            </option>
            {destinations.map((dest) => (
              <option key={dest} value={dest} className="text-neutral-800">
                {dest}
              </option>
            ))}
          </select>
        </div>

        {/* Month */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-white">
            <Calendar className="size-4 text-blue-400" />
            Travel Month
          </label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
          >
            <option value="" className="text-neutral-800">
              Best time to visit
            </option>
            {months.map((month) => (
              <option key={month} value={month} className="text-neutral-800">
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* Group Size */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-white">
            <Users className="size-4 text-primary-400" />
            Pilgrims
          </label>
          <select
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
          >
            <option value="" className="text-neutral-800">
              Group size
            </option>
            <option value="solo" className="text-neutral-800">
              Solo Journey
            </option>
            <option value="couple" className="text-neutral-800">
              Couple (2)
            </option>
            <option value="family" className="text-neutral-800">
              Family (3-6)
            </option>
            <option value="group" className="text-neutral-800">
              Group (7+)
            </option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex flex-col justify-end">
          <button
            onClick={handleSearch}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-red-500 p-4 font-semibold text-white shadow-lg transition-all duration-200 hover:from-primary-600 hover:to-red-600 hover:shadow-xl"
          >
            <Search className="size-5" />
            Begin Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationSearchBar;
