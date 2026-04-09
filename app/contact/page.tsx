import type { Metadata } from 'next';
import ClientContact from './ClientContact';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Contact Eugene Chauffeurs | Book Your Luxury Transfer',
  description: 'Get in touch with Eugene Chauffeurs for luxury airport transfers, corporate travel, and special occasion transport across London and the UK.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ClientContact />;
}