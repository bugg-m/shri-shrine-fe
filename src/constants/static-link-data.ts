import { RouteEnums } from '@enums/route-enums';

const menuItems = [
  { href: RouteEnums.HOME, id: 1, label: 'home' },
  { href: RouteEnums.DESTINATION, id: 2, label: 'Destinations' },
  { href: RouteEnums.PACKAGES, id: 3, label: 'Packages' },
  // { href: RouteEnums.ITINERARIES, id: 4, label: 'Itineraries' },
  // { href: RouteEnums.BLOG, id: 5, label: 'Blog' },
  // { href: RouteEnums.ABOUT, id: 6, label: 'About Us' },
  // { href: RouteEnums.CONTACT, id: 7, label: 'Contact' },
];

const services = [
  { href: '/', label: 'Temple Tours' },
  { href: '/', label: 'Pilgrimage Packages' },
  { href: '/', label: 'Spiritual Retreats' },
  { href: '/', label: 'Custom Tours' },
  { href: '/', label: 'Group Bookings' },
];

const support = [
  { href: '/', label: 'Help Center' },
  { href: '/', label: 'Booking Guide' },
  { href: '/', label: 'Cancellation Policy' },
  { href: '/', label: 'Terms of Service' },
  { href: '/', label: 'Privacy Policy' },
];

export { menuItems, support, services };
