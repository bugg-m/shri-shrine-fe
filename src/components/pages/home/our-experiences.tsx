import React from 'react';
import Image from 'next/image';
import SectionWrapper from '@components/wrappers/section-wrapper';
import SectionHeader from '@components/wrappers/section-header';
import { Card } from '@bugg-m/bugg-ui';
import { ourExperiences } from '@constants/static-data';

const OurExperiences: React.FC = () => {
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
          {ourExperiences.map((experience, index) => (
            <Card
              key={index}
              variant="outlined"
              colorScheme="secondary"
              tone={200}
              className="group overflow-hidden p-0"
            >
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

              <div className="p-3">
                <h3 className="mb-1 text-lg font-semibold text-neutral-700">
                  {experience.title}
                </h3>
                <p className="mb-1 text-sm leading-relaxed text-neutral-600">
                  {experience.description}
                </p>

                {/* Features */}
                <div className="ml-2 space-y-1">
                  {experience.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-xs text-neutral-700"
                    >
                      <div className="mr-2 size-1.5 rounded-full bg-orange-500"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurExperiences;
