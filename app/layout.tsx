import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';
import PageTransition from '@/components/PageTransition';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.metazynx.com'),
  title: 'Metazynx | High-Performance Tech Agency',
  description: 'Metazynx transforms complex technical challenges into scalable, high-performance software that drives measurable ROI and market leadership.',
  keywords: 'tech agency, software development, high-performance software, digital assets, Metazynx',
  authors: [{ name: 'Metazynx' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Metazynx | Engineering Digital Dominance',
    description: 'Precision Engineering for High-ROI Tech.',
    type: 'website',
    url: 'https://www.metazynx.com/',
    siteName: 'Metazynx',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Metazynx - High-Performance Tech Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Metazynx',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Metazynx",
    "description": "High-Performance Tech Agency",
    "url": "https://www.metazynx.com",
    "telephone": "+1-800-555-0199",
    "email": "hello@metazynx.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco"
    },
    "sameAs": [
      "https://linkedin.com/company/metazynx",
      "https://twitter.com/metazynx"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 antialiased transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <CookieConsent />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
