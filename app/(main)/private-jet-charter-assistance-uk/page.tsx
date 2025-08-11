import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Private Jet Charter Assistance UK | Eugene Chauffeurs',
  description: 'Ground-side assistance and chauffeur service for private jet charter clients across the UK.',
};

export default function PrivateJetCharterAssistanceUKPage() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Private Jet Charter Assistance UK</h1>
        <p className="text-white/80 font-montserrat">Discreet, coordinated ground transport for private aviation.</p>
      </div>
    </section>
  );
}


