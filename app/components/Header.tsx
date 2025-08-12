"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
      {/* Mobile sticky actions */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="mx-auto max-w-7xl px-4 pb-4">
          <div className="grid grid-cols-3 gap-3">
            <a href="tel:+447340801274" className="text-center bg-zinc-900/90 border border-zinc-700/50 text-white py-3 rounded-lg font-montserrat text-sm">Call</a>
            <a href="https://wa.me/447340801274" target="_blank" rel="noopener noreferrer" className="text-center bg-green-600 text-white py-3 rounded-lg font-montserrat text-sm">WhatsApp</a>
            <Link href="#booking" className="text-center bg-gradient-to-r from-gold-400 to-gold-600 text-black py-3 rounded-lg font-montserrat text-sm font-semibold">Get a Quote</Link>
          </div>
        </div>
      </div>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left side - Logo (Mobile) / Menu Button (Desktop) */}
            <div className="flex items-center">
              {/* Mobile Logo - Left aligned */}
              <div className="md:hidden">
                <Link href="/" className="group cursor-pointer block relative h-10 sm:h-12 w-auto">
                  <Image
                    src="/EC logo 2 color cropped.png"
                    alt="Eugene Chauffeurs Logo"
                    width={150}
                    height={48}
                    className="h-10 sm:h-12 w-auto transition-all duration-300 ease-out group-hover:scale-110 group-hover:brightness-110 animate-slide-left-right"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Menu Button */}
              <button
                className="hidden md:flex items-center space-x-2 text-white hover:text-gold-400 transition-colors duration-200 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                <span className="font-montserrat font-medium">
                  Menu
                </span>
              </button>
            </div>

            {/* Center - Logo (Desktop only) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="group cursor-pointer block relative h-16 w-auto">
                <Image
                  src="/EC logo 2 color cropped.png"
                  alt="Eugene Chauffeurs Logo"
                  width={200}
                  height={64}
                  className="h-16 w-auto transition-all duration-300 ease-out group-hover:scale-110 group-hover:brightness-110 animate-slide-left-right"
                  priority
                />
              </Link>
            </div>

            {/* Right side - Book Now button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Book Now Button - Always visible */}
              <Link 
                href="#booking"
                className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-montserrat font-semibold text-sm sm:text-base hover:from-gold-500 hover:to-gold-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Book Now
              </Link>

              {/* Mobile Hamburger Menu Button */}
              <button
                className="md:hidden flex items-center text-white hover:text-gold-400 transition-colors duration-200 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile/Desktop Menu Overlay */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel - Positioned based on screen size */}
              <div className={`fixed top-16 md:top-20 ${
                typeof window !== 'undefined' && window.innerWidth >= 768 ? 'left-4 sm:left-6 lg:left-8' : 'right-4 sm:right-6 lg:right-8'
              } bg-black/95 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-6 space-y-6 z-50 min-w-[280px] shadow-2xl`}>
                {/* Navigation Links */}
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleNavClick}
                      className={`block w-full text-left font-montserrat font-medium py-3 px-4 rounded-lg hover:bg-zinc-800/50 transition-all duration-200 group ${
                        pathname === item.href 
                          ? 'text-gold-400 bg-zinc-800/30' 
                          : 'text-white/90 hover:text-gold-400'
                      }`}
                    >
                      <span className="relative">
                        {item.name}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${
                          pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Divider */}
                <div className="border-t border-zinc-700/50"></div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <p className="text-white/60 font-montserrat text-sm">24/7 Booking</p>
                  <p className="text-gold-400 font-montserrat font-semibold">+44 7340 801 274</p>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;