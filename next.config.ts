import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable dev indicators (N logo)
  devIndicators: false,

  // Disable ESLint during builds for Netlify
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization configuration
  images: {
    domains: [
      'images.pexels.com', // For stock images
      'eugenechauffeurs.com', // Production domain
      'localhost', // Development
    ],
    formats: ['image/webp'],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://dispatch.deversoftware.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://api.emailjs.com https://dispatch.deversoftware.com",
              "frame-src 'self' https://dispatch.deversoftware.com https://www.google.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; ')
          }
        ]
      }
    ];
  },

  // Redirects for old routes
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      // Legacy landing paths to new equivalents
      {
        source: '/landing-pages/airport-transfers-heathrow',
        destination: '/landing/airport/heathrow',
        permanent: true,
      },
      {
        source: '/landing-pages/airport-transfers-gatwick',
        destination: '/landing/airport/gatwick',
        permanent: true,
      },
      {
        source: '/landing-pages/airport-london',
        destination: '/landing/airport/london-city-airport',
        permanent: true,
      },
      // Old root airport pages to new landing paths
      { source: '/heathrow-chauffeur', destination: '/landing/airport/heathrow', permanent: true },
      { source: '/gatwick-chauffeur', destination: '/landing/airport/gatwick', permanent: true },
      { source: '/london-city-airport-chauffeur', destination: '/landing/airport/london-city-airport', permanent: true },
      { source: '/stansted-chauffeur', destination: '/landing/airport/stansted', permanent: true },
      { source: '/luton-chauffeur', destination: '/landing/airport/luton', permanent: true },
      {
        source: '/landing-pages/stamford-bridge',
        destination: '/landing/stadium/stamford-bridge',
        permanent: true,
      },
      {
        source: '/landing-pages/tottenham-stadium',
        destination: '/landing/stadium/tottenham-stadium',
        permanent: true,
      },
      // WordPress legacy redirects (eugenechauffeurs.com)
      { source: '/special-occasions', destination: '/services', permanent: true },
      { source: '/special-occasions/', destination: '/services', permanent: true },
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/faq', destination: '/services', permanent: true },
      { source: '/faq/', destination: '/services', permanent: true },
      { source: '/book', destination: '/#booking', permanent: true },
      { source: '/book/', destination: '/#booking', permanent: true },
      { source: '/airport-transfers', destination: '/landing/airport/heathrow', permanent: true },
      { source: '/airport-transfers/', destination: '/landing/airport/heathrow', permanent: true },
      { source: '/concierge-services', destination: '/services', permanent: true },
      { source: '/concierge-services/', destination: '/services', permanent: true },
      { source: '/terms-conditions', destination: '/terms', permanent: true },
      { source: '/terms-conditions/', destination: '/terms', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/', destination: '/contact', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/privacy-policy/', destination: '/privacy', permanent: true },
      { source: '/sightseeing-tours', destination: '/services', permanent: true },
      { source: '/sightseeing-tours/', destination: '/services', permanent: true },
      { source: '/corporate-travel', destination: '/corporate-travel-chauffeur', permanent: true },
      { source: '/corporate-travel/', destination: '/corporate-travel-chauffeur', permanent: true },
      { source: '/partners', destination: '/', permanent: true },
      { source: '/partners/', destination: '/', permanent: true },
      { source: '/hourly-bookings', destination: '/chauffeur-hire-by-the-hour', permanent: true },
      { source: '/hourly-bookings/', destination: '/chauffeur-hire-by-the-hour', permanent: true },
      { source: '/testimonials', destination: '/', permanent: true },
      { source: '/testimonials/', destination: '/', permanent: true },
      { source: '/intercity-transfers', destination: '/services', permanent: true },
      { source: '/intercity-transfers/', destination: '/services', permanent: true },
      { source: '/fleet', destination: '/services', permanent: true },
      { source: '/fleet/', destination: '/services', permanent: true },
      // WordPress blog posts -> homepage (no blog on new site)
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/', destination: '/blog', permanent: true },
      { source: '/executive-chauffeur-transport-in-farnborough', destination: '/farnborough-chauffeur', permanent: true },
      { source: '/executive-chauffeur-transport-in-farnborough/', destination: '/farnborough-chauffeur', permanent: true },
      { source: '/manchester-airport-chauffeur-services-experience-luxury', destination: '/', permanent: true },
      { source: '/manchester-airport-chauffeur-services-experience-luxury/', destination: '/', permanent: true },
      { source: '/no-1-heathrow-airport-chauffeur-servicesluxury-transfer-solution', destination: '/landing/airport/heathrow', permanent: true },
      { source: '/no-1-heathrow-airport-chauffeur-servicesluxury-transfer-solution/', destination: '/landing/airport/heathrow', permanent: true },
      { source: '/luxury-executive-chauffeur-services-in-londonexperience-unmatched-comfort', destination: '/chauffeur-london', permanent: true },
      { source: '/luxury-executive-chauffeur-services-in-londonexperience-unmatched-comfort/', destination: '/chauffeur-london', permanent: true },
      { source: '/meet-eugene-chauffeurs-the-gold-standard-in-luxury-transport', destination: '/about', permanent: true },
      { source: '/meet-eugene-chauffeurs-the-gold-standard-in-luxury-transport/', destination: '/about', permanent: true },
      { source: '/top-10-chauffeur-company-in-london-the-uk-eugene-chauffeurs-leads-the-way', destination: '/', permanent: true },
      { source: '/top-10-chauffeur-company-in-london-the-uk-eugene-chauffeurs-leads-the-way/', destination: '/', permanent: true },
      { source: '/elevate-your-special-day-wedding-transportation-with-eugene-chauffeurs', destination: '/wedding-chauffeur-service', permanent: true },
      { source: '/elevate-your-special-day-wedding-transportation-with-eugene-chauffeurs/', destination: '/wedding-chauffeur-service', permanent: true },
      { source: '/why-luxury-isnt-just-about-the-destination-the-journey-matters', destination: '/', permanent: true },
      { source: '/why-luxury-isnt-just-about-the-destination-the-journey-matters/', destination: '/', permanent: true },
      { source: '/why-choosing-eugene-chauffeurs-is-the-best-decision-for-your-corporate-travel-needs', destination: '/corporate-travel-chauffeur', permanent: true },
      { source: '/why-choosing-eugene-chauffeurs-is-the-best-decision-for-your-corporate-travel-needs/', destination: '/corporate-travel-chauffeur', permanent: true },
      { source: '/the-ultimate-guide-to-airport-transfers-with-eugene-chauffeurs', destination: '/landing/airport/heathrow', permanent: true },
      { source: '/the-ultimate-guide-to-airport-transfers-with-eugene-chauffeurs/', destination: '/landing/airport/heathrow', permanent: true },
      // WordPress category URL (Cyrillic 'с' in URL)
      { source: '/%D1%81hauffeur-services', destination: '/services', permanent: true },
      { source: '/%D1%81hauffeur-services/', destination: '/services', permanent: true },
    ];
  },

  // Environment variables (for build time)
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://eugenechauffeurs.com',
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  }
};

export default nextConfig;
