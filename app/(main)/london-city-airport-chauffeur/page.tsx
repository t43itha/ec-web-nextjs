import React from 'react';
import type { Metadata } from 'next';
import LDJson from '@/app/components/LDJson';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'London City Airport Chauffeur | Eugene Chauffeurs',
  description: 'Executive chauffeur transfers to and from London City Airport. Meet & greet, flight tracking, and waiting time included.',
};

export default function LCYChauffeurPage() {
  return (
    <>
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white font-cinzel mb-8">London City Airport Chauffeur</h1>
          <p className="text-white/80 font-montserrat">Premium LCY transfers with professional chauffeurs.</p>
        </div>
      </section>
      <LDJson json={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'London City Airport Chauffeur Service', provider: { '@type': 'LocalBusiness', name: 'Eugene Chauffeurs' }, areaServed: 'London City Airport' }} />
    </>
  );
}


