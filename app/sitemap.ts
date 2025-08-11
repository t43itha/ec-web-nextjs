import { MetadataRoute } from 'next';
import { getAllServiceCityCombinations, getAllStadiums } from '@/app/lib/landing-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ec-web-nextjs.netlify.app').replace(/\/$/, '');
  const now = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${base}`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const moneyPages: MetadataRoute.Sitemap = [
    'chauffeur-london',
    'heathrow-chauffeur',
    'gatwick-chauffeur',
    'london-city-airport-chauffeur',
    'stansted-chauffeur',
    'luton-chauffeur',
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const landingPages: MetadataRoute.Sitemap = getAllServiceCityCombinations().map(({ service, city }) => ({
    url: `${base}/landing/${service}/${city}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const stadiumPages: MetadataRoute.Sitemap = getAllStadiums().map(({ venue }) => ({
    url: `${base}/landing/stadium/${venue}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...mainPages, ...moneyPages, ...landingPages, ...stadiumPages];
}