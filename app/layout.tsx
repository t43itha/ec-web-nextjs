import type { Metadata } from "next";
import { Italiana, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import OrganizationSchema from '@/app/components/OrganizationSchema';

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italiana'
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});

const BASE_URL = 'https://eugenechauffeurs.com';

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
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Eugene Chauffeurs - Luxury Chauffeur Service London',
    description: 'Premium chauffeur service in London offering luxury transportation for business, events, airport transfers, and special occasions.',
    url: BASE_URL,
    siteName: 'Eugene Chauffeurs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Eugene Chauffeurs - Luxury Chauffeur Service London',
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
    creator: '@eugenechauffeurs',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${italiana.variable} ${manrope.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
