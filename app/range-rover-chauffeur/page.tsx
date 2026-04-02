import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Mountain, Wifi, Shield } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Range Rover Chauffeur Hire London | Eugene Chauffeurs',
  description: 'Hire a Range Rover Autobiography with professional chauffeur in London. Commanding presence, luxury interior, and 4x4 capability.',
};

export default function RangeRoverPage() {
  const features = [
    { icon: <Mountain className="w-5 h-5" />, text: "Commanding View" },
    { icon: <Shield className="w-5 h-5" />, text: "Enhanced Privacy" },
    { icon: <Wifi className="w-5 h-5" />, text: "On-board Wi-Fi" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Panoramic Roof" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Range Rover Chauffeur Hire",
    "description": "Luxury chauffeur-driven Range Rover Autobiography for business, events, and airport transfers in London.",
    "brand": {
      "@type": "Brand",
      "name": "Land Rover"
    },
    "offers": {
      "@type": "Offer",
      "price": HOURLY_RATES.range_rover,
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": HOURLY_RATES.range_rover,
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Luxury SUV</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Range <br />
              <span className="text-white/30">Rover.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              The pinnacle of refined capability. Arrive in style with the commanding presence of the Range Rover Autobiography.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-italiana text-white">Commanding Presence</h2>
              <p className="text-white/70 font-manrope font-light text-lg leading-relaxed">
                The Range Rover offers an elevated perspective on the city. With its iconic design, luxurious interior, and smooth ride, it is the perfect choice for those who demand the best.
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
                    <p className="text-3xl font-italiana text-gold-400">£{HOURLY_RATES.range_rover}</p>
                    <p className="text-xs text-white/40 mt-1">Min. {HOURLY_MIN_HOURS} hours</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Day Rate ({DAY_RATE_HOURS}h)</p>
                    <p className="text-3xl font-italiana text-gold-400">£{DAY_RATES.range_rover}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                <Image
                  src="/range-rover.jpg"
                  alt="Range Rover Chauffeur"
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
      <StickyCTA label="Book Range Rover" />
    </>
  );
}