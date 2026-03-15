'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "MetaZynx completely transformed our digital presence. Within 6 months, our organic traffic tripled and our ROAS on Meta ads hit an all-time high of 6.2x. They don't just execute — they strategise like true partners.",
    name: "Karan Malhotra",
    company: "RetailMax",
    designation: "Chief Marketing Officer",
    initial: "K"
  },
  {
    quote: "We were managing 3 different agencies before MetaZynx. Bringing everything under their 360° umbrella was the best decision we made. The synergy between SEO, Paid Ads and Creative is incredible.",
    name: "Siddharth Nair",
    company: "FinServe Pro",
    designation: "VP of Digital Strategy",
    initial: "S"
  },
  {
    quote: "Their data-first approach is refreshing. No vanity metrics, just hard numbers that impact the bottom line. Our cost per acquisition dropped by 40% while lead quality improved significantly.",
    name: "Neha Agarwal",
    company: "EduFirst",
    designation: "Founder & CEO",
    initial: "N"
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setActive(prev => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-[#1B2D5B] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.sin(i) * 60, 0],
              y: [0, Math.cos(i) * 40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full blur-[80px]"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              background: i % 2 === 0 ? 'rgba(232,68,10,0.08)' : 'rgba(255,255,255,0.04)',
              left: `${(i * 20) % 80}%`,
              top: `${(i * 15) % 70}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-medium text-[13px] text-[#E8440A] uppercase tracking-[2px] mb-4 block"
          >
            [ Client Success ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-[40px] md:text-[56px] text-white tracking-tighter leading-[1.1]"
          >
            Don&apos;t Just Take Our Word For It.
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 md:p-14 w-full"
            >
              <Quote size={48} className="text-[#E8440A]/30 mb-6" />
              <p className="font-sans text-[18px] md:text-[22px] leading-[1.7] text-white/90 mb-10 italic">
                &quot;{testimonials[active].quote}&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-[#E8440A] flex items-center justify-center font-sans font-bold text-white text-lg flex-shrink-0">
                  {testimonials[active].initial}
                </div>
                <div>
                  <p className="font-sans font-bold text-[18px] text-white">{testimonials[active].name}</p>
                  <p className="font-sans text-[13px] text-white/60">{testimonials[active].designation} · {testimonials[active].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#E8440A] hover:text-[#E8440A] transition-all duration-200">
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}>
                <motion.div
                  animate={{ width: i === active ? 28 : 8, backgroundColor: i === active ? '#E8440A' : 'rgba(255,255,255,0.3)' }}
                  className="h-2 rounded-full"
                />
              </button>
            ))}
          </div>

          <button onClick={() => navigate(1)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#E8440A] hover:text-[#E8440A] transition-all duration-200">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
