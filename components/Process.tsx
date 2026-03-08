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
    <section className="py-24 bg-card-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="font-sans font-bold text-xs text-accent-orange uppercase tracking-[2px] mb-4 block">How We Work</span>
          <h2 className="font-display font-bold text-[32px] md:text-[48px] text-brand-navy tracking-[-1px] max-w-3xl mx-auto">
            From Strategy to Scale — Our 4-Step Process
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-border-warm -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-32 h-32 bg-secondary-bg rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-lg relative z-10">
                  <span className="font-stats text-[72px] text-accent-gold leading-none mt-2">{step.number}</span>
                </div>
                <h3 className="font-display font-bold text-[22px] md:text-[28px] text-brand-navy mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-[17px] leading-[1.75] text-secondary-text max-w-xs">
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
