'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  const posts = [
    {
      category: 'SEO',
      title: 'The Future of Search: AI Overviews and Your Organic Strategy',
      excerpt: 'How to adapt your content strategy for the new era of AI-driven search results and maintain visibility.',
      color: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      category: 'Performance Marketing',
      title: 'Why Your Meta Ads Are Failing (And How to Fix Them)',
      excerpt: 'A deep dive into common account structure mistakes and creative fatigue that kill ROAS.',
      color: 'bg-orange-100 text-orange-700 border-orange-200'
    },
    {
      category: 'Social Media',
      title: 'UGC is Dead. Long Live Authentic Creator Partnerships.',
      excerpt: 'Why consumers see through fake UGC and how to build genuine creator relationships that convert.',
      color: 'bg-purple-100 text-purple-700 border-purple-200'
    }
  ];

  return (
    <section className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-sans font-bold text-xs text-accent-orange uppercase tracking-[2px] mb-4 block">Insights</span>
            <h2 className="font-display font-bold text-[32px] md:text-[48px] text-brand-navy tracking-[-1px] max-w-2xl">
              Latest from the MetaZynx Desk
            </h2>
          </div>
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-brand-navy hover:text-accent-orange transition-colors uppercase tracking-[1px] pb-2 border-b-2 border-brand-navy hover:border-accent-orange"
          >
            View All Articles <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card-bg rounded-xl border border-border-warm overflow-hidden hover:shadow-[0_20px_40px_rgba(27,45,91,0.08)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex-grow flex flex-col">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-[1px] mb-6 self-start border ${post.color}`}>
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-[22px] md:text-[24px] text-brand-navy mb-4 group-hover:text-accent-orange transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.7] text-secondary-text mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-brand-navy group-hover:text-accent-orange transition-colors uppercase tracking-[1px] mt-auto"
                >
                  Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
