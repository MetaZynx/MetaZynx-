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
    <section className="py-24 bg-secondary-bg border-y border-border-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Big Stat */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left"
        >
          <div className="relative">
            <span className="font-stats text-[120px] md:text-[180px] leading-none text-accent-gold drop-shadow-sm">
              <VanillaCounter end={97} suffix="%" />
            </span>
            <div className="absolute -bottom-4 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 lg:left-0 lg:translate-x-0 bg-white px-6 py-3 rounded-full shadow-md border border-border-warm whitespace-nowrap">
              <span className="font-sans font-bold text-sm text-brand-navy uppercase tracking-[2px]">Client Retention Rate</span>
            </div>
          </div>
          <p className="font-sans text-[19px] leading-[1.7] text-secondary-text mt-12 max-w-md">
            We don&apos;t just sign clients; we build long-term partnerships. Our retention rate speaks volumes about the consistent ROI we deliver.
          </p>
        </motion.div>

        {/* Right Side - Differentiators */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="font-display font-bold text-[32px] md:text-[48px] text-brand-navy tracking-[-1px] mb-8">
            Why Ambitious Brands Choose Us
          </h2>
          
          <div className="grid gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-border-warm shadow-sm hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300">
                <CheckCircle2 size={24} className="text-accent-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-[20px] text-brand-navy mb-1">{item.title}</h4>
                  <p className="font-sans text-[15px] text-secondary-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
