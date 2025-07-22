import React from 'react';
import Image from 'next/image';
import SectionWrapper from '@components/wrappers/section-wrapper';
import SectionHeader from '@components/wrappers/section-header';

const OurExperiences: React.FC = () => {
  const experiences = [
    {
      icon: '🛕',
      title: 'Sacred Temple Darshan',
      description:
        'Guided visits to Banke Bihari Ji, Prem Mandir, ISKCON, Dwarkadhish, and other divine abodes',
      image: '/images/bankey-bihari.jpg',
      features: [
        'VIP Darshan Access',
        'Temple History & Stories',
        'Proper Ritual Guidance',
      ],
    },
    {
      icon: '🪔',
      title: 'Yamuna Aarti & Boat Rides',
      description:
        'Experience the divine evening aarti under glowing skies with serene boat journeys',
      image: '/images/yamuna-aarti.jpg',
      features: [
        'Golden Hour Timing',
        'Traditional Aarti Songs',
        'Peaceful River Experience',
      ],
    },
    {
      icon: '🚶‍♂️',
      title: 'Spiritual Parikrama Walks',
      description:
        'Sacred circumambulation paths that awaken devotion and inner stillness',
      image: '/images/parikrama.jpg',
      features: [
        'Govardhan Parikrama',
        'Vrindavan Parikrama',
        'Guided Meditation',
      ],
    },
    {
      icon: '🙏',
      title: 'Saints & Spiritual Leaders',
      description:
        'Meet and receive blessings from authentic local saints and spiritual guides',
      image: '/images/saints.jpg',
      features: ['Personal Blessings', 'Spiritual Discourse', 'Q&A Sessions'],
    },
    {
      icon: '🍽️',
      title: 'Sattvic Meals & Prasad',
      description:
        'Traditional vegetarian meals and blessed prasadam experiences',
      image: '/images/prasad.jpg',
      features: ['Temple Prasad', 'Local Delicacies', 'Pure Vegetarian'],
    },
    {
      icon: '🎉',
      title: 'Festival Celebrations',
      description:
        'Special Janmashtami and Holi celebration tours with authentic local traditions',
      image: '/images/festival.jpg',
      features: [
        'Holi in Barsana',
        'Janmashtami Celebrations',
        'Raas Leela Performances',
      ],
    },
  ];

  return (
    <SectionWrapper>
      <SectionHeader
        title="Our Divine"
        colorTitle="Experiences"
        subTitle="Immerse yourself in authentic spiritual journeys that touch your
            soul and awaken divine consciousness"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Experiences Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 p-2 text-3xl">
                  {experience.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {experience.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600">
                  {experience.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {experience.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="mr-2 size-1.5 rounded-full bg-orange-500"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurExperiences;
