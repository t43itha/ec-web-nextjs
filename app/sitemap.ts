import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ec-web-nextjs.netlify.app';
  const routes = [
    '', 
    'services', 
    'contact',
    'chauffeur-london',
    'heathrow-chauffeur',
    'gatwick-chauffeur',
    'london-city-airport-chauffeur',
    'stansted-chauffeur',
    'luton-chauffeur',
    'mercedes-s-class-chauffeur',
    'mercedes-e-class-chauffeur',
    'mercedes-v-class-chauffeur',
    'mercedes-eqv-chauffeur',
    'range-rover-chauffeur',
  ];
  const now = new Date().toISOString();
  return routes.map((r) => ({
    url: `${base}/${r}`.replace(/\/$/, ''),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
}