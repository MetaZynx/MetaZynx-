import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';
import PageTransition from '@/components/PageTransition';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.metazynx.com'),
  title: 'MetaZynx | 360° Performance Marketing Agency',
  description: 'MetaZynx is a 360° performance marketing agency delivering SEO, Paid Ads, Creative Design, Web Development, ORM and Influencer Marketing. Results in 90 days. No long-term contracts.',
  keywords: 'performance marketing agency, SEO agency, Meta Ads, Google Ads, digital marketing, ORM, influencer marketing, MetaZynx, Chandigarh',
  authors: [{ name: 'MetaZynx' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'MetaZynx | 360° Performance Marketing Agency',
    description: "We Don't Just Run Campaigns. We Build Revenue. SEO, Paid Ads, Creative, Development, ORM & Influencer.",
    type: 'website',
    url: 'https://www.metazynx.com/',
    siteName: 'MetaZynx',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MetaZynx - 360° Performance Marketing Agency' }],
  },
  twitter: { card: 'summary_large_image', site: '@MetaZynx' },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MetaZynx",
    "description": "360° Performance Marketing Agency",
    "url": "https://www.metazynx.com",
    "telephone": "+91-6026767767",
    "email": "info@metazynx.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Chandigarh", "addressCountry": "IN" },
    "founder": { "@type": "Person", "name": "Divyam Bajaj" },
    "sameAs": ["https://in.linkedin.com/company/metazynx", "https://www.instagram.com/metazynx/"]
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans bg-[#FAFAF8] text-[#0D0D0D] antialiased" suppressHydrationWarning>
        <>
          <ScrollProgress />
          <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <CookieConsent />
          <WhatsAppButton />
        </ThemeProvider>
        </>
      </body>
    </html>
  );
}
