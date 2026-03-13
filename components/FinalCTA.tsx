'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-primary-bg overflow-hidden border-t border-border-glass">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-action/5 z-0 pointer-events-none"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-6 block">
            [ Ready to Scale? ]
          </span>
          <h2 className="font-sans font-black text-[48px] md:text-[80px] leading-[1.05] tracking-tighter text-primary-text mb-8">
            Let&apos;s Build Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-text to-secondary-text">Digital Empire.</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-[18px] md:text-[22px] leading-[1.6] text-secondary-text mb-12 max-w-2xl mx-auto"
        >
          Stop guessing. Start growing. Get a comprehensive technical and marketing audit of your current digital presence.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <Link 
            href="/contact"
            className="h-[60px] px-10 bg-primary-text text-primary-bg font-sans font-semibold text-[15px] rounded-md flex items-center justify-center gap-3 hover:scale-[1.03] duration-200 ease-out transition-all shadow-xl shadow-primary-text/10 w-full sm:w-auto group"
          >
            Get Your Free Tech Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="font-mono text-[12px] text-muted-text uppercase tracking-[1px]">
            No commitments. Just actionable insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
