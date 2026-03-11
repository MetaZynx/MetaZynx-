import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '10 Technical SEO Mistakes Costing You Traffic | MetaZynx Blog',
  description: 'Fixing technical SEO issues alone can increase organic traffic by 20-40% without creating a single new piece of content.',
  alternates: {
    canonical: 'https://www.metazynx.com/blog/technical-seo-mistakes',
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
            10 Technical SEO Mistakes Costing You Traffic
          </h1>
          <div className="font-sans font-light text-[15px] text-gray-500 flex items-center justify-center gap-2">
            <span>Divyam Bajaj</span>
            <span>•</span>
            <span>January 12, 2026 | 7 min read</span>
          </div>
          <div className="w-[60px] h-[3px] bg-[#E8440A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Section 2 — Article Body */}
      <section className="bg-white py-[80px] px-[24px] flex-grow">
        <div className="max-w-[740px] mx-auto font-sans font-light text-[18px] text-[#4A4A4A] leading-[1.8] space-y-6">
          <p>
            You can write the best content in the world, but if Google&apos;s bots can&apos;t crawl, index, or understand your website, you will never rank. Technical SEO is the foundation of your organic growth strategy.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            The 10 Most Common Mistakes
          </h2>
          
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>Slow Page Speed:</strong> A site that takes longer than 3 seconds to load will suffer high bounce rates and lower rankings.</li>
            <li><strong>Missing Meta Descriptions:</strong> While not a direct ranking factor, missing or poorly written meta descriptions destroy your CTR in the search results.</li>
            <li><strong>Broken Internal Links:</strong> 404 errors frustrate users and waste your crawl budget. Ensure all internal links point to live pages.</li>
            <li><strong>Duplicate Content:</strong> Having multiple URLs with the same content confuses search engines. Use canonical tags to specify the preferred version.</li>
            <li><strong>No XML Sitemap:</strong> A sitemap is a roadmap for Google. Without it, new or deeply nested pages may never be discovered.</li>
          </ul>

          <div className="border-l-4 border-[#E8440A] bg-[#FAFAF8] p-6 my-[40px] text-[#1B2D5B]">
            <p className="font-display font-bold text-[20px] m-0 leading-[1.5]">
              &quot;Fixing technical SEO issues alone can increase organic traffic by 20-40% without creating a single new piece of content.&quot;
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>Unoptimised Images:</strong> Large image files slow down your site. Compress images and use descriptive alt text for accessibility and image search.</li>
            <li><strong>Poor Mobile Experience:</strong> Google uses mobile-first indexing. If your site isn&apos;t responsive or has unclickable elements on mobile, your rankings will tank.</li>
            <li><strong>Missing Schema Markup:</strong> Structured data helps search engines understand the context of your content, enabling rich snippets like star ratings or event dates.</li>
            <li><strong>Crawl Errors:</strong> Check Google Search Console regularly for server errors (5xx) or blocked resources in your robots.txt file.</li>
            <li><strong>Thin Content Pages:</strong> Pages with little to no valuable content (e.g., tag pages or empty category pages) dilute your site&apos;s overall authority. Noindex them or consolidate them.</li>
          </ul>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            How to Fix Them
          </h2>
          <p>
            Start by running a comprehensive technical audit using tools like Screaming Frog or Ahrefs. Prioritize fixes based on their impact: start with crawlability (robots.txt, sitemaps), move to indexability (canonical tags, noindex), and finish with performance (site speed, mobile usability).
          </p>
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
