import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Shield, Star, Car, Clock, User } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';

export const revalidate = 86400;

export const metadata: Metadata = {
    title: "The Definitive Guide to London's Top Chauffeur Services (2025)",
    description: "An unbiased guide to choosing the best chauffeur service in London. Comparing fleet quality, vetting standards, and technology. Find your perfect ride.",
};

export default function DefinitiveGuidePage() {
    const criteria = [
        {
            icon: <Car className="w-6 h-6 text-gold-400" />,
            title: "Fleet Age & Quality",
            description: "The best services only use current-model vehicles (less than 3 years old). Look for the latest Mercedes-Benz S-Class (W223) and V-Class models."
        },
        {
            icon: <User className="w-6 h-6 text-gold-400" />,
            title: "Chauffeur Vetting",
            description: "Beyond a license, top chauffeurs undergo rigorous background checks, etiquette training, and non-disclosure agreements (NDAs)."
        },
        {
            icon: <Clock className="w-6 h-6 text-gold-400" />,
            title: "Punctuality Guarantee",
            description: "Reliability is paramount. Premium services track flights and traffic in real-time to ensure they are always waiting for you, not the other way around."
        },
        {
            icon: <Shield className="w-6 h-6 text-gold-400" />,
            title: "Transparent Pricing",
            description: "Avoid hidden costs. The best companies offer fixed, all-inclusive quotes that cover parking, tolls, and waiting time."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Definitive Guide to London's Top Chauffeur Services (2025)",
        "image": "https://eugenechauffeurs.com/blog/guide-cover.jpg",
        "author": {
            "@type": "Organization",
            "name": "Eugene Chauffeurs"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Eugene Chauffeurs",
            "logo": {
                "@type": "ImageObject",
                "url": "https://eugenechauffeurs.com/logo.png"
            }
        },
        "datePublished": "2025-11-25",
        "description": "A comprehensive guide to selecting the best luxury chauffeur service in London for 2025."
    };

    return (
        <>
            <LDJson json={jsonLd} />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
                    <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Industry Insights</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-italiana text-white leading-[1.1] mb-8">
                        The Definitive Guide to London's Top Chauffeur Services.
                    </h1>
                    <p className="text-xl text-white/60 font-manrope font-light max-w-2xl mx-auto leading-relaxed">
                        Navigating the luxury transport market can be complex. Here is everything you need to know to make an informed choice in 2025.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-black border-t border-white/5">
                <div className="max-w-[800px] mx-auto px-6 sm:px-12 font-manrope text-lg text-white/80 leading-relaxed space-y-12">

                    <div>
                        <p className="mb-6">
                            London is home to hundreds of private car hire companies, ranging from app-based ride-hailing services to ultra-exclusive private fleets. For the discerning traveler, distinguishing between a "taxi" and a true "chauffeur service" is essential.
                        </p>
                        <p>
                            Whether you are booking for a corporate roadshow, a wedding, or an airport transfer, the quality of your journey depends on four key pillars.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-italiana text-white mb-8">1. The Four Pillars of Excellence</h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {criteria.map((c, i) => (
                                <div key={i} className="bg-white/5 p-6 border border-white/10 rounded-sm">
                                    <div className="mb-4">{c.icon}</div>
                                    <h3 className="text-xl font-italiana text-white mb-2">{c.title}</h3>
                                    <p className="text-sm text-white/60">{c.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-italiana text-white mb-6">2. Why "App-Based" Isn't Enough</h2>
                        <p className="mb-6">
                            While convenient for short hops, app-based services often lack the consistency required for high-stakes travel. A professional chauffeur service offers pre-booked reliability, ensuring your vehicle is prepared to immaculate standards and your driver is fully briefed on your itinerary.
                        </p>
                        <p>
                            At <strong>Eugene Chauffeurs</strong>, we bridge the gap between modern convenience and traditional service. Our digital booking platform offers instant quotes, while our operations team manually oversees every ride to guarantee perfection.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-italiana text-white mb-6">3. The Fleet: What to Expect</h2>
                        <p className="mb-6">
                            In 2025, the industry standard for luxury is defined by three key vehicles:
                        </p>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-4">
                                <CheckCircle className="w-6 h-6 text-gold-400 shrink-0" />
                                <span><strong>Mercedes-Benz S-Class:</strong> The undisputed king of executive travel. Look for the long-wheelbase model for maximum legroom.</span>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle className="w-6 h-6 text-gold-400 shrink-0" />
                                <span><strong>Mercedes-Benz V-Class:</strong> The only choice for groups of up to 7. Perfect for airport transfers with luggage or mobile meetings.</span>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle className="w-6 h-6 text-gold-400 shrink-0" />
                                <span><strong>Range Rover:</strong> For those who prefer an elevated ride height and a more commanding presence.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gold-400/10 border border-gold-400/20 p-8 text-center">
                        <h3 className="text-2xl font-italiana text-white mb-4">Experience the Difference</h3>
                        <p className="mb-8 text-white/70">
                            Eugene Chauffeurs embodies these standards, offering a fleet of the latest vehicles driven by London's finest professionals.
                        </p>
                        <Link href="/" className="inline-block bg-gold-400 text-black px-8 py-3 font-manrope font-semibold uppercase tracking-wider hover:bg-white transition-colors">
                            Book Your Journey
                        </Link>
                    </div>

                </div>
            </section>

            <BookingSection />
            <StickyCTA label="Book Now" />
        </>
    );
}
