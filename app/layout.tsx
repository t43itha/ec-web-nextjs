import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const cinzel = Cinzel({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel'
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: {
    default: "Eugene Chauffeurs - Luxury Chauffeur Service London",
    template: "%s | Eugene Chauffeurs"
  },
  description: "Premium chauffeur service in London offering luxury transportation for business, events, airport transfers, and special occasions. Professional drivers, luxury vehicles.",
  keywords: "chauffeur service, luxury transport, London chauffeur, airport transfer, executive travel, corporate transport",
  authors: [{ name: "Eugene Chauffeurs" }],
  creator: "Eugene Chauffeurs",
  publisher: "Eugene Chauffeurs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eugenechauffeurs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Eugene Chauffeurs - Luxury Chauffeur Service London',
    description: 'Premium chauffeur service in London offering luxury transportation for business, events, airport transfers, and special occasions.',
    url: 'https://eugenechauffeurs.com',
    siteName: 'Eugene Chauffeurs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eugene Chauffeurs - Luxury Chauffeur Service London',
    description: 'Premium chauffeur service in London offering luxury transportation for business, events, airport transfers, and special occasions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
