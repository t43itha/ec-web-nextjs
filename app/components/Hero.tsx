"use client";

import React from 'react';
import { ArrowRight, Shield, Clock, Star, Phone, Building2 } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in">
            {/* Premium Service Badge - Hidden on mobile, visible on sm and up */}
            <div className="hidden sm:inline-flex items-center justify-center bg-gold-400/10 border border-gold-400/20 rounded-full px-7 py-2.5 backdrop-blur-sm mb-6 md:mb-8">
              <span className="text-gold-400 font-montserrat font-medium text-base tracking-wide">Meet & Greet • Flight Tracking • 60 mins Free Wait</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-cinzel leading-tight mb-8">
            London Chauffeur <br /> & Airport Transfers
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-xl lg:text-xl text-white/90 font-montserrat font-light max-w-3xl mx-auto leading-relaxed mb-24">
              Arrive Relaxed, Confident and Ready to Conquer.<br />           
            </p>

            {/* Dual CTA Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
              {/* Primary CTA - Book Now */}
              <div className="order-1 lg:order-1">
                <Link href="#booking" className="group inline-flex bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105 shadow-2xl items-center space-x-3">
                  <span>Book Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Secondary CTA - Call Us Now */}
              <div className="order-2 lg:order-2">
                <a href="tel:+447340801274" className="group flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 group-hover:border-gold-400/50 transition-all duration-300">
                      <Phone className="w-6 h-6 text-white group-hover:text-gold-400 transition-colors" />
                    </div>
                    {/* Pulse ring effect */}
                    <div className="absolute inset-0 w-14 h-14 rounded-full border-2 border-white/30 group-hover:border-gold-400/50"></div>
                  </div>
                  <div className="text-left">
                    <p className="text-white/80 font-montserrat text-xs uppercase tracking-wider">Call Us Now</p>
                    <p className="text-white font-montserrat font-semibold text-base group-hover:text-gold-400 transition-colors">+44 7340 801 274</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators - Anchored at Bottom */}
      <div className="relative z-10 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/70">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0" />
              <span className="font-montserrat text-xs sm:text-sm">TfL Licensed (0108860101)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0" />
              <span className="font-montserrat text-xs sm:text-sm">24/7 Availability</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0" />
              <span className="font-montserrat text-xs sm:text-sm">5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0" />
              <span className="font-montserrat text-xs sm:text-sm">Corporate Accounts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/447340801274?text=Hello!%20I'd%20like%20to%20inquire%20about%20your%20chauffeur%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-green-500/30 animate-ping"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;