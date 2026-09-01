import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import FAQSchema from '@/app/components/FAQSchema';

const faqs = [
  {
    question: 'Which airports do you serve?',
    answer: 'We provide chauffeur transfers for Heathrow, Gatwick, Stansted, Luton, and London City Airport, as well as private aviation transfers at Farnborough. Journeys can connect airports with London and other UK destinations.',
  },
  {
    question: 'Where will my chauffeur meet me at the airport?',
    answer: 'For airport arrivals, your chauffeur meets you in the arrivals hall after customs with a nameboard. The precise meeting point is provided for your terminal.',
  },
  {
    question: 'Do you monitor flight delays?',
    answer: 'Yes. We monitor the flight number supplied with your booking and adjust the airport pickup time when the flight is delayed.',
  },
  {
    question: 'How much waiting time is included?',
    answer: 'Airport arrivals include 60 minutes of free waiting time. Departures and non-airport pickups include 15 minutes. Additional waiting is billed at the applicable rate.',
  },
  {
    question: 'Are your published prices inclusive of VAT and road charges?',
    answer: 'Published prices are subject to VAT where applicable. Congestion and ULEZ charges, tolls, and parking beyond the free waiting window are passed at cost where stated. Your quotation confirms the charges for your journey.',
  },
  {
    question: 'Can I request a child seat?',
    answer: 'Yes. Child seats are available on request at booking at no extra charge. Please provide the children’s ages so the request can be confirmed.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'Our core coverage is London and Greater London, including central London districts and all major London airports. We also provide longer-distance journeys across the United Kingdom, subject to availability.',
  },
  {
    question: 'Which vehicles can I book?',
    answer: 'Published chauffeur options include Mercedes-Benz E-Class, S-Class, V-Class and EQV, Range Rover, and Rolls-Royce Ghost. Vehicle availability depends on the journey and booking date.',
  },
  {
    question: 'How do I make a booking?',
    answer: 'Send an enquiry through the contact form, email bookings@eugenechauffeurs.com, or call the 24-hour booking line on +44 20 8191 1882. WhatsApp is also available as a separate messaging channel.',
  },
  {
    question: 'Can businesses open a corporate account?',
    answer: 'Yes. Corporate accounts and invoicing are available for approved clients. Contact the team with your travel requirements to discuss account arrangements.',
  },
];

export const metadata: Metadata = {
  title: 'Chauffeur Service Frequently Asked Questions',
  description: 'Answers about airport pickups, waiting time, published prices, VAT, child seats, coverage, vehicles, and booking Eugene Chauffeurs.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Chauffeur Service FAQ | Eugene Chauffeurs',
    description: 'Answers about airport pickups, waiting time, prices, VAT, child seats, coverage, vehicles, and bookings.',
    url: '/faq',
  },
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq' }]} />
      <FAQSchema faqs={faqs} />
      <main className="bg-black px-6 pb-24 pt-40 text-white sm:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold-400">Information</p>
          <h1 className="mb-8 max-w-4xl font-italiana text-5xl leading-tight md:text-7xl">Chauffeur Service Frequently Asked Questions</h1>
          <p className="mb-16 max-w-3xl font-manrope text-lg leading-8 text-white/60">Practical information for planning an airport transfer, an hourly booking, corporate travel, or a special journey with Eugene Chauffeurs.</p>
          <div className="space-y-0 border-t border-white/10">
            {faqs.map((faq) => (
              <section key={faq.question} className="border-b border-white/10 py-8">
                <h2 className="mb-4 font-italiana text-2xl text-gold-400">{faq.question}</h2>
                <p className="max-w-4xl font-manrope leading-8 text-white/65">{faq.answer}</p>
              </section>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link className="btn-luxury" href="/contact">Contact the booking team</Link>
            <Link className="btn-luxury-outline" href="/prices">View published prices</Link>
          </div>
        </div>
      </main>
    </>
  );
}
