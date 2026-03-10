'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "MetaZynx completely transformed our digital presence. Within 6 months, our organic traffic tripled and our ROAS on Meta ads hit an all-time high of 6.2x. They don't just execute; they strategize like true partners.",
      name: "Rahul Sharma",
      company: "GrowthBrand",
      designation: "Chief Marketing Officer"
    },
    {
      quote: "We were managing 3 different agencies before MetaZynx. Bringing everything under their 360° umbrella was the best decision we made. The synergy between SEO, Paid Ads, and Creative is incredible.",
      name: "Priya Desai",
      company: "FinServe Pro",
      designation: "VP of Digital Strategy"
    },
    {
      quote: "Their data-first approach is refreshing. No vanity metrics, just hard numbers that impact the bottom line. Our cost per acquisition dropped by 40% while lead quality improved significantly.",
      name: "Anand Verma",
      company: "EduFirst Solutions",
      designation: "Founder & CEO"
    }
  ];

  return (
    <section className="py-24 bg-secondary-bg border-y border-border-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-xs text-accent-orange uppercase tracking-[2px] mb-4 block">Client Success</span>
          <h2 className="font-display font-bold text-[32px] md:text-[48px] text-brand-navy tracking-[-1px] max-w-3xl mx-auto">
            Don&apos;t Just Take Our Word For It.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg p-10 rounded-xl border border-border-warm shadow-sm hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300 relative"
            >
              <Quote size={48} className="text-accent-orange/20 absolute top-8 right-8" />
              <p className="font-sans text-[17px] leading-[1.75] text-secondary-text mb-8 italic relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="border-t border-border-warm pt-6">
                <p className="font-display font-bold text-[18px] text-brand-navy mb-1">{testimonial.name}</p>
                <p className="font-sans text-[13px] text-muted-text uppercase tracking-[1px] font-medium">{testimonial.designation}</p>
                <p className="font-sans text-[13px] text-accent-orange font-medium mt-1">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
