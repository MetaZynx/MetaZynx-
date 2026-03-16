import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const blogPosts = {
  'chandigarh-businesses-invisible-google': {
    title: 'Why Your Chandigarh Business Is Invisible on Google (And How to Fix It in 30 Days)',
    category: 'SEO',
    author: 'Divyam Bajaj',
    date: 'March 16, 2026',
    readTime: '6 min read',
    imageSeed: 'chandigarh-seo',
    content: `
      <p>If you run a business in Chandigarh — a restaurant in Sector 17, a clinic in Mohali, a real estate firm in Panchkula — there's a good chance your ideal customer searched for you on Google today.</p>
      <p>And found your competitor instead.</p>
      <p>This isn't bad luck. It's a fixable problem. And most Chandigarh businesses are making the same 5 mistakes that keep them invisible online.</p>

      <h2>Mistake 1: Your Google Business Profile is Incomplete or Non-Existent</h2>
      <p>When someone searches "best dental clinic in Chandigarh" or "interior designer near Sector 35," Google shows a local pack — three businesses with ratings, photos, hours, and a map pin. If you're not in that pack, you don't exist to that customer.</p>
      <p>Most local businesses either have no Google Business Profile, or one that was set up years ago with the wrong category, no photos, and a description that says nothing.</p>
      <p><strong>Fix:</strong> Claim your profile at business.google.com. Fill every field. Add 10+ photos. Get your first 5 reviews this week by asking your best customers directly.</p>

      <h2>Mistake 2: Your Website Doesn't Mention Where You Are</h2>
      <p>Google needs to understand your location to rank you locally. If your homepage says "We provide premium interior design services" without ever mentioning Chandigarh, Mohali, or Panchkula — Google won't show you to local searchers.</p>
      <p><strong>Fix:</strong> Add your city name naturally throughout your website. Title tags, headings, service pages, and your footer should all include your location.</p>

      <h2>Mistake 3: You Have No Review Strategy</h2>
      <p>Reviews are a ranking signal and a trust signal. One review from 2021 doesn't cut it. Businesses that consistently collect new reviews rank higher and convert better.</p>
      <p><strong>Fix:</strong> Create a simple system. After every successful job, send customers a direct link to your Google review page. Even 2 new reviews per month compounds significantly over a year.</p>

      <h2>Mistake 4: Your Website is Slow on Mobile</h2>
      <p>Over 70% of local searches in India happen on mobile. If your website takes more than 3 seconds to load on a phone, most visitors leave before they see anything. Google knows this, and penalises slow sites in rankings.</p>
      <p><strong>Fix:</strong> Test your site at pagespeed.web.dev. If your mobile score is below 70, it's hurting your rankings every single day.</p>

      <h2>Mistake 5: You Have No Consistent Content</h2>
      <p>Businesses that publish helpful, relevant content consistently rank for more keywords over time. A restaurant that publishes "Best places for corporate lunch in Chandigarh" will eventually rank for that search. Your competitor who only has a contact page won't.</p>
      <p><strong>Fix:</strong> Start with one blog post per month. Target what your customers actually search for, not industry jargon.</p>

      <h2>The 30-Day Action Plan</h2>
      <p>Here's exactly what to do this month if you want to start ranking locally:</p>
      <ul>
        <li><strong>Week 1:</strong> Claim and complete your Google Business Profile. Add photos, update description, set correct category.</li>
        <li><strong>Week 2:</strong> Audit your website. Add your city name to title tags, H1s, and service pages.</li>
        <li><strong>Week 3:</strong> Ask your top 10 customers for a Google review. Create a simple template message to send them.</li>
        <li><strong>Week 4:</strong> Write one blog post targeting a local search term your customers actually use.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Chandigarh's market is competitive but nowhere near saturated online. Most local businesses are still making basic mistakes. That means the businesses that fix these five issues in the next 30 days will have a significant advantage for months.</p>
      <p>At MetaZynx, we specialise in helping Chandigarh businesses go from invisible to ranking — and from ranking to converting. If you want a free audit of your current online presence, <a href="/contact">reach out here</a> or email us at info@metazynx.com.</p>
    `
  },

  'meta-ads-india-2026': {
    title: 'Why Your Meta Ads Stopped Working in 2026 (And What Actually Does)',
    category: 'Paid Media',
    author: 'Divyam Bajaj',
    date: 'March 16, 2026',
    readTime: '7 min read',
    imageSeed: 'meta-ads-2026',
    content: `
      <p>Something changed in Meta Ads in 2026. You've probably felt it.</p>
      <p>The same campaigns that drove strong ROAS in 2023 and 2024 are underperforming. Your cost per acquisition is climbing. Your retargeting isn't hitting the way it used to. You're spending more and getting less.</p>
      <p>You're not imagining it. And it's not your fault. The platform fundamentally changed.</p>

      <h2>What Changed: The Shift to AI-First Delivery</h2>
      <p>In late 2025, Meta completed its global rollout of AI-first ad delivery — including across India. This was the most significant change to Meta's ad delivery system in years.</p>
      <p>Before this shift, you controlled your audience. You defined who saw your ads through detailed targeting — interests, behaviours, lookalikes, custom audiences.</p>
      <p>After the shift, Meta's AI controls audience delivery. The algorithm now decides in real time which ad to show to which user, based on <strong>creative signals</strong> rather than your targeting parameters.</p>
      <p>This is why your carefully built audience segments are underperforming. The system has changed. Your strategy needs to change with it.</p>

      <h2>What's Failing in 2026</h2>
      <p><strong>Over-segmented campaigns.</strong> Multiple ad sets targeting narrow custom audiences worked before. Now they fragment your data, slow down the learning phase, and confuse the algorithm. Consolidate.</p>
      <p><strong>Stale creatives.</strong> Under the new system, creative is your primary targeting signal. If you're running the same ads you've had for 6 months, your performance will decline regardless of budget.</p>
      <p><strong>Broad interest targeting.</strong> Stacking interests tells the algorithm nothing useful. It actually restricts the AI from finding your best customers.</p>
      <p><strong>Low creative volume.</strong> The brands winning right now are testing 15–20 creative variations per month. Not boosting one post and hoping.</p>

      <h2>What's Actually Working in 2026</h2>
      <p><strong>Advantage+ Shopping Campaigns (ASC) for e-commerce.</strong> This is Meta's AI-powered campaign type that handles audience and placement automatically. For most Indian D2C brands with a product catalogue, this is now the highest-performing campaign structure.</p>
      <p><strong>UGC-style creatives.</strong> Polished studio ads are getting ignored. Raw, authentic, creator-style content — someone talking directly to camera about the product — is outperforming everything. This is not a trend. It's the new baseline.</p>
      <p><strong>Hook-first video.</strong> You have 1.5 seconds to stop the scroll. The first frame of your video needs to be the most compelling thing in the entire ad. Not your logo. Not a product shot. A pattern interrupt.</p>
      <p><strong>Broad targeting + strong creative.</strong> Let the algorithm find your audience. Give it compelling creative signals and enough budget to learn (minimum ₹500/day per campaign). Stop restricting it with narrow parameters.</p>

      <h2>The Right Campaign Structure for Indian Brands in 2026</h2>
      <p>Here's the simplified structure that's working:</p>
      <ul>
        <li><strong>Top of Funnel:</strong> One Advantage+ Shopping Campaign or Broad Audience campaign. Budget: 70% of your total spend. Creative: 8–10 variations (mix of UGC, static, short video).</li>
        <li><strong>Bottom of Funnel:</strong> One retargeting campaign targeting website visitors and existing customers. Budget: 30% of total spend. Creative: testimonials, offers, urgency-based messaging.</li>
      </ul>
      <p>Two campaigns. High creative volume. Let Meta's AI do the audience work.</p>

      <h2>The Metrics That Actually Matter</h2>
      <p>Stop obsessing over CPM and CTR. The only metrics that matter for Indian D2C brands on Meta in 2026:</p>
      <ul>
        <li><strong>Cost Per Purchase (CPP)</strong> — What does it actually cost to get a sale?</li>
        <li><strong>ROAS (Return on Ad Spend)</strong> — For every ₹1 spent, how much revenue came back?</li>
        <li><strong>Blended CAC (Customer Acquisition Cost)</strong> — Across all channels, what does a new customer cost?</li>
      </ul>
      <p>If your ROAS is below 2x, your campaigns need a creative overhaul before a budget increase. More spend on a broken strategy accelerates the loss.</p>

      <h2>The Bottom Line</h2>
      <p>Meta Ads in India still work. In fact, for D2C brands with the right strategy, they're still the most scalable paid acquisition channel available. But the old playbook is dead.</p>
      <p>At MetaZynx, Meta Ads management is one of our core services. We've managed campaigns that have generated $10M+ in revenue across clients. If your current Meta Ads aren't delivering, <a href="/contact">book a free audit</a> — we'll tell you exactly what's broken and how to fix it.</p>
    `
  },

  'seo-for-indian-d2c-brands': {
    title: 'SEO for Indian D2C Brands: How to Get Organic Sales Without Burning Ad Budget',
    category: 'SEO',
    author: 'Divyam Bajaj',
    date: 'March 16, 2026',
    readTime: '8 min read',
    imageSeed: 'seo-d2c',
    content: `
      <p>Most Indian D2C brands have the same problem: they're completely dependent on Meta Ads and Google Ads for every sale.</p>
      <p>The moment the ad spend stops, the revenue stops. This isn't a business. It's a treadmill.</p>
      <p>The brands that build real, lasting revenue streams invest in SEO alongside paid ads. And the Indian D2C brands that have cracked SEO are seeing something powerful: organic traffic that converts — without a cost per click.</p>

      <h2>Why Most D2C Brands Ignore SEO (And Pay the Price)</h2>
      <p>SEO feels slow. Paid ads feel fast. So most D2C founders default to ads, see results, and never build the organic foundation.</p>
      <p>The problem: paid CAC (Customer Acquisition Cost) in India has increased significantly over the past 3 years. What used to cost ₹300 to acquire a customer on Meta now costs ₹600–₹1,200 for many categories.</p>
      <p>Brands with strong SEO have a structural advantage. Their organic CAC is near zero. Every paid rupee goes further because SEO is already doing the trust-building and intent-capturing work.</p>

      <h2>The 3 Types of SEO That Matter for D2C Brands</h2>

      <h2>1. Product SEO</h2>
      <p>This is the most direct revenue driver. It means ranking your product pages for high-intent search terms — the queries people type when they're ready to buy.</p>
      <p>Examples: "buy protein powder online India", "handmade leather wallet men India", "organic face serum for oily skin".</p>
      <p>Most D2C brands have product pages with one line of description and nothing else. That's not enough to rank. Every product page needs a proper title tag, meta description, 300+ words of keyword-rich copy, structured data markup, and customer reviews rendered on-page.</p>

      <h2>2. Category SEO</h2>
      <p>Category pages are often the highest-traffic, highest-converting pages on a D2C site — and the most neglected. A category page for "Men's Skincare" shouldn't just be a grid of products. It should answer the searcher's intent: what to look for, how to choose, what's trending.</p>

      <h2>3. Content SEO (Blog)</h2>
      <p>This is the long game — and it compounds. A blog post targeting "how to choose a yoga mat India" can rank for years and send qualified traffic to your yoga mat product page consistently. The key is intent matching. Map your content to the right stage of the funnel.</p>

      <h2>The Technical Foundations You Can't Skip</h2>
      <ul>
        <li><strong>Site speed.</strong> India has a huge proportion of mobile users on slower connections. Target a Core Web Vitals score of 75+ on mobile.</li>
        <li><strong>Crawlability.</strong> Submit your sitemap to Google Search Console. Check the Coverage report weekly for any indexing errors.</li>
        <li><strong>Structured data.</strong> Product schema markup enables rich snippets in search results that dramatically increase click-through rates.</li>
        <li><strong>Internal linking.</strong> Link from your blog content to relevant product and category pages. This passes authority and helps Google understand your site structure.</li>
      </ul>

      <h2>The Indian D2C SEO Keyword Strategy</h2>
      <ul>
        <li><strong>Tier 1 — High intent, high volume:</strong> "buy [product] online India." Competitive but the most valuable. Target these on product and category pages.</li>
        <li><strong>Tier 2 — Comparison keywords:</strong> "[your brand] vs [competitor]," "best [product category] India 2026." Capture customers in decision mode.</li>
        <li><strong>Tier 3 — Problem-aware keywords:</strong> "how to [solve problem your product solves]." Capture customers earlier in the funnel.</li>
        <li><strong>Tier 4 — Long-tail local:</strong> "[product] + [city]" for brands with any local presence or delivery specificity.</li>
      </ul>

      <h2>What a 6-Month SEO Timeline Looks Like</h2>
      <ul>
        <li><strong>Month 1–2:</strong> Technical fixes, site speed optimisation, Google Search Console setup, first round of on-page optimisation for top 10 product pages.</li>
        <li><strong>Month 3–4:</strong> Category page content, first 4–6 blog posts targeting Tier 3 keywords, initial backlink outreach. First rankings begin to appear.</li>
        <li><strong>Month 5–6:</strong> Compounding begins. Blog content starts ranking. Organic traffic grows 40–80% from baseline.</li>
        <li><strong>Month 7+:</strong> Organic becomes a meaningful revenue channel. Blended CAC starts to fall.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Indian D2C brands that are still 100% dependent on paid ads in 2026 are one algorithm update away from a revenue crisis. The brands that build organic foundations now will have a structural cost advantage for years.</p>
      <p>You don't need to choose between paid and organic. The best brands do both — and let them compound together.</p>
      <p>At MetaZynx, SEO is one of our core services. We build organic growth engines for D2C brands across India. If you want to see what an SEO roadmap would look like for your brand, <a href="/contact">book a free audit</a>.</p>
    `
  },

  'omnichannel-performance-marketing-2026': {
    title: 'The 2026 Guide to Omnichannel Performance Marketing',
    category: 'Strategy',
    author: 'Divyam Bajaj',
    date: 'March 8, 2026',
    readTime: '8 min read',
    imageSeed: 'strategy',
    content: `
      <p>In the early days of digital marketing, you could scale a brand on a single channel. Today, relying solely on Meta Ads or Google Search is a recipe for diminishing returns. Siloed marketing channels kill ROAS because they ignore the complex, multi-touch reality of the modern consumer journey.</p>
      
      <h2>What Omnichannel Actually Means in 2026</h2>
      <p>Omnichannel isn't just about being present on every platform. It's about creating a seamless, integrated experience where each channel feeds into and supports the others. It means your messaging, creative, and data strategy are unified across the entire funnel.</p>

      <blockquote>"Brands running 3+ integrated channels see 2.8x higher customer lifetime value than single-channel brands."</blockquote>

      <h2>How SEO, Paid Ads, Social and Creative Work Together</h2>
      <p>When executed correctly, channels act as multipliers. SEO captures high-intent demand generated by your Paid Social awareness campaigns. Google Ads remarketing closes the loop on users who discovered you via organic social. High-performing organic creative is repurposed as paid ad variations. This is the ecosystem approach.</p>

      <h2>The MetaZynx 360° Approach</h2>
      <p>At MetaZynx, we don't operate in silos. Our SEO specialists sit next to our media buyers, and our creative directors review search intent data. This 360° visibility allows us to allocate budget dynamically to the highest-performing touchpoints, rather than artificially propping up failing campaigns.</p>

      <h2>3 Steps to Build a Cohesive Strategy</h2>
      <ul>
        <li><strong>Unify Your Data:</strong> Implement robust tracking (like server-side tagging) to understand the true customer journey across all touchpoints.</li>
        <li><strong>Align Your Messaging:</strong> Ensure your brand voice and core offers are consistent from the first TikTok ad to the final checkout page.</li>
        <li><strong>Test Cross-Channel:</strong> Use insights from one channel to fuel another. Did a specific headline work well in Google Ads? Test it as a hook in your next Meta video ad.</li>
      </ul>
    `
  },
  'future-of-search-ai-overviews': {
    title: 'The Future of Search: AI Overviews and Your Organic Strategy',
    category: 'SEO',
    author: 'Divyam Bajaj',
    date: 'March 5, 2026',
    readTime: '6 min read',
    imageSeed: 'seo',
    content: `
      <p>Search is evolving faster than ever. With the introduction of AI Overviews, traditional SEO strategies are being challenged. Here is how to adapt and thrive in the new landscape.</p>
      <h2>Understanding AI Overviews</h2>
      <p>AI Overviews synthesize information from multiple sources to provide direct answers. To rank, your content must be authoritative, comprehensive, and structured for AI extraction.</p>
      <h2>Adapting Your Strategy</h2>
      <ul>
        <li><strong>Focus on Entity SEO:</strong> Build topical authority around core entities rather than just targeting keywords.</li>
        <li><strong>Provide Unique Value:</strong> AI can summarize facts, but it can't replicate unique insights, original research, or strong opinions.</li>
        <li><strong>Optimize for Long-Tail Queries:</strong> Users are asking more complex, conversational questions. Answer them directly and thoroughly.</li>
      </ul>
    `
  },
  'why-meta-ads-fail': {
    title: 'Why Your Meta Ads Are Failing (And How to Fix Them)',
    category: 'Paid Media',
    author: 'Divyam Bajaj',
    date: 'March 2, 2026',
    readTime: '5 min read',
    imageSeed: 'ads',
    content: `
      <p>Many brands struggle to achieve profitable ROAS on Meta. The problem usually isn't the platform; it's the strategy. Let's break down the most common reasons Meta Ads fail.</p>
      <h2>1. Over-Segmented Account Structures</h2>
      <p>Creating too many ad sets restricts the algorithm's ability to learn. Consolidate your campaigns to feed the machine more data.</p>
      <h2>2. Creative Fatigue</h2>
      <p>Your audience is tired of seeing the same ad. You need a robust creative testing framework to constantly introduce new angles and formats.</p>
      <h2>3. Ignoring the Post-Click Experience</h2>
      <p>A great ad can't fix a terrible landing page. Ensure your post-click experience is optimized for conversion and aligns with the ad's promise.</p>
    `
  },
  'authentic-creator-partnerships': {
    title: 'UGC is Dead. Long Live Authentic Creator Partnerships.',
    category: 'Social Media',
    author: 'Divyam Bajaj',
    date: 'Feb 28, 2026',
    readTime: '7 min read',
    imageSeed: 'social',
    content: `
      <p>The era of highly scripted, fake-looking User-Generated Content (UGC) is over. Consumers crave authenticity. Here's how to build real creator partnerships.</p>
      <h2>The Shift to Authenticity</h2>
      <p>Audiences can spot an ad from a mile away. They want to see real people using products in their actual lives, not actors reading from a script.</p>
      <h2>Building Genuine Partnerships</h2>
      <ul>
        <li><strong>Find Brand Advocates:</strong> Look for creators who already use and love your product.</li>
        <li><strong>Give Creative Freedom:</strong> Trust creators to know their audience best. Provide guidelines, not scripts.</li>
        <li><strong>Focus on Long-Term Relationships:</strong> One-off posts rarely drive significant impact. Build ongoing ambassadorships.</li>
      </ul>
    `
  },
  'core-web-vitals-ecommerce': {
    title: 'Core Web Vitals: The Silent Killer of E-Commerce Conversion Rates',
    category: 'Content',
    author: 'Divyam Bajaj',
    date: 'Feb 24, 2026',
    readTime: '4 min read',
    imageSeed: 'web',
    content: `
      <p>If your e-commerce site is slow, you are losing money. Core Web Vitals are not just an SEO ranking factor; they are a direct indicator of user experience and conversion potential.</p>
      <h2>The Impact of Speed on Sales</h2>
      <p>Studies show that even a one-second delay in page load time can result in a significant drop in conversions. Users expect instant gratification.</p>
      <h2>Optimizing for Core Web Vitals</h2>
      <ul>
        <li><strong>Optimize Images:</strong> Compress and serve images in next-gen formats like WebP.</li>
        <li><strong>Minimize JavaScript:</strong> Defer non-critical scripts and remove unused code.</li>
        <li><strong>Improve Server Response Time:</strong> Use a fast hosting provider and a Content Delivery Network (CDN).</li>
      </ul>
    `
  },
  'protecting-brand-viral-outrage': {
    title: 'Protecting Your Brand in the Age of Viral Outrage',
    category: 'ORM',
    author: 'Divyam Bajaj',
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    imageSeed: 'reputation',
    content: `
      <p>In today's hyper-connected world, a single misstep can lead to viral outrage. Proactive Online Reputation Management (ORM) is essential for protecting your brand equity.</p>
      <h2>The Anatomy of a Crisis</h2>
      <p>Understanding how crises escalate on social media is the first step to mitigating them. Speed and transparency are critical.</p>
      <h2>Building a Resilient Brand</h2>
      <ul>
        <li><strong>Social Listening:</strong> Monitor brand mentions to catch potential issues early.</li>
        <li><strong>Crisis Communication Plan:</strong> Have a clear protocol for responding to negative feedback and PR crises.</li>
        <li><strong>Proactive Positive Content:</strong> Build a strong foundation of positive content to buffer against negative search results.</li>
      </ul>
    `
  },
  'psychology-of-ad-creatives': {
    title: 'Design That Converts: The Psychology of Ad Creatives',
    category: 'Strategy',
    author: 'Divyam Bajaj',
    date: 'Feb 15, 2026',
    readTime: '6 min read',
    imageSeed: 'design',
    content: `
      <p>Great ad creative isn't just about looking good; it's about understanding human psychology. Here is how to design ads that drive action.</p>
      <h2>The Power of Visual Hierarchy</h2>
      <p>Guide the user's eye to the most important elements of your ad: the hook, the value proposition, and the call to action.</p>
      <h2>Psychological Triggers</h2>
      <ul>
        <li><strong>Social Proof:</strong> Use testimonials and reviews to build trust.</li>
        <li><strong>Scarcity and Urgency:</strong> Create a sense of FOMO (Fear Of Missing Out) to encourage immediate action.</li>
        <li><strong>Emotional Appeal:</strong> Connect with your audience on an emotional level to make your brand memorable.</li>
      </ul>
    `
  },
  'technical-seo-mistakes': {
    title: '10 Technical SEO Mistakes Costing You Traffic',
    category: 'SEO',
    author: 'Divyam Bajaj',
    date: 'Jan 12, 2026',
    readTime: '7 min read',
    imageSeed: 'seo',
    content: `
      <p>Even the best content won't rank if your website has underlying technical issues. Here are the most common technical SEO mistakes we see.</p>
      <h2>Common Pitfalls</h2>
      <ul>
        <li><strong>Poor Crawlability:</strong> Ensure search engines can easily access and index your pages.</li>
        <li><strong>Improper Redirects:</strong> Avoid redirect chains and use 301 redirects correctly.</li>
        <li><strong>Duplicate Content:</strong> Use canonical tags to consolidate ranking signals.</li>
      </ul>
    `
  },
  'google-ads-bidding': {
    title: 'The Ultimate Guide to Google Ads Bidding Strategies',
    category: 'Paid Media',
    author: 'Divyam Bajaj',
    date: 'Jan 05, 2026',
    readTime: '9 min read',
    imageSeed: 'ads',
    content: `
      <p>Choosing the right bidding strategy is crucial for Google Ads success. This guide breaks down the different options and when to use them.</p>
      <h2>Manual vs. Automated Bidding</h2>
      <p>Understand the pros and cons of manual control versus leveraging Google's machine learning algorithms.</p>
      <h2>Key Strategies</h2>
      <ul>
        <li><strong>Target CPA:</strong> Optimize for a specific cost per acquisition.</li>
        <li><strong>Target ROAS:</strong> Maximize conversion value based on your target return on ad spend.</li>
        <li><strong>Maximize Conversions:</strong> Get the most conversions possible within your budget.</li>
      </ul>
    `
  },
  'high-converting-landing-page': {
    title: 'How to Build a High-Converting Landing Page',
    category: 'Content',
    author: 'Divyam Bajaj',
    date: 'Dec 28, 2025',
    readTime: '6 min read',
    imageSeed: 'design',
    content: `
      <p>Your landing page is where the magic happens. A poorly designed page will waste your ad spend. Here is how to build a page that converts.</p>
      <h2>Essential Elements</h2>
      <ul>
        <li><strong>A Clear Value Proposition:</strong> Immediately tell the user what they get and why they should care.</li>
        <li><strong>Strong Call to Action:</strong> Make it obvious what the user should do next.</li>
        <li><strong>Frictionless Forms:</strong> Only ask for the information you absolutely need.</li>
      </ul>
    `
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];

  if (!post) {
    return {
      title: 'Post Not Found | MetaZynx',
    };
  }

  return {
    title: `${post.title} | MetaZynx Blog`,
    description: post.content.substring(0, 150).replace(/<[^>]*>?/gm, ''),
    alternates: {
      canonical: `https://www.metazynx.com/blog/${resolvedParams.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-24">
      {/* Hero Section */}
      <section className="bg-card-bg py-16 md:py-24 border-b border-border-glass relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <span className="inline-block bg-primary-text text-primary-bg font-mono font-bold text-[11px] uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-8 shadow-sm">
            {post.category}
          </span>
          <h1 className="font-sans font-black text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-primary-text mb-8">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-mono text-[13px] text-secondary-text uppercase tracking-[1px]">
            <div className="flex items-center gap-2"><User size={16} className="text-brand-action" /> {post.author}</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border-glass"></div>
            <div className="flex items-center gap-2"><Calendar size={16} className="text-brand-action" /> {post.date}</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border-glass"></div>
            <div className="flex items-center gap-2"><Clock size={16} className="text-brand-action" /> {post.readTime}</div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-20 w-full">
        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border-glass bg-secondary-bg">
          <Image
            src={`https://picsum.photos/seed/${post.imageSeed}/1200/800`}
            alt={post.title}
            fill
            className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 md:py-24 px-6 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg prose-zinc dark:prose-invert max-w-none
              prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-primary-text
              prose-p:font-sans prose-p:text-secondary-text prose-p:leading-relaxed
              prose-a:text-brand-action prose-a:no-underline hover:prose-a:underline
              prose-strong:text-primary-text prose-strong:font-bold
              prose-blockquote:border-l-brand-action prose-blockquote:bg-card-bg prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:font-sans prose-blockquote:text-primary-text prose-blockquote:not-italic
              prose-ul:text-secondary-text prose-li:marker:text-brand-action"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-border-glass flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[13px] font-medium text-secondary-text hover:text-brand-action transition-colors uppercase tracking-[1px]"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-card-bg py-24 px-6 text-center border-t border-border-glass relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-action/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="font-sans font-black text-[36px] md:text-[48px] tracking-tight text-primary-text mb-6">
            Ready to scale your revenue?
          </h2>
          <p className="font-sans text-[18px] text-secondary-text mb-10 max-w-xl">
            Stop guessing and start growing. Get a data-driven audit of your current marketing strategy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary-text text-primary-bg font-sans font-bold text-[15px] uppercase tracking-[1.5px] px-8 py-4 rounded-xl hover:bg-brand-action hover:text-white transition-all shadow-sm"
          >
            Get Your Free Audit <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
