'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Plane, Briefcase, Calendar, Clock, Shield, Globe, ArrowRight, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

// Magnetic button component
const MagneticButton = ({
  children,
  className = '',
  href
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      {children}
    </Link>
  );
};

// Border beam animation component
const BorderBeam = ({ className = '' }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    <div className="border-beam absolute w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
  </div>
);

// ============================================================================
// DATA
// ============================================================================

const services = [
  {
    icon: <Plane className="w-12 h-12" />,
    title: "Airport Transfers",
    subtitle: "Seamless Connections",
    description: "Precision timing for global travelers. We monitor flights in real-time, ensuring your chauffeur is waiting the moment you land. From tarmac to destination, experience absolute fluidity.",
    features: ["Real-time flight tracking", "Meet & greet service", "Luggage assistance", "Premium vehicles"],
    image: "/airport svc.png",
    accent: "from-gold-400/20 to-transparent"
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: "Corporate Travel",
    subtitle: "The Mobile Office",
    description: "Maximize productivity in a private, secure environment. Our vehicles serve as an extension of your workspace, offering silence, connectivity, and discretion for confidential discussions.",
    features: ["WiFi connectivity", "Privacy partition", "Charging stations", "Refreshments"],
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    accent: "from-white/10 to-transparent"
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Events & Occasions",
    subtitle: "Grand Arrivals",
    description: "Make an entrance that resonates. Whether for red-carpet galas, weddings, or private celebrations, our service ensures you arrive with elegance, style, and perfect timing.",
    features: ["Red carpet service", "Special occasion packages", "Group transportation", "Event coordination"],
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    accent: "from-gold-400/10 to-transparent"
  }
];

const additionalServices = [
  {
    title: "Hourly Hire",
    description: "Complete freedom for complex itineraries. Your chauffeur waits while you attend meetings or shop.",
    icon: <Clock className="w-8 h-8" />,
    features: ["Flexible scheduling", "Multiple destinations", "Wait time included"],
    span: "col-span-2 row-span-1"
  },
  {
    title: "International",
    description: "One contact, global reach. We coordinate luxury transport in major cities worldwide.",
    icon: <Globe className="w-8 h-8" />,
    features: ["Global coverage", "Partner network", "Local expertise"],
    span: "col-span-1 row-span-2"
  },
  {
    title: "VIP Protection",
    description: "Enhanced security protocols for high-profile clients requiring absolute discretion.",
    icon: <Shield className="w-8 h-8" />,
    features: ["Enhanced security", "Trained chauffeurs", "Confidentiality"],
    span: "col-span-1 row-span-1"
  },
  {
    title: "Group Travel",
    description: "Coordinated logistics for delegations and corporate teams using our luxury fleet.",
    icon: <Users className="w-8 h-8" />,
    features: ["Multiple vehicles", "Synchronized arrivals", "Event logistics"],
    span: "col-span-2 row-span-1"
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const ServicesPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePanel, setActivePanel] = useState(0);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / maxScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Horizontal scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!horizontalContainerRef.current || !horizontalRef.current) return;

      const container = horizontalContainerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress through the pinned section
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrollableHeight = container.offsetHeight - windowHeight;
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);

        // Move panels horizontally
        const panelWidth = horizontalRef.current.scrollWidth - window.innerWidth;
        horizontalRef.current.style.transform = `translateX(-${progress * panelWidth}px)`;

        // Update active panel
        setActivePanel(Math.floor(progress * services.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-gold-400 to-gold-300 transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* ================================================================== */}
      {/* HERO SECTION - Minimalist Noir */}
      {/* ================================================================== */}
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

      {/* ================================================================== */}
      {/* HORIZONTAL SCROLL GALLERY */}
      {/* ================================================================== */}
      <div
        ref={horizontalContainerRef}
        className="relative bg-rich-black"
        style={{ height: `${100 + services.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Panel indicators */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 z-20 flex flex-col gap-4">
            {services.map((_, i) => (
              <div
                key={i}
                className={`w-[2px] h-8 transition-all duration-500 ${
                  activePanel === i ? 'bg-gold-400 h-12' : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Section counter */}
          <div className="absolute top-8 right-8 z-20 font-italiana text-6xl text-white/10">
            <span className="text-gold-400">0{activePanel + 1}</span>
            <span className="text-2xl">/0{services.length}</span>
          </div>

          {/* Horizontal panels */}
          <div
            ref={horizontalRef}
            className="flex h-full transition-transform duration-100 ease-out will-change-transform"
            style={{ width: `${services.length * 100}vw` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative w-screen h-full flex items-center"
              >
                {/* Background image with reveal */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className={`absolute inset-0 transition-all duration-1000 ${
                      activePanel === index ? 'opacity-100 scale-100' : 'opacity-40 scale-110'
                    }`}
                  >
                    {service.image.startsWith('http') ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        style={{ filter: activePanel === index ? 'grayscale(0.7)' : 'grayscale(1)' }}
                      />
                    ) : (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        style={{ filter: activePanel === index ? 'grayscale(0.7)' : 'grayscale(1)' }}
                        sizes="100vw"
                        priority={index === 0}
                      />
                    )}
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-black/60" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.accent}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text content */}
                    <div className="space-y-8">
                      <div className={`text-gold-400/60 transition-all duration-700 ${
                        activePanel === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}>
                        {service.icon}
                      </div>

                      <div className="overflow-hidden">
                        <h2
                          className={`text-5xl md:text-7xl lg:text-8xl font-italiana text-white transition-all duration-700 ${
                            activePanel === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                          }`}
                          style={{ transitionDelay: '0.1s' }}
                        >
                          {service.title}
                        </h2>
                      </div>

                      <div className="overflow-hidden">
                        <p
                          className={`text-gold-400 text-sm uppercase tracking-[0.3em] font-manrope transition-all duration-700 ${
                            activePanel === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                          }`}
                          style={{ transitionDelay: '0.2s' }}
                        >
                          {service.subtitle}
                        </p>
                      </div>

                      <p
                        className={`text-lg text-white/60 font-manrope font-light max-w-lg leading-relaxed transition-all duration-700 ${
                          activePanel === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.3s' }}
                      >
                        {service.description}
                      </p>

                      {/* Features */}
                      <div
                        className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
                          activePanel === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.4s' }}
                      >
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 border border-white/10 text-white/70 text-xs uppercase tracking-wider font-manrope hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div
                        className={`pt-8 transition-all duration-700 ${
                          activePanel === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.5s' }}
                      >
                        <MagneticButton
                          href="/contact"
                          className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 hover:bg-gold-300 transition-colors duration-500"
                        >
                          <span className="text-xs uppercase tracking-[0.2em] font-medium">Book This Service</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </MagneticButton>
                      </div>
                    </div>

                    {/* Visual element */}
                    <div className="hidden lg:block">
                      <div
                        className={`relative aspect-[4/5] overflow-hidden transition-all duration-1000 ${
                          activePanel === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                      >
                        <div className="absolute inset-0 border border-gold-400/20" />
                        <div className="absolute -inset-px bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* ADDITIONAL SERVICES - Bento Grid */}
      {/* ================================================================== */}
      <section
        id="additional-services"
        data-reveal
        className="py-32 bg-rich-black relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-400/5 blur-[100px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          {/* Section header */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              visibleSections.has('additional-services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-4 font-manrope">Specialized Solutions</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-italiana text-white mb-6">
              Beyond the <span className="text-white/30">Ordinary</span>
            </h2>
            <p className="text-white/50 font-manrope font-light max-w-xl text-lg">
              Comprehensive solutions tailored to your unique requirements.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-gold-400/10">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-rich-black p-10 md:p-12 ${service.span}
                           transition-all duration-700 hover:bg-white/[0.02]
                           ${visibleSections.has('additional-services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Border beam effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute w-20 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-top"
                      style={{ top: 0, left: '-80px' }}
                    />
                    <div
                      className="absolute w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-right"
                      style={{ right: 0, top: '-80px' }}
                    />
                    <div
                      className="absolute w-20 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-bottom"
                      style={{ bottom: 0, right: '-80px' }}
                    />
                    <div
                      className="absolute w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-left"
                      style={{ left: 0, bottom: '-80px' }}
                    />
                  </div>
                </div>

                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.01]" />

                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(192,160,98,0.1) 0%, transparent 50%)'
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-gold-400/50 group-hover:text-gold-400 transition-all duration-500 mb-6 transform group-hover:-translate-y-1">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-italiana text-white mb-4 group-hover:text-gold-400 transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-white/40 font-manrope text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-6 border-t border-white/5">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-white/50 group-hover:text-white/70 transition-colors"
                      >
                        <span className="w-1 h-1 bg-gold-400/50 rounded-full" />
                        <span className="text-xs font-manrope">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="w-6 h-6 text-gold-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`mt-20 flex justify-center transition-all duration-1000 delay-500 ${
              visibleSections.has('additional-services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <MagneticButton
              href="/contact"
              className="btn-luxury group"
            >
              <span className="flex items-center gap-4">
                Enquire About Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CLOSING SECTION */}
      {/* ================================================================== */}
      <section className="py-40 bg-rich-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gold-400/5 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <p className="text-gold-400 text-xs uppercase tracking-[0.4em] mb-8 font-manrope">
            Ready to Experience Excellence?
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-italiana text-white mb-8">
            Your Journey <span className="text-white/30">Awaits</span>
          </h2>
          <p className="text-white/50 font-manrope font-light text-lg mb-12 max-w-2xl mx-auto">
            Contact us to discuss your requirements and discover how Eugene Chauffeurs
            can elevate your travel experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton href="/contact" className="btn-luxury">
              <span className="flex items-center gap-4">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </span>
            </MagneticButton>
            <MagneticButton href="tel:+447424163636" className="btn-luxury-outline">
              <span>Call Now</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CUSTOM STYLES */}
      {/* ================================================================== */}
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

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </>
  );
};

export default ServicesPage;
