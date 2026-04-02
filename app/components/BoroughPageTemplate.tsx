import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import RelatedServices from '@/app/components/RelatedServices';
import FAQSchema from '@/app/components/FAQSchema';
import type { BoroughData } from '@/app/lib/borough-data';
import { HOURLY_RATES, HOURLY_MIN_HOURS, VEHICLE_LABELS } from '@/app/lib/pricing';
import { COMPANY } from '@/app/lib/config';

export default function BoroughPageTemplate({ data }: { data: BoroughData }) {
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-gold-400" />,
      title: 'Local Expertise',
      description: `Intimate knowledge of ${data.name}'s streets, landmarks, and access points.`,
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: 'Punctuality',
      description: 'Always on time, waiting for you at your residence or office lobby.',
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: 'Discretion',
      description: 'NDA available on request. Unmarked vehicles available.',
    },
    {
      icon: <Star className="w-6 h-6 text-gold-400" />,
      title: 'Luxury Fleet',
      description: 'Immaculate Mercedes-Benz, Range Rover, and Rolls-Royce vehicles.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Chauffeur Service ${data.name}`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: 'https://eugenechauffeurs.com/',
      telephone: '+44 7340 801 274',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressRegion: data.name,
        postalCode: data.postcode,
        addressCountry: 'GB',
      },
    },
    areaServed: `${data.name}, London`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: String(HOURLY_RATES.e_class),
      highPrice: String(HOURLY_RATES.rolls_royce),
      availability: 'https://schema.org/InStock',
    },
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Local Service</p>
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
                  {data.contentTitle} <span className="text-gold-400">{data.name}.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  {data.contentParagraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="opacity-80">{feature.icon}</div>
                    <h3 className="text-lg font-italiana text-white">{feature.title}</h3>
                    <p className="text-white/50 font-manrope text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                <Image
                  src="/business.jpg"
                  alt={`Chauffeur Service ${data.name}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                {data.name} <br /> Rates.
              </h2>
              <p className="text-white/60 font-manrope font-light mb-4">
                Hourly hire from {data.name}. Minimum {HOURLY_MIN_HOURS} hours.
              </p>
              <p className="text-white/60 font-manrope font-light mb-8">
                Airport transfers from {data.name} to {data.nearestAirport} also available at fixed rates.
              </p>
              <p className="text-xs text-white/40 font-manrope">Prices subject to VAT where applicable.</p>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-4 border-b border-white/10 text-gold-400 font-italiana text-lg">Vehicle</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Per Hour (from)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Object.entries(HOURLY_RATES) as [string, number][]).map(([key, rate]) => (
                      <tr key={key} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-4 text-white font-manrope">{VEHICLE_LABELS[key as keyof typeof VEHICLE_LABELS]}</td>
                        <td className="py-4 px-4 text-white/60 font-manrope text-right">&pound;{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
      <StickyCTA label={`Get a ${data.name} Quote`} />
    </>
  );
}
