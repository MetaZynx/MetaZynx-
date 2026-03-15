'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import VanillaCounter from './VanillaCounter';
import { BarChart3, Rocket, TrendingUp, Award } from 'lucide-react';

const industries = [
  'E-Commerce', 'Real Estate', 'Healthcare', 'Education',
  'FinTech', 'D2C Brands', 'SaaS', 'Hospitality'
];

export default function SocialProof() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const stats = [
    { icon: <BarChart3 className="text-[#E8440A]" size={28} />, prefix: '$', end: 6, suffix: 'M+', label: 'Ad Spend Managed', decimals: 0 },
    { icon: <Rocket className="text-[#E8440A]" size={28} />, prefix: '', end: 200, suffix: '+', label: 'Campaigns Delivered', decimals: 0 },
    { icon: <TrendingUp className="text-[#E8440A]" size={28} />, prefix: '', end: 8.4, suffix: 'x', label: 'Average ROAS', decimals: 1 },
    { icon: <Award className="text-[#E8440A]" size={28} />, prefix: '', end: 97, suffix: '%', label: 'Client Retention', decimals: 0 },
  ];

  return (
    <section ref={ref} className="bg-[#F2EFE9] border-t border-[#E0DDD6] py-[80px] overflow-hidden relative">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#E8440A]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1B2D5B]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-10"
        >
          <div className="h-[1px] bg-[#E0DDD6] flex-grow max-w-[200px]" />
          <span className="font-sans font-medium text-[12px] text-[#888888] uppercase tracking-[4px] px-4 text-center">
            Industries We Serve
          </span>
          <div className="h-[1px] bg-[#E0DDD6] flex-grow max-w-[200px]" />
        </motion.div>

        {/* Scrolling industry tags */}
        <div className="overflow-hidden mb-12">
          <motion.div style={{ x }} className="flex gap-4 whitespace-nowrap">
            {[...industries, ...industries, ...industries].map((name, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, borderColor: '#E8440A' }}
                className="bg-white border border-[#E0DDD6] rounded-full px-6 py-3 shrink-0 cursor-default transition-colors duration-200"
              >
                <span className="font-sans font-medium text-[14px] text-[#4A4A4A]">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="h-[1px] bg-[#E0DDD6] mb-[40px] w-full" />

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(232,68,10,0.08)' }}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-[#E0DDD6] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Orange top bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8440A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              {stat.icon}
              <p className="font-sans font-bold text-[48px] md:text-[56px] text-[#0D0D0D] leading-none my-3 tracking-tighter">
                <VanillaCounter prefix={stat.prefix} end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="font-sans font-medium text-[12px] text-[#888888] uppercase tracking-[2px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-[40px] text-center"
        >
          <p className="font-sans font-light text-[14px] text-[#888888] italic">
            From e-commerce and real estate to healthcare, education and finance — MetaZynx delivers results across every industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
