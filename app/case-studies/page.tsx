import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudiesGrid from '@/components/CaseStudiesGrid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies | Proven Results — MetaZynx',
  description: "Real results from real campaigns. Explore MetaZynx's case studies across SEO, paid media, influencer marketing and more.",
  alternates: {
    canonical: 'https://www.metazynx.com/case-studies',
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-navy pt-40 pb-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display font-extrabold text-[56px] md:text-[80px] leading-[1.1] tracking-[-2px] text-secondary-bg mb-6">
            Results We&apos;re Proud Of
          </h1>
          <p className="font-sans text-[20px] md:text-[24px] text-gray-300 max-w-2xl mx-auto">
            We don&apos;t just talk about growth. We engineer it. Explore how we&apos;ve helped ambitious brands dominate their markets.
          </p>
        </div>
      </section>

      {/* Interactive Grid */}
      <CaseStudiesGrid />

      {/* CTA Section */}
      <section className="py-24 bg-secondary-bg text-center px-6 border-t border-border-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-[36px] md:text-[48px] text-brand-navy mb-8 tracking-[-1px]">
            Your brand could be our next success story.
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center h-[60px] px-10 bg-accent-orange text-white font-sans font-bold text-[16px] uppercase tracking-[2px] rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-200 ease-out"
          >
            Start Your Growth Journey
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
