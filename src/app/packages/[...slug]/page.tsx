'use client';
import React, { use, useState } from 'react';
import {
  Clock,
  Star,
  Calendar,
  Users,
  ArrowRight,
  Check,
  X,
  Phone,
  Mail,
  IndianRupee,
  AlertCircle,
  Mountain,
  Utensils,
  Home,
  CheckCircle,
} from 'lucide-react';
import { packagesData } from '@constants/static-data';
import { Image } from '@bugg-m/bugg-ui';

export default function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'inclusions', label: "What's Included" },
    { id: 'booking', label: 'Booking Info' },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-primary-100 text-primary-700';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Moderate to Difficult':
        return 'bg-primary-100 text-primary-700';
      case 'Difficult':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-secondary-100 text-neutral-700';
    }
  };

  const packageData: (typeof packagesData)[0] = packagesData.find(
    (packages) => packages.slug === slug[0]
  )!;

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden md:h-[500px]">
        <Image
          src={packageData.gallery[selectedImage]}
          alt={packageData.name}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-x-6 bottom-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-primary-500 px-3 py-1 text-sm font-medium text-white">
              {packageData.category}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${getDifficultyColor(packageData.difficulty)}`}
            >
              {packageData.difficulty}
            </span>
            <div className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
              <Star className="size-4 fill-current text-yellow-400" />
              <span className="text-sm font-medium text-white">
                {packageData.rating}
              </span>
              <span className="text-sm text-white/80">
                ({packageData.reviews})
              </span>
            </div>
          </div>

          <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
            {packageData.name}
          </h1>
          <p className="mb-4 max-w-2xl text-lg text-white/90">
            {packageData.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>{packageData.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              <span>{packageData.groupSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>Best: {packageData.bestTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="size-4" />
              <span>{packageData.destinations.length} destinations</span>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          {packageData.gallery.map((img, index) => (
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
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Price & Booking Section */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="flex items-center text-3xl font-bold text-primary-600">
                  <IndianRupee className="size-6" />
                  {packageData.price.toLocaleString()}
                </span>
                {packageData.originalPrice > packageData.price && (
                  <span className="flex items-center text-lg text-neutral-500 line-through">
                    <IndianRupee className="size-4" />
                    {packageData.originalPrice.toLocaleString()}
                  </span>
                )}
                {packageData.originalPrice > packageData.price && (
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
                    Save ₹
                    {(
                      packageData.originalPrice - packageData.price
                    ).toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-neutral-600">per person (all inclusive)</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingForm(true)}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-500 px-8 py-3 font-semibold text-white transition-all hover:from-primary-600 hover:to-primary-600"
              >
                Book Now
                <ArrowRight className="size-4" />
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-primary-500 px-6 py-3 font-semibold text-primary-600 transition-all hover:bg-primary-50">
                <Phone className="size-4" />
                Call Us
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 inline-flex flex-wrap gap-2 rounded-md bg-white p-1.5 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-4 py-3 font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-neutral-600 hover:bg-secondary-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-neutral-800">
                  About This Package
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  {packageData.longDescription}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-neutral-800">
                  Package Highlights
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {packageData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary-500" />
                      <span className="text-neutral-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-neutral-800">
                  Destinations Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {packageData.destinations.map((dest, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary-100 px-4 py-2 font-medium text-primary-700"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-neutral-800">
                  Package Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Duration:</span>
                    <span className="font-medium">{packageData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Group Size:</span>
                    <span className="font-medium">{packageData.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Difficulty:</span>
                    <span
                      className={`rounded-full px-2 py-1 text-sm ${getDifficultyColor(packageData.difficulty)}`}
                    >
                      {packageData.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Best Time:</span>
                    <span className="font-medium">{packageData.bestTime}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
                <h3 className="mb-2 text-xl font-bold">Need Help?</h3>
                <p className="mb-4 text-blue-100">
                  Our travel experts are here to assist you
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="size-4" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4" />
                    <span>info@shrishrine.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'itinerary' && (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-neutral-800">
              Detailed Itinerary
            </h2>
            <div className="space-y-6">
              {packageData.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="relative border-l-4 border-primary-500 pb-6 pl-6"
                >
                  <div className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full bg-primary-500">
                    <span className="text-sm font-bold text-white">
                      {day.day}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-800">
                    {day.title}
                  </h3>
                  <p className="mb-3 text-neutral-600">{day.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-primary-600">
                      <Utensils className="size-4" />
                      <span>{day.meals}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600">
                      <Home className="size-4" />
                      <span>{day.accommodation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'inclusions' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary-700">
                <Check className="size-5" />
                What&apos;s Included
              </h3>
              <div className="space-y-3">
                {packageData.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-primary-500" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-red-700">
                <X className="size-5" />
                What&apos;s Not Included
              </h3>
              <div className="space-y-3">
                {packageData.excludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="mt-1 size-4 shrink-0 text-red-500" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-neutral-800">
              Booking Information
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-neutral-800">
                  Payment Details
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Advance Payment:</span>
                    <span className="flex items-center font-medium">
                      <IndianRupee className="size-4" />
                      {packageData.bookingInfo.advancePayment.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Remaining Amount:</span>
                    <span className="flex items-center font-medium">
                      <IndianRupee className="size-4" />
                      {(
                        packageData.price -
                        packageData.bookingInfo.advancePayment
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Last Booking Date:</span>
                    <span className="font-medium">
                      {packageData.bookingInfo.lastBookingDate}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-neutral-800">
                  Required Documents
                </h3>
                <div className="space-y-2">
                  {packageData.bookingInfo.documentsRequired.map(
                    (doc, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="size-4 text-primary-500" />
                        <span className="text-neutral-700">{doc}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 size-5 text-yellow-600" />
                <div>
                  <h4 className="font-semibold text-yellow-800">
                    Cancellation Policy
                  </h4>
                  <p className="text-sm text-yellow-700">
                    {packageData.bookingInfo.cancellationPolicy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Similar Packages Section */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-neutral-800">
          Similar Packages You Might Like
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Kedarnath Trek & Temple',
              image: '/images/kedarnath.jpg',
              duration: '5 days',
              price: 18000,
              rating: 4.4,
            },
            {
              name: 'Char Dham Sacred Journey',
              image: '/images/char-dham.jpg',
              duration: '12 days',
              price: 45000,
              rating: 4.6,
            },
            {
              name: 'Vaishno Devi Complete Darshan',
              image: '/images/maa-vaishno-devi.jpg',
              duration: '3 days',
              price: 12000,
              rating: 4.7,
            },
          ].map((pkg, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  className="size-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">{pkg.name}</h3>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="size-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-xl font-bold text-primary-600">
                    <IndianRupee className="size-5" />
                    {pkg.price.toLocaleString()}
                  </span>
                  <button className="rounded-lg bg-primary-500 px-4 py-2 text-white transition-all hover:bg-primary-600">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-neutral-800">
            What Our Pilgrims Say
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Rajesh Kumar',
                location: 'Delhi',
                rating: 5,
                text: 'An absolutely divine experience! The organization was perfect and our guide was very knowledgeable. Highly recommend ShriShrine for spiritual journeys.',
              },
              {
                name: 'Priya Sharma',
                location: 'Mumbai',
                rating: 5,
                text: 'The Amarnath Yatra was life-changing. Every detail was taken care of, from accommodation to medical support. Truly grateful to the team.',
              },
              {
                name: 'Amit Patel',
                location: 'Ahmedabad',
                rating: 4,
                text: 'Professional service and great value for money. The spiritual guidance provided made this journey unforgettable. Will definitely book again.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-current text-yellow-500"
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-neutral-600">
                  &quot; {testimonial.text} &quot;
                </p>
                <div>
                  <div className="font-semibold text-neutral-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-neutral-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'What is the best time to visit Amarnath?',
              a: 'The Amarnath Yatra is typically open from July to August when weather conditions are most favorable and the trek route is accessible.',
            },
            {
              q: 'Is medical support available during the journey?',
              a: 'Yes, we provide complete medical support including first aid kits, oxygen cylinders, and emergency evacuation facilities throughout the journey.',
            },
            {
              q: 'What should I pack for the trek?',
              a: 'We provide a detailed packing list upon booking. Essential items include warm clothing, waterproof gear, comfortable trekking shoes, and personal medications.',
            },
            {
              q: 'Are helicopter services included?',
              a: 'Helicopter rides are optional and available at additional cost. We can arrange helicopter bookings for those who prefer not to trek.',
            },
            {
              q: 'What is your cancellation policy?',
              a: 'Cancellation charges vary based on the timing of cancellation. Full details are provided in our terms and conditions during booking.',
            },
          ].map((faq, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-800">{faq.q}</h3>
              <p className="text-neutral-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-600 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Still Have Questions?</h2>
          <p className="mb-8 text-lg text-primary-100">
            Our travel experts are here to help you plan your perfect spiritual
            journey
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
              <Phone className="size-5" />
              <span className="font-medium">+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
              <Mail className="size-5" />
              <span className="font-medium">info@shrishrine.com</span>
            </div>
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-primary-600 transition-all hover:bg-primary-50">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Book Your Journey</h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-neutral-500 hover:text-neutral-700"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="mb-4 rounded-lg bg-primary-50 p-3">
              <h4 className="mb-1 font-semibold text-primary-800">
                {packageData.name}
              </h4>
              <div className="flex justify-between text-sm text-primary-600">
                <span>{packageData.duration}</span>
                <span className="font-medium">
                  ₹{packageData.price.toLocaleString()}/person
                </span>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-700">
                    Number of People *
                  </label>
                  <select
                    required
                    className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-700">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-700">
                  Special Requirements
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Any special dietary needs, medical conditions, or other requirements..."
                ></textarea>
              </div>

              <div className="border-t pt-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-neutral-600">Advance Payment:</span>
                  <span className="font-semibold">
                    ₹{packageData.bookingInfo.advancePayment.toLocaleString()}
                  </span>
                </div>
                <p className="mb-4 text-xs text-neutral-500">
                  Remaining amount to be paid 15 days before departure
                </p>
              </div>

              <div className="mb-4 flex items-start gap-2">
                <input type="checkbox" id="terms" required className="mt-1" />
                <label htmlFor="terms" className="text-xs text-neutral-600">
                  I agree to the{' '}
                  <span className="text-primary-600 underline">
                    terms and conditions
                  </span>{' '}
                  and{' '}
                  <span className="text-primary-600 underline">
                    cancellation policy
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-500 py-3 font-semibold text-white transition-all hover:from-primary-600 hover:to-primary-600"
              >
                Submit Booking Inquiry
                <ArrowRight className="size-4" />
              </button>

              <p className="text-center text-xs text-neutral-500">
                Our team will contact you within 24 hours to confirm your
                booking
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => setShowBookingForm(true)}
          className="rounded-full bg-primary-500 p-4 text-white shadow-lg transition-all hover:scale-110 hover:bg-primary-600"
          title="Quick Book"
        >
          <Calendar className="size-6" />
        </button>

        <button
          className="rounded-full bg-primary-500 p-4 text-white shadow-lg transition-all hover:scale-110 hover:bg-primary-600"
          title="WhatsApp"
        >
          <Phone className="size-6" />
        </button>
      </div>
    </div>
  );
}
