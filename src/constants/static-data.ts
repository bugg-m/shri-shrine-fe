import { PackageCardProps } from '@components/cards/package-card';

const destinations = [
  {
    name: 'Amarnath Yatra',
    href: '/destinations/amarnath',
    image: '/images/amarnath.jpg',
    description:
      'A sacred Himalayan cave temple housing the naturally formed ice Shiva Linga.',
  },
  {
    name: 'Vaishno Devi',
    href: '/destinations/vaishno-devi',
    image: '/images/maa-vaishno-devi.jpg',
    description:
      'Nestled in Trikuta Hills, the shrine is dedicated to Goddess Vaishno Devi.',
  },
  {
    name: 'Vrindavan',
    href: '/destinations/bankey-bihari',
    image: '/images/bankey-bihari.jpg',
    description:
      'A divine town where Lord Krishna spent his childhood, filled with temples and devotion.',
  },
  {
    name: 'Golden Temple',
    href: '/destinations/golden-temple',
    description:
      'The holiest Sikh shrine, known for its golden dome and peaceful atmosphere.',
    image: '/images/golden-temple.jpg',
  },
  {
    name: 'Kedarnath',
    href: '/destinations/kedarnath',
    description:
      'High altitude temple dedicated to Lord Shiva in the Himalayas.',
    image: '/images/kedarnath.jpg',
  },
  {
    name: 'Tirupati',
    href: '/destinations/tirupati',
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

const blogs = [
  {
    title: 'History of Amarnath Yatra',
    href: '/blog/amarnath-history',
    excerpt: 'Explore the rich history of the Amarnath pilgrimage...',
  },
  {
    title: 'Packing Checklist for All Pilgrimages',
    href: '/blog/packing-checklist',
    excerpt: 'Essentials you must carry for a smooth journey...',
  },
  {
    title: 'Spiritual Significance of Indian Temples',
    href: '/blog/spiritual-significance',
    excerpt: 'Understand the deeper meaning behind the yatra...',
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
  blogs,
  destinationResponsiveness,
  packageResponsiveness,
};
