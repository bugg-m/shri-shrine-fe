import { cn } from '@bugg-m/bugg-ui';
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <section className={cn('mx-auto max-w-5xl space-y-8', className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
