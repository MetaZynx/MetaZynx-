import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Design That Converts: The Psychology of Ad Creatives | MetaZynx Blog',
  description: 'How color affects purchase decisions, why pattern interrupts stop the scroll, and 5 psychological triggers that improve CTR.',
  alternates: {
    canonical: 'https://www.metazynx.com/blog/psychology-of-ad-creatives',
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
            STRATEGY
          </span>
          <h1 className="font-display font-extrabold text-[48px] leading-[1.2] text-[#1B2D5B] mb-6">
            Design That Converts: The Psychology of Ad Creatives
          </h1>
          <div className="font-sans font-light text-[15px] text-gray-500 flex items-center justify-center gap-2">
            <span>Divyam Bajaj</span>
            <span>•</span>
            <span>January 15, 2026 | 6 min read</span>
          </div>
          <div className="w-[60px] h-[3px] bg-[#E8440A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Section 2 — Article Body */}
      <section className="bg-white py-[80px] px-[24px] flex-grow">
        <div className="max-w-[740px] mx-auto font-sans font-light text-[18px] text-[#4A4A4A] leading-[1.8] space-y-6">
          <p>
            An ad creative isn&apos;t just a pretty picture; it is a psychological tool designed to elicit a specific action. Understanding the cognitive biases and visual triggers that drive user behavior is the difference between a 0.5% CTR and a 3% CTR.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            How Color Affects Purchase Decisions
          </h2>
          <p>
            Color psychology is real. Orange creates a sense of urgency and action (which is why we use it for our primary CTAs). Blue instills trust and security. Red grabs attention but can also signal danger. Your ad&apos;s color palette should align with the emotion you want the user to feel before they click.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Why Pattern Interrupts Stop the Scroll
          </h2>
          <p>
            Users scroll through social media in a trance. To get them to stop, you must break their visual pattern. This is called a &quot;pattern interrupt.&quot; It could be a sudden movement in the first second of a video, an unusually bright background color, or an unexpected visual element that forces the brain to pause and process.
          </p>

          <div className="border-l-4 border-[#E8440A] bg-[#FAFAF8] p-6 my-[40px] text-[#1B2D5B]">
            <p className="font-display font-bold text-[20px] m-0 leading-[1.5]">
              &quot;Ads with a human face in the first frame see 38% higher engagement than product-only creatives.&quot;
            </p>
          </div>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            The Role of Faces in Ad Creatives
          </h2>
          <p>
            Humans are biologically hardwired to look at other human faces. If your ad features a person looking directly at the camera, the user will instinctively make eye contact. If the person in the ad is looking at a product or a headline, the user&apos;s eyes will follow their gaze.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Copy Hierarchy in Visual Ads
          </h2>
          <p>
            Don&apos;t make users read a novel in an image ad. Establish a clear visual hierarchy:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>The Hook (Largest Text):</strong> The main benefit or problem statement.</li>
            <li><strong>The Sub-headline (Medium Text):</strong> Context or supporting detail.</li>
            <li><strong>The CTA (Button or Bold Text):</strong> What they need to do next.</li>
          </ul>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            5 Psychological Triggers That Improve CTR
          </h2>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>FOMO (Fear of Missing Out):</strong> Limited time offers or low stock warnings.</li>
            <li><strong>Social Proof:</strong> Star ratings, customer quotes, or &quot;Join 10,000+ others.&quot;</li>
            <li><strong>Curiosity Gap:</strong> Teasing a solution without giving away the answer.</li>
            <li><strong>Authority:</strong> Badges, expert endorsements, or &quot;As seen in...&quot;</li>
            <li><strong>Reciprocity:</strong> Offering something of value (a free guide or audit) before asking for a sale.</li>
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
