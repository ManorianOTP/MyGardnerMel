import '@mantine/core/styles.css';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Rubik } from 'next/font/google';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { theme } from './theme';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: 'MyGardenerMel - Your Friendly Local Gardener in Norwich',
  description: 'Professional garden maintenance and landscaping services in Norwich, England. Experienced, reliable gardening services for your home.',
  keywords: ['gardening', 'landscaping', 'Norwich', 'garden maintenance', 'local gardener'],
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
  return (
    <html lang="en" className={rubik.variable} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
