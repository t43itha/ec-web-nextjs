// Centralized landing page data for SSG
export const cities = {
  london: {
    name: "London",
    region: "Greater London",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    areas: [
      "Westminster", "Camden", "Greenwich", "Kensington", "Chelsea",
      "Shoreditch", "Canary Wharf", "Covent Garden", "Mayfair", "Soho"
    ],
    airports: ["Heathrow", "Gatwick", "Stansted", "Luton", "City Airport"],
    description: "Premium chauffeur services across London and Greater London area"
  },
  manchester: {
    name: "Manchester",
    region: "Greater Manchester",
    coordinates: { lat: 53.4808, lng: -2.2426 },
    areas: [
      "City Centre", "Salford", "Trafford", "Stockport", "Oldham",
      "Rochdale", "Bolton", "Bury", "Wigan", "Tameside"
    ],
    airports: ["Manchester Airport"],
    description: "Luxury transportation services throughout Manchester and surrounding areas"
  },
  birmingham: {
    name: "Birmingham",
    region: "West Midlands",
    coordinates: { lat: 52.4862, lng: -1.8904 },
    areas: [
      "City Centre", "Aston", "Edgbaston", "Selly Oak", "Handsworth",
      "Kings Heath", "Moseley", "Harborne", "Quinton", "Northfield"
    ],
    airports: ["Birmingham Airport", "East Midlands Airport"],
    description: "Professional chauffeur services across Birmingham and the West Midlands"
  }
};

export const services = {
  airport: {
    name: "Airport Transfer",
    title: "Airport Transfer Service",
    description: "Reliable airport transfers with professional chauffeurs and luxury vehicles",
    keywords: "airport transfer, chauffeur service, luxury transport, airport taxi",
    hero_image: "/airport svc.png",
    service_description: "Professional airport transfer service with flight monitoring and meet & greet",
    features: [
      "Real-time flight tracking",
      "Meet & greet service",
      "Luggage assistance",
      "24/7 availability",
      "Fixed pricing",
      "Luxury vehicles"
    ],
    faqs: [
      {
        question: "How early should I book my airport transfer?",
        answer: "We recommend booking at least 24 hours in advance, though we can accommodate last-minute bookings subject to availability."
      },
      {
        question: "Do you monitor flight delays?",
        answer: "Yes, we track all flights in real-time and adjust pickup times accordingly at no extra charge."
      },
      {
        question: "What if my flight is cancelled?",
        answer: "We offer free cancellation for flight cancellations. Simply notify us as soon as possible."
      }
    ]
  },
  business: {
    name: "Business Travel",
    title: "Corporate Chauffeur Service",
    description: "Executive chauffeur services for business professionals and corporate clients",
    keywords: "business travel, corporate chauffeur, executive transport, company car service",
    hero_image: "/business.png",
    service_description: "Professional corporate transportation with discretion and reliability",
    features: [
      "Corporate accounts",
      "Monthly billing",
      "Priority booking",
      "Executive vehicles",
      "Experienced chauffeurs",
      "Confidentiality assured"
    ],
    faqs: [
      {
        question: "Do you offer corporate accounts?",
        answer: "Yes, we provide corporate accounts with monthly billing and dedicated account management."
      },
      {
        question: "Can you handle multiple executives?",
        answer: "Absolutely. We can coordinate multiple vehicles for your entire team."
      },
      {
        question: "What about international travel?",
        answer: "We have partnerships worldwide to ensure seamless service wherever you travel."
      }
    ]
  },
  event: {
    name: "Event Transportation",
    title: "Event Chauffeur Service",
    description: "Luxury chauffeur services for weddings, galas, and special events",
    keywords: "event transport, wedding car, gala chauffeur, special occasion transport",
    hero_image: "/event.png",
    service_description: "Make your special occasion memorable with our luxury chauffeur service",
    features: [
      "Red carpet service",
      "Special occasion vehicles",
      "Professional chauffeurs",
      "Flexible timing",
      "Group coordination",
      "Champagne service"
    ],
    faqs: [
      {
        question: "Can you decorate the vehicle for weddings?",
        answer: "Yes, we can arrange decorations according to your preferences and theme."
      },
      {
        question: "Do you provide transport for guests?",
        answer: "We can coordinate multiple vehicles for your entire guest list."
      },
      {
        question: "What about waiting time during events?",
        answer: "Our chauffeurs will wait as long as needed to ensure you're never stranded."
      }
    ]
  }
};

export const stadiums = {
  "tottenham-stadium": {
    name: "Tottenham Hotspur Stadium",
    team: "Tottenham Hotspur",
    capacity: "62,850",
    address: "782 High Rd, Tottenham, London N17 0BX",
    coordinates: { lat: 51.6042, lng: -0.0661 },
    nearby_areas: ["Tottenham", "Enfield", "Wood Green", "Edmonton"],
    events: ["Premier League", "Champions League", "NFL", "Concerts"],
    transport_tips: "Avoid match day traffic with our experienced chauffeurs who know the best routes",
    image: "/tottenham_crest.png"
  },
  "stamford-bridge": {
    name: "Stamford Bridge",
    team: "Chelsea FC",
    capacity: "40,341",
    address: "Fulham Rd, London SW6 1HS",
    coordinates: { lat: 51.4816, lng: -0.1910 },
    nearby_areas: ["Chelsea", "Fulham", "Kensington", "Hammersmith"],
    events: ["Premier League", "Champions League", "Cup Matches"],
    transport_tips: "Navigate the busy Fulham Road with ease using our premium chauffeur service",
    image: "/chelsea_crest.png"
  }
};

// Generate all possible combinations for static params
export function getAllServiceCityCombinations() {
  const combinations: { service: string; city: string }[] = [];
  
  Object.keys(services).forEach(service => {
    Object.keys(cities).forEach(city => {
      combinations.push({ service, city });
    });
  });
  
  return combinations;
}

export function getAllStadiums() {
  return Object.keys(stadiums).map(venue => ({ venue }));
}

// Helper function to generate SEO metadata
export function generateLandingPageMetadata(service: string, city: string) {
  const serviceData = services[service as keyof typeof services];
  const cityData = cities[city as keyof typeof cities];
  
  if (!serviceData || !cityData) {
    return null;
  }
  
  const title = `${serviceData.name} in ${cityData.name} | Eugene Chauffeurs`;
  const description = `${serviceData.description} in ${cityData.name}. Professional chauffeurs, luxury vehicles, 24/7 service across ${cityData.region}.`;
  
  return {
    title,
    description,
    keywords: `${serviceData.keywords}, ${cityData.name.toLowerCase()}, ${cityData.region.toLowerCase()}`,
    openGraph: {
      title,
      description,
      images: [serviceData.hero_image],
    },
    alternates: {
      canonical: `/landing/${service}/${city}`
    }
  };
}

export function generateStadiumMetadata(venue: string) {
  const stadium = stadiums[venue as keyof typeof stadiums];
  
  if (!stadium) {
    return null;
  }
  
  const title = `${stadium.name} Chauffeur Service | Eugene Chauffeurs`;
  const description = `Premium chauffeur service to ${stadium.name}. Avoid match day traffic and arrive in style for ${stadium.team} games and events.`;
  
  return {
    title,
    description,
    keywords: `${stadium.name}, ${stadium.team}, stadium transport, match day chauffeur, luxury transport`,
    openGraph: {
      title,
      description,
      images: [stadium.image],
    },
    alternates: {
      canonical: `/landing/stadium/${venue}`
    }
  };
}