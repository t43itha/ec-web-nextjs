import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Clock, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Chauffeur Service Kensington | Luxury Car Hire London W8',
  description: 'Premium chauffeur service in Kensington. S-Class & V-Class hire for Kensington High Street, Holland Park, and private residences in W8. Discreet, professional, and punctual.',
};

export default function KensingtonPage() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-gold-400" />,
      title: "Local Expertise",
      description: "Intimate knowledge of Kensington's museums, parks, and private residences."
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: "Punctuality",
      description: "Always on time, waiting for you at your residence or hotel lobby."
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: "Discretion",
      description: "Professional chauffeurs who understand the importance of privacy."
    },
    {
      icon: <Star className="w-6 h-6 text-gold-400" />,
      title: "Luxury Fleet",
      description: "Immaculate Mercedes-Benz and Range Rover vehicles."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Chauffeur Service Kensington",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Chauffeurs",
      "url": "https://ec-web-nextjs.netlify.app/",
      "telephone": "+44 7340 801 274",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "Kensington",
        "postalCode": "W8",
        "addressCountry": "GB"
      }
    },
    "areaServed": "Kensington, London",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "80",
      "highPrice": "100",
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Local Service</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Kensington <br />
              <span className="text-white/30">Chauffeur.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              The definitive luxury car service for London's royal borough. Serving Kensington Palace Gardens, Holland Park, and private residences in W8.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                  At Home in <span className="text-gold-400">Kensington.</span>
                </h2>
                
                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    Kensington demands a level of service that goes beyond the ordinary. Our chauffeurs are well-versed in the etiquette and expectations of W8's residents and visitors.
                  </p>
                  <p>
                    Whether you require a shopping trip to Kensington High Street, a dinner transfer to a local restaurant, or an airport transfer from your residence, we provide a seamless, stress-free experience.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="opacity-80">{feature.icon}</div>
                    <h3 className="text-lg font-italiana text-white">{feature.title}</h3>
                    <p className="text-white/50 font-manrope text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                <Image
                  src="/business.jpg"
                  alt="Chauffeur Service Kensington"
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
      <StickyCTA label="Get a Kensington Quote" />
    </>
  );
}