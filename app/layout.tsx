import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Rubik } from 'next/font/google';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { theme } from './theme';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mygardenermel.com'),
  title: 'MyGardenerMel - Your Friendly Local Gardener in Norwich',
  description: 'Professional garden maintenance and landscaping services in Norwich, England. Experienced, reliable gardening services for your home.',
  keywords: ['gardening', 'landscaping', 'Norwich', 'garden maintenance', 'local gardener'],

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mygardenermel.com',
    title: 'MyGardenerMel - Your Friendly Local Gardener in Norwich',
    description: 'Professional garden maintenance and landscaping services in Norwich, England. Experienced, reliable gardening services for your home.',
    siteName: 'MyGardenerMel',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MyGardenerMel - Professional Gardening Services in Norwich',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'MyGardenerMel - Your Friendly Local Gardener in Norwich',
    description: 'Professional garden maintenance and landscaping services in Norwich, England.',
    images: ['/images/og-image.jpg'],
  },

  // Canonical URL
  alternates: {
    canonical: 'https://mygardenermel.com',
  },

  // Google Search Console Verification (add your verification code after setting up Search Console)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MyGardenerMel',
    description: 'Professional garden maintenance and landscaping services in Norwich, England',
    url: 'https://mygardenermel.com',
    telephone: '+447927491042',
    email: 'mygardenermel@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Norwich',
      addressRegion: 'England',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.6309',
      longitude: '1.2974',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '52.6309',
        longitude: '1.2974',
      },
      geoRadius: '20000',
    },
    priceRange: '££',
    image: 'https://mygardenermel.com/images/myrons_logo-modified.png',
    sameAs: [
      'https://www.instagram.com/my.gardener.mel/',
      'https://www.facebook.com/profile.php?id=61577685542601',
    ],
  };

  return (
    <html lang="en" className={rubik.variable} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
