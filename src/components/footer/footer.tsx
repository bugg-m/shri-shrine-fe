import React from 'react';
import Link from 'next/link';
import {
  Clock,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
} from 'lucide-react';
import { menuItems, services, support } from '@constants/static-link-data';
import LinkListCard from './link-list-card';

const socialLinks = [
  {
    href: 'https://linkedin.com/company/shrishrine',
    icon: <Linkedin size={20} />,
    alt: 'LinkedIn',
  },
  {
    href: 'mailto:support@shrishrine.com',
    icon: <Mail size={20} />,
    alt: 'Email',
  },
  {
    href: 'https://m.me/shrishrine',
    icon: <MessageCircleMore size={20} />,
    alt: 'Messenger',
  },
];

const Footer: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h3 className="mb-2 text-2xl font-bold text-orange-600">
              ShriShrine
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              Your trusted companion for spiritual journeys across India&apos;s
              most sacred destinations. Experience divine blessings with our
              carefully curated pilgrimage tours and temple visits.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center text-sm text-neutral-600">
              <Mail className="mr-3 size-4 shrink-0 text-orange-500" />
              <Link
                href="mailto:support@shrishrine.com"
                className="transition-colors hover:text-orange-600"
              >
                support@shrishrine.com
              </Link>
            </div>

            <div className="flex items-center text-sm text-neutral-600">
              <Phone className="mr-3 size-4 shrink-0 text-orange-500" />
              <Link
                href="tel:+919876543210"
                className="transition-colors hover:text-orange-600"
              >
                +91 98765 43210
              </Link>
            </div>

            <div className="flex items-start text-sm text-neutral-600">
              <MapPin className="mr-3 mt-0.5 size-4 shrink-0 text-orange-500" />
              <span>
                123 Spiritual Street,
                <br />
                New Delhi - 110001, India
              </span>
            </div>

            <div className="flex items-center text-sm text-neutral-600">
              <Clock className="mr-3 size-4 shrink-0 text-orange-500" />
              <span>24/7 Customer Support</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map(({ href, icon, alt }) => (
              <Link
                key={href}
                href={href}
                className="flex-center size-10 rounded-full bg-white text-neutral-600 shadow-md transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 hover:shadow-lg"
                aria-label={alt}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <LinkListCard title="Quick Links" isUpper linkItems={menuItems} />

        {/* Services */}
        <LinkListCard title="Our Services" linkItems={services} />

        {/* Support Section */}
        <LinkListCard title="Support & Policies" linkItems={support} />
      </div>

      {/* Newsletter Subscription */}
      {/* <div className="mb-8 rounded-lg border border-orange-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h4 className="mb-1 text-lg font-semibold text-neutral-800">
              Stay Connected with Divine Updates
            </h4>
            <p className="text-sm text-neutral-600">
              Get the latest spiritual travel insights, festival dates, and
              exclusive offers.
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 md:w-64"
            />
            <button className="rounded-r-lg bg-orange-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}

      {/* Bottom Bar */}
      <div className="border-t border-orange-200 py-5">
        <div className="flex flex-col items-center justify-between text-sm text-neutral-600 md:flex-row">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()}{' '}
            <Link
              href="/"
              className="font-semibold text-orange-600 transition-colors hover:text-orange-700"
            >
              ShriShrine™
            </Link>
            . All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Made with 🙏 for spiritual seekers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
