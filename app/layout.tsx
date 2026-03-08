import type { Metadata } from 'next';
import { Syne, DM_Sans, Bebas_Neue } from 'next/font/google';
import './globals.css';
import PageTransition from '@/components/PageTransition';

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
  title: 'MetaZynx | 360° Performance Marketing Agency',
  description: 'MetaZynx is a premier 360° performance marketing agency. We deliver measurable growth through SEO, Meta Ads, Google Ads, influencer marketing, ORM, web development and graphic design for high-growth brands.',
  keywords: 'performance marketing agency, 360 degree digital marketing, Meta ads agency, Google ads agency, SEO agency, ORM agency, influencer marketing agency, MetaZynx',
  openGraph: {
    title: 'MetaZynx | Performance Without Limits',
    description: '360° digital marketing agency delivering measurable results for ambitious brands.',
    type: 'website',
    url: 'https://www.metazynx.com/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${bebasNeue.variable}`}>
      <body className="font-sans bg-primary-bg text-primary-text antialiased" suppressHydrationWarning>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
