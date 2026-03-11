import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Future of Search: AI Overviews and Your Organic Strategy | MetaZynx Blog',
  description: 'What Google AI Overviews are, how they reduce organic CTR, and what content still gets clicks.',
  alternates: {
    canonical: 'https://www.metazynx.com/blog/future-of-search-ai-overviews',
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="bg-[#FAFAF8] py-[80px] flex flex-col items-center text-center mt-20">
        <div className="max-w-[780px] mx-auto px-6 flex flex-col items-center">
          <span className="inline-block bg-[#E8440A] text-white font-sans font-bold text-[12px] uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-6">
            SEO
          </span>
          <h1 className="font-display font-extrabold text-[48px] leading-[1.2] text-[#1B2D5B] mb-6">
            The Future of Search: AI Overviews and Your Organic Strategy
          </h1>
          <div className="font-sans font-light text-[15px] text-gray-500 flex items-center justify-center gap-2">
            <span>Divyam Bajaj</span>
            <span>•</span>
            <span>March 5, 2026 | 6 min read</span>
          </div>
          <div className="w-[60px] h-[3px] bg-[#E8440A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Section 2 — Article Body */}
      <section className="bg-white py-[80px] px-[24px] flex-grow">
        <div className="max-w-[740px] mx-auto font-sans font-light text-[18px] text-[#4A4A4A] leading-[1.8] space-y-6">
          <p>
            The search landscape has fundamentally shifted. With the widespread rollout of Google AI Overviews, the way users find information—and the way brands acquire organic traffic—has changed forever.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            What Are AI Overviews?
          </h2>
          <p>
            Google AI Overviews use generative AI to provide comprehensive, synthesized answers directly at the top of the search results page. Instead of clicking through multiple links, users receive a conversational summary compiled from various sources across the web.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            How They Reduce Organic CTR
          </h2>
          <p>
            AI Overviews are reducing traditional organic click-through rates (CTR) for informational queries. When a user gets their answer directly on the SERP, they have no incentive to click through to your website. This &quot;zero-click&quot; phenomenon is accelerating rapidly.
          </p>

          <div className="border-l-4 border-[#E8440A] bg-[#FAFAF8] p-6 my-[40px] text-[#1B2D5B]">
            <p className="font-display font-bold text-[20px] m-0 leading-[1.5]">
              &quot;Websites with strong topical authority see 3x more visibility in AI Overview citations.&quot;
            </p>
          </div>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            What Content Still Gets Clicks?
          </h2>
          <p>
            In an AI Overview world, users click through when they need depth, authority, and unique perspectives that an AI summary cannot provide. This includes original research, first-hand experience, complex problem-solving tutorials, and transactional pages.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            3 Strategies for 2026
          </h2>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>Target Long-Tail Conversational Queries:</strong> Optimize for natural language, question-based queries instead of broad keywords.</li>
            <li><strong>Build Topical Authority:</strong> Build comprehensive content clusters that cover a single topic from every conceivable angle to become a cited source.</li>
            <li><strong>Optimize for Featured Snippets:</strong> Structure your content to be easily digestible by AI models using clear headings and bulleted lists.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 — Bottom CTA */}
      <section className="bg-[#1B2D5B] py-[80px] px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-display font-extrabold text-[40px] text-white mb-8">
            Ready to grow your brand?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-[#E8440A] text-white font-sans font-bold text-[16px] uppercase tracking-[2px] px-10 py-5 rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-[#E8440A]/20 transition-all duration-200 ease-out"
          >
            Book Your Free Audit &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
