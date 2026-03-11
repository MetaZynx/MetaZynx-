import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Google Ads Bidding Strategies | MetaZynx Blog',
  description: 'Manual CPC vs Smart Bidding, when to use Target CPA or Target ROAS, and how to transition from manual to automated bidding.',
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
            The Ultimate Guide to Google Ads Bidding Strategies
          </h1>
          <div className="font-sans font-light text-[15px] text-gray-500 flex items-center justify-center gap-2">
            <span>Divyam Bajaj</span>
            <span>•</span>
            <span>January 5, 2026 | 8 min read</span>
          </div>
          <div className="w-[60px] h-[3px] bg-[#E8440A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Section 2 — Article Body */}
      <section className="bg-white py-[80px] px-[24px] flex-grow">
        <div className="max-w-[740px] mx-auto font-sans font-light text-[18px] text-[#4A4A4A] leading-[1.8] space-y-6">
          <p>
            Choosing the right bidding strategy in Google Ads can make or break your campaign profitability. With Google pushing heavily towards automation, understanding when to let the algorithm take the wheel—and when to keep manual control—is crucial.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Manual CPC vs Smart Bidding
          </h2>
          <p>
            Manual CPC gives you absolute control over your maximum bid for every keyword. It&apos;s great for brand new accounts with zero conversion data. However, it ignores the thousands of contextual signals (device, location, time of day, past behavior) that Google&apos;s machine learning uses. Smart Bidding leverages these signals to adjust bids in real-time for every auction.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            When to Use Target CPA (tCPA)
          </h2>
          <p>
            Target CPA is ideal for lead generation campaigns where every conversion has roughly the same value. You tell Google how much you are willing to pay for a lead, and it optimizes bids to get as many conversions as possible at or below that cost.
          </p>

          <div className="border-l-4 border-[#E8440A] bg-[#FAFAF8] p-6 my-[40px] text-[#1B2D5B]">
            <p className="font-display font-bold text-[20px] m-0 leading-[1.5]">
              &quot;Switching to Target ROAS bidding with sufficient conversion data (50+ conversions/month) reduces wasted spend by an average of 31%.&quot;
            </p>
          </div>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            When to Use Target ROAS (tROAS)
          </h2>
          <p>
            For e-commerce brands where order values vary wildly, Target ROAS is the gold standard. Instead of optimizing for the cheapest conversion, Google optimizes for the highest revenue. It will bid higher for a user likely to buy a $500 product and lower for a user likely to buy a $20 product.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Maximise Conversions Explained
          </h2>
          <p>
            Maximise Conversions tells Google to spend your entire daily budget to get the most conversions possible, regardless of CPA. Use this strategy cautiously, usually when you have a strict daily budget and want to aggressively scale volume.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            How to Transition and Common Mistakes
          </h2>
          <p>
            Never switch a campaign from Manual CPC directly to tROAS if it has zero conversion history. The algorithm needs data to learn. Start with Manual CPC or Maximise Clicks to gather data, switch to Maximise Conversions once you have 15-30 conversions in 30 days, and finally move to tCPA or tROAS once the volume is stable.
          </p>
          <p>
            The most common mistake? Setting unrealistic targets. If your historical CPA is $50, setting a tCPA of $10 will choke the campaign and stop it from serving entirely.
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
