import React from 'react';
import type { Metadata } from 'next';
import { Clock, CheckCircle, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import RelatedServices from '@/app/components/RelatedServices';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS, VEHICLE_LABELS } from '@/app/lib/pricing';
import { COMPANY } from '@/app/lib/config';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Chauffeur Hire by the Hour London | Hourly Car Hire | Eugene Chauffeurs',
  description: 'Hire a chauffeur by the hour in London. Flexible hourly rates from £60/hr. Mercedes S-Class, V-Class, Range Rover, and Rolls-Royce available.',
  alternates: { canonical: '/chauffeur-hire-by-the-hour' },
};

export default function ByTheHourPage() {
  const useCases = [
    'Business meetings across multiple locations',
    'Shopping trips — Harrods, Bond Street, Westfield',
    'Property viewings and house hunting',
    'Day trips — Cotswolds, Brighton, Oxford',
    'Medical appointments with waiting time',
    'Client entertainment and restaurant hopping',
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Hourly Chauffeur Hire London',
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: 'https://eugenechauffeurs.com/',
      telephone: '+44 7340 801 274',
    },
    areaServed: 'London',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: String(HOURLY_RATES.e_class),
      highPrice: String(HOURLY_RATES.rolls_royce),
      availability: 'https://schema.org/InStock',
    },
  };

  const relatedLinks = [
    { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'The flagship executive saloon.' },
    { title: 'Mercedes V-Class', href: '/mercedes-v-class-chauffeur', description: 'Spacious group transport.' },
    { title: 'Chauffeur Mayfair', href: '/chauffeur-mayfair', description: 'Local Mayfair service.' },
    { title: 'Corporate Travel', href: '/corporate-travel-chauffeur', description: 'Dedicated business accounts.' },
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Flexible Service</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              By the <br />
              <span className="text-white/30">Hour.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Your chauffeur, your schedule. Hire by the hour for meetings, shopping, day trips, or any journey that doesn't fit a fixed route.
            </p>
            <div className="mt-6">
              <TfLBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                Hourly <br /> Rates.
              </h2>
              <p className="text-white/60 font-manrope font-light mb-4">
                Minimum booking: {HOURLY_MIN_HOURS} hours. Day rates ({DAY_RATE_HOURS} hours) available at a discount.
              </p>
              <p className="text-white/60 font-manrope font-light mb-8">
                All rates include the chauffeur, vehicle, fuel, and congestion charge.
              </p>
              <p className="text-xs text-white/40 font-manrope">Prices subject to VAT where applicable.</p>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-4 border-b border-white/10 text-gold-400 font-italiana text-lg">Vehicle</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Per Hour</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Day Rate ({DAY_RATE_HOURS}h)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Object.keys(HOURLY_RATES) as Array<keyof typeof HOURLY_RATES>).map(key => (
                      <tr key={key} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-4 text-white font-manrope">{VEHICLE_LABELS[key]}</td>
                        <td className="py-4 px-4 text-white/60 font-manrope text-right">&pound;{HOURLY_RATES[key]}</td>
                        <td className="py-4 px-4 text-white/60 font-manrope text-right">&pound;{DAY_RATES[key]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-italiana text-white mb-12 text-center">Common Use Cases</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 font-manrope text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discretion */}
      <section className="py-12 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-5 h-5 text-gold-400" />
            <p className="text-white/60 font-manrope text-sm">Discretion guaranteed — NDA available on request. Unmarked vehicles available.</p>
          </div>
        </div>
      </section>

      <RelatedServices links={relatedLinks} />
      <BookingSection />
      <StickyCTA label="Get an Hourly Quote" />
    </>
  );
}
