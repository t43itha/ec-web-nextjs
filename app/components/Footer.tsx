import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Brand Column (Span 4) */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="block w-fit">
              <Image
                src="/RGB-Eugene-Chauffeurs-Concierge-Logo.webp"
                alt="Eugene Chauffeurs"
                width={180}
                height={72}
                className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                unoptimized
              />
            </Link>
            <p className="text-white/50 font-light leading-relaxed text-xs max-w-sm">
              Defining the standard of luxury transport in London. Where precision meets elegance for the distinguished traveler.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: MessageCircle, href: "https://wa.me/447340801274" },
                { icon: Phone, href: "tel:+442081911882" },
                { icon: Mail, href: "mailto:bookings@eugenechauffeurs.com" },
                { icon: Instagram, href: "https://instagram.com/eugenechauffeurs" },
                { icon: Linkedin, href: "https://linkedin.com/company/eugenechauffeurs" },
                { icon: Twitter, href: "https://x.com/eugenechauffeurs" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
                >
                  <item.icon className="w-3.5 h-3.5 text-white/60 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns (Span 8) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Services */}
            <div>
              <h4 className="text-sm font-italiana text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Chauffeur London', href: '/chauffeur-london' },
                  { name: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur' },
                  { name: 'Mercedes E-Class', href: '/mercedes-e-class-chauffeur' },
                  { name: 'Mercedes V-Class', href: '/mercedes-v-class-chauffeur' },
                  { name: 'Mercedes EQV', href: '/mercedes-eqv-chauffeur' },
                  { name: 'Range Rover', href: '/range-rover-chauffeur' },
                  { name: 'Private Jet', href: '/private-jet-charter-assistance-uk' },
                  { name: 'Wedding Service', href: '/wedding-chauffeur-service' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-gold-400 text-xs transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-gold-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Airports */}
            <div>
              <h4 className="text-sm font-italiana text-white mb-6">Airports</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Heathrow', href: '/heathrow-chauffeur' },
                  { name: 'Gatwick', href: '/gatwick-chauffeur' },
                  { name: 'Luton', href: '/luton-chauffeur' },
                  { name: 'Stansted', href: '/stansted-chauffeur' },
                  { name: 'London City', href: '/london-city-airport-chauffeur' },
                  { name: 'Farnborough', href: '/landing/airport/farnborough' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-gold-400 text-xs transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-gold-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="col-span-2 sm:col-span-2">
              <h4 className="text-sm font-italiana text-white mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">24/7 Booking Line</p>
                  <p className="text-white text-sm font-light hover:text-gold-400 transition-colors cursor-pointer">+44 20 8191 1882</p>
                </div>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Email Enquiries</p>
                  <p className="text-white text-xs font-light hover:text-gold-400 transition-colors cursor-pointer">bookings@eugenechauffeurs.com</p>
                </div>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Location</p>
                  <p className="text-white text-xs font-light">London, United Kingdom</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            © 2025 Eugene Chauffeurs Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <Link href="/privacy" className="text-white/30 hover:text-white text-xs tracking-wider transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white text-xs tracking-wider transition-colors">Terms</Link>
            <Link href="/sitemap" className="text-white/30 hover:text-white text-xs tracking-wider transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;