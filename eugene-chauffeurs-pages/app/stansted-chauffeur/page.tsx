import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Stansted Chauffeur Service | Eugene Chauffeurs — Meet & Greet, Flight Tracking",
  description: "Executive Stansted transfers with meet & greet, 60 mins free waiting (arrivals) / 15 mins (departures).",
};

import LDJson from "@/components/LDJson";
import StickyCTA from "@/components/StickyCTA";

export default function Page() {
  return (
    <main style={ padding: "32px 16px 96px", maxWidth: 900, margin: "0 auto", lineHeight: 1.6 }>
      <h1 style={ fontSize: 32, marginBottom: 12 }>Stansted Chauffeur & Airport Transfers</h1>
      
<section>
  <h2>Stansted Chauffeur & Airport Transfers</h2>
  <p>Your chauffeur tracks your flight, meets you in the arrivals hall with a nameboard, assists with luggage, and escorts you to an executive vehicle. <strong>60 minutes</strong> free waiting for <strong>arrivals</strong> and <strong>15 minutes</strong> free for <strong>departures</strong> come as standard.</p>
</section>

<section>
  <h3>What’s included at Stansted</h3>
  <ul>
    <li>Arrivals-hall meet & greet with nameboard</li>
    <li>Flight monitoring + real-time pickup adjustments</li>
    <li><strong>Free waiting time:</strong> 60 mins (arrivals) / 15 mins (departures)</li>
    <li>Bottled water; child seats on request; luggage assistance</li>
    <li>Professional chauffeurs; 24/7 support</li>
  </ul>
</section>

<section>
  <h3>Stansted ↔ Central London — from</h3>
  <table style="width:100%;border-collapse:collapse">
    <thead>
      <tr>
        <th style="text-align:left;border-bottom:1px solid #ddd;padding:8px">Vehicle</th>
        <th style="text-align:right;border-bottom:1px solid #ddd;padding:8px">Fixed fare (single, from)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Mercedes-Benz S-Class</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£260</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Mercedes-Benz V-Class</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£260</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Range Rover</td><td style="padding:8px;text-align:right;border-bottom:1px solid #f0f0f0">£300</td></tr>
    </tbody>
  </table>
  <p style="margin-top:8px;font-size:14px;color:#555">Inclusions: Arrivals-hall meet & greet • 60 mins free airport waiting & parking • Flight tracking • 15 mins free for departures. Prices subject to VAT where applicable; Congestion/ULEZ, tolls & extra parking beyond the free window are passed at cost. Final price confirmed on booking.</p>
</section>

<section id="quote">
  <h3>Book now</h3>
  <p>WhatsApp or call us on <strong>+44 7340 801 274</strong>, or send your itinerary via the quote form.</p>
</section>

      <section id="faq" style={ marginTop: 32 }>
        <h2>FAQs</h2>
        <p><strong>Where will my chauffeur meet me at Stansted?</strong><br/>In the arrivals hall after customs, holding a nameboard.</p>
<p><strong>What if my flight is delayed or early?</strong><br/>We track your flight and adjust pickup automatically. Waiting time policy: 60 minutes free for arrivals (then billed); 15 minutes free for departures.</p>
<p><strong>How much luggage can you take?</strong><br/>S-Class: 2–3 medium cases; V-Class: up to 6 medium cases (or 4 large + 2 carry-ons).</p>
<p><strong>Can you add extra stops?</strong><br/>Yes—include the stop in your request; extra time/distance may apply.</p>
      </section>
      <LDJson json={"@context": "https://schema.org", "@type": "Service", "serviceType": "Stansted Chauffeur Service", "provider": {"@type": "LocalBusiness", "name": "Eugene Chauffeurs", "url": "https://ec-web-nextjs.netlify.app/", "telephone": "+44 7340 801 274", "address": {"@type": "PostalAddress", "streetAddress": "[Street]", "addressLocality": "London", "postalCode": "[Postcode]", "addressCountry": "GB"}, "hasCredential": "TfL Operator Licence: 0108860101"}, "areaServed": "Stansted", "termsOfService": "Free waiting time: 60 minutes arrivals / 15 minutes departures & non-airport pick-ups.", "offers": {"@type": "AggregateOffer", "priceCurrency": "GBP", "lowPrice": "170", "highPrice": "300", "availability": "https://schema.org/InStock"}} />
      <StickyCTA label="Get a Stansted Quote" />
    </main>
  );
}
