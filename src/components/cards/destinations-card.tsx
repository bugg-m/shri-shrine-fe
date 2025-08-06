import { Button, Card, Image } from '@bugg-m/bugg-ui';
import DynamicTags from '@components/ui/tag';
import { destinations } from '@constants/static-data';
import usePathNavigator from '@hooks/useNavigator';
import { ArrowRight, Star } from 'lucide-react';
import React from 'react';

const DestinationsCard = ({
  destination,
}: {
  destination: (typeof destinations)[0];
}) => {
  const { navigateTo } = usePathNavigator();
  return (
    <Card
      className="group overflow-hidden p-0"
      variant="outlined"
      colorScheme="secondary"
      tone={200}
    >
      <section className="relative h-48 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          className="size-full object-fill transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute left-2 top-2">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-neutral-50 backdrop-blur">
            {destination.category}
          </span>
        </div>
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-secondary-100 px-2 py-1 backdrop-blur-sm">
          <Star className="size-3 fill-current text-yellow-500" />
          <span className="text-2xs font-medium text-neutral-700">
            {destination.rating}
          </span>
        </div>
      </section>

      <section className="px-3 py-2">
        <h3 className="text-lg font-bold text-neutral-800">
          {destination.name}
        </h3>
        <p className="mb-2 line-clamp-1 text-sm text-neutral-600">
          {destination.subTitle}
        </p>

        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold text-neutral-700">
            Attractions:
          </p>
          <DynamicTags tags={destination?.highlights} />
        </div>

        <Button
          onClick={() => navigateTo(destination.slug)}
          size="sm"
          rounded="full"
          className="flex items-center justify-center gap-2 text-sm"
        >
          View
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </section>
    </Card>
  );
};

export default DestinationsCard;
