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
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#FAFAF8" }}
      >
        <HeroBackground />
        <div className="w-full max-w-[900px] mx-auto px-6 py-[120px] flex flex-col items-center text-center relative z-10">
          
          {/* Element 1 — Top Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(27, 45, 91, 0.06)",
              border: "1px solid rgba(27, 45, 91, 0.12)",
              borderRadius: "100px",
              padding: "8px 20px",
              marginBottom: "40px"
            }}
          >
            <span style={{
              width: "6px", height: "6px",
              borderRadius: "50%",
              background: "#E8440A",
              display: "inline-block",
              animation: "pulse 2s infinite"
            }}/>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: "500",
              color: "#1B2D5B",
              letterSpacing: "1.5px",
              textTransform: "uppercase"
            }}>360° Performance Marketing Agency</span>
          </motion.div>

          {/* Element 2 — Animated Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-[42px] md:text-[72px] leading-[1.1] tracking-[-2px] text-brand-navy mb-6"
          >
            <span className="block">We Don&apos;t Just Run Campaigns.</span>
            <span className="block">We Build <HeroCyclingWord />.</span>
          </motion.h1>

          {/* Element 3 — Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-light text-[20px] leading-[1.7] max-w-[600px] mx-auto"
            style={{ color: "#4A4A4A" }}
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
            className="font-sans font-light text-[13px] mt-6"
            style={{ color: "#4A4A4A" }}
          >
            No long-term contracts • Free 360° audit • Results in 90 days
          </motion.p>
        </div>
      </section>

      {/* Element 6 — Stats Ticker (Below Hero) */}
      <div className="w-full bg-brand-navy h-[72px] overflow-hidden flex items-center relative">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-center px-12">
                <span className="font-stats text-[28px] text-accent-orange mr-3 leading-none">$6M+</span>
                <span className="font-sans font-light text-[12px] uppercase tracking-[2px] text-white">Ad Spend Managed</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              
              <div className="flex items-center px-12">
                <span className="font-stats text-[28px] text-accent-orange mr-3 leading-none">8.4x</span>
                <span className="font-sans font-light text-[12px] uppercase tracking-[2px] text-white">Average ROAS</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              
              <div className="flex items-center px-12">
                <span className="font-stats text-[28px] text-accent-orange mr-3 leading-none">97%</span>
                <span className="font-sans font-light text-[12px] uppercase tracking-[2px] text-white">Client Retention</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              
              <div className="flex items-center px-12">
                <span className="font-stats text-[28px] text-accent-orange mr-3 leading-none">200+</span>
                <span className="font-sans font-light text-[12px] uppercase tracking-[2px] text-white">Campaigns Delivered</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
