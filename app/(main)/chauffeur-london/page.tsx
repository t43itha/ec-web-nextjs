import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Clock, Shield, MapPin, CreditCard } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'London Chauffeur Service | Eugene Chauffeurs — On-Time, Discreet, Immaculate',
  description: 'Premium London chauffeur service for business and leisure. Mercedes S-Class & V-Class, meet & greet, flight tracking, 60 mins free waiting (airport arrivals) / 15 mins elsewhere.',
};

export default function ChauffeurLondonPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: "Professional Service",
      description: "Immaculate vehicles and professional chauffeurs in suit & tie."
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold-400" />,
      title: "Door-to-Door",
      description: "Seamless transfers between the City, West End, and all major airports."
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: "Waiting Time",
      description: "60 mins free for airport arrivals, 15 mins for other pickups."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-gold-400" />,
      title: "Secure Payment",
      description: "All major cards accepted and corporate invoicing available."
    }
  ];

  const faqs = [
    {
      q: "What’s the difference between a chauffeur and a taxi?",
      a: "A chauffeur provides pre-booked, premium service with a dedicated driver, executive vehicle, and inclusions like meet & greet and luggage assistance."
    },
    {
      q: "How much waiting time is included?",
      a: "60 minutes free for airport arrivals; 15 minutes free for departures & non-airport pick-ups. Additional time billed at the standard rate."
    },
    {
      q: "Can I book by the hour?",
      a: `Yes—‘as-directed’ service from £${HOURLY_RATES.s_class}/hr (S-Class), £${HOURLY_RATES.v_class}/hr (V-Class), £${HOURLY_RATES.range_rover}/hr (Range Rover) with a ${HOURLY_MIN_HOURS}-hour minimum.`
    },
    {
      q: "Do you provide child seats?",
      a: "Yes, on request at booking (no extra charge). Please specify ages."
    },
    {
      q: "What payment methods do you accept?",
      a: "All major cards and corporate invoicing for approved accounts."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "London Chauffeur Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Chauffeurs",
      "url": "https://ec-web-nextjs.netlify.app/",
      "telephone": "+44 7340 801 274",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 130, Lewisham Tower House, 67-71 Lewisham High Street",
        "addressLocality": "London",
        "postalCode": "SE13 5JX",
        "addressCountry": "GB"
      },
      "hasCredential": "TfL Operator Licence: 0108860101"
    },
    "areaServed": "London, United Kingdom",
    "termsOfService": "Free waiting time: 60 minutes arrivals / 15 minutes departures & non-airport pick-ups.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "165",
      "highPrice": "300",
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Premium Service</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              London <br />
              <span className="text-white/30">Chauffeur.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Arrive composed, depart on schedule. Calm, discreet service for board meetings, hotels, evening engagements, and transfers between the City and the West End.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
                <div className="opacity-80">{feature.icon}</div>
                <h3 className="text-lg font-italiana text-white">{feature.title}</h3>
                <p className="text-white/50 font-manrope text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                Transparent <br /> Pricing.
              </h2>
              <p className="text-white/60 font-manrope font-light mb-8">
                Simple, transparent pricing for hourly or day hire within London. No hidden fees.
              </p>
              <p className="text-xs text-white/40 font-manrope">
                Prices subject to VAT where applicable. Congestion/ULEZ, tolls & parking beyond the free window are passed at cost.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-4 border-b border-white/10 text-gold-400 font-italiana text-lg">Vehicle</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Hourly Rate</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Min. Hours</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Day Rate ({DAY_RATE_HOURS}h)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-white font-manrope">Mercedes-Benz S-Class</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{HOURLY_RATES.s_class}/hr</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">{HOURLY_MIN_HOURS}</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{DAY_RATES.s_class}</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-white font-manrope">Mercedes-Benz V-Class</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{HOURLY_RATES.v_class}/hr</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">{HOURLY_MIN_HOURS}</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{DAY_RATES.v_class}</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-white font-manrope">Range Rover</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{HOURLY_RATES.range_rover}/hr</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">{HOURLY_MIN_HOURS}</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{DAY_RATES.range_rover}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-italiana text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-italiana text-gold-400">{faq.q}</h3>
                <p className="text-white/60 font-manrope text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
      <StickyCTA label="Get a Quote" />
    </>
  );
}
