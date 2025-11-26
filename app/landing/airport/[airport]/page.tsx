import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Plane, Clock, MapPin, Shield } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { AIRPORT_FARES } from '@/app/lib/pricing';

export const revalidate = 86400;

type AirportKey = 'heathrow' | 'gatwick' | 'luton' | 'stansted' | 'london-city-airport';

interface AirportData {
  title: string;
  description: string;
  name: string;
  subtitle: string;
  heroText: string;
  introTitle: string;
  introText: string[];
  meetingPoints: { terminal: string; location: string }[];
  faqs: { q: string; a: string }[];
  pricingKey: keyof typeof AIRPORT_FARES;
  areaServed: string;
  canonicalPath: string;
}

const AIRPORT_CONTENT: Record<AirportKey, AirportData> = {
  heathrow: {
    title: 'Heathrow Chauffeur Service | Eugene Chauffeurs',
    description: 'Seamless Heathrow transfers with meet & greet, flight tracking, and luxury vehicles.',
    name: 'Heathrow',
    subtitle: 'Chauffeur.',
    heroText: "The ultimate in airport luxury. Seamless connections between London and the world's busiest international hub.",
    introTitle: 'Effortless Arrivals.',
    introText: [
      "Navigating Heathrow requires precision. Our service transforms the chaos of international travel into a moment of calm. From the moment you land, our team is tracking your progress.",
      "Your chauffeur will be waiting in the arrivals hall, ready to take your bags and guide you to your waiting vehicle. No queues, no stress—just a smooth transition to your final destination."
    ],
    meetingPoints: [
      { terminal: 'Terminal 2', location: 'Wait near the WHSmith in the arrivals hall.' },
      { terminal: 'Terminal 3', location: 'Wait in front of the WHSmith / Boots in arrivals.' },
      { terminal: 'Terminal 4', location: 'Wait near the Costa Coffee in the arrivals hall.' },
      { terminal: 'Terminal 5', location: 'Wait near the Costa Coffee (International) or Giraffe (Domestic).' },
    ],
    faqs: [
      { q: "Where will my chauffeur meet me?", a: "In the arrivals hall after customs, holding a nameboard." },
      { q: "What if my flight is delayed?", a: "We track your flight and adjust pickup automatically. 60 mins free waiting included." },
    ],
    pricingKey: 'heathrow',
    areaServed: 'Heathrow Airport, London',
    canonicalPath: '/heathrow-chauffeur'
  },
  gatwick: {
    title: 'Gatwick Chauffeur Service | Eugene Chauffeurs',
    description: 'Premium Gatwick transfers with meet & greet, flight tracking, and luxury vehicles.',
    name: 'Gatwick',
    subtitle: 'Chauffeur.',
    heroText: "Premium Gatwick transfers with meet & greet, flight tracking, and luxury vehicles for a seamless journey.",
    introTitle: 'Effortless Arrivals.',
    introText: [
      "Navigating Gatwick requires precision. Our service transforms the chaos of international travel into a moment of calm. From the moment you land, our team is tracking your progress.",
      "Your chauffeur will be waiting in the arrivals hall, ready to take your bags and guide you to your waiting vehicle."
    ],
    meetingPoints: [
      { terminal: 'North Terminal', location: 'Wait near the Costa Coffee in the arrivals hall.' },
      { terminal: 'South Terminal', location: 'Wait near the Costa Coffee in the arrivals hall.' },
    ],
    faqs: [
      { q: "Where will my chauffeur meet me?", a: "In the arrivals hall after customs, holding a nameboard." },
      { q: "What if my flight is delayed?", a: "We track your flight and adjust pickup automatically. 60 mins free waiting included." },
    ],
    pricingKey: 'gatwick',
    areaServed: 'Gatwick Airport, London',
    canonicalPath: '/gatwick-chauffeur'
  },
  luton: {
    title: 'Luton Chauffeur Service | Eugene Chauffeurs',
    description: 'Executive Luton transfers with meet & greet, flight tracking, and luxury vehicles.',
    name: 'Luton',
    subtitle: 'Chauffeur.',
    heroText: "Executive Luton transfers with meet & greet, flight tracking, and luxury vehicles for a seamless journey.",
    introTitle: 'Effortless Arrivals.',
    introText: [
      "Navigating Luton requires precision. Our service transforms the chaos of international travel into a moment of calm.",
      "Your chauffeur will be waiting in the arrivals hall, ready to take your bags and guide you to your waiting vehicle."
    ],
    meetingPoints: [
      { terminal: 'Main Terminal', location: 'Wait near the Costa Coffee in the arrivals hall.' },
      { terminal: 'Private Jet Centre', location: 'Your chauffeur will meet you directly at the FBO reception.' },
    ],
    faqs: [
      { q: "Where will my chauffeur meet me?", a: "In the arrivals hall after customs, holding a nameboard." },
      { q: "What if my flight is delayed?", a: "We track your flight and adjust pickup automatically. 60 mins free waiting included." },
    ],
    pricingKey: 'luton',
    areaServed: 'Luton Airport',
    canonicalPath: '/luton-chauffeur'
  },
  stansted: {
    title: 'Stansted Chauffeur Service | Eugene Chauffeurs',
    description: 'Executive Stansted transfers with meet & greet, flight tracking, and luxury vehicles.',
    name: 'Stansted',
    subtitle: 'Chauffeur.',
    heroText: "Executive Stansted transfers with meet & greet, flight tracking, and luxury vehicles for a seamless journey.",
    introTitle: 'Effortless Arrivals.',
    introText: [
      "Navigating Stansted requires precision. Our service transforms the chaos of international travel into a moment of calm.",
      "Your chauffeur will be waiting in the arrivals hall, ready to take your bags and guide you to your waiting vehicle."
    ],
    meetingPoints: [
      { terminal: 'Main Terminal', location: 'Wait near the Costa Coffee in the arrivals hall.' },
      { terminal: 'Private Jet Centre', location: 'Your chauffeur will meet you directly at the FBO reception.' },
    ],
    faqs: [
      { q: "Where will my chauffeur meet me?", a: "In the arrivals hall after customs, holding a nameboard." },
      { q: "What if my flight is delayed?", a: "We track your flight and adjust pickup automatically. 60 mins free waiting included." },
    ],
    pricingKey: 'stansted',
    areaServed: 'Stansted Airport',
    canonicalPath: '/stansted-chauffeur'
  },
  'london-city-airport': {
    title: 'London City Airport Chauffeur | Eugene Chauffeurs',
    description: 'Executive LCY transfers with meet & greet, flight tracking, and luxury vehicles.',
    name: 'London City',
    subtitle: 'Chauffeur.',
    heroText: "Executive LCY transfers with meet & greet, flight tracking, and luxury vehicles for a seamless journey.",
    introTitle: 'Effortless Arrivals.',
    introText: [
      "Navigating London City Airport requires precision. Our service transforms the chaos of international travel into a moment of calm.",
      "Your chauffeur will be waiting in the arrivals hall, ready to take your bags and guide you to your waiting vehicle."
    ],
    meetingPoints: [
      { terminal: 'Main Terminal', location: 'Wait near the WHSmith in the arrivals hall.' },
      { terminal: 'Private Jet Centre', location: 'Your chauffeur will meet you directly at the Jet Centre reception.' },
    ],
    faqs: [
      { q: "Where will my chauffeur meet me?", a: "In the arrivals hall after customs, holding a nameboard." },
      { q: "What if my flight is delayed?", a: "We track your flight and adjust pickup automatically. 60 mins free waiting included." },
    ],
    pricingKey: 'lcy',
    areaServed: 'London City Airport',
    canonicalPath: '/london-city-airport-chauffeur'
  },
};

export async function generateStaticParams() {
  return Object.keys(AIRPORT_CONTENT).map((airport) => ({ airport }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ airport: string }>;
}): Promise<Metadata | null> {
  const { airport } = await params;
  const data = AIRPORT_CONTENT[airport as AirportKey];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: data.canonicalPath,
    },
  };
}

export default async function AirportLandingPage({
  params,
}: {
  params: Promise<{ airport: string }>;
}) {
  const { airport } = await params;
  const data = AIRPORT_CONTENT[airport as AirportKey];

  if (!data) {
    return <div className="py-24 text-center text-white">Airport not found</div>;
  }

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: "Flight Monitoring",
      description: "We track your flight in real-time, adjusting pickup times automatically."
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold-400" />,
      title: "Meet & Greet",
      description: "Your chauffeur awaits in the arrivals hall with a personalized name board."
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: "Fixed Pricing",
      description: "Transparent, all-inclusive rates with no hidden fees."
    },
    {
      icon: <Plane className="w-6 h-6 text-gold-400" />,
      title: "Terminal Expertise",
      description: "Intimate knowledge of all terminals for efficient pickups."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `${data.name} Chauffeur Service`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Chauffeurs",
      "url": "https://eugenechauffeurs.com/",
      "telephone": "+44 7340 801 274",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      }
    },
    "areaServed": data.areaServed,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Airport Transfer</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              {data.name} <br />
              <span className="text-white/30">{data.subtitle}</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              {data.heroText}
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
                  {data.introTitle.split(' ')[0]} <span className="text-gold-400">{data.introTitle.split(' ').slice(1).join(' ')}</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  {data.introText.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
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
                  alt={`${data.name} Chauffeur Service`}
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
            {data.meetingPoints.map((point, index) => (
              <div key={index} className="bg-black/50 p-6 border border-white/10">
                <h3 className="text-xl font-italiana text-gold-400 mb-2">{point.terminal}</h3>
                <p className="text-white/60 font-manrope text-sm">{point.location}</p>
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
                {data.name} <br /> Fares.
              </h2>
              <p className="text-white/60 font-manrope font-light mb-8">
                Fixed fares to/from Central London. Includes meet & greet and 60 minutes waiting time.
              </p>
              <p className="text-xs text-white/40 font-manrope">
                Prices subject to VAT where applicable.
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
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{AIRPORT_FARES[data.pricingKey].s_class}</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-white font-manrope">Mercedes-Benz V-Class</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{AIRPORT_FARES[data.pricingKey].v_class}</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 text-white font-manrope">Range Rover</td>
                      <td className="py-4 px-4 text-white/60 font-manrope text-right">£{AIRPORT_FARES[data.pricingKey].range_rover}</td>
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
            {data.faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-italiana text-gold-400">{faq.q}</h3>
                <p className="text-white/60 font-manrope text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
      <StickyCTA label={`Get a ${data.name} Quote`} />
    </>
  );
}


