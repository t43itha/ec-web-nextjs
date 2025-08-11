"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// We'll use fetch API instead of EmailJS for now to avoid dependency issues
const ContactPage = () => {
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
      // Use API route for form submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-zinc-900 to-black pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-gold-600/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-cinzel">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-montserrat max-w-3xl mx-auto">
              We're here to make your journey exceptional. Reach out anytime for bookings or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="booking" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white font-cinzel mb-6">
                  Contact Information
                </h2>
                <p className="text-white/70 font-montserrat mb-8">
                  Available 24/7 for your convenience. Choose your preferred method of contact and we'll respond promptly.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a 
                  href="tel:+447340801274" 
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center group-hover:from-gold-500/20 group-hover:to-gold-600/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-montserrat font-semibold mb-1">Phone & WhatsApp</h3>
                    <p className="text-gold-400 font-montserrat group-hover:text-gold-500 transition-colors">+44 7340 801 274</p>
                    <p className="text-white/60 font-montserrat text-sm mt-1">24/7 availability</p>
                  </div>
                </a>

                <a 
                  href="mailto:bookings@eugenechauffeurs.com" 
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center group-hover:from-gold-500/20 group-hover:to-gold-600/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-montserrat font-semibold mb-1">Email</h3>
                    <p className="text-gold-400 font-montserrat group-hover:text-gold-500 transition-colors">bookings@eugenechauffeurs.com</p>
                    <p className="text-white/60 font-montserrat text-sm mt-1">Quick response guaranteed</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-montserrat font-semibold mb-1">Service Area</h3>
                    <p className="text-white/80 font-montserrat">London & Greater London</p>
                    <p className="text-white/60 font-montserrat text-sm mt-1">International service available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-montserrat font-semibold mb-1">Operating Hours</h3>
                    <p className="text-white/80 font-montserrat">24/7 Service</p>
                    <p className="text-white/60 font-montserrat text-sm mt-1">Always ready when you need us</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gold-500/20">
                <h3 className="text-xl font-bold text-white font-cinzel mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppContact}
                    className="w-full flex items-center justify-between bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-montserrat font-semibold">Chat on WhatsApp</span>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <a
                    href="tel:+447340801274"
                    className="w-full flex items-center justify-between bg-zinc-800 text-white px-6 py-3 rounded-lg hover:bg-zinc-700 transition-colors group border border-gold-500/20"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gold-400" />
                      <span className="font-montserrat font-semibold">Call Now</span>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20">
              <h2 className="text-3xl font-bold text-white font-cinzel mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 font-montserrat mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white font-montserrat focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/80 font-montserrat mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white font-montserrat focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white/80 font-montserrat mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white font-montserrat focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="+44 7340 801 274"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white/80 font-montserrat mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white font-montserrat focus:outline-none focus:border-gold-400 transition-colors"
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

                <div>
                  <label htmlFor="message" className="block text-white/80 font-montserrat mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white font-montserrat focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder="Tell us about your transportation needs..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-500 font-montserrat">
                      Thank you! Your message has been sent successfully. We'll respond within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-500 font-montserrat">
                      We're sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white font-cinzel mb-4">
            Need <span className="text-gradient-gold">Help?</span>
          </h2>
          <p className="text-xl text-white/80 font-montserrat mb-8">
            Check our frequently asked questions or contact us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#faq"
              className="inline-flex items-center justify-center bg-zinc-800 text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-zinc-700 transition-colors border border-gold-500/20"
            >
              View FAQ
            </Link>
            <a
              href="https://wa.me/447340801274"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
export const revalidate = 86400;