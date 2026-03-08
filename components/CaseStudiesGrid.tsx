'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    client: 'E-Commerce Brand',
    category: 'Paid Ads',
    industry: 'E-Commerce',
    title: '6.2x ROAS in 90 Days',
    challenge: 'High CPA and severe creative fatigue on Meta Ads were eating into profit margins.',
    metrics: [
      { label: 'ROAS', value: '6.2x' },
      { label: 'CPA', value: '-42%' }
    ]
  },
  {
    id: 2,
    client: 'Real Estate Developer',
    category: 'Paid Ads',
    industry: 'Real Estate',
    title: '480% Increase in Qualified Leads',
    challenge: 'Generating high-volume but low-quality leads from generic search campaigns.',
    metrics: [
      { label: 'Lead Volume', value: '+480%' },
      { label: 'CPL', value: '-35%' }
    ]
  },
  {
    id: 3,
    client: 'B2B SaaS Platform',
    category: 'SEO',
    industry: 'SaaS',
    title: '215% Organic Traffic Growth',
    challenge: 'Stuck on page 2 for high-intent, bottom-of-funnel industry keywords.',
    metrics: [
      { label: 'Traffic', value: '+215%' },
      { label: 'Top 3 Ranks', value: '45+' }
    ]
  },
  {
    id: 4,
    client: 'Healthcare Provider',
    category: 'ORM',
    industry: 'Healthcare',
    title: 'Reputation Score from 3.1 to 4.8',
    challenge: 'Negative legacy reviews were severely impacting new patient acquisition.',
    metrics: [
      { label: 'Rating', value: '4.8/5' },
      { label: 'Reviews', value: '1,200+' }
    ]
  },
  {
    id: 5,
    client: 'D2C Retailer',
    category: 'Development',
    industry: 'Retail',
    title: 'Sub-2s Load Time & 40% Conv. Lift',
    challenge: 'A slow, bloated legacy Shopify theme was causing massive cart abandonment.',
    metrics: [
      { label: 'Load Time', value: '< 2s' },
      { label: 'Conv. Rate', value: '+40%' }
    ]
  },
  {
    id: 6,
    client: 'Luxury Resort',
    category: 'Social',
    industry: 'Hospitality',
    title: '3M+ Organic Views via Creators',
    challenge: 'Low brand awareness and engagement among the lucrative Gen-Z traveler demographic.',
    metrics: [
      { label: 'Views', value: '3M+' },
      { label: 'Engagement', value: '+310%' }
    ]
  }
];

const categories = ['All', 'SEO', 'Paid Ads', 'Social', 'ORM', 'Development'];

export default function CaseStudiesGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full font-sans font-bold text-[14px] uppercase tracking-[1px] transition-all duration-300 ${
              activeFilter === category
                ? 'bg-brand-navy text-white shadow-md'
                : 'bg-white text-secondary-text border border-border-warm hover:border-brand-navy hover:text-brand-navy'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredStudies.map((study) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-border-warm overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 bg-secondary-bg text-brand-navy rounded-full text-xs font-sans font-bold uppercase tracking-[1px]">
                    {study.industry}
                  </span>
                  <span className="text-xs font-sans font-bold uppercase tracking-[1px] text-accent-orange">
                    {study.category}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-[24px] md:text-[28px] leading-[1.2] text-brand-navy mb-4 group-hover:text-accent-orange transition-colors">
                  {study.title}
                </h3>
                
                <p className="font-sans text-[15px] leading-[1.7] text-secondary-text mb-8 flex-grow">
                  <strong className="text-brand-navy">Challenge:</strong> {study.challenge}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-y border-border-warm">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="font-stats text-[32px] text-accent-gold leading-none mb-1">{metric.value}</p>
                      <p className="font-sans text-[11px] font-bold uppercase tracking-[1px] text-muted-text">{metric.label}</p>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="#"
                  className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-brand-navy group-hover:text-accent-orange transition-colors uppercase tracking-[1px] mt-auto"
                >
                  Read Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredStudies.length === 0 && (
        <div className="text-center py-20">
          <p className="font-sans text-[18px] text-secondary-text">More case studies in this category coming soon.</p>
        </div>
      )}
    </section>
  );
}
