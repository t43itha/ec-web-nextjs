# SEO & Conversion Strategy Design Spec

**Date:** 2026-04-02
**Goal:** Rank for London chauffeur and airport transfer keywords, convert organic traffic into bookings via the Dever Software dispatch widget.
**Primary revenue drivers:** Airport transfers and general London journeys.
**Approach:** Programmatic SEO + Conversion Engine (Approach A)

---

## 1. Expanded Page Architecture

### 1a. London Borough Pages (~15 pages)

Target keywords: "chauffeur [borough]" (100-300 monthly searches each)

| Slug | Borough |
|------|---------|
| `/chauffeur-canary-wharf` | Canary Wharf |
| `/chauffeur-westminster` | Westminster |
| `/chauffeur-fulham` | Fulham |
| `/chauffeur-richmond` | Richmond |
| `/chauffeur-hampstead` | Hampstead |
| `/chauffeur-notting-hill` | Notting Hill |
| `/chauffeur-belgravia` | Belgravia |
| `/chauffeur-wimbledon` | Wimbledon |
| `/chauffeur-greenwich` | Greenwich |
| `/chauffeur-st-johns-wood` | St John's Wood |
| `/chauffeur-battersea` | Battersea |
| `/chauffeur-islington` | Islington |
| `/chauffeur-city-of-london` | City of London |
| `/chauffeur-south-kensington` | South Kensington |
| `/chauffeur-marylebone` | Marylebone |

Each page follows the same template as existing borough pages (`/chauffeur-mayfair`, `/chauffeur-chelsea`, etc.). Data-driven from a new `boroughs` object in `landing-data.ts` with fields: name, area description, nearby landmarks, key corporate HQs, nearest airports, and tailored FAQs.

### 1b. Event/Occasion Pages (~8 pages)

Target keywords: "chauffeur [event]" (100-500 monthly searches each, seasonal spikes)

| Slug | Event |
|------|-------|
| `/royal-ascot-chauffeur` | Royal Ascot |
| `/wimbledon-chauffeur` | Wimbledon Championships |
| `/cheltenham-festival-chauffeur` | Cheltenham Festival |
| `/henley-regatta-chauffeur` | Henley Royal Regatta |
| `/goodwood-chauffeur` | Goodwood Festival of Speed / Revival |
| `/chelsea-flower-show-chauffeur` | RHS Chelsea Flower Show |
| `/farnborough-airshow-chauffeur` | Farnborough International Airshow |
| `/bafta-chauffeur` | BAFTA Awards |

Each page includes: event description, venue details, transport logistics, event-day package pricing, FAQs, and the dispatch booking widget.

### 1c. Private Aviation Page (1 new page)

| Slug | Venue |
|------|-------|
| `/battersea-heliport-chauffeur` | Battersea Heliport |

Note: `/farnborough-chauffeur` already exists and will be enhanced with pricing and booking widget.

### 1d. By-the-Hour Service Page (1 new page)

| Slug | Service |
|------|---------|
| `/chauffeur-hire-by-the-hour` | Hourly chauffeur hire |

Targets "chauffeur hire london per hour" (200-400 vol). Includes hourly rate table by vehicle, minimum booking duration, and common use cases (shopping, meetings, day trips).

---

## 2. Conversion Optimisation

### 2a. Dispatch Widget on Every Service Page

Add the `BookingSection` component (Dever Software iframe) to the bottom of every service-oriented page template. Currently only present on homepage and airport pages.

Pages that gain the booking widget:
- All new borough pages
- All new event pages
- All vehicle pages (S-Class, V-Class, Range Rover, Rolls-Royce, E-Class, EQV)
- Service/city landing pages (`/landing/[service]/[city]`)
- By-the-hour page
- Battersea heliport page
- Farnborough page (already has it via airport template)

### 2b. Pricing on All Service Pages

Extend `app/lib/pricing.ts` with:
- **Hourly rates by vehicle** (for by-the-hour page, vehicle pages, borough pages)
- **Event-day package pricing** (for event pages)
- **"From" fares on borough pages** (to nearest airport / central London)

Pricing matches iChauffeur's rates as the user confirmed.

### 2c. TfL Trust Badge

New lightweight component displaying TfL Private Hire Operator licence number (0108860101).

Placement:
- Footer (alongside existing contact info)
- Landing page hero sections (small badge below the subtitle)
- Adjacent to the booking widget in `BookingSection`

### 2d. Discretion Messaging

Add as a feature/trust signal across service page templates:
- "Discretion guaranteed - NDA available on request"
- "Unmarked vehicles available"

This differentiates from competitors and appeals to the user's actual client base.

---

## 3. SEO Technical Improvements

### 3a. Page-Specific Canonicals

Every page gets a self-referencing canonical URL pointing to its clean root-level slug. No pages should canonical to `/landing/*` paths — all new pages use flat root-level URLs.

### 3b. Enhanced Structured Data

| Page Type | Schema Added |
|-----------|-------------|
| Airport pages | `FAQPage` (FAQ content exists, just needs schema wrapper) |
| Borough pages | `LocalBusiness` with `areaServed` set to specific borough |
| Vehicle pages | `Product` with `offers` (pricing) |
| Event pages | `Event` + `Service` combined |

### 3c. Internal Linking Mesh

New "Related Services" section at the bottom of every landing page template (above `BookingSection`), linking to 3-4 contextually relevant pages. Examples:
- Heathrow page -> Gatwick, S-Class, Mayfair, By-the-Hour
- Mayfair page -> Heathrow, Knightsbridge, Corporate, S-Class

Related links defined in data layer per page.

### 3d. Sitemap Updates

Extend `app/sitemap.ts` to include:
- Borough pages: priority 0.8, weekly
- Event pages: priority 0.7, weekly
- By-the-hour: priority 0.8, weekly
- Battersea heliport: priority 0.7, weekly

### 3e. CSP Header Update

Update Content Security Policy in `next.config.ts`:
- Remove: `elitedispatch.app`
- Add: `dispatch.deversoftware.com`

---

## 4. URL Strategy & Redirects

### 4a. URL Patterns

All new pages use flat, keyword-rich root-level slugs:
- Borough: `/chauffeur-[borough]`
- Event: `/[event]-chauffeur`
- Private aviation: `/[venue]-chauffeur`
- By the hour: `/chauffeur-hire-by-the-hour`

### 4b. WordPress Legacy Redirects

When replacing the WordPress site at eugenechauffeurs.com, all existing indexed URLs need 301 redirects in `next.config.ts`. This requires the user to provide their current WordPress sitemap before go-live. Common patterns to map:
- `/services/` -> `/services`
- `/about-us/` -> `/about`
- `/contact-us/` -> `/contact`
- `/fleet/` -> `/services`
- Blog posts -> `/` (no blog on new site)

### 4c. Existing Redirects

Current redirects in `next.config.ts` (from `/landing-pages/*` and root airport slugs to `/landing/airport/*`) remain unchanged.

---

## 5. Implementation Summary

### New Files

| File | Purpose |
|------|---------|
| `app/(main)/chauffeur-[borough]/page.tsx` | Borough page template (dynamic route, generates all boroughs from data via `generateStaticParams`) |
| `app/(main)/[event]-chauffeur/page.tsx` | Event page template (dynamic route, generates all events from data via `generateStaticParams`) |
| `app/(main)/chauffeur-hire-by-the-hour/page.tsx` | By-the-hour page |
| `app/(main)/battersea-heliport-chauffeur/page.tsx` | Battersea heliport page |
| `app/components/TfLBadge.tsx` | TfL licence trust badge component |
| `app/components/RelatedServices.tsx` | Internal linking section component |

### Modified Files

| File | Change |
|------|--------|
| `app/lib/landing-data.ts` | Add boroughs, events, private aviation data objects |
| `app/lib/pricing.ts` | Add hourly rates, event packages, borough fares |
| `app/components/BookingSection.tsx` | No change (already updated to Dever dispatch) |
| `app/components/Footer.tsx` | Add TfL badge |
| `app/sitemap.ts` | Add new page types |
| `next.config.ts` | Update CSP for Dever dispatch, add WordPress redirects |
| Existing vehicle page files | Add pricing, BookingSection, Product schema |
| Existing service/city landing template | Add BookingSection, RelatedServices |
| Airport landing template | Add FAQPage schema |
| `app/(main)/farnborough-chauffeur/page.tsx` | Enhance with pricing + booking widget |

---

## 6. Deferred (Not in Initial Scope)

- **Google Reviews / Trustpilot widget** — add when account is ready
- **Blog content strategy** — not planned for now
- **WordPress URL redirect mapping** — needs sitemap export from user before go-live
- **Manchester / Birmingham page expansion** — focus is London
- **Wedding borough matrix** — not primary revenue driver

---

## 7. Success Metrics

- All ~25 new pages indexed by Google within 4-6 weeks
- Borough pages ranking for "[borough] chauffeur" long-tail terms within 2-3 months
- Airport pages competing for "heathrow chauffeur service" etc. within 3-6 months
- Every service page has a booking path (dispatch widget) requiring zero navigation
- Visible pricing on all commercial pages reducing bounce rate
