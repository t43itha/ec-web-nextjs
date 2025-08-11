import React from 'react';
import type { Metadata } from 'next';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Luton Chauffeur | Eugene Chauffeurs',
  description: 'Executive Luton chauffeur transfers with meet & greet and flight tracking. Book your transfer today.',
};

export default function LutonChauffeurPage() {
  return (
    <>
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Luton Chauffeur</h1>
          <p className="text-white/80 font-montserrat">Professional Luton transfers 24/7.</p>
        </div>
      </section>
      <LDJson json={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Luton Chauffeur Service', provider: { '@type': 'LocalBusiness', name: 'Eugene Chauffeurs' }, areaServed: 'Luton' }} />
      <StickyCTA label="Get a Luton Quote" />
    </>
  );
}


