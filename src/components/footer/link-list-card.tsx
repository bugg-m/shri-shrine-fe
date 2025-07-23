import Link from 'next/link';
import React from 'react';

interface LinkListCardProps {
  title: string;
  linkItems: {
    href: string;
    label: string;
  }[];
  isUpper?: boolean;
}

const LinkListCard: React.FC<LinkListCardProps> = ({
  title,
  linkItems,
  isUpper,
}) => {
  return (
    <div>
      <h4 className="mb-4 text-lg font-semibold text-gray-800">{title}</h4>
      <ul className="space-y-2">
        {linkItems.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              className={`text-sm text-gray-600 transition-colors hover:text-orange-600
                ${isUpper && 'uppercase'}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkListCard;
