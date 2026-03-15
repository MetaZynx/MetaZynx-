'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  { category: 'SEO', title: 'The Future of Search: AI Overviews and Your Organic Strategy', excerpt: 'How to adapt your content strategy for the new era of AI-driven search results and maintain visibility.', slug: 'future-of-search-ai-overviews', readTime: '6 min read', color: '#E8440A' },
  { category: 'Paid Ads', title: 'Why Your Meta Ads Are Failing (And How to Fix Them)', excerpt: 'A deep dive into common account structure mistakes and creative fatigue that kill ROAS dead.', slug: 'why-meta-ads-fail', readTime: '8 min read', color: '#1B2D5B' },
  { category: 'Social Media', title: 'UGC is Dead. Long Live Authentic Creator Partnerships.', excerpt: 'Why consumers see through fake UGC and how to build genuine creator relationships that convert.', slug: 'authentic-creator-partnerships', readTime: '5 min read', color: '#F5A623' },
];

export default function BlogPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAF8] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1B2D5B]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="font-sans font-medium text-[13px] text-[#E8440A] uppercase tracking-[2px] mb-4 block">[ Insights ]</span>
            <h2 className="font-sans font-bold text-[40px] md:text-[56px] text-[#0D0D0D] tracking-tighter leading-[1.1]">
              Latest from the <br className="hidden md:block" />
              <span className="text-[#4A4A4A]">MetaZynx Desk</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/blog" className="hidden md:inline-flex items-center gap-2 font-sans font-medium text-[14px] text-[#0D0D0D] hover:text-[#E8440A] transition-colors uppercase tracking-[1px] group">
              View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl border border-[#E0DDD6] overflow-hidden hover:border-[#E8440A]/30 transition-all duration-300 flex flex-col h-full"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              {/* Color bar top */}
              <div className="h-[4px] w-full" style={{ background: post.color }} />

              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-[1px] text-white"
                    style={{ background: post.color }}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[12px] text-[#888888] font-sans">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-[#0D0D0D] mb-4 group-hover:text-[#E8440A] transition-colors tracking-tight leading-[1.3]">
                  {post.title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.6] text-[#4A4A4A] mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-[#0D0D0D] group-hover:text-[#E8440A] transition-colors mt-auto"
                >
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center gap-2 font-sans font-medium text-[14px] text-[#0D0D0D] hover:text-[#E8440A] transition-colors uppercase tracking-[1px] group">
            View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
