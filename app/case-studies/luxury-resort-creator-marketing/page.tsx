import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3M+ Organic Views for a Luxury Resort via Creator Marketing | MetaZynx Case Study',
  description: 'Low brand awareness and near-zero engagement among the Gen-Z and millennial traveler demographic despite a world-class property.',
};

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="bg-brand-navy min-h-[50vh] pt-40 pb-24 px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <span className="inline-block bg-accent-orange text-white font-sans font-bold text-[12px] uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-6">
            HOSPITALITY • INFLUENCER
          </span>
          <h1 className="font-display font-extrabold text-[40px] md:text-[52px] leading-[1.1] text-white mb-8">
            3M+ Organic Views for a Luxury Resort via Creator Marketing
          </h1>
          <p className="font-sans text-[18px] md:text-[20px] text-white/75 max-w-3xl mb-12 leading-[1.6]">
            <span className="text-accent-orange font-bold">The Challenge:</span> Low brand awareness and near-zero engagement among the Gen-Z and millennial traveler demographic despite a world-class property.
          </p>
          
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="font-stats text-[56px] text-accent-orange leading-none mb-2">3M+</p>
              <p className="font-sans text-[16px] text-white font-medium">Views</p>
            </div>
            <div>
              <p className="font-stats text-[56px] text-accent-orange leading-none mb-2">+310%</p>
              <p className="font-sans text-[16px] text-white font-medium">Engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Challenge */}
      <section className="bg-primary-bg py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-[32px] md:text-[40px] text-brand-navy mb-8">
            The Challenge
          </h2>
          <div className="font-sans font-light text-[18px] text-secondary-text leading-[1.8] space-y-6">
            <p>
              The luxury resort had stunning visuals but was relying entirely on traditional advertising. Their social media had 4,200 followers and average posts were getting under 200 views.
            </p>
            <p>
              The target Gen-Z traveler demographic didn&apos;t know they existed and the brand had no authentic social proof to drive bookings from younger audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Our Approach */}
      <section className="bg-white py-24 px-6 md:px-12 border-y border-border-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-[32px] md:text-[40px] text-brand-navy mb-12">
            Our Approach
          </h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="font-stats text-[40px] text-accent-orange leading-none shrink-0">01</div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-brand-navy mb-3">Creator Identification</h3>
                <p className="font-sans text-[16px] text-secondary-text leading-[1.7]">Identified 12 travel creators with highly engaged audiences matching the resort&apos;s ideal guest profile.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="font-stats text-[40px] text-accent-orange leading-none shrink-0">02</div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-brand-navy mb-3">Creative Briefs</h3>
                <p className="font-sans text-[16px] text-secondary-text leading-[1.7]">Developed creative briefs focused on authentic experiences not scripted ads.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="font-stats text-[40px] text-accent-orange leading-none shrink-0">03</div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-brand-navy mb-3">Experience Coordination</h3>
                <p className="font-sans text-[16px] text-secondary-text leading-[1.7]">Coordinated 3-day creator stays with full experience access.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="font-stats text-[40px] text-accent-orange leading-none shrink-0">04</div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-brand-navy mb-3">Paid Amplification</h3>
                <p className="font-sans text-[16px] text-secondary-text leading-[1.7]">Repurposed top-performing creator content as paid social ads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The Results */}
      <section className="bg-brand-navy py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-bold text-[32px] md:text-[40px] text-white mb-16">
            The Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className="font-stats text-[48px] text-accent-orange leading-none mb-3">3M+</p>
              <p className="font-sans text-[15px] text-white font-medium">Organic Views</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className="font-stats text-[48px] text-accent-orange leading-none mb-3">+310%</p>
              <p className="font-sans text-[15px] text-white font-medium">Engagement</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className="font-stats text-[48px] text-accent-orange leading-none mb-3">12</p>
              <p className="font-sans text-[15px] text-white font-medium">Creators</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className="font-stats text-[48px] text-accent-orange leading-none mb-3">4.2k&rarr;31k</p>
              <p className="font-sans text-[15px] text-white font-medium">Followers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Bottom CTA */}
      <section className="bg-primary-bg py-32 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-[40px] md:text-[56px] text-brand-navy mb-10">
            Want results like these?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-accent-orange text-white font-sans font-bold text-[16px] uppercase tracking-[2px] px-10 py-5 rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-200 ease-out"
          >
            Book Your Free Audit &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
