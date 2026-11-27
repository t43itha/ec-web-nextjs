import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Clock, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import FAQSchema from '@/app/components/FAQSchema';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import RelatedServices from '@/app/components/RelatedServices';
import { AIRPORT_FARES, HOURLY_RATES, HOURLY_MIN_HOURS, VEHICLE_LABELS } from '@/app/lib/pricing';

export const revalidate = 86400;

const META_TITLE = 'Luxury Chauffeur Kensington, London W8';
const META_DESCRIPTION = 'Luxury chauffeur in Kensington from £60 an hour. S-Class, V-Class and Range Rover for Heathrow transfers, Royal Albert Hall nights and private travel.';

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: '/chauffeur-kensington' },
  openGraph: {
    title: `${META_TITLE} | Eugene Chauffeurs`,
    description: META_DESCRIPTION,
    url: '/chauffeur-kensington',
  },
};

const journeys = [
  {
    title: 'Airports',
    items: [
      `Heathrow is the closest airport, usually 35 to 60 minutes from W8. Fixed fares from £${AIRPORT_FARES.heathrow.e_class}.`,
      `London City from £${AIRPORT_FARES.lcy.e_class} and Gatwick from £${AIRPORT_FARES.gatwick.e_class}, with meet and greet on arrival.`,
      'Flight tracking on every airport pickup, with 60 minutes of free waiting in arrivals.',
    ],
  },
  {
    title: 'Events and evenings',
    items: [
      'Royal Albert Hall concerts and the Proms, with a pickup point agreed before the show ends.',
      'Exhibitions at Olympia London, the Design Museum and the South Kensington museums.',
      'Summer evenings at Opera Holland Park and dinners across Chelsea and Mayfair.',
    ],
  },
  {
    title: 'Everyday journeys',
    items: [
      'Kensington High Street, Kensington Church Street and Knightsbridge shopping trips, with the car waiting.',
      'School runs and family travel from Holland Park, Campden Hill and Kensington Palace Gardens.',
      'Meetings in the City, Canary Wharf or Mayfair, booked by the hour so you do not need to rebook.',
    ],
  },
];

const faqs = [
  {
    q: 'How much does a luxury chauffeur in Kensington cost?',
    a: `Hourly hire starts at £${HOURLY_RATES.e_class} an hour in an E-Class and £${HOURLY_RATES.s_class} an hour in an S-Class, with a ${HOURLY_MIN_HOURS}-hour minimum. Airport transfers are fixed fares.`,
  },
  {
    q: 'How much is a Kensington to Heathrow transfer?',
    a: `Fixed fares start at £${AIRPORT_FARES.heathrow.e_class} in an E-Class and £${AIRPORT_FARES.heathrow.s_class} in an S-Class or V-Class. Arrivals include meet and greet and 60 minutes of free waiting.`,
  },
  {
    q: 'Can you collect us after a show at the Royal Albert Hall?',
    a: 'Yes. We agree a pickup point and time with you before the show. Your chauffeur waits nearby and comes to you as the crowds leave.',
  },
  {
    q: 'Which parts of Kensington do you cover?',
    a: 'All of W8 and the streets around it, including Holland Park, Notting Hill, Earls Court, South Kensington and Olympia.',
  },
  {
    q: 'Can the chauffeur wait while I shop or have dinner?',
    a: `Yes. On hourly bookings the chauffeur stays with the car for the whole booking. The minimum is ${HOURLY_MIN_HOURS} hours.`,
  },
  {
    q: 'Which car should I book for a family or group?',
    a: 'The Mercedes V-Class seats up to 7 with room for luggage. For one to three passengers, the S-Class or Range Rover is the usual choice.',
  },
];

const relatedLinks = [
  { title: 'Chauffeur South Kensington', href: '/chauffeur-south-kensington', description: 'Service around the museums and SW7.' },
  { title: 'Chauffeur Belgravia', href: '/chauffeur-belgravia', description: 'Corporate and private service in SW1X.' },
  { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from Kensington.' },
  { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'Our flagship executive saloon.' },
];

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
      description: "Mercedes-Benz S-Class, V-Class and E-Class, Range Rover and Rolls-Royce Ghost."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Chauffeur Service Kensington",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Chauffeurs",
      "url": "https://eugenechauffeurs.com/",
      "telephone": "+44 20 8191 1882",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "Kensington",
        "postalCode": "W8",
        "addressCountry": "GB"
      }
    },
    "areaServed": "Kensington, London"
  };

  return (
    <>
      <LDJson json={jsonLd} />
      <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Local Service</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Luxury Chauffeur <br />
              <span className="text-white/30">Kensington.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Luxury chauffeur hire in Kensington from £{HOURLY_RATES.e_class} an hour. Airport transfers, evenings out and day hire from Kensington Palace Gardens, Holland Park and the rest of W8.
            </p>
            <div className="mt-6">
              <TfLBadge />
            </div>
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
                    Our chauffeurs know W8 well: the garden squares, the hotel entrances on Kensington High Street, and the quickest way out to the M4 for Heathrow.
                  </p>
                  <p>
                    Book a shopping trip to Kensington High Street, a dinner transfer, or an airport run from your front door. You get a professional chauffeur, a clean car and a fixed or hourly price agreed before you travel.
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

      {/* Typical Journeys */}
      <section className="py-20 bg-zinc-900 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-italiana text-white mb-12 text-center">Typical Kensington Journeys</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {journeys.map((group) => (
              <div key={group.title} className="bg-black/50 p-6 border border-white/10">
                <h3 className="text-xl font-italiana text-gold-400 mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-white/60 font-manrope text-sm leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                Kensington <br /> Rates.
              </h2>
              <p className="text-white/60 font-manrope font-light mb-4">
                Hourly hire from Kensington. Minimum {HOURLY_MIN_HOURS} hours.
              </p>
              <p className="text-white/60 font-manrope font-light mb-8">
                Airport transfers from Kensington to Heathrow also available at fixed rates.
              </p>
              <p className="text-xs text-white/40 font-manrope">Prices subject to VAT where applicable.</p>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-4 border-b border-white/10 text-gold-400 font-italiana text-lg">Vehicle</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Per Hour (from)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Object.entries(HOURLY_RATES) as [string, number][]).map(([key, rate]) => (
                      <tr key={key} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-4 text-white font-manrope">{VEHICLE_LABELS[key as keyof typeof VEHICLE_LABELS]}</td>
                        <td className="py-4 px-4 text-white/60 font-manrope text-right">&pound;{rate}</td>
                      </tr>
                    ))}
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

      <RelatedServices links={relatedLinks} />
      <BookingSection />
      <StickyCTA label="Get a Kensington Quote" />
    </>
  );
}
