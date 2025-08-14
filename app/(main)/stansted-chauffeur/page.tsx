import React from 'react';
import type { Metadata } from 'next';
import LDJson from '@/app/components/LDJson';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Stansted Chauffeur | Eugene Chauffeurs',
  description: 'Stansted chauffeur transfers with meet & greet, flight tracking, and waiting time. Book your transfer today.',
};

export default function StanstedChauffeurPage() {
  return (
    <>
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Stansted Chauffeur</h1>
          <p className="text-white/80 font-montserrat">Reliable Stansted transfers 24/7.</p>
        </div>
      </section>
      <LDJson json={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Stansted Chauffeur Service', provider: { '@type': 'LocalBusiness', name: 'Eugene Chauffeurs' }, areaServed: 'Stansted' }} />
    </>
  );
}


