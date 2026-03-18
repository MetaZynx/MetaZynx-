import { Metadata } from 'next';
import Link from 'next/link';
import { Search, Megaphone, PenTool, Code, Users, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '360° Digital Marketing Services in Chandigarh & India | MetaZynx',
  description: "MetaZynx offers full-suite digital marketing services in Chandigarh and across India — SEO, Meta Ads, Google Ads, Web Design, Influencer Marketing & ORM. Free audit. No contracts.",
  keywords: 'digital marketing services Chandigarh, digital marketing agency India, SEO Meta Ads Google Ads India, web design Chandigarh, influencer marketing India, ORM services India',
  alternates: {
    canonical: 'https://www.metazynx.com/services',
  },
  openGraph: {
    title: '360° Digital Marketing Services in Chandigarh & India | MetaZynx',
    description: 'Full-suite performance marketing services for brands across India. SEO, Meta Ads, Google Ads, Web Design, Influencer Marketing & ORM — all under one roof.',
    url: 'https://www.metazynx.com/services',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Digital Marketing Services — MetaZynx' }],
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: 'SEO & Content',
      valueStatement: 'Organic growth that compounds over time',
      icon: <Search size={32} className="text-brand-action" />,
      link: '/services/seo',
      bullets: [
        'Comprehensive Technical SEO Audits',
        'High-Converting Content Strategy',
        'Authoritative Link Building',
        'Local & International SEO'
      ]
    },
    {
      title: 'Meta & Google Ads',
      valueStatement: 'Performance campaigns built for measurable ROI',
      icon: <Megaphone size={32} className="text-brand-action" />,
      link: '/services/ads',
      bullets: [
        'Data-Driven Campaign Architecture',
        'Advanced Audience Targeting',
        'Continuous A/B Testing',
        'Conversion Rate Optimization'
      ]
    },
    {
      title: 'Graphic Design',
      valueStatement: 'Creative that stops the scroll and converts',
      icon: <PenTool size={32} className="text-brand-action" />,
      link: '/services/design',
      bullets: [
        'High-Converting Ad Creatives',
        'Premium Brand Identities',
        'Social Media Asset Design',
        'Landing Page UI/UX Design'
      ]
    },
    {
      title: 'Web Development',
      valueStatement: 'Built for speed, SEO, and conversions',
      icon: <Code size={32} className="text-brand-action" />,
      link: '/services/development',
      bullets: [
        'Custom Next.js & React Development',
        'E-Commerce Store Optimization',
        'Core Web Vitals Compliance',
        'Secure & Scalable Architecture'
      ]
    },
    {
      title: 'Influencer & UGC',
      valueStatement: 'Authentic content that audiences trust',
      icon: <Users size={32} className="text-brand-action" />,
      link: '/services/influencer',
      bullets: [
        'Creator Sourcing & Vetting',
        'End-to-End Campaign Management',
        'Authentic UGC Production',
        'Performance Tracking & ROI'
      ]
    },
    {
      title: 'ORM',
      valueStatement: "Protect and strengthen your brand's reputation",
      icon: <ShieldCheck size={32} className="text-brand-action" />,
      link: '/services/orm',
      bullets: [
        'Proactive Reputation Monitoring',
        'Review Generation Strategies',
        'Crisis Communication Management',
        'Search Result Suppression'
      ]
    }
  ];

  const industries = [
    'E-commerce', 'Real Estate', 'Healthcare', 'Education', 'Finance', 'Retail', 'Hospitality', 'SaaS'
  ];

  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-24">
      {/* Hero Section */}
      <section className="bg-primary-bg min-h-[60vh] flex items-center justify-center text-center px-6 md:px-12 pt-20 pb-24 relative overflow-hidden border-b border-border-glass">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-6 block">
            [ Our Services ]
          </span>
          <h1 className="font-sans font-black text-[48px] md:text-[72px] leading-[1.05] tracking-tighter text-primary-text mb-6">
            Services Built for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-text to-secondary-text">Performance</span>
          </h1>
          <p className="font-sans text-[19px] md:text-[22px] text-secondary-text max-w-2xl mx-auto leading-[1.6]">
            A complete ecosystem of digital marketing solutions for brands in Chandigarh and across India — designed to scale your business and maximize ROI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card-bg p-8 rounded-2xl border border-border-glass shadow-sm hover:shadow-xl hover:border-brand-action/30 hover:-translate-y-[6px] transition-all duration-300 flex flex-col h-full group">
              <div className="mb-6 bg-secondary-bg w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-brand-action/10 border border-border-glass transition-colors duration-300">
                {service.icon}
              </div>
              <h2 className="font-sans font-bold text-[28px] text-primary-text mb-2 tracking-tight">{service.title}</h2>
              <p className="font-sans text-[16px] text-brand-action font-medium mb-6">{service.valueStatement}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary-text mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-[15px] text-secondary-text">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="w-full h-[48px] border border-border-glass text-primary-text font-sans font-bold text-[14px] uppercase tracking-[1.5px] rounded-xl flex items-center justify-center gap-2 hover:bg-primary-text hover:text-primary-bg hover:scale-[1.02] duration-200 ease-out transition-all mt-auto"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary-bg border-y border-border-glass relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">[ Expertise ]</span>
          <h3 className="font-sans font-bold text-[32px] text-primary-text mb-10 tracking-tight">Industries We Serve Across India</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-card-bg border border-border-glass rounded-full font-sans font-bold text-[15px] text-primary-text shadow-sm hover:border-brand-action hover:text-brand-action hover:-translate-y-[2px] transition-all cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-primary-bg text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-primary-text mb-8 tracking-tighter leading-[1.1]">
            Not sure which services you need?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[60px] px-10 bg-primary-text text-primary-bg font-sans font-bold text-[16px] uppercase tracking-[2px] rounded-xl hover:scale-[1.02] hover:bg-brand-action hover:text-white transition-all duration-200 ease-out"
          >
            Get a free consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
