import type { Metadata } from 'next';
import Hero from '@/app/components/Hero';
import FleetPreview from '@/app/components/FleetPreview';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import PopularJourneys from '@/app/components/PopularJourneys';
import Testimonials from '@/app/components/Testimonials';
import BookingSection from '@/app/components/BookingSection';
import FAQ from '@/app/components/FAQ';
import FAQSchema from '@/app/components/FAQSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import { HOMEPAGE_FAQS } from '@/app/lib/faqs';

export const metadata: Metadata = {
  title: 'London Chauffeur Concierge | Airport & Executive Transfers | Eugene Chauffeurs',
  description: 'London chauffeur concierge for airport transfers, business travel, and VIP journeys. Mercedes vehicles, flight tracking, meet-and-greet, and direct WhatsApp support.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'London Chauffeur Concierge | Airport & Executive Transfers | Eugene Chauffeurs',
    description: 'London chauffeur concierge for airport transfers, business travel, and VIP journeys. Mercedes vehicles, flight tracking, meet-and-greet, and direct WhatsApp support.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }]} />
      <FAQSchema faqs={HOMEPAGE_FAQS} />
      <Hero />
      <FleetPreview />
      <WhyChooseUs />
      <PopularJourneys />
      <Testimonials />
      <BookingSection />
      <FAQ faqs={HOMEPAGE_FAQS} />
    </>
  );
}
