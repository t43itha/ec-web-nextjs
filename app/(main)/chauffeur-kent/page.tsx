import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Clock, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';

export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Chauffeur Service Kent | Luxury Car Hire Sevenoaks & Tunbridge Wells',
    description: 'Premium chauffeur service in Kent. Serving Sevenoaks, Tunbridge Wells, and beyond. Luxury airport transfers to Gatwick & Heathrow.',
};

export default function KentPage() {
    const features = [
        {
            icon: <MapPin className="w-6 h-6 text-gold-400" />,
            title: "Local Expertise",
            description: "In-depth knowledge of Kent, from the Garden of England's scenic routes to key business hubs."
        },
        {
            icon: <Clock className="w-6 h-6 text-gold-400" />,
            title: "Punctuality",
            description: "Dependable service for London commutes and airport transfers, ensuring you never miss a flight or meeting."
        },
        {
            icon: <Shield className="w-6 h-6 text-gold-400" />,
            title: "Safety First",
            description: "Highly trained chauffeurs prioritizing your safety and comfort on every journey."
        },
        {
            icon: <Star className="w-6 h-6 text-gold-400" />,
            title: "Luxury Fleet",
            description: "Experience the ultimate in comfort with our Mercedes-Benz S-Class and V-Class vehicles."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Chauffeur Service Kent",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Eugene Chauffeurs",
            "url": "https://eugenechauffeurs.com/",
            "telephone": "+44 7340 801 274",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kent",
                "addressRegion": "South East",
                "addressCountry": "GB"
            }
        },
        "areaServed": "Kent, Sevenoaks, Tunbridge Wells",
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "GBP",
            "lowPrice": "80",
            "highPrice": "120",
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
                        <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">County Service</p>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
                            Kent <br />
                            <span className="text-white/30">Chauffeur.</span>
                        </h1>
                        <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
                            Luxury travel for the Garden of England. Connecting Sevenoaks, Tunbridge Wells, and Kent with London and major airports.
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
                                    Serving <span className="text-gold-400">Kent.</span>
                                </h2>

                                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                                    <p>
                                        Our Kent chauffeur service offers a seamless link between the county's picturesque towns and the capital. Ideal for daily commuters, business executives, and leisure travelers.
                                    </p>
                                    <p>
                                        We provide reliable transfers to Gatwick and Heathrow, ensuring a stress-free start or end to your journey.
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
                                    alt="Chauffeur Service Kent"
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
            <StickyCTA label="Get a Kent Quote" />
        </>
    );
}
