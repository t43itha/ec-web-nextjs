import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Business Chauffeur London | Eugene Chauffeurs',
  description: 'Executive business chauffeur services in London for meetings, roadshows, and corporate hospitality.',
};

export default function BusinessLondonPage() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Business Chauffeur London</h1>
        <p className="text-white/80 font-montserrat">Dependable, discreet transport for professionals.</p>
      </div>
    </section>
  );
}


