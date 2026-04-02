import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Event Chauffeur Birmingham | Eugene Chauffeurs',
  description: 'Luxury event chauffeur service in Birmingham for galas, concerts, and private events.',
};

export default function EventBirminghamPage() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white font-cinzel mb-8">Event Chauffeur Birmingham</h1>
        <p className="text-white/80 font-montserrat">Arrive in style with professional chauffeurs.</p>
      </div>
    </section>
  );
}


