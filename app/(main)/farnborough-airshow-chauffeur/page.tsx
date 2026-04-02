import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['farnborough-airshow'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/farnborough-airshow-chauffeur' },
};

export default function FarnboroughAirshowPage() {
  return <EventPageTemplate data={data} />;
}
