import React from 'react';
import { Shield, Users, Globe, Car } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-gold-400" />,
      title: "Elite Chauffeurs",
      description: "Vetted professionals who anticipate every need. Discretion and excellence are our standard.",
      delay: "0ms"
    },
    {
      icon: <Car className="w-6 h-6 text-gold-400" />,
      title: "Immaculate Fleet",
      description: "Meticulously maintained vehicles offering the pinnacle of comfort and automotive luxury.",
      delay: "150ms"
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: "Absolute Privacy",
      description: "Confidentiality is paramount. Your journey remains strictly between you and your chauffeur.",
      delay: "300ms"
    },
    {
      icon: <Globe className="w-6 h-6 text-gold-400" />,
      title: "Global Network",
      description: "Seamless coordination worldwide. The same gold standard, wherever your travels take you.",
      delay: "450ms"
    }
  ];

  return (
    <section className="relative py-32 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Section Header - Editorial Style */}
        <div className="grid md:grid-cols-2 gap-12 mb-24 items-end">
          <div>
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">The Standard</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-italiana text-white leading-[0.9]">
              Why London's <br />
              <span className="text-white/30">Elite Choose Us.</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-white/60 font-manrope font-light text-lg leading-relaxed max-w-md md:ml-auto">
              More than transport—a seamless experience crafted around your schedule, your preferences, and your peace of mind.
            </p>
          </div>
        </div>

        {/* Features Grid - Minimalist */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="mb-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform origin-left">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-italiana text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/50 font-manrope text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;