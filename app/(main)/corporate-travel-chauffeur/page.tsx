import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Briefcase, Clock, Shield, Globe, CreditCard, Users, CheckCircle } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import FAQSchema from '@/app/components/FAQSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS, AIRPORT_FARES } from '@/app/lib/pricing';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Corporate Chauffeur Service London | Executive Business Travel',
  description: 'Professional corporate chauffeur service in London. Dedicated account management, monthly billing, and priority booking for businesses. Executive vehicles with Wi-Fi, discretion guaranteed.',
  keywords: 'corporate chauffeur London, business chauffeur service, executive travel, corporate car service, company chauffeur account',
  alternates: {
    canonical: '/corporate-travel-chauffeur',
  },
  openGraph: {
    title: 'Corporate Chauffeur Service London | Eugene Chauffeurs',
    description: 'Streamline your corporate travel with our professional chauffeur service. Dedicated accounts, monthly billing, and executive vehicles.',
    images: ['/business.png'],
  },
};

const faqs = [
  {
    question: "How do corporate accounts work?",
    answer: "Our corporate accounts provide streamlined booking, consolidated monthly invoicing, and dedicated account management. Once set up, authorised staff can book through our priority line, app, or email. All journeys are tracked and reported for easy expense management."
  },
  {
    question: "What billing options are available?",
    answer: "We offer flexible billing including monthly invoicing with 30-day terms, individual trip payments, or pre-paid credit accounts. Detailed breakdowns by department, cost centre, or traveller are available for accounting purposes."
  },
  {
    question: "Can multiple employees book on one account?",
    answer: "Yes, corporate accounts can have unlimited authorised bookers. Each user can have different booking permissions and spending limits. All bookings are consolidated into a single monthly invoice."
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes, we offer tiered pricing based on monthly usage. Companies with regular bookings benefit from preferential rates. Contact us to discuss your requirements and receive a tailored quote."
  },
  {
    question: "How do you ensure confidentiality for executives?",
    answer: "All our chauffeurs sign strict NDAs and undergo thorough background checks. We maintain complete discretion regarding client movements, destinations, and conversations. Our booking system is secure and access-controlled."
  },
  {
    question: "Can you provide meet & greet for visiting clients?",
    answer: "Absolutely. We regularly provide meet & greet services for VIP clients and guests. Our chauffeurs can display company branding, provide a welcome pack, and ensure your visitors receive a first-class impression."
  }
];

export default function CorporateTravelChauffeurPage() {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-gold-400" />,
      title: "Monthly Billing",
      description: "Consolidated invoicing with detailed breakdowns for easy expense management."
    },
    {
      icon: <Users className="w-6 h-6 text-gold-400" />,
      title: "Dedicated Account Manager",
      description: "A single point of contact who understands your business requirements."
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: "Priority Booking",
      description: "24/7 priority access with faster response times for corporate clients."
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: "Complete Discretion",
      description: "NDA-bound chauffeurs and secure booking systems for confidentiality."
    }
  ];

  const benefits = [
    "Streamlined booking process via phone, email, or app",
    "Detailed monthly reporting by department or cost centre",
    "Volume-based preferential rates",
    "Flexible payment terms (30-day invoicing)",
    "Multi-user accounts with individual permissions",
    "Real-time journey tracking for travel managers",
    "Backup vehicle guarantee for critical journeys",
    "Consistent vehicle standards and chauffeur quality",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Corporate Chauffeur Service",
    "name": "Corporate Chauffeur Service London",
    "description": "Professional corporate chauffeur service with dedicated account management, monthly billing, and executive vehicles.",
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
      "highPrice": HOURLY_RATES.rolls_royce,
      "offerCount": "6"
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Corporate Travel", href: "/corporate-travel-chauffeur" },
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Business Services</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Corporate <br />
              <span className="text-white/30">Travel.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Elevate your corporate travel with our executive chauffeur service. Dedicated account management, seamless billing, and the reliability your business demands.
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
                  Business-Class <span className="text-gold-400">Ground Travel.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    Your executives' time is valuable. Our corporate chauffeur service ensures they arrive refreshed, prepared, and on schedule. With Wi-Fi-enabled vehicles and professional chauffeurs, the journey becomes productive time.
                  </p>
                  <p>
                    From daily commutes to client meetings, airport transfers to roadshows, we provide consistent, reliable service that reflects your company's standards. One account, one invoice, complete peace of mind.
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
                  alt="Corporate Chauffeur Service London"
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

      {/* Account Benefits Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Corporate Accounts</p>
              <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                Streamlined <span className="text-white/30">for Business.</span>
              </h2>
              <p className="text-white/60 font-manrope font-light leading-relaxed mb-8">
                Our corporate accounts are designed to simplify travel management while maintaining the highest service standards. Everything your finance and travel teams need.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 font-manrope text-sm">{benefit}</span>
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Standard Rates</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-4">
              Corporate <span className="text-white/30">Pricing.</span>
            </h2>
            <p className="text-white/50 font-manrope max-w-2xl mx-auto">
              Volume discounts available for regular corporate bookings. Contact us for a tailored quotation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left text-white/40 font-manrope text-xs uppercase tracking-wider">Vehicle</th>
                  <th className="py-4 px-6 text-right text-white/40 font-manrope text-xs uppercase tracking-wider">Hourly</th>
                  <th className="py-4 px-6 text-right text-white/40 font-manrope text-xs uppercase tracking-wider">Day ({DAY_RATE_HOURS}h)</th>
                  <th className="py-4 px-6 text-right text-white/40 font-manrope text-xs uppercase tracking-wider">Heathrow</th>
                  <th className="py-4 px-6 text-right text-white/40 font-manrope text-xs uppercase tracking-wider">City Airport</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Mercedes E-Class", key: "e_class" as const },
                  { name: "Mercedes S-Class", key: "s_class" as const },
                  { name: "Mercedes V-Class", key: "v_class" as const },
                  { name: "Range Rover", key: "range_rover" as const },
                ].map((vehicle, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-white font-italiana">{vehicle.name}</td>
                    <td className="py-4 px-6 text-right text-gold-400 font-italiana">£{HOURLY_RATES[vehicle.key]}</td>
                    <td className="py-4 px-6 text-right text-gold-400 font-italiana">£{DAY_RATES[vehicle.key]}</td>
                    <td className="py-4 px-6 text-right text-gold-400 font-italiana">£{AIRPORT_FARES.heathrow[vehicle.key]}</td>
                    <td className="py-4 px-6 text-right text-gold-400 font-italiana">£{AIRPORT_FARES.lcy[vehicle.key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/30 text-xs mt-4 text-center">Min. {HOURLY_MIN_HOURS} hours for hourly bookings. All prices exclude VAT.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Information</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white">
              Corporate <span className="text-white/30">FAQs.</span>
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
      <StickyCTA label="Open Corporate Account" />
    </>
  );
}
