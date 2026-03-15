'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-[#FAFAF8] overflow-hidden border-t border-[#E0DDD6]">
      {/* Parallax animated background orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E8440A]/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1B2D5B]/6 rounded-full blur-[100px]" />
      </motion.div>

      {/* Animated grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(27,45,91,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
          className="absolute pointer-events-none"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${16 + i * 4}px`,
            height: `${16 + i * 4}px`,
            borderRadius: i % 2 === 0 ? '50%' : '4px',
            background: i % 2 === 0 ? 'rgba(232,68,10,0.15)' : 'rgba(27,45,91,0.1)',
            transform: `rotate(${i * 15}deg)`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-sans font-medium text-[13px] text-[#E8440A] uppercase tracking-[2px] mb-6 block"
          >
            [ Ready to Scale? ]
          </motion.span>

          <h2 className="font-sans font-black text-[48px] md:text-[80px] leading-[1.05] tracking-tighter text-[#0D0D0D] mb-8">
            Let&apos;s Build Your{' '}
            <br className="hidden md:block" />
            <motion.span
              className="inline-block text-[#E8440A] relative"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              Digital Empire.
              {/* Underline animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-2 left-0 right-0 h-[4px] bg-[#E8440A]/30 origin-left rounded-full"
              />
            </motion.span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-[18px] md:text-[22px] leading-[1.6] text-[#4A4A4A] mb-12 max-w-2xl mx-auto"
        >
          Stop guessing. Start growing. Get a comprehensive 360° marketing audit of your digital presence — completely free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="h-[60px] px-10 bg-[#E8440A] text-white font-sans font-bold text-[15px] rounded-md flex items-center gap-3 hover:bg-[#1B2D5B] transition-all duration-300 shadow-xl shadow-[#E8440A]/20 group"
            >
              Get Your Free Marketing Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <a
              href="https://wa.me/916026767767"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[60px] px-10 bg-white text-[#0D0D0D] font-sans font-bold text-[15px] rounded-md flex items-center gap-3 border border-[#E0DDD6] hover:border-[#E8440A] transition-all duration-300 group"
            >
              WhatsApp Us →
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-sans text-[13px] text-[#888888] mt-6 uppercase tracking-[1px]"
        >
          No commitments. No contracts. Just actionable insights.
        </motion.p>
      </div>
    </section>
  );
}
