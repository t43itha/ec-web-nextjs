import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Corporate Travel Chauffeur | Eugene Chauffeurs',
  description: 'Executive corporate chauffeur services with discretion and reliability. Priority booking and corporate accounts.',
};

export default function CorporateTravelChauffeurPage() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Corporate Travel Chauffeur</h1>
        <p className="text-white/80 font-montserrat">Professional corporate transport for executives and teams.</p>
      </div>
    </section>
  );
}


