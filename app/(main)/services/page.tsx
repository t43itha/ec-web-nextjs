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
      icon: <Plane className="w-20 h-20 text-gold-400" />,
      title: "Airport Transfers",
      subtitle: "No Stress, All Comfort",
      description: "Never worry about flight delays or rushing to the airport again. We track your flight in real-time, arriving early to handle your luggage, letting you step directly from terminal to tranquility.",
      features: ["Real-time flight tracking", "Meet & greet service", "Luggage assistance", "Premium vehicles"],
      image: "/airport svc.png"
    },
    {
      icon: <Briefcase className="w-20 h-20 text-gold-400" />,
      title: "Corporate Travel",
      subtitle: "Your Mobile Executive Suite",
      description: "Turn travel time into productive time. Our pristine vehicles double as your mobile office—private, comfortable, and discreet, allowing you to focus on your agenda, not traffic or parking.",
      features: ["WiFi connectivity", "Privacy partition", "Charging stations", "Refreshments"],
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Calendar className="w-20 h-20 text-gold-400" />,
      title: "Events & Special Occasions",
      subtitle: "Arrive in Style, Effortlessly",
      description: "Make every event memorable with flawless chauffeur services. From red-carpet galas to personal celebrations, our chauffeurs ensure your arrival is impressive, relaxed, and precisely on time.",
      features: ["Red carpet service", "Special occasion packages", "Group transportation", "Event coordination"],
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const additionalServices = [
    {
      title: "Hourly Hire",
      description: "Flexible chauffeur services for multiple stops and extended journeys with complete freedom.",
      icon: <Clock className="w-8 h-8 text-gold-400" />,
      features: ["Flexible scheduling", "Multiple destinations", "Wait time included", "Hourly rates"]
    },
    {
      title: "International Service",
      description: "Seamless luxury transport coordination worldwide through our trusted partner network.",
      icon: <Globe className="w-8 h-8 text-gold-400" />,
      features: ["Global coverage", "Partner network", "Consistent quality", "Local expertise"]
    },
    {
      title: "VIP Protection",
      description: "Discreet security-conscious transport for high-profile clients requiring enhanced privacy.",
      icon: <Shield className="w-8 h-8 text-gold-400" />,
      features: ["Enhanced security", "Discreet service", "Trained chauffeurs", "Confidentiality"]
    },
    {
      title: "Group Transportation",
      description: "Coordinated luxury transport for corporate groups, events, and special delegations.",
      icon: <Users className="w-8 h-8 text-gold-400" />,
      features: ["Multiple vehicles", "Synchronized arrivals", "Group coordination", "Event logistics"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-black pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-gold-600/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-cinzel">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-montserrat max-w-3xl mx-auto">
              Tailored luxury transportation solutions for every journey, every occasion, every need.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.title.toLowerCase().split(' ')[0]}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block p-4 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl">
                    {service.icon}
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel">
                      {service.title}
                    </h2>
                    <p className="text-2xl text-gold-400 font-cinzel">
                      {service.subtitle}
                    </p>
                    <p className="text-lg text-white/80 font-montserrat leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                        <span className="text-white/90 font-montserrat">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Image */}
                <div className={`relative h-[400px] rounded-2xl overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  {service.image.startsWith('http') ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="additional" className="py-20 bg-gradient-to-br from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel mb-4">
              Additional <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-xl text-white/80 font-montserrat max-w-3xl mx-auto">
              Comprehensive solutions for every transportation need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                id={service.title.toLowerCase().split(' ')[0]}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="inline-block p-3 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white font-cinzel">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 font-montserrat">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 font-montserrat text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;