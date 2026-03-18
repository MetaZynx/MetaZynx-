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
  title: {
    default: 'Best Performance Marketing Agency in Chandigarh | MetaZynx',
    template: '%s | MetaZynx'
  },
  description: 'MetaZynx is a 360° performance marketing agency based in Chandigarh, serving brands across India. SEO, Meta Ads, Google Ads, Web Design & ORM. $10M+ revenue generated. Free audit — no contracts.',
  keywords: 'performance marketing agency Chandigarh, digital marketing agency India, SEO agency Chandigarh, Meta Ads agency India, Google Ads agency Chandigarh, web design agency India, ORM services India, MetaZynx',
  authors: [{ name: 'Divyam Bajaj', url: 'https://www.linkedin.com/in/divyambajaj333' }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Best Performance Marketing Agency in Chandigarh | MetaZynx',
    description: "MetaZynx is a 360° performance marketing agency based in Chandigarh, serving brands across India. We Don't Just Run Campaigns. We Build Revenue.",
    type: 'website',
    url: 'https://www.metazynx.com/',
    siteName: 'MetaZynx',
    locale: 'en_IN',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MetaZynx - Best Performance Marketing Agency in Chandigarh' }],
  },
  twitter: { card: 'summary_large_image', site: '@MetaZynx', creator: '@MetaZynx' },
  alternates: { canonical: 'https://www.metazynx.com/' },
  category: 'Digital Marketing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.metazynx.com/#organization",
        "name": "MetaZynx",
        "description": "360° Performance Marketing Agency based in Chandigarh, India. Specialising in SEO, Meta Ads, Google Ads, Web Design, Influencer Marketing and ORM.",
        "url": "https://www.metazynx.com",
        "logo": "https://www.metazynx.com/metazynx-logo.svg",
        "telephone": "+91-6026767767",
        "email": "info@metazynx.com",
        "foundingDate": "2022",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chandigarh",
          "addressRegion": "Chandigarh",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "30.7333",
          "longitude": "76.7794"
        },
        "areaServed": [
          { "@type": "City", "name": "Chandigarh" },
          { "@type": "City", "name": "Mohali" },
          { "@type": "City", "name": "Panchkula" },
          { "@type": "Country", "name": "India" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services", "url": "https://www.metazynx.com/services/seo" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta & Google Ads Management", "url": "https://www.metazynx.com/services/ads" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design & Development", "url": "https://www.metazynx.com/services/development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design", "url": "https://www.metazynx.com/services/design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer & UGC Marketing", "url": "https://www.metazynx.com/services/influencer" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Reputation Management", "url": "https://www.metazynx.com/services/orm" } }
          ]
        },
        "founder": {
          "@type": "Person",
          "name": "Divyam Bajaj",
          "jobTitle": "Founder & CEO",
          "url": "https://www.linkedin.com/in/divyambajaj333"
        },
        "sameAs": [
          "https://in.linkedin.com/company/metazynx",
          "https://www.instagram.com/metazynx/",
          "https://twitter.com/MetaZynx",
          "https://www.youtube.com/@MetaZynx"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "2",
          "bestRating": "5"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.metazynx.com/#website",
        "url": "https://www.metazynx.com",
        "name": "MetaZynx",
        "description": "360° Performance Marketing Agency — Chandigarh, India",
        "publisher": { "@id": "https://www.metazynx.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.metazynx.com/blog?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
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
