import React from 'react';
import { Plane, Briefcase, Calendar, Clock, Shield, Globe, ArrowRight, CheckCircle, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Premium chauffeur services including airport transfers, corporate travel, and event transportation. Luxury vehicles and professional drivers available 24/7.',
};

const ServicesPage = () => {
  const services = [
    {
      icon: <Plane className="w-12 h-12 text-gold-400" />,
      title: "Airport Transfers",
      subtitle: "Seamless Connections",
      description: "Precision timing for global travelers. We monitor flights in real-time, ensuring your chauffeur is waiting the moment you land. From tarmac to destination, experience absolute fluidity.",
      features: ["Real-time flight tracking", "Meet & greet service", "Luggage assistance", "Premium vehicles"],
      image: "/airport svc.png"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-gold-400" />,
      title: "Corporate Travel",
      subtitle: "The Mobile Office",
      description: "Maximize productivity in a private, secure environment. Our vehicles serve as an extension of your workspace, offering silence, connectivity, and discretion for confidential discussions.",
      features: ["WiFi connectivity", "Privacy partition", "Charging stations", "Refreshments"],
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Calendar className="w-12 h-12 text-gold-400" />,
      title: "Events & Occasions",
      subtitle: "Grand Arrivals",
      description: "Make an entrance that resonates. Whether for red-carpet galas, weddings, or private celebrations, our service ensures you arrive with elegance, style, and perfect timing.",
      features: ["Red carpet service", "Special occasion packages", "Group transportation", "Event coordination"],
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const additionalServices = [
    {
      title: "Hourly Hire",
      description: "Complete freedom for complex itineraries. Your chauffeur waits while you attend meetings or shop.",
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      features: ["Flexible scheduling", "Multiple destinations", "Wait time included", "Hourly rates"]
    },
    {
      title: "International",
      description: "One contact, global reach. We coordinate luxury transport in major cities worldwide.",
      icon: <Globe className="w-6 h-6 text-gold-400" />,
      features: ["Global coverage", "Partner network", "Consistent quality", "Local expertise"]
    },
    {
      title: "VIP Protection",
      description: "Enhanced security protocols for high-profile clients requiring absolute discretion.",
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      features: ["Enhanced security", "Discreet service", "Trained chauffeurs", "Confidentiality"]
    },
    {
      title: "Group Travel",
      description: "Coordinated logistics for delegations and corporate teams using our luxury fleet.",
      icon: <Users className="w-6 h-6 text-gold-400" />,
      features: ["Multiple vehicles", "Synchronized arrivals", "Group coordination", "Event logistics"]
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
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Expertise</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Curated <br />
              <span className="text-white/30">Services.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Tailored luxury transportation solutions for every journey. Precision, comfort, and style in every mile.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services - Editorial Layout */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.title.toLowerCase().split(' ')[0]}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-6 opacity-80">
                    {service.icon}
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-italiana text-white">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gold-400 font-manrope tracking-widest uppercase text-xs">
                      {service.subtitle}
                    </p>
                    <p className="text-lg text-white/60 font-manrope font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
                        <span className="text-white/80 font-manrope text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center space-x-3 text-white hover:text-gold-400 transition-colors"
                    >
                      <span className="font-manrope text-xs uppercase tracking-widest">Reserve Service</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Image - Sharp & Noir */}
                <div className={`relative h-[500px] overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none"></div>
                  {service.image.startsWith('http') ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services - Grid */}
      <section id="additional" className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-6">
              Specialized <span className="text-white/30">Requests.</span>
            </h2>
            <p className="text-white/60 font-manrope font-light max-w-2xl">
              Comprehensive solutions for every transportation need, executed with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-italiana text-white group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/50 font-manrope text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-white/5">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <span className="text-gold-400 text-xs mt-1">+</span>
                        <span className="text-white/70 font-manrope text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href="/contact"
              className="btn-luxury"
            >
              <span className="flex items-center gap-4">
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;