import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, Users, Clock, MapPin, CheckCircle } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import FAQSchema from '@/app/components/FAQSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Corporate Event Chauffeur London | Conference & Gala Transport',
  description: 'Professional event chauffeur service for corporate events, conferences, galas, and award ceremonies in London. Multi-vehicle coordination, VIP guest transport, and seamless logistics.',
  keywords: 'corporate event chauffeur, conference transport London, gala chauffeur service, VIP event transportation, corporate function transport',
  alternates: {
    canonical: '/corporate-event-chauffeur',
  },
  openGraph: {
    title: 'Corporate Event Chauffeur London | Eugene Chauffeurs',
    description: 'Seamless transportation for corporate events. Multi-vehicle coordination and VIP guest management.',
    images: ['/event.png'],
  },
};

const faqs = [
  {
    question: "Can you coordinate transport for an entire event?",
    answer: "Yes, we specialise in full event transportation logistics. We can manage multiple vehicles, coordinate arrivals and departures, and ensure all guests are transported efficiently. A dedicated coordinator will oversee your event transportation."
  },
  {
    question: "How do you handle VIP guests at events?",
    answer: "VIP guests receive dedicated vehicles and chauffeurs who remain with them throughout the event. We coordinate directly with your event team on protocols, timing, and any special requirements. Discretion and professionalism are paramount."
  },
  {
    question: "What venues do you regularly serve?",
    answer: "We serve all major London venues including The Grosvenor House, The Savoy, Natural History Museum, V&A, O2, ExCeL London, Battersea Evolution, and countless private venues. Our chauffeurs know the best drop-off points and parking arrangements at each."
  },
  {
    question: "Can you provide branded vehicles or signage?",
    answer: "We can accommodate company branding on name boards and coordinate vehicle presentations for corporate events. For larger events, we can discuss additional branding options. All arrangements are tailored to your requirements."
  },
  {
    question: "How do you manage multiple pickup locations?",
    answer: "We create a detailed logistics plan with scheduled pickups from hotels, offices, or residences. Each guest receives their chauffeur's contact details and vehicle information. Real-time tracking allows your event team to monitor arrivals."
  },
  {
    question: "What about post-event transportation?",
    answer: "We provide full round-trip service. Vehicles can wait during the event or return at specified times. For late-finishing events, we ensure guests have safe, comfortable transportation home, regardless of the hour."
  }
];

export default function CorporateEventChauffeurPage() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-gold-400" />,
      title: "Event Coordination",
      description: "Dedicated logistics coordinator for your event transportation needs."
    },
    {
      icon: <Users className="w-6 h-6 text-gold-400" />,
      title: "Multi-Vehicle Fleet",
      description: "Scale from single VIP transfers to fleet-wide event coverage."
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: "Precise Timing",
      description: "Synchronised arrivals and departures. Your schedule, our priority."
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold-400" />,
      title: "Venue Expertise",
      description: "Intimate knowledge of London's premier event venues."
    }
  ];

  const eventTypes = [
    "Corporate Conferences",
    "Award Ceremonies",
    "Gala Dinners",
    "Product Launches",
    "AGMs & Shareholder Meetings",
    "Team Away Days",
    "Client Entertainment",
    "Board Retreats",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Corporate Event Chauffeur Service",
    "name": "Corporate Event Chauffeur London",
    "description": "Professional event chauffeur service for corporate events, conferences, galas, and award ceremonies. Multi-vehicle coordination and VIP guest transport.",
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
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": HOURLY_RATES.e_class,
      "highPrice": HOURLY_RATES.rolls_royce
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Corporate Events", href: "/corporate-event-chauffeur" },
  ];

  return (
    <>
      <LDJson json={jsonLd} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Event Services</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Corporate <br />
              <span className="text-white/30">Events.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Flawless transportation for corporate events of any scale. From intimate board dinners to large-scale conferences, we ensure every guest arrives in style.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                  Events <span className="text-gold-400">Perfected.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    Corporate events reflect your organisation's standards. The transportation you provide for guests, speakers, and VIPs should match. Our event chauffeur service delivers the precision, professionalism, and polish your events deserve.
                  </p>
                  <p>
                    Whether you're hosting 10 board members or 200 conference delegates, we scale our service to your needs. A dedicated coordinator handles all logistics, leaving you free to focus on the event itself.
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
                  src="/event.jpg"
                  alt="Corporate Event Chauffeur Service"
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

      {/* Event Types Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">We Support</p>
              <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                Event <span className="text-white/30">Types.</span>
              </h2>
              <p className="text-white/60 font-manrope font-light leading-relaxed">
                From intimate gatherings to large-scale conferences, we provide tailored transportation solutions for every corporate occasion.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {eventTypes.map((event, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-white/70 font-manrope">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-4">
              Event <span className="text-white/30">Rates.</span>
            </h2>
            <p className="text-white/50 font-manrope max-w-2xl mx-auto">
              Volume discounts available for multi-vehicle bookings. Contact us for a tailored event quotation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Mercedes E-Class", hourly: HOURLY_RATES.e_class, day: DAY_RATES.e_class, desc: "Executive transfers" },
              { name: "Mercedes S-Class", hourly: HOURLY_RATES.s_class, day: DAY_RATES.s_class, desc: "VIP & keynote speakers" },
              { name: "Mercedes V-Class", hourly: HOURLY_RATES.v_class, day: DAY_RATES.v_class, desc: "Group transportation" },
              { name: "Rolls-Royce Ghost", hourly: HOURLY_RATES.rolls_royce, day: DAY_RATES.rolls_royce, desc: "Award winners & CEOs" },
            ].map((vehicle, index) => (
              <div key={index} className="border border-white/10 p-6 hover:border-gold-400/30 transition-colors">
                <h3 className="text-lg font-italiana text-white mb-2">{vehicle.name}</h3>
                <p className="text-white/40 font-manrope text-xs mb-6">{vehicle.desc}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs uppercase tracking-wider">Hourly</span>
                    <span className="text-gold-400 font-italiana text-xl">£{vehicle.hourly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs uppercase tracking-wider">Day ({DAY_RATE_HOURS}h)</span>
                    <span className="text-gold-400 font-italiana text-xl">£{vehicle.day}</span>
                  </div>
                </div>
                <p className="text-white/30 text-xs mt-4">Min. {HOURLY_MIN_HOURS} hours</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Questions</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white">
              Event <span className="text-white/30">FAQs.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-0">
            {faqs.map((faq, index) => (
              <details key={index} className="border-b border-white/10 group">
                <summary className="py-6 cursor-pointer list-none flex justify-between items-center text-white hover:text-gold-400 transition-colors font-manrope">
                  {faq.question}
                  <span className="text-gold-400 ml-4">+</span>
                </summary>
                <div className="pb-6 text-white/50 font-manrope font-light leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
      <StickyCTA label="Plan Event Transport" />
    </>
  );
}
