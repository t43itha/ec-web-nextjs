import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ShoppingBag, Clock, MapPin, Package } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import FAQSchema from '@/app/components/FAQSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Personal Shopping Chauffeur London | Luxury Shopping Concierge',
  description: 'Personal shopping chauffeur service in London. Door-to-door service to Harrods, Selfridges, Bond Street & designer boutiques. Luggage assistance, waiting service, and discreet transportation.',
  keywords: 'personal shopping chauffeur London, shopping concierge, luxury shopping transport, Harrods chauffeur, Bond Street shopping',
  alternates: {
    canonical: '/personal-shopping-concierge-london',
  },
  openGraph: {
    title: 'Personal Shopping Chauffeur London | Eugene Chauffeurs',
    description: 'Experience London\'s finest shopping destinations with our personal shopping chauffeur service.',
    images: ['/business.png'],
  },
};

const faqs = [
  {
    question: "Which shopping destinations do you serve?",
    answer: "We serve all of London's premier shopping destinations including Harrods, Selfridges, Harvey Nichols, Bond Street, Sloane Street, Mayfair boutiques, Westfield, Bicester Village, and private designer showrooms."
  },
  {
    question: "Will your chauffeur help with purchases and bags?",
    answer: "Absolutely. Our chauffeurs provide full luggage and shopping bag assistance. They will help carry your purchases to the vehicle and ensure everything is safely stowed. For larger hauls, our V-Class offers ample space."
  },
  {
    question: "Can you wait while I shop?",
    answer: "Yes, your chauffeur and vehicle remain at your disposal throughout your shopping experience. Whether you need 30 minutes at one boutique or several hours across multiple stores, we wait for you."
  },
  {
    question: "Do you offer services to visitors from overseas?",
    answer: "We frequently serve international visitors on shopping trips. We can collect you from your hotel, private residence, or airport. Our chauffeurs are familiar with tourist VAT reclaim procedures."
  },
  {
    question: "Can you recommend shopping itineraries?",
    answer: "While we don't provide personal shopping services, we know London's retail landscape intimately. Our chauffeurs can suggest efficient routes between stores and know the best drop-off points for each destination."
  },
  {
    question: "Is there space for large purchases?",
    answer: "Our Mercedes V-Class is ideal for shopping trips with large or multiple purchases. For standard shopping, the S-Class offers a generous boot. We can advise on the best vehicle choice when you book."
  }
];

export default function PersonalShoppingConciergeLondonPage() {
  const features = [
    {
      icon: <ShoppingBag className="w-6 h-6 text-gold-400" />,
      title: "Door-to-Door Service",
      description: "Collected from your hotel or residence and dropped at store entrances."
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: "Unlimited Waiting",
      description: "Your chauffeur waits as long as you need. Shop at your own pace."
    },
    {
      icon: <Package className="w-6 h-6 text-gold-400" />,
      title: "Purchase Assistance",
      description: "Help with bags and purchases. Everything safely stowed in the vehicle."
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold-400" />,
      title: "Prime Drop-offs",
      description: "VIP drop-off points at major stores. Minimal walking, maximum convenience."
    }
  ];

  const destinations = [
    { name: "Harrods", area: "Knightsbridge" },
    { name: "Selfridges", area: "Oxford Street" },
    { name: "Harvey Nichols", area: "Knightsbridge" },
    { name: "Bond Street", area: "Mayfair" },
    { name: "Sloane Street", area: "Chelsea" },
    { name: "Mount Street", area: "Mayfair" },
    { name: "Burlington Arcade", area: "Piccadilly" },
    { name: "Bicester Village", area: "Oxfordshire" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Personal Shopping Chauffeur Service",
    "name": "Personal Shopping Chauffeur London",
    "description": "Luxury personal shopping chauffeur service in London. Door-to-door service to Harrods, Selfridges, Bond Street and designer boutiques.",
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
      "highPrice": HOURLY_RATES.range_rover
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Personal Shopping", href: "/personal-shopping-concierge-london" },
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Lifestyle Services</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Personal <br />
              <span className="text-white/30">Shopping.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Experience London's finest shopping destinations without the hassle of parking or carrying bags. Your chauffeur waits while you shop.
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
                  Shop in <span className="text-gold-400">Style.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    London offers some of the world's finest shopping, from the iconic halls of Harrods to the exclusive boutiques of Mount Street. Our personal shopping chauffeur service ensures you experience it all in comfort and style.
                  </p>
                  <p>
                    No circling for parking, no struggling with bags, no rushing to beat a meter. Simply step out at each destination and step back into your waiting vehicle when you're ready.
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
                  src="/business.png"
                  alt="Personal Shopping Chauffeur London"
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

      {/* Destinations Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Destinations</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-4">
              Premier Shopping <span className="text-white/30">Locations.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((dest, index) => (
              <div key={index} className="border border-white/10 p-6 hover:border-gold-400/30 transition-colors text-center">
                <h3 className="text-lg font-italiana text-white mb-1">{dest.name}</h3>
                <p className="text-white/40 font-manrope text-xs">{dest.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-4">
              Shopping Trip <span className="text-white/30">Rates.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Mercedes E-Class", hourly: HOURLY_RATES.e_class, day: DAY_RATES.e_class, desc: "Executive comfort" },
              { name: "Mercedes S-Class", hourly: HOURLY_RATES.s_class, day: DAY_RATES.s_class, desc: "Ultimate luxury" },
              { name: "Mercedes V-Class", hourly: HOURLY_RATES.v_class, day: DAY_RATES.v_class, desc: "Space for shopping" },
            ].map((vehicle, index) => (
              <div key={index} className="border border-white/10 p-8 hover:border-gold-400/30 transition-colors">
                <h3 className="text-xl font-italiana text-white mb-2">{vehicle.name}</h3>
                <p className="text-white/40 font-manrope text-xs mb-6">{vehicle.desc}</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs uppercase tracking-wider">Hourly</span>
                    <span className="text-gold-400 font-italiana text-2xl">£{vehicle.hourly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs uppercase tracking-wider">Full Day</span>
                    <span className="text-gold-400 font-italiana text-2xl">£{vehicle.day}</span>
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
              Shopping <span className="text-white/30">FAQs.</span>
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
      <StickyCTA label="Book Shopping Trip" />
    </>
  );
}
