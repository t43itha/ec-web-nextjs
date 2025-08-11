# Fix the previous error by regenerating the bundle with simpler static fare tables per airport.

import os, json, zipfile

base_dir = "/mnt/data/ec-nextjs-sample"
if os.path.exists(base_dir):
    pass
else:
    os.makedirs(base_dir, exist_ok=True)

def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

# Overwrite core files (from previous attempt if partial)
config_ts = """export const PHONE_DISPLAY = "+44 7340 801 274";
export const PHONE_E164 = "447340801274"; // for WhatsApp links
export const TFL_LICENCE = "0108860101";

export const WAITING_POLICY = {
  airportArrivals: "60 minutes free",
  departuresAndNonAirport: "15 minutes free"
};

export const COMPANY = {
  name: "Eugene Chauffeurs Ltd",
  url: "https://ec-web-nextjs.netlify.app/",
  address: {
    streetAddress: "Suite 130, Lewisham Tower House,
67-71 Lewisham High Street",
    addressLocality: "London",
    postalCode: "SE13 5JX",
    addressCountry: "GB"
  }
};
"""
write(os.path.join(base_dir, "lib/config.ts"), config_ts)

pricing_ts = """export const HOURLY_MIN_HOURS = 4;

export type VehicleKey = "s_class" | "v_class" | "range_rover";

export const HOURLY_RATES: Record<VehicleKey, number> = {
  s_class: 80,
  v_class: 75,
  range_rover: 100,
};

export const DAY_RATE_HOURS = 8;
export const DAY_RATES: Record<VehicleKey, number> = {
  s_class: 640,
  v_class: 600,
  range_rover: 800,
};

export const AIRPORT_FARES = {
  heathrow:   { s_class: 170, v_class: 170, range_rover: 210 },
  gatwick:    { s_class: 250, v_class: 250, range_rover: 290 },
  lcy:        { s_class: 165, v_class: 165, range_rover: 200 },
  stansted:   { s_class: 260, v_class: 260, range_rover: 300 },
  luton:      { s_class: 250, v_class: 250, range_rover: 290 },
};

export const VEHICLE_LABELS: Record<VehicleKey, string> = {
  s_class: "Mercedes-Benz S-Class",
  v_class: "Mercedes-Benz V-Class",
  range_rover: "Range Rover",
};
"""
write(os.path.join(base_dir, "lib/pricing.ts"), pricing_ts)

ldjson_tsx = """'use client';
import React from "react";

type Props = { json: any };

export default function LDJson({ json }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
"""
write(os.path.join(base_dir, "components/LDJson.tsx"), ldjson_tsx)

sticky_cta_tsx = """'use client';
import React from "react";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/config";

export default function StickyCTA({ label = "Get a Quote" }: { label?: string }) {
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", gap: "12px", padding: "12px 16px",
      background: "rgba(255,255,255,0.96)", borderTop: "1px solid #eee",
      justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"
    }}>
      <a href="#quote" style={{ padding: "10px 16px", borderRadius: 12, border: "1px solid #111", textDecoration: "none" }}>
        {label}
      </a>
      <div style={{ display: "flex", gap: 12 }}>
        <a href={`tel:+${PHONE_E164}`} style={{ padding: "10px 16px", borderRadius: 12, border: "1px solid #ccc", textDecoration: "none" }}>
          Call {PHONE_DISPLAY}
        </a>
        <a href={`https://wa.me/${PHONE_E164}`} style={{ padding: "10px 16px", borderRadius: 12, border: "1px solid #25D366", textDecoration: "none" }}>
          WhatsApp {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
"""
write(os.path.join(base_dir, "components/StickyCTA.tsx"), sticky_cta_tsx)

# Helper to build pages
def service_ld(serviceType, areaServed, low="165", high="300"):
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceType,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Eugene Chauffeurs",
            "url": "https://ec-web-nextjs.netlify.app/",
            "telephone": "+44 7340 801 274",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "[Street]",
                "addressLocality": "London",
                "postalCode": "[Postcode]",
                "addressCountry": "GB"
            },
            "hasCredential": "TfL Operator Licence: 0108860101"
        },
        "areaServed": areaServed,
        "termsOfService": "Free waiting time: 60 minutes arrivals / 15 minutes departures & non-airport pick-ups.",
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "GBP",
            "lowPrice": low,
            "highPrice": high,
            "availability": "https://schema.org/InStock"
        }
    }

def make_page_tsx(title, desc, h1, sections_html, faq_pairs, jsonld, sticky_label):
    faq_html = "\n".join([f"<p><strong>{q}</strong><br/>{a}</p>" for q,a in faq_pairs])
    content = f"""import type {{ Metadata }} from "next";
export const metadata: Metadata = {{
  title: "{title}",
  description: "{desc}",
}};

import LDJson from "@/components/LDJson";
import StickyCTA from "@/components/StickyCTA";

export default function Page() {{
  return (
    <main style={{ padding: "32px 16px 96px", maxWidth: 900, margin: "0 auto", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>{h1}</h1>
      {sections_html}
      <section id="faq" style={{ marginTop: 32 }}>
        <h2>FAQs</h2>
        {faq_html}
      </section>
      <LDJson json={json.dumps(jsonld)} />
      <StickyCTA label="{sticky_label}" />
    </main>
  );
}}
"""
    return content

# Chauffeur London page content
cl_sections_html = """
<section>
  <h2>London Chauffeur Service</h2>
  <p>Arrive composed, depart on schedule. Calm, discreet service for board meetings, hotels, evening engagements, and transfers between the City and the West End. Immaculate vehicles, professional meet & greet, flight and traffic monitoring, and flexible, as-directed hourly service.</p>
</section>

<section>
  <h3>What’s included—every journey</h3>
  <ul>
    <li>Professional chauffeur (suit & tie), door-to-door service</li>
    <li>Meet & greet on request (airport / hotel concierge desk)</li>
    <li>Flight & traffic tracking, itinerary coordination</li>
    <li><strong>Free waiting time:</strong> 60 minutes (airport arrivals) / 15 minutes (departures & non-airport pick-ups)</li>
    <li>Bottled water; child seats on request; luggage assistance</li>
    <li>24/7 support and secure card payments</li>
  </ul>
</section>

<section>
  <h3>Rates & fares</h3>
  <p>Transparent, simple pricing—hourly or 8-hour day hire for in-city work.</p>
  <table style="width:100%;border-collapse:collapse">
    <thead>
      <tr>
        <th style="text-align:left;border-bottom:1px solid #ddd;padding:8px">Vehicle</th>
        <th style="text-align:right;border-bottom:1px solid #ddd;padding:8px">Hourly rate</th>
        <th style="text-align:right;border-bottom:1px solid #ddd;padding:8px">Minimum hours</th>
        <th style="text-align:right;border-bottom:1px solid #ddd;padding:8px">Day rate (8h)</th>
        <th style="text-align:right;border-bottom:1px solid #ddd;padding:8px">Minimum charge</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Mercedes-Benz S-Class</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£80/hr</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">4</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£640</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£320</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Mercedes-Benz V-Class</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£75/hr</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">4</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£600</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£300</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Range Rover</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£100/hr</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">4</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£800</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£400</td></tr>
    </tbody>
  </table>
  <p style="margin-top:8px;font-size:14px;color:#555">Prices subject to VAT where applicable; Congestion/ULEZ, tolls & parking beyond the free window are passed at cost.</p>
</section>

<section id="quote">
  <h3>Book now</h3>
  <p>WhatsApp or call us on <strong>+44 7340 801 274</strong>, or send your itinerary via the quote form.</p>
</section>
"""

cl_faq = [
    ("What’s the difference between a chauffeur and a taxi?", "A chauffeur provides pre-booked, premium service with a dedicated driver, executive vehicle, and inclusions like meet & greet and luggage assistance."),
    ("How much waiting time is included?", "60 minutes free for airport arrivals; 15 minutes free for departures & non-airport pick-ups. Additional time billed at the standard rate."),
    ("Can I book by the hour?", "Yes—‘as-directed’ service from £80/hr (S-Class), £75/hr (V-Class), £100/hr (Range Rover) with a 4-hour minimum."),
    ("Do you provide child seats?", "Yes, on request at booking (no extra charge). Please specify ages."),
    ("What payment methods do you accept?", "All major cards and corporate invoicing for approved accounts.")
]
cl_jsonld = service_ld("London Chauffeur Service", "London, United Kingdom")
cl_page = make_page_tsx(
    "London Chauffeur Service | Eugene Chauffeurs — On-Time, Discreet, Immaculate",
    "Premium London chauffeur service for business and leisure. Mercedes S-Class & V-Class, meet & greet, flight tracking, 60 mins free waiting (airport arrivals) / 15 mins elsewhere.",
    "London Chauffeur Service",
    cl_sections_html,
    cl_faq,
    cl_jsonld,
    "Get a Quote"
)
write(os.path.join(base_dir, "app/chauffeur-london/page.tsx"), cl_page)

def airport_sections(name, s, v, rr):
    return f"""
<section>
  <h2>{name} Chauffeur & Airport Transfers</h2>
  <p>Your chauffeur tracks your flight, meets you in the arrivals hall with a nameboard, assists with luggage, and escorts you to an executive vehicle. <strong>60 minutes</strong> free waiting for <strong>arrivals</strong> and <strong>15 minutes</strong> free for <strong>departures</strong> come as standard.</p>
</section>

<section>
  <h3>What’s included at {name}</h3>
  <ul>
    <li>Arrivals-hall meet & greet with nameboard</li>
    <li>Flight monitoring + real-time pickup adjustments</li>
    <li><strong>Free waiting time:</strong> 60 mins (arrivals) / 15 mins (departures)</li>
    <li>Bottled water; child seats on request; luggage assistance</li>
    <li>Professional chauffeurs; 24/7 support</li>
  </ul>
</section>

<section>
  <h3>{name} ↔ Central London — from</h3>
  <table style="width:100%;border-collapse:collapse">
    <thead>
      <tr>
        <th style="text-align:left;border-bottom:1px solid #ddd;padding:8px">Vehicle</th>
        <th style="text-align:right;border-bottom:1px solid #ddd;padding:8px">Fixed fare (single, from)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Mercedes-Benz S-Class</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£{s}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Mercedes-Benz V-Class</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£{v}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Range Rover</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£{rr}</td></tr>
    </tbody>
  </table>
  <p style="margin-top:8px;font-size:14px;color:#555">Inclusions: Arrivals-hall meet & greet • 60 mins free airport waiting & parking • Flight tracking • 15 mins free for departures. Prices subject to VAT where applicable; Congestion/ULEZ, tolls & extra parking beyond the free window are passed at cost. Final price confirmed on booking.</p>
</section>

<section id="quote">
  <h3>Book now</h3>
  <p>WhatsApp or call us on <strong>+44 7340 801 274</strong>, or send your itinerary via the quote form.</p>
</section>
"""

def build_airport_page(slug, name, meta_desc, low, high, fares_tuple, sticky_label):
    sections = airport_sections(name, *fares_tuple)
    faq = [
        (f"Where will my chauffeur meet me at {name}?", "In the arrivals hall after customs, holding a nameboard."),
        ("What if my flight is delayed or early?", "We track your flight and adjust pickup automatically. Waiting time policy: 60 minutes free for arrivals (then billed); 15 minutes free for departures."),
        ("How much luggage can you take?", "S-Class: 2–3 medium cases; V-Class: up to 6 medium cases (or 4 large + 2 carry-ons)."),
        ("Can you add extra stops?", "Yes—include the stop in your request; extra time/distance may apply.")
    ]
    jsonld = service_ld(f"{name} Chauffeur Service", f"{name}", str(low), str(high))
    page = make_page_tsx(
        f"{name} Chauffeur Service | Eugene Chauffeurs — Meet & Greet, Flight Tracking",
        meta_desc,
        f"{name} Chauffeur & Airport Transfers",
        sections,
        faq,
        jsonld,
        sticky_label
    )
    write(os.path.join(base_dir, f"app/{slug}/page.tsx"), page)

# Build airport pages
build_airport_page("heathrow-chauffeur", "Heathrow", 
                   "Seamless Heathrow transfers with meet & greet, flight tracking, 60 mins free waiting (arrivals) / 15 mins (departures).",
                   170, 300, (170, 170, 210), "Get a Heathrow Quote")
build_airport_page("gatwick-chauffeur", "Gatwick", 
                   "Premium Gatwick transfers with meet & greet, flight tracking, 60 mins free waiting (arrivals) / 15 mins (departures).",
                   165, 300, (250, 250, 290), "Get a Gatwick Quote")
build_airport_page("london-city-airport-chauffeur", "London City Airport (LCY)", 
                   "Executive LCY transfers with meet & greet, 60 mins free waiting (arrivals) / 15 mins (departures).",
                   165, 300, (165, 165, 200), "Get an LCY Quote")
build_airport_page("stansted-chauffeur", "Stansted", 
                   "Executive Stansted transfers with meet & greet, 60 mins free waiting (arrivals) / 15 mins (departures).",
                   170, 300, (260, 260, 300), "Get a Stansted Quote")
build_airport_page("luton-chauffeur", "Luton", 
                   "Executive Luton transfers with meet & greet, 60 mins free waiting (arrivals) / 15 mins (departures).",
                   165, 300, (250, 250, 290), "Get a Luton Quote")

robots_ts = """import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://ec-web-nextjs.netlify.app/sitemap.xml',
  };
}
"""
write(os.path.join(base_dir, "app/robots.ts"), robots_ts)

sitemap_ts = """import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ec-web-nextjs.netlify.app';
  const routes = [
    '', 'chauffeur-london', 'heathrow-chauffeur', 'gatwick-chauffeur',
    'london-city-airport-chauffeur', 'stansted-chauffeur', 'luton-chauffeur'
  ];
  const now = new Date().toISOString();
  return routes.map((r) => ({
    url: `${base}/${r}`.replace(/\\/$/, ''),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
}
"""
write(os.path.join(base_dir, "app/sitemap.ts"), sitemap_ts)

readme = """# Eugene Chauffeurs — Airport & London Pages (Next.js App Router)

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

markdown
Always show details

Copy

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
"""
write(os.path.join(base_dir, "README.md"), readme)

# Zip it
zip_path = "/mnt/data/eugene-chauffeurs-pages.zip"
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk(base_dir):
        for f in files:
            full = os.path.join(root, f)
            arc = os.path.relpath(full, base_dir)
            z.write(full, arcname=arc)

zip_path
Result
'/mnt/data/eugene-chauffeurs-pages.zip'