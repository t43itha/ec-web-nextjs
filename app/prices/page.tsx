import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import { AIRPORT_FARES, HOURLY_MIN_HOURS, HOURLY_RATES, VEHICLE_LABELS, type VehicleKey } from '@/app/lib/pricing';

const hourlyVehicles: VehicleKey[] = ['e_class', 's_class', 'v_class', 'eqv', 'range_rover', 'rolls_royce'];
const airportVehicles: VehicleKey[] = ['e_class', 's_class', 'v_class', 'eqv', 'range_rover', 'rolls_royce'];
const airports = [
  { name: 'Heathrow', key: 'heathrow', href: '/landing/airport/heathrow' },
  { name: 'Gatwick', key: 'gatwick', href: '/landing/airport/gatwick' },
  { name: 'London City', key: 'lcy', href: '/landing/airport/london-city-airport' },
  { name: 'Stansted', key: 'stansted', href: '/landing/airport/stansted' },
  { name: 'Luton', key: 'luton', href: '/landing/airport/luton' },
] as const;

export const metadata: Metadata = {
  title: 'London Chauffeur Prices and Airport Transfer Fares',
  description: 'Published Eugene Chauffeurs prices: hourly London chauffeur rates from £60 and Heathrow chauffeur fares from £130.',
  alternates: { canonical: '/prices' },
  openGraph: {
    title: 'London Chauffeur Prices | Eugene Chauffeurs',
    description: 'Published hourly London chauffeur rates and fixed airport transfer fares.',
    url: '/prices',
  },
};

export default function PricesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Prices', href: '/prices' }]} />
      <main className="bg-black px-6 pb-24 pt-40 text-white sm:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold-400">Published rates</p>
          <h1 className="mb-8 max-w-4xl font-italiana text-5xl leading-tight md:text-7xl">London Chauffeur Prices</h1>
          <p className="mb-16 max-w-3xl font-manrope text-lg leading-8 text-white/60">Compare the from-prices already published for hourly chauffeur hire and airport transfers. Request a quotation for the exact vehicle, route, date, and waiting requirements.</p>

          <section className="mb-20">
            <h2 className="mb-4 font-italiana text-4xl">Hourly chauffeur hire</h2>
            <p className="mb-8 font-manrope text-white/55">Hourly bookings have a minimum of {HOURLY_MIN_HOURS} hours.</p>
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full border-collapse text-left font-manrope">
                <thead className="bg-white/[0.04]">
                  <tr>
                    <th className="px-5 py-4 text-gold-400">Vehicle</th>
                    <th className="px-5 py-4 text-right text-gold-400">From per hour</th>
                  </tr>
                </thead>
                <tbody>
                  {hourlyVehicles.map((vehicle) => (
                    <tr key={vehicle} className="border-t border-white/10">
                      <td className="px-5 py-4 text-white/80">{VEHICLE_LABELS[vehicle]}</td>
                      <td className="px-5 py-4 text-right text-white">£{HOURLY_RATES[vehicle]}/hr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-italiana text-4xl">Airport transfer fares</h2>
            <p className="mb-8 font-manrope leading-7 text-white/55">From-prices for a fixed transfer to or from Central London. Airport arrivals include meet and greet and 60 minutes of waiting time.</p>
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full border-collapse text-left font-manrope">
                <thead className="bg-white/[0.04]">
                  <tr>
                    <th className="px-4 py-4 text-gold-400">Airport</th>
                    {airportVehicles.map((vehicle) => <th key={vehicle} className="whitespace-nowrap px-4 py-4 text-right text-xs text-gold-400">{VEHICLE_LABELS[vehicle]}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {airports.map((airport) => (
                    <tr key={airport.key} className="border-t border-white/10">
                      <td className="whitespace-nowrap px-4 py-4"><Link className="text-white hover:text-gold-400" href={airport.href}>{airport.name}</Link></td>
                      {airportVehicles.map((vehicle) => <td key={vehicle} className="px-4 py-4 text-right text-white/70">£{AIRPORT_FARES[airport.key][vehicle]}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="mt-10 space-y-2 font-manrope text-sm leading-6 text-white/45">
            <p>All figures are from-prices and subject to availability. Prices are subject to VAT where applicable.</p>
            <p>Congestion and ULEZ charges, tolls, and parking beyond the free waiting window are passed at cost where applicable.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link className="btn-luxury" href="/contact#contact-section">Request a quotation</Link>
            <Link className="btn-luxury-outline" href="/faq">Read booking FAQs</Link>
          </div>
        </div>
      </main>
    </>
  );
}
