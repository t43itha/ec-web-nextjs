"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

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
      {/* Hero Section - Minimalist Noir */}
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

      {/* Contact Section - Split Layout */}
      <section id="booking" className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left: Contact Info (Span 4) */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h2 className="text-3xl font-italiana text-white mb-8">Direct Lines</h2>
                <p className="text-white/60 font-manrope font-light mb-8">
                  Available 24/7 for your convenience. Choose your preferred method of contact.
                </p>
              </div>

              <div className="space-y-0 border-t border-white/10">
                <a href="tel:+447340801274" className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                  <div>
                    <p className="text-xs text-gold-400 uppercase tracking-widest mb-1">Phone & WhatsApp</p>
                    <p className="text-xl text-white font-italiana group-hover:text-gold-400 transition-colors">+44 7340 801 274</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </a>

                <a href="mailto:bookings@eugenechauffeurs.com" className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                  <div>
                    <p className="text-xs text-gold-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl text-white font-italiana group-hover:text-gold-400 transition-colors">bookings@eugenechauffeurs.com</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
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
                <button onClick={handleWhatsAppContact} className="w-full flex items-center justify-center space-x-3 bg-[#25D366] text-white px-6 py-4 hover:bg-[#128C7E] transition-colors group">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-manrope font-bold uppercase tracking-widest text-xs">Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right: Contact Form (Span 8) */}
            <div className="lg:col-span-8">
              <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12">
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

                  <button 
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
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-italiana text-white mb-4">Have Questions?</h2>
          <p className="text-white/60 font-manrope font-light mb-8">Check our frequently asked questions for immediate answers.</p>
          <Link href="/#faq" className="btn-luxury-outline inline-flex items-center gap-3">
            <span>View FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ClientContact;
