import Hero from '@/app/components/Hero';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import Testimonials from '@/app/components/Testimonials';
import BookingSection from '@/app/components/BookingSection';
import FAQ from '@/app/components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <BookingSection />
      <FAQ />
    </>
  );
}