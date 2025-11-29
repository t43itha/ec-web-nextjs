'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Users, Shield, Star, Heart, Trophy, Target, ArrowUpRight } from 'lucide-react';
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
      className={className}
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

// ============================================================================
// DATA
// ============================================================================

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Reliability",
    description: "Punctuality and dependability you can count on, every single time."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Genuine Care",
    description: "We treat every journey like it's our own, with personal attention to detail."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Excellence",
    description: "Uncompromising standards in service, vehicles, and professionalism."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Discretion",
    description: "Complete confidentiality and privacy for all our valued clients."
  }
];

const teamHighlights = [
  {
    title: "Experienced Chauffeurs",
    description: "Our team averages over 10 years of professional driving experience with extensive training.",
    stat: "10+ Years",
    icon: <Trophy className="w-8 h-8" />
  },
  {
    title: "Background Checked",
    description: "Every chauffeur undergoes comprehensive security and background verification processes.",
    stat: "100% Verified",
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "Professional Training",
    description: "Continuous training in customer service, safety protocols, and luxury hospitality standards.",
    stat: "Ongoing",
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Client Satisfaction",
    description: "Consistently high ratings and testimonials from our discerning clientele worldwide.",
    stat: "5-Star",
    icon: <Star className="w-8 h-8" />
  }
];

const milestones = [
  { year: "2014", achievement: "Founded with a vision of redefining luxury transport" },
  { year: "2016", achievement: "Expanded fleet to include premium SUVs and executive vehicles" },
  { year: "2018", achievement: "Launched international partnership network" },
  { year: "2020", achievement: "Introduced contactless service and enhanced safety protocols" },
  { year: "2023", achievement: "Achieved 50,000+ successful journeys milestone" },
  { year: "2024", achievement: "Leading luxury chauffeur service in Greater London" }
];

const chauffeurStandards = [
  "Defensive Driving Certified",
  "Multi-lingual Skills",
  "Local Area Knowledge",
  "First Aid Trained",
  "Hospitality Training",
  "Strict Confidentiality",
  "Immaculate Presentation",
  "Regular Evaluations"
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const AboutPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
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
      { threshold: 0.1 }
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

      {/* Hero Section - Minimalist Noir (UNCHANGED) */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Our Legacy</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              About <br />
              <span className="text-white/30">Eugene.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              A decade of excellence in luxury transportation, built on trust, quality, and genuine care for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section - Enhanced with scroll reveal */}
      <section
        id="story-section"
        data-reveal
        className="py-20 bg-black border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div
              className={`space-y-12 transition-all duration-1000 ${
                visibleSections.has('story-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                  The <span className="text-gold-400">Story.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    Eugene Chauffeurs was born from a simple belief: luxury transportation should be more than just getting from point A to point B. It should be an experience that adds value to your journey, reduces stress, and allows you to focus on what matters most.
                  </p>
                  <p>
                    Founded in 2014, we started with a single vehicle and an unwavering commitment to excellence. Today, we're proud to be one of London's most trusted luxury chauffeur services, serving discerning clients who expect nothing but the best.
                  </p>
                  <p>
                    Our success isn't measured just in the thousands of journeys we've completed, but in the relationships we've built, the trust we've earned, and the peace of mind we provide to every client who steps into our vehicles.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-4xl font-italiana text-white mb-2">50k+</p>
                  <p className="text-gold-400 text-xs uppercase tracking-widest">Journeys</p>
                </div>
                <div>
                  <p className="text-4xl font-italiana text-white mb-2">10+</p>
                  <p className="text-gold-400 text-xs uppercase tracking-widest">Years</p>
                </div>
                <div>
                  <p className="text-4xl font-italiana text-white mb-2">5.0</p>
                  <p className="text-gold-400 text-xs uppercase tracking-widest">Rating</p>
                </div>
              </div>
            </div>

            <div
              className={`relative h-[600px] border border-white/10 p-2 transition-all duration-1000 delay-300 ${
                visibleSections.has('story-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                <Image
                  src="/EC logo 2 color cropped.png"
                  alt="Eugene Chauffeurs Luxury Service"
                  fill
                  className="object-contain p-12 opacity-50 grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Enhanced with border beam */}
      <section
        id="values-section"
        data-reveal
        className="py-32 bg-black border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div
            className={`mb-20 transition-all duration-1000 ${
              visibleSections.has('values-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-4 font-manrope">Our Foundation</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-italiana text-white mb-6">
              Core <span className="text-white/30">Values.</span>
            </h2>
            <p className="text-white/60 font-manrope font-light max-w-2xl">
              The principles that guide every decision and every mile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gold-400/10">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group relative bg-black p-10 transition-all duration-700 hover:bg-white/[0.02] ${
                  visibleSections.has('values-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
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

                <div className="relative z-10 space-y-6">
                  <div className="text-gold-400/50 group-hover:text-gold-400 transition-all duration-500 transform group-hover:-translate-y-1">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-italiana text-white group-hover:text-gold-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/50 font-manrope text-sm leading-relaxed">
                    {value.description}
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
      </section>

      {/* Our Team - Enhanced with animations */}
      <section
        id="team-section"
        data-reveal
        className="py-32 bg-black border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-4 font-manrope">Our People</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-italiana text-white mb-6">
              The <span className="text-gold-400">Team.</span>
            </h2>
            <p className="text-white/60 font-manrope font-light max-w-2xl mx-auto">
              Professional chauffeurs who make the difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {teamHighlights.map((highlight, index) => (
              <div
                key={index}
                className={`group relative text-center space-y-4 p-8 bg-white/[0.02] border border-white/5 hover:border-gold-400/30 transition-all duration-500 ${
                  visibleSections.has('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Border beam effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-top" style={{ top: 0, left: '-64px' }} />
                    <div className="absolute w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-right" style={{ right: 0, top: '-64px' }} />
                    <div className="absolute w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-bottom" style={{ bottom: 0, right: '-64px' }} />
                    <div className="absolute w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-left" style={{ left: 0, bottom: '-64px' }} />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 text-gold-400/50 group-hover:text-gold-400 transition-colors">
                    {highlight.icon}
                  </div>
                  <p className="text-3xl font-italiana text-white group-hover:text-gold-400 transition-colors">
                    {highlight.stat}
                  </p>
                  <h3 className="text-sm font-manrope font-bold text-white/80 uppercase tracking-widest">
                    {highlight.title}
                  </h3>
                  <p className="text-white/50 font-manrope text-xs leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`bg-white/[0.02] border border-white/10 p-12 transition-all duration-1000 delay-500 ${
              visibleSections.has('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-2xl font-italiana text-white mb-8 text-center">
              Chauffeur Standards
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chauffeurStandards.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-1.5 h-1.5 bg-gold-400/50 rounded-full group-hover:bg-gold-400 transition-colors"></div>
                  <span className="text-white/70 font-manrope text-sm group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones - Enhanced Timeline */}
      <section
        id="milestones-section"
        data-reveal
        className="py-32 bg-black border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div
            className={`mb-20 transition-all duration-1000 ${
              visibleSections.has('milestones-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-4 font-manrope">Milestones</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-italiana text-white mb-6">
              Our <span className="text-white/30">Journey.</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-gold-400/50 via-white/10 to-transparent"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } relative pl-12 md:pl-0 transition-all duration-700 ${
                    visibleSections.has('milestones-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  {/* Mobile Dot */}
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-gold-400 rounded-full md:hidden"></div>

                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  }`}>
                    <div className="group">
                      <p className="text-4xl font-italiana text-white mb-2 group-hover:text-gold-400 transition-colors">
                        {milestone.year}
                      </p>
                      <p className="text-white/60 font-manrope font-light leading-relaxed">
                        {milestone.achievement}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black border-2 border-gold-400 rounded-full z-10 group-hover:bg-gold-400 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gold-400/5 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <p className="text-gold-400 text-xs uppercase tracking-[0.4em] mb-8 font-manrope">
            Ready to Experience the Difference?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-italiana text-white mb-8">
            Begin Your <span className="text-white/30">Journey</span>
          </h2>
          <p className="text-white/50 font-manrope font-light text-lg mb-12 max-w-2xl mx-auto">
            Discover why London's elite trust Eugene Chauffeurs for their most important journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton href="/contact" className="btn-luxury">
              <span className="flex items-center gap-4">
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </MagneticButton>
            <MagneticButton href="/services" className="btn-luxury-outline">
              <span>View Services</span>
            </MagneticButton>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default AboutPage;
