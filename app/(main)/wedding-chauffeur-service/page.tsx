import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Clock, Car, Sparkles, Camera, Users, CheckCircle } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import FAQSchema from '@/app/components/FAQSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Wedding Chauffeur Service London | Luxury Bridal Car Hire',
  description: 'Luxury wedding chauffeur service in London. Rolls-Royce, Mercedes S-Class & V-Class wedding car hire with professional chauffeurs. Ribbon decorations, champagne service, and pristine vehicles for your special day.',
  keywords: 'wedding chauffeur, wedding car hire London, bridal car service, luxury wedding transport, Rolls-Royce wedding car, Mercedes wedding car',
  alternates: {
    canonical: '/wedding-chauffeur-service',
  },
  openGraph: {
    title: 'Wedding Chauffeur Service London | Eugene Chauffeurs',
    description: 'Make your wedding day unforgettable with our luxury wedding chauffeur service. Pristine vehicles, professional chauffeurs, and bespoke arrangements.',
    images: ['/event.png'],
  },
};

const faqs = [
  {
    question: "Can you decorate the wedding car with ribbons and flowers?",
    answer: "Yes, we offer complimentary ribbon decorations in your choice of colour. Fresh flower arrangements can be arranged upon request for an additional fee. We work with your florist to ensure perfect coordination with your wedding theme."
  },
  {
    question: "How early should I book my wedding car?",
    answer: "We recommend booking 3-6 months in advance, especially for peak wedding season (May-September) and Saturdays. However, we can accommodate shorter notice bookings subject to availability."
  },
  {
    question: "Do you provide champagne for the journey?",
    answer: "Yes, we offer a complimentary bottle of chilled champagne (or sparkling water) for the bride and groom. Premium champagne upgrades are available upon request."
  },
  {
    question: "Can you transport the entire bridal party?",
    answer: "Absolutely. We can coordinate multiple vehicles for bridesmaids, groomsmen, parents, and guests. Our V-Class seats up to 7, perfect for bridal parties, while the S-Class and Rolls-Royce provide intimate luxury for the couple."
  },
  {
    question: "What happens if the ceremony runs late?",
    answer: "Your chauffeur will wait as long as needed. We build flexibility into our wedding bookings and never rush you on your special day. Additional waiting time is included at no extra charge for wedding bookings."
  },
  {
    question: "Do you offer photo opportunities with the vehicle?",
    answer: "Yes, we allow time for photographs with the vehicle at each location. Your chauffeur can assist with positioning and will ensure the car is immaculately presented for your photos."
  }
];

export default function WeddingChauffeurServicePage() {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-gold-400" />,
      title: "Bespoke Service",
      description: "Every wedding is unique. We tailor our service to your exact requirements and timeline."
    },
    {
      icon: <Car className="w-6 h-6 text-gold-400" />,
      title: "Pristine Vehicles",
      description: "Immaculately presented vehicles, professionally detailed and decorated for your special day."
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: "Flexible Timing",
      description: "No rushing. Your chauffeur waits as long as needed between ceremony, photos, and reception."
    },
    {
      icon: <Camera className="w-6 h-6 text-gold-400" />,
      title: "Photo Ready",
      description: "Time allocated for photographs. Our vehicles make the perfect backdrop for your memories."
    }
  ];

  const vehicles = [
    { name: "Rolls-Royce Ghost", hourly: HOURLY_RATES.rolls_royce, day: DAY_RATES.rolls_royce, description: "Ultimate luxury for the most discerning couples" },
    { name: "Mercedes S-Class", hourly: HOURLY_RATES.s_class, day: DAY_RATES.s_class, description: "Elegant sedan for intimate journeys" },
    { name: "Mercedes V-Class", hourly: HOURLY_RATES.v_class, day: DAY_RATES.v_class, description: "Perfect for bridal parties, seats up to 7" },
    { name: "Range Rover", hourly: HOURLY_RATES.range_rover, day: DAY_RATES.range_rover, description: "Contemporary luxury for the modern couple" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wedding Chauffeur Service",
    "name": "Wedding Chauffeur Service London",
    "description": "Luxury wedding car hire with professional chauffeurs in London. Rolls-Royce, Mercedes S-Class, V-Class and Range Rover available.",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Vehicles",
      "itemListElement": vehicles.map(v => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": v.name
        },
        "price": v.hourly,
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": v.hourly,
          "priceCurrency": "GBP",
          "unitCode": "HUR"
        }
      }))
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Wedding Chauffeur", href: "/wedding-chauffeur-service" },
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Special Occasions</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Wedding <br />
              <span className="text-white/30">Chauffeur.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Your wedding day deserves nothing less than perfection. Arrive in style with our luxury wedding car service, where every detail is curated for your special day.
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
                  Your Perfect <span className="text-gold-400">Arrival.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    From the moment you step into our pristine vehicle, you'll feel the magic of your wedding day begin. Our experienced wedding chauffeurs understand the importance of every moment.
                  </p>
                  <p>
                    Whether you choose the timeless elegance of a Rolls-Royce Ghost, the sophisticated comfort of a Mercedes S-Class, or the spacious luxury of a V-Class for your bridal party, we ensure an impeccable experience.
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
                  src="/event.png"
                  alt="Wedding Chauffeur Service London"
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

      {/* What's Included Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">The Details</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white">
              What's <span className="text-white/30">Included.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Sparkles className="w-8 h-8" />, title: "Vehicle Decorations", items: ["Ribbon decorations in your colour", "Fresh flowers (on request)", "Immaculate presentation"] },
              { icon: <Users className="w-8 h-8" />, title: "Service Excellence", items: ["Smartly dressed chauffeur", "Door-to-door service", "Umbrella for weather protection"] },
              { icon: <Heart className="w-8 h-8" />, title: "Special Touches", items: ["Complimentary champagne", "Bottled water & tissues", "Red carpet available"] },
            ].map((item, index) => (
              <div key={index} className="border border-white/10 p-8 hover:border-gold-400/30 transition-colors">
                <div className="text-gold-400 mb-6">{item.icon}</div>
                <h3 className="text-xl font-italiana text-white mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/60 font-manrope text-sm">
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      {listItem}
                    </li>
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
          <div className="text-center mb-16">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Wedding Rates</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-4">
              Vehicle <span className="text-white/30">Selection.</span>
            </h2>
            <p className="text-white/50 font-manrope max-w-2xl mx-auto">
              Choose from our fleet of immaculate luxury vehicles. All wedding bookings include decorations and complimentary champagne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="border border-white/10 p-6 hover:border-gold-400/30 transition-colors group">
                <h3 className="text-lg font-italiana text-white mb-2">{vehicle.name}</h3>
                <p className="text-white/40 font-manrope text-xs mb-6">{vehicle.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs uppercase tracking-wider">Hourly</span>
                    <span className="text-gold-400 font-italiana text-xl">£{vehicle.hourly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs uppercase tracking-wider">Day Rate ({DAY_RATE_HOURS}h)</span>
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
              Wedding <span className="text-white/30">FAQs.</span>
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
      <StickyCTA label="Book Wedding Car" />
    </>
  );
}
