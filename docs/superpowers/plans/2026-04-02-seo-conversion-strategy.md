# SEO & Conversion Strategy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add ~25 programmatic SEO pages, embed booking widget and pricing on all service pages, and improve technical SEO to rank for London chauffeur keywords.

**Architecture:** Extend the existing data layer (`landing-data.ts`, `pricing.ts`) with borough, event, and private aviation data. Create dynamic route templates that generate static pages via `generateStaticParams()`. Add two shared components (TfL badge, related services links). Modify existing templates to include booking widget, pricing, and enhanced structured data.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React icons

---

## File Map

### New Files

| File | Responsibility |
|------|---------------|
| `app/lib/borough-data.ts` | Borough data: 15 London boroughs with names, descriptions, landmarks, corporate HQs, postcodes, FAQs, related links |
| `app/lib/event-data.ts` | Event data: 8 UK events with names, venues, descriptions, transport logistics, FAQs, related links |
| `app/(main)/chauffeur-[borough]/page.tsx` | Dynamic borough page template with `generateStaticParams` |
| `app/(main)/[slug]/page.tsx` | **Not used** — event pages use individual static files to avoid slug conflicts with existing routes |
| `app/(main)/royal-ascot-chauffeur/page.tsx` | Royal Ascot event page |
| `app/(main)/wimbledon-chauffeur/page.tsx` | Wimbledon event page |
| `app/(main)/cheltenham-festival-chauffeur/page.tsx` | Cheltenham Festival event page |
| `app/(main)/henley-regatta-chauffeur/page.tsx` | Henley Regatta event page |
| `app/(main)/goodwood-chauffeur/page.tsx` | Goodwood event page |
| `app/(main)/chelsea-flower-show-chauffeur/page.tsx` | Chelsea Flower Show event page |
| `app/(main)/farnborough-airshow-chauffeur/page.tsx` | Farnborough Airshow event page |
| `app/(main)/bafta-chauffeur/page.tsx` | BAFTA event page |
| `app/(main)/battersea-heliport-chauffeur/page.tsx` | Battersea Heliport page |
| `app/(main)/chauffeur-hire-by-the-hour/page.tsx` | By-the-hour service page |
| `app/components/TfLBadge.tsx` | TfL licence trust badge component |
| `app/components/RelatedServices.tsx` | Internal linking section component |

### Modified Files

| File | Change |
|------|--------|
| `app/lib/pricing.ts` | Add event day-rate packages |
| `app/sitemap.ts` | Add borough, event, by-the-hour, and battersea heliport pages |
| `app/components/Footer.tsx` | Add TfL badge, add new borough links to Locations column |
| `app/components/BookingSection.tsx` | Add TfL badge adjacent to dispatch widget |
| `next.config.ts` | Update CSP `frame-src` to replace `elitedispatch.app` with `dispatch.deversoftware.com` |
| `app/landing/[service]/[city]/page.tsx` | Add `BookingSection`, `StickyCTA`, and `RelatedServices` imports; replace CTA section |
| `app/landing/airport/[airport]/page.tsx` | Add `FAQPage` JSON-LD schema, add `RelatedServices` |

### Existing Pages NOT Modified (Already Have BookingSection)

These vehicle and borough pages already import and render `BookingSection` and `StickyCTA`:
- `app/(main)/mercedes-s-class-chauffeur/page.tsx`
- `app/(main)/mercedes-e-class-chauffeur/page.tsx`
- `app/(main)/mercedes-v-class-chauffeur/page.tsx`
- `app/(main)/mercedes-eqv-chauffeur/page.tsx`
- `app/(main)/range-rover-chauffeur/page.tsx`
- `app/(main)/rolls-royce-chauffeur/page.tsx`
- `app/(main)/chauffeur-mayfair/page.tsx`
- `app/(main)/chauffeur-chelsea/page.tsx`
- `app/(main)/chauffeur-kensington/page.tsx`
- `app/(main)/chauffeur-knightsbridge/page.tsx`
- `app/(main)/chauffeur-essex/page.tsx`
- `app/(main)/chauffeur-kent/page.tsx`
- `app/(main)/chauffeur-surrey/page.tsx`
- `app/(main)/farnborough-chauffeur/page.tsx`

---

## Task 1: CSP Header Update

**Files:**
- Modify: `next.config.ts:61`

- [ ] **Step 1: Update frame-src in CSP**

In `next.config.ts`, replace the `frame-src` line:

```typescript
// Old:
"frame-src 'self' https://www.elitedispatch.app https://www.google.com",
// New:
"frame-src 'self' https://dispatch.deversoftware.com https://www.google.com",
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "fix: update CSP frame-src to allow Dever dispatch iframe"
```

---

## Task 2: TfL Badge Component

**Files:**
- Create: `app/components/TfLBadge.tsx`

- [ ] **Step 1: Create TfLBadge component**

```tsx
import React from 'react';
import { Shield } from 'lucide-react';
import { TFL_LICENCE } from '@/app/lib/config';

interface TfLBadgeProps {
  variant?: 'inline' | 'block';
}

const TfLBadge: React.FC<TfLBadgeProps> = ({ variant = 'inline' }) => {
  if (variant === 'block') {
    return (
      <div className="flex items-center gap-3 p-4 border border-white/10 bg-white/[0.02]">
        <Shield className="w-5 h-5 text-gold-400 flex-shrink-0" />
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40">Licensed Operator</p>
          <p className="text-sm text-white/70 font-manrope">TfL Private Hire Licence {TFL_LICENCE}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-white/40">
      <Shield className="w-3.5 h-3.5" />
      <span className="text-xs font-manrope tracking-wider">TfL Licence {TFL_LICENCE}</span>
    </div>
  );
};

export default TfLBadge;
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds. Component is not yet used anywhere.

- [ ] **Step 3: Commit**

```bash
git add app/components/TfLBadge.tsx
git commit -m "feat: add TfL trust badge component"
```

---

## Task 3: Add TfL Badge to Footer and BookingSection

**Files:**
- Modify: `app/components/Footer.tsx:149-158`
- Modify: `app/components/BookingSection.tsx:63-72`

- [ ] **Step 1: Add TfL badge to Footer bottom bar**

In `app/components/Footer.tsx`, add import at top:

```tsx
import TfLBadge from '@/app/components/TfLBadge';
```

Then in the bottom bar section (line ~149), add the badge between the copyright and links:

```tsx
{/* Bottom Bar */}
<div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
  <div className="flex flex-col sm:flex-row items-center gap-4">
    <p className="text-white/30 text-xs tracking-wider">
      &copy; 2025 Eugene Chauffeurs Ltd. All rights reserved.
    </p>
    <TfLBadge />
  </div>
  <div className="flex items-center space-x-8">
    <Link href="/blog" className="text-white/30 hover:text-white text-xs tracking-wider transition-colors">Journal</Link>
    <Link href="/privacy" className="text-white/30 hover:text-white text-xs tracking-wider transition-colors">Privacy</Link>
    <Link href="/terms" className="text-white/30 hover:text-white text-xs tracking-wider transition-colors">Terms</Link>
    <Link href="/sitemap" className="text-white/30 hover:text-white text-xs tracking-wider transition-colors">Sitemap</Link>
  </div>
</div>
```

- [ ] **Step 2: Add TfL badge to BookingSection**

In `app/components/BookingSection.tsx`, add import at top:

```tsx
import TfLBadge from '@/app/components/TfLBadge';
```

Then add the block variant below the "Secure Dispatch System" header bar (after line 72, inside the bg-black/50 container, before the iframe container):

```tsx
{/* Header for Form */}
<div className="absolute top-0 left-0 right-0 h-12 bg-black border-b border-white/10 flex items-center justify-between px-6 z-10">
  <div className="flex items-center space-x-2">
    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
  </div>
  <div className="flex items-center gap-4">
    <TfLBadge />
    <span className="text-[10px] uppercase tracking-widest text-white/30">Secure Dispatch System</span>
  </div>
</div>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with TfL badge visible in footer and booking section.

- [ ] **Step 4: Commit**

```bash
git add app/components/Footer.tsx app/components/BookingSection.tsx
git commit -m "feat: add TfL trust badge to footer and booking section"
```

---

## Task 4: RelatedServices Component

**Files:**
- Create: `app/components/RelatedServices.tsx`

- [ ] **Step 1: Create RelatedServices component**

```tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  links: RelatedLink[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-italiana text-white mb-12 text-center">Related Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group p-6 border border-white/10 hover:border-gold-400/30 hover:bg-white/[0.02] transition-all duration-500"
            >
              <h3 className="text-lg font-italiana text-white mb-2 group-hover:text-gold-400 transition-colors">
                {link.title}
              </h3>
              <p className="text-white/50 font-manrope text-sm leading-relaxed mb-4">
                {link.description}
              </p>
              <div className="flex items-center text-gold-400 text-sm font-manrope">
                <span>View</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add app/components/RelatedServices.tsx
git commit -m "feat: add RelatedServices internal linking component"
```

---

## Task 5: Event Day-Rate Pricing

**Files:**
- Modify: `app/lib/pricing.ts`

- [ ] **Step 1: Add event day-rate packages**

Append to end of `app/lib/pricing.ts`:

```typescript
export const EVENT_PACKAGES: Record<string, { description: string; vehicles: Partial<Record<VehicleKey, number>> }> = {
  'royal-ascot': {
    description: 'Full day including travel to/from Ascot Racecourse and waiting time',
    vehicles: { s_class: 750, v_class: 700, range_rover: 950, e_class: 550 },
  },
  'wimbledon': {
    description: 'Full day including travel to/from AELTC and waiting time',
    vehicles: { s_class: 700, v_class: 650, range_rover: 900, e_class: 500 },
  },
  'cheltenham': {
    description: 'Full day including travel to/from Cheltenham Racecourse and waiting time',
    vehicles: { s_class: 850, v_class: 800, range_rover: 1050, e_class: 650 },
  },
  'henley': {
    description: 'Full day including travel to/from Henley-on-Thames and waiting time',
    vehicles: { s_class: 750, v_class: 700, range_rover: 950, e_class: 550 },
  },
  'goodwood': {
    description: 'Full day including travel to/from Goodwood Estate and waiting time',
    vehicles: { s_class: 850, v_class: 800, range_rover: 1050, e_class: 650 },
  },
  'chelsea-flower-show': {
    description: 'Full day including travel to/from Royal Hospital Chelsea and waiting time',
    vehicles: { s_class: 650, v_class: 600, range_rover: 850, e_class: 500 },
  },
  'farnborough-airshow': {
    description: 'Full day including travel to/from Farnborough and waiting time',
    vehicles: { s_class: 800, v_class: 750, range_rover: 1000, e_class: 600 },
  },
  'bafta': {
    description: 'Evening service including travel to/from Southbank Centre and waiting time',
    vehicles: { s_class: 550, v_class: 500, range_rover: 700, e_class: 400 },
  },
};
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add app/lib/pricing.ts
git commit -m "feat: add event day-rate pricing packages"
```

---

## Task 6: Borough Data Layer

**Files:**
- Create: `app/lib/borough-data.ts`

- [ ] **Step 1: Create borough data file**

```typescript
import type { RelatedLink } from '@/app/components/RelatedServices';

export interface BoroughData {
  name: string;
  slug: string;
  postcode: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroDescription: string;
  contentTitle: string;
  contentParagraphs: string[];
  landmarks: string[];
  corporateHQs: string[];
  nearestAirport: string;
  nearestAirportSlug: string;
  faqs: { q: string; a: string }[];
  relatedLinks: RelatedLink[];
}

export const boroughs: Record<string, BoroughData> = {
  'canary-wharf': {
    name: 'Canary Wharf',
    slug: 'canary-wharf',
    postcode: 'E14',
    metaTitle: 'Chauffeur Service Canary Wharf | Executive Car Hire E14',
    metaDescription: 'Premium chauffeur service in Canary Wharf. S-Class & V-Class hire for corporate travel, airport transfers, and evening events in E14.',
    heroTagline: 'Canary Wharf',
    heroDescription: 'Executive chauffeur services for London\'s financial district. Serving One Canada Square, Barclays HQ, and the Docklands business community.',
    contentTitle: 'The Financial',
    contentParagraphs: [
      'Canary Wharf is the heartbeat of London\'s financial sector. Our chauffeurs navigate the estate\'s one-way systems and security barriers with precision, delivering you to your building entrance on time.',
      'Whether you need a morning pickup from your Docklands apartment, a transfer to City Airport for a European day-trip, or an evening ride to a client dinner, we provide a seamless, professional service.',
    ],
    landmarks: ['One Canada Square', 'Crossrail Place', 'Jubilee Park', 'Museum of London Docklands'],
    corporateHQs: ['Barclays', 'HSBC', 'JP Morgan', 'Citigroup', 'Credit Suisse'],
    nearestAirport: 'London City Airport',
    nearestAirportSlug: '/landing/airport/london-city-airport',
    faqs: [
      { q: 'Can you collect from inside the Canary Wharf estate?', a: 'Yes. Our chauffeurs are familiar with the estate\'s loading bays and drop-off points for every tower.' },
      { q: 'How close is London City Airport?', a: 'London City Airport is approximately 10 minutes from Canary Wharf. We offer fixed-rate transfers from £125.' },
    ],
    relatedLinks: [
      { title: 'City Airport Transfers', href: '/landing/airport/london-city-airport', description: 'Fixed-rate transfers from Canary Wharf to LCY.' },
      { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'Our flagship executive saloon.' },
      { title: 'Corporate Travel', href: '/corporate-travel-chauffeur', description: 'Dedicated corporate account services.' },
      { title: 'Chauffeur City of London', href: '/chauffeur-city-of-london', description: 'Service in the Square Mile.' },
    ],
  },
  'westminster': {
    name: 'Westminster',
    slug: 'westminster',
    postcode: 'SW1',
    metaTitle: 'Chauffeur Service Westminster | Luxury Car Hire SW1',
    metaDescription: 'Premium chauffeur service in Westminster. Discreet luxury transport for Parliament, Whitehall, and Victoria. Licensed TfL operator.',
    heroTagline: 'Westminster',
    heroDescription: 'Discreet luxury transport in the heart of government. Serving Parliament, Whitehall, Buckingham Palace, and Victoria.',
    contentTitle: 'The Seat of',
    contentParagraphs: [
      'Westminster demands absolute discretion and reliability. Our chauffeurs understand the unique requirements of working around the Houses of Parliament, government buildings, and royal residences.',
      'From early morning ministerial pickups to late-night returns from state dinners, we provide a service that meets the exacting standards of SW1.',
    ],
    landmarks: ['Houses of Parliament', 'Westminster Abbey', 'Buckingham Palace', 'St James\'s Park'],
    corporateHQs: ['Channel 4', 'ITV', 'New Scotland Yard'],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Can you navigate the security zones around Parliament?', a: 'Yes. Our chauffeurs are experienced with the restricted zones and know the approved drop-off points.' },
      { q: 'Do you offer NDA chauffeurs?', a: 'All our chauffeurs sign NDAs as standard. Additional security vetting is available on request.' },
    ],
    relatedLinks: [
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from Westminster.' },
      { title: 'Chauffeur Mayfair', href: '/chauffeur-mayfair', description: 'Service in neighbouring Mayfair.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Multi-vehicle event coordination.' },
      { title: 'Rolls-Royce Ghost', href: '/rolls-royce-chauffeur', description: 'Ultimate prestige for state occasions.' },
    ],
  },
  'fulham': {
    name: 'Fulham',
    slug: 'fulham',
    postcode: 'SW6',
    metaTitle: 'Chauffeur Service Fulham | Luxury Car Hire SW6',
    metaDescription: 'Premium chauffeur service in Fulham. Airport transfers, school runs, and evening events from SW6. Professional and punctual.',
    heroTagline: 'Fulham',
    heroDescription: 'Professional chauffeur services for Fulham residents. Airport transfers, school runs, and evening events from SW6.',
    contentTitle: 'At Home in',
    contentParagraphs: [
      'Fulham is home to families and professionals who value reliability and discretion. Our chauffeurs know the school run routes, the best approaches to the King\'s Road, and the quickest paths to Heathrow.',
      'Whether you need a regular weekday service or a one-off airport transfer, we deliver the same consistent, high-quality experience every time.',
    ],
    landmarks: ['Craven Cottage', 'Bishop\'s Park', 'Hurlingham Club', 'Fulham Palace'],
    corporateHQs: [],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Do you offer regular school run services?', a: 'Yes. We can arrange a regular daily service with the same chauffeur for consistency and trust.' },
      { q: 'How long to Heathrow from Fulham?', a: 'Approximately 30-40 minutes depending on traffic. We recommend allowing 60 minutes for international flights.' },
    ],
    relatedLinks: [
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from Fulham.' },
      { title: 'Chauffeur Chelsea', href: '/chauffeur-chelsea', description: 'Service in neighbouring Chelsea.' },
      { title: 'Mercedes V-Class', href: '/mercedes-v-class-chauffeur', description: 'Spacious family transport.' },
      { title: 'By the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly hire for day trips.' },
    ],
  },
  'richmond': {
    name: 'Richmond',
    slug: 'richmond',
    postcode: 'TW9',
    metaTitle: 'Chauffeur Service Richmond | Luxury Car Hire TW9',
    metaDescription: 'Premium chauffeur service in Richmond. Airport transfers, day trips, and event transport from TW9 and Richmond upon Thames.',
    heroTagline: 'Richmond',
    heroDescription: 'Luxury chauffeur services for Richmond upon Thames. Airport transfers, day trips to the countryside, and evening events.',
    contentTitle: 'Riverside',
    contentParagraphs: [
      'Richmond combines the charm of the countryside with proximity to central London. Our chauffeurs provide the perfect bridge between the two — whether you are heading to the City, Heathrow, or a day out at Hampton Court.',
      'We understand the rhythms of Richmond life: Saturday mornings on the towpath, Sunday lunches at riverside pubs, and Monday mornings in the Square Mile.',
    ],
    landmarks: ['Richmond Park', 'Kew Gardens', 'Hampton Court Palace', 'Richmond Theatre'],
    corporateHQs: [],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'How far is Heathrow from Richmond?', a: 'Approximately 20-30 minutes. Richmond is one of the closest residential areas to Heathrow Airport.' },
      { q: 'Do you cover Twickenham and surrounding areas?', a: 'Yes. We serve all of Richmond upon Thames including Twickenham, Teddington, Hampton, and Ham.' },
    ],
    relatedLinks: [
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Quick fixed-rate transfers from Richmond.' },
      { title: 'Chauffeur Surrey', href: '/chauffeur-surrey', description: 'Service across the Surrey border.' },
      { title: 'Range Rover', href: '/range-rover-chauffeur', description: 'Ideal for countryside day trips.' },
      { title: 'Wimbledon Chauffeur', href: '/wimbledon-chauffeur', description: 'Championships transport from Richmond.' },
    ],
  },
  'hampstead': {
    name: 'Hampstead',
    slug: 'hampstead',
    postcode: 'NW3',
    metaTitle: 'Chauffeur Service Hampstead | Luxury Car Hire NW3',
    metaDescription: 'Premium chauffeur service in Hampstead. Discreet luxury transport for NW3 residents. Airport transfers and evening events.',
    heroTagline: 'Hampstead',
    heroDescription: 'Discreet luxury transport for Hampstead\'s residents. Airport transfers, evening events, and private travel from NW3.',
    contentTitle: 'Village',
    contentParagraphs: [
      'Hampstead\'s village charm and winding lanes require a chauffeur who knows the territory. Our drivers navigate the narrow streets of NW3 with confidence, collecting you from your doorstep without delay.',
      'From transfers to Heathrow via the A41 corridor to evening rides into Mayfair for dinner, we provide a quiet, professional service that matches Hampstead\'s character.',
    ],
    landmarks: ['Hampstead Heath', 'Kenwood House', 'Freud Museum', 'Flask Walk'],
    corporateHQs: [],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Can you navigate Hampstead\'s narrow streets?', a: 'Yes. Our chauffeurs are familiar with Hampstead\'s one-way systems and residential parking restrictions.' },
      { q: 'How long to Heathrow from Hampstead?', a: 'Approximately 45-60 minutes depending on traffic. We recommend allowing 90 minutes for international flights.' },
    ],
    relatedLinks: [
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from Hampstead.' },
      { title: 'Chauffeur St John\'s Wood', href: '/chauffeur-st-johns-wood', description: 'Service in neighbouring St John\'s Wood.' },
      { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'The perfect executive saloon.' },
      { title: 'By the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly hire for day trips.' },
    ],
  },
  'notting-hill': {
    name: 'Notting Hill',
    slug: 'notting-hill',
    postcode: 'W11',
    metaTitle: 'Chauffeur Service Notting Hill | Luxury Car Hire W11',
    metaDescription: 'Premium chauffeur service in Notting Hill. Discreet luxury transport for W11. Airport transfers, shopping trips, and evening events.',
    heroTagline: 'Notting Hill',
    heroDescription: 'Luxury chauffeur services for Notting Hill. Portobello Road, Westbourne Grove, and Holland Park at your doorstep.',
    contentTitle: 'West London',
    contentParagraphs: [
      'Notting Hill blends bohemian culture with some of London\'s most valuable residential streets. Our chauffeurs provide a discreet, stylish service that matches the area\'s character.',
      'From Saturday morning trips to Portobello Market to evening transfers to Soho or the West End, we navigate W11\'s streets with ease.',
    ],
    landmarks: ['Portobello Road Market', 'Holland Park', 'Electric Cinema', 'Westbourne Grove'],
    corporateHQs: [],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Can you handle Carnival weekend logistics?', a: 'Yes. Our chauffeurs know the road closures and alternative routes during Notting Hill Carnival.' },
      { q: 'Do you cover Holland Park and Ladbroke Grove?', a: 'Yes. We serve all of W11 and the surrounding postcodes.' },
    ],
    relatedLinks: [
      { title: 'Chauffeur Kensington', href: '/chauffeur-kensington', description: 'Service in neighbouring Kensington.' },
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from W11.' },
      { title: 'Personal Shopping', href: '/personal-shopping-concierge-london', description: 'Chauffeur-driven shopping trips.' },
      { title: 'Mercedes E-Class', href: '/mercedes-e-class-chauffeur', description: 'Comfortable and discreet.' },
    ],
  },
  'belgravia': {
    name: 'Belgravia',
    slug: 'belgravia',
    postcode: 'SW1X',
    metaTitle: 'Chauffeur Service Belgravia | Luxury Car Hire SW1',
    metaDescription: 'Premium chauffeur service in Belgravia. Ultra-discreet luxury transport for SW1X. Embassy transfers, private residences, and exclusive venues.',
    heroTagline: 'Belgravia',
    heroDescription: 'Ultra-discreet luxury transport in London\'s most exclusive residential quarter. Serving embassies, private residences, and Eaton Square.',
    contentTitle: 'Embassy',
    contentParagraphs: [
      'Belgravia sets the standard for discreet luxury. Our chauffeurs are accustomed to serving embassy staff, diplomatic convoys, and residents who demand absolute privacy.',
      'From Eaton Square to Chester Row, Elizabeth Street to Motcomb Street — we know every approach, every parking restriction, and every private entrance.',
    ],
    landmarks: ['Eaton Square', 'Belgrave Square', 'Elizabeth Street', 'Motcomb Street'],
    corporateHQs: ['Multiple Embassies', 'Grosvenor Estate'],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Do you provide NDA chauffeurs?', a: 'All our chauffeurs sign NDAs as standard. Additional security vetting is available on request.' },
      { q: 'Can you coordinate with embassy security?', a: 'Yes. We regularly work with diplomatic security teams and can accommodate specific protocols.' },
    ],
    relatedLinks: [
      { title: 'Chauffeur Knightsbridge', href: '/chauffeur-knightsbridge', description: 'Service in neighbouring Knightsbridge.' },
      { title: 'Chauffeur Mayfair', href: '/chauffeur-mayfair', description: 'Service in neighbouring Mayfair.' },
      { title: 'Rolls-Royce Ghost', href: '/rolls-royce-chauffeur', description: 'Ultimate prestige transport.' },
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from Belgravia.' },
    ],
  },
  'wimbledon': {
    name: 'Wimbledon',
    slug: 'wimbledon',
    postcode: 'SW19',
    metaTitle: 'Chauffeur Service Wimbledon | Luxury Car Hire SW19',
    metaDescription: 'Premium chauffeur service in Wimbledon. Airport transfers, Championships transport, and daily chauffeur hire from SW19.',
    heroTagline: 'Wimbledon',
    heroDescription: 'Professional chauffeur services for Wimbledon Village and SW19. Year-round transport plus Championships day packages.',
    contentTitle: 'Village',
    contentParagraphs: [
      'Wimbledon Village is one of south-west London\'s most desirable addresses. Our chauffeurs provide a reliable daily service as well as specialist Championships transport during the summer.',
      'From the Village high street to Wimbledon Common, Southfields station to the All England Club — we know every road, every shortcut, and every parking approach.',
    ],
    landmarks: ['All England Lawn Tennis Club', 'Wimbledon Common', 'Wimbledon Village', 'Cannizaro Park'],
    corporateHQs: [],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Do you provide Championships day transport?', a: 'Yes. We offer full-day packages including travel to/from the AELTC and waiting time. See our Wimbledon Chauffeur page.' },
      { q: 'How long to Gatwick from Wimbledon?', a: 'Approximately 40-50 minutes via the A24 or M23. We monitor traffic and choose the fastest route.' },
    ],
    relatedLinks: [
      { title: 'Wimbledon Championships', href: '/wimbledon-chauffeur', description: 'Event-day packages for the Championships.' },
      { title: 'Gatwick Transfers', href: '/landing/airport/gatwick', description: 'Fixed-rate transfers from SW19.' },
      { title: 'Chauffeur Richmond', href: '/chauffeur-richmond', description: 'Service in neighbouring Richmond.' },
      { title: 'Mercedes V-Class', href: '/mercedes-v-class-chauffeur', description: 'Spacious family transport.' },
    ],
  },
  'greenwich': {
    name: 'Greenwich',
    slug: 'greenwich',
    postcode: 'SE10',
    metaTitle: 'Chauffeur Service Greenwich | Luxury Car Hire SE10',
    metaDescription: 'Premium chauffeur service in Greenwich. Airport transfers, O2 Arena events, and luxury transport across SE10.',
    heroTagline: 'Greenwich',
    heroDescription: 'Luxury chauffeur services for Greenwich. O2 Arena events, Cutty Sark visits, and airport transfers from SE10.',
    contentTitle: 'Maritime',
    contentParagraphs: [
      'Greenwich blends maritime heritage with modern entertainment at the O2 Arena. Our chauffeurs serve both — from elegant transfers to the Royal Observatory to concert-night pickups from North Greenwich.',
      'We navigate the Blackwall Tunnel, the A2, and the local streets of SE10 daily, ensuring you arrive on time regardless of destination.',
    ],
    landmarks: ['O2 Arena', 'Cutty Sark', 'Royal Observatory', 'Greenwich Park'],
    corporateHQs: ['InterContinental London - The O2'],
    nearestAirport: 'London City Airport',
    nearestAirportSlug: '/landing/airport/london-city-airport',
    faqs: [
      { q: 'Do you cover O2 Arena events?', a: 'Yes. We provide pre-booked pickups and drop-offs for all O2 events, avoiding the taxi queue.' },
      { q: 'How close is City Airport?', a: 'London City Airport is approximately 15 minutes from Greenwich via the A102.' },
    ],
    relatedLinks: [
      { title: 'City Airport Transfers', href: '/landing/airport/london-city-airport', description: 'Quick transfers from Greenwich to LCY.' },
      { title: 'Chauffeur Canary Wharf', href: '/chauffeur-canary-wharf', description: 'Service in neighbouring Canary Wharf.' },
      { title: 'Mercedes E-Class', href: '/mercedes-e-class-chauffeur', description: 'Comfortable executive saloon.' },
      { title: 'Hire by the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly chauffeur hire.' },
    ],
  },
  'st-johns-wood': {
    name: 'St John\'s Wood',
    slug: 'st-johns-wood',
    postcode: 'NW8',
    metaTitle: 'Chauffeur Service St John\'s Wood | Luxury Car Hire NW8',
    metaDescription: 'Premium chauffeur service in St John\'s Wood. Discreet luxury transport for NW8. Lord\'s Cricket Ground transfers and airport pickups.',
    heroTagline: 'St John\'s Wood',
    heroDescription: 'Discreet luxury transport for St John\'s Wood. Serving Lord\'s Cricket Ground, Abbey Road, and the residential streets of NW8.',
    contentTitle: 'Exclusive',
    contentParagraphs: [
      'St John\'s Wood is one of London\'s most exclusive residential enclaves. Our chauffeurs provide a quiet, professional service that respects the area\'s privacy and tranquility.',
      'From match-day transfers to Lord\'s to morning commutes into the City, we deliver a consistent, high-quality experience for NW8 residents.',
    ],
    landmarks: ['Lord\'s Cricket Ground', 'Abbey Road Studios', 'Regent\'s Park', 'Primrose Hill'],
    corporateHQs: [],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Do you provide Lord\'s match-day transport?', a: 'Yes. We offer pre-booked pickups and drop-offs for all Lord\'s fixtures, including Test matches and finals.' },
      { q: 'Can you do daily commutes?', a: 'Absolutely. We offer regular daily services with the same chauffeur for consistency.' },
    ],
    relatedLinks: [
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from NW8.' },
      { title: 'Chauffeur Hampstead', href: '/chauffeur-hampstead', description: 'Service in neighbouring Hampstead.' },
      { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'The executive benchmark.' },
      { title: 'Corporate Travel', href: '/corporate-travel-chauffeur', description: 'Dedicated corporate accounts.' },
    ],
  },
  'battersea': {
    name: 'Battersea',
    slug: 'battersea',
    postcode: 'SW11',
    metaTitle: 'Chauffeur Service Battersea | Luxury Car Hire SW11',
    metaDescription: 'Premium chauffeur service in Battersea. Airport transfers, Battersea Power Station, and heliport transfers from SW11.',
    heroTagline: 'Battersea',
    heroDescription: 'Luxury chauffeur services for Battersea. Power Station, heliport transfers, and airport pickups from SW11.',
    contentTitle: 'Riverside',
    contentParagraphs: [
      'Battersea has transformed into one of London\'s most exciting residential areas. Our chauffeurs serve the Power Station development, the riverside apartments, and the Battersea Heliport.',
      'Whether you need a heliport transfer, an airport pickup, or a daily commute into the City, we provide a premium service from SW11.',
    ],
    landmarks: ['Battersea Power Station', 'Battersea Park', 'Battersea Heliport', 'Peace Pagoda'],
    corporateHQs: ['Apple Battersea'],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Do you cover Battersea Heliport transfers?', a: 'Yes. See our dedicated Battersea Heliport Chauffeur page for details.' },
      { q: 'Can you collect from Battersea Power Station?', a: 'Yes. Our chauffeurs know the development\'s access points and drop-off areas.' },
    ],
    relatedLinks: [
      { title: 'Battersea Heliport', href: '/battersea-heliport-chauffeur', description: 'Dedicated heliport transfer service.' },
      { title: 'Chauffeur Chelsea', href: '/chauffeur-chelsea', description: 'Service across the river in Chelsea.' },
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from Battersea.' },
      { title: 'Mercedes EQV', href: '/mercedes-eqv-chauffeur', description: 'Electric luxury for eco-conscious travel.' },
    ],
  },
  'islington': {
    name: 'Islington',
    slug: 'islington',
    postcode: 'N1',
    metaTitle: 'Chauffeur Service Islington | Luxury Car Hire N1',
    metaDescription: 'Premium chauffeur service in Islington. Airport transfers, business travel, and evening events from N1.',
    heroTagline: 'Islington',
    heroDescription: 'Professional chauffeur services for Islington. Upper Street, Angel, and the business community of N1.',
    contentTitle: 'North London',
    contentParagraphs: [
      'Islington sits at the crossroads of north London\'s creative and business communities. Our chauffeurs serve the tech startups of Old Street, the theatres of Upper Street, and the residential streets of Barnsbury.',
      'From City Airport transfers via the A1 to Heathrow pickups via the Westway, we know the fastest routes out of N1 at every time of day.',
    ],
    landmarks: ['Upper Street', 'Sadler\'s Wells', 'Business Design Centre', 'Angel'],
    corporateHQs: [],
    nearestAirport: 'London City Airport',
    nearestAirportSlug: '/landing/airport/london-city-airport',
    faqs: [
      { q: 'How long to City Airport from Islington?', a: 'Approximately 20-25 minutes via the A1 and Limehouse Link.' },
      { q: 'Do you cover Clerkenwell and Farringdon?', a: 'Yes. We serve all of N1 and EC1 including Clerkenwell, Farringdon, and Old Street.' },
    ],
    relatedLinks: [
      { title: 'City Airport Transfers', href: '/landing/airport/london-city-airport', description: 'Fixed-rate transfers from Islington.' },
      { title: 'Chauffeur City of London', href: '/chauffeur-city-of-london', description: 'Service in the Square Mile.' },
      { title: 'Mercedes E-Class', href: '/mercedes-e-class-chauffeur', description: 'Professional and comfortable.' },
      { title: 'Corporate Travel', href: '/corporate-travel-chauffeur', description: 'Dedicated business accounts.' },
    ],
  },
  'city-of-london': {
    name: 'City of London',
    slug: 'city-of-london',
    postcode: 'EC',
    metaTitle: 'Chauffeur Service City of London | Executive Car Hire EC',
    metaDescription: 'Premium chauffeur service in the City of London. Executive transport for the Square Mile. Bank, Liverpool Street, and Barbican.',
    heroTagline: 'City of London',
    heroDescription: 'Executive chauffeur services for the Square Mile. Serving Bank, Liverpool Street, Moorgate, and the Barbican.',
    contentTitle: 'The Square',
    contentParagraphs: [
      'The City of London operates at a pace that demands punctuality and precision. Our chauffeurs understand the congestion charge zone, the one-way systems, and the loading restrictions that govern the Square Mile.',
      'From early morning pickups at Liverpool Street to late-night returns from client entertaining, we provide a reliable executive service for the City\'s professionals.',
    ],
    landmarks: ['Bank of England', 'St Paul\'s Cathedral', 'Barbican Centre', 'Tower of London'],
    corporateHQs: ['Lloyd\'s of London', 'Bank of England', 'Goldman Sachs', 'Deutsche Bank'],
    nearestAirport: 'London City Airport',
    nearestAirportSlug: '/landing/airport/london-city-airport',
    faqs: [
      { q: 'Do you know the City\'s loading restrictions?', a: 'Yes. Our chauffeurs are fully briefed on the City\'s time-restricted loading bays and drop-off points.' },
      { q: 'Can you wait in the City during meetings?', a: 'Yes. We use approved parking locations and are ready when you are. Hourly hire is available.' },
    ],
    relatedLinks: [
      { title: 'City Airport Transfers', href: '/landing/airport/london-city-airport', description: 'Direct transfers from the Square Mile.' },
      { title: 'Chauffeur Canary Wharf', href: '/chauffeur-canary-wharf', description: 'Service in Docklands.' },
      { title: 'Corporate Travel', href: '/corporate-travel-chauffeur', description: 'Dedicated corporate account services.' },
      { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'The flagship executive saloon.' },
    ],
  },
  'south-kensington': {
    name: 'South Kensington',
    slug: 'south-kensington',
    postcode: 'SW7',
    metaTitle: 'Chauffeur Service South Kensington | Luxury Car Hire SW7',
    metaDescription: 'Premium chauffeur service in South Kensington. Museum district transport, airport transfers, and school runs from SW7.',
    heroTagline: 'South Kensington',
    heroDescription: 'Luxury chauffeur services for South Kensington. The museum district, Cromwell Road, and the residential streets of SW7.',
    contentTitle: 'Cultural',
    contentParagraphs: [
      'South Kensington is London\'s cultural heart, home to the V&A, Natural History Museum, and Royal Albert Hall. Our chauffeurs navigate the busy museum district and residential streets of SW7 with ease.',
      'Whether you need a school run to one of SW7\'s prestigious schools, an airport transfer from your Onslow Gardens apartment, or an evening ride to the Royal Albert Hall, we provide a seamless service.',
    ],
    landmarks: ['V&A Museum', 'Natural History Museum', 'Royal Albert Hall', 'Science Museum'],
    corporateHQs: ['Institut Francais', 'Imperial College London'],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Can you do school runs in South Kensington?', a: 'Yes. We serve all major schools in SW7 and can arrange regular daily services.' },
      { q: 'How long to Heathrow?', a: 'Approximately 35-45 minutes via the A4 corridor. We recommend allowing 60 minutes for international flights.' },
    ],
    relatedLinks: [
      { title: 'Chauffeur Kensington', href: '/chauffeur-kensington', description: 'Service in neighbouring Kensington.' },
      { title: 'Chauffeur Chelsea', href: '/chauffeur-chelsea', description: 'Service in neighbouring Chelsea.' },
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from SW7.' },
      { title: 'Mercedes V-Class', href: '/mercedes-v-class-chauffeur', description: 'Spacious family transport.' },
    ],
  },
  'marylebone': {
    name: 'Marylebone',
    slug: 'marylebone',
    postcode: 'W1U',
    metaTitle: 'Chauffeur Service Marylebone | Luxury Car Hire W1',
    metaDescription: 'Premium chauffeur service in Marylebone. Harley Street medical transfers, station pickups, and luxury transport from W1.',
    heroTagline: 'Marylebone',
    heroDescription: 'Professional chauffeur services for Marylebone. Harley Street medical transfers, Marylebone station pickups, and W1 luxury transport.',
    contentTitle: 'Medical',
    contentParagraphs: [
      'Marylebone is home to Harley Street\'s world-renowned medical practices. Our chauffeurs provide discreet, comfortable transport for patients, consultants, and their families.',
      'Beyond Harley Street, we serve the boutique shops of Marylebone High Street, the residential streets of W1U, and provide efficient transfers from Marylebone station.',
    ],
    landmarks: ['Harley Street', 'Marylebone High Street', 'Regent\'s Park', 'Madame Tussauds'],
    corporateHQs: ['Harley Street Medical District'],
    nearestAirport: 'Heathrow',
    nearestAirportSlug: '/landing/airport/heathrow',
    faqs: [
      { q: 'Do you provide medical appointment transfers?', a: 'Yes. We regularly transport patients to and from Harley Street appointments, with waiting time included.' },
      { q: 'Can you collect from Marylebone station?', a: 'Yes. We meet you at the station exit and handle your luggage.' },
    ],
    relatedLinks: [
      { title: 'Chauffeur Mayfair', href: '/chauffeur-mayfair', description: 'Service in neighbouring Mayfair.' },
      { title: 'Heathrow Transfers', href: '/landing/airport/heathrow', description: 'Fixed-rate transfers from Marylebone.' },
      { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'Comfortable medical transport.' },
      { title: 'By the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly hire for appointments.' },
    ],
  },
};

export function getAllBoroughs() {
  return Object.keys(boroughs).map(borough => ({ borough }));
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add app/lib/borough-data.ts
git commit -m "feat: add borough data layer for 15 London areas"
```

---

## Task 7: Dynamic Borough Page Template

**Files:**
- Create: `app/(main)/chauffeur-[borough]/page.tsx`

- [ ] **Step 1: Create dynamic borough page template**

```tsx
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Clock, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import RelatedServices from '@/app/components/RelatedServices';
import FAQSchema from '@/app/components/FAQSchema';
import { boroughs, getAllBoroughs } from '@/app/lib/borough-data';
import { HOURLY_RATES, HOURLY_MIN_HOURS, AIRPORT_FARES } from '@/app/lib/pricing';
import { COMPANY } from '@/app/lib/config';

export const revalidate = 86400;

type BoroughKey = keyof typeof boroughs;

export async function generateStaticParams() {
  return getAllBoroughs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ borough: string }>;
}): Promise<Metadata> {
  const { borough } = await params;
  const data = boroughs[borough as BoroughKey];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/chauffeur-${data.slug}` },
  };
}

export default async function BoroughPage({
  params,
}: {
  params: Promise<{ borough: string }>;
}) {
  const { borough } = await params;
  const data = boroughs[borough as BoroughKey];

  if (!data) {
    return <div className="py-24 text-center text-white">Area not found</div>;
  }

  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-gold-400" />,
      title: 'Local Expertise',
      description: `Intimate knowledge of ${data.name}'s streets, landmarks, and access points.`,
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: 'Punctuality',
      description: 'Always on time, waiting for you at your residence or office lobby.',
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: 'Discretion',
      description: 'NDA available on request. Unmarked vehicles available.',
    },
    {
      icon: <Star className="w-6 h-6 text-gold-400" />,
      title: 'Luxury Fleet',
      description: 'Immaculate Mercedes-Benz, Range Rover, and Rolls-Royce vehicles.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Chauffeur Service ${data.name}`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: 'https://eugenechauffeurs.com/',
      telephone: '+44 7340 801 274',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressRegion: data.name,
        postalCode: data.postcode,
        addressCountry: 'GB',
      },
    },
    areaServed: `${data.name}, London`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: String(HOURLY_RATES.e_class),
      highPrice: String(HOURLY_RATES.rolls_royce),
      availability: 'https://schema.org/InStock',
    },
  };

  const faqSchema = data.faqs.map(f => ({ question: f.q, answer: f.a }));

  return (
    <>
      <LDJson json={jsonLd} />
      <FAQSchema faqs={faqSchema} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Local Service</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              {data.heroTagline} <br />
              <span className="text-white/30">Chauffeur.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              {data.heroDescription}
            </p>
            <div className="mt-6">
              <TfLBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                  {data.contentTitle} <span className="text-gold-400">{data.name}.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  {data.contentParagraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="opacity-80">{feature.icon}</div>
                    <h3 className="text-lg font-italiana text-white">{feature.title}</h3>
                    <p className="text-white/50 font-manrope text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                <Image
                  src="/business.jpg"
                  alt={`Chauffeur Service ${data.name}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                {data.name} <br /> Rates.
              </h2>
              <p className="text-white/60 font-manrope font-light mb-4">
                Hourly hire from {data.name}. Minimum {HOURLY_MIN_HOURS} hours.
              </p>
              <p className="text-white/60 font-manrope font-light mb-8">
                Airport transfers from {data.name} to {data.nearestAirport} also available at fixed rates.
              </p>
              <p className="text-xs text-white/40 font-manrope">Prices subject to VAT where applicable.</p>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-4 border-b border-white/10 text-gold-400 font-italiana text-lg">Vehicle</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Per Hour (from)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Object.entries(HOURLY_RATES) as [string, number][]).map(([key, rate]) => {
                      const labels: Record<string, string> = {
                        s_class: 'Mercedes-Benz S-Class',
                        v_class: 'Mercedes-Benz V-Class',
                        range_rover: 'Range Rover',
                        e_class: 'Mercedes-Benz E-Class',
                        eqv: 'Mercedes-Benz EQV',
                        rolls_royce: 'Rolls-Royce Ghost',
                      };
                      return (
                        <tr key={key} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-4 text-white font-manrope">{labels[key]}</td>
                          <td className="py-4 px-4 text-white/60 font-manrope text-right">&pound;{rate}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-italiana text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-italiana text-gold-400">{faq.q}</h3>
                <p className="text-white/60 font-manrope text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices links={data.relatedLinks} />
      <BookingSection />
      <StickyCTA label={`Get a ${data.name} Quote`} />
    </>
  );
}
```

- [ ] **Step 2: Verify the FAQSchema component accepts the right props**

Check `app/components/FAQSchema.tsx` to confirm it accepts `faqs: { question: string; answer: string }[]`. If it uses different prop names, adjust the mapping in the borough template accordingly.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with 15 new borough pages generated (check output for `/chauffeur-canary-wharf`, `/chauffeur-westminster`, etc.).

- [ ] **Step 4: Commit**

```bash
git add "app/(main)/chauffeur-[borough]/page.tsx"
git commit -m "feat: add dynamic borough page template generating 15 London area pages"
```

---

## Task 8: Event Data Layer

**Files:**
- Create: `app/lib/event-data.ts`

- [ ] **Step 1: Create event data file**

```typescript
import type { RelatedLink } from '@/app/components/RelatedServices';

export interface EventData {
  name: string;
  slug: string;
  venue: string;
  venueAddress: string;
  dates: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroDescription: string;
  contentTitle: string;
  contentParagraphs: string[];
  logistics: string[];
  faqs: { q: string; a: string }[];
  pricingKey: string;
  relatedLinks: RelatedLink[];
}

export const events: Record<string, EventData> = {
  'royal-ascot': {
    name: 'Royal Ascot',
    slug: 'royal-ascot',
    venue: 'Ascot Racecourse',
    venueAddress: 'Ascot, Berkshire SL5 7JX',
    dates: 'June (5 days)',
    metaTitle: 'Royal Ascot Chauffeur | Race Day Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Royal Ascot. Luxury transfers to Ascot Racecourse with waiting time included. S-Class, V-Class, and Range Rover available.',
    heroTagline: 'Royal Ascot',
    heroDescription: 'Arrive at the Royal Enclosure in style. Full-day chauffeur packages with waiting time, refreshments, and a seamless return journey.',
    contentTitle: 'Race Day',
    contentParagraphs: [
      'Royal Ascot demands an entrance that matches the occasion. Our chauffeurs deliver you to the racecourse gates in an immaculate vehicle, dressed in formal attire and ready to assist with your day.',
      'Your chauffeur waits on-site throughout the day, ready to depart at your signal — no queuing for taxis, no surge pricing, just a calm, luxurious return to London.',
    ],
    logistics: [
      'Approximately 50 minutes from Central London via the M4',
      'Chauffeur waits on-site for the duration',
      'Return journey timed to your schedule',
      'Complimentary water and phone charger',
    ],
    faqs: [
      { q: 'How long is the drive to Ascot?', a: 'Approximately 50-60 minutes from Central London, depending on traffic. We recommend departing by 10am for a midday arrival.' },
      { q: 'Does the chauffeur wait all day?', a: 'Yes. Our full-day package includes waiting time at the racecourse. Your chauffeur is available whenever you are ready to leave.' },
    ],
    pricingKey: 'royal-ascot',
    relatedLinks: [
      { title: 'Chauffeur Surrey', href: '/chauffeur-surrey', description: 'Service across the Surrey border.' },
      { title: 'Rolls-Royce Ghost', href: '/rolls-royce-chauffeur', description: 'Ultimate prestige for race day.' },
      { title: 'Goodwood Chauffeur', href: '/goodwood-chauffeur', description: 'Another premier racing event.' },
      { title: 'By the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly chauffeur hire.' },
    ],
  },
  'wimbledon': {
    name: 'Wimbledon Championships',
    slug: 'wimbledon',
    venue: 'All England Lawn Tennis Club',
    venueAddress: 'Church Road, Wimbledon, London SW19 5AE',
    dates: 'Late June - Mid July (2 weeks)',
    metaTitle: 'Wimbledon Chauffeur | Championships Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Wimbledon Championships. Luxury transfers to the AELTC with waiting time. Beat the queues and traffic.',
    heroTagline: 'Wimbledon',
    heroDescription: 'Championship-level transport to the All England Club. Full-day packages with waiting time and a stress-free return journey.',
    contentTitle: 'Centre Court',
    contentParagraphs: [
      'The Wimbledon Championships attract visitors from around the world, and the roads around SW19 reflect it. Our chauffeurs know the approach routes, the drop-off points, and the quiet streets to avoid the congestion.',
      'Whether you have a Debenture ticket for Centre Court or a Ground Pass for the outer courts, we deliver you to the gates and wait until you are ready to leave.',
    ],
    logistics: [
      'Approximately 30-40 minutes from Central London',
      'Drop-off at Gate 1 or Gate 5 depending on ticket type',
      'Chauffeur waits on-site for the duration',
      'Alternative route via A3 if Wimbledon Village is congested',
    ],
    faqs: [
      { q: 'Where does the chauffeur drop off?', a: 'We drop off at the nearest accessible gate to your ticket type — typically Gate 1 (Church Road) or Gate 5 (Somerset Road).' },
      { q: 'Can you handle multiple vehicles for a corporate group?', a: 'Yes. We regularly coordinate multi-vehicle Championships transport for corporate hospitality groups.' },
    ],
    pricingKey: 'wimbledon',
    relatedLinks: [
      { title: 'Chauffeur Wimbledon', href: '/chauffeur-wimbledon', description: 'Year-round service in SW19.' },
      { title: 'Mercedes V-Class', href: '/mercedes-v-class-chauffeur', description: 'Group transport for up to 6.' },
      { title: 'Royal Ascot Chauffeur', href: '/royal-ascot-chauffeur', description: 'Another premier sporting event.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Multi-vehicle event coordination.' },
    ],
  },
  'cheltenham': {
    name: 'Cheltenham Festival',
    slug: 'cheltenham',
    venue: 'Cheltenham Racecourse',
    venueAddress: 'Prestbury Park, Cheltenham GL50 4SH',
    dates: 'March (4 days)',
    metaTitle: 'Cheltenham Festival Chauffeur | Race Day Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Cheltenham Festival. Luxury transfers from London to Prestbury Park with waiting time included.',
    heroTagline: 'Cheltenham',
    heroDescription: 'Luxury transfers from London to Cheltenham Racecourse. Full-day packages with waiting time for all four days of the Festival.',
    contentTitle: 'Festival',
    contentParagraphs: [
      'Cheltenham Festival is the pinnacle of National Hunt racing, and the journey from London is part of the experience. Our chauffeurs provide a comfortable, relaxing transfer via the M40 and A40.',
      'Arrive refreshed, enjoy the racing, and let us handle the return journey — no designated driver needed, no late-night M40 stress.',
    ],
    logistics: [
      'Approximately 2 hours from Central London via M40/A40',
      'Chauffeur waits on-site for the duration',
      'Early morning departure recommended for Gold Cup day',
      'Return journey timed to your schedule',
    ],
    faqs: [
      { q: 'How long is the drive to Cheltenham?', a: 'Approximately 2 hours from Central London. We recommend departing by 9am for a comfortable arrival.' },
      { q: 'Can you do multiple days?', a: 'Yes. We offer multi-day packages for the full Festival at a discounted rate.' },
    ],
    pricingKey: 'cheltenham',
    relatedLinks: [
      { title: 'Royal Ascot Chauffeur', href: '/royal-ascot-chauffeur', description: 'Another premier racing event.' },
      { title: 'Range Rover', href: '/range-rover-chauffeur', description: 'Comfortable for longer journeys.' },
      { title: 'By the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly chauffeur hire.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Multi-vehicle group coordination.' },
    ],
  },
  'henley': {
    name: 'Henley Royal Regatta',
    slug: 'henley',
    venue: 'Henley-on-Thames',
    venueAddress: 'Henley-on-Thames, Oxfordshire RG9 2LY',
    dates: 'Late June - Early July (5 days)',
    metaTitle: 'Henley Regatta Chauffeur | Event Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Henley Royal Regatta. Luxury transfers from London to Henley-on-Thames with full-day waiting time.',
    heroTagline: 'Henley Regatta',
    heroDescription: 'Arrive at the Stewards\' Enclosure in style. Full-day chauffeur packages from London to Henley-on-Thames.',
    contentTitle: 'Riverside',
    contentParagraphs: [
      'Henley Royal Regatta is the quintessential English summer event. The journey from London through the Chilterns is scenic, and our chauffeurs make it effortless.',
      'We drop you at the enclosure entrance, park nearby, and wait until the last race — or the last glass of Pimm\'s.',
    ],
    logistics: [
      'Approximately 60-75 minutes from Central London via M4/A404',
      'Drop-off at the enclosure entrance',
      'Chauffeur waits on-site for the duration',
      'Return journey avoids the A4130 congestion',
    ],
    faqs: [
      { q: 'How long is the drive to Henley?', a: 'Approximately 60-75 minutes from Central London. We recommend allowing 90 minutes during Regatta week.' },
      { q: 'Is parking included?', a: 'Yes. Our chauffeur handles all parking. You just arrive and enjoy.' },
    ],
    pricingKey: 'henley',
    relatedLinks: [
      { title: 'Royal Ascot Chauffeur', href: '/royal-ascot-chauffeur', description: 'Another June highlight.' },
      { title: 'Wimbledon Chauffeur', href: '/wimbledon-chauffeur', description: 'Championships transport.' },
      { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'Elegant arrival guaranteed.' },
      { title: 'Chauffeur Richmond', href: '/chauffeur-richmond', description: 'Close to the M4 corridor.' },
    ],
  },
  'goodwood': {
    name: 'Goodwood',
    slug: 'goodwood',
    venue: 'Goodwood Estate',
    venueAddress: 'Goodwood, Chichester PO18 0PX',
    dates: 'Festival of Speed (July), Revival (September)',
    metaTitle: 'Goodwood Chauffeur | Festival of Speed & Revival Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Goodwood Festival of Speed and Revival. Luxury transfers from London to the Goodwood Estate.',
    heroTagline: 'Goodwood',
    heroDescription: 'Luxury transfers to the Goodwood Estate for Festival of Speed and Revival. Full-day packages from London.',
    contentTitle: 'Motorsport',
    contentParagraphs: [
      'Goodwood is the spiritual home of British motorsport. Whether it is the Festival of Speed in July or the Revival in September, the journey to the Goodwood Estate should be part of the experience.',
      'Our chauffeurs navigate the Sussex lanes with care, delivering you to the estate entrance refreshed and ready to enjoy the spectacle.',
    ],
    logistics: [
      'Approximately 90 minutes from Central London via A3/A27',
      'Drop-off at the estate entrance',
      'Chauffeur waits on-site for the duration',
      'Country lanes require experienced navigation',
    ],
    faqs: [
      { q: 'Do you cover both Festival of Speed and Revival?', a: 'Yes. We provide chauffeur services for both Goodwood events, plus the Qatar Goodwood Festival.' },
      { q: 'Can you accommodate car enthusiast groups?', a: 'Absolutely. We can coordinate multiple vehicles for groups travelling together.' },
    ],
    pricingKey: 'goodwood',
    relatedLinks: [
      { title: 'Royal Ascot Chauffeur', href: '/royal-ascot-chauffeur', description: 'Another premier event.' },
      { title: 'Range Rover', href: '/range-rover-chauffeur', description: 'Ideal for country estate visits.' },
      { title: 'Chauffeur Surrey', href: '/chauffeur-surrey', description: 'Service across Surrey and Sussex.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Group coordination.' },
    ],
  },
  'chelsea-flower-show': {
    name: 'Chelsea Flower Show',
    slug: 'chelsea-flower-show',
    venue: 'Royal Hospital Chelsea',
    venueAddress: 'Royal Hospital Road, London SW3 4SR',
    dates: 'May (5 days)',
    metaTitle: 'Chelsea Flower Show Chauffeur | Event Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to RHS Chelsea Flower Show. Luxury transfers to Royal Hospital Chelsea with drop-off and collection.',
    heroTagline: 'Chelsea Flower Show',
    heroDescription: 'Effortless arrival at the RHS Chelsea Flower Show. Drop-off at the Royal Hospital gates and collection when you are ready.',
    contentTitle: 'Garden',
    contentParagraphs: [
      'The Chelsea Flower Show is one of London\'s most anticipated events, and the roads around SW3 are at their busiest. Our chauffeurs know the approach routes and the designated drop-off points.',
      'We drop you at the entrance, handle the parking, and return to collect you at an agreed time — or wait nearby for a flexible departure.',
    ],
    logistics: [
      'Drop-off at Royal Hospital Road entrance',
      'Collection at agreed time or on-demand',
      'Alternative approach via Embankment if Chelsea Bridge is congested',
      'Parking handled by chauffeur',
    ],
    faqs: [
      { q: 'Where do you drop off for the Flower Show?', a: 'At the Royal Hospital Road entrance, or the Bull Ring Gate depending on your ticket type.' },
      { q: 'Do you wait or return for collection?', a: 'Both options are available. We can wait nearby or return at a pre-agreed time.' },
    ],
    pricingKey: 'chelsea-flower-show',
    relatedLinks: [
      { title: 'Chauffeur Chelsea', href: '/chauffeur-chelsea', description: 'Year-round Chelsea service.' },
      { title: 'Chauffeur Kensington', href: '/chauffeur-kensington', description: 'Neighbouring Kensington.' },
      { title: 'Mercedes E-Class', href: '/mercedes-e-class-chauffeur', description: 'Comfortable and discreet.' },
      { title: 'By the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly hire.' },
    ],
  },
  'farnborough-airshow': {
    name: 'Farnborough International Airshow',
    slug: 'farnborough-airshow',
    venue: 'Farnborough Airport',
    venueAddress: 'FAST, Trenchard House, Farnborough GU14 6XA',
    dates: 'July (biennial, trade week + public weekend)',
    metaTitle: 'Farnborough Airshow Chauffeur | Event Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Farnborough International Airshow. Luxury transfers from London for trade days and public weekend.',
    heroTagline: 'Farnborough Airshow',
    heroDescription: 'Executive transfers to Farnborough International Airshow. Trade week and public weekend packages available.',
    contentTitle: 'Aviation',
    contentParagraphs: [
      'The Farnborough International Airshow is the aviation industry\'s flagship event. Our chauffeurs provide executive transfers for delegates, exhibitors, and VIP guests.',
      'We are already specialists in Farnborough Airport transfers, so the Airshow is home territory. We know the access roads, the security checkpoints, and the best approach routes.',
    ],
    logistics: [
      'Approximately 45-60 minutes from Central London via M3',
      'Trade badge holder drop-off at designated gates',
      'Public weekend drop-off at shuttle bus points',
      'Chauffeur waits or returns at agreed time',
    ],
    faqs: [
      { q: 'Can you access the trade entrance?', a: 'We drop off at the designated trade entrance. Your badge determines which gate we approach.' },
      { q: 'Do you cover the public weekend?', a: 'Yes. We provide transfers for both the trade week and the public weekend.' },
    ],
    pricingKey: 'farnborough-airshow',
    relatedLinks: [
      { title: 'Farnborough Airport', href: '/farnborough-chauffeur', description: 'Year-round private jet transfers.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Multi-vehicle group coordination.' },
      { title: 'Range Rover', href: '/range-rover-chauffeur', description: 'Spacious and commanding.' },
      { title: 'Goodwood Chauffeur', href: '/goodwood-chauffeur', description: 'Another motorsport/aviation event.' },
    ],
  },
  'bafta': {
    name: 'BAFTA Awards',
    slug: 'bafta',
    venue: 'Southbank Centre / Royal Festival Hall',
    venueAddress: 'Belvedere Road, London SE1 8XX',
    dates: 'February',
    metaTitle: 'BAFTA Chauffeur | Awards Night Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to the BAFTA Awards. Red-carpet arrivals at the Royal Festival Hall with discreet, professional transport.',
    heroTagline: 'BAFTA',
    heroDescription: 'Red-carpet arrivals and discreet departures. Evening chauffeur service for the BAFTA Awards at the Royal Festival Hall.',
    contentTitle: 'Awards',
    contentParagraphs: [
      'The BAFTA Awards demand a vehicle and chauffeur that match the occasion. Our fleet of Mercedes S-Class and Rolls-Royce Ghost vehicles provide the perfect backdrop for your arrival.',
      'We handle the approach to the Southbank Centre, coordinate with event security for the red carpet, and wait discreetly for your departure — however late the after-party runs.',
    ],
    logistics: [
      'Drop-off coordinated with event security at red carpet entrance',
      'Chauffeur waits nearby for the duration of the ceremony and after-party',
      'Late-night return (typically 1-3am)',
      'Vehicle choice critical — S-Class or Rolls-Royce recommended',
    ],
    faqs: [
      { q: 'Can you coordinate a red-carpet arrival?', a: 'Yes. We work with the event organisers to time your arrival at the red carpet entrance.' },
      { q: 'How late can the chauffeur wait?', a: 'As late as needed. BAFTA after-parties often run until the early hours — we will be waiting.' },
    ],
    pricingKey: 'bafta',
    relatedLinks: [
      { title: 'Rolls-Royce Ghost', href: '/rolls-royce-chauffeur', description: 'The ultimate red-carpet arrival.' },
      { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'Elegant and discreet.' },
      { title: 'Chauffeur Westminster', href: '/chauffeur-westminster', description: 'Service near the Southbank.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Multi-vehicle coordination.' },
    ],
  },
};

export function getAllEvents() {
  return Object.values(events).map(e => e.slug);
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add app/lib/event-data.ts
git commit -m "feat: add event data layer for 8 UK events"
```

---

## Task 9: Event Page Files

Since event slugs don't follow a single pattern (e.g. `royal-ascot-chauffeur` vs `wimbledon-chauffeur` vs `bafta-chauffeur`), and a catch-all dynamic route would conflict with existing root-level pages, create individual page files that share a common template function.

**Files:**
- Create: `app/(main)/royal-ascot-chauffeur/page.tsx`
- Create: `app/(main)/wimbledon-chauffeur/page.tsx`
- Create: `app/(main)/cheltenham-festival-chauffeur/page.tsx`
- Create: `app/(main)/henley-regatta-chauffeur/page.tsx`
- Create: `app/(main)/goodwood-chauffeur/page.tsx`
- Create: `app/(main)/chelsea-flower-show-chauffeur/page.tsx`
- Create: `app/(main)/farnborough-airshow-chauffeur/page.tsx`
- Create: `app/(main)/bafta-chauffeur/page.tsx`
- Create: `app/components/EventPageTemplate.tsx`

- [ ] **Step 1: Create shared EventPageTemplate component**

```tsx
import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import RelatedServices from '@/app/components/RelatedServices';
import FAQSchema from '@/app/components/FAQSchema';
import type { EventData } from '@/app/lib/event-data';
import { EVENT_PACKAGES } from '@/app/lib/pricing';
import { COMPANY } from '@/app/lib/config';

interface EventPageTemplateProps {
  data: EventData;
}

const EventPageTemplate: React.FC<EventPageTemplateProps> = ({ data }) => {
  const pricing = EVENT_PACKAGES[data.pricingKey];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${data.name} Chauffeur Service`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: 'https://eugenechauffeurs.com/',
      telephone: '+44 7340 801 274',
    },
    areaServed: 'London',
  };

  const faqSchema = data.faqs.map(f => ({ question: f.q, answer: f.a }));

  return (
    <>
      <LDJson json={jsonLd} />
      <FAQSchema faqs={faqSchema} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Event Transport</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              {data.heroTagline} <br />
              <span className="text-white/30">Chauffeur.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              {data.heroDescription}
            </p>
            <div className="mt-6">
              <TfLBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                  {data.contentTitle} <span className="text-gold-400">Luxury.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  {data.contentParagraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Logistics */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-italiana text-white mb-6">Journey Details</h3>
                <div className="space-y-4">
                  {data.logistics.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 font-manrope text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Venue Info */}
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-italiana text-white">{data.venue}</h3>
                    <p className="text-white/50 font-manrope text-sm">{data.venueAddress}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-italiana text-white">Dates</h3>
                    <p className="text-white/50 font-manrope text-sm">{data.dates}</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              {pricing && (
                <div className="p-6 border border-white/10 bg-white/[0.02]">
                  <h3 className="text-xl font-italiana text-white mb-2">{data.name} Packages</h3>
                  <p className="text-white/50 font-manrope text-sm mb-6">{pricing.description}</p>
                  <div className="space-y-3">
                    {Object.entries(pricing.vehicles).map(([key, price]) => {
                      const labels: Record<string, string> = {
                        s_class: 'Mercedes-Benz S-Class',
                        v_class: 'Mercedes-Benz V-Class',
                        range_rover: 'Range Rover',
                        e_class: 'Mercedes-Benz E-Class',
                      };
                      return (
                        <div key={key} className="flex justify-between items-center border-b border-white/5 pb-3">
                          <span className="text-white font-manrope text-sm">{labels[key] || key}</span>
                          <span className="text-gold-400 font-italiana text-lg">&pound;{price}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-xs text-white/40 font-manrope mt-4">Prices subject to VAT where applicable.</p>
                </div>
              )}

              {/* Discretion */}
              <div className="flex items-start space-x-3 p-4 border border-white/10 bg-white/[0.02]">
                <Shield className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-manrope text-sm">Discretion guaranteed</p>
                  <p className="text-white/50 font-manrope text-xs">NDA available on request. Unmarked vehicles available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl font-italiana text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-italiana text-gold-400">{faq.q}</h3>
                <p className="text-white/60 font-manrope text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices links={data.relatedLinks} />
      <BookingSection />
      <StickyCTA label={`Book ${data.name} Transfer`} />
    </>
  );
};

export default EventPageTemplate;
```

- [ ] **Step 2: Create all 8 event page files**

Each event page file follows this pattern. Create each one:

**`app/(main)/royal-ascot-chauffeur/page.tsx`**:
```tsx
import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['royal-ascot'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/royal-ascot-chauffeur' },
};

export default function RoyalAscotPage() {
  return <EventPageTemplate data={data} />;
}
```

**`app/(main)/wimbledon-chauffeur/page.tsx`**:
```tsx
import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['wimbledon'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/wimbledon-chauffeur' },
};

export default function WimbledonPage() {
  return <EventPageTemplate data={data} />;
}
```

**`app/(main)/cheltenham-festival-chauffeur/page.tsx`**:
```tsx
import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['cheltenham'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/cheltenham-festival-chauffeur' },
};

export default function CheltenhamPage() {
  return <EventPageTemplate data={data} />;
}
```

**`app/(main)/henley-regatta-chauffeur/page.tsx`**:
```tsx
import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['henley'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/henley-regatta-chauffeur' },
};

export default function HenleyPage() {
  return <EventPageTemplate data={data} />;
}
```

**`app/(main)/goodwood-chauffeur/page.tsx`**:
```tsx
import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['goodwood'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/goodwood-chauffeur' },
};

export default function GoodwoodPage() {
  return <EventPageTemplate data={data} />;
}
```

**`app/(main)/chelsea-flower-show-chauffeur/page.tsx`**:
```tsx
import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['chelsea-flower-show'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/chelsea-flower-show-chauffeur' },
};

export default function ChelseaFlowerShowPage() {
  return <EventPageTemplate data={data} />;
}
```

**`app/(main)/farnborough-airshow-chauffeur/page.tsx`**:
```tsx
import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['farnborough-airshow'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/farnborough-airshow-chauffeur' },
};

export default function FarnboroughAirshowPage() {
  return <EventPageTemplate data={data} />;
}
```

**`app/(main)/bafta-chauffeur/page.tsx`**:
```tsx
import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['bafta'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/bafta-chauffeur' },
};

export default function BaftaPage() {
  return <EventPageTemplate data={data} />;
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with 8 new event pages in the output.

- [ ] **Step 4: Commit**

```bash
git add app/components/EventPageTemplate.tsx "app/(main)/royal-ascot-chauffeur" "app/(main)/wimbledon-chauffeur" "app/(main)/cheltenham-festival-chauffeur" "app/(main)/henley-regatta-chauffeur" "app/(main)/goodwood-chauffeur" "app/(main)/chelsea-flower-show-chauffeur" "app/(main)/farnborough-airshow-chauffeur" "app/(main)/bafta-chauffeur"
git commit -m "feat: add 8 event chauffeur pages with shared template"
```

---

## Task 10: Battersea Heliport Page

**Files:**
- Create: `app/(main)/battersea-heliport-chauffeur/page.tsx`

- [ ] **Step 1: Create Battersea Heliport page**

```tsx
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Plane, Clock, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import RelatedServices from '@/app/components/RelatedServices';
import { HOURLY_RATES } from '@/app/lib/pricing';
import { COMPANY } from '@/app/lib/config';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Battersea Heliport Chauffeur | Helicopter Transfers | Eugene Chauffeurs',
  description: 'Premium chauffeur service for Battersea Heliport. Seamless helicopter transfer connections to Central London and beyond.',
  alternates: { canonical: '/battersea-heliport-chauffeur' },
};

export default function BatterseaHeliportPage() {
  const features = [
    {
      icon: <Plane className="w-6 h-6 text-gold-400" />,
      title: 'Heliport Specialists',
      description: 'Experienced with Battersea Heliport protocols and the riverside approach roads.',
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: 'Precision Timing',
      description: 'We monitor your helicopter\'s ETA and are waiting at the heliport entrance on arrival.',
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: 'Discretion & Security',
      description: 'NDA available on request. Unmarked vehicles available for high-profile clients.',
    },
    {
      icon: <Star className="w-6 h-6 text-gold-400" />,
      title: 'Luxury Fleet',
      description: 'Range Rover, Mercedes S-Class, and Rolls-Royce Ghost available.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Battersea Heliport Chauffeur',
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: 'https://eugenechauffeurs.com/',
      telephone: '+44 7340 801 274',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Battersea Heliport',
        addressLocality: 'London',
        postalCode: 'SW11 3BE',
        addressCountry: 'GB',
      },
    },
    areaServed: 'Battersea Heliport, London',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: String(HOURLY_RATES.e_class),
      highPrice: String(HOURLY_RATES.rolls_royce),
      availability: 'https://schema.org/InStock',
    },
  };

  const relatedLinks = [
    { title: 'Farnborough Airport', href: '/farnborough-chauffeur', description: 'Private jet transfer service.' },
    { title: 'Chauffeur Battersea', href: '/chauffeur-battersea', description: 'Local Battersea service.' },
    { title: 'Chauffeur Chelsea', href: '/chauffeur-chelsea', description: 'Service across the river.' },
    { title: 'Range Rover', href: '/range-rover-chauffeur', description: 'Commanding presence on arrival.' },
  ];

  return (
    <>
      <LDJson json={jsonLd} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Private Aviation</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              Battersea <br />
              <span className="text-white/30">Heliport.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Seamless ground transport for London's premier heliport. From touchdown to your final destination in minutes.
            </p>
            <div className="mt-6">
              <TfLBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-italiana text-white mb-8">
                  Riverside <span className="text-gold-400">Arrivals.</span>
                </h2>

                <div className="space-y-6 text-white/70 font-manrope font-light text-lg leading-relaxed">
                  <p>
                    Battersea Heliport is London's only licensed heliport, connecting you to the Home Counties, the coast, and regional airports. Our ground transfer service matches the speed and efficiency of your helicopter journey.
                  </p>
                  <p>
                    Your chauffeur will be waiting at the heliport entrance as you land. From there, it's a direct, comfortable transfer to your hotel, office, or residence — typically within 15-20 minutes to Central London.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="opacity-80">{feature.icon}</div>
                    <h3 className="text-lg font-italiana text-white">{feature.title}</h3>
                    <p className="text-white/50 font-manrope text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                <Image
                  src="/airport svc.png"
                  alt="Battersea Heliport Chauffeur"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices links={relatedLinks} />
      <BookingSection />
      <StickyCTA label="Get a Heliport Quote" />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds with `/battersea-heliport-chauffeur` in output.

- [ ] **Step 3: Commit**

```bash
git add "app/(main)/battersea-heliport-chauffeur"
git commit -m "feat: add Battersea Heliport chauffeur page"
```

---

## Task 11: By-the-Hour Page

**Files:**
- Create: `app/(main)/chauffeur-hire-by-the-hour/page.tsx`

- [ ] **Step 1: Create by-the-hour page**

```tsx
import React from 'react';
import type { Metadata } from 'next';
import { Clock, CheckCircle, Shield, Star } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import RelatedServices from '@/app/components/RelatedServices';
import { HOURLY_RATES, DAY_RATES, HOURLY_MIN_HOURS, DAY_RATE_HOURS, VEHICLE_LABELS } from '@/app/lib/pricing';
import { COMPANY } from '@/app/lib/config';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Chauffeur Hire by the Hour London | Hourly Car Hire | Eugene Chauffeurs',
  description: 'Hire a chauffeur by the hour in London. Flexible hourly rates from £60/hr. Mercedes S-Class, V-Class, Range Rover, and Rolls-Royce available.',
  alternates: { canonical: '/chauffeur-hire-by-the-hour' },
};

export default function ByTheHourPage() {
  const useCases = [
    'Business meetings across multiple locations',
    'Shopping trips — Harrods, Bond Street, Westfield',
    'Property viewings and house hunting',
    'Day trips — Cotswolds, Brighton, Oxford',
    'Medical appointments with waiting time',
    'Client entertainment and restaurant hopping',
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Hourly Chauffeur Hire London',
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: 'https://eugenechauffeurs.com/',
      telephone: '+44 7340 801 274',
    },
    areaServed: 'London',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: String(HOURLY_RATES.e_class),
      highPrice: String(HOURLY_RATES.rolls_royce),
      availability: 'https://schema.org/InStock',
    },
  };

  const relatedLinks = [
    { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'The flagship executive saloon.' },
    { title: 'Mercedes V-Class', href: '/mercedes-v-class-chauffeur', description: 'Spacious group transport.' },
    { title: 'Chauffeur Mayfair', href: '/chauffeur-mayfair', description: 'Local Mayfair service.' },
    { title: 'Corporate Travel', href: '/corporate-travel-chauffeur', description: 'Dedicated business accounts.' },
  ];

  return (
    <>
      <LDJson json={jsonLd} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Flexible Service</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-italiana text-white leading-[0.9] mb-8">
              By the <br />
              <span className="text-white/30">Hour.</span>
            </h1>
            <p className="text-xl text-white/60 font-manrope font-light max-w-2xl leading-relaxed border-l border-white/10 pl-8">
              Your chauffeur, your schedule. Hire by the hour for meetings, shopping, day trips, or any journey that doesn't fit a fixed route.
            </p>
            <div className="mt-6">
              <TfLBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-italiana text-white mb-6">
                Hourly <br /> Rates.
              </h2>
              <p className="text-white/60 font-manrope font-light mb-4">
                Minimum booking: {HOURLY_MIN_HOURS} hours. Day rates ({DAY_RATE_HOURS} hours) available at a discount.
              </p>
              <p className="text-white/60 font-manrope font-light mb-8">
                All rates include the chauffeur, vehicle, fuel, and congestion charge.
              </p>
              <p className="text-xs text-white/40 font-manrope">Prices subject to VAT where applicable.</p>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-4 border-b border-white/10 text-gold-400 font-italiana text-lg">Vehicle</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Per Hour</th>
                      <th className="py-4 px-4 border-b border-white/10 text-white/80 font-manrope text-sm text-right">Day Rate ({DAY_RATE_HOURS}h)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Object.keys(HOURLY_RATES) as Array<keyof typeof HOURLY_RATES>).map(key => (
                      <tr key={key} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-4 text-white font-manrope">{VEHICLE_LABELS[key]}</td>
                        <td className="py-4 px-4 text-white/60 font-manrope text-right">&pound;{HOURLY_RATES[key]}</td>
                        <td className="py-4 px-4 text-white/60 font-manrope text-right">&pound;{DAY_RATES[key]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-italiana text-white mb-12 text-center">Common Use Cases</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 font-manrope text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discretion */}
      <section className="py-12 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-5 h-5 text-gold-400" />
            <p className="text-white/60 font-manrope text-sm">Discretion guaranteed — NDA available on request. Unmarked vehicles available.</p>
          </div>
        </div>
      </section>

      <RelatedServices links={relatedLinks} />
      <BookingSection />
      <StickyCTA label="Get an Hourly Quote" />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds with `/chauffeur-hire-by-the-hour` in output.

- [ ] **Step 3: Commit**

```bash
git add "app/(main)/chauffeur-hire-by-the-hour"
git commit -m "feat: add by-the-hour chauffeur hire page"
```

---

## Task 12: Update Sitemap

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Add imports and new page arrays**

At the top of `app/sitemap.ts`, add:

```typescript
import { getAllBoroughs } from '@/app/lib/borough-data';
import { events } from '@/app/lib/event-data';
```

Then before the `return` statement, add these arrays:

```typescript
  // Borough pages
  const boroughSlugs = getAllBoroughs();
  const boroughPages: MetadataRoute.Sitemap = boroughSlugs.map(({ borough }) => ({
    url: `${BASE_URL}/chauffeur-${borough}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Event pages
  const eventPages: MetadataRoute.Sitemap = Object.values(events).map(event => ({
    url: `${BASE_URL}/${event.slug === 'chelsea-flower-show' ? 'chelsea-flower-show-chauffeur' : event.slug === 'farnborough-airshow' ? 'farnborough-airshow-chauffeur' : event.slug === 'henley' ? 'henley-regatta-chauffeur' : event.slug === 'cheltenham' ? 'cheltenham-festival-chauffeur' : `${event.slug}-chauffeur`}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Additional service pages
  const additionalPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/chauffeur-hire-by-the-hour`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/battersea-heliport-chauffeur`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];
```

Then add them to the return array:

```typescript
  return [
    ...corePages,
    ...servicePages,
    ...vehiclePages,
    ...locationPages,
    ...airportPages,
    ...boroughPages,
    ...eventPages,
    ...additionalPages,
    ...landingPages,
    ...stadiumPages,
    ...blogIndex,
    ...blogPostPages,
  ];
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds. Sitemap now includes all new pages.

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat: add borough, event, and service pages to sitemap"
```

---

## Task 13: Add BookingSection to Service/City Landing Pages

**Files:**
- Modify: `app/landing/[service]/[city]/page.tsx`

- [ ] **Step 1: Add imports**

At the top of `app/landing/[service]/[city]/page.tsx`, add:

```typescript
import BookingSection from '@/app/components/BookingSection';
import StickyCTA from '@/app/components/StickyCTA';
```

- [ ] **Step 2: Replace the CTA section with BookingSection**

Replace the entire `{/* CTA Section */}` block (the last `<section>` before `</>`) with:

```tsx
      <BookingSection />
      <StickyCTA label={`Book ${serviceData.name}`} />
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds. Service/city pages now include the dispatch widget.

- [ ] **Step 4: Commit**

```bash
git add "app/landing/[service]/[city]/page.tsx"
git commit -m "feat: add booking widget to service/city landing pages"
```

---

## Task 14: Add FAQPage Schema to Airport Pages

**Files:**
- Modify: `app/landing/airport/[airport]/page.tsx`

- [ ] **Step 1: Add FAQSchema import**

At the top of `app/landing/airport/[airport]/page.tsx`, add:

```typescript
import FAQSchema from '@/app/components/FAQSchema';
```

- [ ] **Step 2: Add FAQSchema component**

Inside the component return, right after `<LDJson json={jsonLd} />`, add:

```tsx
      <FAQSchema faqs={data.faqs.map(f => ({ question: f.q, answer: f.a }))} />
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add "app/landing/airport/[airport]/page.tsx"
git commit -m "feat: add FAQPage schema to airport landing pages"
```

---

## Task 15: Update Footer with New Borough Links

**Files:**
- Modify: `app/components/Footer.tsx`

- [ ] **Step 1: Expand the Locations list in the footer**

In `app/components/Footer.tsx`, replace the existing Locations `<ul>` (lines ~107-123) with an expanded list:

```tsx
              <h4 className="text-sm font-italiana text-white mb-6">Locations</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Mayfair', href: '/chauffeur-mayfair' },
                  { name: 'Chelsea', href: '/chauffeur-chelsea' },
                  { name: 'Kensington', href: '/chauffeur-kensington' },
                  { name: 'Knightsbridge', href: '/chauffeur-knightsbridge' },
                  { name: 'Belgravia', href: '/chauffeur-belgravia' },
                  { name: 'Westminster', href: '/chauffeur-westminster' },
                  { name: 'Canary Wharf', href: '/chauffeur-canary-wharf' },
                  { name: 'Marylebone', href: '/chauffeur-marylebone' },
                  { name: 'City of London', href: '/chauffeur-city-of-london' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-gold-400 text-xs transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-gold-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "feat: expand footer locations with new borough pages"
```

---

## Task 16: Final Build Verification

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected: Build succeeds with approximately 90+ static pages (previous 67 + ~25 new). Check for:
- 15 borough pages (`/chauffeur-canary-wharf`, `/chauffeur-westminster`, etc.)
- 8 event pages (`/royal-ascot-chauffeur`, `/wimbledon-chauffeur`, etc.)
- 1 heliport page (`/battersea-heliport-chauffeur`)
- 1 by-the-hour page (`/chauffeur-hire-by-the-hour`)
- No TypeScript errors
- No missing imports

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: No new lint errors.

- [ ] **Step 3: Commit any remaining fixes**

If any fixes were needed, commit them:

```bash
git add -A
git commit -m "fix: resolve build issues from SEO page expansion"
```

---

## Summary

| Task | What | New Pages |
|------|------|-----------|
| 1 | CSP header update | 0 |
| 2 | TfL badge component | 0 |
| 3 | TfL badge in footer + booking | 0 |
| 4 | RelatedServices component | 0 |
| 5 | Event pricing data | 0 |
| 6 | Borough data layer | 0 |
| 7 | Borough page template | 15 |
| 8 | Event data layer | 0 |
| 9 | Event page files | 8 |
| 10 | Battersea Heliport page | 1 |
| 11 | By-the-hour page | 1 |
| 12 | Sitemap update | 0 |
| 13 | BookingSection on service/city pages | 0 |
| 14 | FAQPage schema on airport pages | 0 |
| 15 | Footer borough links | 0 |
| 16 | Final build verification | 0 |
| **Total** | | **25 new pages** |
