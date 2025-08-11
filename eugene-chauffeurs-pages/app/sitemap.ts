import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ec-web-nextjs.netlify.app';
  const routes = [
    '', 'chauffeur-london', 'heathrow-chauffeur', 'gatwick-chauffeur',
    'london-city-airport-chauffeur', 'stansted-chauffeur', 'luton-chauffeur'
  ];
  const now = new Date().toISOString();
  return routes.map((r) => ({
    url: `${base}/${r}`.replace(/\/$/, ''),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
}
