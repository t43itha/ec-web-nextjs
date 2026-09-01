import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import { HOURLY_MIN_HOURS, HOURLY_RATES, VEHICLE_LABELS, type VehicleKey } from '@/app/lib/pricing';

const vehicles: Array<{
  key: VehicleKey;
  href: string;
  summary: string;
}> = [
  {
    key: 'e_class',
    href: '/mercedes-e-class-chauffeur',
    summary: 'Business-class saloon for executive journeys, airport transfers, and everyday chauffeur travel.',
  },
  {
    key: 's_class',
    href: '/mercedes-s-class-chauffeur',
    summary: 'Luxury executive saloon for discreet corporate, airport, and special-occasion journeys.',
  },
  {
    key: 'v_class',
    href: '/mercedes-v-class-chauffeur',
    summary: 'Spacious luxury MPV for families, groups, luggage, airport transfers, and roadshows.',
  },
  {
    key: 'eqv',
    href: '/mercedes-eqv-chauffeur',
    summary: 'Electric Mercedes-Benz MPV for quieter group and executive chauffeur travel.',
  },
  {
    key: 'range_rover',
    href: '/range-rover-chauffeur',
    summary: 'Luxury SUV with a commanding presence for city, airport, and event travel.',
  },
  {
    key: 'rolls_royce',
    href: '/rolls-royce-chauffeur',
    summary: 'Rolls-Royce Ghost chauffeur hire for weddings, VIP occasions, and distinguished arrivals.',
  },
];

export const metadata: Metadata = {
  title: 'Luxury Chauffeur Fleet London',
  description: 'Explore the Eugene Chauffeurs fleet: Mercedes-Benz E-Class, S-Class, V-Class and EQV, Range Rover, and Rolls-Royce Ghost.',
  alternates: { canonical: '/fleet' },
  openGraph: {
    title: 'Luxury Chauffeur Fleet London | Eugene Chauffeurs',
    description: 'Compare the Mercedes-Benz, Range Rover, and Rolls-Royce chauffeur vehicles available for London journeys.',
    url: '/fleet',
  },
};

export default function FleetPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Fleet', href: '/fleet' }]} />
      <main className="bg-black px-6 pb-24 pt-40 text-white sm:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold-400">Our vehicles</p>
          <h1 className="mb-8 max-w-4xl font-italiana text-5xl leading-tight md:text-7xl">Luxury Chauffeur Fleet</h1>
          <p className="mb-16 max-w-3xl font-manrope text-lg leading-8 text-white/60">
            Choose a chauffeur-driven vehicle to suit business travel, airport luggage, group journeys, weddings, or event arrivals. All bookings are subject to vehicle availability.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <article key={vehicle.key} className="flex flex-col border border-white/10 bg-white/[0.02] p-7">
                <h2 className="mb-4 font-italiana text-2xl text-white">{VEHICLE_LABELS[vehicle.key]}</h2>
                <p className="mb-8 flex-1 font-manrope leading-7 text-white/55">{vehicle.summary}</p>
                <div className="mb-6 border-y border-white/10 py-4 font-manrope">
                  <span className="text-xs uppercase tracking-widest text-white/35">Hourly from </span>
                  <span className="text-xl text-gold-400">£{HOURLY_RATES[vehicle.key]}/hr</span>
                </div>
                <Link className="text-sm uppercase tracking-widest text-gold-400 hover:text-white" href={vehicle.href}>
                  View vehicle details →
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-10 font-manrope text-sm leading-6 text-white/45">
            Hourly bookings have a {HOURLY_MIN_HOURS}-hour minimum. Prices are subject to VAT where applicable. See all published airport and hourly rates on the prices page.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link className="btn-luxury" href="/contact#contact-section">Request a vehicle</Link>
            <Link className="btn-luxury-outline" href="/prices">Compare prices</Link>
          </div>
        </div>
      </main>
    </>
  );
}
