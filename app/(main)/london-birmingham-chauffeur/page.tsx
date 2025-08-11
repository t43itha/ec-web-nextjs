import React from 'react';
import type { Metadata } from 'next';
import LDJson from '@/app/components/LDJson';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'London to Birmingham Chauffeur | Eugene Chauffeurs',
  description: 'Executive chauffeur from London to Birmingham and return. Professional drivers, premium vehicles, fixed pricing.',
};

export default function LondonBirminghamChauffeurPage() {
  return (
    <>
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white font-cinzel mb-8">London ↔ Birmingham Chauffeur</h1>
          <p className="text-white/80 font-montserrat">Discreet, comfortable intercity transfers with fixed pricing.</p>
        </div>
      </section>
      <LDJson json={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Intercity Chauffeur', areaServed: 'London, Birmingham', provider: { '@type': 'LocalBusiness', name: 'Eugene Chauffeurs' } }} />
    </>
  );
}


