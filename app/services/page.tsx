import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Search, Megaphone, PenTool, Code, Users, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | 360° Digital Marketing — MetaZynx',
  description: "Explore MetaZynx's full suite of digital marketing services: SEO, Meta Ads, Google Ads, Graphic Design, Web Development, Influencer Marketing, UGC, and ORM. All under one roof.",
  alternates: {
    canonical: 'https://www.metazynx.com/services',
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: 'SEO & Content',
      valueStatement: 'Organic growth that compounds over time',
      icon: <Search size={32} className="text-accent-orange" />,
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
      icon: <Megaphone size={32} className="text-accent-orange" />,
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
      icon: <PenTool size={32} className="text-accent-orange" />,
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
      icon: <Code size={32} className="text-accent-orange" />,
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
      icon: <Users size={32} className="text-accent-orange" />,
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
      icon: <ShieldCheck size={32} className="text-accent-orange" />,
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
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-navy min-h-[60vh] flex items-center justify-center text-center px-6 md:px-12 pt-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display font-extrabold text-[48px] md:text-[72px] leading-[1.1] tracking-[-2px] text-secondary-bg mb-6">
            Services Built for Performance
          </h1>
          <p className="font-sans text-[19px] md:text-[22px] text-gray-300 max-w-2xl mx-auto">
            A complete ecosystem of digital marketing solutions designed to scale your brand and maximize ROI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-border-warm shadow-sm hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300 flex flex-col h-full group">
              <div className="mb-6 bg-secondary-bg w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-accent-orange/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h2 className="font-display font-bold text-[28px] text-brand-navy mb-2">
                {service.title}
              </h2>
              <p className="font-sans text-[16px] text-accent-orange font-medium mb-6">
                {service.valueStatement}
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-navy mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-[15px] text-secondary-text">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={service.link}
                className="w-full h-[48px] border-2 border-brand-navy text-brand-navy font-sans font-bold text-[14px] uppercase tracking-[1.5px] rounded-md flex items-center justify-center gap-2 hover:bg-brand-navy hover:text-white hover:scale-[1.03] duration-200 ease-out transition-all mt-auto"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary-bg border-y border-border-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h3 className="font-display font-bold text-[32px] text-brand-navy mb-10">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-white border border-border-warm rounded-full font-sans font-bold text-[15px] text-brand-navy shadow-sm hover:border-accent-orange hover:text-accent-orange hover:-translate-y-[2px] transition-all cursor-default"
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
          <h2 className="font-display font-bold text-[36px] md:text-[48px] text-brand-navy mb-8 tracking-[-1px]">
            Not sure which services you need?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center h-[60px] px-10 bg-accent-orange text-white font-sans font-bold text-[16px] uppercase tracking-[2px] rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-200 ease-out"
          >
            Get a free consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
