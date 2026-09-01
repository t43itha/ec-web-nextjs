import type { Metadata } from 'next';
import ClientContact from './ClientContact';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import LDJson from '@/app/components/LDJson';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Contact Eugene Chauffeurs | Book Your Luxury Transfer',
  description: 'Get in touch with Eugene Chauffeurs for luxury airport transfers, corporate travel, and special occasion transport across London and the UK.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Eugene Chauffeurs | Book Your Luxury Transfer',
    description: 'Get in touch with Eugene Chauffeurs for luxury airport transfers, corporate travel, and special occasion transport across London and the UK.',
    url: '/contact',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://eugenechauffeurs.com/contact#contact-page',
  url: 'https://eugenechauffeurs.com/contact',
  name: 'Contact Eugene Chauffeurs',
  description: 'Contact Eugene Chauffeurs to book a luxury chauffeur service in London and across the UK.',
  mainEntity: { '@id': 'https://eugenechauffeurs.com/#organization' },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
      />
      <LDJson json={contactPageSchema} />
      <ClientContact />
    </>
  );
}
