import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['cheltenham'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/cheltenham-festival-chauffeur' },
};

export default function CheltenhamPage() {
  return <EventPageTemplate data={data} />;
}
