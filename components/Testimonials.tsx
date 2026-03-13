'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "MetaZynx completely transformed our digital presence. Within 6 months, our organic traffic tripled and our ROAS on Meta ads hit an all-time high of 6.2x. They don't just execute; they strategize like true partners.",
      name: "Karan Malhotra",
      company: "RetailMax",
      designation: "Chief Marketing Officer"
    },
    {
      quote: "We were managing 3 different agencies before MetaZynx. Bringing everything under their 360° umbrella was the best decision we made. The synergy between SEO, Paid Ads, and Creative is incredible.",
      name: "Siddharth Nair",
      company: "FinServe Pro",
      designation: "VP of Digital Strategy"
    },
    {
      quote: "Their data-first approach is refreshing. No vanity metrics, just hard numbers that impact the bottom line. Our cost per acquisition dropped by 40% while lead quality improved significantly.",
      name: "Neha Agarwal",
      company: "EduFirst",
      designation: "Founder & CEO"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary-bg border-y border-border-glass relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">
            [ Client Success ]
          </span>
          <h2 className="font-sans font-bold text-[40px] md:text-[56px] text-primary-text tracking-tighter leading-[1.1] max-w-3xl mx-auto">
            Don&apos;t Just Take Our Word For It.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg p-8 md:p-10 rounded-2xl border border-border-glass hover:border-brand-action/30 transition-all duration-300 relative group flex flex-col h-full"
            >
              <Quote size={40} className="text-brand-action/20 absolute top-8 right-8 group-hover:text-brand-action/40 transition-colors duration-300" />
              
              <p className="font-sans text-[16px] leading-[1.7] text-secondary-text mb-8 italic relative z-10 flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="border-t border-border-glass pt-6 mt-auto">
                <p className="font-sans font-bold text-[18px] text-primary-text mb-1 tracking-tight">{testimonial.name}</p>
                <p className="font-mono text-[12px] text-muted-text uppercase tracking-[1px] mb-1">{testimonial.designation}</p>
                <p className="font-sans text-[14px] text-brand-action font-medium">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
