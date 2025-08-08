const aboutUsValues = [
  {
    title: 'Spiritual Authenticity',
    desc: 'Deep-rooted connection to Krishna consciousness',
  },
  {
    title: 'Personal Touch',
    desc: 'Every journey crafted with individual care',
  },
  {
    title: 'Local Expertise',
    desc: 'Born and raised in the sacred land of Braj',
  },
  {
    title: 'Devotional Service',
    desc: 'Serving pilgrims with love and dedication',
  },
];

const ourExperiences = [
  {
    icon: '🛕',
    title: 'Sacred Temple Darshan',
    description:
      'Guided visits to Banke Bihari Ji, Prem Mandir, ISKCON, Dwarkadhish, and other divine abodes',
    image: '/images/bankey-bihari.jpg',
    features: [
      'VIP Darshan Access',
      'Temple History & Stories',
      'Proper Ritual Guidance',
    ],
  },
  {
    icon: '🪔',
    title: 'Yamuna Aarti & Boat Rides',
    description:
      'Experience the divine evening aarti under glowing skies with serene boat journeys',
    image: '/images/yamuna-aarti.jpg',
    features: [
      'Golden Hour Timing',
      'Traditional Aarti Songs',
      'Peaceful River Experience',
    ],
  },
  {
    icon: '🚶‍♂️',
    title: 'Spiritual Parikrama Walks',
    description:
      'Sacred circumambulation paths that awaken devotion and inner stillness',
    image: '/images/parikrama.jpg',
    features: [
      'Govardhan Parikrama',
      'Vrindavan Parikrama',
      'Guided Meditation',
    ],
  },
  {
    icon: '🙏',
    title: 'Saints & Spiritual Leaders',
    description:
      'Meet and receive blessings from authentic local saints and spiritual guides',
    image: '/images/saints.jpg',
    features: ['Personal Blessings', 'Spiritual Discourse', 'Q&A Sessions'],
  },
  {
    icon: '🍽️',
    title: 'Sattvic Meals & Prasad',
    description:
      'Traditional vegetarian meals and blessed prasadam experiences',
    image: '/images/prasad.jpg',
    features: ['Temple Prasad', 'Local Delicacies', 'Pure Vegetarian'],
  },
  {
    icon: '🎉',
    title: 'Festival Celebrations',
    description:
      'Special Janmashtami and Holi celebration tours with authentic local traditions',
    image: '/images/festival.jpg',
    features: [
      'Holi in Barsana',
      'Janmashtami Celebrations',
      'Raas Leela Performances',
    ],
  },
];

const testimonials = [
  {
    name: 'Priya & Rajesh Sharma',
    location: 'Mumbai',
    rating: 5,
    text: "Our Mathura-Vrindavan journey was spiritually transformative. The guide's deep knowledge of Krishna's leelas made every temple visit meaningful. Highly recommend for authentic darshan experience.",
    package: '3D/2N Braj Darshan',
  },
  {
    name: 'Sunita Agarwal',
    location: 'Delhi',
    rating: 5,
    text: 'Exceptional service during Tirupati darshan. They arranged early morning slot which saved us 4 hours of waiting. The entire journey was hassle-free and devotional.',
    package: 'Tirupati Balaji Tour',
  },
  {
    name: 'Vikram Singh Family',
    location: 'Jaipur',
    rating: 5,
    text: 'Perfect blend of comfort and spirituality. AC transport, quality accommodation, and knowledgeable guides made our Varanasi pilgrimage unforgettable. Worth every rupee!',
    package: 'Kashi Vishwanath Yatra',
  },
  {
    name: 'Meera Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: "ShriShrine understands pilgrims' needs. From Yamuna aarti to authentic prasadam, every detail was perfect. My elderly parents felt completely cared for throughout the journey.",
    package: 'Senior Citizen Special',
  },
];

const destinationResponsiveness = [
  { breakpoint: 1024, items: 4 },
  { breakpoint: 768, items: 3 },
  { breakpoint: 640, items: 2 },
  { breakpoint: 480, items: 1 },
];

const packageResponsiveness = [
  { breakpoint: 768, items: 3 },
  { breakpoint: 640, items: 2 },
  { breakpoint: 480, items: 1 },
];

const destinations = [
  {
    id: 1,
    slug: 'vrindavan',
    name: 'Vrindavan',
    subTitle: 'Divine town where Lord Krishna spent his childhood',
    description:
      'Vrindavan, the sacred land where Lord Krishna spent his divine childhood, is a spiritual paradise that captivates millions of devotees worldwide. Every stone, every tree, and every corner of this holy town resonates with the divine leelas of the Supreme Lord. Walk through the narrow lanes where Krishna once played, visit the temples that echo with his divine presence, and experience the eternal love that flows through this mystical town.',
    image: '/images/bankey-bihari.jpg',
    gallery: [
      '/images/bankey-bihari.jpg',
      '/images/prem-mandir.jpg',
      '/images/vrindavan-street.jpg',
      '/images/yamuna-ghat.jpg',
    ],
    highlights: [
      'Banke Bihari Temple',
      'Prem Mandir',
      'ISKCON Temple',
      'Keshi Ghat',
    ],
    attractions: [
      {
        name: 'Banke Bihari Temple',
        description:
          'Most famous Krishna temple with unique darshan timings and divine atmosphere',
        image: '/images/bankey-bihari.jpg',
        timing: '7:45 AM – 12:00 PM, 5:30 PM – 9:30 PM',
      },
      {
        name: 'Prem Mandir',
        description:
          'Stunning white marble temple with intricate carvings and spectacular light shows',
        image: '/images/prem-mandir.jpg',
        timing: '5:30 AM – 12:00 PM, 4:30 PM – 9:00 PM',
      },
      {
        name: 'ISKCON Temple',
        description:
          'International spiritual center promoting Krishna consciousness worldwide',
        image: '/images/iskcon.jpg',
        timing: '4:30 AM – 1:00 PM, 4:00 PM – 9:00 PM',
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
  },
  {
    id: 2,
    slug: 'vaishno-devi',
    name: 'Vaishno Devi',
    subTitle: 'Sacred shrine of Mata Vaishno Devi in the Trikuta Mountains',
    description:
      'Perched high in the Trikuta Mountains, the shrine of Mata Vaishno Devi draws millions of pilgrims each year. The 13.5 km trek through dense forests and rocky terrain culminates in a natural cave where the goddess is believed to reside, offering a profound spiritual experience.',
    image: '/images/maa-vaishno-devi.jpg',
    gallery: [
      '/images/maa-vaishno-devi.jpg',
      '/images/vaishno-cave.jpg',
      '/images/vaishno-panorama.jpg',
      '/images/tribal-hills.jpg',
    ],
    highlights: [
      'Holy Cave Temple',
      'Ardhkuwari',
      'Bhairon Ghati',
      'Battery Car Service',
    ],
    attractions: [
      {
        name: 'Holy Cave Temple',
        description:
          'The sacred cave where Mata Vaishno Devi manifests before devotees',
        image: '/images/vaishno-cave.jpg',
        timing: '5:00 AM – 12:00 AM (midnight)',
      },
      {
        name: 'Bhairon Ghati',
        description:
          'Temple dedicated to Bhairon Nath, located 2.5 km from the cave',
        image: '/images/bhairon-ghati.jpg',
        timing: '6:00 AM – 10:00 PM',
      },
      {
        name: 'Ardhkuwari',
        description: 'A narrow gorge symbolizing half the pilgrimage distance',
        image: '/images/ardhkuwari.jpg',
        timing: 'Open 24 hours',
      },
    ],
    bestTime: 'March to October',
    duration: '2-3 days',
    category: 'Pilgrimage',
    rating: 4.8,
    reviews: 5321,
    packages: [
      {
        id: 1,
        name: 'Vaishno Devi Express Trek',
        duration: '2 days',
        price: 5000,
        image: '/images/maa-vaishno-devi.jpg',
      },
      {
        id: 2,
        name: 'Comfort Pilgrimage Package',
        duration: '3 days',
        price: 9000,
        image: '/images/battery-car.jpg',
      },
    ],
  },
  {
    id: 3,
    slug: 'kedarnath',
    name: 'Kedarnath',
    subTitle: 'One of the twelve Jyotirlingas of Lord Shiva',
    description:
      'Nestled among the towering peaks of the Garhwal Himalayas, Kedarnath is revered as one of Lord Shiva’s twelve Jyotirlingas. The arduous trek rewards pilgrims with breathtaking vistas and the serene presence of the ancient temple.',
    image: '/images/kedarnath.jpg',
    gallery: [
      '/images/kedarnath.jpg',
      '/images/kedarnath-temple.jpg',
      '/images/himalayan-trail.jpg',
      '/images/gaurikund.jpg',
    ],
    highlights: [
      'Kedarnath Temple',
      'Gaurikund',
      'Mountain Views',
      'Trekking Routes',
    ],
    attractions: [
      {
        name: 'Kedarnath Temple',
        description:
          'Historic temple rebuilt after 2013 floods, home to Shiva’s Jyotirlinga',
        image: '/images/kedarnath-temple.jpg',
        timing: '4:00 AM – 11:00 PM',
      },
      {
        name: 'Gaurikund',
        description:
          'Natural hot springs believed to be created by Goddess Parvati',
        image: '/images/gaurikund.jpg',
        timing: '24 hours',
      },
      {
        name: 'Vasuki Tal Trek',
        description: 'High-altitude lake trek offering stunning glacial views',
        image: '/images/vasuki-tal.jpg',
        timing: 'Dawn to dusk',
      },
    ],
    bestTime: 'May to June, September to October',
    duration: '4-6 days',
    category: 'Adventure Pilgrimage',
    rating: 4.7,
    reviews: 3050,
    packages: [
      {
        id: 1,
        name: 'Kedarnath Classic Yatra',
        duration: '4 days',
        price: 10000,
        image: '/images/kedarnath.jpg',
      },
      {
        id: 2,
        name: 'Himalayan Trek & Temple Tour',
        duration: '6 days',
        price: 18000,
        image: '/images/himalayan-trail.jpg',
      },
    ],
  },
  {
    id: 4,
    slug: 'tirupati',
    name: 'Tirupati Balaji',
    subTitle: 'Richest temple dedicated to Lord Venkateswara',
    description:
      'Situated on the Tirumala hills, the Tirupati Balaji Temple is the world’s richest Hindu shrine. Pilgrims come from far and wide to seek Lord Venkateswara’s blessings and savor the famous laddu prasadam.',
    image: '/images/tirupati.jpg',
    gallery: [
      '/images/tirupati.jpg',
      '/images/venkateswara.jpg',
      '/images/laddu-prasadam.jpg',
      '/images/tirumala-hills.jpg',
    ],
    highlights: [
      'Sri Venkateswara Temple',
      'Laddu Prasadam',
      'Akasa Ganga',
      'Papavinasam',
    ],
    attractions: [
      {
        name: 'Sri Venkateswara Temple',
        description:
          'Grand temple dedicated to Lord Venkateswara with daily rituals',
        image: '/images/venkateswara.jpg',
        timing: '4:00 AM – 10:00 PM',
      },
      {
        name: 'Akasa Ganga',
        description: 'Pure spring water believed to cleanse sins of pilgrims',
        image: '/images/akasa-ganga.jpg',
        timing: '6:00 AM – 8:00 PM',
      },
      {
        name: 'Papavinasam Theertham',
        description: 'Sacred waterfall where devotees take a holy dip',
        image: '/images/papavinasam.jpg',
        timing: 'Dawn to dusk',
      },
    ],
    bestTime: 'September to February',
    duration: '1-2 days',
    category: 'Pilgrimage',
    rating: 4.8,
    reviews: 4920,
    packages: [
      {
        id: 1,
        name: 'Tirupati Quick Darshan',
        duration: '1 day',
        price: 3000,
        image: '/images/tirupati.jpg',
      },
      {
        id: 2,
        name: 'Tirumala Hills Retreat',
        duration: '3 days',
        price: 12000,
        image: '/images/tirumala-hills.jpg',
      },
    ],
  },
];

export interface TravelPackage {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  gallery: string[];
  duration: string;
  price: number;
  originalPrice: number;
  difficulty: string;
  groupSize: string;
  rating: number;
  reviews: number;
  category: string;
  bestTime: string;
  destinations: string[];
  highlights: string[];
  includes: string[];
  excludes: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string;
    accommodation: string;
  }[];
  bookingInfo: {
    advancePayment: number;
    cancellationPolicy: string;
    lastBookingDate: string;
    documentsRequired: string[];
  };
}

const packagesData: TravelPackage[] = [
  {
    id: 1,
    slug: 'varanasi-spiritual-budget',
    name: 'Varanasi Spiritual Journey - Budget',
    shortDescription: 'Affordable spiritual experience in the holy city',
    longDescription:
      'Discover the ancient spiritual essence of Varanasi with our budget-friendly package. Experience the mesmerizing Ganga Aarti, visit ancient temples, and witness the timeless rituals along the ghats. This package offers comfortable accommodation and authentic local experiences without compromising on the spiritual journey.',
    image: '/images/varanasi.jpg',
    gallery: [
      '/images/varanasi.jpg',
      '/images/ganga-ghat.jpg',
      '/images/vishwanath-temple.jpg',
    ],
    duration: '3 days',
    price: 8000,
    originalPrice: 10000,
    difficulty: 'Easy',
    groupSize: '20-25 people',
    rating: 4.2,
    reviews: 156,
    category: 'Spiritual',
    bestTime: 'October to March',
    destinations: ['Varanasi', 'Sarnath'],
    highlights: [
      'Ganga Aarti ceremony',
      'Kashi Vishwanath Temple',
      'Boat ride at sunrise',
      'Sarnath Buddhist site',
    ],
    includes: [
      '3-star hotel accommodation',
      'Daily breakfast',
      'Local guide',
      'Temple visits',
      'Boat rides',
    ],
    excludes: ['Lunch and dinner', 'Personal expenses', 'Shopping', 'Tips'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Ganga Aarti',
        description: 'Arrival in Varanasi, check-in, evening Ganga Aarti',
        meals: 'Breakfast',
        accommodation: '3-star hotel',
      },
      {
        day: 2,
        title: 'Temple Tour & Sarnath',
        description: 'Kashi Vishwanath, Sankat Mochan, Sarnath excursion',
        meals: 'Breakfast',
        accommodation: '3-star hotel',
      },
      {
        day: 3,
        title: 'Sunrise Boat Ride & Departure',
        description: 'Early morning boat ride, departure',
        meals: 'Breakfast',
        accommodation: 'Check-out',
      },
    ],
    bookingInfo: {
      advancePayment: 2000,
      cancellationPolicy: 'Free cancellation up to 7 days',
      lastBookingDate: '10 days before departure',
      documentsRequired: ['ID Proof'],
    },
  },

  {
    id: 2,
    slug: 'varanasi-spiritual-semi-delux',
    name: 'Varanasi Spiritual Journey - Semi-Deluxe',
    shortDescription: 'Enhanced spiritual experience with better amenities',
    longDescription:
      'Experience Varanasi with enhanced comfort and personalized attention. This semi-deluxe package includes better accommodation, more comprehensive temple tours, and cultural experiences like classical music performances and yoga sessions by the Ganges.',
    image: '/images/varanasi-delux.jpg',
    gallery: [
      '/images/varanasi-delux.jpg',
      '/images/ganga-ghat-premium.jpg',
      '/images/heritage-hotel.jpg',
    ],
    duration: '4 days',
    price: 15000,
    originalPrice: 18000,
    difficulty: 'Easy',
    groupSize: '15-18 people',
    rating: 4.5,
    reviews: 203,
    category: 'Spiritual',
    bestTime: 'October to March',
    destinations: ['Varanasi', 'Sarnath', 'Chunar Fort'],
    highlights: [
      'Private Ganga Aarti viewing',
      'Heritage temple tours',
      'Classical music evening',
      'Yoga by Ganges',
      'Silk weaving workshop',
    ],
    includes: [
      '4-star heritage hotel',
      'All meals',
      'Private guide',
      'AC transportation',
      'Cultural programs',
    ],
    excludes: ['Flight tickets', 'Personal shopping', 'Spa services', 'Tips'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Welcome',
        description: 'Airport pickup, heritage hotel check-in, welcome dinner',
        meals: 'Dinner',
        accommodation: '4-star heritage hotel',
      },
      {
        day: 2,
        title: 'Temple Circuit',
        description:
          'Comprehensive temple tour, evening Ganga Aarti from VIP area',
        meals: 'All meals',
        accommodation: '4-star heritage hotel',
      },
      {
        day: 3,
        title: 'Sarnath & Cultural Evening',
        description: 'Sarnath Buddhist circuit, classical music performance',
        meals: 'All meals',
        accommodation: '4-star heritage hotel',
      },
      {
        day: 4,
        title: 'Yoga & Departure',
        description: 'Morning yoga session, departure',
        meals: 'Breakfast',
        accommodation: 'Check-out',
      },
    ],
    bookingInfo: {
      advancePayment: 5000,
      cancellationPolicy: 'Free cancellation up to 10 days',
      lastBookingDate: '15 days before departure',
      documentsRequired: ['ID Proof', 'Photo'],
    },
  },

  {
    id: 3,
    slug: 'varanasi-spiritual-delux',
    name: 'Varanasi Spiritual Journey - Deluxe',
    shortDescription: 'Premium spiritual experience with luxury amenities',
    longDescription:
      'Immerse yourself in the spiritual grandeur of Varanasi with our deluxe package. Stay in luxury heritage properties, enjoy personalized services, exclusive temple access, private ceremonies, and gourmet dining experiences while exploring the spiritual depths of this ancient city.',
    image: '/images/varanasi-luxury.jpg',
    gallery: [
      '/images/varanasi-luxury.jpg',
      '/images/luxury-ghat.jpg',
      '/images/premium-temple.jpg',
    ],
    duration: '5 days',
    price: 25000,
    originalPrice: 30000,
    difficulty: 'Easy',
    groupSize: '10-12 people',
    rating: 4.7,
    reviews: 89,
    category: 'Spiritual Luxury',
    bestTime: 'October to March',
    destinations: ['Varanasi', 'Sarnath', 'Chunar Fort', 'Ramnagar Fort'],
    highlights: [
      'Luxury palace stay',
      'Private boat ceremonies',
      'Exclusive temple access',
      'Gourmet vegetarian meals',
      'Personal spiritual guide',
      'Helicopter ride',
    ],
    includes: [
      '5-star palace hotel',
      'All gourmet meals',
      'Personal guide',
      'Luxury transportation',
      'Exclusive ceremonies',
      'Helicopter tour',
    ],
    excludes: [
      'Flight tickets',
      'Alcohol',
      'Personal shopping',
      'Spa treatments',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Royal Arrival',
        description:
          'Airport pickup in luxury car, palace check-in, welcome ceremony',
        meals: 'Lunch, Dinner',
        accommodation: '5-star palace hotel',
      },
      {
        day: 2,
        title: 'Sacred Temples',
        description: 'VIP temple tours, exclusive darshan arrangements',
        meals: 'All meals',
        accommodation: '5-star palace hotel',
      },
      {
        day: 3,
        title: 'Buddhist Heritage',
        description:
          'Sarnath with personal historian, private meditation session',
        meals: 'All meals',
        accommodation: '5-star palace hotel',
      },
      {
        day: 4,
        title: 'Royal Excursion',
        description:
          'Ramnagar Fort, private boat ceremony, cultural performance',
        meals: 'All meals',
        accommodation: '5-star palace hotel',
      },
      {
        day: 5,
        title: 'Helicopter Tour & Departure',
        description: 'Aerial view of Varanasi, luxury departure',
        meals: 'Breakfast',
        accommodation: 'Check-out',
      },
    ],
    bookingInfo: {
      advancePayment: 8000,
      cancellationPolicy: 'Flexible cancellation policy',
      lastBookingDate: '20 days before departure',
      documentsRequired: ['ID Proof', 'Photo', 'Medical Certificate'],
    },
  },

  {
    id: 4,
    slug: 'varanasi-spiritual-premium',
    name: 'Varanasi Spiritual Journey - Premium',
    shortDescription: 'Ultra-luxury spiritual experience with bespoke services',
    longDescription:
      'The ultimate spiritual journey in Varanasi with unparalleled luxury and personalized experiences. This premium package offers exclusive access to private ceremonies, meetings with renowned spiritual masters, luxury river cruises, and completely customized itineraries based on your spiritual interests.',
    image: '/images/varanasi-premium.jpg',
    gallery: [
      '/images/varanasi-premium.jpg',
      '/images/premium-cruise.jpg',
      '/images/spiritual-master.jpg',
    ],
    duration: '6 days',
    price: 45000,
    originalPrice: 55000,
    difficulty: 'Easy',
    groupSize: '6-8 people',
    rating: 4.9,
    reviews: 34,
    category: 'Ultra-Luxury Spiritual',
    bestTime: 'October to March',
    destinations: ['Varanasi', 'Sarnath', 'Ayodhya', 'Allahabad'],
    highlights: [
      'Ultra-luxury river palace',
      'Private spiritual master sessions',
      'Customized ceremonies',
      'Michelin-quality dining',
      'Private jet transfers',
      'Exclusive ashram visits',
    ],
    includes: [
      'Ultra-luxury accommodation',
      'All premium meals',
      'Private spiritual guide',
      'Private jet transfers',
      'Exclusive ceremonies',
      'Personal butler service',
    ],
    excludes: [
      'International flights',
      'Personal shopping',
      'Additional spiritual courses',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Elite Arrival',
        description:
          'Private jet pickup, ultra-luxury accommodation, personalized welcome',
        meals: 'All meals',
        accommodation: 'Ultra-luxury river palace',
      },
      {
        day: 2,
        title: 'Spiritual Immersion',
        description:
          'Private meetings with spiritual masters, customized ceremonies',
        meals: 'All meals',
        accommodation: 'Ultra-luxury river palace',
      },
      {
        day: 3,
        title: 'Sacred Geography',
        description: 'Helicopter tour of sacred sites, private ashram visits',
        meals: 'All meals',
        accommodation: 'Ultra-luxury river palace',
      },
      {
        day: 4,
        title: 'Ayodhya Excursion',
        description: 'Private jet to Ayodhya, exclusive temple access',
        meals: 'All meals',
        accommodation: 'Heritage palace in Ayodhya',
      },
      {
        day: 5,
        title: 'Confluence Experience',
        description: 'Allahabad Sangam, private ceremonies at confluence',
        meals: 'All meals',
        accommodation: 'Luxury camp by Ganges',
      },
      {
        day: 6,
        title: 'Transcendent Departure',
        description: 'Final spiritual session, private jet departure',
        meals: 'Breakfast',
        accommodation: 'Check-out',
      },
    ],
    bookingInfo: {
      advancePayment: 15000,
      cancellationPolicy: 'Fully flexible with 48hr notice',
      lastBookingDate: '30 days before departure',
      documentsRequired: [
        'Passport',
        'Medical Certificate',
        'Spiritual Preferences Form',
      ],
    },
  },

  // RISHIKESH PACKAGES
  {
    id: 5,
    slug: 'rishikesh-yoga-budget',
    name: 'Rishikesh Yoga Retreat - Budget',
    shortDescription: 'Affordable yoga and adventure in the Yoga Capital',
    longDescription:
      'Begin your yoga journey in Rishikesh, the world capital of yoga. This budget package offers authentic yoga classes, meditation sessions, and adventure activities like river rafting, all while staying in comfortable ashram-style accommodation.',
    image: '/images/rishikesh.jpg',
    gallery: [
      '/images/rishikesh.jpg',
      '/images/lakshman-jhula.jpg',
      '/images/yoga-class.jpg',
    ],
    duration: '5 days',
    price: 12000,
    originalPrice: 15000,
    difficulty: 'Easy to Moderate',
    groupSize: '15-20 people',
    rating: 4.3,
    reviews: 298,
    category: 'Yoga & Adventure',
    bestTime: 'September to April',
    destinations: ['Rishikesh', 'Haridwar'],
    highlights: [
      'Daily yoga classes',
      'River rafting',
      'Lakshman Jhula visit',
      'Ganga Aarti at Har Ki Pauri',
      'Meditation sessions',
    ],
    includes: [
      'Ashram accommodation',
      'Vegetarian meals',
      'Yoga classes',
      'Rafting activity',
      'Local transport',
    ],
    excludes: [
      'Personal expenses',
      'Additional activities',
      'Shopping',
      'Tips',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Orientation',
        description: 'Arrival, ashram check-in, yoga orientation',
        meals: 'Dinner',
        accommodation: 'Ashram',
      },
      {
        day: 2,
        title: 'Yoga & Temples',
        description: 'Morning yoga, temple visits, evening meditation',
        meals: 'All meals',
        accommodation: 'Ashram',
      },
      {
        day: 3,
        title: 'Adventure Day',
        description: 'River rafting, Lakshman Jhula, Beatles Ashram',
        meals: 'All meals',
        accommodation: 'Ashram',
      },
      {
        day: 4,
        title: 'Haridwar Excursion',
        description: 'Haridwar day trip, Har Ki Pauri Ganga Aarti',
        meals: 'All meals',
        accommodation: 'Ashram',
      },
      {
        day: 5,
        title: 'Final Practice & Departure',
        description: 'Final yoga session, departure',
        meals: 'Breakfast',
        accommodation: 'Check-out',
      },
    ],
    bookingInfo: {
      advancePayment: 3000,
      cancellationPolicy: 'Free cancellation up to 7 days',
      lastBookingDate: '10 days before departure',
      documentsRequired: ['ID Proof'],
    },
  },

  // AMARNATH PACKAGES (Original)
  {
    id: 6,
    slug: 'divine-amarnath-yatra',
    name: 'Divine Amarnath Yatra',
    shortDescription: 'Sacred journey to the ice lingam of Lord Shiva',
    longDescription:
      'Embark on the ultimate spiritual journey to the sacred Amarnath Cave, nestled in the pristine Himalayas of Kashmir. This divine pilgrimage takes you to witness the naturally formed ice lingam of Lord Shiva, where according to Hindu mythology, Lord Shiva revealed the secret of immortality to Mata Parvati.',
    image: '/images/amarnath.jpg',
    gallery: [
      '/images/amarnath.jpg',
      '/images/amarnath-cave.jpg',
      '/images/amarnath-trek.jpg',
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
      'Helicopter ride option available',
      'Experienced local guides',
      'Medical support throughout journey',
    ],
    includes: [
      'Accommodation in camps and hotels',
      'All vegetarian meals',
      'Professional guides',
      'Medical kit and oxygen',
      'Transportation',
      'All permits',
    ],
    excludes: [
      'Flight tickets',
      'Personal expenses',
      'Helicopter rides (optional)',
      'Tips for guides',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jammu',
        description: 'Arrive at Jammu, transfer to hotel, briefing',
        meals: 'Dinner',
        accommodation: 'Hotel in Jammu',
      },
      {
        day: 2,
        title: 'Jammu to Pahalgam',
        description: 'Drive to Pahalgam via Anantnag, check-in, rest',
        meals: 'All meals',
        accommodation: 'Hotel in Pahalgam',
      },
      {
        day: 3,
        title: 'Pahalgam to Chandanwari',
        description: 'Trek begins to Chandanwari, camping',
        meals: 'All meals',
        accommodation: 'Camping',
      },
      {
        day: 4,
        title: 'Chandanwari to Sheshnag',
        description: 'Trek to Sheshnag Lake, overnight camping',
        meals: 'All meals',
        accommodation: 'Camping',
      },
      {
        day: 5,
        title: 'Sheshnag to Panchtarni',
        description: 'Trek via Mahagunas Pass to Panchtarni',
        meals: 'All meals',
        accommodation: 'Camping',
      },
      {
        day: 6,
        title: 'Amarnath Cave Darshan',
        description: 'Early trek to cave, darshan, return',
        meals: 'All meals',
        accommodation: 'Camping',
      },
      {
        day: 7,
        title: 'Return Journey',
        description: 'Return to Jammu, departure',
        meals: 'Breakfast, Lunch',
        accommodation: 'Day use hotel',
      },
    ],
    bookingInfo: {
      advancePayment: 10000,
      cancellationPolicy: 'Cancellation charges apply',
      lastBookingDate: '30 days before departure',
      documentsRequired: ['Aadhar Card', 'Medical Certificate', 'Photos'],
    },
  },

  {
    id: 7,
    slug: 'kedarnath-dham-budget',
    name: 'Kedarnath Dham Yatra - Budget',
    shortDescription: "Sacred pilgrimage to Lord Shiva's abode in Himalayas",
    longDescription:
      'Experience the divine energy of Kedarnath, one of the twelve Jyotirlingas of Lord Shiva. This budget-friendly pilgrimage takes you through the scenic beauty of Uttarakhand to the sacred shrine at 3,583 meters altitude.',
    image: '/images/kedarnath.jpg',
    gallery: [
      '/images/kedarnath.jpg',
      '/images/kedarnath-temple.jpg',
      '/images/himalayan-trek.jpg',
    ],
    duration: '6 days',
    price: 18000,
    originalPrice: 22000,
    difficulty: 'Moderate',
    groupSize: '20-25 people',
    rating: 4.4,
    reviews: 276,
    category: 'Pilgrimage',
    bestTime: 'May to October',
    destinations: ['Haridwar', 'Guptkashi', 'Gaurikund', 'Kedarnath'],
    highlights: [
      'Kedarnath temple darshan',
      'Helicopter option available',
      'Scenic Himalayan trek',
      'Holy dip in Mandakini river',
    ],
    includes: [
      'Basic accommodation',
      'Simple vegetarian meals',
      'Local guide',
      'Basic medical kit',
      'Local transport',
    ],
    excludes: [
      'Flight tickets',
      'Helicopter rides',
      'Personal expenses',
      'Tips',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival Haridwar',
        description: 'Arrive Haridwar, drive to Guptkashi',
        meals: 'Dinner',
        accommodation: 'Simple hotel',
      },
      {
        day: 2,
        title: 'Guptkashi to Gaurikund',
        description: 'Drive to Gaurikund, prepare for trek',
        meals: 'All meals',
        accommodation: 'Basic accommodation',
      },
      {
        day: 3,
        title: 'Trek to Kedarnath',
        description: '16km trek to Kedarnath temple',
        meals: 'All meals',
        accommodation: 'Dormitory/tent',
      },
      {
        day: 4,
        title: 'Kedarnath Darshan',
        description: 'Early morning darshan, explore surroundings',
        meals: 'All meals',
        accommodation: 'Dormitory/tent',
      },
      {
        day: 5,
        title: 'Return to Gaurikund',
        description: 'Trek back to Gaurikund, drive to Guptkashi',
        meals: 'All meals',
        accommodation: 'Simple hotel',
      },
      {
        day: 6,
        title: 'Return to Haridwar',
        description: 'Drive back to Haridwar, departure',
        meals: 'Breakfast',
        accommodation: 'Check-out',
      },
    ],
    bookingInfo: {
      advancePayment: 5000,
      cancellationPolicy: 'Standard cancellation policy',
      lastBookingDate: '15 days before departure',
      documentsRequired: ['ID Proof', 'Medical Fitness Certificate'],
    },
  },

  {
    id: 8,
    slug: 'golden-triangle-premium',
    name: 'Golden Triangle - Premium',
    shortDescription:
      'Luxury tour of Delhi, Agra, and Jaipur with premium amenities',
    longDescription:
      "Discover India's most iconic destinations with unmatched luxury. This premium Golden Triangle tour covers Delhi's heritage, Agra's Taj Mahal, and Jaipur's royal palaces with 5-star accommodations, private guides, and exclusive experiences.",
    image: '/images/taj-mahal.jpg',
    gallery: [
      '/images/taj-mahal.jpg',
      '/images/amber-fort.jpg',
      '/images/red-fort.jpg',
      '/images/hawa-mahal.jpg',
    ],
    duration: '8 days',
    price: 65000,
    originalPrice: 75000,
    difficulty: 'Easy',
    groupSize: '8-10 people',
    rating: 4.9,
    reviews: 189,
    category: 'Heritage Luxury',
    bestTime: 'October to March',
    destinations: ['Delhi', 'Agra', 'Jaipur', 'Fatehpur Sikri'],
    highlights: [
      'Private Taj Mahal sunrise tour',
      '5-star palace hotels',
      'Exclusive cultural performances',
      'Private museum tours',
      'Luxury shopping experiences',
    ],
    includes: [
      '5-star luxury hotels',
      'All gourmet meals',
      'Private AC vehicles',
      'Expert guides',
      'Monument fees',
      'Cultural shows',
    ],
    excludes: [
      'International flights',
      'Visa fees',
      'Personal shopping',
      'Spa treatments',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi Arrival',
        description: 'Airport pickup, luxury hotel check-in, welcome dinner',
        meals: 'Dinner',
        accommodation: '5-star hotel Delhi',
      },
      {
        day: 2,
        title: 'Old & New Delhi',
        description: 'Red Fort, Jama Masjid, India Gate, Qutub Minar',
        meals: 'All meals',
        accommodation: '5-star hotel Delhi',
      },
      {
        day: 3,
        title: 'Delhi to Agra',
        description: 'Drive to Agra, Taj Mahal sunset tour',
        meals: 'All meals',
        accommodation: '5-star hotel Agra',
      },
      {
        day: 4,
        title: 'Agra Exploration',
        description: 'Sunrise Taj Mahal, Agra Fort, Mehtab Bagh',
        meals: 'All meals',
        accommodation: '5-star hotel Agra',
      },
      {
        day: 5,
        title: 'Fatehpur Sikri to Jaipur',
        description: 'Fatehpur Sikri tour, drive to Jaipur',
        meals: 'All meals',
        accommodation: 'Palace hotel Jaipur',
      },
      {
        day: 6,
        title: 'Jaipur City Tour',
        description: 'Amber Fort, City Palace, Hawa Mahal, Jantar Mantar',
        meals: 'All meals',
        accommodation: 'Palace hotel Jaipur',
      },
      {
        day: 7,
        title: 'Jaipur Culture',
        description:
          'Local markets, cultural performance, elephant interaction',
        meals: 'All meals',
        accommodation: 'Palace hotel Jaipur',
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Return to Delhi, airport transfer',
        meals: 'Breakfast',
        accommodation: 'Check-out',
      },
    ],
    bookingInfo: {
      advancePayment: 20000,
      cancellationPolicy: 'Flexible cancellation up to 15 days',
      lastBookingDate: '21 days before departure',
      documentsRequired: ['Passport copy', 'Visa', 'Travel Insurance'],
    },
  },
];

export {
  destinations,
  packagesData,
  destinationResponsiveness,
  packageResponsiveness,
  aboutUsValues,
  ourExperiences,
  testimonials,
};
