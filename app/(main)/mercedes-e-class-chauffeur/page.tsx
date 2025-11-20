import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Briefcase, Wifi, Coffee } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Mercedes E-Class Chauffeur Hire London | Eugene Chauffeurs',
  description: 'Hire a Mercedes-Benz E-Class with professional chauffeur in London. The smart choice for business travel and airport transfers.',
};

export default function EClassPage() {
  const features = [
    { icon: <Briefcase className="w-5 h-5" />, text: "Business Class" },
    { icon: <Wifi className="w-5 h-5" />, text: "On-board Wi-Fi" },
    { icon: <Coffee className="w-5 h-5" />, text: "Bottled Water" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Leather Interior" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mercedes-Benz E-Class Chauffeur Hire",
    "description": "Executive chauffeur-driven Mercedes-Benz E-Class for business meetings and airport transfers in London.",
    "brand": {
      "@type": "Brand",
      "name": "Mercedes-Benz"
    },
    "offers": {
      "@type": "Offer",
      "price": HOURLY_RATES.e_class,
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": HOURLY_RATES.e_class,
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Business Class</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Mercedes <br />
              <span className="text-white/30">E-Class.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              The intelligent choice for executive travel. Combining comfort, style, and efficiency for the modern business traveler.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-italiana text-white">Executive Standard</h2>
              <p className="text-white/70 font-manrope font-light text-lg leading-relaxed">
                The Mercedes-Benz E-Class sets the standard for business class travel. With its refined interior and smooth ride, it provides a productive environment for working on the move or relaxing between meetings.
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
                    <p className="text-3xl font-italiana text-gold-400">£{HOURLY_RATES.e_class}</p>
                    <p className="text-xs text-white/40 mt-1">Min. {HOURLY_MIN_HOURS} hours</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Day Rate ({DAY_RATE_HOURS}h)</p>
                    <p className="text-3xl font-italiana text-gold-400">£{DAY_RATES.e_class}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                {/* Placeholder for E-Class Image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-italiana text-4xl">
                  E-Class Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <StickyCTA label="Book E-Class" />
    </>
  );
}