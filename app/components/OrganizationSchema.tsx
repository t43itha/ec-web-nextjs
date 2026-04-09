import React from "react";

const BASE_URL = "https://eugenechauffeurs.com";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "Eugene Chauffeurs",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/RGB-Eugene-Chauffeurs-Concierge-Logo.webp`,
      "width": 220,
      "height": 73,
    },
    "image": `${BASE_URL}/opengraph-image`,
    "description": "Premium chauffeur service in London offering luxury transportation for business, events, airport transfers, and special occasions.",
    "telephone": "+442081911882",
    "email": "bookings@eugenechauffeurs.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite 130, Lewisham Tower House, 67-71 Lewisham High Street",
      "addressLocality": "London",
      "postalCode": "SE13 5JX",
      "addressCountry": "GB",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4545,
      "longitude": -0.0146,
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "London",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Greater London",
      },
      {
        "@type": "Country",
        "name": "United Kingdom",
      },
    ],
    "priceRange": "£££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
    "sameAs": [
      "https://instagram.com/eugenechauffeurs",
      "https://linkedin.com/company/eugenechauffeurs",
      "https://x.com/eugenechauffeurs",
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "TfL Operator Licence",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Transport for London",
      },
      "identifier": "0108860101",
    },
    "knowsAbout": [
      "Luxury Transportation",
      "Chauffeur Services",
      "Airport Transfers",
      "Corporate Travel",
      "Wedding Transportation",
      "VIP Services",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
