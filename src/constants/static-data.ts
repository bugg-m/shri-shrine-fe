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

const packages = [
  {
    title: 'Premium Yatra',
    href: '/packages/premium',
    price: '₹20,000',
    description: 'Comfortable stay, helicopter ride, guided meals',
  },
  {
    title: 'Standard Yatra',
    href: '/packages/standard',
    price: '₹12,000',
    description: 'Base camp stay, trekking support, meals',
  },
  {
    title: 'Budget Yatra',
    href: '/packages/budget',
    price: '₹8,000',
    description: 'Basic accommodation, group trekking',
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

const customResponsive = [
  { breakpoint: 1024, items: 4 },
  { breakpoint: 768, items: 3 },
  { breakpoint: 640, items: 2 },
  { breakpoint: 480, items: 1 },
];

export { destinations, packages, blogs, customResponsive };
