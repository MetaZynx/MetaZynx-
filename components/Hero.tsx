'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Activity, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-primary-bg overflow-hidden">
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #1B2D5B 1px, transparent 1px), linear-gradient(to bottom, #1B2D5B 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-[40px] md:text-[72px] leading-[1.1] tracking-[-2px] text-brand-navy mb-6"
          >
            <span className="block">We Don&apos;t Just Run Campaigns.</span>
            <span className="block">We Build</span>
            <span className="block text-accent-orange relative inline-block">
              Empires.
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-accent-orange rounded-full"></span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-normal text-[19px] leading-[1.7] text-secondary-text mb-10 max-w-2xl"
          >
            The world&apos;s most ambitious brands trust MetaZynx to deliver performance across every digital channel — SEO, Paid Ads, Creative, Development, ORM and Influencer. One agency. Complete accountability.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6"
          >
            <Link 
              href="/contact"
              className="h-[52px] px-8 bg-accent-orange text-white font-sans font-medium text-[15px] uppercase tracking-[1.5px] rounded-md flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-accent-orange/20"
            >
              Start Your Growth Journey <ArrowRight size={18} />
            </Link>
            <Link 
              href="/case-studies"
              className="h-[52px] px-8 border-2 border-brand-navy text-brand-navy font-sans font-medium text-[15px] uppercase tracking-[1.5px] rounded-md flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans font-light text-[13px] text-muted-text"
          >
            No long-term contracts • Free 360° audit • Results in 90 days
          </motion.p>
        </div>

        {/* Right Content - Dashboard Mockup */}
        <div className="lg:col-span-5 relative hidden md:block">
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="bg-white rounded-2xl p-8 shadow-[0_24px_64px_rgba(27,45,91,0.12)] border border-border-warm relative z-10"
          >
            <div className="flex items-center justify-between mb-8 border-b border-border-warm pb-4">
              <div className="flex items-center gap-2">
                <Activity size={18} className="text-brand-navy" />
                <span className="font-sans font-semibold text-sm text-brand-navy uppercase tracking-wider">Live Performance Data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-sans text-xs text-muted-text uppercase tracking-widest">Live</span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="font-sans text-sm text-secondary-text mb-1 uppercase tracking-wider font-medium">Average ROAS</p>
                <div className="flex items-end gap-3">
                  <span className="font-stats text-6xl text-accent-gold leading-none">8.4x</span>
                  <TrendingUp size={24} className="text-green-500 mb-1" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-sans text-xs text-secondary-text mb-1 uppercase tracking-wider font-medium">Organic Traffic</p>
                  <p className="font-sans font-bold text-2xl text-green-600">+312%</p>
                </div>
                <div>
                  <p className="font-sans text-xs text-secondary-text mb-1 uppercase tracking-wider font-medium">Cost Per Lead</p>
                  <p className="font-sans font-bold text-2xl text-brand-navy">₹47</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border-warm">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-sans text-xs text-secondary-text uppercase tracking-wider font-medium">Ad Spend Managed</p>
                  <p className="font-sans font-bold text-sm text-brand-navy">₹2.4Cr/month</p>
                </div>
                <div className="w-full h-2 bg-secondary-bg rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-gradient-to-r from-brand-navy to-accent-orange rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-secondary-bg p-4 rounded-xl">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Users size={20} className="text-accent-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-secondary-text uppercase tracking-wider font-medium mb-1">Client Retention Rate</p>
                  <p className="font-stats text-3xl text-accent-gold leading-none">97%</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Decorative background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-navy/5 to-accent-orange/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-navy py-3 overflow-hidden border-t border-white/10">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-white">SEO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-accent-orange">META ADS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-white">GOOGLE ADS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-accent-orange">INFLUENCER MARKETING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-white">UGC CONTENT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-accent-orange">WEB DEVELOPMENT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-white">GRAPHIC DESIGN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-accent-orange">ORM</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-white">PERFORMANCE MARKETING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
              <span className="font-sans font-bold text-sm uppercase tracking-[2px] text-accent-orange">360° AGENCY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
