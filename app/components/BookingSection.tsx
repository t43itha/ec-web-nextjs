import React from 'react';
import Script from 'next/script';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-cinzel mb-4">
            Book Your Journey
          </h2>
          <p className="text-xl text-white/80 font-montserrat">
            Experience luxury transportation tailored to your needs
          </p>
        </div>

        {/* Embedded Online Booking Form */}
        <div className="mb-16 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-gold-500/20 overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gold-500/10">
            <h3 className="text-2xl font-bold text-white font-cinzel">Book Online</h3>
            <p className="text-white/70 font-montserrat text-sm mt-1">Secure, instant booking via our dispatch system</p>
          </div>
          <div className="p-0">
            <iframe
              id="booking-form-iframe"
              src="https://dispatch.deversoftware.com/Dispatch/Booking/?cRegNo=oyHr8V4xISzpZ40&coID=1&embed=1"
              frameBorder={0}
              scrolling="yes"
              width="100%"
              height="700"
            />
          </div>
        </div>

        {/* Lean layout with 3 essential cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Quick Contact Card */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-gold-500/20">
            <h3 className="text-lg font-bold text-white font-cinzel mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+447340801274"
                className="flex items-center space-x-2 text-white hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-montserrat text-sm">+44 7340 801 274</span>
              </a>
              <a
                href="mailto:bookings@eugenechauffeurs.com"
                className="flex items-center space-x-2 text-white hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-montserrat text-sm">Email Us</span>
              </a>
              <a
                href="https://wa.me/447340801274"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="font-montserrat text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Key Benefits Card */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-gold-500/20">
            <h3 className="text-lg font-bold text-white font-cinzel mb-4">Why Choose Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/90">
                <span className="text-gold-400">✓</span>
                <span className="font-montserrat text-sm">24/7 Availability</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <span className="text-gold-400">✓</span>
                <span className="font-montserrat text-sm">Instant Confirmation</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <span className="text-gold-400">✓</span>
                <span className="font-montserrat text-sm">Fixed Pricing</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <span className="text-gold-400">✓</span>
                <span className="font-montserrat text-sm">Flight Monitoring</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <span className="text-gold-400">✓</span>
                <span className="font-montserrat text-sm">Professional Chauffeurs</span>
              </div>
            </div>
          </div>

          {/* Popular Services Card */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-gold-500/20">
            <h3 className="text-lg font-bold text-white font-cinzel mb-4">Popular Services</h3>
            <div className="space-y-2">
              <Link href="/airport-london" className="block text-white/90 hover:text-gold-400 transition-colors">
                <span className="font-montserrat text-sm">→ Airport Transfers</span>
              </Link>
              <Link href="/business-london" className="block text-white/90 hover:text-gold-400 transition-colors">
                <span className="font-montserrat text-sm">→ Business Travel</span>
              </Link>
              <Link href="/wedding-chauffeur-service" className="block text-white/90 hover:text-gold-400 transition-colors">
                <span className="font-montserrat text-sm">→ Wedding Service</span>
              </Link>
              <Link href="/corporate-event-chauffeur" className="block text-white/90 hover:text-gold-400 transition-colors">
                <span className="font-montserrat text-sm">→ Event Transportation</span>
              </Link>
              <Link href="/services" className="inline-flex items-center space-x-1 text-gold-400 hover:text-gold-500 transition-colors mt-3">
                <span className="font-montserrat text-sm font-semibold">View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* External script for embedded booking form */}
      <Script
        src="https://dispatch.deversoftware.com/Dispatch/Booking//util.js"
        strategy="afterInteractive"
      />
    </section>
  );
};

export default BookingSection;