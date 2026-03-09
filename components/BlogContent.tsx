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
  author: 'Rahul Sharma',
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
    author: 'Priya Desai',
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
    author: 'Rahul Sharma',
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
    author: 'Anand Verma',
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
    author: 'Priya Desai',
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
    author: 'Rahul Sharma',
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
    author: 'Anand Verma',
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
      <section className="bg-brand-navy pt-32 pb-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-extrabold text-[48px] md:text-[64px] leading-[1.1] tracking-[-2px] text-white mb-8">
            Insights & Intelligence
          </h1>
          
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search articles, topics, or keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[60px] pl-14 pr-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent-orange focus:bg-white/15 transition-all font-sans text-[16px]"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50" size={20} />
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
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-secondary-text border border-border-warm hover:border-brand-navy hover:text-brand-navy'
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
              <div className="bg-white rounded-2xl border border-border-warm overflow-hidden shadow-sm group hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300">
                <div className="relative h-[400px] w-full bg-secondary-bg overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${featuredPost.imageSeed}/1200/800`}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-1.5 bg-white text-brand-navy rounded-full text-xs font-sans font-bold uppercase tracking-[1px] shadow-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-6 mb-4 text-sm font-sans text-secondary-text">
                    <div className="flex items-center gap-2"><User size={16} /> {featuredPost.author}</div>
                    <div className="flex items-center gap-2"><Calendar size={16} /> {featuredPost.date}</div>
                    <div className="flex items-center gap-2"><Clock size={16} /> {featuredPost.readTime}</div>
                  </div>
                  <h2 className="font-display font-bold text-[32px] md:text-[40px] leading-[1.1] tracking-[-1px] text-brand-navy mb-4 group-hover:text-accent-orange transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="font-sans text-[18px] leading-[1.7] text-secondary-text mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 font-sans font-bold text-[15px] text-brand-navy group-hover:text-accent-orange transition-colors uppercase tracking-[1px]"
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
                    className="bg-white rounded-2xl border border-border-warm overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300 group flex flex-col h-full"
                  >
                    <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                      <div className="relative h-[240px] w-full bg-secondary-bg overflow-hidden">
                        <Image
                          src={`https://picsum.photos/seed/${post.imageSeed}/800/600`}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-white text-brand-navy rounded-full text-[10px] font-sans font-bold uppercase tracking-[1px] shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex-grow flex flex-col">
                        <h3 className="font-display font-bold text-[22px] leading-[1.3] tracking-[-0.5px] text-brand-navy mb-3 group-hover:text-accent-orange transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="font-sans text-[15px] leading-[1.6] text-secondary-text mb-6 line-clamp-2 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-[13px] font-sans text-muted-text pt-6 border-t border-border-warm mt-auto">
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
              <div className="text-center py-20 bg-white rounded-2xl border border-border-warm">
                <p className="font-sans text-[18px] text-secondary-text">No articles found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Newsletter Signup */}
            <div className="bg-brand-navy p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <h3 className="font-display font-bold text-[24px] mb-3 relative z-10">Join 10,000+ Marketers</h3>
              <p className="font-sans text-[15px] text-gray-300 mb-6 relative z-10">
                Get weekly marketing insights — no spam, ever.
              </p>
              <form className="space-y-3 relative z-10">
                <input 
                  type="email" 
                  placeholder="Your work email" 
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent-orange transition-colors font-sans text-[14px]"
                />
                <button 
                  type="submit"
                  className="w-full h-[48px] bg-accent-orange text-white font-sans font-bold text-[14px] uppercase tracking-[1.5px] rounded-md hover:bg-opacity-90 transition-all shadow-md shadow-accent-orange/20"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-8 rounded-2xl border border-border-warm">
              <h3 className="font-display font-bold text-[20px] text-brand-navy mb-6 pb-4 border-b border-border-warm">
                Popular Posts
              </h3>
              <div className="space-y-6">
                {popularPosts.map((post, index) => (
                  <Link href={`/blog/${post.slug}`} key={index} className="group block">
                    <p className="font-sans text-[12px] font-bold text-accent-orange uppercase tracking-[1px] mb-1">
                      {post.date}
                    </p>
                    <h4 className="font-display font-bold text-[16px] leading-[1.4] text-brand-navy group-hover:text-accent-orange transition-colors">
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
