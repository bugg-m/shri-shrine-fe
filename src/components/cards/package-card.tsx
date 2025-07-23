import { Card, Image } from '@bugg-m/bugg-ui';
import { Clock, MapPin, ArrowRight, Heart, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';

export interface PackageCardProps {
  id: string;
  title: string;
  destination: string;
  image: string;
  price: number;
  originalPrice?: number;
  duration: string;
  rating: number;
  reviews: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  highlights: string[];
  inclusions: string[];
  badge?: string;
  isPopular?: boolean;
}

const PackageCard: React.FC<{ packageItem: PackageCardProps }> = ({
  packageItem,
}) => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const toggleFavorite = (packageId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(packageId)) {
      newFavorites.delete(packageId);
    } else {
      newFavorites.add(packageId);
    }
    setFavorites(newFavorites);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Challenging':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-secondary-100 text-neutral-800';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller':
        return 'bg-primary-500 text-white';
      case 'Premium':
        return 'bg-purple-500 text-white';
      case 'Family Friendly':
        return 'bg-blue-500 text-white';
      case 'Adventure':
        return 'bg-green-600 text-white';
      default:
        return 'bg-secondary-500 text-white';
    }
  };
  return (
    <Card
      className="group overflow-hidden p-0"
      variant="outlined"
      colorScheme="secondary"
      tone={200}
    >
      {/* Image Container */}
      <section className="relative overflow-hidden">
        <Image
          src={packageItem.image}
          alt={packageItem.title}
          className="h-44 w-full object-fill transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {packageItem.badge && (
            <span
              className={`rounded-full px-2 py-1 text-xs font-semibold ${getBadgeColor(packageItem.badge)}`}
            >
              {packageItem.badge}
            </span>
          )}
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${getDifficultyColor(packageItem.difficulty)}`}
          >
            {packageItem.difficulty}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(packageItem.id)}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur-sm transition-colors hover:bg-white"
        >
          <Heart
            className={`size-5 ${
              favorites.has(packageItem.id)
                ? 'fill-current text-green-500'
                : 'text-neutral-600'
            }`}
          />
        </button>
      </section>

      {/* Content */}
      <main className="space-y-3 p-4">
        {/* Title & Location */}
        <section>
          <h3 className="mb-2 text-lg font-bold text-neutral-700">
            {packageItem.title}
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500">
            <span className="flex">
              <MapPin className="mr-1 size-4" />
              {packageItem.destination}
            </span>
            <span className="flex">
              <Clock className="mr-1 size-3" />
              <span>{packageItem.duration}</span>
            </span>
          </div>
        </section>

        {/* Quick Info */}
        {/* <section className="grid grid-cols-2 text-xs text-neutral-600">
          <div className="flex items-center">
            <Clock className="size-3 mr-1" />
            <span>{packageItem.duration}</span>
          </div>
          <div className="flex items-center">
            <Star className="size-3 mr-1 text-yellow-400 fill-current" />
            <span>
              {packageItem.rating} ({packageItem.reviews})
            </span>
          </div>
        </section> */}

        {/* Highlights */}
        <section>
          <h4 className="text-sm font-semibold text-neutral-700">Highlights</h4>
          <div className="space-y-0.5">
            {packageItem.highlights.map((highlight, index) => (
              <div
                key={index}
                className="ml-2 flex items-center text-xs text-neutral-600"
              >
                <CheckCircle className="mr-2 size-3 text-green-500" />
                {highlight}
              </div>
            ))}
          </div>
        </section>

        {/* Inclusions */}
        <section>
          <h4 className="mb-1 text-sm font-semibold text-neutral-700">
            Includes
          </h4>
          <div className="flex h-12 flex-wrap gap-2">
            {packageItem.inclusions.map((inclusion, index) => (
              <span
                key={index}
                className="flex-center h-4 rounded-sm bg-secondary-100 px-1 text-2xs text-neutral-600"
              >
                {inclusion}
              </span>
            ))}
          </div>
        </section>

        {/* Price & CTA */}
        <section className="flex flex-col items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary-900">
              ₹{packageItem.price.toLocaleString()}
            </span>
            {packageItem.originalPrice && (
              <span className="text-xs text-neutral-500 line-through">
                ₹{packageItem.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-xs text-neutral-500">per person</span>
          </div>

          <button className="flex-center group w-full gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-green-500 py-1 font-semibold text-white transition-all duration-200 hover:from-primary-600 hover:to-green-600">
            Book Now
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </section>
      </main>
    </Card>
  );
};

export default PackageCard;
