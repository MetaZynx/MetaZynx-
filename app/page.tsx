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
  title: 'Metazynx | High-Performance Tech Agency',
  description: 'Metazynx transforms complex technical challenges into scalable, high-performance software that drives measurable ROI and market leadership.',
  alternates: {
    canonical: 'https://www.metazynx.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
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
