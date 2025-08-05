'use client';
import React, { useState } from 'react';
import {
  Star,
  Clock,
  Users,
  MapPin,
  Check,
  X,
  Phone,
  Mail,
} from 'lucide-react';

const PackageDetailPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [groupSize, setGroupSize] = useState('2');

  const itinerary = [
    {
      day: 1,
      title: 'Arrival & Mathura Darshan',
      activities: [
        'Pickup from Delhi/Agra',
        'Krishna Janmabhoomi Temple',
        'Dwarkadhish Temple',
        'Local market visit',
        'Check-in to hotel',
      ],
      meals: 'Lunch, Dinner',
    },
    {
      day: 2,
      title: 'Vrindavan Sacred Tour',
      activities: [
        'Early morning Mangala Aarti',
        'Banke Bihari Temple',
        'Prem Mandir with light show',
        'ISKCON Temple',
        'Yamuna Aarti ceremony',
      ],
      meals: 'Breakfast, Lunch, Dinner',
    },
    {
      day: 3,
      title: 'Govardhan & Departure',
      activities: [
        'Govardhan Hill Parikrama',
        'Radha Kund & Shyam Kund',
        'Local prasadam experience',
        'Shopping for spiritual items',
        'Departure to Delhi/Agra',
      ],
      meals: 'Breakfast, Lunch',
    },
  ];

  const inclusions = [
    'AC transportation throughout',
    '2 nights accommodation (3-star hotel)',
    'All temple entry fees',
    'Professional guide',
    'All meals as per itinerary',
    'Yamuna aarti arrangements',
    'Travel insurance',
  ];

  const exclusions = [
    'Personal expenses',
    'Tips to guide/driver',
    'Camera fees at temples',
    'Any additional activities',
    'GST (5% extra)',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              3D/2N Mathura Vrindavan Complete Tour
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="mr-2 size-4" />
                <span>3 Days 2 Nights</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 size-4" />
                <span>2-15 People</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 size-4" />
                <span>Mathura & Vrindavan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Package Overview */}
            <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Package Overview
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Experience the divine essence of Lord Krishna&apos;s birthplace
                with our comprehensive 3-day spiritual journey. Visit sacred
                temples, witness beautiful aartis, and immerse yourself in the
                rich cultural heritage of Braj Bhoomi.
              </p>
              <div className="grid gap-4 text-center md:grid-cols-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">Sacred Temples</div>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="text-2xl font-bold text-blue-600">2</div>
                  <div className="text-sm text-gray-600">Aarti Ceremonies</div>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </section>

            {/* Detailed Itinerary */}
            <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Detailed Itinerary
              </h2>
              <div className="space-y-6">
                {itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="border-l-4 border-orange-500 pl-6"
                  >
                    <div className="mb-3 flex items-center">
                      <div className="mr-3 flex size-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                        {day.day}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {day.title}
                      </h3>
                    </div>
                    <ul className="mb-3 space-y-2">
                      {day.activities.map((activity, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-700"
                        >
                          <Check className="mr-2 mt-0.5 size-4 shrink-0 text-green-500" />
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm font-medium text-orange-600">
                      Meals: {day.meals}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                What&apos;s Included & Excluded
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 flex items-center text-lg font-semibold text-green-600">
                    <Check className="mr-2 size-5" />
                    Inclusions
                  </h3>
                  <ul className="space-y-2">
                    {inclusions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <Check className="mr-2 mt-0.5 size-4 shrink-0 text-green-500" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 flex items-center text-lg font-semibold text-red-600">
                    <X className="mr-2 size-5" />
                    Exclusions
                  </h3>
                  <ul className="space-y-2">
                    {exclusions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <X className="mr-2 mt-0.5 size-4 shrink-0 text-red-500" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Important Guidelines */}
            <section className="rounded-lg border border-amber-200 bg-amber-50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-amber-800">
                Important Guidelines
              </h3>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• Dress modestly when visiting temples</li>
                <li>• Remove shoes and leather items before temple entry</li>
                <li>• Photography may be restricted in some temples</li>
                <li>• Carry valid ID proofs for all travelers</li>
                <li>
                  • Book at least 7 days in advance for better arrangements
                </li>
              </ul>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-lg bg-white p-6 shadow-md">
              <div className="mb-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-orange-600">
                    ₹7,500
                  </span>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                <div className="mb-2 flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    (48 reviews)
                  </span>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Group Size
                  </label>
                  <select
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
              </div>

              <div className="mb-6 border-t pt-4">
                <div className="mb-2 flex justify-between text-sm">
                  <span>₹7,500 × {groupSize} person(s)</span>
                  <span>₹{7500 * parseInt(groupSize)}</span>
                </div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>GST (5%)</span>
                  <span>₹{Math.round(7500 * parseInt(groupSize) * 0.05)}</span>
                </div>
                <div className="flex justify-between border-t pt-2 font-semibold">
                  <span>Total</span>
                  <span>₹{Math.round(7500 * parseInt(groupSize) * 1.05)}</span>
                </div>
              </div>

              <button className="mb-3 w-full rounded-lg bg-orange-600 py-3 font-semibold text-white transition-colors hover:bg-orange-700">
                Book Now
              </button>

              <button className="w-full rounded-lg border border-orange-600 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50">
                Get Custom Quote
              </button>

              <div className="mt-6 border-t pt-6">
                <h4 className="mb-3 font-semibold">Need Help?</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Phone className="mr-2 size-4 text-orange-500" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="mr-2 size-4 text-orange-500" />
                    <span>support@shrishrine.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
