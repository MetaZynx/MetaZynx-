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
      slug: 'future-of-search-ai-overviews'
    },
    {
      category: 'Performance Marketing',
      title: 'Why Your Meta Ads Are Failing (And How to Fix Them)',
      excerpt: 'A deep dive into common account structure mistakes and creative fatigue that kill ROAS.',
      slug: 'why-meta-ads-fail'
    },
    {
      category: 'Social Media',
      title: 'UGC is Dead. Long Live Authentic Creator Partnerships.',
      excerpt: 'Why consumers see through fake UGC and how to build genuine creator relationships that convert.',
      slug: 'authentic-creator-partnerships'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">
              [ Insights ]
            </span>
            <h2 className="font-sans font-bold text-[40px] md:text-[56px] text-primary-text tracking-tighter leading-[1.1]">
              Latest from the <br className="hidden md:block" />
              <span className="text-secondary-text">Metazynx Desk</span>
            </h2>
          </div>
          <Link 
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 font-mono font-medium text-[14px] text-primary-text hover:text-brand-action transition-colors uppercase tracking-[1px] group"
          >
            View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card-bg rounded-2xl border border-border-glass overflow-hidden hover:border-brand-action/30 transition-all duration-300 flex flex-col h-full relative"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-action/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="p-8 md:p-10 flex-grow flex flex-col relative z-10">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-medium uppercase tracking-[1px] mb-6 self-start bg-secondary-bg border border-border-glass text-muted-text">
                  {post.category}
                </span>
                <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-primary-text mb-4 group-hover:text-brand-action transition-colors tracking-tight leading-[1.3]">
                  {post.title}
                </h3>
                <p className="font-sans text-[16px] leading-[1.6] text-secondary-text mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-primary-text group-hover:text-brand-action transition-colors mt-auto"
                >
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 font-mono font-medium text-[14px] text-primary-text hover:text-brand-action transition-colors uppercase tracking-[1px] group"
          >
            View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
