"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight, CheckCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// Magnetic button component
const MagneticButton = ({
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}) => {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || disabled) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
  };

  if (href) {
    return (
      <Link
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
    </button>
  );
};

const ClientContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / maxScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = `Hello, I have a question about your chauffeur services:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/447340801274?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-gold-400 to-gold-300 transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Eugene Chauffeurs',
            url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://ec-web-nextjs.netlify.app').replace(/\/$/, ''),
            telephone: '+44 7340 801 274',
            email: 'bookings@eugenechauffeurs.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'London',
              addressRegion: 'Greater London',
              addressCountry: 'GB',
            },
            areaServed: 'London and Greater London',
            openingHours: 'Mo-Su 00:00-23:59',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'TfL Operator Licence',
              name: 'TfL Operator Licence 0108860101',
              identifier: '0108860101',
            },
            sameAs: [
              'https://www.facebook.com/',
              'https://www.instagram.com/',
            ],
          }),
        }}
      />

      {/* Hero Section - Minimalist Noir (UNCHANGED) */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Concierge</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Get in <br />
              <span className="text-white/30">Touch.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              We're here to make your journey exceptional. Reach out anytime for bookings or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact-section" className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Left: Contact Info (Span 4) */}
            <div
              className={`lg:col-span-4 space-y-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div>
                <h2 className="text-3xl font-italiana text-white mb-8">Direct Lines</h2>
                <p className="text-white/60 font-manrope font-light mb-8">
                  Available 24/7 for your convenience. Choose your preferred method of contact.
                </p>
              </div>

              <div className="space-y-0 border-t border-white/10">
                <a href="tel:+447340801274" className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                  {/* Border beam on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-top" style={{ top: 0, left: '-64px' }} />
                  </div>
                  <div>
                    <p className="text-xs text-gold-400 uppercase tracking-widest mb-1">Phone & WhatsApp</p>
                    <p className="text-xl text-white font-italiana group-hover:text-gold-400 transition-colors">+44 7340 801 274</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-gold-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a href="mailto:bookings@eugenechauffeurs.com" className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-top" style={{ top: 0, left: '-64px' }} />
                  </div>
                  <div>
                    <p className="text-xs text-gold-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl text-white font-italiana group-hover:text-gold-400 transition-colors">bookings@eugenechauffeurs.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-gold-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <div className="py-6 border-b border-white/10">
                  <p className="text-xs text-gold-400 uppercase tracking-widest mb-1">Service Area</p>
                  <p className="text-xl text-white font-italiana">London & Greater London</p>
                </div>

                <div className="py-6 border-b border-white/10">
                  <p className="text-xs text-gold-400 uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-xl text-white font-italiana">24/7 Service</p>
                </div>
              </div>

              <div className="pt-8">
                <MagneticButton
                  onClick={handleWhatsAppContact}
                  className="w-full flex items-center justify-center space-x-3 bg-[#25D366] text-white px-6 py-4 hover:bg-[#128C7E] transition-colors group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-manrope font-bold uppercase tracking-widest text-xs">Chat on WhatsApp</span>
                </MagneticButton>
              </div>
            </div>

            {/* Right: Contact Form (Span 8) */}
            <div
              className={`lg:col-span-8 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="group relative bg-white/[0.02] border border-white/10 p-8 md:p-12 hover:border-gold-400/20 transition-colors duration-500">
                {/* Border beam effect on form container */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-top" style={{ top: 0, left: '-128px' }} />
                    <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-right" style={{ right: 0, top: '-128px' }} />
                    <div className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-border-beam-bottom" style={{ bottom: 0, right: '-128px' }} />
                    <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-border-beam-left" style={{ left: 0, bottom: '-128px' }} />
                  </div>
                </div>

                <h2 className="text-3xl font-italiana text-white mb-8">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs text-gold-400 uppercase tracking-widest">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white font-manrope focus:outline-none focus:border-gold-400 transition-colors placeholder-white/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs text-gold-400 uppercase tracking-widest">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white font-manrope focus:outline-none focus:border-gold-400 transition-colors placeholder-white/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs text-gold-400 uppercase tracking-widest">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white font-manrope focus:outline-none focus:border-gold-400 transition-colors placeholder-white/20"
                        placeholder="+44 7340 801 274"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs text-gold-400 uppercase tracking-widest">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white font-manrope focus:outline-none focus:border-gold-400 transition-colors [&>option]:bg-black"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">New Booking</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="corporate">Corporate Account</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs text-gold-400 uppercase tracking-widest">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-manrope focus:outline-none focus:border-gold-400 transition-colors resize-none placeholder-white/20"
                      placeholder="Tell us about your transportation needs..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-3 bg-green-500/10 border border-green-500/30 p-4">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <p className="text-green-500 font-manrope text-sm">Message sent successfully. We'll respond shortly.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/30 p-4">
                      <p className="text-red-500 font-manrope text-sm">Error sending message. Please try again.</p>
                    </div>
                  )}

                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </MagneticButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link - Enhanced */}
      <section className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gold-400/5 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-4 font-manrope">Need Quick Answers?</p>
          <h2 className="text-3xl md:text-4xl font-italiana text-white mb-4">Have Questions?</h2>
          <p className="text-white/60 font-manrope font-light mb-8">Check our frequently asked questions for immediate answers.</p>
          <MagneticButton href="/#faq" className="btn-luxury-outline inline-flex items-center gap-3">
            <span>View FAQ</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes border-beam-top {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100% + 256px)); }
        }
        @keyframes border-beam-right {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(100% + 256px)); }
        }
        @keyframes border-beam-bottom {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 256px)); }
        }
        @keyframes border-beam-left {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-100% - 256px)); }
        }

        .animate-border-beam-top {
          animation: border-beam-top 3s linear infinite;
        }
        .animate-border-beam-right {
          animation: border-beam-right 3s linear infinite;
          animation-delay: 0.75s;
        }
        .animate-border-beam-bottom {
          animation: border-beam-bottom 3s linear infinite;
          animation-delay: 1.5s;
        }
        .animate-border-beam-left {
          animation: border-beam-left 3s linear infinite;
          animation-delay: 2.25s;
        }
      `}</style>
    </>
  );
};

export default ClientContact;
