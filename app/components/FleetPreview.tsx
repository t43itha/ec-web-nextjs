import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Briefcase } from 'lucide-react';
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
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className="text-center mb-16 space-y-4">
                    <p className="text-gold-400 text-xs uppercase tracking-[0.3em]">Our Fleet</p>
                    <h2 className="text-4xl md:text-5xl font-italiana text-white">
                        Choose Your <span className="text-white/30">Chariot.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {vehicles.map((v) => (
                        <div key={v.key} className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-gold-400/30 transition-all duration-500">
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
                                    <h3 className="text-2xl font-italiana text-white mb-2">{VEHICLE_LABELS[v.key]}</h3>
                                    <p className="text-white/60 text-sm font-manrope leading-relaxed line-clamp-2">
                                        {v.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 text-white/40 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        <span>{v.passengers}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
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
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetPreview;
