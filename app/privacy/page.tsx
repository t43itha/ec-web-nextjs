import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Eugene Chauffeurs Ltd collects, uses, stores, and protects personal information.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Eugene Chauffeurs',
    description: 'How Eugene Chauffeurs Ltd collects, uses, stores, and protects personal information.',
    url: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy', href: '/privacy' }]} />
      <article className="bg-black px-6 pb-24 pt-40 text-white sm:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold-400">Legal</p>
          <h1 className="mb-8 font-italiana text-5xl md:text-7xl">Privacy Policy</h1>
          <p className="mb-12 text-sm text-white/50">Last updated: 1 September 2026</p>
          <div className="space-y-10 font-manrope leading-8 text-white/70">
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Who we are</h2>
              <p>EUGENE CHAUFFEURS LTD (company number 11048803) is the data controller for enquiries and bookings made with Eugene Chauffeurs. Our registered address is Suite 130, Lewisham Tower House, 67-71 Lewisham High Street, London SE13 5JX, United Kingdom. We are a Transport for London licensed private-hire operator, licence 0108860101.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Information we collect</h2>
              <p>We may collect your name, contact details, pickup and destination details, journey requirements, passenger information you provide, correspondence, and payment or invoicing information. Our website may also collect basic technical and analytics information such as browser type, device type, and pages visited.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">How we use information</h2>
              <p>We use personal information to answer enquiries, arrange and manage journeys, communicate service updates, take payment, maintain business and licensing records, prevent misuse, improve our service, and meet legal obligations. Our lawful bases may include performing a contract, taking steps before a contract, legitimate interests, consent, and compliance with law.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Sharing and retention</h2>
              <p>We share information only where needed to provide or administer a service, including with assigned chauffeurs, booking and payment providers, professional advisers, or authorities where legally required. We retain information only for as long as necessary for the purpose collected and for applicable legal, tax, insurance, and licensing requirements.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Your rights</h2>
              <p>Under UK data-protection law, you may have rights to access, correct, erase, restrict, or object to use of your information, and to request portability or withdraw consent. You may also complain to the Information Commissioner&apos;s Office.</p>
            </section>
            <section>
              <h2 className="mb-3 font-italiana text-2xl text-white">Contact</h2>
              <p>For privacy questions or requests, email <a className="text-gold-400 hover:underline" href="mailto:bookings@eugenechauffeurs.com">bookings@eugenechauffeurs.com</a>, call <a className="text-gold-400 hover:underline" href="tel:+442081911882">+44 20 8191 1882</a>, or write to the registered address above.</p>
              <p className="mt-3">For service terms, see our <Link className="text-gold-400 hover:underline" href="/terms">Terms and Conditions</Link>.</p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
