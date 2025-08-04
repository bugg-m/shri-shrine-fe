// import Link from 'next/link';
import React from 'react';
import { Button, Card, Image } from '@bugg-m/bugg-ui';
import SliderCarousel from '@components/carousel/slider-carousel';
import SectionHeader from '@components/wrappers/section-header';
import SectionWrapper from '@components/wrappers/section-wrapper';
import {
  destinationResponsiveness,
  destinations,
} from '@constants/static-data';
import usePathNavigator from '@hooks/useNavigator';
import { RouteEnums } from '@enums/route-enums';

const Destinations = () => {
  const { navigateTo } = usePathNavigator();
  const renderCard = (dest: (typeof destinations)[0]) => (
    <Card
      key={dest.name}
      className="relative h-96 rounded-lg p-1"
      variant="outlined"
      colorScheme="secondary"
      tone={200}
    >
      <Image
        size="full"
        rounded="md"
        src={dest.image}
        alt={dest.name}
        className="size-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <span className="text-xl font-bold">{dest.name}</span>
        <p className="text-sm text-neutral-100">{dest.description}</p>
        {/* <Link
          href={dest.href}
          className="mt-2 inline-block text-xs text-primary-500 underline hover:text-primary-400"
        >
          Explore →
        </Link> */}
      </div>
    </Card>
  );

  return (
    <SectionWrapper>
      <SectionHeader
        title="Sacred Pilgrimage"
        colorTitle="Destinations"
        subTitle="Experience the divinity and culture of India through pilgrimages to
          some of the most revered shrines and temples spread across the nation."
      />

      <SliderCarousel
        data={destinations}
        renderItem={renderCard}
        responsive={destinationResponsiveness}
      />
      <div className="w-full text-center">
        <Button
          rounded="full"
          onClick={() => navigateTo(RouteEnums.DESTINATION)}
        >
          View all
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Destinations;
