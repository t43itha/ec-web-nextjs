import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Personal Shopping Concierge London | Eugene Chauffeurs',
  description: 'Luxury personal shopping concierge with chauffeur service across London.',
};

export default function PersonalShoppingConciergeLondonPage() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Personal Shopping Concierge London</h1>
        <p className="text-white/80 font-montserrat">Tailored shopping days with dedicated chauffeur and assistance.</p>
      </div>
    </section>
  );
}


