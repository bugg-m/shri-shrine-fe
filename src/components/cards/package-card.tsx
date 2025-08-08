import React from 'react';
import { Button, Card, Image } from '@bugg-m/bugg-ui';
import { TravelPackage } from '@constants/static-data';
import {
  Clock,
  MapPin,
  ArrowRight,
  Users,
  Star,
  IndianRupee,
} from 'lucide-react';
import usePathNavigator from '@hooks/useNavigator';
import DynamicTags from '@components/ui/tag';
import { usePathname } from 'next/navigation';

const PackageCard: React.FC<{ packageItem: TravelPackage }> = ({
  packageItem,
}) => {
  const pathname = usePathname();
  const { navigateTo } = usePathNavigator();

  const viewPackageDetails = () => {
    if (pathname === '/') {
      navigateTo(`/packages/${packageItem.slug}`);
    } else {
      navigateTo(packageItem.slug);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Moderate to Difficult':
        return 'bg-orange-100 text-orange-700';
      case 'Difficult':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-neutral-700';
    }
  };

  return (
    <Card
      className="group overflow-hidden p-0"
      variant="outlined"
      colorScheme="secondary"
      tone={200}
    >
      <section className="relative h-48 overflow-hidden">
        <Image
          src={packageItem.image}
          alt={packageItem.name}
          className="size-full object-fill transition-transform duration-300 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 flex flex-col gap-2">
          <span className="rounded-full bg-primary-500 px-2 py-0.5 text-xs font-medium text-white">
            {packageItem.category}
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${getDifficultyColor(packageItem.difficulty)}`}
          >
            {packageItem.difficulty}
          </span>
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
          <Star className="size-4 fill-current text-yellow-500" />
          <span className="text-xs font-medium">{packageItem.rating}</span>
        </div>
      </section>

      <main className="p-4">
        <h3 className="mb-1 line-clamp-1 font-bold leading-5 text-neutral-700">
          {packageItem.name}
        </h3>
        <p className="mb-2 line-clamp-1 text-xs text-neutral-600">
          {packageItem.shortDescription}
        </p>

        {/* Package Details */}
        <section className="mb-3 flex items-center gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            <span>{packageItem.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="size-4" />
            <span>{packageItem.groupSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="size-4" />
            <span>{packageItem.destinations.length} destinations</span>
          </div>
        </section>

        {/* Destinations */}
        <section className="mb-3">
          <p className="mb-2 text-sm text-neutral-500">Destinations:</p>
          <DynamicTags tags={packageItem.destinations} />
        </section>

        <section className="mb-4">
          <h4 className="mb-1 text-sm font-semibold text-neutral-700">
            Includes
          </h4>
          <DynamicTags tags={packageItem.includes} />
        </section>

        {/* Price */}
        <div className="flex-center mb-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center text-2xl font-bold text-primary-600">
              <IndianRupee className="size-5" />
              {packageItem.price.toLocaleString()}
            </span>
            {/* {packageItem.originalPrice > packageItem.price && (
              <span className="flex items-center text-sm text-neutral-500 line-through">
                <IndianRupee className="size-3" />
                {packageItem.originalPrice.toLocaleString()}
              </span>
            )} */}
            <span className="text-xs text-neutral-500">per person</span>
          </div>

          {/* {packageItem.originalPrice > packageItem.price && (
            <div className="text-right">
              <span className="rounded-full bg-primary-50 px-2 py-1 text-2xs text-primary-700">
                Save ₹
                {(
                  packageItem.originalPrice - packageItem.price
                ).toLocaleString()}
              </span>
            </div>
          )} */}
        </div>

        <Button
          onClick={viewPackageDetails}
          className="flex w-full items-center justify-center gap-2 py-3"
        >
          View Package Details
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </main>
    </Card>
  );
};

export default PackageCard;
