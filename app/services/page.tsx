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
  openGraph: {
    title: 'Our Services | Airport Transfers, Corporate & Event Chauffeurs',
    description: 'Explore our luxury chauffeur services: airport transfers, corporate travel, wedding transport, event chauffeurs, and hourly hire across London and the UK.',
    url: '/services',
  },
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

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://eugenechauffeurs.com/services#service-list',
  name: 'Eugene Chauffeurs Services',
  itemListElement: [
    'Airport transfer chauffeur service',
    'Corporate chauffeur service',
    'Wedding chauffeur service',
    'Event chauffeur service',
    'Private jet chauffeur transfer',
    'Hourly chauffeur hire',
    'Luxury fleet chauffeur service',
  ].map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
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
      <LDJson json={serviceListSchema} />
      <ClientServices />
      <section className="border-t border-white/5 bg-black px-6 py-20 text-white sm:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 font-italiana text-4xl">Service questions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {serviceFaqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="mb-3 font-italiana text-xl text-gold-400">{faq.question}</h3>
                <p className="font-manrope leading-7 text-white/60">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
