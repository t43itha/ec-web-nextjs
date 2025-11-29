'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Briefcase, ArrowUpRight } from 'lucide-react';
import { HOURLY_RATES, VEHICLE_LABELS } from '@/app/lib/pricing';

const vehicles = [
    {
        key: 'e_class',
        image: '/Mercedes-E-Class-cutout-2021-520x320.webp',
        passengers: 3,
        luggage: 2,
        description: "Business Class comfort for executive travel."
    },
    {
        key: 's_class',
        image: '/Mercedes-S-Class-cutout-2021-581x450.webp',
        passengers: 3,
        luggage: 2,
        description: "The ultimate in luxury and sophistication."
    },
    {
        key: 'v_class',
        image: '/Mercedes-V-Class-cutout-2021-581x450.webp',
        passengers: 7,
        luggage: 7,
        description: "Spacious luxury for groups and families."
    },
] as const;

const FleetPreview = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('fleet-preview');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="fleet-preview" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div
                    className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                >
                    <p className="text-gold-400 text-xs uppercase tracking-[0.3em]">Our Fleet</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-italiana text-white">
                        Choose Your <span className="text-white/30">Chariot.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {vehicles.map((v, index) => (
                        <div
                            key={v.key}
                            className={`group relative bg-white/5 border border-white/10 overflow-hidden hover:border-gold-400/30 transition-all duration-500 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                            style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                        >
                            {/* Border beam effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="absolute w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-top" style={{ top: 0, left: '-96px' }} />
                                    <div className="absolute w-[1px] h-24 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-right" style={{ right: 0, top: '-96px' }} />
                                    <div className="absolute w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-bottom" style={{ bottom: 0, right: '-96px' }} />
                                    <div className="absolute w-[1px] h-24 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-left" style={{ left: 0, bottom: '-96px' }} />
                                </div>
                            </div>

                            {/* Vehicle Image */}
                            <div className="aspect-[16/10] bg-gradient-to-b from-zinc-100 to-zinc-200 relative overflow-hidden">
                                <Image
                                    src={v.image}
                                    alt={VEHICLE_LABELS[v.key]}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-all duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            </div>

                            <div className="p-8 space-y-6 relative z-20 -mt-12">
                                <div>
                                    <h3 className="text-2xl font-italiana text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                                        {VEHICLE_LABELS[v.key]}
                                    </h3>
                                    <p className="text-white/60 text-sm font-manrope leading-relaxed line-clamp-2">
                                        {v.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 text-white/40 text-sm">
                                    <div className="flex items-center gap-2 group-hover:text-white/60 transition-colors">
                                        <Users className="w-4 h-4" />
                                        <span>{v.passengers}</span>
                                    </div>
                                    <div className="flex items-center gap-2 group-hover:text-white/60 transition-colors">
                                        <Briefcase className="w-4 h-4" />
                                        <span>{v.luggage}</span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10 flex items-end justify-between">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">From</p>
                                        <p className="text-2xl font-italiana text-gold-400">£{HOURLY_RATES[v.key]}<span className="text-sm text-white/40 font-manrope">/hr</span></p>
                                    </div>

                                    <Link
                                        href={`/mercedes-${v.key.replace('_', '-')}-chauffeur`}
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 group/btn"
                                    >
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Fleet CTA */}
                <div
                    className={`mt-12 text-center transition-all duration-1000 delay-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 text-white/60 hover:text-gold-400 transition-colors group"
                    >
                        <span className="text-sm uppercase tracking-widest font-manrope">View All Vehicles</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
                @keyframes border-beam-top {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(100% + 192px)); }
                }
                @keyframes border-beam-right {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(calc(100% + 192px)); }
                }
                @keyframes border-beam-bottom {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% - 192px)); }
                }
                @keyframes border-beam-left {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(calc(-100% - 192px)); }
                }

                .animate-border-beam-top {
                    animation: border-beam-top 2.5s linear infinite;
                }
                .animate-border-beam-right {
                    animation: border-beam-right 2.5s linear infinite;
                    animation-delay: 0.625s;
                }
                .animate-border-beam-bottom {
                    animation: border-beam-bottom 2.5s linear infinite;
                    animation-delay: 1.25s;
                }
                .animate-border-beam-left {
                    animation: border-beam-left 2.5s linear infinite;
                    animation-delay: 1.875s;
                }
            `}</style>
        </section>
    );
};

export default FleetPreview;
