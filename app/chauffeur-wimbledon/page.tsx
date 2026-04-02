import type { Metadata } from 'next';
import BoroughPageTemplate from '@/app/components/BoroughPageTemplate';
import { boroughs } from '@/app/lib/borough-data';

export const revalidate = 86400;

const data = boroughs['wimbledon'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `/chauffeur-${data.slug}` },
};

export default function WimbledonBoroughPage() {
  return <BoroughPageTemplate data={data} />;
}
