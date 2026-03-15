'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import Link from 'next/link';
import { Search, Megaphone, PenTool, Code, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { useRef, MouseEvent } from 'react';

const services = [
  { title: 'SEO & Content', description: 'Dominate search rankings with data-driven SEO strategies and high-converting content that drives sustainable organic growth.', icon: Search, link: '/services/seo', metric: '+150% Traffic', color: '#E8440A' },
  { title: 'Meta & Google Ads', description: 'Precision-targeted paid campaigns engineered for maximum ROAS and scalable customer acquisition.', icon: Megaphone, link: '/services/ads', metric: '4x Avg ROAS', color: '#E8440A' },
  { title: 'Graphic Design', description: 'Premium visual identities, ad creatives and brand assets that capture attention and drive action.', icon: PenTool, link: '/services/design', metric: 'High Conversion', color: '#E8440A' },
  { title: 'Web Development', description: 'High-performance, conversion-optimised websites built on modern tech stacks for serious brands.', icon: Code, link: '/services/development', metric: '< 1s Load Time', color: '#E8440A' },
  { title: 'Influencer & UGC', description: 'Authentic creator partnerships and user-generated content that builds trust and social proof at scale.', icon: Users, link: '/services/influencer', metric: 'Viral Reach', color: '#E8440A' },
  { title: 'ORM', description: 'Proactive online reputation management to protect and enhance your brand\'s digital footprint permanently.', icon: ShieldCheck, link: '/services/orm', metric: '5-Star Rating', color: '#E8440A' },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 15);
    y.set((e.clientY - centerY) / 15);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };
  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX: springY, rotateY: springX, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group bg-white p-8 md:p-10 rounded-2xl border border-[#E0DDD6] hover:border-[#E8440A]/40 transition-all duration-300 relative overflow-hidden flex flex-col h-full cursor-default"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(232,68,10,0.06) 0%, transparent 70%)' }}
      />

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: '0 0 0 1px rgba(232,68,10,0.2), 0 20px 60px rgba(232,68,10,0.06)' }}
      />

      <div className="flex justify-between items-start mb-8 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 rounded-xl bg-[#F2EFE9] border border-[#E0DDD6] flex items-center justify-center group-hover:bg-[#E8440A]/10 group-hover:border-[#E8440A]/30 transition-all duration-300"
        >
          <Icon size={22} className="text-[#E8440A]" />
        </motion.div>
        <span className="font-sans text-[12px] text-[#888888] bg-[#F2EFE9] px-3 py-1 rounded-full border border-[#E0DDD6] group-hover:border-[#E8440A]/30 group-hover:text-[#E8440A] transition-all duration-300">
          {service.metric}
        </span>
      </div>

      <div className="flex-grow relative z-10">
        <h3 className="font-sans font-bold text-[22px] text-[#0D0D0D] mb-3 tracking-tight group-hover:text-[#E8440A] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="font-sans text-[16px] leading-[1.6] text-[#4A4A4A] mb-8">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 mt-auto pt-6 border-t border-[#E0DDD6]">
        <Link
          href={service.link}
          className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-[#0D0D0D] group-hover:text-[#E8440A] transition-colors"
        >
          Explore Solution
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#E8440A]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1B2D5B]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-sans font-medium text-[13px] text-[#E8440A] uppercase tracking-[2px] mb-4 block"
            >
              [ Our Capabilities ]
            </motion.span>
            <h2 className="font-sans font-bold text-[40px] md:text-[56px] text-[#0D0D0D] leading-[1.1] tracking-tighter">
              Engineered for Scale.<br className="hidden md:block" />
              <span className="text-[#4A4A4A]"> Designed for Impact.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/services"
              className="hidden md:inline-flex items-center gap-2 font-sans font-medium text-[14px] text-[#0D0D0D] hover:text-[#E8440A] transition-colors uppercase tracking-[1px] group"
            >
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/services" className="inline-flex items-center gap-2 font-sans font-medium text-[14px] text-[#0D0D0D] hover:text-[#E8440A] transition-colors uppercase tracking-[1px] group">
            View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
