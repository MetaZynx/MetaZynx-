import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Graphic Design Services in Chandigarh & India | MetaZynx',
  description: 'Professional graphic design services for brands across India. Social media creatives, ad design, brand identity & marketing collateral. Based in Chandigarh. Free design consultation.',
  keywords: 'graphic design agency Chandigarh, graphic design services India, social media design India, brand design Chandigarh, ad creative design India, logo design Chandigarh',
  alternates: { canonical: 'https://www.metazynx.com/services/design' },
  openGraph: {
    title: 'Graphic Design Services in Chandigarh & India | MetaZynx',
    description: 'Conversion-focused graphic design for Indian brands. Social media creatives, ad design, and brand identity that drives results. Based in Chandigarh.',
    url: 'https://www.metazynx.com/services/design',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Graphic Design Services — MetaZynx' }],
  },
};

export default function Page() {
  const deliverables = [{ title: "Brand Identity & Logo Design", description: "Crafting memorable logos and comprehensive brand guidelines." },
    { title: "Social Media Creatives", description: "Eye-catching graphics designed to stop the scroll and drive engagement." },
    { title: "Ad Creative Production", description: "High-converting image and video assets tailored for paid media campaigns." },
    { title: "Pitch Decks & Presentations", description: "Professional, persuasive decks that clearly communicate your value proposition." },
    { title: "Packaging Design", description: "Premium product packaging that stands out on the shelf and unboxing experience." },
    { title: "Motion Graphics & Short-Form Video", description: "Dynamic video content optimized for TikTok, Reels, and Shorts." }];
  const whyCards = [{ title: "Performance-Led Design", description: "Every creative is designed with conversion as the primary goal, not just aesthetics" },
    { title: "Fast Turnaround", description: "Ad creatives delivered within 48 hours. Brand projects within 7 days." },
    { title: "Consistent Brand Voice", description: "All assets align to your brand system for instant recognition" }];
  const stats = [{ value: "100+", label: "Brands Designed For" },
    { value: "3x", label: "Higher CTR with Pro Creatives" },
    { value: "48hrs", label: "Ad Creative Turnaround" }];
  const faqs = [{ q: "How much do graphic design services cost in India?", a: "Our graphic design services are priced based on scope. Ad creatives start from ₹5,000 per batch, social media packages from ₹8,000/month, and full brand identity projects from ₹25,000. Contact us for a tailored quote." },
    { q: "How long does it take to receive ad creatives?", a: "Ad creatives and social media graphics are delivered within 48 hours of briefing. Full brand identity projects including logo, guidelines, and collateral are delivered within 7 working days." },
    { q: "What design tools and formats do you deliver?", a: "We deliver all assets in web-ready formats (PNG, JPG, WebP) and print-ready formats (PDF, AI) as needed. Video assets are delivered as MP4. We also provide Canva or Figma templates if you need to make edits in-house." },
    { q: "Can you design creatives specifically for Meta and Google Ads?", a: "Yes — this is one of our core specialisations. We design ad creatives with platform-specific dimensions, thumb-stopping first frames, and copy structured around your conversion objective. Our creatives consistently outperform stock-photo alternatives." },
    { q: "Do you offer ongoing design retainers?", a: "Yes. Most clients work with us on a monthly retainer that includes a set number of creatives, social media posts, and revisions each month. This ensures brand consistency and faster turnaround as we learn your style preferences." }];

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
          <span className="block text-[#E8440A] uppercase tracking-[3px] font-sans font-bold text-sm mb-6">BRAND & CREATIVE DESIGN</span>
          <h1 className="text-white font-display font-extrabold text-[40px] md:text-[56px] leading-[1.1] mb-6">Design That Converts, Not Just Impresses</h1>
          <p className="text-white/75 font-sans font-light text-[18px] md:text-[20px] max-w-[600px] leading-[1.6] mb-10">Premium visual identities and ad creatives that capture attention, build trust and drive measurable action. Serving brands in Chandigarh and across India.</p>
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
