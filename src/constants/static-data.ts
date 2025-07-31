import { PackageCardProps } from '@components/cards/package-card';

const destinations = [
  {
    name: 'Amarnath Yatra',
    href: '',
    image: '/images/amarnath.jpg',
    description:
      'A sacred Himalayan cave temple housing the naturally formed ice Shiva Linga.',
  },
  {
    name: 'Vaishno Devi',
    href: '',
    image: '/images/maa-vaishno-devi.jpg',
    description:
      'Nestled in Trikuta Hills, the shrine is dedicated to Goddess Vaishno Devi.',
  },
  {
    name: 'Vrindavan',
    href: '',
    image: '/images/bankey-bihari.jpg',
    description:
      'A divine town where Lord Krishna spent his childhood, filled with temples and devotion.',
  },
  {
    name: 'Golden Temple',
    href: '',
    description:
      'The holiest Sikh shrine, known for its golden dome and peaceful atmosphere.',
    image: '/images/golden-temple.jpg',
  },
  {
    name: 'Kedarnath',
    href: '',
    description:
      'High altitude temple dedicated to Lord Shiva in the Himalayas.',
    image: '/images/kedarnath.jpg',
  },
  {
    name: 'Tirupati',
    href: '',
    description:
      'Famous temple of Lord Venkateswara, one of the richest temples in the world.',
    image: '/images/tirupati.jpg',
  },
];

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

export {
  destinations,
  packagesData,
  destinationResponsiveness,
  packageResponsiveness,
  aboutUsValues,
  ourExperiences,
  testimonials,
};
