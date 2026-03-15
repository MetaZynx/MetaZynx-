'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Zap, Globe, BarChart2, Users } from 'lucide-react';
import VanillaCounter from './VanillaCounter';

const differentiators = [
  { title: 'Data-First, Always', description: 'Every decision backed by analytics, not gut feeling', icon: BarChart2 },
  { title: 'Full 360° Capability', description: 'No need to manage multiple agencies — we do it all', icon: Globe },
  { title: 'Dedicated Account Managers', description: 'Your brand gets focused, personal attention every day', icon: Users },
  { title: 'Results in 90 Days', description: 'Real metrics that impact your bottom line — fast', icon: Zap },
];

export default function WhyMetaZynx() {
  return (
    <section className="py-24 md:py-32 bg-[#F2EFE9] border-y border-[#E0DDD6] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(27,45,91,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8440A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left — Big animated stat */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left"
        >
          {/* Big 97% */}
          <div className="relative mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative"
            >
              <span className="font-sans font-black text-[120px] md:text-[180px] leading-none text-[#0D0D0D] tracking-tighter">
                <VanillaCounter end={97} suffix="%" />
              </span>
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-[6px] bg-[#E8440A] origin-left rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 inline-flex bg-[#E8440A] text-white font-sans font-bold text-[13px] uppercase tracking-[2px] px-6 py-2 rounded-full shadow-lg shadow-[#E8440A]/20"
            >
              Client Retention Rate
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-[18px] leading-[1.7] text-[#4A4A4A] max-w-md"
          >
            We don&apos;t just sign clients — we build long-term partnerships. Our retention rate speaks for the consistent ROI we deliver every single month.
          </motion.p>

          {/* Mini stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex gap-8 mt-8"
          >
            {[['90', 'Day Results'], ['360°', 'Services'], ['0', 'Lock-ins']].map(([num, label]) => (
              <div key={label} className="text-center">
                <p className="font-sans font-black text-[32px] text-[#E8440A] tracking-tighter leading-none">{num}</p>
                <p className="font-sans text-[12px] text-[#888888] uppercase tracking-[1px] mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Differentiators */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="mb-10">
            <span className="font-sans font-medium text-[13px] text-[#E8440A] uppercase tracking-[2px] mb-4 block">
              [ The MetaZynx Advantage ]
            </span>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#0D0D0D] tracking-tighter leading-[1.1]">
              Why Ambitious Brands Choose Us
            </h2>
          </div>

          <div className="grid gap-4">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 6, boxShadow: '0 8px 30px rgba(232,68,10,0.08)' }}
                  className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-[#E0DDD6] hover:border-[#E8440A]/30 transition-all duration-300 group cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mt-1 w-10 h-10 rounded-xl bg-[#F2EFE9] flex items-center justify-center shrink-0 group-hover:bg-[#E8440A] transition-colors duration-300"
                  >
                    <Icon size={18} className="text-[#E8440A] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h4 className="font-sans font-bold text-[18px] text-[#0D0D0D] mb-1 tracking-tight group-hover:text-[#E8440A] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[15px] text-[#4A4A4A] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
