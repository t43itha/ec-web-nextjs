import React from "react";

const BASE_URL = "https://eugenechauffeurs.com";

export default function OrganizationSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
    "@id": `${BASE_URL}/#organization`,
    "name": "Eugene Chauffeurs",
    "alternateName": "Eugene Chauffeurs & Concierge",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/RGB-Eugene-Chauffeurs-Concierge-Logo.webp`,
      "width": 220,
      "height": 73,
    },
    "image": `${BASE_URL}/opengraph-image`,
    "description": "Luxury chauffeur and concierge transport company in London, providing airport transfers, corporate travel, wedding chauffeur services, event transport, private jet support, and premium vehicle hire with professional chauffeurs.",
    "slogan": "Luxury chauffeur service in London for airport transfers, business travel, weddings, events, and concierge journeys.",
    "telephone": "+44 7340 801 274",
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
      { "@type": "City", "name": "London" },
      { "@type": "AdministrativeArea", "name": "Greater London" },
      { "@type": "AdministrativeArea", "name": "Surrey" },
      { "@type": "AdministrativeArea", "name": "Kent" },
      { "@type": "AdministrativeArea", "name": "Essex" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Airport", "name": "Heathrow Airport" },
      { "@type": "Airport", "name": "Gatwick Airport" },
      { "@type": "Airport", "name": "Stansted Airport" },
      { "@type": "Airport", "name": "Luton Airport" },
      { "@type": "Airport", "name": "London City Airport" },
    ],
    "priceRange": "£££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Credit Card, Bank Transfer, Corporate Account",
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
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44 7340 801 274",
        "email": "bookings@eugenechauffeurs.com",
        "contactType": "bookings",
        "areaServed": "GB",
        "availableLanguage": ["English"],
      },
      {
        "@type": "ContactPoint",
        "telephone": "+44 7340 801 274",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": ["English"],
      },
    ],
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
      "Luxury chauffeur services",
      "London airport transfers",
      "Heathrow meet and greet transfers",
      "Corporate chauffeur travel",
      "Wedding transportation",
      "VIP event transport",
      "Private jet ground transportation",
      "Mercedes-Benz S-Class chauffeur hire",
      "Mercedes-Benz V-Class chauffeur hire",
      "London chauffeur service",
      "Airport transfer chauffeur service",
      "Corporate chauffeur service",
      "Wedding chauffeur service",
      "Event chauffeur service",
      "Private jet transfer service",
      "Hourly chauffeur hire",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "url": BASE_URL,
    "name": "Eugene Chauffeurs",
    "description": "Luxury London chauffeur service for airport transfers, corporate travel, weddings, events, and concierge journeys.",
    "publisher": { "@id": `${BASE_URL}/#organization` },
    "inLanguage": "en-GB",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
