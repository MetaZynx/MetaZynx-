import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Design & Development Agency in Chandigarh & India | MetaZynx',
  description: 'MetaZynx builds fast, SEO-optimised websites for brands across India. Next.js, React, Shopify. Revenue-first web design. Based in Chandigarh. Free website audit.',
  keywords: 'web design agency Chandigarh, web development India, website design Chandigarh, Next.js development India, Shopify development India, web design company Chandigarh',
  alternates: { canonical: 'https://www.metazynx.com/services/development' },
  openGraph: {
    title: 'Web Design & Development Agency in Chandigarh & India | MetaZynx',
    description: 'We build websites that rank on Google and convert visitors into customers. Fast, SEO-optimised, revenue-first web design for Indian brands. Based in Chandigarh.',
    url: 'https://www.metazynx.com/services/development',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Design & Development — MetaZynx' }],
  },
};

export default function Page() {
  const deliverables = [{ title: "Landing Page Development", description: "High-converting, standalone pages designed for specific marketing campaigns." },
    { title: "Full Website Builds", description: "Custom, scalable websites built to represent your brand and drive action." },
    { title: "Shopify & E-Commerce Stores", description: "Optimized online stores designed to maximize sales and average order value." },
    { title: "Page Speed Optimisation", description: "Technical improvements to ensure lightning-fast load times across all devices." },
    { title: "Conversion Rate Optimisation", description: "Data-driven tweaks to your user experience to turn more visitors into buyers." },
    { title: "Ongoing Maintenance & Support", description: "Reliable technical support to keep your site secure, updated, and running smoothly." }];
  const whyCards = [{ title: "Speed First", description: "Sub-2 second load times as standard. Every millisecond of delay costs conversions." },
    { title: "Built to Convert", description: "UX and copy are structured around your customer journey and conversion goals" },
    { title: "Modern Tech Stack", description: "Next.js, React, Shopify — built for performance and scalability" }];
  const stats = [{ value: "<2s", label: "Average Load Time" },
    { value: "+40%", label: "Average Conversion Lift" },
    { value: "100%", label: "Mobile Optimised" }];
  const faqs = [{ q: "How much does a website cost in India?", a: "A professional landing page starts from ₹15,000. A full website with multiple pages starts from ₹40,000. E-commerce stores on Shopify or custom-built start from ₹60,000. All projects include mobile optimisation and basic SEO setup." },
    { q: "How long does it take to build a website?", a: "A single landing page takes 3-5 working days. A full website typically takes 2-4 weeks depending on complexity and content readiness. E-commerce stores take 3-6 weeks. We provide a clear timeline before starting every project." },
    { q: "What technology do you build websites with?", a: "We primarily build with Next.js and React for maximum performance and SEO, and Shopify for e-commerce. All our websites are mobile-first, load in under 2 seconds, and pass Google's Core Web Vitals assessment." },
    { q: "Will my website rank on Google?", a: "All our websites are built with SEO-first architecture — clean code, fast load times, proper heading structure, schema markup, and sitemap integration. For ongoing ranking improvement, we recommend pairing development with our SEO service." },
    { q: "Do you provide website maintenance after launch?", a: "Yes — we offer monthly maintenance packages that include security updates, performance monitoring, content updates, and technical support. Most clients on retainer get priority turnaround on all change requests." }];

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
          <span className="block text-[#E8440A] uppercase tracking-[3px] font-sans font-bold text-sm mb-6">WEB DEVELOPMENT</span>
          <h1 className="text-white font-display font-extrabold text-[40px] md:text-[56px] leading-[1.1] mb-6">Websites Built to Convert</h1>
          <p className="text-white/75 font-sans font-light text-[18px] md:text-[20px] max-w-[600px] leading-[1.6] mb-10">High-performance, conversion-optimised websites and landing pages built on modern tech stacks for serious brands. Serving Chandigarh and all of India.</p>
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
          <p className="text-[#1B2D5B]/70 font-sans font-light text-[18px] md:text-[20px] mb-10">Let's engineer a growth strategy tailored to your brand's unique goals.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#E8440A] text-white font-sans font-bold text-[16px] px-8 py-4 rounded-md hover:scale-[1.03] transition-transform duration-200">Book Your Free Audit Today →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
