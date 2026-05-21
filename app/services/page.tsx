import type { Metadata } from 'next';
import ClientServices from './ClientServices';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import FAQSchema from '@/app/components/FAQSchema';
import LDJson from '@/app/components/LDJson';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Our Services | Airport Transfers, Corporate & Event Chauffeurs',
  description: 'Explore our luxury chauffeur services: airport transfers, corporate travel, wedding transport, event chauffeurs, and hourly hire across London and the UK.',
  alternates: { canonical: '/services' },
};

const serviceFaqs = [
  {
    question: 'What chauffeur services are available?',
    answer: 'Eugene Chauffeurs provides airport transfers, corporate chauffeur travel, wedding chauffeur services, event transport, hourly chauffeur hire, private jet transfers, personal shopping transport, and luxury city-to-city journeys.',
  },
  {
    question: 'Can I book a chauffeur for Heathrow, Gatwick, Stansted, Luton, or London City Airport?',
    answer: 'Yes. Airport chauffeur services cover Heathrow, Gatwick, Stansted, Luton, and London City Airport with meet and greet, luggage support, and flight monitoring.',
  },
  {
    question: 'Do you provide corporate accounts and executive travel?',
    answer: 'Yes. Corporate chauffeur services are available for executives, clients, board members, roadshows, events, and regular business travel, with professional chauffeurs and premium vehicles.',
  },
  {
    question: 'Can I choose a specific vehicle class?',
    answer: 'Yes. Depending on availability, clients can request Mercedes-Benz S-Class, E-Class, V-Class, EQV, Range Rover, or Rolls-Royce chauffeur options.',
  },
];

const serviceCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': 'https://eugenechauffeurs.com/services#service-catalog',
  name: 'Eugene Chauffeurs Service Catalog',
  itemListElement: [
    'Airport transfer chauffeur service',
    'Corporate chauffeur service',
    'Wedding chauffeur service',
    'Event chauffeur service',
    'Private jet chauffeur transfer',
    'Hourly chauffeur hire',
    'Luxury fleet chauffeur service',
  ].map((name) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name,
      provider: { '@id': 'https://eugenechauffeurs.com/#organization' },
      areaServed: 'London and the United Kingdom',
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
      />
      <FAQSchema faqs={serviceFaqs} />
      <LDJson json={serviceCatalogSchema} />
      <ClientServices />
    </>
  );
}
