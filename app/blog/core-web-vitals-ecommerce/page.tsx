import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Core Web Vitals: The Silent Killer of E-Commerce Conversion Rates | MetaZynx Blog',
  description: 'What Core Web Vitals are, how slow sites lose conversions, and 5 quick fixes for better performance.',
  alternates: {
    canonical: 'https://www.metazynx.com/blog/core-web-vitals-ecommerce',
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
            CONTENT
          </span>
          <h1 className="font-display font-extrabold text-[48px] leading-[1.2] text-[#1B2D5B] mb-6">
            Core Web Vitals: The Silent Killer of E-Commerce Conversion Rates
          </h1>
          <div className="font-sans font-light text-[15px] text-gray-500 flex items-center justify-center gap-2">
            <span>Divyam Bajaj</span>
            <span>•</span>
            <span>January 28, 2026 | 4 min read</span>
          </div>
          <div className="w-[60px] h-[3px] bg-[#E8440A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Section 2 — Article Body */}
      <section className="bg-white py-[80px] px-[24px] flex-grow">
        <div className="max-w-[740px] mx-auto font-sans font-light text-[18px] text-[#4A4A4A] leading-[1.8] space-y-6">
          <p>
            You can have the best product, the most persuasive copy, and a multi-million dollar ad budget, but if your website takes 5 seconds to load, you are burning money. Core Web Vitals are the silent killer of e-commerce.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            What Are Core Web Vitals?
          </h2>
          <p>
            Core Web Vitals are a set of specific factors that Google considers important in a webpage&apos;s overall user experience. They consist of three main metrics:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>LCP (Largest Contentful Paint):</strong> Measures loading performance.</li>
            <li><strong>FID (First Input Delay) / INP (Interaction to Next Paint):</strong> Measures interactivity and responsiveness.</li>
            <li><strong>CLS (Cumulative Layout Shift):</strong> Measures visual stability.</li>
          </ul>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            How Slow Sites Lose Conversions
          </h2>
          <p>
            Modern consumers have zero patience. If a product page doesn&apos;t load instantly, they bounce back to Instagram or Google. A slow site frustrates users, destroys trust, and directly impacts your bottom line.
          </p>

          <div className="border-l-4 border-[#E8440A] bg-[#FAFAF8] p-6 my-[40px] text-[#1B2D5B]">
            <p className="font-display font-bold text-[20px] m-0 leading-[1.5]">
              &quot;A 1 second delay in page load time reduces conversions by 7% — for a brand doing $50K/month that&apos;s $42,000 lost annually.&quot;
            </p>
          </div>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            How to Audit Your Site Speed
          </h2>
          <p>
            Stop guessing. Use tools like Google PageSpeed Insights, GTmetrix, or WebPageTest to get a baseline of your current performance. Look specifically at your mobile scores, as that is where the majority of e-commerce traffic originates.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            5 Quick Fixes for Better Core Web Vitals
          </h2>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>Compress Images:</strong> Use next-gen formats like WebP and ensure images are properly sized.</li>
            <li><strong>Lazy Load Below-the-Fold Content:</strong> Don&apos;t load images or scripts until the user scrolls to them.</li>
            <li><strong>Minify CSS and JavaScript:</strong> Remove unnecessary code that blocks rendering.</li>
            <li><strong>Use a CDN:</strong> Serve your content from servers physically closer to your users.</li>
            <li><strong>Preload Key Resources:</strong> Tell the browser to prioritize loading your hero image and critical fonts.</li>
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
