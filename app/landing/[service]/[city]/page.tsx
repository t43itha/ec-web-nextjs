import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import {
  cities,
  services,
  getAllServiceCityCombinations,
  generateLandingPageMetadata,
} from '@/app/lib/landing-data';
import BookingSection from '@/app/components/BookingSection';
import StickyCTA from '@/app/components/StickyCTA';

// Enable ISR for this route (24 hours)
export const revalidate = 86400;

// Generate static params for all service/city combinations
export async function generateStaticParams() {
  return getAllServiceCityCombinations();
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}): Promise<Metadata | null> {
  const { service, city } = await params;
  const metadata = generateLandingPageMetadata(service, city);
  return metadata || {};
}

export default async function ServiceCityLandingPage({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}) {
  const { service, city } = await params;
  const serviceData = services[service as keyof typeof services];
  const cityData = cities[city as keyof typeof cities];

  // 404 if invalid service or city
  if (!serviceData || !cityData) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-gold-600/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-cinzel">
              {serviceData.name} in{' '}
              <span className="text-gradient-gold">{cityData.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-montserrat max-w-3xl mx-auto">
              {serviceData.service_description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="tel:+447340801274"
                className="inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +44 7340 801 274
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-zinc-800 text-white px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-zinc-700 transition-all duration-300 border border-gold-500/20"
              >
                Book Online
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-cinzel mb-6">
                Premium {serviceData.name} Service in {cityData.name}
              </h2>
              <p className="text-lg text-white/80 font-montserrat mb-8">
                {cityData.description}
              </p>
              
              <div className="space-y-4">
                {serviceData.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 font-montserrat">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-zinc-900/50 rounded-lg border border-gold-500/20">
                <p className="text-gold-400 font-cinzel font-bold text-xl mb-2">
                  Available 24/7
                </p>
                <p className="text-white/80 font-montserrat">
                  Professional chauffeurs ready to serve you anytime across {cityData.region}
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              {serviceData.hero_image && (
                <Image
                  src={serviceData.hero_image}
                  alt={`${serviceData.name} in ${cityData.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-cinzel mb-4">
              Service Areas in <span className="text-gradient-gold">{cityData.region}</span>
            </h2>
            <p className="text-lg text-white/80 font-montserrat">
              We provide luxury chauffeur services across all major areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cityData.areas.map((area, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-4 text-center border border-zinc-800/50 hover:border-gold-500/30 transition-all duration-300"
              >
                <MapPin className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                <p className="text-white font-montserrat">{area}</p>
              </div>
            ))}
          </div>

          {cityData.airports && cityData.airports.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white font-cinzel mb-6 text-center">
                Airport Services
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cityData.airports.map((airport, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6 border border-gold-500/20"
                  >
                    <p className="text-gold-400 font-montserrat font-bold text-lg mb-2">
                      {airport}
                    </p>
                    <p className="text-white/70 font-montserrat text-sm">
                      Direct transfers with flight monitoring
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      {serviceData.faqs && serviceData.faqs.length > 0 && (
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-cinzel mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {serviceData.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800/50"
                >
                  <h3 className="text-xl font-bold text-white font-montserrat mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-white/80 font-montserrat">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingSection />
      <StickyCTA label={`Book ${serviceData.name}`} />
    </>
  );
}