import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '215% Organic Traffic Growth for a B2B SaaS Brand | MetaZynx Case Study',
  description: 'Stuck on page 2 for high-intent bottom-of-funnel keywords despite having a strong product and decent domain authority.',
};

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="bg-brand-navy min-h-[50vh] pt-40 pb-24 px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <span className="inline-block bg-accent-orange text-white font-sans font-bold text-[12px] uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-6">
            SAAS • SEO
          </span>
          <h1 className="font-display font-extrabold text-[40px] md:text-[52px] leading-[1.1] text-white mb-8">
            215% Organic Traffic Growth for a B2B SaaS Brand
          </h1>
          <p className="font-sans text-[18px] md:text-[20px] text-white/75 max-w-3xl mb-12 leading-[1.6]">
            <span className="text-accent-orange font-bold">The Challenge:</span> Stuck on page 2 for high-intent bottom-of-funnel keywords despite having a strong product and decent domain authority.
          </p>
          
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="font-stats text-[56px] text-accent-orange leading-none mb-2">+215%</p>
              <p className="font-sans text-[16px] text-white font-medium">Traffic</p>
            </div>
            <div>
              <p className="font-stats text-[56px] text-accent-orange leading-none mb-2">45+</p>
              <p className="font-sans text-[16px] text-white font-medium">Top 3 Rankings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Challenge */}
      <section className="bg-primary-bg py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-[32px] md:text-[40px] text-brand-navy mb-8">
            The Challenge
          </h2>
          <div className="font-sans font-light text-[18px] text-secondary-text leading-[1.8] space-y-6">
            <p>
              The SaaS company had good content but it was unfocused — targeting too many broad keywords with no topical authority. Technical SEO issues were preventing Google from properly crawling and indexing key pages.
            </p>
            <p>
              Competitors were dominating the bottom-of-funnel terms that actually drove signups, leaving our client with traffic that didn&apos;t convert.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Our Approach */}
      <section className="bg-white py-24 px-6 md:px-12 border-y border-border-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-[32px] md:text-[40px] text-brand-navy mb-12">
            Our Approach
          </h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="font-stats text-[40px] text-accent-orange leading-none shrink-0">01</div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-brand-navy mb-3">Technical SEO Audit</h3>
                <p className="font-sans text-[16px] text-secondary-text leading-[1.7]">Full technical SEO audit — fixed 47 critical crawl errors.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="font-stats text-[40px] text-accent-orange leading-none shrink-0">02</div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-brand-navy mb-3">Topical Authority</h3>
                <p className="font-sans text-[16px] text-secondary-text leading-[1.7]">Built topical authority clusters around 6 core use cases.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="font-stats text-[40px] text-accent-orange leading-none shrink-0">03</div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-brand-navy mb-3">Content Optimization</h3>
                <p className="font-sans text-[16px] text-secondary-text leading-[1.7]">Rewrote and optimised 23 existing pages for target keywords.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="font-stats text-[40px] text-accent-orange leading-none shrink-0">04</div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-brand-navy mb-3">Link Building</h3>
                <p className="font-sans text-[16px] text-secondary-text leading-[1.7]">Launched systematic link building targeting SaaS industry publications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The Results */}
      <section className="bg-brand-navy py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-bold text-[32px] md:text-[40px] text-white mb-16">
            The Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className="font-stats text-[48px] text-accent-orange leading-none mb-3">+215%</p>
              <p className="font-sans text-[15px] text-white font-medium">Organic Traffic</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className="font-stats text-[48px] text-accent-orange leading-none mb-3">45+</p>
              <p className="font-sans text-[15px] text-white font-medium">Keywords in Top 3</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className="font-stats text-[48px] text-accent-orange leading-none mb-3">47</p>
              <p className="font-sans text-[15px] text-white font-medium">Technical Errors Fixed</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className="font-stats text-[48px] text-accent-orange leading-none mb-3">6</p>
              <p className="font-sans text-[15px] text-white font-medium">Month Timeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Bottom CTA */}
      <section className="bg-primary-bg py-32 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-[40px] md:text-[56px] text-brand-navy mb-10">
            Want results like these?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-accent-orange text-white font-sans font-bold text-[16px] uppercase tracking-[2px] px-10 py-5 rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-200 ease-out"
          >
            Book Your Free Audit &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
