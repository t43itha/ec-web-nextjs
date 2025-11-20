"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Airports', href: '/landing/airport/heathrow' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between">
            
            {/* Logo Area */}
            <Link href="/" className="relative z-50 group">
              <Image
                src="/EC logo 2 color cropped.png"
                alt="Eugene Chauffeurs"
                width={180}
                height={60}
                className="h-12 w-auto transition-all duration-500 group-hover:brightness-110"
                priority
              />
            </Link>

            {/* Desktop Navigation - Minimalist */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-gold-400 relative group ${
                    pathname === item.href ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-8">
              <Link
                href="#booking"
                className="hidden sm:block text-xs uppercase tracking-[0.2em] text-gold-400 border border-gold-400/30 px-6 py-3 hover:bg-gold-400 hover:text-black transition-all duration-500"
              >
                Book Now
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                className="lg:hidden text-white hover:text-gold-400 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-all duration-700 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]"></div>
        
        <div className="relative h-full flex flex-col items-center justify-center">
          <nav className="space-y-8 text-center">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-700 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={handleNavClick}
                  className="block text-5xl md:text-7xl font-italiana text-white/80 hover:text-gold-400 transition-colors duration-500"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          <div className={`mt-20 text-center transform transition-all duration-700 delay-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-6">24/7 Concierge</p>
            <a
              href="tel:+447340801274"
              className="group relative inline-flex items-center justify-center px-8 py-4 border border-white/10 hover:border-gold-400/50 transition-all duration-500 bg-white/5 hover:bg-white/10"
            >
              <span className="absolute inset-0 w-full h-full bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
              <Phone className="w-5 h-5 text-gold-400 mr-4 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-3xl font-italiana text-white group-hover:text-gold-100 transition-colors duration-300">
                +44 7340 801 274
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;