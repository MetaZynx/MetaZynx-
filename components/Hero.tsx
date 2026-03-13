'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroCyclingWord from './HeroCyclingWord';
import dynamic from 'next/dynamic';

const HeroSlider = dynamic(() => import('@/components/HeroSlider'), { ssr: false });

export default function Hero() {
  return (
    <>
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAFAF8]"
      >
        <HeroSlider />
        <div className="w-full max-w-[900px] mx-auto px-6 py-[120px] flex flex-col items-center text-center relative z-10">
          
          {/* Element 2 — Animated Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0D0D0D] mb-8"
            style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
          >
            <span className="block">We Don&apos;t Just Run Campaigns.</span>
            <span className="block">We Build <HeroCyclingWord />.</span>
          </motion.h1>

          {/* Element 3 — Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-normal text-[18px] md:text-[22px] leading-[1.6] max-w-[640px] mx-auto text-[#4A4A4A]"
          >
            The world&apos;s most ambitious brands trust MetaZynx to deliver 
            performance across every digital channel — SEO, Paid Ads, 
            Creative, Development, ORM and Influencer.
          </motion.p>

          {/* Element 4 — CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto"
          >
            <Link 
              href="/contact"
              className="group font-sans font-medium text-[15px] tracking-[0.5px] rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-[2px] bg-[#0D0D0D] hover:bg-[#333333] text-white px-[36px] py-[16px] shadow-sm"
            >
              Start Your Growth Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/case-studies"
              className="font-sans font-medium text-[15px] tracking-[0.5px] rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px] bg-white hover:bg-gray-50 text-[#0D0D0D] border border-gray-200 px-[36px] py-[16px] shadow-sm"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Element 5 — Trust Line */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-sans font-light text-[13px] mt-6 text-[#4A4A4A]"
          >
            No long-term contracts • Free 360° audit • Results in 90 days
          </motion.p>
        </div>
      </section>

      {/* Element 6 — Stats Ticker (Below Hero) */}
      <div className="w-full bg-brand-navy h-[60px] md:h-[72px] overflow-hidden flex items-center relative">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-center px-6 md:px-12">
                <span className="font-stats text-[20px] md:text-[28px] text-accent-orange mr-2 md:mr-3 leading-none">$6M+</span>
                <span className="font-sans font-light text-[10px] md:text-[12px] uppercase tracking-[1px] md:tracking-[2px] text-white">Ad Spend Managed</span>
              </div>
              <div className="w-px h-6 md:h-8 bg-white/20"></div>
              
              <div className="flex items-center px-6 md:px-12">
                <span className="font-stats text-[20px] md:text-[28px] text-accent-orange mr-2 md:mr-3 leading-none">8.4x</span>
                <span className="font-sans font-light text-[10px] md:text-[12px] uppercase tracking-[1px] md:tracking-[2px] text-white">Average ROAS</span>
              </div>
              <div className="w-px h-6 md:h-8 bg-white/20"></div>
              
              <div className="flex items-center px-6 md:px-12">
                <span className="font-stats text-[20px] md:text-[28px] text-accent-orange mr-2 md:mr-3 leading-none">97%</span>
                <span className="font-sans font-light text-[10px] md:text-[12px] uppercase tracking-[1px] md:tracking-[2px] text-white">Client Retention</span>
              </div>
              <div className="w-px h-6 md:h-8 bg-white/20"></div>
              
              <div className="flex items-center px-6 md:px-12">
                <span className="font-stats text-[20px] md:text-[28px] text-accent-orange mr-2 md:mr-3 leading-none">200+</span>
                <span className="font-sans font-light text-[10px] md:text-[12px] uppercase tracking-[1px] md:tracking-[2px] text-white">Campaigns Delivered</span>
              </div>
              <div className="w-px h-6 md:h-8 bg-white/20"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
