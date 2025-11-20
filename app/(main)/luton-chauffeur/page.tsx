import React from 'react';
import { Plane, Clock, MapPin, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BookingSection from '@/app/components/BookingSection';
import LDJson from '@/app/components/LDJson';

export const metadata: Metadata = {
  title: 'Luton Chauffeur Service | Luxury Airport Transfers London',
  description: 'Premium chauffeur service to and from Luton Airport. Real-time flight monitoring, meet & greet, and luxury vehicles for a seamless journey.',
};

export const revalidate = 3600;

const LutonPage = () => {
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
      title: "Private Aviation",
      description: "Specialized service for private jet terminals (FBOs) at Luton, ensuring discreet and direct tarmac access where permitted."
    }
  ];

  return (
    <>
      {/* Hero Section - Minimalist Noir */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Airport Transfer</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Luton <br />
              <span className="text-white/30">Chauffeur.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              The ultimate in airport luxury. Seamless connections between London and Luton Airport, including private aviation terminals.
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
                    Navigating Luton requires precision. Our service transforms the chaos of international travel into a moment of calm. From the moment you land, our team is tracking your progress.
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
                  alt="Luxury Luton Chauffeur Service"
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

      {/* Service Standards - Minimalist List */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                The Gold <br /> Standard.
              </h2>
              <p className="text-white/60 font-manrope font-light">
                Every Luton transfer includes our signature premium amenities as standard.
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

      {/* Booking Section */}
      <BookingSection />
      <LDJson json={{ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Luton Chauffeur Service', provider: { '@type': 'LocalBusiness', name: 'Eugene Chauffeurs' }, areaServed: 'Luton' }} />
    </>
  );
};

export default LutonPage;
