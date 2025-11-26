import type { MetadataRoute } from 'next';
import { getAllServiceCityCombinations, getAllStadiums } from '@/app/lib/landing-data';
import { blogPosts } from '@/app/lib/blog-data';

const BASE_URL = 'https://eugenechauffeurs.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Core pages - highest priority
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Service pages - high priority
  const servicePages: MetadataRoute.Sitemap = [
    'chauffeur-london',
    'wedding-chauffeur-service',
    'corporate-travel-chauffeur',
    'corporate-event-chauffeur',
    'personal-shopping-concierge-london',
    'private-jet-charter-assistance-uk',
  ].map(route => ({
    url: `${BASE_URL}/${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Vehicle pages - high priority
  const vehiclePages: MetadataRoute.Sitemap = [
    'mercedes-s-class-chauffeur',
    'mercedes-e-class-chauffeur',
    'mercedes-v-class-chauffeur',
    'mercedes-eqv-chauffeur',
    'range-rover-chauffeur',
    'rolls-royce-chauffeur',
  ].map(route => ({
    url: `${BASE_URL}/${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Location pages - medium-high priority
  const locationPages: MetadataRoute.Sitemap = [
    'chauffeur-mayfair',
    'chauffeur-chelsea',
    'chauffeur-kensington',
    'chauffeur-knightsbridge',
    'chauffeur-essex',
    'chauffeur-kent',
    'chauffeur-surrey',
    'farnborough-chauffeur',
    'london-birmingham-chauffeur',
  ].map(route => ({
    url: `${BASE_URL}/${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Airport landing pages - high priority (frequently searched)
  const airportPages: MetadataRoute.Sitemap = [
    'heathrow',
    'gatwick',
    'stansted',
    'luton',
    'london-city-airport',
  ].map(airport => ({
    url: `${BASE_URL}/landing/airport/${airport}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic service/city landing pages
  const serviceCityCombinations = getAllServiceCityCombinations();
  const landingPages: MetadataRoute.Sitemap = serviceCityCombinations.map(({ service, city }) => ({
    url: `${BASE_URL}/landing/${service}/${city}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Stadium landing pages
  const stadiumList = getAllStadiums();
  const stadiumPages: MetadataRoute.Sitemap = stadiumList.map(({ venue }) => ({
    url: `${BASE_URL}/landing/stadium/${venue}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...vehiclePages,
    ...locationPages,
    ...airportPages,
    ...landingPages,
    ...stadiumPages,
    ...blogIndex,
    ...blogPostPages,
  ];
}
