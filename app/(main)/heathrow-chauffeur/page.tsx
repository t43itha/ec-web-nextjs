import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import LDJson from '@/app/components/LDJson';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Heathrow Chauffeur | Eugene Chauffeurs',
  description: 'Heathrow chauffeur transfers with meet & greet, flight tracking, and waiting time included. Book your Heathrow transfer today.',
};

export default function HeathrowChauffeurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Heathrow Chauffeur Transfer',
            areaServed: 'Heathrow Airport, London',
            provider: { '@type': 'LocalBusiness', name: 'Eugene Chauffeurs' },
            hasFAQPage: true,
          }),
        }}
      />
      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-black pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-gold-600/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-cinzel">Heathrow Chauffeur</h1>
          <p className="mt-6 text-white/80 font-montserrat max-w-3xl mx-auto">
            Seamless Heathrow transfers with professional meet & greet, flight tracking, and waiting time included.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact#booking" className="inline-flex items-center bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold hover:from-gold-500 hover:to-gold-600">
              Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white font-cinzel mb-6">What’s Included</h2>
          <div className="space-y-3">
            {['Meet & greet in arrivals', 'Real-time flight tracking', '60 minutes free waiting time', 'Luggage assistance'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/90 font-montserrat">
                <CheckCircle className="w-5 h-5 text-gold-400" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <LDJson json={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Heathrow Chauffeur Service', provider: { '@type': 'LocalBusiness', name: 'Eugene Chauffeurs' }, areaServed: 'Heathrow' }} />
    </>
  );
}


