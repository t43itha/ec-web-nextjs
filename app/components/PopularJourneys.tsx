import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const popularJourneys = [
  {
    title: 'Heathrow chauffeur',
    description: 'Meet-and-greet airport transfers with flight monitoring and luggage support.',
    href: '/heathrow-chauffeur',
  },
  {
    title: 'Gatwick transfers',
    description: 'Premium Gatwick arrivals and departures for private and business travel.',
    href: '/gatwick-chauffeur',
  },
  {
    title: 'Mayfair executive travel',
    description: 'Discreet chauffeur service for hotels, meetings, dining, and retail appointments.',
    href: '/chauffeur-mayfair',
  },
  {
    title: 'Canary Wharf business chauffeur',
    description: 'Reliable executive journeys for finance teams, roadshows, and client movements.',
    href: '/chauffeur-canary-wharf',
  },
  {
    title: 'Wedding cars',
    description: 'Elegant chauffeur-driven vehicles for ceremonies, receptions, and guest transport.',
    href: '/wedding-chauffeur-service',
  },
  {
    title: 'VIP event travel',
    description: 'Planned arrivals and departures for private events, red carpets, and sporting fixtures.',
    href: '/corporate-event-chauffeur',
  },
];

const PopularJourneys = () => {
  return (
    <section className="relative bg-black py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute -right-48 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold-400/5 blur-[120px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 space-y-6">
            <p className="text-gold-400 text-xs uppercase tracking-[0.3em]">Popular chauffeur journeys</p>
            <h2 className="text-4xl md:text-5xl font-italiana text-white leading-none">
              Common requests. <br />
              <span className="text-white/30">Handled precisely.</span>
            </h2>
            <p className="text-white/60 font-manrope font-light leading-relaxed max-w-md">
              From airport transfers to executive city movements, these are the chauffeur journeys clients most often arrange with Eugene Chauffeurs.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
            {popularJourneys.map((journey) => (
              <Link
                key={journey.href}
                href={journey.href}
                className="group min-h-[210px] bg-black p-8 flex flex-col justify-between hover:bg-white/[0.03] transition-colors duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-italiana text-white group-hover:text-gold-400 transition-colors duration-300">
                      {journey.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-gold-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
                  </div>
                  <p className="text-white/50 font-manrope text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {journey.description}
                  </p>
                </div>
                <span className="pt-8 text-[10px] uppercase tracking-[0.25em] text-gold-400/70 font-manrope">
                  View service
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularJourneys;
