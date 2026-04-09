import type { Metadata } from 'next';
import ClientServices from './ClientServices';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Our Services | Airport Transfers, Corporate & Event Chauffeurs',
  description: 'Explore our luxury chauffeur services: airport transfers, corporate travel, wedding transport, event chauffeurs, and hourly hire across London and the UK.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <ClientServices />;
}
