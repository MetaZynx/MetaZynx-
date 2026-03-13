'use client';

import { useState } from 'react';
import { Search, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'SEO', 'Paid Media', 'Social Media', 'Content', 'ORM', 'Strategy'];

const featuredPost = {
  category: 'Strategy',
  title: 'The 2026 Guide to Omnichannel Performance Marketing',
  excerpt: 'Why siloed marketing channels are killing your ROAS and how to build a cohesive, data-driven ecosystem that scales revenue predictably.',
  author: 'Divyam Bajaj',
  date: 'March 8, 2026',
  readTime: '8 min read',
  imageSeed: 'strategy',
  slug: 'omnichannel-performance-marketing-2026'
};

const posts = [
  {
    id: 1,
    category: 'SEO',
    title: 'The Future of Search: AI Overviews and Your Organic Strategy',
    excerpt: 'How to adapt your content strategy for the new era of AI-driven search results and maintain visibility.',
    author: 'Divyam Bajaj',
    date: 'March 5, 2026',
    readTime: '6 min read',
    imageSeed: 'seo',
    slug: 'future-of-search-ai-overviews'
  },
  {
    id: 2,
    category: 'Paid Media',
    title: 'Why Your Meta Ads Are Failing (And How to Fix Them)',
    excerpt: 'A deep dive into common account structure mistakes and creative fatigue that kill ROAS.',
    author: 'Divyam Bajaj',
    date: 'March 2, 2026',
    readTime: '5 min read',
    imageSeed: 'ads',
    slug: 'why-meta-ads-fail'
  },
  {
    id: 3,
    category: 'Social Media',
    title: 'UGC is Dead. Long Live Authentic Creator Partnerships.',
    excerpt: 'Why consumers see through fake UGC and how to build genuine creator relationships that convert.',
    author: 'Divyam Bajaj',
    date: 'Feb 28, 2026',
    readTime: '7 min read',
    imageSeed: 'social',
    slug: 'authentic-creator-partnerships'
  },
  {
    id: 4,
    category: 'Content',
    title: 'Core Web Vitals: The Silent Killer of E-Commerce Conversion Rates',
    excerpt: 'Why your slow website is costing you thousands in lost sales and how to optimize for speed.',
    author: 'Divyam Bajaj',
    date: 'Feb 24, 2026',
    readTime: '4 min read',
    imageSeed: 'web',
    slug: 'core-web-vitals-ecommerce'
  },
  {
    id: 5,
    category: 'ORM',
    title: 'Protecting Your Brand in the Age of Viral Outrage',
    excerpt: 'A proactive approach to online reputation management and crisis communication.',
    author: 'Divyam Bajaj',
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    imageSeed: 'reputation',
    slug: 'protecting-brand-viral-outrage'
  },
  {
    id: 6,
    category: 'Strategy',
    title: 'Design That Converts: The Psychology of Ad Creatives',
    excerpt: 'How color, typography, and layout influence purchasing decisions in digital advertising.',
    author: 'Divyam Bajaj',
    date: 'Feb 15, 2026',
    readTime: '6 min read',
    imageSeed: 'design',
    slug: 'psychology-of-ad-creatives'
  }
];

const popularPosts = [
  { title: '10 Technical SEO Mistakes Costing You Traffic', date: 'Jan 12, 2026', slug: 'technical-seo-mistakes' },
  { title: 'The Ultimate Guide to Google Ads Bidding Strategies', date: 'Jan 05, 2026', slug: 'google-ads-bidding' },
  { title: 'How to Build a High-Converting Landing Page', date: 'Dec 28, 2025', slug: 'high-converting-landing-page' }
];

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Hero & Search */}
      <section className="bg-primary-bg pt-20 pb-24 px-6 md:px-12 text-center relative overflow-hidden border-b border-border-glass">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-6 block">
            [ Blog & Insights ]
          </span>
          <h1 className="font-sans font-black text-[48px] md:text-[64px] leading-[1.05] tracking-tighter text-primary-text mb-8">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-text to-secondary-text">Intelligence</span>
          </h1>
          
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search articles, topics, or keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[60px] pl-14 pr-6 rounded-full bg-card-bg border border-border-glass text-primary-text placeholder:text-muted-text focus:outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-all font-sans text-[16px] shadow-sm"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-text" size={20} />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-sans font-bold text-[13px] uppercase tracking-[1px] transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-text text-primary-bg shadow-md'
                  : 'bg-card-bg text-secondary-text border border-border-glass hover:border-primary-text hover:text-primary-text'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Featured + Grid */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Featured Post (Only show if 'All' is selected and no search query) */}
            {activeCategory === 'All' && searchQuery === '' && (
              <div className="bg-card-bg rounded-2xl border border-border-glass overflow-hidden shadow-sm group hover:shadow-xl hover:border-brand-action/30 hover:-translate-y-[6px] transition-all duration-300">
                <div className="relative h-[400px] w-full bg-secondary-bg overflow-hidden border-b border-border-glass">
                  <Image
                    src={`https://picsum.photos/seed/${featuredPost.imageSeed}/1200/800`}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-1.5 bg-primary-bg/80 backdrop-blur-md border border-border-glass text-primary-text rounded-full text-xs font-mono font-bold uppercase tracking-[1px] shadow-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-6 mb-4 text-sm font-sans text-muted-text">
                    <div className="flex items-center gap-2"><User size={16} /> {featuredPost.author}</div>
                    <div className="flex items-center gap-2"><Calendar size={16} /> {featuredPost.date}</div>
                    <div className="flex items-center gap-2"><Clock size={16} /> {featuredPost.readTime}</div>
                  </div>
                  <h2 className="font-sans font-bold text-[32px] md:text-[40px] leading-[1.1] tracking-tight text-primary-text mb-4 group-hover:text-brand-action transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="font-sans text-[18px] leading-[1.7] text-secondary-text mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 font-sans font-bold text-[15px] text-primary-text group-hover:text-brand-action transition-colors uppercase tracking-[1px]"
                  >
                    Read Full Article <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}

            {/* Blog Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post) => (
                  <motion.div 
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card-bg rounded-2xl border border-border-glass overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-action/30 hover:-translate-y-[6px] transition-all duration-300 group flex flex-col h-full"
                  >
                    <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                      <div className="relative h-[240px] w-full bg-secondary-bg overflow-hidden border-b border-border-glass">
                        <Image
                          src={`https://picsum.photos/seed/${post.imageSeed}/800/600`}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-primary-bg/80 backdrop-blur-md border border-border-glass text-primary-text rounded-full text-[10px] font-mono font-bold uppercase tracking-[1px] shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex-grow flex flex-col">
                        <h3 className="font-sans font-bold text-[22px] leading-[1.3] tracking-tight text-primary-text mb-3 group-hover:text-brand-action transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="font-sans text-[15px] leading-[1.6] text-secondary-text mb-6 line-clamp-2 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-[13px] font-sans text-muted-text pt-6 border-t border-border-glass mt-auto">
                          <div className="flex items-center gap-1.5"><User size={14} /> {post.author}</div>
                          <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-card-bg rounded-2xl border border-border-glass">
                <p className="font-sans text-[18px] text-secondary-text">No articles found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Newsletter Signup */}
            <div className="bg-primary-bg p-8 rounded-2xl border border-border-glass relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-action/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <h3 className="font-sans font-bold text-[24px] text-primary-text mb-3 relative z-10 tracking-tight">Join 10,000+ Marketers</h3>
              <p className="font-sans text-[15px] text-secondary-text mb-6 relative z-10">
                Get weekly marketing insights — no spam, ever.
              </p>
              <form className="space-y-3 relative z-10">
                <input 
                  type="email" 
                  placeholder="Your work email" 
                  className="w-full px-4 py-3 rounded-xl bg-card-bg border border-border-glass text-primary-text placeholder:text-muted-text focus:outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-colors font-sans text-[14px]"
                />
                <button 
                  type="submit"
                  className="w-full h-[48px] bg-primary-text text-primary-bg font-sans font-bold text-[14px] uppercase tracking-[1.5px] rounded-xl hover:bg-brand-action hover:text-white transition-all shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Popular Posts */}
            <div className="bg-card-bg p-8 rounded-2xl border border-border-glass">
              <h3 className="font-sans font-bold text-[20px] text-primary-text mb-6 pb-4 border-b border-border-glass tracking-tight">
                Popular Posts
              </h3>
              <div className="space-y-6">
                {popularPosts.map((post, index) => (
                  <Link href={`/blog/${post.slug}`} key={index} className="group block">
                    <p className="font-mono text-[12px] font-medium text-brand-action uppercase tracking-[1px] mb-1">
                      {post.date}
                    </p>
                    <h4 className="font-sans font-bold text-[16px] leading-[1.4] text-primary-text group-hover:text-brand-action transition-colors">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
