import React from 'react';
import { Heart, Users, MapPin, Shield, Clock, Star } from 'lucide-react';
import SectionWrapper from '@components/wrappers/section-wrapper';
import SectionHeader from '@components/wrappers/section-header';
import { Card } from '@bugg-m/bugg-ui';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Heart className="size-8" />,
      title: 'Transformative Experience',
      description:
        "We don't just offer a tour – we offer a life-changing spiritual journey that touches your soul",
    },
    {
      icon: <MapPin className="size-8" />,
      title: 'Authentic Braj Bhoomi',
      description:
        'Immerse yourself in the authentic soul of Mathura & Vrindavan with local insights and hidden gems',
    },
    {
      icon: <Users className="size-8" />,
      title: 'Expert Local Guides',
      description:
        'Our knowledgeable guides share divine stories and deep spiritual wisdom of each sacred place',
    },
    {
      icon: <Shield className="size-8" />,
      title: '24/7 Support',
      description:
        'Complete peace of mind with round-the-clock assistance throughout your spiritual journey',
    },
    {
      icon: <Clock className="size-8" />,
      title: 'Personalized Care',
      description:
        'Tailored experiences for devotees, seekers, families, and international guests',
    },
    {
      icon: <Star className="size-8" />,
      title: 'Premium Comfort',
      description:
        'Travel in AC comfort and stay in heritage-styled accommodations that enhance your divine experience',
    },
  ];

  return (
    <SectionWrapper className="mt-10">
      <SectionHeader
        title="Why Choose"
        colorTitle="ShriShrine?"
        subTitle="We don't just offer a tour – we offer a transformative experience. Whether you're a devotee, a seeker of peace, or a curious traveler, our carefully crafted spiritual journeys immerse you in the authentic soul of Braj Bhoomi."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            variant="flat"
            hoverAble
            className="card-gradient group border border-primary-100 text-start"
          >
            <div className="mb-1 text-orange-500">{feature.icon}</div>
            <h3 className="mb-2 text-base font-semibold text-neutral-900">
              {feature.title}
            </h3>
            <p className="text-xs leading-relaxed text-neutral-600">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
