import { Metadata } from 'next';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Mock data for case studies
const caseStudies = {
  'ecommerce-6x-roas': {
    title: '6.2x ROAS in 90 Days for an E-Commerce Brand',
    description: 'High CPA and severe creative fatigue on Meta Ads were eating into profit margins.',
    category: 'Paid Ads',
    industry: 'E-Commerce',
    metrics: [
      { label: 'ROAS', value: '6.2x' },
      { label: 'CPA', value: '-42%' },
      { label: 'Revenue', value: '+180%' },
      { label: 'CTR', value: '3.8%' }
    ],
    image: 'https://picsum.photos/seed/ecommerce-growth/1200/600?blur=2',
    challenge: 'The brand was struggling with a high CPA and severe creative fatigue on Meta Ads, which were eating into their profit margins and preventing them from scaling their ad spend profitably.',
    approach: [
      { title: 'Creative Refresh', description: 'Developed a new suite of high-converting ad creatives focused on user-generated content and clear value propositions.' },
      { title: 'Audience Segmentation', description: 'Restructured ad accounts to target high-intent audiences and implemented advanced retargeting strategies.' },
      { title: 'Landing Page Optimization', description: 'Optimized product pages to improve conversion rates and reduce bounce rates.' },
      { title: 'Bid Strategy Adjustment', description: 'Implemented value-based bidding to maximize ROAS and acquire higher-value customers.' }
    ]
  },
  'real-estate-lead-generation': {
    title: '480% Increase in Qualified Leads for a Real Estate Developer',
    description: 'Generating high-volume but low-quality leads from generic search campaigns.',
    category: 'Paid Ads',
    industry: 'Real Estate',
    metrics: [
      { label: 'Lead Volume', value: '+480%' },
      { label: 'CPL', value: '-35%' },
      { label: 'Conversion', value: '+22%' },
      { label: 'ROI', value: '3.5x' }
    ],
    image: 'https://picsum.photos/seed/real-estate-abstract/1200/600?blur=2',
    challenge: 'The developer was generating a high volume of leads from generic search campaigns, but the quality was poor, resulting in wasted sales effort and a low conversion rate.',
    approach: [
      { title: 'Keyword Refinement', description: 'Shifted focus from generic keywords to high-intent, long-tail keywords specific to the developer\'s properties.' },
      { title: 'Ad Copy Optimization', description: 'Rewrote ad copy to highlight unique selling points and pre-qualify leads before they clicked.' },
      { title: 'Lead Magnet Creation', description: 'Developed targeted lead magnets (e.g., property brochures, investment guides) to capture higher-quality leads.' },
      { title: 'CRM Integration', description: 'Integrated lead generation campaigns directly with the client\'s CRM for seamless follow-up and tracking.' }
    ]
  },
  'saas-organic-traffic-growth': {
    title: '215% Organic Traffic Growth for a B2B SaaS Platform',
    description: 'Stuck on page 2 for high-intent, bottom-of-funnel industry keywords.',
    category: 'SEO',
    industry: 'SaaS',
    metrics: [
      { label: 'Traffic', value: '+215%' },
      { label: 'Top 3 Ranks', value: '45+' },
      { label: 'Signups', value: '+120%' },
      { label: 'Domain Auth', value: '+18' }
    ],
    image: 'https://picsum.photos/seed/saas-network/1200/600?blur=2',
    challenge: 'The SaaS platform was stuck on page 2 for high-intent, bottom-of-funnel industry keywords, missing out on valuable organic traffic and potential customers.',
    approach: [
      { title: 'Technical SEO Audit', description: 'Conducted a comprehensive technical SEO audit to identify and fix crawlability and indexability issues.' },
      { title: 'Content Strategy', description: 'Developed a targeted content strategy focused on high-value keywords and addressing customer pain points.' },
      { title: 'On-Page Optimization', description: 'Optimized existing content and landing pages for target keywords and improved user experience.' },
      { title: 'Link Building', description: 'Executed a strategic link-building campaign to acquire high-quality backlinks from authoritative industry websites.' }
    ]
  },
  'healthcare-reputation-management': {
    title: 'Reputation Score from 3.1 to 4.8 for a Healthcare Provider',
    description: 'Negative legacy reviews were severely impacting new patient acquisition.',
    category: 'ORM',
    industry: 'Healthcare',
    metrics: [
      { label: 'Rating', value: '4.8/5' },
      { label: 'Reviews', value: '1,200+' },
      { label: 'New Patients', value: '+45%' },
      { label: 'Search Vis.', value: '+80%' }
    ],
    image: 'https://picsum.photos/seed/healthcare-trust/1200/600?blur=2',
    challenge: 'Negative legacy reviews on Google and other platforms were severely impacting the provider\'s reputation and hindering new patient acquisition.',
    approach: [
      { title: 'Review Generation', description: 'Implemented an automated review generation system to encourage satisfied patients to leave positive feedback.' },
      { title: 'Review Monitoring', description: 'Set up real-time monitoring to promptly address and resolve any new negative reviews.' },
      { title: 'Profile Optimization', description: 'Optimized Google Business Profile and other local listings to improve visibility and accuracy.' },
      { title: 'Patient Experience', description: 'Consulted with the provider to improve internal processes and enhance the overall patient experience.' }
    ]
  },
  'd2c-retailer-conversion-lift': {
    title: 'Sub-2s Load Time & 40% Conv. Lift for a D2C Retailer',
    description: 'A slow, bloated legacy Shopify theme was causing massive cart abandonment.',
    category: 'Development',
    industry: 'Retail',
    metrics: [
      { label: 'Load Time', value: '< 2s' },
      { label: 'Conv. Rate', value: '+40%' },
      { label: 'PageSpeed', value: '94/100' },
      { label: 'Bounce Rate', value: '-70%' }
    ],
    image: 'https://picsum.photos/seed/retail-speed/1200/600?blur=2',
    challenge: 'The retailer\'s Shopify store had a 6.8 second average load time on mobile. Every 1 second of delay was costing them conversions. Their paid ads were driving traffic but the site was losing 70% of visitors before they even saw a product. Google PageSpeed score was 23/100.',
    approach: [
      { title: 'Theme Rebuild', description: 'Complete Shopify theme rebuild from scratch on performance-first architecture.' },
      { title: 'Asset Optimization', description: 'Compressed and lazy-loaded all product images.' },
      { title: 'Script Cleanup', description: 'Removed 14 unnecessary third-party apps causing script bloat.' },
      { title: 'Checkout Optimization', description: 'Rebuilt checkout flow with conversion optimisation best practices.' }
    ]
  },
  'luxury-resort-creator-marketing': {
    title: '3M+ Organic Views via Creators for a Luxury Resort',
    description: 'Low brand awareness and engagement among the lucrative Gen-Z traveler demographic.',
    category: 'Social',
    industry: 'Hospitality',
    metrics: [
      { label: 'Views', value: '3M+' },
      { label: 'Engagement', value: '+310%' },
      { label: 'Bookings', value: '+28%' },
      { label: 'Followers', value: '+45K' }
    ],
    image: 'https://picsum.photos/seed/luxury-resort-social/1200/600?blur=2',
    challenge: 'The luxury resort was struggling with low brand awareness and engagement among the lucrative Gen-Z and millennial traveler demographics on social media.',
    approach: [
      { title: 'Creator Identification', description: 'Identified and partnered with relevant travel and lifestyle creators who aligned with the resort\'s brand.' },
      { title: 'Campaign Strategy', description: 'Developed a comprehensive creator marketing campaign focused on authentic storytelling and visually appealing content.' },
      { title: 'Content Amplification', description: 'Amplified creator content across the resort\'s own social channels and through targeted paid social ads.' },
      { title: 'Performance Tracking', description: 'Tracked campaign performance and optimized strategies based on engagement and booking data.' }
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.slug as keyof typeof caseStudies];

  if (!study) {
    return {
      title: 'Case Study Not Found | MetaZynx',
    };
  }

  return {
    title: `${study.title} | MetaZynx Case Study`,
    description: study.description,
    alternates: {
      canonical: `https://www.metazynx.com/case-studies/${resolvedParams.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.slug as keyof typeof caseStudies];

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-20">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="bg-primary-bg min-h-[50vh] py-24 px-6 md:px-12 flex flex-col justify-center relative border-b border-border-glass overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-action/5 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-secondary-bg text-primary-text font-sans font-bold text-[12px] uppercase tracking-[2px] px-4 py-1.5 rounded-full border border-border-glass">
              {study.industry}
            </span>
            <span className="inline-block bg-brand-action/10 text-brand-action font-sans font-bold text-[12px] uppercase tracking-[2px] px-4 py-1.5 rounded-full">
              {study.category}
            </span>
          </div>
          <h1 className="font-sans font-black text-[40px] md:text-[56px] leading-[1.1] tracking-tighter text-primary-text mb-8">
            {study.title}
          </h1>
          <p className="font-sans text-[18px] md:text-[22px] text-secondary-text max-w-3xl mb-12 leading-[1.6]">
            <span className="text-primary-text font-bold">The Challenge:</span> {study.description}
          </p>
          
          <div className="flex flex-wrap gap-12">
            {study.metrics.slice(0, 2).map((metric, i) => (
              <div key={i}>
                <p className="font-mono font-bold text-[56px] text-primary-text leading-none mb-2">{metric.value}</p>
                <p className="font-sans text-[16px] text-secondary-text font-medium uppercase tracking-[1px]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — The Challenge */}
      <section className="bg-secondary-bg py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans font-black text-[32px] md:text-[40px] text-primary-text mb-8 tracking-tight">
            The Challenge
          </h2>
          <div className="font-sans text-[18px] text-secondary-text leading-[1.8] space-y-6">
            <p>{study.challenge}</p>
          </div>
        </div>
      </section>

      {/* Section 3 — Our Approach */}
      <section className="bg-primary-bg py-24 px-6 md:px-12 border-y border-border-glass">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans font-black text-[32px] md:text-[40px] text-primary-text mb-12 tracking-tight">
            Our Approach
          </h2>
          <div className="space-y-10">
            {study.approach.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="font-mono font-bold text-[40px] text-muted-text leading-none shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[20px] text-primary-text mb-3">{step.title}</h3>
                  <p className="font-sans text-[16px] text-secondary-text leading-[1.7]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — The Results */}
      <section className="bg-card-bg py-24 px-6 md:px-12 border-b border-border-glass">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-sans font-black text-[32px] md:text-[40px] text-primary-text mb-16 tracking-tight">
            The Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {study.metrics.map((metric, i) => (
              <div key={i} className="bg-secondary-bg border border-border-glass p-8 rounded-2xl shadow-sm">
                <p className="font-mono font-bold text-[48px] text-primary-text leading-none mb-3">{metric.value}</p>
                <p className="font-sans text-[15px] text-secondary-text font-medium uppercase tracking-[1px]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Bottom CTA */}
      <section className="bg-primary-bg py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-action/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-sans font-black text-[40px] md:text-[56px] text-primary-text mb-10 tracking-tight">
            Want results like these?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-primary-text text-primary-bg font-sans font-bold text-[15px] uppercase tracking-[1.5px] px-10 py-5 rounded-xl hover:bg-brand-action hover:text-white transition-all shadow-sm"
          >
            Book Your Free Audit &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
