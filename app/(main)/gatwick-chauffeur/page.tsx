import React from 'react';
import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import LDJson from '@/app/components/LDJson';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Gatwick Chauffeur | Eugene Chauffeurs',
  description: 'Reliable Gatwick chauffeur transfers with meet & greet and flight tracking. Book your Gatwick transfer today.',
};

export default function GatwickChauffeurPage() {
  return (
    <>
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Gatwick Chauffeur</h1>
          <div className="space-y-3">
            {['Meet & greet', 'Flight tracking', 'Luggage assistance', '24/7 service'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/90 font-montserrat">
                <CheckCircle className="w-5 h-5 text-gold-400" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <LDJson json={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Gatwick Chauffeur Service', provider: { '@type': 'LocalBusiness', name: 'Eugene Chauffeurs' }, areaServed: 'Gatwick' }} />
    </>
  );
}


