'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroCyclingWord from './HeroCyclingWord';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <>
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAFAF8]"
      >
        <HeroBackground />
        <div className="w-full max-w-[900px] mx-auto px-6 py-[120px] flex flex-col items-center text-center relative z-10">
          
          {/* Element 1 — Top Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[rgba(27,45,91,0.06)] border border-[rgba(27,45,91,0.12)] rounded-full px-4 py-2 mb-8 md:mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8440A] inline-block animate-[pulse_2s_infinite]" />
            <span className="font-sans text-[10px] md:text-[13px] font-medium color-[#1B2D5B] tracking-[1px] md:tracking-[1.5px] uppercase">
              360° Performance Marketing Agency
            </span>
          </motion.div>

          {/* Element 2 — Animated Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-[32px] sm:text-[42px] md:text-[72px] leading-[1.1] tracking-[-1px] md:tracking-[-2px] text-brand-navy mb-6"
          >
            <span className="block">We Don&apos;t Just Run Campaigns.</span>
            <span className="block">We Build <HeroCyclingWord />.</span>
          </motion.h1>

          {/* Element 3 — Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-light text-[16px] md:text-[20px] leading-[1.6] md:leading-[1.7] max-w-[600px] mx-auto text-[#4A4A4A]"
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
              className="group font-display font-semibold text-[15px] uppercase tracking-[1.5px] rounded-[4px] flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-[2px] bg-[#E8440A] hover:bg-[#C73508] text-white px-[40px] py-[18px]"
            >
              Start Your Growth Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/case-studies"
              className="font-display font-semibold text-[15px] uppercase tracking-[1.5px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px] bg-transparent hover:bg-[#1B2D5B] text-[#1B2D5B] hover:text-white border-2 border-[#1B2D5B] px-[40px] py-[16px]"
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
