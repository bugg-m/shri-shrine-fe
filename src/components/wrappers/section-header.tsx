import React from 'react';

interface SectionHeaderProps {
  title: string;
  subTitle: string;
  colorTitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subTitle,
  colorTitle,
}) => {
  return (
    <div className="max-w-3xl">
      <h2 className="title text-xl font-semibold md:text-3xl">
        {title}{' '}
        {colorTitle && <span className="text-orange-600">{colorTitle}</span>}
      </h2>
      <p className="paragraph-sm">{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
