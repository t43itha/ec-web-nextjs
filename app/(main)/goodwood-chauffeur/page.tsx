import type { Metadata } from 'next';
import EventPageTemplate from '@/app/components/EventPageTemplate';
import { events } from '@/app/lib/event-data';

export const revalidate = 86400;

const data = events['goodwood'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/goodwood-chauffeur' },
};

export default function GoodwoodPage() {
  return <EventPageTemplate data={data} />;
}
