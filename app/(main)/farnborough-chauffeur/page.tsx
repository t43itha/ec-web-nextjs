import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Plane, Clock, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';

export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Farnborough Airport Chauffeur | Private Jet Transfers | Eugene Chauffeurs',
    description: 'Premium chauffeur service for Farnborough Airport (FAB). Seamless private jet transfers to London and beyond. Tarmac access available on request.',
};

export default function FarnboroughPage() {
    const features = [
        {
            icon: <Plane className="w-6 h-6 text-gold-400" />,
            title: "Private Aviation Experts",
            description: "Specialized in serving private jet clients, understanding the unique protocols of TAG Farnborough Airport."
        },
        {
            icon: <Clock className="w-6 h-6 text-gold-400" />,
            title: "Seamless Connections",
            description: "Direct transfers from the FBO to your final destination in London or the Home Counties."
        },
        {
            icon: <Shield className="w-6 h-6 text-gold-400" />,
            title: "Discretion & Security",
            description: "Vetted chauffeurs accustomed to working with high-profile individuals and security teams."
        },
        {
            icon: <Star className="w-6 h-6 text-gold-400" />,
            title: "Luxury Fleet",
            description: "Range Rover and Mercedes-Benz V-Class vehicles ideal for luggage and comfort."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Farnborough Airport Chauffeur",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Eugene Chauffeurs",
            "url": "https://eugenechauffeurs.com/",
            "telephone": "+44 7340 801 274",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Farnborough Airport",
                "addressLocality": "Farnborough",
                "postalCode": "GU14 6XA",
                "addressCountry": "GB"
            }
        },
        "areaServed": "Farnborough Airport, London",
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "GBP",
            "lowPrice": "150",
            "highPrice": "250",
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
                        <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Private Aviation</p>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
                            Farnborough <br />
                            <span className="text-white/30">Chauffeur.</span>
                        </h1>
                        <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
                            The ultimate ground transport solution for private jet travelers. Seamless transfers from tarmac to town.
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
                                    Jet-Set <span className="text-gold-400">Arrivals.</span>
                                </h2>

                                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                                    <p>
                                        Arriving by private jet at Farnborough requires a ground transfer service that matches the efficiency and luxury of your flight.
                                    </p>
                                    <p>
                                        Our chauffeurs are experienced in FBO protocols, ensuring a smooth transition from aircraft to vehicle. We monitor your flight in real-time and are ready waiting on the tarmac or at the terminal entrance.
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
                                    alt="Farnborough Airport Chauffeur"
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

            <BookingSection />
            <StickyCTA label="Get a Farnborough Quote" />
        </>
    );
}
