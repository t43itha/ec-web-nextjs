import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import LDJson from '@/app/components/LDJson';
import FAQSchema from '@/app/components/FAQSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import StickyCTA from '@/app/components/StickyCTA';
import BookingSection from '@/app/components/BookingSection';
import TfLBadge from '@/app/components/TfLBadge';
import { AIRPORT_FARES, DAY_RATES, DAY_RATE_HOURS, HOURLY_MIN_HOURS, HOURLY_RATES } from '@/app/lib/pricing';
import { TFL_LICENCE, WAITING_POLICY } from '@/app/lib/config';

export const revalidate = 86400;

const PATH = '/top-10-chauffeur-company-in-london-the-uk-eugene-chauffeurs-leads-the-way';
const PAGE_URL = `https://eugenechauffeurs.com${PATH}`;
const META_TITLE = 'Top Chauffeur Company in London: 10 Tips';
const META_DESCRIPTION = 'How to choose a top chauffeur company in London: 10 checks on licensing, vetting, fleet, prices and waiting time, and why Eugene Chauffeurs leads the way.';
const HEADLINE = 'How to Choose a Top Chauffeur Company in London';
const PUBLISHED = '2026-11-27';

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    title: `${META_TITLE} | Eugene Chauffeurs`,
    description: META_DESCRIPTION,
    url: PATH,
    images: ['/business.jpg'],
  },
};

const checks = [
  {
    title: 'A TfL operator licence',
    text: 'Every private hire operator in London needs a Transport for London licence. Ask for the number and check it on the TfL website.',
    ours: `Our TfL private hire operator licence is ${TFL_LICENCE}.`,
  },
  {
    title: 'Licensed chauffeurs and cars',
    text: 'Each chauffeur needs a TfL private hire driver licence, and each car needs a vehicle licence. A good company will confirm both without hesitation.',
    ours: 'Every Eugene Chauffeurs journey uses a TfL-licensed chauffeur and vehicle.',
  },
  {
    title: 'Vetting and discretion',
    text: 'Ask how chauffeurs are vetted and whether they will sign a non-disclosure agreement for sensitive work.',
    ours: 'NDAs are available on request, and unmarked vehicles can be arranged.',
  },
  {
    title: 'A named fleet',
    text: 'Look for named models, not "executive car or similar". You should know what will turn up.',
    ours: 'Mercedes-Benz E-Class, S-Class, V-Class and EQV, Range Rover and Rolls-Royce Ghost.',
  },
  {
    title: 'Published prices',
    text: 'Top companies publish hourly rates and airport fares so you can budget before you call.',
    ours: `Hourly hire from £${HOURLY_RATES.e_class}, with a ${HOURLY_MIN_HOURS}-hour minimum. Heathrow from £${AIRPORT_FARES.heathrow.e_class}.`,
  },
  {
    title: 'Clear extras',
    text: 'Check whether VAT, the Congestion Charge, ULEZ, tolls and parking are included or added.',
    ours: 'Prices are subject to VAT where applicable. Congestion Charge, ULEZ, tolls and parking beyond the free window are passed on at cost.',
  },
  {
    title: 'A fair waiting policy',
    text: 'Flights land late and meetings overrun. Ask how much free waiting is included before charges start.',
    ours: `${WAITING_POLICY.airportArrivals} on airport arrivals and ${WAITING_POLICY.departuresAndNonAirport} on other pickups.`,
  },
  {
    title: 'A proper airport service',
    text: 'You want flight tracking, a chauffeur in the arrivals hall with a nameboard, and clear meeting points.',
    ours: 'Meet and greet at Heathrow, Gatwick, Stansted, Luton and London City, with flight tracking on every pickup.',
  },
  {
    title: 'Easy to reach',
    text: 'Plans change. You should be able to reach a person quickly, not just an app.',
    ours: 'Book or change a journey by phone, WhatsApp, email or the website form.',
  },
  {
    title: 'The right range of services',
    text: 'One company for airport runs, meetings, weddings and events saves time and keeps standards consistent.',
    ours: 'Airport transfers, corporate accounts with monthly invoicing, weddings, events and hourly hire.',
  },
];

const compareRows = [
  { question: 'Licence', good: 'A TfL operator licence number you can check', ours: TFL_LICENCE },
  { question: 'Fleet', good: 'Named models, not "or similar"', ours: 'E-Class, S-Class, V-Class, EQV, Range Rover, Rolls-Royce Ghost' },
  { question: 'Hourly price', good: 'Published, per vehicle', ours: `From £${HOURLY_RATES.e_class} (E-Class), £${HOURLY_RATES.s_class} (S-Class)` },
  { question: 'Minimum booking', good: 'Stated up front', ours: `${HOURLY_MIN_HOURS} hours, or a ${DAY_RATE_HOURS}-hour day rate` },
  { question: 'Airport fares', good: 'Fixed, not metered', ours: `Heathrow from £${AIRPORT_FARES.heathrow.e_class}, Gatwick from £${AIRPORT_FARES.gatwick.e_class}` },
  { question: 'Airport waiting', good: 'A free window after landing', ours: WAITING_POLICY.airportArrivals },
  { question: 'Business billing', good: 'Accounts and invoices', ours: 'Corporate accounts with monthly invoicing' },
];

const faqs = [
  {
    question: 'What is the best chauffeur company in London?',
    answer: 'The best company for you is TfL licensed, publishes clear prices, names its cars and has a fair waiting policy. Use the 10 checks in this guide to compare. Eugene Chauffeurs meets every one of them.',
  },
  {
    question: 'How do I check that a chauffeur company is licensed?',
    answer: `Ask for its TfL private hire operator licence number and check it on the Transport for London website. The Eugene Chauffeurs licence number is ${TFL_LICENCE}.`,
  },
  {
    question: 'How much does a chauffeur cost in London?',
    answer: `At Eugene Chauffeurs, hourly hire starts at £${HOURLY_RATES.e_class} an hour in an E-Class and £${HOURLY_RATES.s_class} an hour in an S-Class, with a ${HOURLY_MIN_HOURS}-hour minimum. An S-Class day is £${DAY_RATES.s_class}. Heathrow transfers start at £${AIRPORT_FARES.heathrow.e_class}.`,
  },
  {
    question: 'What is the difference between a chauffeur and a minicab?',
    answer: 'A minicab is usually booked for one trip in whichever car is free. A chauffeur service books a set vehicle, a professional chauffeur and an agreed price, and the chauffeur can wait with the car for the whole booking.',
  },
  {
    question: 'Do chauffeur companies charge for airport waiting?',
    answer: `Most include a free window and charge after that. Eugene Chauffeurs includes ${WAITING_POLICY.airportArrivals} on airport arrivals and tracks your flight, so a late landing does not eat into it.`,
  },
  {
    question: 'Can a business open a chauffeur account?',
    answer: 'Yes. Eugene Chauffeurs offers corporate accounts with monthly invoicing and several authorised bookers, for client pickups, meetings, roadshows and airport runs.',
  },
];

export default function TopChauffeurCompanyGuidePage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: HEADLINE,
    description: META_DESCRIPTION,
    image: 'https://eugenechauffeurs.com/business.jpg',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    author: {
      '@type': 'Organization',
      name: 'Eugene Chauffeurs',
      url: 'https://eugenechauffeurs.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Eugene Chauffeurs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://eugenechauffeurs.com/RGB-Eugene-Chauffeurs-Concierge-Logo.webp',
      },
    },
  };

  return (
    <>
      <LDJson json={articleJsonLd} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Journal', href: '/blog' },
          { name: HEADLINE, href: PATH },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-6">Top 10 Checks</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-italiana text-white leading-[1.1] mb-8">
            {HEADLINE}.
          </h1>
          <p className="text-xl text-white/60 font-manrope font-light max-w-2xl mx-auto leading-relaxed">
            Ten things to check before you book a chauffeur in London or the UK, and how Eugene Chauffeurs leads the way on each one.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6 sm:px-12 font-manrope text-lg text-white/80 leading-relaxed space-y-12">

          <div className="bg-gold-400/10 border border-gold-400/20 p-8">
            <h2 className="text-2xl font-italiana text-white mb-4">The Short Answer</h2>
            <p className="mb-4">
              A top chauffeur company in London holds a TfL operator licence, uses licensed chauffeurs, names the cars in its fleet, publishes its prices and explains its waiting policy before you book.
            </p>
            <p>
              <strong>Eugene Chauffeurs</strong> leads the way on all of these. We hold TfL licence {TFL_LICENCE}, publish hourly rates from £{HOURLY_RATES.e_class} and Heathrow fares from £{AIRPORT_FARES.heathrow.e_class}, and include {WAITING_POLICY.airportArrivals} waiting on airport arrivals.
            </p>
          </div>

          <div>
            <p className="mb-6">
              London has hundreds of private hire firms. Some are minicab offices, some are apps, and a smaller number are true chauffeur companies. They can look similar online, so it helps to know what to ask.
            </p>
            <p>
              The checks below work whether you are booking one airport run, a day of meetings or transport for a wedding.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-italiana text-white mb-8">1. The Top 10 Checks</h2>
            <ol className="space-y-6 list-none pl-0">
              {checks.map((c, i) => (
                <li key={c.title} className="bg-white/5 p-6 border border-white/10 rounded-sm">
                  <h3 className="text-xl font-italiana text-white mb-2">
                    <span className="text-gold-400 mr-2">{i + 1}.</span>{c.title}
                  </h3>
                  <p className="text-base text-white/60 mb-3">{c.text}</p>
                  <p className="text-sm text-white/80 flex gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 shrink-0" />
                    <span>{c.ours}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-italiana text-white mb-6">2. How to Compare Chauffeur Companies</h2>
            <p className="mb-6">
              Ask two or three companies to quote the same journey: the same car, date, pickup time and number of hours. Then compare them line by line.
            </p>
            <ul className="space-y-4 list-none pl-0 mb-8">
              <li className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-gold-400 shrink-0" />
                <span>Check the licence number on the TfL website before you pay.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-gold-400 shrink-0" />
                <span>Compare the minimum booking and the day rate, not just the hourly price.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-gold-400 shrink-0" />
                <span>Ask what is added on top: VAT, Congestion Charge, ULEZ, parking and extra waiting.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-gold-400 shrink-0" />
                <span>Read recent reviews on independent sites such as Google.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-gold-400 shrink-0" />
                <span>Ask about cancellation terms and how late you can change a booking.</span>
              </li>
            </ul>

            <div className="overflow-x-auto border border-white/10">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-white/[0.04]">
                  <tr>
                    <th className="py-4 px-4 text-gold-400 font-italiana text-base">What to check</th>
                    <th className="py-4 px-4 text-gold-400 font-italiana text-base">A good answer</th>
                    <th className="py-4 px-4 text-gold-400 font-italiana text-base">Eugene Chauffeurs</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.question} className="border-t border-white/10">
                      <td className="py-4 px-4 text-white">{row.question}</td>
                      <td className="py-4 px-4 text-white/60">{row.good}</td>
                      <td className="py-4 px-4 text-white/80">{row.ours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-white/50">
              See all published rates on our <Link href="/prices" className="text-gold-400 hover:underline">prices page</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-italiana text-white mb-6">3. Why Eugene Chauffeurs Leads the Way</h2>
            <p className="mb-6">
              We built our service around the checks above. Our prices are on the website. Our <Link href="/fleet" className="text-gold-400 hover:underline">fleet</Link> is listed by model. Our waiting policy is the same on every booking.
            </p>
            <p className="mb-6">
              For airport travel we track your flight and meet you in arrivals at <Link href="/landing/airport/heathrow" className="text-gold-400 hover:underline">Heathrow</Link>, <Link href="/landing/airport/gatwick" className="text-gold-400 hover:underline">Gatwick</Link> and the other London airports. For business we offer <Link href="/corporate-travel-chauffeur" className="text-gold-400 hover:underline">corporate accounts</Link> with monthly invoicing.
            </p>
            <p className="mb-6">
              For one to three passengers, choose the <Link href="/mercedes-s-class-chauffeur" className="text-gold-400 hover:underline">Mercedes S-Class</Link> at £{HOURLY_RATES.s_class} an hour or £{DAY_RATES.s_class} a day, or the <Link href="/mercedes-v-class-chauffeur" className="text-gold-400 hover:underline">V-Class</Link> for groups of up to 7.
            </p>
            <TfLBadge variant="block" />
          </div>

          <div>
            <h2 className="text-3xl font-italiana text-white mb-8">4. Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="space-y-3">
                  <h3 className="text-xl font-italiana text-gold-400">{faq.question}</h3>
                  <p className="text-base text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base text-white/60">
              Want more detail on fleet standards and chauffeur etiquette? Read <Link href="/blog/definitive-guide-london-chauffeurs" className="text-gold-400 hover:underline">The Definitive Guide to London&apos;s Top Chauffeur Services</Link>.
            </p>
          </div>

          <div className="bg-gold-400/10 border border-gold-400/20 p-8 text-center">
            <h3 className="text-2xl font-italiana text-white mb-4">Get a Quote</h3>
            <p className="mb-8 text-white/70">
              Tell us your journey and we will confirm the car and the price before you travel.
            </p>
            <Link href="#booking" className="inline-block bg-gold-400 text-black px-8 py-3 font-manrope font-semibold uppercase tracking-wider hover:bg-white transition-colors">
              Book Your Journey
            </Link>
          </div>

        </div>
      </section>

      <BookingSection />
      <StickyCTA label="Book Now" />
    </>
  );
}
