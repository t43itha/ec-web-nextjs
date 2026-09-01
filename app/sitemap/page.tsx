import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import { getAllBoroughs } from '@/app/lib/borough-data';
import { getAllServiceCityCombinations, getAllStadiums } from '@/app/lib/landing-data';
import { blogPosts } from '@/app/lib/blog-data';

const groups = [
  {
    title: 'Main pages',
    links: [
      ['Home', '/'], ['Services', '/services'], ['Prices', '/prices'], ['FAQ', '/faq'],
      ['About', '/about'], ['Contact', '/contact'], ['Privacy Policy', '/privacy'],
      ['Terms and Conditions', '/terms'], ['Journal', '/blog'],
    ],
  },
  {
    title: 'Core chauffeur services',
    links: [
      ['London Chauffeur', '/chauffeur-london'], ['Hourly Chauffeur Hire', '/chauffeur-hire-by-the-hour'],
      ['Corporate Travel', '/corporate-travel-chauffeur'], ['Corporate Events', '/corporate-event-chauffeur'],
      ['Wedding Chauffeur', '/wedding-chauffeur-service'], ['Private Jet Assistance', '/private-jet-charter-assistance-uk'],
      ['Personal Shopping Chauffeur', '/personal-shopping-concierge-london'], ['Battersea Heliport Chauffeur', '/battersea-heliport-chauffeur'],
    ],
  },
  {
    title: 'Airports',
    links: [
      ['Heathrow', '/landing/airport/heathrow'], ['Gatwick', '/landing/airport/gatwick'],
      ['Stansted', '/landing/airport/stansted'], ['Luton', '/landing/airport/luton'],
      ['London City Airport', '/landing/airport/london-city-airport'], ['Farnborough Airport', '/farnborough-chauffeur'],
    ],
  },
  {
    title: 'Vehicles',
    links: [
      ['Mercedes-Benz E-Class', '/mercedes-e-class-chauffeur'], ['Mercedes-Benz S-Class', '/mercedes-s-class-chauffeur'],
      ['Mercedes-Benz V-Class', '/mercedes-v-class-chauffeur'], ['Mercedes-Benz EQV', '/mercedes-eqv-chauffeur'],
      ['Range Rover', '/range-rover-chauffeur'], ['Rolls-Royce Ghost', '/rolls-royce-chauffeur'],
    ],
  },
  {
    title: 'Events',
    links: [
      ['Royal Ascot', '/royal-ascot-chauffeur'], ['Wimbledon Championships', '/wimbledon-chauffeur'],
      ['Cheltenham Festival', '/cheltenham-festival-chauffeur'], ['Henley Regatta', '/henley-regatta-chauffeur'],
      ['Goodwood', '/goodwood-chauffeur'], ['Chelsea Flower Show', '/chelsea-flower-show-chauffeur'],
      ['Farnborough Airshow', '/farnborough-airshow-chauffeur'], ['BAFTA', '/bafta-chauffeur'],
    ],
  },
] as const;

export const metadata: Metadata = {
  title: 'HTML Sitemap',
  description: 'Browse the indexable service, airport, fleet, location, event, and information pages on Eugene Chauffeurs.',
  alternates: { canonical: '/sitemap' },
  openGraph: {
    title: 'HTML Sitemap | Eugene Chauffeurs',
    description: 'Browse Eugene Chauffeurs service, airport, fleet, location, event, and information pages.',
    url: '/sitemap',
  },
};

export default function HTMLSitemapPage() {
  const generatedGroups = [
    {
      title: 'London areas',
      links: getAllBoroughs().map(({ borough }) => [`Chauffeur ${borough.split('-').map((word) => word[0]?.toUpperCase() + word.slice(1)).join(' ')}`, `/chauffeur-${borough}`]),
    },
    {
      title: 'Business and event locations',
      links: getAllServiceCityCombinations().map(({ service, city }) => [`${service === 'business' ? 'Business Chauffeur' : 'Event Chauffeur'} ${city[0]?.toUpperCase() + city.slice(1)}`, `/landing/${service}/${city}`]),
    },
    {
      title: 'Stadiums',
      links: getAllStadiums().map(({ venue }) => [`${venue.split('-').map((word) => word[0]?.toUpperCase() + word.slice(1)).join(' ')} Chauffeur`, `/landing/stadium/${venue}`]),
    },
    {
      title: 'Journal articles',
      links: blogPosts.map((post) => [post.title, `/blog/${post.slug}`]),
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Sitemap', href: '/sitemap' }]} />
      <main className="bg-black px-6 pb-24 pt-40 text-white sm:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold-400">Navigation</p>
          <h1 className="mb-14 font-italiana text-5xl md:text-7xl">HTML Sitemap</h1>
          <div className="grid gap-12 md:grid-cols-2">
            {[...groups, ...generatedGroups].map((group) => (
              <section key={group.title}>
                <h2 className="mb-5 border-b border-white/10 pb-4 font-italiana text-2xl text-gold-400">{group.title}</h2>
                <ul className="grid gap-3 font-manrope text-sm text-white/60">
                  {group.links.map(([name, href]) => (
                    <li key={href}><Link className="hover:text-white" href={href}>{name}</Link></li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-16 font-manrope text-sm text-white/45">For search engines, see the <Link className="text-gold-400 hover:underline" href="/sitemap.xml">XML sitemap</Link>.</p>
        </div>
      </main>
    </>
  );
}
