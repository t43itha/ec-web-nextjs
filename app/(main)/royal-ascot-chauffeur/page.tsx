import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['royal-ascot'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/royal-ascot-chauffeur' },
};

export default function RoyalAscotPage() {
  return <EventPageTemplate data={data} />;
}
