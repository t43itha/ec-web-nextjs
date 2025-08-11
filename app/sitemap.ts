import { MetadataRoute } from 'next';
import { getAllServiceCityCombinations, getAllStadiums } from '@/app/lib/landing-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eugenechauffeurs.com';
  
  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Generate landing page URLs for all service/city combinations
  const landingPages = getAllServiceCityCombinations().map(({ service, city }) => ({
    url: `${baseUrl}/landing/${service}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate stadium page URLs
  const stadiumPages = getAllStadiums().map(({ venue }) => ({
    url: `${baseUrl}/landing/stadium/${venue}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...landingPages, ...stadiumPages];
}