import React from 'react';
import { Users, Shield, Star, Heart, Trophy, Target, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Eugene Chauffeurs - Premium luxury chauffeur service in London with over a decade of excellence, professional drivers, and unwavering commitment to quality.',
};

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-gold-400" />,
      title: "Reliability",
      description: "Punctuality and dependability you can count on, every single time."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-400" />,
      title: "Genuine Care",
      description: "We treat every journey like it's our own, with personal attention to detail."
    },
    {
      icon: <Star className="w-8 h-8 text-gold-400" />,
      title: "Excellence",
      description: "Uncompromising standards in service, vehicles, and professionalism."
    },
    {
      icon: <Users className="w-8 h-8 text-gold-400" />,
      title: "Discretion",
      description: "Complete confidentiality and privacy for all our valued clients."
    }
  ];

  const teamHighlights = [
    {
      title: "Experienced Chauffeurs",
      description: "Our team averages over 10 years of professional driving experience with extensive training.",
      stat: "10+ Years",
      icon: <Trophy className="w-8 h-8 text-gold-400" />
    },
    {
      title: "Background Checked",
      description: "Every chauffeur undergoes comprehensive security and background verification processes.",
      stat: "100% Verified",
      icon: <Shield className="w-8 h-8 text-gold-400" />
    },
    {
      title: "Professional Training",
      description: "Continuous training in customer service, safety protocols, and luxury hospitality standards.",
      stat: "Ongoing",
      icon: <Target className="w-8 h-8 text-gold-400" />
    },
    {
      title: "Client Satisfaction",
      description: "Consistently high ratings and testimonials from our discerning clientele worldwide.",
      stat: "5-Star",
      icon: <Star className="w-8 h-8 text-gold-400" />
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

  return (
    <>
      {/* Hero Section - Minimalist Noir */}
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

      {/* Our Story Section - Editorial */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
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

            <div className="relative h-[600px] border border-white/10 p-2">
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

      {/* Our Values - Minimalist Grid */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-6">
              Core <span className="text-white/30">Values.</span>
            </h2>
            <p className="text-white/60 font-manrope font-light max-w-2xl">
              The principles that guide every decision and every mile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-italiana text-white group-hover:text-gold-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/50 font-manrope text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Dark Mode */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-6">
              The <span className="text-gold-400">Team.</span>
            </h2>
            <p className="text-white/60 font-manrope font-light max-w-2xl mx-auto">
              Professional chauffeurs who make the difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamHighlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-8 border border-white/5 hover:border-gold-400/30 transition-colors duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 text-gold-400">
                  {highlight.icon}
                </div>
                <p className="text-3xl font-italiana text-white">
                  {highlight.stat}
                </p>
                <h3 className="text-sm font-manrope font-bold text-white/80 uppercase tracking-widest">
                  {highlight.title}
                </h3>
                <p className="text-white/50 font-manrope text-xs leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.02] border border-white/10 p-12">
            <h3 className="text-2xl font-italiana text-white mb-8 text-center">
              Chauffeur Standards
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Defensive Driving Certified",
                "Multi-lingual Skills",
                "Local Area Knowledge",
                "First Aid Trained",
                "Hospitality Training",
                "Strict Confidentiality",
                "Immaculate Presentation",
                "Regular Evaluations"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
                  <span className="text-white/70 font-manrope text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones - Timeline */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-italiana text-white mb-6">
              Our <span className="text-white/30">Journey.</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } relative pl-12 md:pl-0`}
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
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black border border-gold-400 rounded-full z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;