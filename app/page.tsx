import { Metadata } from 'next';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import WhyMetaZynx from '@/components/WhyMetaZynx';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'MetaZynx | 360° Performance Marketing Agency',
  description: 'MetaZynx delivers 360° performance marketing — SEO, Paid Ads, Creative, Web Development, ORM and Influencer. No contracts. Results in 90 days.',
  alternates: { canonical: 'https://www.metazynx.com' },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] flex flex-col">
      <Hero />
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
