import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
              "frame-src 'self' https://www.elitedispatch.app https://www.google.com",
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
