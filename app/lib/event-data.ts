import type { RelatedLink } from '@/app/components/RelatedServices';

export interface EventData {
  name: string;
  slug: string;
  venue: string;
  venueAddress: string;
  dates: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroDescription: string;
  contentTitle: string;
  contentParagraphs: string[];
  logistics: string[];
  faqs: { q: string; a: string }[];
  pricingKey: string;
  relatedLinks: RelatedLink[];
}

export const events: Record<string, EventData> = {
  'royal-ascot': {
    name: 'Royal Ascot',
    slug: 'royal-ascot',
    venue: 'Ascot Racecourse',
    venueAddress: 'Ascot, Berkshire SL5 7JX',
    dates: 'June (5 days)',
    metaTitle: 'Royal Ascot Chauffeur | Race Day Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Royal Ascot. Luxury transfers to Ascot Racecourse with waiting time included. S-Class, V-Class, and Range Rover available.',
    heroTagline: 'Royal Ascot',
    heroDescription: 'Arrive at the Royal Enclosure in style. Full-day chauffeur packages with waiting time, refreshments, and a seamless return journey.',
    contentTitle: 'Race Day',
    contentParagraphs: [
      'Royal Ascot demands an entrance that matches the occasion. Our chauffeurs deliver you to the racecourse gates in an immaculate vehicle, dressed in formal attire and ready to assist with your day.',
      'Your chauffeur waits on-site throughout the day, ready to depart at your signal — no queuing for taxis, no surge pricing, just a calm, luxurious return to London.',
    ],
    logistics: [
      'Approximately 50 minutes from Central London via the M4',
      'Chauffeur waits on-site for the duration',
      'Return journey timed to your schedule',
      'Complimentary water and phone charger',
    ],
    faqs: [
      { q: 'How long is the drive to Ascot?', a: 'Approximately 50-60 minutes from Central London, depending on traffic. We recommend departing by 10am for a midday arrival.' },
      { q: 'Does the chauffeur wait all day?', a: 'Yes. Our full-day package includes waiting time at the racecourse. Your chauffeur is available whenever you are ready to leave.' },
    ],
    pricingKey: 'royal-ascot',
    relatedLinks: [
      { title: 'Chauffeur Surrey', href: '/chauffeur-surrey', description: 'Service across the Surrey border.' },
      { title: 'Rolls-Royce Ghost', href: '/rolls-royce-chauffeur', description: 'Ultimate prestige for race day.' },
      { title: 'Goodwood Chauffeur', href: '/goodwood-chauffeur', description: 'Another premier racing event.' },
      { title: 'By the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly chauffeur hire.' },
    ],
  },
  'wimbledon': {
    name: 'Wimbledon Championships',
    slug: 'wimbledon',
    venue: 'All England Lawn Tennis Club',
    venueAddress: 'Church Road, Wimbledon, London SW19 5AE',
    dates: 'Late June - Mid July (2 weeks)',
    metaTitle: 'Wimbledon Chauffeur | Championships Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Wimbledon Championships. Luxury transfers to the AELTC with waiting time. Beat the queues and traffic.',
    heroTagline: 'Wimbledon',
    heroDescription: 'Championship-level transport to the All England Club. Full-day packages with waiting time and a stress-free return journey.',
    contentTitle: 'Centre Court',
    contentParagraphs: [
      'The Wimbledon Championships attract visitors from around the world, and the roads around SW19 reflect it. Our chauffeurs know the approach routes, the drop-off points, and the quiet streets to avoid the congestion.',
      'Whether you have a Debenture ticket for Centre Court or a Ground Pass for the outer courts, we deliver you to the gates and wait until you are ready to leave.',
    ],
    logistics: [
      'Approximately 30-40 minutes from Central London',
      'Drop-off at Gate 1 or Gate 5 depending on ticket type',
      'Chauffeur waits on-site for the duration',
      'Alternative route via A3 if Wimbledon Village is congested',
    ],
    faqs: [
      { q: 'Where does the chauffeur drop off?', a: 'We drop off at the nearest accessible gate to your ticket type — typically Gate 1 (Church Road) or Gate 5 (Somerset Road).' },
      { q: 'Can you handle multiple vehicles for a corporate group?', a: 'Yes. We regularly coordinate multi-vehicle Championships transport for corporate hospitality groups.' },
    ],
    pricingKey: 'wimbledon',
    relatedLinks: [
      { title: 'Chauffeur Wimbledon', href: '/chauffeur-wimbledon', description: 'Year-round service in SW19.' },
      { title: 'Mercedes V-Class', href: '/mercedes-v-class-chauffeur', description: 'Group transport for up to 6.' },
      { title: 'Royal Ascot Chauffeur', href: '/royal-ascot-chauffeur', description: 'Another premier sporting event.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Multi-vehicle event coordination.' },
    ],
  },
  'cheltenham': {
    name: 'Cheltenham Festival',
    slug: 'cheltenham',
    venue: 'Cheltenham Racecourse',
    venueAddress: 'Prestbury Park, Cheltenham GL50 4SH',
    dates: 'March (4 days)',
    metaTitle: 'Cheltenham Festival Chauffeur | Race Day Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Cheltenham Festival. Luxury transfers from London to Prestbury Park with waiting time included.',
    heroTagline: 'Cheltenham',
    heroDescription: 'Luxury transfers from London to Cheltenham Racecourse. Full-day packages with waiting time for all four days of the Festival.',
    contentTitle: 'Festival',
    contentParagraphs: [
      'Cheltenham Festival is the pinnacle of National Hunt racing, and the journey from London is part of the experience. Our chauffeurs provide a comfortable, relaxing transfer via the M40 and A40.',
      'Arrive refreshed, enjoy the racing, and let us handle the return journey — no designated driver needed, no late-night M40 stress.',
    ],
    logistics: [
      'Approximately 2 hours from Central London via M40/A40',
      'Chauffeur waits on-site for the duration',
      'Early morning departure recommended for Gold Cup day',
      'Return journey timed to your schedule',
    ],
    faqs: [
      { q: 'How long is the drive to Cheltenham?', a: 'Approximately 2 hours from Central London. We recommend departing by 9am for a comfortable arrival.' },
      { q: 'Can you do multiple days?', a: 'Yes. We offer multi-day packages for the full Festival at a discounted rate.' },
    ],
    pricingKey: 'cheltenham',
    relatedLinks: [
      { title: 'Royal Ascot Chauffeur', href: '/royal-ascot-chauffeur', description: 'Another premier racing event.' },
      { title: 'Range Rover', href: '/range-rover-chauffeur', description: 'Comfortable for longer journeys.' },
      { title: 'By the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly chauffeur hire.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Multi-vehicle group coordination.' },
    ],
  },
  'henley': {
    name: 'Henley Royal Regatta',
    slug: 'henley',
    venue: 'Henley-on-Thames',
    venueAddress: 'Henley-on-Thames, Oxfordshire RG9 2LY',
    dates: 'Late June - Early July (5 days)',
    metaTitle: 'Henley Regatta Chauffeur | Event Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Henley Royal Regatta. Luxury transfers from London to Henley-on-Thames with full-day waiting time.',
    heroTagline: 'Henley Regatta',
    heroDescription: 'Arrive at the Stewards\' Enclosure in style. Full-day chauffeur packages from London to Henley-on-Thames.',
    contentTitle: 'Riverside',
    contentParagraphs: [
      'Henley Royal Regatta is the quintessential English summer event. The journey from London through the Chilterns is scenic, and our chauffeurs make it effortless.',
      'We drop you at the enclosure entrance, park nearby, and wait until the last race — or the last glass of Pimm\'s.',
    ],
    logistics: [
      'Approximately 60-75 minutes from Central London via M4/A404',
      'Drop-off at the enclosure entrance',
      'Chauffeur waits on-site for the duration',
      'Return journey avoids the A4130 congestion',
    ],
    faqs: [
      { q: 'How long is the drive to Henley?', a: 'Approximately 60-75 minutes from Central London. We recommend allowing 90 minutes during Regatta week.' },
      { q: 'Is parking included?', a: 'Yes. Our chauffeur handles all parking. You just arrive and enjoy.' },
    ],
    pricingKey: 'henley',
    relatedLinks: [
      { title: 'Royal Ascot Chauffeur', href: '/royal-ascot-chauffeur', description: 'Another June highlight.' },
      { title: 'Wimbledon Chauffeur', href: '/wimbledon-chauffeur', description: 'Championships transport.' },
      { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'Elegant arrival guaranteed.' },
      { title: 'Chauffeur Richmond', href: '/chauffeur-richmond', description: 'Close to the M4 corridor.' },
    ],
  },
  'goodwood': {
    name: 'Goodwood',
    slug: 'goodwood',
    venue: 'Goodwood Estate',
    venueAddress: 'Goodwood, Chichester PO18 0PX',
    dates: 'Festival of Speed (July), Revival (September)',
    metaTitle: 'Goodwood Chauffeur | Festival of Speed & Revival Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Goodwood Festival of Speed and Revival. Luxury transfers from London to the Goodwood Estate.',
    heroTagline: 'Goodwood',
    heroDescription: 'Luxury transfers to the Goodwood Estate for Festival of Speed and Revival. Full-day packages from London.',
    contentTitle: 'Motorsport',
    contentParagraphs: [
      'Goodwood is the spiritual home of British motorsport. Whether it is the Festival of Speed in July or the Revival in September, the journey to the Goodwood Estate should be part of the experience.',
      'Our chauffeurs navigate the Sussex lanes with care, delivering you to the estate entrance refreshed and ready to enjoy the spectacle.',
    ],
    logistics: [
      'Approximately 90 minutes from Central London via A3/A27',
      'Drop-off at the estate entrance',
      'Chauffeur waits on-site for the duration',
      'Country lanes require experienced navigation',
    ],
    faqs: [
      { q: 'Do you cover both Festival of Speed and Revival?', a: 'Yes. We provide chauffeur services for both Goodwood events, plus the Qatar Goodwood Festival.' },
      { q: 'Can you accommodate car enthusiast groups?', a: 'Absolutely. We can coordinate multiple vehicles for groups travelling together.' },
    ],
    pricingKey: 'goodwood',
    relatedLinks: [
      { title: 'Royal Ascot Chauffeur', href: '/royal-ascot-chauffeur', description: 'Another premier event.' },
      { title: 'Range Rover', href: '/range-rover-chauffeur', description: 'Ideal for country estate visits.' },
      { title: 'Chauffeur Surrey', href: '/chauffeur-surrey', description: 'Service across Surrey and Sussex.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Group coordination.' },
    ],
  },
  'chelsea-flower-show': {
    name: 'Chelsea Flower Show',
    slug: 'chelsea-flower-show',
    venue: 'Royal Hospital Chelsea',
    venueAddress: 'Royal Hospital Road, London SW3 4SR',
    dates: 'May (5 days)',
    metaTitle: 'Chelsea Flower Show Chauffeur | Event Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to RHS Chelsea Flower Show. Luxury transfers to Royal Hospital Chelsea with drop-off and collection.',
    heroTagline: 'Chelsea Flower Show',
    heroDescription: 'Effortless arrival at the RHS Chelsea Flower Show. Drop-off at the Royal Hospital gates and collection when you are ready.',
    contentTitle: 'Garden',
    contentParagraphs: [
      'The Chelsea Flower Show is one of London\'s most anticipated events, and the roads around SW3 are at their busiest. Our chauffeurs know the approach routes and the designated drop-off points.',
      'We drop you at the entrance, handle the parking, and return to collect you at an agreed time — or wait nearby for a flexible departure.',
    ],
    logistics: [
      'Drop-off at Royal Hospital Road entrance',
      'Collection at agreed time or on-demand',
      'Alternative approach via Embankment if Chelsea Bridge is congested',
      'Parking handled by chauffeur',
    ],
    faqs: [
      { q: 'Where do you drop off for the Flower Show?', a: 'At the Royal Hospital Road entrance, or the Bull Ring Gate depending on your ticket type.' },
      { q: 'Do you wait or return for collection?', a: 'Both options are available. We can wait nearby or return at a pre-agreed time.' },
    ],
    pricingKey: 'chelsea-flower-show',
    relatedLinks: [
      { title: 'Chauffeur Chelsea', href: '/chauffeur-chelsea', description: 'Year-round Chelsea service.' },
      { title: 'Chauffeur Kensington', href: '/chauffeur-kensington', description: 'Neighbouring Kensington.' },
      { title: 'Mercedes E-Class', href: '/mercedes-e-class-chauffeur', description: 'Comfortable and discreet.' },
      { title: 'By the Hour', href: '/chauffeur-hire-by-the-hour', description: 'Flexible hourly hire.' },
    ],
  },
  'farnborough-airshow': {
    name: 'Farnborough International Airshow',
    slug: 'farnborough-airshow',
    venue: 'Farnborough Airport',
    venueAddress: 'FAST, Trenchard House, Farnborough GU14 6XA',
    dates: 'July (biennial, trade week + public weekend)',
    metaTitle: 'Farnborough Airshow Chauffeur | Event Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to Farnborough International Airshow. Luxury transfers from London for trade days and public weekend.',
    heroTagline: 'Farnborough Airshow',
    heroDescription: 'Executive transfers to Farnborough International Airshow. Trade week and public weekend packages available.',
    contentTitle: 'Aviation',
    contentParagraphs: [
      'The Farnborough International Airshow is the aviation industry\'s flagship event. Our chauffeurs provide executive transfers for delegates, exhibitors, and VIP guests.',
      'We are already specialists in Farnborough Airport transfers, so the Airshow is home territory. We know the access roads, the security checkpoints, and the best approach routes.',
    ],
    logistics: [
      'Approximately 45-60 minutes from Central London via M3',
      'Trade badge holder drop-off at designated gates',
      'Public weekend drop-off at shuttle bus points',
      'Chauffeur waits or returns at agreed time',
    ],
    faqs: [
      { q: 'Can you access the trade entrance?', a: 'We drop off at the designated trade entrance. Your badge determines which gate we approach.' },
      { q: 'Do you cover the public weekend?', a: 'Yes. We provide transfers for both the trade week and the public weekend.' },
    ],
    pricingKey: 'farnborough-airshow',
    relatedLinks: [
      { title: 'Farnborough Airport', href: '/farnborough-chauffeur', description: 'Year-round private jet transfers.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Multi-vehicle group coordination.' },
      { title: 'Range Rover', href: '/range-rover-chauffeur', description: 'Spacious and commanding.' },
      { title: 'Goodwood Chauffeur', href: '/goodwood-chauffeur', description: 'Another motorsport/aviation event.' },
    ],
  },
  'bafta': {
    name: 'BAFTA Awards',
    slug: 'bafta',
    venue: 'Southbank Centre / Royal Festival Hall',
    venueAddress: 'Belvedere Road, London SE1 8XX',
    dates: 'February',
    metaTitle: 'BAFTA Chauffeur | Awards Night Transport | Eugene Chauffeurs',
    metaDescription: 'Chauffeur service to the BAFTA Awards. Red-carpet arrivals at the Royal Festival Hall with discreet, professional transport.',
    heroTagline: 'BAFTA',
    heroDescription: 'Red-carpet arrivals and discreet departures. Evening chauffeur service for the BAFTA Awards at the Royal Festival Hall.',
    contentTitle: 'Awards',
    contentParagraphs: [
      'The BAFTA Awards demand a vehicle and chauffeur that match the occasion. Our fleet of Mercedes S-Class and Rolls-Royce Ghost vehicles provide the perfect backdrop for your arrival.',
      'We handle the approach to the Southbank Centre, coordinate with event security for the red carpet, and wait discreetly for your departure — however late the after-party runs.',
    ],
    logistics: [
      'Drop-off coordinated with event security at red carpet entrance',
      'Chauffeur waits nearby for the duration of the ceremony and after-party',
      'Late-night return (typically 1-3am)',
      'Vehicle choice critical — S-Class or Rolls-Royce recommended',
    ],
    faqs: [
      { q: 'Can you coordinate a red-carpet arrival?', a: 'Yes. We work with the event organisers to time your arrival at the red carpet entrance.' },
      { q: 'How late can the chauffeur wait?', a: 'As late as needed. BAFTA after-parties often run until the early hours — we will be waiting.' },
    ],
    pricingKey: 'bafta',
    relatedLinks: [
      { title: 'Rolls-Royce Ghost', href: '/rolls-royce-chauffeur', description: 'The ultimate red-carpet arrival.' },
      { title: 'Mercedes S-Class', href: '/mercedes-s-class-chauffeur', description: 'Elegant and discreet.' },
      { title: 'Chauffeur Westminster', href: '/chauffeur-westminster', description: 'Service near the Southbank.' },
      { title: 'Corporate Events', href: '/corporate-event-chauffeur', description: 'Multi-vehicle coordination.' },
    ],
  },
};

export function getAllEvents() {
  return Object.values(events).map(e => e.slug);
}
