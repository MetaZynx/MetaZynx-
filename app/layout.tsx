import type { Metadata } from 'next';
import { Syne, DM_Sans, Bebas_Neue } from 'next/font/google';
import './globals.css';
import PageTransition from '@/components/PageTransition';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.metazynx.com'),
  title: 'MetaZynx | 360° Performance Marketing Agency',
  description: 'MetaZynx is a premier 360° performance marketing agency. We deliver measurable growth through SEO, Meta Ads, Google Ads, influencer marketing, ORM, web development and graphic design for high-growth brands.',
  keywords: 'performance marketing agency, 360 degree digital marketing, Meta ads agency, Google ads agency, SEO agency, ORM agency, influencer marketing agency, MetaZynx',
  authors: [{ name: 'MetaZynx' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'MetaZynx | Performance Without Limits',
    description: '360° digital marketing agency delivering measurable results for ambitious brands.',
    type: 'website',
    url: 'https://www.metazynx.com/',
    siteName: 'MetaZynx',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MetaZynx - 360° Performance Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MetaZynx',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "MetaZynx",
    "description": "360° Performance Marketing Agency",
    "url": "https://www.metazynx.com",
    "telephone": "+91-6026767767",
    "email": "info@metazynx.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chandigarh"
    },
    "sameAs": [
      "https://in.linkedin.com/company/metazynx",
      "https://www.instagram.com/metazynx"
    ]
  };

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-primary-bg text-primary-text antialiased" suppressHydrationWarning>
        <PageTransition>
          {children}
        </PageTransition>
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
