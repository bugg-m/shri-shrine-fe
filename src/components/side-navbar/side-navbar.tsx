'use client';
import React, { useState } from 'react';
import { Button, Icon } from '@bugg-m/bugg-ui';

import { Step } from '@constants/icons';

import { NavItems } from './nav-items';

export interface MenuItem {
  name: string;
  path: string;
  hasChildren?: boolean | false;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: 'home',
    path: '/',
  },
];

const SideNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`navbar-bg text-light relative h-screen px-2 py-5 pt-20 shadow-lg transition-all duration-300 ${
        isOpen ? 'w-48' : 'w-0 -translate-x-10'
      } space-y-2`}
    >
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        tone={600}
        colorScheme="secondary"
        className={`absolute h-16 w-6 rounded-none rounded-r-xl transition-all duration-300 ${
          isOpen ? 'left-48' : 'left-10'
        }`}
      >
        <Icon
          src={Step}
          size="md"
          className={`${
            isOpen ? '' : 'rotate-180'
          } text-neutral-200 transition-transform duration-300`}
        />
      </Button>
      <main className={`${isOpen ? 'translate-x-0' : '-translate-x-32'}`}>
        <NavItems menuItems={menuItems} />
      </main>
    </nav>
  );
};

export default SideNavbar;
