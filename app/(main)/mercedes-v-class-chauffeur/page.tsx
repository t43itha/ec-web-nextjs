import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Users, Wifi, Briefcase } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS, AIRPORT_FARES } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Mercedes V-Class Chauffeur Hire London | Eugene Chauffeurs',
  description: 'Luxury MPV chauffeur service in London. Mercedes-Benz V-Class for group travel, airport transfers, and corporate roadshows. Seats up to 7.',
};

export default function VClassPage() {
  const features = [
    { icon: <Users className="w-5 h-5" />, text: "Seats up to 7" },
    { icon: <Briefcase className="w-5 h-5" />, text: "Large Luggage Capacity" },
    { icon: <Wifi className="w-5 h-5" />, text: "On-board Wi-Fi" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Conference Seating" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mercedes-Benz V-Class Chauffeur Hire",
    "description": "Luxury chauffeur-driven Mercedes-Benz V-Class MPV for group travel, airport transfers, and corporate events in London.",
    "brand": {
      "@type": "Brand",
      "name": "Mercedes-Benz"
    },
    "offers": {
      "@type": "Offer",
      "price": HOURLY_RATES.v_class,
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": HOURLY_RATES.v_class,
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Luxury MPV</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Mercedes <br />
              <span className="text-white/30">V-Class.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Space, style, and versatility. The ultimate luxury people carrier for business groups, families, and airport transfers.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-italiana text-white">Group Travel Redefined</h2>
              <p className="text-white/70 font-manrope font-light text-lg leading-relaxed">
                The Mercedes-Benz V-Class combines the comfort of a luxury saloon with the practicality of an MPV. Perfect for corporate roadshows, airport transfers with extra luggage, or family trips.
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
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Hourly Rate</p>
                    <p className="text-3xl font-italiana text-gold-400">£{HOURLY_RATES.v_class}</p>
                    <p className="text-xs text-white/40 mt-1">Min. {HOURLY_MIN_HOURS} hours</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Day Rate ({DAY_RATE_HOURS}h)</p>
                    <p className="text-3xl font-italiana text-gold-400">£{DAY_RATES.v_class}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Airport Transfers</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/70 font-manrope text-sm">Heathrow</span>
                      <span className="text-gold-400 font-italiana text-lg">£{AIRPORT_FARES.heathrow.v_class}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/70 font-manrope text-sm">Gatwick</span>
                      <span className="text-gold-400 font-italiana text-lg">£{AIRPORT_FARES.gatwick.v_class}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/70 font-manrope text-sm">City</span>
                      <span className="text-gold-400 font-italiana text-lg">£{AIRPORT_FARES.lcy.v_class}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/70 font-manrope text-sm">Stansted</span>
                      <span className="text-gold-400 font-italiana text-lg">£{AIRPORT_FARES.stansted.v_class}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                {/* Placeholder for V-Class Image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-italiana text-4xl">
                  V-Class Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <StickyCTA label="Book V-Class" />
    </>
  );
}