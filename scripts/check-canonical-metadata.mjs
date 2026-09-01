#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const staticRoutes = [
  'chauffeur-london',
  'mercedes-s-class-chauffeur',
  'mercedes-e-class-chauffeur',
  'mercedes-v-class-chauffeur',
  'mercedes-eqv-chauffeur',
  'range-rover-chauffeur',
  'rolls-royce-chauffeur',
  'chauffeur-mayfair',
  'chauffeur-chelsea',
  'chauffeur-kensington',
  'chauffeur-knightsbridge',
  'chauffeur-essex',
  'chauffeur-kent',
  'chauffeur-surrey',
  'farnborough-chauffeur',
  'london-birmingham-chauffeur',
  'v-class-chauffeur-hire',
  'business-london',
  'event-birmingham',
  'blog',
  'blog/definitive-guide-london-chauffeurs',
];

const dynamicMetadataChecks = [
  {
    file: 'app/blog/[slug]/page.tsx',
    expectedSnippets: ['alternates', 'canonical', '/blog/${post.slug}'],
  },
  {
    file: 'app/landing/[service]/[city]/page.tsx',
    expectedSnippets: ['alternates', 'canonical', '/landing/${service}/${city}'],
  },
  {
    file: 'app/landing/stadium/[venue]/page.tsx',
    expectedSnippets: ['alternates', 'canonical', '/landing/stadium/${venue}'],
  },
];

const failures = [];

function read(path) {
  return readFileSync(join(process.cwd(), path), 'utf8');
}

function sourceFiles(directory) {
  return readdirSync(join(process.cwd(), directory), { withFileTypes: true }).flatMap((entry) => {
    const relativePath = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(relativePath);
    return statSync(join(process.cwd(), relativePath)).isFile() && /\.(ts|tsx)$/.test(entry.name)
      ? [relativePath]
      : [];
  });
}

for (const route of staticRoutes) {
  const file = `app/${route}/page.tsx`;
  const source = read(file);
  const expectedCanonical = `/${route}`;

  if (!source.includes('alternates') || !source.includes('canonical')) {
    failures.push(`${file}: missing alternates.canonical metadata for ${expectedCanonical}`);
    continue;
  }

  if (!source.includes(`canonical: '${expectedCanonical}'`) && !source.includes(`canonical: "${expectedCanonical}"`)) {
    failures.push(`${file}: canonical must be ${expectedCanonical}`);
  }
}

for (const { file, expectedSnippets } of dynamicMetadataChecks) {
  const source = read(file);
  for (const snippet of expectedSnippets) {
    if (!source.includes(snippet)) {
      failures.push(`${file}: missing dynamic canonical snippet: ${snippet}`);
    }
  }
}

const landingDataSource = read('app/lib/landing-data.ts');
if (!landingDataSource.includes("service === 'airport'")) {
  failures.push('app/lib/landing-data.ts: airport service/city pages must be excluded because /landing/airport/:airport is reserved for real airport slugs');
}

const airportPageSource = read('app/landing/airport/[airport]/page.tsx');
if (!airportPageSource.includes("from 'next/navigation'") || !airportPageSource.includes('notFound();')) {
  failures.push('app/landing/airport/[airport]/page.tsx: unknown airport slugs must call notFound() instead of rendering a 200 soft-404 page');
}

const nextConfigSource = read('next.config.ts');
for (const route of ['/landing/airport/london', '/landing/airport/manchester', '/landing/airport/birmingham']) {
  if (!nextConfigSource.includes(`source: '${route}'`)) {
    failures.push(`next.config.ts: missing redirect for stale soft-404 route ${route}`);
  }
}

if (nextConfigSource.includes("source: '/faq'")) {
  failures.push('next.config.ts: /faq must remain a real page, not a redirect');
}

const requiredRedirects = {
  '/landing/airport/farnborough': '/farnborough-chauffeur',
  '/business-london': '/landing/business/london',
  '/event-birmingham': '/landing/event/birmingham',
  '/v-class-chauffeur-hire': '/mercedes-v-class-chauffeur',
};
for (const [source, destination] of Object.entries(requiredRedirects)) {
  if (!nextConfigSource.includes(`source: '${source}'`) || !nextConfigSource.includes(`destination: '${destination}'`)) {
    failures.push(`next.config.ts: missing reviewed redirect ${source} -> ${destination}`);
  }
}

const organizationSource = read('app/components/OrganizationSchema.tsx');
for (const snippet of [
  '"telephone": "+44 20 8191 1882"',
  '"streetAddress": "Suite 130, Lewisham Tower House, 67-71 Lewisham High Street"',
  '"https://www.instagram.com/eugenechauffeurs"',
]) {
  if (!organizationSource.includes(snippet)) {
    failures.push(`app/components/OrganizationSchema.tsx: missing reviewed NAP/schema value ${snippet}`);
  }
}

for (const file of sourceFiles('app')) {
  const source = read(file);
  if (source.includes('ec-web-nextjs.netlify.app')) {
    failures.push(`${file}: staging Netlify origin must not appear in active app code`);
  }
  if (source.includes('447424163636')) {
    failures.push(`${file}: unverified 07424 service phone must not appear in active app code`);
  }
}

const sitemapSource = read('app/sitemap.ts');
for (const redirectedStub of ['business-london', 'event-birmingham', 'v-class-chauffeur-hire', 'london-birmingham-chauffeur']) {
  if (sitemapSource.includes(`'${redirectedStub}'`)) {
    failures.push(`app/sitemap.ts: redirected or noindex stub ${redirectedStub} must not be emitted`);
  }
}

if (nextConfigSource.includes("source: '/fleet'")) {
  failures.push('next.config.ts: /fleet must remain a real fleet index, not a redirect');
}

for (const page of ['faq', 'fleet', 'prices', 'privacy', 'terms', 'sitemap']) {
  read(`app/${page}/page.tsx`);
}

const schemaSourceChecks = [
  'app/components/OrganizationSchema.tsx',
  'app/services/page.tsx',
];
const forbiddenSchemaSnippets = [
  "'@type': 'OfferCatalog'",
  "\"@type\": \"OfferCatalog\"",
  "'@type': 'Offer'",
  "\"@type\": \"Offer\"",
  'makesOffer',
];

for (const file of schemaSourceChecks) {
  const source = read(file);
  for (const snippet of forbiddenSchemaSnippets) {
    if (source.includes(snippet)) {
      failures.push(`${file}: remove merchant/product-style schema snippet ${snippet}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Canonical metadata check failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Canonical metadata check passed.');
