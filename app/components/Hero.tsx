"use client";

import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, Star, Phone, Building2 } from 'lucide-react';
import Link from 'next/link';
import { trackPhoneCall, trackWhatsApp } from '@/app/lib/analytics';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/ec hero-video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
      </div>

      {/* Main Content - Asymmetrical Editorial Layout */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col justify-center">
        <div className="max-w-3xl space-y-10 animate-fade-in-up">

          {/* Minimalist Badge */}
          <div className="inline-flex items-center space-x-3">
            <div className="h-[1px] w-12 bg-gold-400"></div>
            <span className="text-gold-300 text-xs tracking-[0.3em] uppercase font-medium">BEYOND TRAVEL</span>
          </div>

          {/* Editorial Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-italiana leading-[0.9] tracking-tight">
            Luxury <br />
            <span className="text-white/40 ml-12 sm:ml-24">Chauffeur.</span>
          </h1>

          {/* Refined Subheading */}
          <p className="text-lg md:text-xl text-white/70 font-light max-w-md leading-relaxed pl-2 border-l border-white/20">
            More than just a driver. Your personal chauffeur for life, business, events, and airport transfers in London.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-start gap-6 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-luxury group"
            >
              <span className="flex items-center gap-4">
                Reserve Now
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <a
              href="tel:+447340801274"
              className="btn-luxury-outline group flex items-center gap-4"
              onClick={() => trackPhoneCall('hero_section', '+447340801274')}
            >
              <Phone className="w-4 h-4" />
              <span>+44 20 8191 1882</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Minimalist Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-6">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-12">
              <div className="flex items-center space-x-3 text-white/60">
                <Shield className="w-4 h-4 text-gold-400" />
                <span className="text-xs tracking-[0.2em] uppercase">TfL Licensed</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Star className="w-4 h-4 text-gold-400" />
                <span className="text-xs tracking-[0.2em] uppercase">Five Star Service</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center space-x-4 text-white/40">
              <span className="text-[10px] uppercase tracking-widest">Scroll</span>
              <div className="h-[1px] w-16 bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp - Refined */}
      <a
        href="https://wa.me/447340801274?text=Hello!%20I'd%20like%20to%20inquire%20about%20your%20chauffeur%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Chat on WhatsApp"
        onClick={() => trackWhatsApp('hero_section', '+447340801274')}
      >
        <div className="relative flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-gold-400 hover:border-gold-400 transition-all duration-500">
          <svg
            className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </a>
    </section>
  );
};

export default Hero;