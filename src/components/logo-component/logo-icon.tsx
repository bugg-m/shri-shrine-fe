import React from 'react';
import { Icon } from '@bugg-m/bugg-ui';

import { logo } from '@constants/icons';
import Link from 'next/link';

const LogoIcon: React.FC = () => {
  return (
    <Link href="/" className="flex-center gap-1">
      <div className="hover-scale-125">
        <Icon src={logo} className="size-6 p-0 md:size-8" />
      </div>
      <span className="mt-2 md:mt-3 text-xl font-semibold text-neutral-50 md:text-2xl">
        ShriShine
      </span>
    </Link>
  );
};

export default LogoIcon;
