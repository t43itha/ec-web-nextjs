import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Corporate Event Chauffeur | Eugene Chauffeurs',
  description: 'Coordinated, luxury event chauffeur services for corporate events and conferences.',
};

export default function CorporateEventChauffeurPage() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Corporate Event Chauffeur</h1>
        <p className="text-white/80 font-montserrat">Seamlessly managed event transport with executive fleet.</p>
      </div>
    </section>
  );
}


