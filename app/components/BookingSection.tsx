import React from 'react';
import { Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const BookingSection = () => {
  return (
    <section id="booking" className="py-32 bg-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold-400/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Content & Contact (Span 4) */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <p className="text-gold-400 text-xs uppercase tracking-[0.3em]">Reservations</p>
              <h2 className="text-5xl md:text-6xl font-italiana text-white leading-none">
                Begin Your <br />
                <span className="text-white/30">Journey.</span>
              </h2>
              <p className="text-white/60 font-manrope font-light leading-relaxed max-w-md">
                Secure your vehicle in minutes with our encrypted booking system. For complex itineraries, our concierge team is at your disposal.
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-6 pt-8 border-t border-white/10">
              <h3 className="text-lg font-italiana text-white">Direct Concierge</h3>
              
              <a href="tel:+442081911882" className="group flex items-center justify-between p-6 border border-white/10 hover:border-gold-400/30 hover:bg-white/5 transition-all duration-500">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-gold-400" />
                  <span className="text-white font-manrope text-sm tracking-wide">+44 20 8191 1882</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a href="https://wa.me/447340801274" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 border border-white/10 hover:border-gold-400/30 hover:bg-white/5 transition-all duration-500">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-5 h-5 text-gold-400" />
                  <span className="text-white font-manrope text-sm tracking-wide">WhatsApp Priority</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a href="mailto:bookings@eugenechauffeurs.com" className="group flex items-center justify-between p-6 border border-white/10 hover:border-gold-400/30 hover:bg-white/5 transition-all duration-500">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-gold-400" />
                  <span className="text-white font-manrope text-sm tracking-wide">Email Enquiries</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Booking Form (Span 8) */}
          <div className="lg:col-span-8">
            <div className="h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 p-1">
              <div className="bg-black/50 w-full h-full relative">
                {/* Header for Form */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-black border-b border-white/10 flex items-center justify-between px-6 z-10">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Secure Dispatch System</span>
                </div>

                {/* Iframe Container */}
                <div className="pt-12 h-full">
                  <iframe
                    id="booking-form-iframe"
                    src="https://www.elitedispatch.app/widget?id=org_362LT85nqt97BHyVplTc0csnGQS"
                    width="100%"
                    height="700"
                    style={{ border: 'none', borderRadius: '24px' }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;