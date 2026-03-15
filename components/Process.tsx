'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  { number: '01', title: 'Deep Audit', description: 'We analyse your current digital presence, competitors and market position inside-out', icon: '🔍' },
  { number: '02', title: 'Custom Strategy', description: 'A bespoke 360° plan built precisely around your goals, timeline and budget', icon: '📐' },
  { number: '03', title: 'Precision Execution', description: 'Our specialists execute across every channel with military discipline and speed', icon: '⚡' },
  { number: '04', title: 'Scale & Optimise', description: 'Continuous testing, learning and doubling down on what moves the needle', icon: '📈' },
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background number watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-sans font-black text-[300px] text-[#0D0D0D]/[0.02] select-none tracking-tighter">
          PROCESS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-medium text-[13px] text-[#E8440A] uppercase tracking-[2px] mb-4 block"
          >
            [ Our Methodology ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-[40px] md:text-[56px] text-[#0D0D0D] tracking-tighter leading-[1.1] max-w-3xl mx-auto"
          >
            From Strategy to Scale —{' '}
            <br className="hidden md:block" />
            <span className="text-[#4A4A4A]">Our 4-Step Process</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated connecting line */}
          <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-[#E0DDD6] -z-10">
            <motion.div className="h-full bg-[#E8440A]" style={{ width: lineWidth }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-[120px] h-[120px] bg-[#F2EFE9] rounded-full flex items-center justify-center mb-8 border-2 border-[#E0DDD6] relative z-10 group-hover:border-[#E8440A]/60 group-hover:bg-white transition-all duration-500 cursor-default"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-[#E8440A]/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  {/* Pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute inset-0 rounded-full border-2 border-[#E8440A]/30"
                  />
                  <span className="font-sans font-black text-[52px] text-[#0D0D0D]/25 group-hover:text-[#E8440A]/40 transition-colors duration-500 tracking-tighter leading-none">
                    {step.number}
                  </span>
                </motion.div>

                <motion.h3
                  className="font-sans font-bold text-[22px] text-[#0D0D0D] mb-4 tracking-tight"
                >
                  {step.title}
                </motion.h3>

                <p className="font-sans text-[16px] leading-[1.6] text-[#4A4A4A] max-w-[260px]">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    className="md:hidden w-[2px] h-[40px] bg-gradient-to-b from-[#E8440A] to-[#E0DDD6] mt-6 origin-top"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="font-sans text-[16px] text-[#4A4A4A] mb-6">
            Ready to start your growth journey?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8440A] text-white font-sans font-bold text-[14px] uppercase tracking-wider px-8 py-4 rounded-md hover:bg-[#1B2D5B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E8440A]/20"
          >
            Book Your Free Audit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
