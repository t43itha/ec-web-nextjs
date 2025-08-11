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
            value: 'max-age=31536000; includeSubDomains'
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
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // Redirects for old routes (temporarily disabled)
  // async redirects() {
  //   return [
  //     {
  //       source: '/home',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/service',
  //       destination: '/services',
  //       permanent: true,
  //     },
  //     // Redirect old landing pages to new structure
  //     {
  //       source: '/landing-pages/:path*',
  //       destination: '/landing/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },

  // Environment variables (for build time)
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://eugenechauffeurs.com',
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  }
};

export default nextConfig;
