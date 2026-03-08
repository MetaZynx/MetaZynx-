'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-brand-navy overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-[#2A4A8A] opacity-90 z-0"></div>
      
      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-[40px] md:text-[64px] leading-[1.1] tracking-[-2px] text-white mb-8"
        >
          Ready to 10x Your Brand&apos;s Performance?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans font-normal text-[19px] md:text-[22px] leading-[1.7] text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Let&apos;s build your custom 360° strategy. Free audit. No commitments.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <Link 
            href="/contact"
            className="h-[64px] px-10 bg-accent-orange text-white font-sans font-bold text-[16px] uppercase tracking-[2px] rounded-md flex items-center justify-center gap-3 hover:scale-[1.03] duration-200 ease-out transition-all shadow-xl shadow-accent-orange/30 w-full sm:w-auto"
          >
            Book Your Free Audit Today <ArrowRight size={20} />
          </Link>
          
          <p className="font-sans font-light text-[14px] text-gray-400">
            No contracts. No hidden fees. Just results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
