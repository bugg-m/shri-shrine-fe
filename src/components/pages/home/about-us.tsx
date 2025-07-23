import { Card, Image } from '@bugg-m/bugg-ui';
import FloatingParticlesEffect from '@components/effects/floating-particle-effect';
import SectionWrapper from '@components/wrappers/section-wrapper';
import { aboutUsValues } from '@constants/static-data';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="py-5 text-center">
        <blockquote className="mb-4 text-xl font-medium italic text-neutral-800 md:text-2xl">
          &quot;हरे कृष्णा हरे कृष्णा, कृष्णा कृष्णा हरे हरे &quot;
        </blockquote>
      </div>
      <div className="grid items-center gap-6 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">
              Our Sacred <span className="text-orange-600">Mission</span>
            </h2>
            <p className="paragraph-sm mb-2">
              Born from a deep love for Lord Krishna and the sacred lands of
              Mathura-Vrindavan, Divine Journey began as a calling to share the
              profound spiritual essence of Braj Bhoomi with souls seeking
              divine connection.
            </p>
            <p className="paragraph-sm">
              We are not just tour operators – we are devoted servants committed
              to creating transformative experiences where every temple visit,
              every aarti, and every step of parikrama becomes a gateway to
              inner awakening.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {aboutUsValues.map((value) => (
              <Card
                key={value.title}
                hoverAble
                variant="flat"
                className="card-gradient border border-primary-100 text-start"
              >
                <span className="mb-1 text-sm font-semibold text-secondary-800">
                  {value.title}
                </span>
                <p className="text-xs text-secondary-600">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative z-10 rounded-md bg-black/5 hover:bg-black/10">
          <div className="absolute right-8 top-16 size-40 rounded-full bg-yellow-400/50 blur-xl"></div>
          <FloatingParticlesEffect />
          <Image
            src="/illustrations/krishna.svg"
            alt="Beautiful temple in Mathura-Vrindavan"
            className="size-full -scale-x-100 object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
