import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Star, Wifi, Coffee } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import FAQSchema from '@/app/components/FAQSchema';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import RelatedServices from '@/app/components/RelatedServices';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS, AIRPORT_FARES } from '@/app/lib/pricing';
import { WAITING_POLICY } from '@/app/lib/config';

export const revalidate = 86400;

const META_TITLE = 'Mercedes S-Class Chauffeur Hire London';
const META_DESCRIPTION = 'Mercedes S-Class chauffeur in London from £80 an hour or £640 a day. TfL-licensed chauffeurs for business travel, airport transfers and evening events.';

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: '/mercedes-s-class-chauffeur' },
  openGraph: {
    title: `${META_TITLE} | Eugene Chauffeurs`,
    description: META_DESCRIPTION,
    url: '/mercedes-s-class-chauffeur',
  },
};

const whenToChoose = [
  { title: 'Business travel', text: 'Client pickups, board meetings and roadshows across London. Book by the hour or take the day rate.' },
  { title: 'Airport transfers', text: `One to three passengers with normal luggage. Fixed fares from £${AIRPORT_FARES.heathrow.s_class} to Heathrow and £${AIRPORT_FARES.lcy.s_class} to London City.` },
  { title: 'Evenings and events', text: 'Dinners, theatre, the Royal Albert Hall and black-tie events, with the chauffeur waiting nearby on hourly bookings.' },
  { title: 'Weddings', text: 'An S-Class for the couple or close family. Wedding bookings include ribbon decorations and champagne.' },
];

const included = [
  'A TfL-licensed professional chauffeur',
  'Mercedes-Benz S-Class with Nappa leather seats and rear climate control',
  'On-board Wi-Fi and bottled water',
  'Flight tracking and meet and greet on airport pickups',
  `${WAITING_POLICY.airportArrivals} waiting on airport arrivals, ${WAITING_POLICY.departuresAndNonAirport} on other pickups`,
  'Child seats on request',
];

const faqs = [
  {
    q: 'How much does a Mercedes S-Class chauffeur cost in London?',
    a: `£${HOURLY_RATES.s_class} an hour with a ${HOURLY_MIN_HOURS}-hour minimum, or £${DAY_RATES.s_class} for a ${DAY_RATE_HOURS}-hour day. Airport transfers are fixed fares, from £${AIRPORT_FARES.heathrow.s_class} for Heathrow.`,
  },
  {
    q: 'What is the minimum booking for an S-Class?',
    a: `Hourly bookings have a ${HOURLY_MIN_HOURS}-hour minimum. Airport transfers and other point-to-point journeys are quoted as a fixed fare.`,
  },
  {
    q: 'How many passengers fit in an S-Class?',
    a: 'Up to three passengers in the rear. For four or more people, or a lot of luggage, book the Mercedes V-Class, which seats up to 7.',
  },
  {
    q: 'Is waiting time included?',
    a: `Yes. Airport arrivals include ${WAITING_POLICY.airportArrivals} waiting. Other pickups include ${WAITING_POLICY.departuresAndNonAirport}. On hourly bookings the chauffeur waits for the whole booking.`,
  },
  {
    q: 'What is the difference between the S-Class and the E-Class?',
    a: `The S-Class is our flagship saloon, with more rear legroom and a quieter cabin. The E-Class costs less, from £${HOURLY_RATES.e_class} an hour, and suits everyday business travel.`,
  },
  {
    q: 'Are there any extra charges?',
    a: 'Prices are subject to VAT where applicable. Congestion Charge, ULEZ, tolls and parking beyond the free waiting time are passed on at cost.',
  },
];

const relatedLinks = [
  { title: 'Mercedes E-Class', href: '/mercedes-e-class-chauffeur', description: `Business saloon from £${HOURLY_RATES.e_class} an hour.` },
  { title: 'Mercedes V-Class', href: '/mercedes-v-class-chauffeur', description: 'Seats up to 7 with luggage.' },
  { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: `S-Class fixed fares from £${AIRPORT_FARES.heathrow.s_class}.` },
  { title: 'Chauffeur Prices', href: '/prices', description: 'All published hourly and airport rates.' },
];

export default function SClassPage() {
  const features = [
    { icon: <Wifi className="w-5 h-5" />, text: "On-board Wi-Fi" },
    { icon: <Coffee className="w-5 h-5" />, text: "Bottled Water" },
    { icon: <Star className="w-5 h-5" />, text: "Nappa Leather Seats" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Rear Climate Control" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mercedes-Benz S-Class Chauffeur Hire",
    "serviceType": "Mercedes-Benz S-Class Chauffeur Hire",
    "description": "Chauffeur-driven Mercedes-Benz S-Class in London for business meetings, airport transfers and events.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Hourly hire",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": HOURLY_RATES.s_class,
          "priceCurrency": "GBP",
          "unitText": "HOUR"
        }
      },
      {
        "@type": "Offer",
        "name": `Day hire (${DAY_RATE_HOURS} hours)`,
        "price": DAY_RATES.s_class,
        "priceCurrency": "GBP"
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": "Mercedes-Benz"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Chauffeurs",
      "url": "https://eugenechauffeurs.com",
      "telephone": "+442081911882",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
    }
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">The Flagship</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Mercedes <br />
              <span className="text-white/30">S-Class.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Hire a Mercedes-Benz S-Class with a professional chauffeur in London from £{HOURLY_RATES.s_class} an hour or £{DAY_RATES.s_class} for a {DAY_RATE_HOURS}-hour day. For business travel, airport transfers and evenings out.
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
                The S-Class is our flagship saloon. It is quiet, smooth and spacious in the back, so you can work, take calls or rest between stops. Your chauffeur collects you from your door, hotel or terminal and stays with you for the booking.
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

      {/* When to choose */}
      <section className="py-20 bg-zinc-900 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-italiana text-white mb-12 text-center">When to Choose the S-Class</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whenToChoose.map((item) => (
              <div key={item.title} className="bg-black/50 p-6 border border-white/10">
                <h3 className="text-xl font-italiana text-gold-400 mb-2">{item.title}</h3>
                <p className="text-white/60 font-manrope text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 font-manrope text-sm text-center mt-10">
            Travelling as a group? The <Link href="/mercedes-v-class-chauffeur" className="text-gold-400 hover:underline">Mercedes V-Class</Link> seats up to 7.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                What&apos;s <br /> Included.
              </h2>
              <p className="text-white/60 font-manrope font-light mb-8">
                Every S-Class booking comes with the same standard, whether it is a single airport run or a full day.
              </p>
              <p className="text-xs text-white/40 font-manrope">
                Prices subject to VAT where applicable. Congestion/ULEZ, tolls &amp; parking beyond the free window are passed at cost.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid sm:grid-cols-2 gap-6">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-white/70 font-manrope text-sm leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-gold-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
      <StickyCTA label="Book S-Class" />
    </>
  );
}
