import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Plane, Clock, MapPin, Shield, CheckCircle } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { AIRPORT_FARES } from '@/app/lib/pricing';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Heathrow Chauffeur Service | Eugene Chauffeurs — Meet & Greet, Flight Tracking',
  description: 'Seamless Heathrow transfers with meet & greet, flight tracking, 60 mins free waiting (arrivals) / 15 mins (departures).',
};

export default function HeathrowPage() {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: "Flight Monitoring",
      description: "We track your flight in real-time, adjusting pickup times automatically for delays or early arrivals."
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold-400" />,
      title: "Meet & Greet",
      description: "Your chauffeur awaits in the arrivals hall with a personalized name board, ready to assist with luggage."
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: "Fixed Pricing",
      description: "Transparent, all-inclusive rates with no hidden fees for waiting time (up to 60 mins) or parking."
    },
    {
      icon: <Plane className="w-6 h-6 text-gold-400" />,
      title: "Terminal Expertise",
      description: "Intimate knowledge of all Heathrow terminals (2, 3, 4, & 5) for the most efficient drop-offs and pickups."
    }
  ];

  const faqs = [
    {
      q: "Where will my chauffeur meet me at Heathrow?",
      a: "In the arrivals hall after customs, holding a nameboard."
    },
    {
      q: "What if my flight is delayed or early?",
      a: "We track your flight and adjust pickup automatically. Waiting time policy: 60 minutes free for arrivals (then billed); 15 minutes free for departures."
    },
    {
      q: "How much luggage can you take?",
      a: "S-Class: 2–3 medium cases; V-Class: up to 6 medium cases (or 4 large + 2 carry-ons)."
    },
    {
      q: "Can you add extra stops?",
      a: "Yes—include the stop in your request; extra time/distance may apply."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Heathrow Chauffeur Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Chauffeurs",
      "url": "https://ec-web-nextjs.netlify.app/",
      "telephone": "+44 7340 801 274",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Heathrow Airport",
        "addressLocality": "London",
        "postalCode": "TW6 1AP",
        "addressCountry": "GB"
      },
      "hasCredential": "TfL Operator Licence: 0108860101"
    },
    "areaServed": "Heathrow",
    "termsOfService": "Free waiting time: 60 minutes arrivals / 15 minutes departures & non-airport pick-ups.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "170",
      "highPrice": "300",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <LDJson json={jsonLd} />

      {/* Hero Section - Minimalist Noir */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Airport Transfer</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Heathrow <br />
              <span className="text-white/30">Chauffeur.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              The ultimate in airport luxury. Seamless connections between London and the world's busiest international hub.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Editorial Layout */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                  Effortless <span className="text-gold-400">Arrivals.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    Navigating Heathrow requires precision. Our service transforms the chaos of international travel into a moment of calm. From the moment you land, our team is tracking your progress.
                  </p>
                  <p>
                    Your chauffeur will be waiting in the arrivals hall, ready to take your bags and guide you to your waiting vehicle. No queues, no stress—just a smooth transition to your final destination.
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
                  src="/airport svc.png"
                  alt="Luxury Heathrow Chauffeur Service"
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

      {/* Meeting Point Guide */}
      <section className="py-20 bg-zinc-900 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-italiana text-white mb-12 text-center">Meeting Points</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/50 p-6 border border-white/10">
              <h3 className="text-xl font-italiana text-gold-400 mb-2">Terminal 2</h3>
              <p className="text-white/60 font-manrope text-sm">Wait near the WHSmith in the arrivals hall.</p>
            </div>
            <div className="bg-black/50 p-6 border border-white/10">
              <h3 className="text-xl font-italiana text-gold-400 mb-2">Terminal 3</h3>
              <p className="text-white/60 font-manrope text-sm">Wait in front of the WHSmith / Boots in arrivals.</p>
            </div>
            <div className="bg-black/50 p-6 border border-white/10">
              <h3 className="text-xl font-italiana text-gold-400 mb-2">Terminal 4</h3>
              <p className="text-white/60 font-manrope text-sm">Wait near the Costa Coffee in the arrivals hall.</p>
            </div>
            <div className="bg-black/50 p-6 border border-white/10">
              <h3 className="text-xl font-italiana text-gold-400 mb-2">Terminal 5</h3>
              <p className="text-white/60 font-manrope text-sm">Wait near the Costa Coffee (International) or Giraffe (Domestic).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                Heathrow <br /> Fares.
              </h2>
              <p className="text-white/60 font-manrope font-light mb-8">
                Fixed fares to/from Central London. Includes meet & greet and 60 minutes waiting time.
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
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Fixed Fare (from)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-white font-manrope">Mercedes-Benz S-Class</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{AIRPORT_FARES.heathrow.s_class}</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-white font-manrope">Mercedes-Benz V-Class</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{AIRPORT_FARES.heathrow.v_class}</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-white font-manrope">Range Rover</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{AIRPORT_FARES.heathrow.range_rover}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Standards - Minimalist List */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                The Gold <br /> Standard.
              </h2>
              <p className="text-white/60 font-manrope font-light">
                Every Heathrow transfer includes our signature premium amenities as standard.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "60 Minutes Complimentary Waiting Time",
                  "Flight Tracking Technology",
                  "Meet & Greet Service",
                  "Luggage Assistance",
                  "Bottled Water & WiFi",
                  "Daily Newspapers (on request)",
                  "Child Seats (on request)",
                  "Zero Booking Fees"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 py-4 border-b border-white/5">
                    <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
                    <span className="text-white/80 font-manrope">{item}</span>
                  </div>
                ))}
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

      {/* Booking Section */}
      <BookingSection />
      <StickyCTA label="Get a Heathrow Quote" />
    </>
  );
};
