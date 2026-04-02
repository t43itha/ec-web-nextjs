import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['henley'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/henley-regatta-chauffeur' },
};

export default function HenleyPage() {
  return <EventPageTemplate data={data} />;
}
