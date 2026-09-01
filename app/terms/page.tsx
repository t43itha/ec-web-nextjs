import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Booking and service terms for chauffeur journeys provided by Eugene Chauffeurs Ltd.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms and Conditions | Eugene Chauffeurs',
    description: 'Booking and service terms for chauffeur journeys provided by Eugene Chauffeurs Ltd.',
    url: '/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Terms and Conditions', href: '/terms' }]} />
      <article className="bg-black px-6 pb-24 pt-40 text-white sm:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold-400">Legal</p>
          <h1 className="mb-8 font-italiana text-5xl md:text-7xl">Terms and Conditions</h1>
          <p className="mb-12 text-sm text-white/50">Last updated: 1 September 2026</p>
          <div className="space-y-10 font-manrope leading-8 text-white/70">
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Operator details</h2>
              <p>EUGENE CHAUFFEURS LTD, company number 11048803, trades as Eugene Chauffeurs from Suite 130, Lewisham Tower House, 67-71 Lewisham High Street, London SE13 5JX, United Kingdom. Transport for London private-hire operator licence: 0108860101.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Bookings and quotations</h2>
              <p>A booking is accepted when we confirm it. Please check the journey date, time, passenger details, pickup and destination when confirmation is received. Quotations are based on the information supplied and may be revised if the route, waiting time, vehicle, passenger count, stops, or other requirements change.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Prices and additional costs</h2>
              <p>Published prices are from-prices and are subject to availability. Prices are subject to VAT where applicable. Congestion and ULEZ charges, tolls, parking beyond an included free window, additional waiting, route changes, and requested extras may be charged as stated in the quotation or booking confirmation. See the current <Link className="text-gold-400 hover:underline" href="/prices">published prices</Link>.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Passengers and luggage</h2>
              <p>The person booking must provide accurate passenger and luggage requirements and choose a suitable vehicle. Passengers must follow reasonable safety instructions, wear seat belts where required, and not damage or soil the vehicle. Child seats must be requested when booking so availability and requirements can be confirmed.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Delays, changes, and cancellation</h2>
              <p>We monitor flight information where supplied, but passengers should tell us promptly about changes. Waiting-time, amendment, cancellation, and no-show terms are provided with the quotation or booking confirmation. Circumstances outside reasonable control, including severe traffic, road closures, weather, security incidents, or flight disruption, may affect a journey.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Liability</h2>
              <p>Nothing in these terms excludes liability that cannot lawfully be excluded. Subject to that, we are not responsible for indirect or consequential loss, or loss caused by inaccurate booking information or circumstances outside our reasonable control. Customers should allow sufficient travel time and keep valuables with them.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Law and contact</h2>
              <p>These terms are governed by the law of England and Wales. Contact us at <a className="text-gold-400 hover:underline" href="mailto:bookings@eugenechauffeurs.com">bookings@eugenechauffeurs.com</a> or <a className="text-gold-400 hover:underline" href="tel:+442081911882">+44 20 8191 1882</a>. Personal information is handled under our <Link className="text-gold-400 hover:underline" href="/privacy">Privacy Policy</Link>.</p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
