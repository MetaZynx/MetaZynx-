'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import VanillaCounter from './VanillaCounter';

export default function WhyMetaZynx() {
  const differentiators = [
    {
      title: 'Data-First, Always',
      description: 'Every decision is backed by analytics, not assumptions'
    },
    {
      title: 'Full 360° Capability',
      description: 'No need to manage multiple agencies'
    },
    {
      title: 'Dedicated Account Managers',
      description: 'Your brand gets focused attention'
    },
    {
      title: 'Transparent Reporting',
      description: 'Real-time dashboards, no vanity metrics'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary-bg border-y border-border-glass relative overflow-hidden">
      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side - Big Stat */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left"
        >
          <div className="relative mb-8">
            <span className="font-sans font-black text-[120px] md:text-[180px] leading-none text-primary-text tracking-tighter">
              <VanillaCounter end={97} suffix="%" />
            </span>
            <div className="absolute -bottom-4 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 lg:left-0 lg:translate-x-0 bg-brand-action px-6 py-2 rounded-full shadow-lg shadow-brand-action/20 whitespace-nowrap">
              <span className="font-mono font-bold text-[12px] text-primary-bg uppercase tracking-[2px]">Client Retention Rate</span>
            </div>
          </div>
          <p className="font-sans text-[18px] leading-[1.7] text-secondary-text max-w-md">
            We don&apos;t just sign clients; we build long-term partnerships. Our retention rate speaks volumes about the consistent ROI we deliver.
          </p>
        </motion.div>

        {/* Right Side - Differentiators */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div>
            <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">
              [ The Metazynx Advantage ]
            </span>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-primary-text tracking-tighter leading-[1.1]">
              Why Ambitious Brands Choose Us
            </h2>
          </div>
          
          <div className="grid gap-4">
            {differentiators.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-5 bg-card-bg p-6 rounded-2xl border border-border-glass hover:border-brand-action/30 transition-all duration-300 group"
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-action/10 flex items-center justify-center shrink-0 group-hover:bg-brand-action group-hover:text-primary-bg transition-colors duration-300">
                  <CheckCircle2 size={16} className="text-brand-action group-hover:text-primary-bg" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[18px] text-primary-text mb-1 tracking-tight">{item.title}</h4>
                  <p className="font-sans text-[15px] text-secondary-text leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
