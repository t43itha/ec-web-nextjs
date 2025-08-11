import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import LDJson from '@/app/components/LDJson';

export const revalidate = 86400;

const AIRPORT_META: Record<string, { title: string; description: string; name: string; areaServed: string; ctaLabel: string }>
  = {
    heathrow: {
      title: 'Heathrow Chauffeur | Eugene Chauffeurs',
      description: 'Heathrow chauffeur transfers with meet & greet, flight tracking, and waiting time included. Book your Heathrow transfer today.',
      name: 'Heathrow',
      areaServed: 'Heathrow Airport, London',
      ctaLabel: 'Get a Heathrow Quote',
    },
    gatwick: {
      title: 'Gatwick Chauffeur | Eugene Chauffeurs',
      description: 'Reliable Gatwick chauffeur transfers with meet & greet and flight tracking. Book your Gatwick transfer today.',
      name: 'Gatwick',
      areaServed: 'Gatwick Airport, London',
      ctaLabel: 'Get a Gatwick Quote',
    },
    'london-city-airport': {
      title: 'London City Airport Chauffeur | Eugene Chauffeurs',
      description: 'Executive chauffeur transfers to and from London City Airport. Meet & greet, flight tracking, and waiting time included.',
      name: 'London City Airport',
      areaServed: 'London City Airport (LCY)',
      ctaLabel: 'Get an LCY Quote',
    },
    stansted: {
      title: 'Stansted Chauffeur | Eugene Chauffeurs',
      description: 'Stansted chauffeur transfers with meet & greet, flight tracking, and waiting time. Book your transfer today.',
      name: 'Stansted',
      areaServed: 'Stansted Airport',
      ctaLabel: 'Get a Stansted Quote',
    },
    luton: {
      title: 'Luton Chauffeur | Eugene Chauffeurs',
      description: 'Executive Luton chauffeur transfers with meet & greet and flight tracking. Book your transfer today.',
      name: 'Luton',
      areaServed: 'Luton Airport',
      ctaLabel: 'Get a Luton Quote',
    },
  };

export async function generateStaticParams() {
  return Object.keys(AIRPORT_META).map((airport) => ({ airport }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ airport: string }>;
}): Promise<Metadata | null> {
  const { airport } = await params;
  const meta = AIRPORT_META[airport];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function AirportLandingPage({
  params,
}: {
  params: Promise<{ airport: string }>;
}) {
  const { airport } = await params;
  const meta = AIRPORT_META[airport];
  if (!meta) {
    // Fallback minimal page to avoid runtime error
    return <div className="py-24 text-center text-white">Airport not found</div>;
  }

  return (
    <>
      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-black pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-gold-600/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-cinzel">{meta.name} Chauffeur</h1>
          <p className="mt-6 text-white/80 font-montserrat max-w-3xl mx-auto">{meta.description}</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact#booking" className="inline-flex items-center bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold hover:from-gold-500 hover:to-gold-600">
              {meta.ctaLabel} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white font-cinzel mb-6">What’s Included</h2>
          <div className="space-y-3">
            {[
              'Arrivals-hall meet & greet with nameboard',
              'Real-time flight tracking & pickup adjustments',
              '60 minutes free waiting (arrivals)',
              '15 minutes free (departures & non-airport pickups)',
              'Luggage assistance; child seats on request',
              'Professional chauffeurs; 24/7 support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/90 font-montserrat">
                <CheckCircle className="w-5 h-5 text-gold-400" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LDJson json={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: `${meta.name} Chauffeur Service`,
        provider: { '@type': 'LocalBusiness', name: 'Eugene Chauffeurs' },
        areaServed: meta.areaServed,
      }} />
    </>
  );
}


