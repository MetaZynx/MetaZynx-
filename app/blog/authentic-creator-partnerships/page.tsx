import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UGC is Dead. Long Live Authentic Creator Partnerships. | MetaZynx Blog',
  description: 'Why traditional UGC looks fake, how Gen-Z detects scripted content, and how to brief creators for authenticity.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="bg-[#FAFAF8] py-[80px] flex flex-col items-center text-center mt-20">
        <div className="max-w-[780px] mx-auto px-6 flex flex-col items-center">
          <span className="inline-block bg-[#E8440A] text-white font-sans font-bold text-[12px] uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-6">
            SOCIAL MEDIA
          </span>
          <h1 className="font-display font-extrabold text-[48px] leading-[1.2] text-[#1B2D5B] mb-6">
            UGC is Dead. Long Live Authentic Creator Partnerships.
          </h1>
          <div className="font-sans font-light text-[15px] text-gray-500 flex items-center justify-center gap-2">
            <span>Divyam Bajaj</span>
            <span>•</span>
            <span>February 10, 2026 | 7 min read</span>
          </div>
          <div className="w-[60px] h-[3px] bg-[#E8440A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Section 2 — Article Body */}
      <section className="bg-white py-[80px] px-[24px] flex-grow">
        <div className="max-w-[740px] mx-auto font-sans font-light text-[18px] text-[#4A4A4A] leading-[1.8] space-y-6">
          <p>
            User-Generated Content (UGC) used to be the holy grail of social media marketing. It felt raw, real, and trustworthy. But as brands flooded TikTok and Instagram with paid actors reading rigid scripts, the format lost its edge. Traditional UGC is dead.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Why Traditional UGC Looks Fake
          </h2>
          <p>
            When a brand sends a creator a rigid script, a mandatory shot list, and corporate talking points, the resulting content is inherently flawed. Gen-Z audiences have highly tuned &quot;BS detectors.&quot; They can spot a scripted ad within the first 1.5 seconds.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Transactional UGC vs. Genuine Partnerships
          </h2>
          <p>
            Transactional UGC treats creators as cheap production houses. You pay a flat fee for a 30-second video, and the relationship ends. Genuine creator partnerships treat creators as creative directors. It involves long-term collaboration and allowing the creator to integrate your product naturally.
          </p>

          <div className="border-l-4 border-[#E8440A] bg-[#FAFAF8] p-6 my-[40px] text-[#1B2D5B]">
            <p className="font-display font-bold text-[20px] m-0 leading-[1.5]">
              &quot;Authentic creator content generates 4x higher engagement than brand-produced content.&quot;
            </p>
          </div>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            How to Brief for Authenticity
          </h2>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>Provide the &quot;Why&quot;:</strong> Explain the core problem your product solves, not just its features.</li>
            <li><strong>Set Guardrails, Not Tracks:</strong> Give them a list of &quot;Do&apos;s and Don&apos;ts&quot; but let them write the hook.</li>
            <li><strong>Trust Their Audience Knowledge:</strong> They built their following; they know what resonates.</li>
          </ul>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Repurposing Creator Content for Paid Ads
          </h2>
          <p>
            The best creator partnerships don&apos;t just live on the creator&apos;s feed. By securing usage rights, you can run their authentic content as spark ads or dark posts, combining the trust of the creator with the targeting power of Meta and TikTok ads.
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
