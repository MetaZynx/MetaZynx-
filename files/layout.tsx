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
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const CallButton = dynamic(() => import('@/components/CallButton'), { ssr: false });

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.metazynx.com'),
  title: { default: 'MetaZynx | 360° Performance Marketing Agency', template: '%s | MetaZynx' },
  description: 'MetaZynx is a 360° performance marketing agency delivering SEO, Paid Ads, Creative Design, Web Development, ORM and Influencer Marketing. Measurable results in 90 days. No long-term contracts.',
  keywords: 'performance marketing agency, SEO agency India, Meta Ads agency, Google Ads management, digital marketing Chandigarh, ORM agency, influencer marketing, MetaZynx, Divyam Bajaj',
  authors: [{ name: 'MetaZynx', url: 'https://www.metazynx.com' }],
  creator: 'MetaZynx',
  publisher: 'MetaZynx',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/icon-192.png', sizes: '192x192' },
      { rel: 'icon', url: '/icon-512.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: 'MetaZynx | 360° Performance Marketing Agency',
    description: "We Don't Just Run Campaigns. We Build Revenue. SEO, Paid Ads, Creative, Development, ORM & Influencer — all under one roof.",
    type: 'website',
    url: 'https://www.metazynx.com/',
    siteName: 'MetaZynx',
    locale: 'en_IN',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MetaZynx - 360° Performance Marketing Agency' }],
  },
  twitter: { card: 'summary_large_image', site: '@MetaZynx', creator: '@MetaZynx' },
  alternates: { canonical: 'https://www.metazynx.com' },
  verification: { google: 'add-your-google-search-console-verification-here' },
  category: 'marketing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MetaZynx",
    "description": "360° Performance Marketing Agency — SEO, Paid Ads, Creative Design, Web Development, ORM and Influencer Marketing",
    "url": "https://www.metazynx.com",
    "logo": "https://www.metazynx.com/icon-512.png",
    "telephone": "+91-6026767767",
    "email": "info@metazynx.com",
    "priceRange": "$$",
    "address": { "@type": "PostalAddress", "addressLocality": "Chandigarh", "addressRegion": "Punjab", "addressCountry": "IN" },
    "geo": { "@type": "GeoCoordinates", "latitude": "30.7333", "longitude": "76.7794" },
    "openingHours": ["Mo-Sa 09:00-18:00"],
    "founder": { "@type": "Person", "name": "Divyam Bajaj", "url": "https://www.linkedin.com/in/divyambajaj333" },
    "sameAs": [
      "https://in.linkedin.com/company/metazynx",
      "https://www.instagram.com/metazynx/",
      "https://twitter.com/MetaZynx",
      "https://www.youtube.com/@MetaZynx"
    ],
    "serviceType": ["SEO", "Paid Advertising", "Social Media Marketing", "Web Development", "Influencer Marketing", "ORM"],
    "areaServed": { "@type": "Country", "name": "India" }
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <style>{`@media (hover: hover) { * { cursor: none !important; } }`}</style>
      </head>
      <body className="font-sans bg-[#FAFAF8] text-[#0D0D0D] antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <CookieConsent />
          <WhatsAppButton />
          <CallButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
