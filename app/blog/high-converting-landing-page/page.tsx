import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a High-Converting Landing Page | MetaZynx Blog',
  description: 'What makes a landing page convert, the 5 essential elements, and how to match ad copy to landing page copy.',
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
            How to Build a High-Converting Landing Page
          </h1>
          <div className="font-sans font-light text-[15px] text-gray-500 flex items-center justify-center gap-2">
            <span>Divyam Bajaj</span>
            <span>•</span>
            <span>December 28, 2025 | 6 min read</span>
          </div>
          <div className="w-[60px] h-[3px] bg-[#E8440A] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Section 2 — Article Body */}
      <section className="bg-white py-[80px] px-[24px] flex-grow">
        <div className="max-w-[740px] mx-auto font-sans font-light text-[18px] text-[#4A4A4A] leading-[1.8] space-y-6">
          <p>
            You can drive all the traffic in the world to your website, but if your landing page doesn&apos;t convert, your ad spend is wasted. A high-converting landing page is a carefully engineered machine designed to do one thing: turn visitors into customers.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            What Makes a Landing Page Convert
          </h2>
          <p>
            Conversion is about reducing friction and increasing motivation. Every element on the page must either build trust, clarify the offer, or make it easier for the user to take action.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            The 5 Essential Elements
          </h2>
          <ul className="list-disc pl-6 space-y-3 my-6">
            <li><strong>The Headline:</strong> It must clearly state the primary benefit. Don&apos;t be clever; be clear.</li>
            <li><strong>The Hero Image:</strong> Show the product in use or the desired end state of the customer.</li>
            <li><strong>Social Proof:</strong> Testimonials, reviews, and case studies build immediate trust.</li>
            <li><strong>The CTA (Call to Action):</strong> Make it prominent, action-oriented, and contrasting in color.</li>
            <li><strong>Trust Signals:</strong> Security badges, money-back guarantees, and logos of featured publications.</li>
          </ul>

          <div className="border-l-4 border-[#E8440A] bg-[#FAFAF8] p-6 my-[40px] text-[#1B2D5B]">
            <p className="font-display font-bold text-[20px] m-0 leading-[1.5]">
              &quot;Landing pages with a single focused CTA convert 266% better than pages with multiple competing CTAs.&quot;
            </p>
          </div>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Matching Ad Copy to Landing Page Copy
          </h2>
          <p>
            This is the most common mistake brands make. If your ad promises &quot;50% off running shoes,&quot; the landing page headline must say &quot;50% off running shoes.&quot; This is called message match. If a user clicks an ad and the landing page looks or sounds different, they will bounce immediately.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            Why Fewer Choices = More Conversions
          </h2>
          <p>
            Hick&apos;s Law states that the more choices a person has, the longer it takes them to make a decision. Remove the navigation bar, remove the footer links, and remove secondary offers. The user should only have two options: convert or leave.
          </p>

          <h2 className="font-display font-bold text-[32px] text-[#1B2D5B] mt-12 mb-6">
            A/B Testing Your Landing Page
          </h2>
          <p>
            Never assume you know what will convert best. Test your headlines, test your CTA button colors, and test long-form vs. short-form copy. Use tools like Google Optimize or VWO to run split tests and let the data dictate your design decisions.
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
