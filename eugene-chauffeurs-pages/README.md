# Eugene Chauffeurs — Airport & London Pages (Next.js App Router)

This bundle contains ready-to-drop pages and helpers for:
- /chauffeur-london
- /heathrow-chauffeur
- /gatwick-chauffeur
- /london-city-airport-chauffeur
- /stansted-chauffeur
- /luton-chauffeur
- /robots.txt and /sitemap.xml (via App Router functions)

## How to apply (AI Coder / Dev Steps)

1. **Copy files** into your Next.js app (App Router):
```
/app/chauffeur-london/page.tsx
/app/heathrow-chauffeur/page.tsx
/app/gatwick-chauffeur/page.tsx
/app/london-city-airport-chauffeur/page.tsx
/app/stansted-chauffeur/page.tsx
/app/luton-chauffeur/page.tsx
/app/robots.ts
/app/sitemap.ts
/components/LDJson.tsx
/components/StickyCTA.tsx
/lib/config.ts
/lib/pricing.ts
```

2. **Update address** in `lib/config.ts` (`COMPANY.address`) and keep:
- `PHONE_DISPLAY` = `+44 7340 801 274`
- `TFL_LICENCE` = `0108860101`

3. **Verify pricing** in `lib/pricing.ts`:
- Hourly (4-hour minimum): S £80/hr, V £75/hr, Range Rover £100/hr
- Day (8h): S £640, V £600, Range Rover £800
- Fixed airport fares (one-way, to/from Central London):
  - LHR: S £170, V £170, RR £210
  - LGW: S £250, V £250, RR £290
  - LCY: S £165, V £165, RR £200
  - STN: S £260, V £260, RR £300
  - LTN: S £250, V £250, RR £290

4. **Deploy** to Netlify. Ensure Next.js plugin is enabled. After deploy:
- Open `/robots.txt` and `/sitemap.xml` to confirm they load.
- In Google Search Console, **Request indexing** for each new URL.

5. **Style**: Basic inline styles provided. You can replace with Tailwind later.

6. **Schema / JSON-LD** is embedded via `<LDJson />` and includes:
- Provider details
- TfL licence
- Waiting time policy
- GBP telephone

7. **QA checklist**
- Header/Footer link to all 6 pages
- Sticky CTA visible on mobile
- Copy reflects waiting time: 60 mins arrivals / 15 mins elsewhere
- Prices and telephone visible and correct
