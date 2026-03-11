import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Your Meta Ads Are Failing (And How to Fix Them) | MetaZynx Blog',
  description: 'Learn the 3 common mistakes killing your Meta Ads ROAS and why creative matters more than targeting.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="bg-[#FAFAF8] py-[80px] flex flex-col items-center text-center mt-20">
        <div className="max-w-[780px] mx-auto px-6 flex flex-col items-center">
          <span className="inline-block bg-[#E8440A] text-white font-sans font-bold text-[12px] uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-6">
            PAID MEDIA
          </span>
          <h1 className="font-display font-extrabold text-[48px] leading-[1.2] text-[#1B2D5B] mb-6">
            Why Your Meta Ads Are Failing (And How to Fix Them)
          </h1>
          <div className="font-sans font-light text-[15px] text-gray-500 flex items-center justify-center gap-2">
            <span>Divyam Bajaj</span>
            <span>•</span>
            <span>February 20, 2026 | 5 min read</span>
          </div>
          <div className="w-[60px] h-[3px] bg-[#E8440A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Section 2 — Article Body */}
      <section className="bg-white py-[80px] px-[24px] flex-grow">
        <div className="max-w-[740px] mx-auto font-sans font-light text-[18px] text-[#4A4A4A] leading-[1.8] space-y-6">
          <p>
            If your Meta Ads performance has tanked recently, you are not alone. Many brands are seeing their CPAs skyrocket and their ROAS plummet. But the platform isn&apos;t broken—your strategy is.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            3 Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>Wrong Objective:</strong> Using Traffic or Engagement objectives when your end goal is revenue. Always use the Sales objective.</li>
            <li><strong>No Creative Testing:</strong> Running the same 3 creatives for months is a death sentence for your ROAS.</li>
            <li><strong>Broad Audiences with No Exclusions:</strong> Failing to exclude past purchasers means you are wasting budget showing ads to people who already know you.</li>
          </ul>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Creative Fatigue
          </h2>
          <p>
            Creative fatigue happens when your target audience has seen your ad too many times. Watch your frequency metric closely. A frequency above 3.5 over a 7-day period is a danger zone. If your frequency is rising and your CTR is dropping, your creative is fatigued.
          </p>

          <div className="border-l-4 border-[#E8440A] bg-[#FAFAF8] p-6 my-[40px] text-[#1B2D5B]">
            <p className="font-display font-bold text-[20px] m-0 leading-[1.5]">
              &quot;Brands testing 6+ creatives monthly see 2.4x better ROAS than those testing fewer than 2.&quot;
            </p>
          </div>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Why Creative Matters More Than Targeting
          </h2>
          <p>
            Most brands underinvest in creative and overspend on audience targeting. In 2026, targeting is automated; creative is the variable for success. Your creative <em>is</em> your targeting. A well-crafted video hook will naturally attract the right buyer.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            The MetaZynx Approach
          </h2>
          <p>
            We implement a rigorous creative testing framework for our clients. We test 6-8 new creative concepts per week and rotate fatigued creatives out systematically. Stop blaming the algorithm and start building a creative production pipeline.
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
