import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Star, Wifi, Coffee } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS, AIRPORT_FARES } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Mercedes S-Class Chauffeur London | Eugene Chauffeurs',
  description: 'Hire a Mercedes-Benz S-Class with professional chauffeur in London. The ultimate in luxury, comfort, and style for business and leisure.',
};

export default function SClassPage() {
  const features = [
    { icon: <Wifi className="w-5 h-5" />, text: "On-board Wi-Fi" },
    { icon: <Coffee className="w-5 h-5" />, text: "Bottled Water" },
    { icon: <Star className="w-5 h-5" />, text: "Nappa Leather Seats" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Rear Climate Control" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mercedes-Benz S-Class Chauffeur Hire",
    "description": "Luxury chauffeur-driven Mercedes-Benz S-Class for business meetings, airport transfers, and special events in London.",
    "brand": {
      "@type": "Brand",
      "name": "Mercedes-Benz"
    },
    "offers": {
      "@type": "Offer",
      "price": HOURLY_RATES.s_class,
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": HOURLY_RATES.s_class,
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">The Flagship</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Mercedes <br />
              <span className="text-white/30">S-Class.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              The definitive luxury saloon. Unrivaled comfort, advanced technology, and a presence that commands respect.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-italiana text-white">First Class Travel</h2>
              <p className="text-white/70 font-manrope font-light text-lg leading-relaxed">
                The Mercedes-Benz S-Class is the benchmark for luxury travel. Whether you are heading to a crucial board meeting or a red-carpet event, the S-Class delivers a serene, comfortable, and stylish journey.
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
                    <p className="text-3xl font-italiana text-gold-400">£{HOURLY_RATES.s_class}</p>
                    <p className="text-xs text-white/40 mt-1">Min. {HOURLY_MIN_HOURS} hours</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Day Rate ({DAY_RATE_HOURS}h)</p>
                    <p className="text-3xl font-italiana text-gold-400">£{DAY_RATES.s_class}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Airport Transfers</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/70 font-manrope text-sm">Heathrow</span>
                      <span className="text-gold-400 font-italiana text-lg">£{AIRPORT_FARES.heathrow.s_class}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/70 font-manrope text-sm">Gatwick</span>
                      <span className="text-gold-400 font-italiana text-lg">£{AIRPORT_FARES.gatwick.s_class}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/70 font-manrope text-sm">City</span>
                      <span className="text-gold-400 font-italiana text-lg">£{AIRPORT_FARES.lcy.s_class}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/70 font-manrope text-sm">Stansted</span>
                      <span className="text-gold-400 font-italiana text-lg">£{AIRPORT_FARES.stansted.s_class}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                <Image
                  src="/s-class.jpg"
                  alt="Mercedes-Benz S-Class Chauffeur"
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
      <StickyCTA label="Book S-Class" />
    </>
  );
}
