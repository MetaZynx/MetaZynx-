import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO & Content | MetaZynx',
  description: 'Dominate search rankings with data-driven strategies and high-converting content that drives organic growth month after month.',
  alternates: {
    canonical: 'https://www.metazynx.com/services/seo',
  },
};

export default function SEOPage() {
  const deliverables = [
    { title: 'Technical SEO Audit', description: 'Comprehensive analysis to ensure your website is fully crawlable and indexable.' },
    { title: 'Keyword Strategy & Mapping', description: 'Identifying high-intent search terms to target the right audience at the right time.' },
    { title: 'On-Page Optimisation', description: 'Optimising metadata, headings, and content structure for maximum relevance.' },
    { title: 'Link Building Campaigns', description: 'Acquiring high-quality backlinks to boost your domain authority and trust.' },
    { title: 'Content Strategy & Creation', description: 'Crafting engaging, SEO-friendly content that resonates with your target market.' },
    { title: 'Google Business Profile Management', description: 'Optimising your local presence to capture high-converting local search traffic.' }
  ];

  const whyCards = [
    { title: 'Data-First Approach', description: 'Every keyword decision is backed by search volume, intent and competition data' },
    { title: 'Full Funnel Content', description: 'From awareness to conversion, we map content to every stage of the buyer journey' },
    { title: 'Transparent Reporting', description: 'Monthly reports showing real rankings, traffic and revenue impact' }
  ];

  const stats = [
    { value: '+312%', label: 'Average Traffic Growth' },
    { value: '45+', label: 'Keywords in Top 3' },
    { value: '6 Months', label: 'To Significant Results' }
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Section 1 — Hero */}
      <section className="w-full bg-[#1B2D5B] min-h-[60vh] flex flex-col justify-center pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <span className="block text-[#E8440A] uppercase tracking-[3px] font-sans font-bold text-sm mb-6">
            SEARCH ENGINE OPTIMISATION
          </span>
          <h1 className="text-white font-display font-extrabold text-[40px] md:text-[56px] leading-[1.1] mb-6">
            SEO & Content That Compounds
          </h1>
          <p className="text-white/75 font-sans font-light text-[18px] md:text-[20px] max-w-[600px] leading-[1.6] mb-10">
            Dominate search rankings with data-driven strategies and high-converting content that drives organic growth month after month.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-[#E8440A] text-white font-sans font-bold text-[16px] px-8 py-4 rounded-md hover:scale-[1.03] transition-transform duration-200"
          >
            Get Your Free Audit →
          </Link>
        </div>
      </section>

      {/* Section 2 — What We Deliver */}
      <section className="w-full bg-[#FAFAF8] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-[#1B2D5B] font-display font-bold text-[36px] md:text-[48px] mb-16">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="text-[#E8440A] shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-[#1B2D5B] font-sans font-bold text-[20px] mb-2">{item.title}</h3>
                  <p className="text-[#1B2D5B]/70 font-sans text-[16px] leading-[1.6]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Why MetaZynx */}
      <section className="w-full bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-[#1B2D5B] font-display font-bold text-[36px] md:text-[48px] text-center mb-16">
            Why MetaZynx?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card, i) => (
              <div key={i} className="bg-white border border-[#1B2D5B] rounded-[12px] p-8 flex flex-col">
                <span className="text-[#E8440A] font-display font-bold text-[32px] mb-6">
                  0{i + 1}
                </span>
                <h3 className="text-[#1B2D5B] font-sans font-bold text-[22px] mb-4">
                  {card.title}
                </h3>
                <p className="text-[#1B2D5B]/80 font-sans text-[16px] leading-[1.6]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Results Bar */}
      <section className="w-full bg-[#1B2D5B] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[#E8440A] font-display font-extrabold text-[48px] md:text-[56px] leading-none mb-4">
                  {stat.value}
                </span>
                <span className="text-white font-sans font-light text-[14px] uppercase tracking-[2px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Bottom CTA */}
      <section className="w-full bg-[#FAFAF8] py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#1B2D5B] font-display font-extrabold text-[40px] md:text-[56px] mb-6">
            Ready to Grow?
          </h2>
          <p className="text-[#1B2D5B]/70 font-sans font-light text-[18px] md:text-[20px] mb-10">
            Let&apos;s engineer a growth strategy tailored to your brand&apos;s unique goals.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-[#E8440A] text-white font-sans font-bold text-[16px] px-8 py-4 rounded-md hover:scale-[1.03] transition-transform duration-200"
          >
            Book Your Free Audit Today →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
