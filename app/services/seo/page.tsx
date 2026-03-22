import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO Services in Chandigarh & India | MetaZynx',
  description: 'MetaZynx offers expert SEO services in Chandigarh and across India. Technical SEO, on-page optimisation, link building & content strategy. Get found on Google. Free SEO audit.',
  keywords: 'SEO services Chandigarh, SEO agency India, search engine optimisation Chandigarh, SEO company India, local SEO Chandigarh, technical SEO India, SEO agency Chandigarh',
  alternates: { canonical: 'https://www.metazynx.com/services/seo' },
  openGraph: {
    title: 'SEO Services in Chandigarh & India | MetaZynx',
    description: 'Expert SEO services that rank your website and drive organic leads. Technical SEO, content strategy, and link building. Based in Chandigarh, serving brands across India.',
    url: 'https://www.metazynx.com/services/seo',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SEO Services Chandigarh India — MetaZynx' }],
  },
};

export default function Page() {
  const deliverables = [{ title: "Technical SEO Audit", description: "Comprehensive analysis to ensure your website is fully crawlable and indexable." },
    { title: "Keyword Strategy & Mapping", description: "Identifying high-intent search terms to target the right audience at the right time." },
    { title: "On-Page Optimisation", description: "Optimising metadata, headings, and content structure for maximum relevance." },
    { title: "Link Building Campaigns", description: "Acquiring high-quality backlinks to boost your domain authority and trust." },
    { title: "Content Strategy & Creation", description: "Crafting engaging, SEO-friendly content that resonates with your target market." },
    { title: "Google Business Profile Management", description: "Optimising your local presence to capture high-converting local search traffic." }];
  const whyCards = [{ title: "Data-First Approach", description: "Every keyword decision is backed by search volume, intent and competition data" },
    { title: "Full Funnel Content", description: "From awareness to conversion, we map content to every stage of the buyer journey" },
    { title: "Transparent Reporting", description: "Monthly reports showing real rankings, traffic and revenue impact" }];
  const stats = [{ value: "+312%", label: "Average Traffic Growth" },
    { value: "45+", label: "Keywords in Top 3" },
    { value: "6 Months", label: "To Significant Results" }];
  const faqs = [{ q: "How much do SEO services cost in India?", a: "Our SEO services start from ₹15,000/month for local SEO and ₹25,000/month for full-service SEO including technical, content, and link building. We offer flexible month-to-month packages with no long-term contracts. Book a free audit to get a tailored recommendation." },
    { q: "How long does SEO take to show results in India?", a: "You can typically expect to see initial movement in rankings within 60-90 days for lower competition keywords. Significant organic traffic growth usually occurs between months 4-6. SEO is a long-term investment — the results compound over time and continue delivering ROI long after paid ads stop." },
    { q: "What is included in your SEO service?", a: "Our full-service SEO includes technical SEO audit and fixes, keyword research and mapping, on-page optimisation, content creation, link building, Google Business Profile management, and monthly reporting. Every package is customised based on your industry and goals." },
    { q: "Do you offer local SEO for businesses in Chandigarh and Mohali?", a: "Yes — local SEO is one of our core specialisations. We optimise your Google Business Profile, build local citations, target location-specific keywords like 'digital marketing agency Chandigarh', and implement local schema markup to help you dominate local search results in the Tricity area and across India." },
    { q: "Can you guarantee first page rankings on Google?", a: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is constantly evolving and no one can control its decisions. What we guarantee is a data-driven strategy, complete transparency in our work, and measurable improvement in your organic visibility and traffic over time." }];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <section className="w-full bg-[#1B2D5B] min-h-[60vh] flex flex-col justify-center pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <span className="block text-[#E8440A] uppercase tracking-[3px] font-sans font-bold text-sm mb-6">SEARCH ENGINE OPTIMISATION</span>
          <h1 className="text-white font-display font-extrabold text-[40px] md:text-[56px] leading-[1.1] mb-6">SEO & Content That Compounds</h1>
          <p className="text-white/75 font-sans font-light text-[18px] md:text-[20px] max-w-[600px] leading-[1.6] mb-10">Dominate search rankings with data-driven SEO strategies and high-converting content that drives organic growth month after month. Serving businesses in Chandigarh and across India.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#E8440A] text-white font-sans font-bold text-[16px] px-8 py-4 rounded-md hover:scale-[1.03] transition-transform duration-200">Get Your Free SEO Audit →</Link>
        </div>
      </section>

      <section className="w-full bg-[#FAFAF8] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-[#1B2D5B] font-display font-bold text-[36px] md:text-[48px] mb-16">What We Deliver</h2>
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

      <section className="w-full bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-[#1B2D5B] font-display font-bold text-[36px] md:text-[48px] text-center mb-16">Why MetaZynx?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card, i) => (
              <div key={i} className="bg-white border border-[#1B2D5B] rounded-[12px] p-8 flex flex-col">
                <span className="text-[#E8440A] font-display font-bold text-[32px] mb-6">0{i + 1}</span>
                <h3 className="text-[#1B2D5B] font-sans font-bold text-[22px] mb-4">{card.title}</h3>
                <p className="text-[#1B2D5B]/80 font-sans text-[16px] leading-[1.6]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1B2D5B] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[#E8440A] font-display font-extrabold text-[48px] md:text-[56px] leading-none mb-4">{stat.value}</span>
                <span className="text-white font-sans font-light text-[14px] uppercase tracking-[2px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F2EFE9] py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#1B2D5B] font-display font-bold text-[36px] md:text-[44px] mb-12">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[10px] p-8 border border-[#E0DDD6]">
                <h3 className="text-[#1B2D5B] font-sans font-bold text-[18px] mb-3">{faq.q}</h3>
                <p className="text-[#4A4A4A] font-sans text-[16px] leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAFAF8] py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#1B2D5B] font-display font-extrabold text-[40px] md:text-[56px] mb-6">Ready to Rank on Google?</h2>
          <p className="text-[#1B2D5B]/70 font-sans font-light text-[18px] md:text-[20px] mb-10">Let's build an SEO strategy that drives organic leads for your business in Chandigarh and across India.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#E8440A] text-white font-sans font-bold text-[16px] px-8 py-4 rounded-md hover:scale-[1.03] transition-transform duration-200">Book Your Free SEO Audit Today →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
