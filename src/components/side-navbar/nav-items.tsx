'use client';
import React, { useState } from 'react';
import { Icon } from '@bugg-m/bugg-ui';

import { arrow } from '@constants/icons';

import { MenuItem } from './side-navbar';
import Link from 'next/link';

interface NavItemsProps {
  menuItems: MenuItem[];
  isChild?: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({ menuItems, isChild }) => {
  const [isMenuItemOpen, setIsMenuItemOpen] = useState<{
    id: string;
    isOpen: boolean;
  }>();
  return (
    <section className="flex flex-col space-y-1">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`${isChild ? 'text-xs text-neutral-300' : 'text-neutral-100'}`}
        >
          {item.hasChildren ? (
            <div
              onClick={() => setIsMenuItemOpen({ id: item.name, isOpen: true })}
              className="group flex cursor-pointer items-center gap-1 rounded px-2 py-1 capitalize hover:bg-secondary-100 hover:text-neutral-800"
            >
              <span>{item.name}</span>
              <Icon
                className={`rounded-md text-neutral-50 transition-transform duration-300 hover:bg-secondary-100 group-hover:text-neutral-700 ${
                  isMenuItemOpen?.isOpen && isMenuItemOpen?.id === item.name
                    ? ''
                    : '-rotate-90'
                }`}
                src={arrow}
              />
            </div>
          ) : (
            <Link
              href={item.path}
              className="group flex items-center gap-1 rounded px-2 py-1 capitalize hover:bg-secondary-100 hover:text-neutral-800"
            >
              <span>{item.name}</span>
            </Link>
          )}
          <div
            className={`ml-3 border-l border-secondary-100 pl-1 transition-opacity duration-300 ${
              isMenuItemOpen?.isOpen &&
              isMenuItemOpen?.id === item.name &&
              item.hasChildren &&
              item.children
                ? 'my-1 opacity-100'
                : 'opacity-0'
            }`}
          >
            {isMenuItemOpen?.isOpen &&
              isMenuItemOpen?.id === item.name &&
              item.hasChildren &&
              item.children && (
                <NavItems
                  menuItems={item.children}
                  isChild={item.hasChildren}
                />
              )}
          </div>
        </div>
      ))}
    </section>
  );
};

export { NavItems };
