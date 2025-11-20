import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Users, Wifi, Zap } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Mercedes EQV Electric Chauffeur Hire London | Eugene Chauffeurs',
  description: 'Hire a Mercedes-Benz EQV electric MPV with professional chauffeur in London. Sustainable luxury travel for groups and airport transfers.',
};

export default function EQVPage() {
  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "100% Electric" },
    { icon: <Users className="w-5 h-5" />, text: "Seats up to 6" },
    { icon: <Wifi className="w-5 h-5" />, text: "On-board Wi-Fi" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Zero Emissions" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mercedes-Benz EQV Chauffeur Hire",
    "description": "Sustainable, fully electric chauffeur-driven Mercedes-Benz EQV MPV for eco-conscious group travel in London.",
    "brand": {
      "@type": "Brand",
      "name": "Mercedes-Benz"
    },
    "offers": {
      "@type": "Offer",
      "price": HOURLY_RATES.eqv,
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": HOURLY_RATES.eqv,
        "priceCurrency": "GBP",
        "unitCode": "HUR"
      },
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <LDJson json={jsonLd} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Electric Luxury</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Mercedes <br />
              <span className="text-white/30">EQV.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Sustainable luxury without compromise. The all-electric EQV offers silent, smooth, and emission-free travel for groups.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-italiana text-white">Future of Travel</h2>
              <p className="text-white/70 font-manrope font-light text-lg leading-relaxed">
                Experience the future of chauffeur-driven travel with the Mercedes-Benz EQV. Combining the versatility of the V-Class with advanced electric technology, it delivers a whisper-quiet ride with zero local emissions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-gold-400">
                    {f.icon}
                    <span className="text-white/80 font-manrope text-sm">{f.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-2xl font-italiana text-white mb-4">Rates</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Hourly Rate</p>
                    <p className="text-3xl font-italiana text-gold-400">£{HOURLY_RATES.eqv}</p>
                    <p className="text-xs text-white/40 mt-1">Min. {HOURLY_MIN_HOURS} hours</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Day Rate ({DAY_RATE_HOURS}h)</p>
                    <p className="text-3xl font-italiana text-gold-400">£{DAY_RATES.eqv}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                {/* Placeholder for EQV Image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-italiana text-4xl">
                  EQV Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <StickyCTA label="Book EQV" />
    </>
  );
}