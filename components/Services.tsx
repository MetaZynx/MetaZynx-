'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Search, Megaphone, PenTool, Code, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'SEO & Content',
      description: 'Dominate search rankings with data-driven SEO strategies and high-converting content that drives organic growth.',
      icon: <Search size={24} className="text-brand-action" />,
      link: '/services/seo',
      metric: '+150% Traffic'
    },
    {
      title: 'Meta & Google Ads',
      description: 'Precision-targeted paid campaigns engineered for maximum ROAS and scalable customer acquisition.',
      icon: <Megaphone size={24} className="text-brand-action" />,
      link: '/services/ads',
      metric: '4x Avg ROAS'
    },
    {
      title: 'Graphic Design',
      description: 'Premium visual identities, ad creatives, and brand assets that capture attention and drive action.',
      icon: <PenTool size={24} className="text-brand-action" />,
      link: '/services/design',
      metric: 'High Conversion'
    },
    {
      title: 'Web Development',
      description: 'High-performance, conversion-optimized websites built on modern tech stacks for serious brands.',
      icon: <Code size={24} className="text-brand-action" />,
      link: '/services/development',
      metric: '< 1s Load Time'
    },
    {
      title: 'Influencer & UGC',
      description: 'Authentic creator partnerships and user-generated content that builds trust and social proof at scale.',
      icon: <Users size={24} className="text-brand-action" />,
      link: '/services/influencer',
      metric: 'Viral Reach'
    },
    {
      title: 'ORM',
      description: 'Proactive online reputation management to protect and enhance your brand\'s digital footprint.',
      icon: <ShieldCheck size={24} className="text-brand-action" />,
      link: '/services/orm',
      metric: '5-Star Rating'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-action/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">
              [ Our Capabilities ]
            </span>
            <h2 className="font-sans font-bold text-[40px] md:text-[56px] text-primary-text leading-[1.1] tracking-tighter">
              Engineered for Scale. <br className="hidden md:block" />
              <span className="text-secondary-text">Designed for Impact.</span>
            </h2>
          </div>
          <Link 
            href="/services"
            className="hidden md:inline-flex items-center gap-2 font-mono font-medium text-[14px] text-primary-text hover:text-brand-action transition-colors uppercase tracking-[1px] group"
          >
            View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card-bg p-8 md:p-10 rounded-2xl border border-border-glass hover:border-brand-action/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-action/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary-bg border border-border-glass flex items-center justify-center group-hover:scale-110 group-hover:border-brand-action/30 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="font-mono text-[12px] text-muted-text bg-secondary-bg px-3 py-1 rounded-full border border-border-glass">
                  {service.metric}
                </span>
              </div>
              
              <div className="flex-grow relative z-10">
                <h3 className="font-sans font-bold text-[24px] text-primary-text mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="font-sans text-[16px] leading-[1.6] text-secondary-text mb-8">
                  {service.description}
                </p>
              </div>
              
              <div className="relative z-10 mt-auto pt-6 border-t border-border-glass">
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-primary-text group-hover:text-brand-action transition-colors"
                >
                  Explore Solution <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 font-mono font-medium text-[14px] text-primary-text hover:text-brand-action transition-colors uppercase tracking-[1px] group"
          >
            View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
