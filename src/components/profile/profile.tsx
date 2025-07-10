import React from 'react';
import { Image } from '@bugg-m/bugg-ui';

interface IProfileProps {
  image: string;
  title: string;
}

const Profile: React.FC<IProfileProps> = ({ image, title }) => {
  return (
    <div className="flex-center relative p-5">
      <Image
        src={image}
        alt="yoga"
        className="size-52 rounded-full border-4 border-white object-cover"
      />
      <span
        role="img"
        aria-label="emoji"
        className="absolute -right-14 top-20 block -rotate-12 rounded-full border border-secondary-300 bg-secondary-50 px-3 py-2 font-serif text-xs font-medium text-neutral-700"
      >
        {title}
      </span>
    </div>
  );
};

export default Profile;
