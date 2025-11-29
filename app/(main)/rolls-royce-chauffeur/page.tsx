import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Star, Shield, Crown } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Rolls-Royce Chauffeur Hire London | Eugene Chauffeurs',
  description: 'Hire a Rolls-Royce Ghost with professional chauffeur in London. The ultimate symbol of luxury and prestige for weddings and VIP events.',
};

export default function RollsRoycePage() {
  const features = [
    { icon: <Crown className="w-5 h-5" />, text: "Ultimate Luxury" },
    { icon: <Star className="w-5 h-5" />, text: "Starlight Headliner" },
    { icon: <Shield className="w-5 h-5" />, text: "Unmatched Privacy" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Lambswool Carpets" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rolls-Royce Ghost Chauffeur Hire",
    "description": "The pinnacle of automotive luxury. Chauffeur-driven Rolls-Royce Ghost for weddings, red carpet events, and VIP transport in London.",
    "brand": {
      "@type": "Brand",
      "name": "Rolls-Royce"
    },
    "offers": {
      "@type": "Offer",
      "price": HOURLY_RATES.rolls_royce,
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": HOURLY_RATES.rolls_royce,
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">The Pinnacle</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Rolls-Royce <br />
              <span className="text-white/30">Ghost.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Beyond transportation. An experience of pure opulence and serenity. The Rolls-Royce Ghost is the definitive choice for those who accept no compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-italiana text-white">Unrivaled Prestige</h2>
              <p className="text-white/70 font-manrope font-light text-lg leading-relaxed">
                Arrive in a vehicle that needs no introduction. The Rolls-Royce Ghost combines timeless elegance with modern technology, offering a sanctuary of silence and comfort amidst the bustle of London.
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
                    <p className="text-3xl font-italiana text-gold-400">£{HOURLY_RATES.rolls_royce}</p>
                    <p className="text-xs text-white/40 mt-1">Min. {HOURLY_MIN_HOURS} hours</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Day Rate ({DAY_RATE_HOURS}h)</p>
                    <p className="text-3xl font-italiana text-gold-400">£{DAY_RATES.rolls_royce}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                <Image
                  src="/rolls-royce.jpg"
                  alt="Rolls-Royce Ghost Chauffeur"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <StickyCTA label="Book Rolls-Royce" />
    </>
  );
}