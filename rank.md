1) Turn on robots + sitemap (App Router)
Create app/robots.ts and app/sitemap.ts so crawlers can crawl and find all pages.

app/robots.ts (static, permissive)

ts
Copy
Edit
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://ec-web-nextjs.netlify.app/sitemap.xml',
  };
}
app/sitemap.ts (update the routes as you add pages)

ts
Copy
Edit
// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ec-web-nextjs.netlify.app';
  const routes = [
    '', 'services', 'contact',
    // add these as you publish them:
    'chauffeur-london',
    'heathrow-chauffeur',
    'gatwick-chauffeur',
    'london-city-airport-chauffeur',
    'stansted-chauffeur',
    'luton-chauffeur',
    'mercedes-s-class-chauffeur',
    'mercedes-v-class-chauffeur',
    'range-rover-chauffeur',
  ];
  const now = new Date().toISOString();
  return routes.map((r) => ({
    url: `${base}/${r}`.replace(/\/$/, ''), lastModified: now, changeFrequency: 'weekly', priority: 0.8,
  }));
}
(These file conventions are the official Next.js way to expose robots/sitemap in the App Router. 
Next.js
+1
)

2) Publish the 6 “money pages”
Create these as first-class routes with unique copy, FAQs + CTAs:

/chauffeur-london

/heathrow-chauffeur, /gatwick-chauffeur, /london-city-airport-chauffeur, /stansted-chauffeur, /luton-chauffeur
Link them in header (Airports menu) and footer; cross-link from Services. (You don’t have them yet; Services is generic.) 
Eugene Chauffeurs

3) Add schema now (paste-and-go)
Put JSON-LD on Contact (LocalBusiness) and on each airport page (Service + FAQ).
Contact (LocalBusiness): include TfL licence in hasCredential and your physical address.
Airport pages (Service + FAQ): list inclusions (meet & greet, waiting time), area served, and a couple of “from” fares.

4) Strengthen E-E-A-T on-page
Footer: company name, registered address, TfL operator licence #, insurance note, payment methods. I only see phone/email today. 
Eugene Chauffeurs

Reviews strip on home + services; if you have GBP reviews, surface a few with Review schema.

5) Conversion UX (1 hour)
Mobile sticky bar: Call | WhatsApp | Get a Quote (you already show phone/WhatsApp in places—make it sticky globally). 
Eugene Chauffeurs
+1

Quote form on each airport page (name, phone, email, date/time, pickup, drop-off, flight no., pax, luggage, vehicle, notes).

6) Reindex quickly
Verify /robots.txt and /sitemap.xml load in a browser (after deploy).

Google Search Console → URL Inspection: request indexing for /, /services, /contact, then each new airport page as you publish.

Watch “Crawled—currently not indexed”; if seen, bulk up content and internal links.

7-day content + IA plan (fastest path to rankings)
Day 1–2: Ship /chauffeur-london and /heathrow-chauffeur with proper H1s, FAQs, internal links to Services and Contact.

Day 3–4: Ship the other 4 airport pages.

Day 5: Add Fleet pages (/mercedes-s-class-chauffeur, /mercedes-v-class-chauffeur, /range-rover-chauffeur) and cross-link from airport pages.

Day 6–7: Publish one pillar blog: “Heathrow Chauffeur Transfers—Complete 2025 Guide”, and interlink it from the Heathrow page.

Nice-to-have (but quick wins)
Metadata API: set titles/descriptions per route via Next.js generateMetadata() so every page has a compelling SERP snippet. 
Next.js

Core Web Vitals: compress hero images to WebP/AVIF and lazy-load non-hero images (improves LCP/INP).

Canonical tags: handled via Metadata API on each page (especially if you’ll later map a custom domain).