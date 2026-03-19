import { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import WhyMetaZynx from '@/components/WhyMetaZynx';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Best Performance Marketing Agency in Chandigarh | MetaZynx',
  description: 'MetaZynx is a 360° performance marketing agency based in Chandigarh, serving brands across India. SEO, Meta Ads, Google Ads, Web Design & ORM. $10M+ revenue generated. Free audit — no contracts.',
  alternates: { canonical: 'https://www.metazynx.com' },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] flex flex-col">
      <Hero />
      <TrustBadges />
      <SocialProof />
      <Services />
      <WhyMetaZynx />
      <Process />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
}
