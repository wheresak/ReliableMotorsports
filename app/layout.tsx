import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '../lib/siteConfig';

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.description,
    siteName: siteConfig.siteName,
    type: 'website',
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteName,
    description: siteConfig.description,
  },
};

import { PageShell } from '../components/PageShell';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
