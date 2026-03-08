import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import WhyMetaZynx from '@/components/WhyMetaZynx';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <WhyMetaZynx />
      <Process />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}
