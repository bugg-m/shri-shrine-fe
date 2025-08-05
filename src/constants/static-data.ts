import { PackageCardProps } from '@components/cards/package-card';

const packagesData: PackageCardProps[] = [
  {
    id: '1',
    title: 'Divine Amarnath Yatra',
    destination: 'Amarnath Cave',
    image: '/images/amarnath.jpg',
    price: 28999,
    originalPrice: 35999,
    duration: '6 Days',
    rating: 4.9,
    reviews: 234,
    difficulty: 'Challenging',
    highlights: [
      'Helicopter ride',
      'Sacred cave darshan',
      'Professional guide',
    ],
    inclusions: ['Accommodation', 'Meals', 'Transport', 'Permits'],
    badge: 'Best Seller',
    isPopular: true,
  },
  {
    id: '2',
    title: 'Vaishno Devi Yatra',
    destination: 'Vaishno Devi',
    image: '/images/maa-vaishno-devi.jpg',
    price: 15999,
    duration: '4 Days',
    rating: 4.8,
    reviews: 456,
    difficulty: 'Moderate',
    highlights: ['Temple darshan', 'Bhawan visit', 'Aarti participation'],
    inclusions: ['Hotel stay', 'Meals', 'Local transport', 'Guide'],
  },
  {
    id: '3',
    title: 'Bankey Bihari Darshan',
    destination: 'Vrindavan',
    image: '/images/bankey-bihari.jpg',
    price: 12999,
    duration: '5 Days',
    rating: 4.7,
    reviews: 189,
    difficulty: 'Easy',
    highlights: ['Krishna temples', 'Yamuna aarti', 'Cultural programs'],
    inclusions: ['Dharamshala', 'Prasadam', 'Local sightseeing'],
    badge: 'Family Friendly',
  },
  {
    id: '4',
    title: 'Char Dham Darshan',
    destination: 'Uttarakhand',
    image: '/images/char-dham.jpg',
    price: 45999,
    originalPrice: 52999,
    duration: '12 Days',
    rating: 4.9,
    reviews: 98,
    difficulty: 'Challenging',
    highlights: ['All four dhams', 'Helicopter option', 'VIP darshan'],
    inclusions: [
      'Luxury hotels',
      'All meals',
      'AC transport',
      'Medical support',
    ],
    badge: 'Premium',
    isPopular: true,
  },
  {
    id: '5',
    title: 'Tirupati Balaji Darshan',
    destination: 'Tirupati',
    image: '/images/tirupati.jpg',
    price: 8999,
    duration: '3 Days',
    rating: 4.6,
    reviews: 567,
    difficulty: 'Easy',
    highlights: ['Special darshan', 'Prasadam', 'Local temples'],
    inclusions: ['Budget hotels', 'Breakfast', 'Temple transport'],
  },
  {
    id: '6',
    title: 'Kedarnath Trek & Temple',
    destination: 'Kedarnath',
    image: '/images/kedarnath.jpg',
    price: 22999,
    duration: '7 Days',
    rating: 4.8,
    reviews: 145,
    difficulty: 'Challenging',
    highlights: ['Himalayan trek', 'Temple darshan', 'Mountain views'],
    inclusions: ['Trekking gear', 'Guide', 'Meals', 'Accommodation'],
    badge: 'Adventure',
  },
];

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
      'Vrindavan, the sacred land where Lord Krishna spent his divine childhood, is a spiritual paradise that captivates millions of devotees worldwide. Every stone, every tree, and every corner of this holy town resonates with the divine leelas of the Supreme Lord.',
    image: '/images/bankey-bihari.jpg',
    gallery: [
      '/images/bankey-bihari.jpg',
      '/images/vrindavan-temple.jpg',
      '/images/vrindavan-street.jpg',
    ],
    highlights: [
      'Banke Bihari Temple',
      'Prem Mandir',
      'ISKCON Temple',
      'Yamuna Ghat',
    ],
    attractions: [
      {
        name: 'Banke Bihari Temple',
        description: 'Most famous Krishna temple with unique darshan timings',
        image: '/images/bankey-bihari.jpg',
      },
      {
        name: 'Prem Mandir',
        description: 'Stunning white marble temple with light shows',
        image: '/images/prem-mandir.jpg',
      },
    ],
    rating: 4.9,
    bestTime: 'October to March',
    duration: '2-3 days',
    category: 'Pilgrimage',
  },
  {
    id: 2,
    slug: 'mathura',
    name: 'Mathura',
    subTitle: 'Birthplace of Lord Krishna',
    description:
      'Mathura, the sacred birthplace of Lord Krishna, holds immense significance in Hindu mythology and spirituality. This ancient city on the banks of river Yamuna is where the divine child took birth to establish dharma.',
    image: '/images/landing.jpg',
    gallery: ['/images/mathura.jpg', '/images/krishna-janmabhoomi.jpg'],
    highlights: [
      'Krishna Janmabhoomi',
      'Dwarkadhish Temple',
      'Govind Dev Temple',
      'Vishram Ghat',
    ],
    attractions: [
      {
        name: 'Krishna Janmabhoomi',
        description: 'The exact spot where Lord Krishna was born',
        image: '/images/janmabhoomi.jpg',
      },
    ],
    rating: 4.8,
    bestTime: 'October to March',
    duration: '1-2 days',
    category: 'Pilgrimage',
  },
  {
    id: 3,
    slug: 'vaishno-devi',
    name: 'Vaishno Devi',
    subTitle: 'Sacred shrine of Mata Vaishno Devi',
    description:
      "Nestled in the Trikuta Mountains, the holy shrine of Mata Vaishno Devi is one of India's most revered pilgrimage destinations. Millions of devotees undertake this spiritual journey annually.",
    image: '/images/maa-vaishno-devi.jpg',
    gallery: ['/images/maa-vaishno-devi.jpg', '/images/vaishno-cave.jpg'],
    highlights: ['Sacred Cave Temple', '13.5 km Trek', 'Bhavan', 'Ardhkuwari'],
    attractions: [
      {
        name: 'Main Cave Temple',
        description: 'The sacred cave where Mata Vaishno Devi resides',
        image: '/images/vaishno-cave.jpg',
      },
    ],
    rating: 4.9,
    bestTime: 'March to October',
    duration: '2-3 days',
    category: 'Pilgrimage',
  },
  {
    id: 4,
    slug: 'amarnath',
    name: 'Amarnath',
    subTitle: 'Sacred cave shrine of Lord Shiva',
    image: '/images/amarnath.jpg',
    duration: '7 days',
    category: 'Adventure Pilgrimage',
    rating: 4.7,
    highlights: [
      'Ice Lingam',
      'Helicopter Ride',
      'Mountain Trek',
      'Base Camps',
    ],
  },
  {
    id: 5,
    slug: 'tirupati',
    name: 'Tirupati Balaji',
    subTitle: 'Richest temple dedicated to Lord Venkateswara',
    image: '/images/tirupati.jpg',
    duration: '2 days',
    category: 'Pilgrimage',
    rating: 4.8,
    highlights: ['Venkateswara Temple', 'Tirumala Hills', 'Laddu Prasadam'],
  },
  {
    id: 6,
    slug: 'kedarnath',
    name: 'Kedarnath',
    subTitle: 'One of the twelve Jyotirlingas of Lord Shiva',
    image: '/images/kedarnath.jpg',
    duration: '4-5 days',
    category: 'Adventure Pilgrimage',
    rating: 4.6,
    highlights: [
      'Kedarnath Temple',
      'Himalayan Trek',
      'Gaurikund',
      'Mountain Views',
    ],
  },
];

const newPackages = [
  {
    id: 1,
    slug: 'divine-amarnath-yatra',
    name: 'Divine Amarnath Yatra',
    subTitle: 'Sacred journey to the ice lingam of Lord Shiva',
    description:
      'Experience the ultimate spiritual journey to the sacred Amarnath Cave, where Lord Shiva revealed the secret of immortality to Mata Parvati. Witness the naturally formed ice lingam.',
    image: '/images/amarnath.jpg',
    duration: '7 days',
    price: {
      starting: 25000,
      currency: 'INR',
    },
    difficulty: 'Moderate to Difficult',
    groupSize: '15-20 people',
    highlights: [
      'Sacred ice lingam darshan',
      'Helicopter ride option available',
      'Experienced local guides',
      'Medical support throughout journey',
    ],
    includes: [
      'Accommodation in base camps',
      'All meals during trek',
      'Professional guides',
      'Medical kit and oxygen support',
      'Transportation from Jammu',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jammu',
        description: 'Arrive and proceed to base camp',
      },
      {
        day: 2,
        title: 'Journey to Pahalgam',
        description: 'Travel to starting point of yatra',
      },
      {
        day: 3,
        title: 'Trek to Chandanwari',
        description: 'Begin the sacred trek',
      },
    ],
    bestTime: 'July to August',
    category: 'Adventure Pilgrimage',
  },
  {
    id: 2,
    slug: 'mathura-vrindavan-package',
    name: 'Mathura Vrindavan Divine Tour',
    subTitle: "Complete spiritual journey through Krishna's land",
    description:
      'Immerse yourself in the divine atmosphere of Mathura and Vrindavan, walking in the footsteps of Lord Krishna through his birthplace and childhood playground.',
    image: '/images/bankey-bihari.jpg',
    duration: '4 days',
    price: {
      starting: 8000,
      currency: 'INR',
    },
    difficulty: 'Easy',
    groupSize: '10-25 people',
    highlights: [
      'Banke Bihari Temple darshan',
      'Krishna Janmabhoomi visit',
      'Yamuna aarti participation',
      'Local saint meetings',
    ],
    includes: [
      'AC accommodation',
      'All temple entries',
      'Local sightseeing',
      'Sattvic meals',
      'Professional guide',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Mathura',
        description: 'Krishna Janmabhoomi and local temples',
      },
      {
        day: 2,
        title: 'Vrindavan Exploration',
        description: 'Banke Bihari, Prem Mandir, ISKCON',
      },
    ],
    bestTime: 'October to March',
    category: 'Pilgrimage',
  },
];

export {
  destinations,
  newPackages,
  packagesData,
  destinationResponsiveness,
  packageResponsiveness,
  aboutUsValues,
  ourExperiences,
  testimonials,
};
