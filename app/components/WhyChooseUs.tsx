import React from 'react';
import { Shield, Users, Globe, Car } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-gold-400" />,
      title: "Elite Professional Team",
      description: "Experienced, vetted chauffeurs who don't just drive—they anticipate, accommodate, and elevate every moment with discretion and care.",
      delay: "0ms"
    },
    {
      icon: <Car className="w-8 h-8 text-gold-400" />,
      title: "Luxury Without Compromise",
      description: "Spacious, meticulously maintained vehicles with premium amenities. Arrive refreshed, whether working in transit or simply relaxing.",
      delay: "150ms"
    },
    {
      icon: <Shield className="w-8 h-8 text-gold-400" />,
      title: "Complete Discretion",
      description: "Total privacy and confidentiality built into everything we do. Conduct sensitive business or simply disconnect—it stays between us.",
      delay: "300ms"
    },
    {
      icon: <Globe className="w-8 h-8 text-gold-400" />,
      title: "Global Reach",
      description: "Seamless coordination worldwide through trusted partners. The same gold-standard service whether in London or internationally.",
      delay: "450ms"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Elegant Background with Brand Colors */}
      <div className="absolute inset-0">
        {/* Base gradient using brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
        
        {/* Subtle animated elements with brand colors */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400/10 to-gold-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-zinc-700/20 to-zinc-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gold-500/5 to-gold-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles in brand colors */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div 
            className="inline-block animate-fade-in"
            style={{ animationDelay: '0ms' }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-cinzel leading-tight">
              Why London's<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Elite Choose Us
              </span>
            </h2>
          </div>
          <div 
            className="animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <p className="text-xl md:text-2xl text-white/80 font-montserrat max-w-3xl mx-auto leading-relaxed">
              More than transport—a seamless experience crafted around you.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-gold-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-600/0 group-hover:from-gold-500/10 group-hover:to-gold-600/15 rounded-2xl transition-all duration-500"></div>
              
              <div className="relative space-y-4">
                <div className="inline-block p-3 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl group-hover:from-gold-500/20 group-hover:to-gold-600/20 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-cinzel">
                  {feature.title}
                </h3>
                <p className="text-white/70 font-montserrat leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;