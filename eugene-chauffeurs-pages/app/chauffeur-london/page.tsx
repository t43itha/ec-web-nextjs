import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "London Chauffeur Service | Eugene Chauffeurs — On-Time, Discreet, Immaculate",
  description: "Premium London chauffeur service for business and leisure. Mercedes S-Class & V-Class, meet & greet, flight tracking, 60 mins free waiting (airport arrivals) / 15 mins elsewhere.",
};

import LDJson from "@/components/LDJson";
import StickyCTA from "@/components/StickyCTA";

export default function Page() {
  return (
    <main style={ padding: "32px 16px 96px", maxWidth: 900, margin: "0 auto", lineHeight: 1.6 }>
      <h1 style={ fontSize: 32, marginBottom: 12 }>London Chauffeur Service</h1>
      
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

      <section id="faq" style={ marginTop: 32 }>
        <h2>FAQs</h2>
        <p><strong>What’s the difference between a chauffeur and a taxi?</strong><br/>A chauffeur provides pre-booked, premium service with a dedicated driver, executive vehicle, and inclusions like meet & greet and luggage assistance.</p>
<p><strong>How much waiting time is included?</strong><br/>60 minutes free for airport arrivals; 15 minutes free for departures & non-airport pick-ups. Additional time billed at the standard rate.</p>
<p><strong>Can I book by the hour?</strong><br/>Yes—‘as-directed’ service from £80/hr (S-Class), £75/hr (V-Class), £100/hr (Range Rover) with a 4-hour minimum.</p>
<p><strong>Do you provide child seats?</strong><br/>Yes, on request at booking (no extra charge). Please specify ages.</p>
<p><strong>What payment methods do you accept?</strong><br/>All major cards and corporate invoicing for approved accounts.</p>
      </section>
      <LDJson json={"@context": "https://schema.org", "@type": "Service", "serviceType": "London Chauffeur Service", "provider": {"@type": "LocalBusiness", "name": "Eugene Chauffeurs", "url": "https://ec-web-nextjs.netlify.app/", "telephone": "+44 7340 801 274", "address": {"@type": "PostalAddress", "streetAddress": "[Street]", "addressLocality": "London", "postalCode": "[Postcode]", "addressCountry": "GB"}, "hasCredential": "TfL Operator Licence: 0108860101"}, "areaServed": "London, United Kingdom", "termsOfService": "Free waiting time: 60 minutes arrivals / 15 minutes departures & non-airport pick-ups.", "offers": {"@type": "AggregateOffer", "priceCurrency": "GBP", "lowPrice": "165", "highPrice": "300", "availability": "https://schema.org/InStock"}} />
      <StickyCTA label="Get a Quote" />
    </main>
  );
}
