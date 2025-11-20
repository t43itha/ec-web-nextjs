import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-24 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Brand Column (Span 4) */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="block w-fit">
              <Image
                src="/EC logo 2 color cropped.png"
                alt="Eugene Chauffeurs"
                width={200}
                height={80}
                className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/50 font-light leading-relaxed text-sm max-w-sm">
              Defining the standard of luxury transport in London. Where precision meets elegance for the distinguished traveler.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: MessageCircle, href: "https://wa.me/447340801274" },
                { icon: Phone, href: "tel:+447340801274" },
                { icon: Mail, href: "mailto:bookings@eugenechauffeurs.com" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
                >
                  <item.icon className="w-4 h-4 text-white/60 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns (Span 8) */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-italiana text-white mb-8">Services</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Chauffeur London', href: '/chauffeur-london' },
                  { name: 'Airport Transfers', href: '/services#airport' },
                  { name: 'Corporate Travel', href: '/services#corporate' },
                  { name: 'Event Transport', href: '/services#events' },
                  { name: 'Private Jet', href: '/private-jet-charter-assistance-uk' },
                  { name: 'Wedding Service', href: '/wedding-chauffeur-service' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-gold-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Airports */}
            <div>
              <h4 className="text-lg font-italiana text-white mb-8">Airports</h4>
              <ul className="space-y-4">
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
                      className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-gold-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-lg font-italiana text-white mb-8">Contact</h4>
              <div className="space-y-6">
                <div className="group">
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-2">24/7 Booking Line</p>
                  <p className="text-white text-lg font-light hover:text-gold-400 transition-colors cursor-pointer">+44 7340 801 274</p>
                </div>
                <div className="group">
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-2">Email Enquiries</p>
                  <p className="text-white text-sm font-light hover:text-gold-400 transition-colors cursor-pointer">bookings@eugenechauffeurs.com</p>
                </div>
                <div className="group">
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-2">Location</p>
                  <p className="text-white text-sm font-light">London, United Kingdom</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
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