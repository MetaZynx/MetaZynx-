import { Metadata } from 'next';
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
    <main className="min-h-screen bg-primary-bg flex flex-col pt-20">
      
      
      {/* Hero Section */}
      <section className="bg-primary-bg py-24 px-6 md:px-12 text-center relative overflow-hidden border-b border-border-glass">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-6 block">
            [ Case Studies ]
          </span>
          <h1 className="font-sans font-black text-[56px] md:text-[80px] leading-[1.05] tracking-tighter text-primary-text mb-6">
            Results We&apos;re <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-text to-secondary-text">Proud Of</span>
          </h1>
          <p className="font-sans text-[20px] md:text-[24px] text-secondary-text max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just talk about growth. We engineer it. Explore how we&apos;ve helped ambitious brands dominate their markets.
          </p>
        </div>
      </section>

      {/* Interactive Grid */}
      <CaseStudiesGrid />

      {/* CTA Section */}
      <section className="py-24 bg-card-bg text-center px-6 border-t border-border-glass relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-action/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-sans font-black text-[36px] md:text-[48px] text-primary-text mb-8 tracking-tight">
            Your brand could be our next success story.
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center h-[60px] px-10 bg-primary-text text-primary-bg font-sans font-bold text-[15px] uppercase tracking-[1.5px] rounded-xl hover:bg-brand-action hover:text-white transition-all shadow-sm"
          >
            Start Your Growth Journey
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
