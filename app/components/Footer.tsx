import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="group">
              <Link href="/">
                <Image
                  src="/EC logo 2 color cropped.png"
                  alt="Eugene Chauffeurs Logo"
                  width={200}
                  height={80}
                  className="h-20 w-auto transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-110 animate-slide-left-right"
                />
              </Link>
            </div>
            <p className="text-white/80 font-montserrat leading-relaxed">
              Premium luxury chauffeur services for discerning professionals. 
              Experience comfort, reliability, and discretion tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/447340801274" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-gold-400 hover:text-black transition-all duration-200 cursor-pointer">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="tel:+447340801274" className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-gold-400 hover:text-black transition-all duration-200 cursor-pointer">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:bookings@eugenechauffeurs.com" className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-gold-400 hover:text-black transition-all duration-200 cursor-pointer">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-cinzel mb-6">Services</h4>
            <ul className="space-y-3 font-montserrat">
              <li><Link href="/services#airport" className="text-white/80 hover:text-gold-400 transition-colors">Airport Transfers</Link></li>
              <li><Link href="/services#corporate" className="text-white/80 hover:text-gold-400 transition-colors">Corporate Travel</Link></li>
              <li><Link href="/services#events" className="text-white/80 hover:text-gold-400 transition-colors">Event Transportation</Link></li>
              <li><Link href="/services#international" className="text-white/80 hover:text-gold-400 transition-colors">International Service</Link></li>
              <li><Link href="/services#hourly" className="text-white/80 hover:text-gold-400 transition-colors">Hourly Hire</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-cinzel mb-6">Quick Links</h4>
            <ul className="space-y-3 font-montserrat">
              <li><Link href="/about" className="text-white/80 hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-gold-400 transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-gold-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/80 hover:text-gold-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-cinzel mb-6">Contact</h4>
            <div className="space-y-4 font-montserrat">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">24/7 Booking (Phone & WhatsApp)</p>
                  <p className="text-white font-semibold">+44 7340 801 274</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Email</p>
                  <p className="text-white font-semibold break-all">bookings@eugenechauffeurs.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Service Area</p>
                  <p className="text-white font-semibold">London & Greater London</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Availability</p>
                  <p className="text-white font-semibold">24/7 Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 font-montserrat text-sm">
              © 2025 Eugene Chauffeurs Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-white/60 font-montserrat text-sm">
              <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-gold-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;