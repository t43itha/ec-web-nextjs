import type { Metadata } from 'next';
import Hero from '@/app/components/Hero';
import FleetPreview from '@/app/components/FleetPreview';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import Testimonials from '@/app/components/Testimonials';
import BookingSection from '@/app/components/BookingSection';
import FAQ from '@/app/components/FAQ';

export const metadata: Metadata = {
  title: 'Eugene Chauffeurs — Luxury Chauffeur Service London',
  description: "London's premier personal chauffeur service. Luxury executive transfers for airports, business travel, weddings, and special occasions across London and the UK.",
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FleetPreview />
      <WhyChooseUs />
      <Testimonials />
      <BookingSection />
      <FAQ />
    </>
  );
}
