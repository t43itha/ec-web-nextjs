import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['chelsea-flower-show'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/chelsea-flower-show-chauffeur' },
};

export default function ChelseaFlowerShowPage() {
  return <EventPageTemplate data={data} />;
}
