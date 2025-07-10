'use client';
import { linkedin, mail, message } from '@constants/icons';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@bugg-m/bugg-ui';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: 'https://linkedin.com/yourprofile',
      icon: linkedin,
      alt: 'LinkedIn',
    },
    { href: 'mailto:support@shrishrine.com', icon: mail, alt: 'Email' },
    { href: 'https://m.me/yourpage', icon: message, alt: 'Messenger' },
  ];

  const quickLinks = [
    { href: '/destinations', label: 'Destinations' },
    { href: '/packages', label: 'Packages' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <main className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-3">
        <section className="space-y-2">
          <span className="text-xl font-semibold text-white md:text-2xl">
            ShriShine
          </span>
          <p className="text-xs md:text-sm">
            Plan your spiritual journey across India’s holiest sites.
          </p>
        </section>

        <section>
          <h4 className="mb-2 text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-xs hover:underline md:text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="mb-5">
            <h4 className="mb-2 text-lg font-semibold text-white">
              Contact Us
            </h4>
            <p className="text-xs md:text-sm">
              Email:{' '}
              <Link
                href="mailto:support@shrishrine.com"
                className="hover:underline"
              >
                support@shrishrine.com
              </Link>
            </p>
            <p className="text-xs md:text-sm">
              Phone:{' '}
              <Link href="tel:+919876543210" className="hover:underline">
                +91 98765 43210
              </Link>
            </p>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            {socialLinks.map(({ href, icon, alt }) => (
              <Link
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-full border border-primary-50 hover:bg-primary-50"
                aria-label={alt}
              >
                <Icon src={icon} size="md" iconColor="primary" />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <hr className="w-11/12 border-secondary-100 sm:mx-auto" />
      <div className="py-2 text-center text-sm">
        © {new Date().getFullYear()}{' '}
        <Link href="/" className="text-white hover:underline">
          ShriShrine™
        </Link>
        . All Rights Reserved.
      </div>
    </main>
  );
};

export default Footer;
