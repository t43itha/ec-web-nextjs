import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Plane, Clock, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import RelatedServices from '@/app/components/RelatedServices';
import { HOURLY_RATES } from '@/app/lib/pricing';
import { COMPANY } from '@/app/lib/config';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Battersea Heliport Chauffeur | Helicopter Transfers | Eugene Chauffeurs',
  description: 'Premium chauffeur service for Battersea Heliport. Seamless helicopter transfer connections to Central London and beyond.',
  alternates: { canonical: '/battersea-heliport-chauffeur' },
};

export default function BatterseaHeliportPage() {
  const features = [
    {
      icon: <Plane className="w-6 h-6 text-gold-400" />,
      title: 'Heliport Specialists',
      description: 'Experienced with Battersea Heliport protocols and the riverside approach roads.',
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: 'Precision Timing',
      description: 'We monitor your helicopter\'s ETA and are waiting at the heliport entrance on arrival.',
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: 'Discretion & Security',
      description: 'NDA available on request. Unmarked vehicles available for high-profile clients.',
    },
    {
      icon: <Star className="w-6 h-6 text-gold-400" />,
      title: 'Luxury Fleet',
      description: 'Range Rover, Mercedes S-Class, and Rolls-Royce Ghost available.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Battersea Heliport Chauffeur',
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: 'https://eugenechauffeurs.com/',
      telephone: '+44 7340 801 274',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Battersea Heliport',
        addressLocality: 'London',
        postalCode: 'SW11 3BE',
        addressCountry: 'GB',
      },
    },
    areaServed: 'Battersea Heliport, London',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: String(HOURLY_RATES.e_class),
      highPrice: String(HOURLY_RATES.rolls_royce),
      availability: 'https://schema.org/InStock',
    },
  };

  const relatedLinks = [
    { title: 'Farnborough Airport', href: '/farnborough-chauffeur', description: 'Private jet transfer service.' },
    { title: 'Chauffeur Battersea', href: '/chauffeur-battersea', description: 'Local Battersea service.' },
    { title: 'Chauffeur Chelsea', href: '/chauffeur-chelsea', description: 'Service across the river.' },
    { title: 'Range Rover', href: '/range-rover-chauffeur', description: 'Commanding presence on arrival.' },
  ];

  return (
    <>
      <LDJson json={jsonLd} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Private Aviation</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Battersea <br />
              <span className="text-white/30">Heliport.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Seamless ground transport for London's premier heliport. From touchdown to your final destination in minutes.
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
                  Riverside <span className="text-gold-400">Arrivals.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    Battersea Heliport is London's only licensed heliport, connecting you to the Home Counties, the coast, and regional airports. Our ground transfer service matches the speed and efficiency of your helicopter journey.
                  </p>
                  <p>
                    Your chauffeur will be waiting at the heliport entrance as you land. From there, it's a direct, comfortable transfer to your hotel, office, or residence — typically within 15-20 minutes to Central London.
                  </p>
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
                  src="/airport svc.png"
                  alt="Battersea Heliport Chauffeur"
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

      <RelatedServices links={relatedLinks} />
      <BookingSection />
      <StickyCTA label="Get a Heliport Quote" />
    </>
  );
}
