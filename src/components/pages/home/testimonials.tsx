import React from 'react';
import { Star, Quote } from 'lucide-react';
import SectionWrapper from '@components/wrappers/section-wrapper';
import SectionHeader from '@components/wrappers/section-header';
import { Card } from '@bugg-m/bugg-ui';
import { testimonials } from '@constants/static-data';

const Testimonials: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Blessed"
        colorTitle="Testimonials"
        subTitle="Hear from fellow devotees who experienced divine journeys with us"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-primary-100"
              variant="flat"
              hoverAble
            >
              <div className="mb-4 flex items-start">
                <Quote className="mr-3 size-8 shrink-0 text-primary-400" />
                <div className="flex-1">
                  <div className="mb-2 flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary-400 text-primary-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700">
                    &quot; {testimonial.text} &quot;
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-primary-900">
                          {testimonial.package}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
