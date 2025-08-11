import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Wedding Chauffeur Service | Eugene Chauffeurs',
  description: 'Luxury wedding chauffeur service with immaculate vehicles and professional drivers.',
};

export default function WeddingChauffeurServicePage() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Wedding Chauffeur Service</h1>
        <p className="text-white/80 font-montserrat">Arrive in style with our luxury wedding chauffeur service.</p>
      </div>
    </section>
  );
}


