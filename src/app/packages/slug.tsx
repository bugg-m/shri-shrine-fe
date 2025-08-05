import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Star,
  Calendar,
  Users,
  ArrowRight,
  ChevronRight,
  Check,
  X,
  Heart,
  Share2,
  Phone,
  Mail,
  IndianRupee,
  AlertCircle,
  Mountain,
  Utensils,
  Car,
  Home,
  Shield,
  Camera,
} from 'lucide-react';

// Sample package data - in real app, this would be fetched based on slug
const packageData = {
  id: 1,
  slug: 'divine-amarnath-yatra',
  name: 'Divine Amarnath Yatra',
  shortDescription: 'Sacred journey to the ice lingam of Lord Shiva',
  longDescription:
    'Embark on the ultimate spiritual journey to the sacred Amarnath Cave, nestled in the pristine Himalayas of Kashmir. This divine pilgrimage takes you to witness the naturally formed ice lingam of Lord Shiva, where according to Hindu mythology, Lord Shiva revealed the secret of immortality to Mata Parvati. Experience the profound spiritual energy, breathtaking mountain vistas, and the devotion of thousands of pilgrims on this transformative journey.',
  image: '/images/amarnath.jpg',
  gallery: [
    '/images/amarnath.jpg',
    '/images/amarnath-cave.jpg',
    '/images/amarnath-trek.jpg',
    '/images/amarnath-camp.jpg',
  ],
  duration: '7 days',
  price: 25000,
  originalPrice: 30000,
  difficulty: 'Moderate to Difficult',
  groupSize: '15-20 people',
  rating: 4.8,
  reviews: 342,
  category: 'Adventure Pilgrimage',
  bestTime: 'July to August',
  destinations: ['Jammu', 'Pahalgam', 'Chandanwari', 'Amarnath Cave'],
  highlights: [
    'Sacred ice lingam darshan at 3,888m altitude',
    'Helicopter ride option available (additional cost)',
    'Experienced local guides and medical support',
    'Spiritual lectures by learned saints',
    'Traditional Kashmiri hospitality',
    'Medical kit and oxygen support throughout journey',
  ],
  includes: [
    'Accommodation in base camps and hotels',
    'All vegetarian meals during the journey',
    'Professional guides and porters',
    'Medical kit and oxygen cylinders',
    'Transportation from Jammu to base camp',
    'All necessary permits and registrations',
    'Travel insurance coverage',
    'Emergency evacuation support',
  ],
  excludes: [
    'Flight tickets to/from Jammu',
    'Personal expenses and shopping',
    'Helicopter rides (optional)',
    'Medical expenses not covered by insurance',
    'Tips for guides and porters',
    'Any meals not mentioned in inclusions',
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Jammu',
      description:
        'Arrive at Jammu airport/railway station. Transfer to hotel. Evening briefing about the yatra. Overnight stay in Jammu.',
      meals: 'Dinner',
      accommodation: 'Hotel in Jammu',
    },
    {
      day: 2,
      title: 'Jammu to Pahalgam',
      description:
        'Early morning departure to Pahalgam via Anantnag. En route visit Awantipura ruins. Check-in at Pahalgam. Rest and acclimatization.',
      meals: 'Breakfast, Lunch, Dinner',
      accommodation: 'Hotel in Pahalgam',
    },
    {
      day: 3,
      title: 'Pahalgam to Chandanwari',
      description:
        'Trek begins from Pahalgam to Chandanwari (16 km). This is the actual start of the Amarnath Yatra. Overnight camping.',
      meals: 'Breakfast, Lunch, Dinner',
      accommodation: 'Camping at Chandanwari',
    },
    {
      day: 4,
      title: 'Chandanwari to Sheshnag',
      description:
        'Trek from Chandanwari to Sheshnag Lake (13 km). Beautiful alpine lake surrounded by snow-capped peaks. Overnight camping.',
      meals: 'Breakfast, Lunch, Dinner',
      accommodation: 'Camping at Sheshnag',
    },
    {
      day: 5,
      title: 'Sheshnag to Panchtarni',
      description:
        'Trek to Panchtarni via Mahagunas Pass (14 km). The most challenging part of the trek. Overnight camping.',
      meals: 'Breakfast, Lunch, Dinner',
      accommodation: 'Camping at Panchtarni',
    },
    {
      day: 6,
      title: 'Panchtarni to Amarnath Cave and back',
      description:
        'Early morning trek to the holy Amarnath Cave (6 km). Darshan of the ice lingam. Return to Panchtarni for overnight stay.',
      meals: 'Breakfast, Lunch, Dinner',
      accommodation: 'Camping at Panchtarni',
    },
    {
      day: 7,
      title: 'Return to Jammu and Departure',
      description:
        'Return journey to Jammu via helicopter or the same trekking route (as per choice). Transfer to airport/railway station for departure.',
      meals: 'Breakfast, Lunch',
      accommodation: 'Day use hotel in Jammu',
    },
  ],
  bookingInfo: {
    advancePayment: 10000,
    cancellationPolicy: 'Cancellation charges apply as per terms',
    lastBookingDate: '30 days before departure',
    documentsRequired: [
      'Aadhar Card',
      'Medical Certificate',
      'Passport size photos',
    ],
  },
};

export default function PackageDetailPage() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden md:h-[500px]">
        <img
          src={packageData.gallery[selectedImage]}
          alt={packageData.name}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Breadcrumb */}
        <div className="absolute left-4 top-4 flex items-center text-sm text-white/80">
          <span>Home</span>
          <ChevronRight className="mx-2 size-4" />
          <span>Packages</span>
          <ChevronRight className="mx-2 size-4" />
          <span className="text-white">{packageData.name}</span>
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
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
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
              <img src={img} alt="" className="size-full object-cover" />
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
                <span className="flex items-center text-3xl font-bold text-orange-600">
                  <IndianRupee className="size-6" />
                  {packageData.price.toLocaleString()}
                </span>
                {packageData.originalPrice > packageData.price && (
                  <span className="flex items-center text-lg text-gray-500 line-through">
                    <IndianRupee className="size-4" />
                    {packageData.originalPrice.toLocaleString()}
                  </span>
                )}
                {packageData.originalPrice > packageData.price && (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    Save ₹
                    {(
                      packageData.originalPrice - packageData.price
                    ).toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-gray-600">per person (all inclusive)</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingForm(true)}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 font-semibold text-white transition-all hover:from-orange-600 hover:to-amber-600"
              >
                Book Now
                <ArrowRight className="size-4" />
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-orange-500 px-6 py-3 font-semibold text-orange-600 transition-all hover:bg-orange-50">
                <Phone className="size-4" />
                Call Us
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-1 rounded-xl bg-white p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-4 py-3 font-medium transition-all ${
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
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  About This Package
                </h2>
                <p className="leading-relaxed text-gray-600">
                  {packageData.longDescription}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Package Highlights
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {packageData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-green-500" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Destinations Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {packageData.destinations.map((dest, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-orange-100 px-4 py-2 font-medium text-orange-700"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Package Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{packageData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-medium">{packageData.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span
                      className={`rounded-full px-2 py-1 text-sm ${getDifficultyColor(packageData.difficulty)}`}
                    >
                      {packageData.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Best Time:</span>
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
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Detailed Itinerary
            </h2>
            <div className="space-y-6">
              {packageData.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="relative border-l-4 border-orange-500 pb-6 pl-6"
                >
                  <div className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full bg-orange-500">
                    <span className="text-sm font-bold text-white">
                      {day.day}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-800">
                    {day.title}
                  </h3>
                  <p className="mb-3 text-gray-600">{day.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-green-600">
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
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-green-700">
                <Check className="size-5" />
                What&apos;s Included
              </h3>
              <div className="space-y-3">
                {packageData.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <span className="text-gray-700">{item}</span>
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
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Booking Information
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Payment Details
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Advance Payment:</span>
                    <span className="flex items-center font-medium">
                      <IndianRupee className="size-4" />
                      {packageData.bookingInfo.advancePayment.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Remaining Amount:</span>
                    <span className="flex items-center font-medium">
                      <IndianRupee className="size-4" />
                      {(
                        packageData.price -
                        packageData.bookingInfo.advancePayment
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Booking Date:</span>
                    <span className="font-medium">
                      {packageData.bookingInfo.lastBookingDate}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Required Documents
                </h3>
                <div className="space-y-2">
                  {packageData.bookingInfo.documentsRequired.map(
                    (doc, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="size-4 text-green-500" />
                        <span className="text-gray-700">{doc}</span>
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
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
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
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="size-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">{pkg.name}</h3>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="size-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-xl font-bold text-orange-600">
                    <IndianRupee className="size-5" />
                    {pkg.price.toLocaleString()}
                  </span>
                  <button className="rounded-lg bg-orange-500 px-4 py-2 text-white transition-all hover:bg-orange-600">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
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
                <p className="mb-4 italic text-gray-600">
                  &quot; {testimonial.text} &quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
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
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
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
              <h3 className="mb-2 font-semibold text-gray-800">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Still Have Questions?</h2>
          <p className="mb-8 text-lg text-orange-100">
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
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-orange-600 transition-all hover:bg-orange-50">
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
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="mb-4 rounded-lg bg-orange-50 p-3">
              <h4 className="mb-1 font-semibold text-orange-800">
                {packageData.name}
              </h4>
              <div className="flex justify-between text-sm text-orange-600">
                <span>{packageData.duration}</span>
                <span className="font-medium">
                  ₹{packageData.price.toLocaleString()}/person
                </span>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Number of People *
                  </label>
                  <select
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Special Requirements
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Any special dietary needs, medical conditions, or other requirements..."
                ></textarea>
              </div>

              <div className="border-t pt-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-gray-600">Advance Payment:</span>
                  <span className="font-semibold">
                    ₹{packageData.bookingInfo.advancePayment.toLocaleString()}
                  </span>
                </div>
                <p className="mb-4 text-xs text-gray-500">
                  Remaining amount to be paid 15 days before departure
                </p>
              </div>

              <div className="mb-4 flex items-start gap-2">
                <input type="checkbox" id="terms" required className="mt-1" />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  I agree to the{' '}
                  <span className="text-orange-600 underline">
                    terms and conditions
                  </span>{' '}
                  and{' '}
                  <span className="text-orange-600 underline">
                    cancellation policy
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all hover:from-orange-600 hover:to-amber-600"
              >
                Submit Booking Inquiry
                <ArrowRight className="size-4" />
              </button>

              <p className="text-center text-xs text-gray-500">
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
          className="rounded-full bg-orange-500 p-4 text-white shadow-lg transition-all hover:scale-110 hover:bg-orange-600"
          title="Quick Book"
        >
          <Calendar className="size-6" />
        </button>

        <button
          className="rounded-full bg-green-500 p-4 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600"
          title="WhatsApp"
        >
          <Phone className="size-6" />
        </button>
      </div>
    </div>
  );
}
