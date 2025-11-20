export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string; // HTML content
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "definitive-guide-london-chauffeur-services",
    title: "The Definitive Guide to London's Top Chauffeur Services",
    description: "Discover what separates a standard car service from a true luxury chauffeur experience in London. From fleet quality to chauffeur etiquette.",
    date: "2025-11-20",
    image: "/business.png",
    content: `
      <h2>Defining Luxury in London Transport</h2>
      <p>London is a global hub for business and luxury tourism, and the demand for high-end transportation reflects this status. But with so many operators, how do you distinguish the best from the rest?</p>
      
      <h3>1. The Fleet</h3>
      <p>Top-tier services don't just offer "nice cars." They offer the latest models of the Mercedes-Benz S-Class, V-Class, and Range Rover Autobiography. Vehicles should be less than 3 years old, immaculate, and equipped with amenities like Wi-Fi and bottled water.</p>
      
      <h3>2. The Chauffeur</h3>
      <p>A driver gets you from A to B. A chauffeur provides a service. This includes:</p>
      <ul>
        <li><strong>Impeccable Presentation:</strong> Dark suit, tie, and polished shoes.</li>
        <li><strong>Discretion:</strong> What happens in the car, stays in the car.</li>
        <li><strong>Route Knowledge:</strong> Knowing the backstreets of Mayfair to avoid traffic without relying solely on GPS.</li>
      </ul>

      <h3>3. The Service</h3>
      <p>Look for companies that offer flight tracking, meet & greet services inside the terminal, and flexible booking terms. Eugene Chauffeurs prides itself on offering 60 minutes of complimentary waiting time at airports, ensuring a stress-free arrival.</p>
    `
  },
  {
    slug: "luton-airport-terminal-guide",
    title: "Luton Airport Terminal Guide for Private Transfers",
    description: "Navigating Luton Airport (LTN) for private jet and commercial chauffeur transfers. Meeting points, terminals, and tips.",
    date: "2025-11-18",
    image: "/airport svc.png",
    content: `
      <h2>Navigating London Luton Airport (LTN)</h2>
      <p>Luton Airport is a key gateway for both commercial flights and private aviation. Knowing where to meet your chauffeur can save valuable time.</p>
      
      <h3>Commercial Terminal</h3>
      <p>For commercial arrivals, the standard meeting point is in the Arrivals Hall. Your chauffeur will be holding a nameboard. Due to ongoing construction and layout changes at Luton, it's crucial to have your chauffeur's contact number handy.</p>
      
      <h3>Private Jet Terminals (FBOs)</h3>
      <p>Luton is the UK's busiest airport for private jets. There are two main FBOs (Fixed Base Operators):</p>
      <ul>
        <li><strong>Signature Flight Support:</strong> Located on the south side of the airport. Chauffeurs can often drive directly to the aircraft steps for a seamless transfer.</li>
        <li><strong>Harrods Aviation:</strong> Also offers premium handling. Ensure your tail number is provided to your chauffeur company for accurate tracking.</li>
      </ul>
      
      <h3>Travel Time to Central London</h3>
      <p>Luton is approximately 35 miles north of Central London. Allow 60-90 minutes for the journey, depending on traffic on the M1.</p>
    `
  },
  {
    slug: "what-do-professional-chauffeurs-wear",
    title: "What Do Professional Chauffeurs Wear?",
    description: "The dress code of a professional chauffeur is a hallmark of the trade. Learn about the standards of attire in the luxury transport industry.",
    date: "2025-11-15",
    image: "/event.png",
    content: `
      <h2>The Uniform of Excellence</h2>
      <p>First impressions count. In the chauffeur industry, the driver's attire is as important as the vehicle's cleanliness. It signals professionalism, respect, and discipline.</p>
      
      <h3>Standard Attire</h3>
      <p>The industry standard for a professional chauffeur in London includes:</p>
      <ul>
        <li><strong>Dark Suit:</strong> Typically black, dark blue, or charcoal. Tailored and well-fitting.</li>
        <li><strong>White Shirt:</strong> Crisp, ironed, and clean.</li>
        <li><strong>Tie:</strong> Conservative design, usually matching the suit or a solid dark color.</li>
        <li><strong>Polished Shoes:</strong> Black leather formal shoes.</li>
      </ul>
      
      <h3>Why It Matters</h3>
      <p>For corporate clients and VIPs, the chauffeur is an extension of their own image. Whether arriving at a red carpet event or a board meeting, the chauffeur's appearance reflects on the passenger. At Eugene Chauffeurs, we adhere to the strictest grooming standards to ensure you always arrive in style.</p>
    `
  }
];