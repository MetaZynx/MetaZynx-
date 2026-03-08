import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
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
    },
    {
      category: 'Web Development',
      title: 'Core Web Vitals: The Silent Killer of E-Commerce Conversion Rates',
      excerpt: 'Why your slow website is costing you thousands in lost sales and how to optimize for speed.',
      color: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      category: 'ORM',
      title: 'Protecting Your Brand in the Age of Viral Outrage',
      excerpt: 'A proactive approach to online reputation management and crisis communication.',
      color: 'bg-red-100 text-red-700 border-red-200'
    },
    {
      category: 'Graphic Design',
      title: 'Design That Converts: The Psychology of Ad Creatives',
      excerpt: 'How color, typography, and layout influence purchasing decisions in digital advertising.',
      color: 'bg-pink-100 text-pink-700 border-pink-200'
    }
  ];

  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-32">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-brand-navy mb-8">Insights & Strategies</h1>
        <p className="font-sans text-[19px] text-secondary-text max-w-3xl mb-16">
          Expert analysis, actionable strategies, and the latest trends in performance marketing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl border border-border-warm overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full">
              <div className="p-8 flex-grow flex flex-col">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-[1px] mb-6 self-start border ${post.color}`}>
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-[22px] md:text-[24px] text-brand-navy mb-4 hover:text-accent-orange transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.7] text-secondary-text mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-brand-navy hover:text-accent-orange transition-colors uppercase tracking-[1px] mt-auto">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
