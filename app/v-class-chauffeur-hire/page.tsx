import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Mercedes V-Class Chauffeur Hire | Eugene Chauffeurs',
  description: 'Hire a Mercedes-Benz V-Class (MPV) with chauffeur for groups and families. Spacious and versatile.',
};

export default function VClassChauffeurHirePage() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Mercedes V-Class Chauffeur Hire</h1>
        <p className="text-white/80 font-montserrat">Perfect for group travel with luggage.</p>
      </div>
    </section>
  );
}


