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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-black pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-gold-600/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-cinzel">
              About <span className="text-gradient-gold">Eugene Chauffeurs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-montserrat max-w-3xl mx-auto">
              A decade of excellence in luxury transportation, built on trust, quality, and genuine care for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              
              <div className="space-y-4 text-white/80 font-montserrat text-lg leading-relaxed">
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

              <div className="flex items-center space-x-8">
                <div>
                  <p className="text-3xl font-bold text-gold-400 font-cinzel">50,000+</p>
                  <p className="text-white/60 font-montserrat">Journeys Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-400 font-cinzel">10+</p>
                  <p className="text-white/60 font-montserrat">Years of Service</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-400 font-cinzel">5-Star</p>
                  <p className="text-white/60 font-montserrat">Average Rating</p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/EC logo 2 color cropped.png"
                alt="Eugene Chauffeurs Luxury Service"
                fill
                className="object-contain p-8 bg-gradient-to-br from-zinc-900 to-black"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-xl text-white/80 font-montserrat max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="inline-block p-3 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-cinzel">
                    {value.title}
                  </h3>
                  <p className="text-white/70 font-montserrat">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel mb-4">
              Our <span className="text-gradient-gold">Team</span>
            </h2>
            <p className="text-xl text-white/80 font-montserrat max-w-3xl mx-auto">
              Professional chauffeurs who make the difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamHighlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center space-y-4"
              >
                <div className="inline-block p-4 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl">
                  {highlight.icon}
                </div>
                <p className="text-3xl font-bold text-gold-400 font-cinzel">
                  {highlight.stat}
                </p>
                <h3 className="text-xl font-bold text-white font-montserrat">
                  {highlight.title}
                </h3>
                <p className="text-white/70 font-montserrat text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20">
            <h3 className="text-2xl font-bold text-white font-cinzel mb-6">
              What Sets Our Chauffeurs Apart
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Advanced defensive driving certification",
                "Multi-lingual communication skills",
                "Comprehensive local area knowledge",
                "First aid and emergency response training",
                "Luxury hospitality service training",
                "Strict confidentiality agreements",
                "Professional presentation standards",
                "Regular performance evaluations"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-white/80 font-montserrat">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel mb-4">
              Our <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="text-xl text-white/80 font-montserrat max-w-3xl mx-auto">
              Key milestones in our pursuit of excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold-400/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}>
                    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-gold-500/20">
                      <p className="text-2xl font-bold text-gold-400 font-cinzel mb-2">
                        {milestone.year}
                      </p>
                      <p className="text-white/80 font-montserrat">
                        {milestone.achievement}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-400 rounded-full border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel mb-6">
            Experience the <span className="text-gradient-gold">Difference</span>
          </h2>
          <p className="text-xl text-white/80 font-montserrat mb-8">
            Join thousands of satisfied clients who trust Eugene Chauffeurs for their luxury transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-zinc-800 text-white px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-zinc-700 transition-all duration-300 border border-gold-500/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;