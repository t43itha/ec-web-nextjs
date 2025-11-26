import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Plane, Shield, Clock, MapPin, CheckCircle } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import FAQSchema from '@/app/components/FAQSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Private Jet Chauffeur Service UK | FBO Ground Transportation',
  description: 'Luxury ground transportation for private jet passengers. Seamless transfers to Farnborough, Luton, Biggin Hill & all UK FBOs. Tail number tracking, aircraft-side pickup, and complete discretion.',
  keywords: 'private jet chauffeur, FBO ground transport, Farnborough chauffeur, private aviation transfer, executive jet service UK',
  alternates: {
    canonical: '/private-jet-charter-assistance-uk',
  },
  openGraph: {
    title: 'Private Jet Chauffeur Service UK | Eugene Chauffeurs',
    description: 'Seamless ground transportation for private aviation. Aircraft-side pickup at all major UK FBOs.',
    images: ['/airport svc.png'],
  },
};

const faqs = [
  {
    question: "Can you meet us aircraft-side?",
    answer: "Yes, at most FBOs we can drive directly to the aircraft steps, subject to airfield security requirements. We coordinate with the FBO handler to ensure a seamless handover the moment you disembark."
  },
  {
    question: "How do you track private flights?",
    answer: "We use professional flight tracking systems that monitor your aircraft's tail number. We receive real-time updates on departure, routing, and estimated arrival. Your chauffeur will be positioned and ready, regardless of any schedule changes."
  },
  {
    question: "Which FBOs do you serve?",
    answer: "We serve all major UK FBOs including Farnborough, Luton (Signature & Harrods Aviation), Biggin Hill, London City (Jet Centre), Stansted, Oxford, and RAF Northolt. We also cover regional private terminals nationwide."
  },
  {
    question: "What about confidentiality for high-profile passengers?",
    answer: "Discretion is paramount in private aviation. All our chauffeurs are NDA-bound, DBS-checked, and experienced with VIP clients. We never disclose passenger information or movements. Our booking system is secure and access-controlled."
  },
  {
    question: "Can you coordinate with my flight management company?",
    answer: "Absolutely. We regularly work with flight management companies, brokers, and concierge services. We can integrate with your existing travel coordination and provide updates to your team throughout the journey."
  },
  {
    question: "Do you offer airside waiting?",
    answer: "Where permitted, our chauffeurs can wait in the FBO lounge or vehicle until you're ready. There's no rushing - we remain at your disposal for as long as needed, whether that's a quick turnaround or an extended stay."
  }
];

export default function PrivateJetCharterAssistanceUKPage() {
  const features = [
    {
      icon: <Plane className="w-6 h-6 text-gold-400" />,
      title: "Tail Number Tracking",
      description: "Real-time flight monitoring. We know when you're arriving before you land."
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold-400" />,
      title: "Aircraft-Side Pickup",
      description: "Direct to the aircraft steps at most FBOs. No terminals, no waiting."
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: "Complete Discretion",
      description: "NDA-bound chauffeurs. Your movements remain confidential."
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: "Flexible Scheduling",
      description: "We adapt to your flight time. Schedule changes are our speciality."
    }
  ];

  const fbos = [
    { name: "Farnborough Airport", code: "EGLF", type: "Primary Business Aviation" },
    { name: "Luton - Signature", code: "EGGW", type: "FBO" },
    { name: "Luton - Harrods Aviation", code: "EGGW", type: "FBO" },
    { name: "Biggin Hill", code: "EGKB", type: "Business Aviation" },
    { name: "London City Jet Centre", code: "EGLC", type: "FBO" },
    { name: "Stansted", code: "EGSS", type: "Private Terminal" },
    { name: "Oxford Airport", code: "EGTK", type: "Business Aviation" },
    { name: "RAF Northolt", code: "EGWU", type: "Military/VIP" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Private Jet Ground Transportation",
    "name": "Private Jet Chauffeur Service UK",
    "description": "Luxury ground transportation for private jet passengers. Aircraft-side pickup at all UK FBOs with tail number tracking and complete discretion.",
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
      "@type": "Country",
      "name": "United Kingdom"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": HOURLY_RATES.s_class,
      "highPrice": HOURLY_RATES.rolls_royce
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Private Jet", href: "/private-jet-charter-assistance-uk" },
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Private Aviation</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Private Jet <br />
              <span className="text-white/30">Services.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Seamless ground transportation for private aviation. From aircraft steps to final destination with the discretion and precision you expect.
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
                  Aircraft to <span className="text-gold-400">Destination.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    Private aviation demands a ground service that matches its standards. Our chauffeurs understand the protocols, the discretion, and the flexibility required when serving high-net-worth individuals and corporate executives.
                  </p>
                  <p>
                    With real-time tail number tracking, your chauffeur knows exactly when you're arriving. At most FBOs, we drive directly to the aircraft - you step off the plane and into your waiting vehicle. No terminals, no delays, no exposure.
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
                  alt="Private Jet Chauffeur Service"
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

      {/* FBOs Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Coverage</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-4">
              FBOs <span className="text-white/30">We Serve.</span>
            </h2>
            <p className="text-white/50 font-manrope max-w-2xl mx-auto">
              Direct access to all major UK private aviation terminals. Aircraft-side pickup where permitted.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {fbos.map((fbo, index) => (
              <div key={index} className="border border-white/10 p-6 hover:border-gold-400/30 transition-colors">
                <h3 className="text-lg font-italiana text-white mb-1">{fbo.name}</h3>
                <p className="text-gold-400 font-manrope text-xs mb-2">{fbo.code}</p>
                <p className="text-white/40 font-manrope text-xs">{fbo.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Selection */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Fleet</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-4">
              Vehicle <span className="text-white/30">Selection.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Mercedes S-Class", hourly: HOURLY_RATES.s_class, day: DAY_RATES.s_class, desc: "Executive flagship" },
              { name: "Mercedes V-Class", hourly: HOURLY_RATES.v_class, day: DAY_RATES.v_class, desc: "Group travel & luggage" },
              { name: "Range Rover", hourly: HOURLY_RATES.range_rover, day: DAY_RATES.range_rover, desc: "Prestige SUV" },
              { name: "Rolls-Royce Ghost", hourly: HOURLY_RATES.rolls_royce, day: DAY_RATES.rolls_royce, desc: "Ultimate luxury" },
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
                    <span className="text-white/50 text-xs uppercase tracking-wider">Full Day</span>
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
              Private Aviation <span className="text-white/30">FAQs.</span>
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
      <StickyCTA label="Book Private Jet Transfer" />
    </>
  );
}
