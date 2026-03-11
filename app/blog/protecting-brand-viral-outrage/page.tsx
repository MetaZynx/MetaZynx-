import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Protecting Your Brand in the Age of Viral Outrage | MetaZynx Blog',
  description: 'How fast brand crises spread in 2026 and how to build a proactive crisis response playbook.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="bg-[#FAFAF8] py-[80px] flex flex-col items-center text-center mt-20">
        <div className="max-w-[780px] mx-auto px-6 flex flex-col items-center">
          <span className="inline-block bg-[#E8440A] text-white font-sans font-bold text-[12px] uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-6">
            ORM
          </span>
          <h1 className="font-display font-extrabold text-[48px] leading-[1.2] text-[#1B2D5B] mb-6">
            Protecting Your Brand in the Age of Viral Outrage
          </h1>
          <div className="font-sans font-light text-[15px] text-gray-500 flex items-center justify-center gap-2">
            <span>Divyam Bajaj</span>
            <span>•</span>
            <span>January 20, 2026 | 5 min read</span>
          </div>
          <div className="w-[60px] h-[3px] bg-[#E8440A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Section 2 — Article Body */}
      <section className="bg-white py-[80px] px-[24px] flex-grow">
        <div className="max-w-[740px] mx-auto font-sans font-light text-[18px] text-[#4A4A4A] leading-[1.8] space-y-6">
          <p>
            In 2026, a brand crisis doesn&apos;t take days to unfold; it takes hours. A single negative TikTok review or a misunderstood tweet can spiral into viral outrage before your PR team has even had their morning coffee.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            The 3 Types of Brand Threats
          </h2>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>Negative Reviews:</strong> Coordinated review bombing on Trustpilot or Google.</li>
            <li><strong>Social Media Attacks:</strong> Viral call-out videos on TikTok or Twitter threads.</li>
            <li><strong>Press Coverage:</strong> Mainstream media picking up on social media outrage.</li>
          </ul>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Proactive vs Reactive ORM
          </h2>
          <p>
            Reactive Online Reputation Management (ORM) is scrambling to delete comments and issue apologies. Proactive ORM is building a fortress of positive sentiment <em>before</em> a crisis hits. This means actively soliciting positive reviews, publishing high-ranking PR, and maintaining a transparent brand voice.
          </p>

          <div className="border-l-4 border-[#E8440A] bg-[#FAFAF8] p-6 my-[40px] text-[#1B2D5B]">
            <p className="font-display font-bold text-[20px] m-0 leading-[1.5]">
              &quot;86% of consumers read reviews before buying. One viral negative post can reduce purchase intent by 40%.&quot;
            </p>
          </div>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            The 24-Hour Response Rule
          </h2>
          <p>
            Silence is an admission of guilt on the internet. You have 24 hours to acknowledge an issue. You don&apos;t need a perfect solution immediately, but you must communicate that you are listening and investigating.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            How to Build a Crisis Response Playbook
          </h2>
          <p>
            Don&apos;t wait for a fire to buy an extinguisher. Build a playbook that outlines:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li>Who is authorized to speak on behalf of the brand.</li>
            <li>Pre-approved messaging templates for common issues (shipping delays, product defects).</li>
            <li>An escalation matrix for when to involve legal or executive teams.</li>
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
