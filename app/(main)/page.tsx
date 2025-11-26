import Hero from '@/app/components/Hero';
import FleetPreview from '@/app/components/FleetPreview';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import Testimonials from '@/app/components/Testimonials';
import BookingSection from '@/app/components/BookingSection';
import FAQ from '@/app/components/FAQ';

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