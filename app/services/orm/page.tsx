import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Online Reputation Management (ORM) Services in India | MetaZynx',
  description: 'MetaZynx provides ORM services for brands and individuals across India. Suppress negative content, build positive presence, protect your brand online. Based in Chandigarh. Free ORM audit.',
  keywords: 'ORM services India, online reputation management Chandigarh, reputation management India, brand reputation India, remove negative reviews India, ORM agency Chandigarh',
  alternates: { canonical: 'https://www.metazynx.com/services/orm' },
  openGraph: {
    title: 'Online Reputation Management (ORM) Services in India | MetaZynx',
    description: 'Protect and build your brand reputation online. MetaZynx ORM services suppress negative content and build a strong positive presence across India. Based in Chandigarh.',
    url: 'https://www.metazynx.com/services/orm',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ORM Services India — MetaZynx' }],
  },
};

export default function Page() {
  const deliverables = [{ title: "Reputation Audit & Monitoring", description: "Comprehensive analysis of your current digital footprint and sentiment." },
    { title: "Review Generation Strategy", description: "Automated systems to consistently capture positive reviews from happy customers." },
    { title: "Negative Content Suppression", description: "Strategic SEO techniques to push damaging search results off the first page." },
    { title: "Google Knowledge Panel Management", description: "Claiming and optimizing your brand's primary information card on Google." },
    { title: "Crisis Response Planning", description: "Prepared protocols to swiftly handle and mitigate potential PR issues online." },
    { title: "Ongoing Brand Monitoring & Alerts", description: "24/7 tracking of brand mentions so we can respond to feedback immediately." }];
  const whyCards = [{ title: "Proactive Not Reactive", description: "We build systems to generate positive reviews before problems arise" },
    { title: "Search Suppression", description: "Negative content pushed down through strategic positive content placement" },
    { title: "24/7 Monitoring", description: "Real-time alerts for any new brand mentions across the web" }];
  const stats = [{ value: "3.1→4.8", label: "Average Rating Improvement" },
    { value: "1,200+", label: "Positive Reviews Generated" },
    { value: "30 Days", label: "To Visible Results" }];
  const faqs = [{ q: "How long does it take to improve online reputation?", a: "Initial improvements are typically visible within 30 days — especially for review generation and Google Business Profile optimisation. Suppressing negative search results through content strategy takes 3-6 months depending on the severity. We set realistic timelines based on your specific situation." },
    { q: "Can negative Google reviews be removed?", a: "Reviews that violate Google's policies (fake reviews, spam, off-topic content) can be reported and removed. Legitimate negative reviews cannot be deleted, but we help you respond professionally and generate enough positive reviews to improve your overall rating significantly." },
    { q: "What is included in an ORM audit?", a: "Our free ORM audit covers your Google Business Profile rating and review sentiment, first-page search results for your brand name, mentions across social media and forums, and any negative content that may be affecting customer trust. You'll receive a full report within 48 hours." },
    { q: "How do you suppress negative search results?", a: "We use a combination of content creation, strategic link building, and profile optimisation to push positive content higher in search results. This pushes damaging results off the first page — where 91% of clicks happen." },
    { q: "Do you offer ORM services for individuals as well as businesses?", a: "Yes — we provide ORM services for founders, executives, public figures, and individuals who need to manage their personal online presence alongside their professional reputation. Contact us to discuss your specific situation." }];

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
          <span className="block text-[#E8440A] uppercase tracking-[3px] font-sans font-bold text-sm mb-6">ONLINE REPUTATION MANAGEMENT</span>
          <h1 className="text-white font-display font-extrabold text-[40px] md:text-[56px] leading-[1.1] mb-6">Protect and Grow Your Brand Reputation</h1>
          <p className="text-white/75 font-sans font-light text-[18px] md:text-[20px] max-w-[600px] leading-[1.6] mb-10">Proactive online reputation management that protects your brand's digital footprint and builds lasting consumer trust. Serving brands across India from Chandigarh.</p>
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
