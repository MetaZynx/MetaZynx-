'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Search, Megaphone, PenTool, Code, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'SEO & Content',
      description: 'Dominate search rankings with data-driven SEO strategies and high-converting content that drives organic growth.',
      icon: <Search size={32} className="text-accent-orange" />,
      link: '/services/seo'
    },
    {
      title: 'Meta & Google Ads',
      description: 'Precision-targeted paid campaigns engineered for maximum ROAS and scalable customer acquisition.',
      icon: <Megaphone size={32} className="text-accent-orange" />,
      link: '/services/paid-ads'
    },
    {
      title: 'Graphic Design',
      description: 'Premium visual identities, ad creatives, and brand assets that capture attention and drive action.',
      icon: <PenTool size={32} className="text-accent-orange" />,
      link: '/services/design'
    },
    {
      title: 'Web Development',
      description: 'High-performance, conversion-optimized websites built on modern tech stacks for serious brands.',
      icon: <Code size={32} className="text-accent-orange" />,
      link: '/services/development'
    },
    {
      title: 'Influencer & UGC',
      description: 'Authentic creator partnerships and user-generated content that builds trust and social proof at scale.',
      icon: <Users size={32} className="text-accent-orange" />,
      link: '/services/influencer'
    },
    {
      title: 'ORM',
      description: 'Proactive online reputation management to protect and enhance your brand\'s digital footprint.',
      icon: <ShieldCheck size={32} className="text-accent-orange" />,
      link: '/services/orm'
    }
  ];

  return (
    <section className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-xs text-accent-orange uppercase tracking-[2px] mb-4 block">What We Do</span>
          <h2 className="font-display font-bold text-[32px] md:text-[48px] text-brand-navy tracking-[-1px] max-w-3xl mx-auto">
            Every Service You Need. One Agency You Trust.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card-bg p-10 rounded-xl border border-border-warm hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(27,45,91,0.08)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-6 bg-secondary-bg w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-accent-orange/10 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="font-display font-bold text-[22px] md:text-[28px] text-brand-navy mb-4">
                {service.title}
              </h3>
              
              <p className="font-sans text-[17px] leading-[1.75] text-secondary-text mb-8">
                {service.description}
              </p>
              
              <Link 
                href={service.link}
                className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-brand-navy group-hover:text-accent-orange transition-colors uppercase tracking-[1px]"
              >
                Explore Service <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center h-[52px] px-8 bg-brand-navy text-white font-sans font-medium text-[15px] uppercase tracking-[1.5px] rounded-md hover:scale-[1.03] duration-200 ease-out transition-all"
          >
            Need a custom package? Let&apos;s talk.
          </Link>
        </div>
      </div>
    </section>
  );
}
