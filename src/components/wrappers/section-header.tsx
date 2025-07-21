import React from 'react';

interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="max-w-3xl">
      <h2 className="title text-xl font-semibold md:text-3xl">{title}</h2>
      <p className="paragraph-sm">{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
