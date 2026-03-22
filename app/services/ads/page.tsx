import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meta & Google Ads Agency in Chandigarh & India | MetaZynx',
  description: 'MetaZynx manages Meta Ads and Google Ads for brands across India. Certified specialists. Average 8.4x ROAS. No wasted spend. Free paid ads audit for Chandigarh & Indian businesses.',
  keywords: 'Meta Ads agency Chandigarh, Google Ads agency India, Facebook Ads Chandigarh, PPC agency India, paid advertising Chandigarh, Google Ads management India, Meta Ads India',
  alternates: { canonical: 'https://www.metazynx.com/services/ads' },
  openGraph: {
    title: 'Meta & Google Ads Agency in Chandigarh & India | MetaZynx',
    description: 'Certified Meta and Google Ads specialists. We manage paid campaigns that generate real revenue — not just clicks. Based in Chandigarh, serving brands across India.',
    url: 'https://www.metazynx.com/services/ads',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Meta & Google Ads Agency — MetaZynx' }],
  },
};

export default function AdsPage() {
  const deliverables = [
    { title: 'Meta Ads Strategy & Execution', description: 'End-to-end management of your Facebook and Instagram ad campaigns.' },
    { title: 'Google Search & Display Campaigns', description: 'Capturing high-intent search traffic and building brand awareness.' },
    { title: 'Campaign Structure & Audience Building', description: 'Creating scalable account structures and precise audience targeting.' },
    { title: 'Ad Creative Testing & Iteration', description: 'Continuous A/B testing to find winning creatives and scale them.' },
    { title: 'Retargeting & Lookalike Audiences', description: 'Re-engaging past visitors and finding new customers similar to your best ones.' },
    { title: 'Weekly ROAS Reporting', description: 'Transparent, weekly breakdowns of your return on ad spend and key metrics.' }
  ];

  const whyCards = [
    { title: 'Creative + Media Buying Together', description: "We don't separate strategy from execution. One team owns both." },
    { title: 'ROAS Obsessed', description: 'Every rupee of your budget is tracked, tested and optimised relentlessly' },
    { title: 'No Lock-In', description: 'Month-to-month with full transparency on spend and results' }
  ];

  const stats = [
    { value: '8.4x', label: 'Average ROAS' },
    { value: '-42%', label: 'Average CPA Reduction' },
    { value: '$285K', label: 'Monthly Ad Spend Managed' }
  ];

  const faqs = [
    { q: 'How much does Meta and Google Ads management cost in India?', a: 'Our paid ads management starts at a percentage of your monthly ad spend, with no lock-in contracts. We work with budgets from ₹30,000/month upwards. Book a free audit and we'll recommend the right structure for your budget.' },
    { q: 'What is a good ROAS for Meta Ads in India?', a: 'A good ROAS for Meta Ads in India typically ranges from 3x to 5x for e-commerce brands. Our campaigns average 8.4x ROAS. Factors like product margins, audience size, and creative quality all affect ROAS significantly.' },
    { q: 'How long before I see results from paid ads?', a: 'With Google Ads, you can see traffic within 24-48 hours of launch. Meta Ads typically require 2-4 weeks to exit the learning phase and optimise. Significant ROI improvements are usually visible within 30-60 days.' },
    { q: 'Do you manage both Meta Ads and Google Ads together?', a: 'Yes — we specialise in integrated paid media strategies that use both platforms in tandem. Google captures existing demand while Meta builds awareness and retargets. Combined, they consistently outperform single-platform strategies.' },
    { q: 'What makes MetaZynx different from other paid ads agencies in India?', a: 'We combine creative production and media buying under one team — no handoffs between departments. Every campaign is built around your ROAS targets, not just clicks or impressions. We report on revenue impact weekly, not just vanity metrics.' },
  ];

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
          <span className="block text-[#E8440A] uppercase tracking-[3px] font-sans font-bold text-sm mb-6">PAID PERFORMANCE ADVERTISING</span>
          <h1 className="text-white font-display font-extrabold text-[40px] md:text-[56px] leading-[1.1] mb-6">Meta & Google Ads Built for ROAS</h1>
          <p className="text-white/75 font-sans font-light text-[18px] md:text-[20px] max-w-[600px] leading-[1.6] mb-10">Precision-targeted paid campaigns engineered for maximum return on ad spend and scalable customer acquisition. Serving brands in Chandigarh and across India.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#E8440A] text-white font-sans font-bold text-[16px] px-8 py-4 rounded-md hover:scale-[1.03] transition-transform duration-200">Get Your Free Audit →</Link>
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

      {/* FAQ Section */}
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
          <h2 className="text-[#1B2D5B] font-display font-extrabold text-[40px] md:text-[56px] mb-6">Ready to Grow?</h2>
          <p className="text-[#1B2D5B]/70 font-sans font-light text-[18px] md:text-[20px] mb-10">Let&apos;s engineer a growth strategy tailored to your brand&apos;s unique goals.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#E8440A] text-white font-sans font-bold text-[16px] px-8 py-4 rounded-md hover:scale-[1.03] transition-transform duration-200">Book Your Free Audit Today →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
