'use client';
import React, { useEffect, useState } from 'react';

import LogoIcon from '../logo-component/logo-icon';
import { RouteEnums } from '@enums/route-enums';
import Link from 'next/link';
import { Icon } from '@bugg-m/bugg-ui';
import { close, menu } from '@constants/icons';
import usePathNavigator from '@hooks/useNavigator';
// import { Avatar } from '@bugg-m/bugg-ui';

const Header: React.FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { pathname } = usePathNavigator();
  const menuItems = [
    { href: RouteEnums.HOME, id: 1, label: 'home' },
    // { href: RouteEnums.DESTINATION, id: 2, label: 'Destinations' },
    // { href: RouteEnums.PACKAGES, id: 3, label: 'Packages' },
    // { href: RouteEnums.ITINERARIES, id: 4, label: 'Itineraries' },
    // { href: RouteEnums.BLOG, id: 5, label: 'Blog' },
    // { href: RouteEnums.ABOUT, id: 6, label: 'About Us' },
    // { href: RouteEnums.CONTACT, id: 7, label: 'Contact' },
  ];

  // Initialize scroll state on mount
  const handleInitialScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setIsScrolled(true);
      else setIsScrolled(false);
    };

    handleInitialScroll();

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 ${isScrolled ? 'border-b border-white/20 bg-black/40 backdrop-blur-sm' : ''}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex-between-center mx-auto w-full px-6 py-1 md:px-8 md:py-3">
        <LogoIcon />

        <div className="flex-center gap-1 md:gap-8">
          {/* Desktop Menu */}
          <div className="lg:flex-center hidden gap-5 text-sm font-medium">
            {menuItems.map(({ label, id, href }) => (
              <Link
                key={id}
                href={href}
                className={`hover-scale-105 uppercase hover:text-primary-500 ${
                  pathname === href || pathname.startsWith(href + '/')
                    ? 'text-primary-500'
                    : 'text-neutral-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          {/* <Avatar
            // src={profile}
            status={false}
            size="sm"
            shape="circle"
            className="hover-scale-110 hidden md:block"
          /> */}
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Icon
              onClick={() => setShowMobileNavbar((prev) => !prev)}
              src={showMobileNavbar ? close : menu}
              iconColor="secondary"
              size="md"
            />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {showMobileNavbar && (
        <div className="flex-center flex-col border-t border-neutral-200 bg-neutral-50 lg:hidden">
          {menuItems.map(({ label, id, href }) => (
            <div
              key={id}
              className="flex-center h-10 w-full bg-secondary-50 py-2"
            >
              <Link
                href={href}
                onClick={() => setShowMobileNavbar(false)}
                className="uppercase text-neutral-700 transition-colors"
              >
                {label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
