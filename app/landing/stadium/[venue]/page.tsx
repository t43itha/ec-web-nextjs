import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, ArrowRight, Phone } from 'lucide-react';
import { generateStadiumMetadata, getAllStadiums, stadiums } from '@/app/lib/landing-data';
import { notFound } from 'next/navigation';

// Enable ISR (24h)
export const revalidate = 60 * 60 * 24;

export async function generateStaticParams() {
  return getAllStadiums();
}

export async function generateMetadata({
  params,
}: {
  params: { venue: string };
}): Promise<Metadata | null> {
  const metadata = generateStadiumMetadata(params.venue);
  return metadata || {};
}

export default async function StadiumLandingPage({
  params,
}: {
  params: { venue: string };
}) {
  const { venue } = params;
  const stadium = stadiums[venue as keyof typeof stadiums];

  if (!stadium) {
    notFound();
  }

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-gold-600/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-cinzel">
            Chauffeur Service to <span className="text-gradient-gold">{stadium.name}</span>
          </h1>
          <p className="mt-6 text-white/80 font-montserrat max-w-2xl mx-auto">
            {stadium.transport_tips}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="tel:+447340801274"
              className="inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +44 7340 801 274
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-zinc-800 text-white px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-zinc-700 transition-all duration-300 border border-gold-500/20"
            >
              Book Online
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-cinzel">About the Stadium</h2>
            <div className="space-y-2 text-white/80 font-montserrat">
              <p><strong className="text-white">Team:</strong> {stadium.team}</p>
              <p><strong className="text-white">Capacity:</strong> {stadium.capacity}</p>
              <p className="flex items-start gap-2"><MapPin className="w-5 h-5 text-gold-400 mt-0.5" />{stadium.address}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-cinzel mb-3">Nearby Areas</h3>
              <div className="flex flex-wrap gap-2">
                {stadium.nearby_areas.map((area) => (
                  <span key={area} className="px-3 py-1 rounded-full bg-zinc-900/60 border border-gold-500/20 text-white/80 font-montserrat text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-cinzel mb-3">Events We Cover</h3>
              <div className="flex flex-wrap gap-2">
                {stadium.events.map((event) => (
                  <span key={event} className="px-3 py-1 rounded-full bg-zinc-900/60 border border-gold-500/20 text-white/80 font-montserrat text-sm">
                    {event}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-white/60">
              <Clock className="w-5 h-5" />
              <span className="font-montserrat">Available 24/7 • Instant Confirmation</span>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            {stadium.image && (
              <Image
                src={stadium.image}
                alt={`${stadium.name} crest`}
                fill
                className="object-contain bg-gradient-to-br from-zinc-900 to-black p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}


