import { Metadata } from 'next';
import Link from 'next/link';
import { Linkedin, Target, Eye, Heart, Zap, ShieldCheck, Trophy, Rocket, TrendingUp, Users, Clock } from 'lucide-react';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'About MetaZynx | 360° Performance Marketing Agency',
  description: "MetaZynx was founded by Divyam Bajaj in 2022. $100K+ in affiliate revenue, multi-billion dollar brand experience, and proven Meta & Google Ads campaigns. This is performance marketing built on real results.",
  alternates: {
    canonical: 'https://www.metazynx.com/about',
  },
};

export default function AboutPage() {
  const timeline = [
    { year: '2022', event: 'MetaZynx Founded (April 2022)' },
    { year: '2022', event: 'First Client Campaigns Launched' },
    { year: '2023', event: 'Expanded Service Offerings' },
    { year: 'Today', event: 'Full 360° Performance Agency' },
  ];

  const values = [
    {
      title: 'Results Obsessed',
      description: 'We measure our success entirely by the growth and ROI we deliver to our clients.',
      icon: <Target size={32} className="text-brand-action" />
    },
    {
      title: 'Radical Transparency',
      description: 'No hidden fees, no vanity metrics. Just honest reporting and clear communication.',
      icon: <Eye size={32} className="text-brand-action" />
    },
    {
      title: 'Client First',
      description: 'Your goals become our goals. We treat your budget with the same respect as our own.',
      icon: <Heart size={32} className="text-brand-action" />
    },
    {
      title: 'Constantly Evolving',
      description: 'The digital landscape changes daily. We stay ahead of the curve so you don\'t have to.',
      icon: <Zap size={32} className="text-brand-action" />
    }
  ];

  const team = [
    {
      name: 'Divyam Bajaj',
      role: 'FOUNDER & CEO',
      bio: 'Founder of MetaZynx. $100K+ in affiliate revenue. Former account manager for multi-billion dollar brands. Meta & Google Ads specialist. Divyam engineers growth systems that deliver results — not vanity metrics.',
      linkedin: 'https://www.linkedin.com/in/divyambajaj333',
      avatar: {
        bg: '#09090B',
        content: 'DB',
        fontSize: '32px',
        fontFamily: 'var(--font-sans)',
        fontWeight: '800'
      }
    },
    {
      name: 'Specialist Partner Network',
      role: 'DELIVERY PARTNERS',
      bio: 'MetaZynx operates with a curated network of vetted specialists — designers, developers, SEO experts and media buyers — ensuring every client gets senior-level execution across every channel.',
      linkedin: null,
      avatar: {
        bg: '#0070F3',
        content: '◎',
        fontSize: '48px',
        fontFamily: 'sans-serif',
        fontWeight: 'normal'
      }
    },
    {
      name: 'Join Our Team',
      role: 'WE\'RE HIRING',
      bio: "We're growing fast and always looking for exceptional talent in performance marketing, graphic design, and web development. If you're results-obsessed — let's talk.",
      linkedin: 'mailto:info@metazynx.com?subject=Job Application',
      isEmail: true,
      avatar: {
        bg: '#09090B',
        content: '+',
        fontSize: '56px',
        fontFamily: 'sans-serif',
        fontWeight: 'normal'
      }
    }
  ];

  const awards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary-text" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
      title: "Google Partner",
      subtitle: "Certified Ads Partner"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary-text" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.5 5.5c-2.2 0-4.2 1.1-5.5 2.8C13.7 6.6 11.7 5.5 9.5 5.5 5.4 5.5 2 8.9 2 13s3.4 7.5 7.5 7.5c2.2 0 4.2-1.1 5.5-2.8 1.3 1.7 3.3 2.8 5.5 2.8 4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5zm0 11.5c-1.4 0-2.7-.8-3.4-2.1l-1.6-2.8-1.6 2.8c-.7 1.3-2 2.1-3.4 2.1-2.2 0-4-1.8-4-4s1.8-4 4-4c1.4 0 2.7.8 3.4 2.1l1.6 2.8 1.6-2.8c.7-1.3 2-2.1 3.4-2.1 2.2 0 4 1.8 4 4s-1.8 4-4 4z"/>
        </svg>
      ),
      title: "Meta Business Partner",
      subtitle: "Certified Campaign Manager"
    },
    {
      icon: <ShieldCheck size={32} className="text-primary-text" />,
      title: "ISO Compliant",
      subtitle: "Data Security & Privacy"
    },
    {
      icon: <Trophy size={32} className="text-primary-text" />,
      title: "Top Rated Agency",
      subtitle: "Clutch.co Verified"
    },
    {
      icon: <Rocket size={32} className="text-primary-text" />,
      title: "100+ Brands Scaled",
      subtitle: "Across 8 Industries"
    },
    {
      icon: <TrendingUp size={32} className="text-primary-text" />,
      title: "$6M+ Ad Spend",
      subtitle: "Managed & Optimised"
    },
    {
      icon: <Users size={32} className="text-primary-text" />,
      title: "97% Retention Rate",
      subtitle: "Long-Term Partnerships"
    },
    {
      icon: <Clock size={32} className="text-primary-text" />,
      title: "Results in 90 Days",
      subtitle: "Guaranteed Delivery Timeline"
    }
  ];

  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-24">
      {/* Hero Section */}
      <section className="bg-primary-bg pt-20 pb-24 px-6 md:px-12 text-center border-b border-border-glass relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-6 block">
            [ Our Story ]
          </span>
          <h1 className="font-sans font-black text-[56px] md:text-[80px] leading-[1.05] tracking-tighter text-primary-text mb-6">
            We Are MetaZynx
          </h1>
          <p className="font-sans text-[20px] md:text-[24px] text-secondary-text max-w-2xl mx-auto leading-[1.6]">
            A collective of data scientists, creatives, and growth hackers united by one goal: building empires.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="relative border-l border-border-glass pl-8 space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 bg-primary-bg border-2 border-brand-action rounded-full"></div>
                <h3 className="font-sans font-bold text-[24px] text-primary-text mb-1 tracking-tight">{item.year}</h3>
                <p className="font-sans text-[16px] text-secondary-text">{item.event}</p>
              </div>
            ))}
          </div>
          
          {/* Vision */}
          <div>
            <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">The Genesis</span>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-primary-text tracking-tighter mb-6 leading-[1.1]">
              From a single campaign to a 360° powerhouse.
            </h2>
            <p className="font-sans text-[18px] leading-[1.7] text-secondary-text mb-6">
              MetaZynx was founded in 2022 by Divyam Bajaj — not out of ambition alone, but out of proven experience. Before building MetaZynx, Divyam generated $100K+ in affiliate revenue through SEO-driven content and conversion optimization, managed accounts for multi-billion dollar companies, and ran Meta & Google Ads campaigns delivering measurable lead generation for real brands.
            </p>
            <p className="font-sans text-[18px] leading-[1.7] text-secondary-text">
              MetaZynx was built on one belief: growth isn&apos;t accidental — it&apos;s engineered. By bringing SEO, Paid Ads, Creative, Development, ORM and Influencer marketing under one roof, we eliminate silos and build the kind of cohesive, high-performance strategies that drive undeniable revenue outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary-bg border-y border-border-glass">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">[ Principles ]</span>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-primary-text tracking-tighter leading-[1.1]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card-bg p-8 rounded-2xl border border-border-glass hover:border-brand-action/30 transition-all duration-300">
                <div className="mb-6 bg-primary-bg w-14 h-14 rounded-xl flex items-center justify-center border border-border-glass">
                  {value.icon}
                </div>
                <h3 className="font-sans font-bold text-[20px] text-primary-text mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.6] text-secondary-text">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-16">
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">[ Leadership ]</span>
          <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-primary-text tracking-tighter leading-[1.1]">
            Meet The Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-card-bg rounded-2xl border border-border-glass overflow-hidden group hover:border-brand-action/30 transition-all duration-300 flex flex-col">
              <div className="h-64 bg-secondary-bg relative flex items-center justify-center border-b border-border-glass">
                <div 
                  className="flex items-center justify-center text-white rounded-full transition-transform duration-500 group-hover:scale-110 shadow-xl"
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    backgroundColor: member.avatar.bg,
                    fontSize: member.avatar.fontSize,
                    fontFamily: member.avatar.fontFamily,
                    fontWeight: member.avatar.fontWeight
                  }}
                >
                  {member.avatar.content}
                </div>
              </div>
              <div className="p-8 relative flex-grow flex flex-col">
                {member.linkedin && !member.isEmail && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute -top-6 right-6 w-12 h-12 bg-primary-text text-primary-bg rounded-full flex items-center justify-center hover:bg-brand-action hover:text-white transition-colors shadow-lg hover:scale-[1.05] duration-200 ease-out">
                    <Linkedin size={20} />
                  </a>
                )}
                <h3 className="font-sans font-bold text-[24px] text-primary-text mb-1 tracking-tight">{member.name}</h3>
                <p className="font-mono text-[12px] font-medium text-brand-action uppercase tracking-[1px] mb-4">{member.role}</p>
                <p className="font-sans text-[15px] leading-[1.6] text-secondary-text mb-6 flex-grow">
                  {member.bio}
                </p>
                {member.isEmail && (
                  <a href={member.linkedin} className="inline-block font-sans font-medium text-[14px] text-primary-text hover:text-brand-action transition-colors mt-auto">
                    Send Your CV &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* Awards & Recognition */}
      <section className="py-24 bg-secondary-bg border-y border-border-glass">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">
              [ Recognition ]
            </span>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-primary-text tracking-tighter leading-[1.1] mb-6">
              Certified. Recognised. Trusted.
            </h2>
            <p className="font-sans text-[18px] text-secondary-text max-w-2xl mx-auto leading-[1.6]">
              Our expertise is validated by the platforms and partners we work with every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="bg-card-bg border border-border-glass rounded-2xl p-8 flex flex-col items-center text-center hover:border-brand-action/30 transition-all duration-300"
              >
                <div className="mb-6 bg-primary-bg p-4 rounded-xl border border-border-glass">
                  {award.icon}
                </div>
                <h3 className="font-sans font-bold text-[16px] text-primary-text tracking-tight mb-2">
                  {award.title}
                </h3>
                <p className="font-sans text-[14px] text-secondary-text">
                  {award.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-mono text-[12px] text-muted-text">
              * Google Partner and Meta Business Partner certifications are in process. All performance metrics reflect actual campaign results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary-bg text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-sans font-black text-[40px] md:text-[64px] text-primary-text mb-8 tracking-tighter leading-[1.05]">
            Want to know if we&apos;re the right fit?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center h-[60px] px-10 bg-primary-text text-primary-bg font-sans font-semibold text-[15px] rounded-md hover:scale-[1.03] hover:shadow-xl hover:shadow-primary-text/10 transition-all duration-200 ease-out"
          >
            Book a Technical Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
