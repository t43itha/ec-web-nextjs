import type { Metadata } from 'next';
import Hero from '@/app/components/Hero';
import FleetPreview from '@/app/components/FleetPreview';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import Testimonials from '@/app/components/Testimonials';
import BookingSection from '@/app/components/BookingSection';
import FAQ from '@/app/components/FAQ';
import FAQSchema from '@/app/components/FAQSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';

const homepageFaqs = [
  {
    question: 'What chauffeur services does Eugene Chauffeurs provide?',
    answer: 'Eugene Chauffeurs provides luxury chauffeur services in London and across the UK, including airport transfers, corporate travel, wedding transport, event chauffeur services, private jet ground transfers, hourly hire, and concierge journeys.',
  },
  {
    question: 'Do you offer airport meet and greet chauffeur transfers?',
    answer: 'Yes. Eugene Chauffeurs provides airport meet and greet transfers for Heathrow, Gatwick, Stansted, Luton, and London City Airport, with flight monitoring and professional chauffeurs waiting in arrivals.',
  },
  {
    question: 'Which areas do you cover?',
    answer: 'The core service area is London and Greater London, including Mayfair, Chelsea, Kensington, Knightsbridge, Canary Wharf, Westminster, Belgravia, and surrounding counties such as Surrey, Kent, and Essex.',
  },
  {
    question: 'What vehicles can I book?',
    answer: 'Available chauffeur vehicles include Mercedes-Benz S-Class, E-Class, V-Class, EQV, Range Rover, and Rolls-Royce options, subject to availability and journey requirements.',
  },
  {
    question: 'Is the service suitable for corporate and VIP travel?',
    answer: 'Yes. Eugene Chauffeurs supports corporate executives, VIP clients, event guests, and private clients who require punctuality, privacy, discretion, and premium transport standards.',
  },
  {
    question: 'How do I book Eugene Chauffeurs?',
    answer: 'You can book by contacting the concierge team through the website contact form, by emailing bookings@eugenechauffeurs.com, or by calling +44 7340 801 274.',
  },
];

export const metadata: Metadata = {
  title: 'Eugene Chauffeurs — Luxury Chauffeur Service London',
  description: "London's premier personal chauffeur service. Luxury executive transfers for airports, business travel, weddings, and special occasions across London and the UK.",
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }]} />
      <FAQSchema faqs={homepageFaqs} />
      <Hero />
      <FleetPreview />
      <WhyChooseUs />
      <Testimonials />
      <BookingSection />
      <FAQ />
    </>
  );
}
