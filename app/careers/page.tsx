import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe, Rocket, TrendingUp, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | MetaZynx',
  description: 'Join the MetaZynx team. We are always looking for exceptional talent in performance marketing, graphic design, and web development.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="bg-[#1B2D5B] min-h-[55vh] pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
          <span className="inline-block bg-[#E8440A] text-white font-sans font-bold text-[12px] uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-6">
            JOIN US
          </span>
          <h1 className="font-display font-extrabold text-[40px] md:text-[56px] leading-[1.1] text-white mb-6">
            Build Empires With Us
          </h1>
          <p className="font-sans font-light text-[18px] md:text-[20px] text-white/75 max-w-2xl leading-[1.6]">
            We&apos;re growing fast and always looking for exceptional talent who are obsessed with results.
          </p>
        </div>
      </section>

      {/* Section 2 — Open Positions */}
      <section className="bg-[#FAFAF8] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-[36px] md:text-[40px] text-[#1B2D5B] text-center mb-16">
            Open Positions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-[#E0DDD6] rounded-[12px] p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
              <span className="inline-block bg-[#E8440A] text-white font-sans font-bold text-[10px] uppercase tracking-[1.5px] px-3 py-1 rounded-full mb-6 self-start">
                PERFORMANCE MARKETING
              </span>
              <h3 className="font-display font-bold text-[24px] text-[#1B2D5B] mb-4">
                Performance Marketing Specialist
              </h3>
              <p className="font-sans font-light text-[16px] text-[#4A4A4A] leading-[1.7] mb-8 flex-grow">
                Run and optimise Meta &amp; Google Ads campaigns. Strong analytical skills and ROAS-driven mindset required.
              </p>
              <a 
                href="mailto:info@metazynx.com?subject=Application - Performance Marketing Specialist"
                className="inline-block font-sans font-bold text-[15px] text-[#E8440A] hover:text-[#1B2D5B] transition-colors uppercase tracking-[1px]"
              >
                Apply Now &rarr;
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E0DDD6] rounded-[12px] p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
              <span className="inline-block bg-[#E8440A] text-white font-sans font-bold text-[10px] uppercase tracking-[1.5px] px-3 py-1 rounded-full mb-6 self-start">
                DESIGN
              </span>
              <h3 className="font-display font-bold text-[24px] text-[#1B2D5B] mb-4">
                Graphic Designer &amp; Video Editor
              </h3>
              <p className="font-sans font-light text-[16px] text-[#4A4A4A] leading-[1.7] mb-8 flex-grow">
                Create scroll-stopping ad creatives, brand assets and short-form video content for high-growth brands.
              </p>
              <a 
                href="mailto:info@metazynx.com?subject=Application - Graphic Designer"
                className="inline-block font-sans font-bold text-[15px] text-[#E8440A] hover:text-[#1B2D5B] transition-colors uppercase tracking-[1px]"
              >
                Apply Now &rarr;
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E0DDD6] rounded-[12px] p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
              <span className="inline-block bg-[#E8440A] text-white font-sans font-bold text-[10px] uppercase tracking-[1.5px] px-3 py-1 rounded-full mb-6 self-start">
                SEO
              </span>
              <h3 className="font-display font-bold text-[24px] text-[#1B2D5B] mb-4">
                SEO &amp; Content Strategist
              </h3>
              <p className="font-sans font-light text-[16px] text-[#4A4A4A] leading-[1.7] mb-8 flex-grow">
                Build and execute organic growth strategies. Strong writing skills and technical SEO knowledge required.
              </p>
              <a 
                href="mailto:info@metazynx.com?subject=Application - SEO Strategist"
                className="inline-block font-sans font-bold text-[15px] text-[#E8440A] hover:text-[#1B2D5B] transition-colors uppercase tracking-[1px]"
              >
                Apply Now &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Why MetaZynx */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-[36px] md:text-[40px] text-[#1B2D5B] text-center mb-16">
            Why Join MetaZynx?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center shrink-0">
                <Globe className="text-[#E8440A]" size={24} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-[#1B2D5B] mb-2">Remote First</h3>
                <p className="font-sans font-light text-[16px] text-[#4A4A4A] leading-[1.6]">
                  Work from anywhere. Always.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center shrink-0">
                <Rocket className="text-[#E8440A]" size={24} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-[#1B2D5B] mb-2">Real Ownership</h3>
                <p className="font-sans font-light text-[16px] text-[#4A4A4A] leading-[1.6]">
                  Your work directly impacts client growth and company revenue.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center shrink-0">
                <TrendingUp className="text-[#E8440A]" size={24} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-[#1B2D5B] mb-2">Fast Growth</h3>
                <p className="font-sans font-light text-[16px] text-[#4A4A4A] leading-[1.6]">
                  We&apos;re scaling fast. Grow your skills and career with us.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center shrink-0">
                <GraduationCap className="text-[#E8440A]" size={24} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-[20px] text-[#1B2D5B] mb-2">Learning Culture</h3>
                <p className="font-sans font-light text-[16px] text-[#4A4A4A] leading-[1.6]">
                  Access to tools, courses and direct mentorship from the founder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Bottom CTA */}
      <section className="bg-[#1B2D5B] py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-[32px] md:text-[40px] text-white mb-10">
            Don&apos;t see a role that fits? Send us your CV anyway.
          </h2>
          <a 
            href="mailto:info@metazynx.com?subject=General Application"
            className="inline-flex items-center justify-center bg-[#E8440A] text-white font-sans font-bold text-[16px] uppercase tracking-[2px] px-10 py-5 rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-[#E8440A]/20 transition-all duration-200 ease-out"
          >
            Email Us Directly &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
