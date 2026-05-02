#!/usr/bin/env node

import { readFileSync } from 'node:fs';
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

if (failures.length > 0) {
  console.error('Canonical metadata check failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Canonical metadata check passed.');
