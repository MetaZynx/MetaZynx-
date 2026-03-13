'use client';

import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Deep Audit',
      description: 'We analyse your current digital presence, competitors and market position'
    },
    {
      number: '02',
      title: 'Custom Strategy',
      description: 'A bespoke 360° plan built around your goals and budget'
    },
    {
      number: '03',
      title: 'Precision Execution',
      description: 'Our specialists execute with military precision across every channel'
    },
    {
      number: '04',
      title: 'Scale & Optimise',
      description: 'Continuous testing, learning, and scaling what works'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 md:mb-32">
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">
            [ Our Methodology ]
          </span>
          <h2 className="font-sans font-bold text-[40px] md:text-[56px] text-primary-text tracking-tighter leading-[1.1] max-w-3xl mx-auto">
            From Strategy to Scale — <br className="hidden md:block" />
            <span className="text-secondary-text">Our 4-Step Process</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-[1px] bg-border-glass -z-10">
            {/* Animated progress line */}
            <motion.div 
              className="h-full bg-brand-action"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-[120px] h-[120px] bg-secondary-bg rounded-full flex items-center justify-center mb-8 border border-border-glass relative z-10 group-hover:border-brand-action/50 group-hover:bg-card-bg transition-all duration-500">
                  {/* Outer glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-brand-action/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  <span className="font-sans font-black text-[56px] text-primary-text/20 group-hover:text-primary-text transition-colors duration-500 tracking-tighter">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-primary-text mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="font-sans text-[16px] leading-[1.6] text-secondary-text max-w-[260px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
