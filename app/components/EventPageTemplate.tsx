import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import RelatedServices from '@/app/components/RelatedServices';
import FAQSchema from '@/app/components/FAQSchema';
import type { EventData } from '@/app/lib/event-data';
import { EVENT_PACKAGES } from '@/app/lib/pricing';
import { COMPANY } from '@/app/lib/config';

interface EventPageTemplateProps {
  data: EventData;
}

const EventPageTemplate: React.FC<EventPageTemplateProps> = ({ data }) => {
  const pricing = EVENT_PACKAGES[data.pricingKey];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${data.name} Chauffeur Service`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: 'https://eugenechauffeurs.com/',
      telephone: '+44 7340 801 274',
    },
    areaServed: 'London',
  };

  const faqSchema = data.faqs.map(f => ({ question: f.q, answer: f.a }));

  return (
    <>
      <LDJson json={jsonLd} />
      <FAQSchema faqs={faqSchema} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Event Transport</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              {data.heroTagline} <br />
              <span className="text-white/30">Chauffeur.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              {data.heroDescription}
            </p>
            <div className="mt-6">
              <TfLBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                  {data.contentTitle} <span className="text-gold-400">Luxury.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  {data.contentParagraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Logistics */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-italiana text-white mb-6">Journey Details</h3>
                <div className="space-y-4">
                  {data.logistics.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 font-manrope text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Venue Info */}
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-italiana text-white">{data.venue}</h3>
                    <p className="text-white/50 font-manrope text-sm">{data.venueAddress}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-italiana text-white">Dates</h3>
                    <p className="text-white/50 font-manrope text-sm">{data.dates}</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              {pricing && (
                <div className="p-6 border border-white/10 bg-white/[0.02]">
                  <h3 className="text-xl font-italiana text-white mb-2">{data.name} Packages</h3>
                  <p className="text-white/50 font-manrope text-sm mb-6">{pricing.description}</p>
                  <div className="space-y-3">
                    {Object.entries(pricing.vehicles).map(([key, price]) => {
                      const labels: Record<string, string> = {
                        s_class: 'Mercedes-Benz S-Class',
                        v_class: 'Mercedes-Benz V-Class',
                        range_rover: 'Range Rover',
                        e_class: 'Mercedes-Benz E-Class',
                      };
                      return (
                        <div key={key} className="flex justify-between items-center border-b border-white/5 pb-3">
                          <span className="text-white font-manrope text-sm">{labels[key] || key}</span>
                          <span className="text-gold-400 font-italiana text-lg">&pound;{price}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-xs text-white/40 font-manrope mt-4">Prices subject to VAT where applicable.</p>
                </div>
              )}

              {/* Discretion */}
              <div className="flex items-start space-x-3 p-4 border border-white/10 bg-white/[0.02]">
                <Shield className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-manrope text-sm">Discretion guaranteed</p>
                  <p className="text-white/50 font-manrope text-xs">NDA available on request. Unmarked vehicles available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-italiana text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-italiana text-gold-400">{faq.q}</h3>
                <p className="text-white/60 font-manrope text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices links={data.relatedLinks} />
      <BookingSection />
      <StickyCTA label={`Book ${data.name} Transfer`} />
    </>
  );
};

export default EventPageTemplate;
