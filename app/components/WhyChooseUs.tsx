'use client';

import React, { useEffect, useState } from 'react';
import { Shield, Users, Globe, Car, ArrowUpRight } from 'lucide-react';

const WhyChooseUs = () => {
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

    const section = document.getElementById('why-choose-us');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Elite Chauffeurs",
      description: "Vetted professionals who anticipate every need. Discretion and excellence are our standard."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Immaculate Fleet",
      description: "Meticulously maintained vehicles offering the pinnacle of comfort and automotive luxury."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Absolute Privacy",
      description: "Confidentiality is paramount. Your journey remains strictly between you and your chauffeur."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Seamless coordination worldwide. The same gold standard, wherever your travels take you."
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-32 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* Section Header - Editorial Style */}
        <div
          className={`grid md:grid-cols-2 gap-12 mb-24 items-end transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
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

        {/* Features Grid - Enhanced with border beam */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gold-400/10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-black p-10 transition-all duration-700 hover:bg-white/[0.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Border beam effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-20 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-top" style={{ top: 0, left: '-80px' }} />
                  <div className="absolute w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-right" style={{ right: 0, top: '-80px' }} />
                  <div className="absolute w-20 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-bottom" style={{ bottom: 0, right: '-80px' }} />
                  <div className="absolute w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-left" style={{ left: 0, bottom: '-80px' }} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-8 text-gold-400/50 group-hover:text-gold-400 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1 origin-left">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-italiana text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-white/50 font-manrope text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-gold-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes border-beam-top {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100% + 160px)); }
        }
        @keyframes border-beam-right {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(100% + 160px)); }
        }
        @keyframes border-beam-bottom {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 160px)); }
        }
        @keyframes border-beam-left {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-100% - 160px)); }
        }

        .animate-border-beam-top {
          animation: border-beam-top 2s linear infinite;
        }
        .animate-border-beam-right {
          animation: border-beam-right 2s linear infinite;
          animation-delay: 0.5s;
        }
        .animate-border-beam-bottom {
          animation: border-beam-bottom 2s linear infinite;
          animation-delay: 1s;
        }
        .animate-border-beam-left {
          animation: border-beam-left 2s linear infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
