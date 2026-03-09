import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Linkedin, Target, Eye, Heart, Zap, ShieldCheck, Trophy, Rocket, TrendingUp, Users, Clock } from 'lucide-react';
import Image from 'next/image';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'About MetaZynx | 360° Performance Marketing Agency',
  description: "Learn about MetaZynx — our story, our team, our values, and why the world's most ambitious brands trust us with their digital marketing.",
  alternates: {
    canonical: 'https://www.metazynx.com/about',
  },
};

export default function AboutPage() {
  const timeline = [
    { year: '2020', event: 'Founded' },
    { year: '2021', event: 'First Campaign' },
    { year: '2022', event: 'First $100K Month' },
    { year: 'Today', event: '360° Agency' },
  ];

  const values = [
    {
      title: 'Results Obsessed',
      description: 'We measure our success entirely by the growth and ROI we deliver to our clients.',
      icon: <Target size={32} className="text-accent-orange" />
    },
    {
      title: 'Radical Transparency',
      description: 'No hidden fees, no vanity metrics. Just honest reporting and clear communication.',
      icon: <Eye size={32} className="text-accent-orange" />
    },
    {
      title: 'Client First',
      description: 'Your goals become our goals. We treat your budget with the same respect as our own.',
      icon: <Heart size={32} className="text-accent-orange" />
    },
    {
      title: 'Constantly Evolving',
      description: 'The digital landscape changes daily. We stay ahead of the curve so you don\'t have to.',
      icon: <Zap size={32} className="text-accent-orange" />
    }
  ];

  const team = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      bio: '10+ years scaling e-commerce brands. Obsessed with data-driven growth strategies.',
    },
    {
      name: 'Priya Desai',
      role: 'Head of Performance',
      bio: 'Ex-Google. Master of Meta & Google Ads with a track record of 8x+ average ROAS.',
    },
    {
      name: 'Anand Verma',
      role: 'Creative Director',
      bio: 'Award-winning designer turning brand visions into high-converting visual assets.',
    }
  ];

  const awards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-brand-navy" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
      title: "Google Partner",
      subtitle: "Certified Ads Partner"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-brand-navy" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.5 5.5c-2.2 0-4.2 1.1-5.5 2.8C13.7 6.6 11.7 5.5 9.5 5.5 5.4 5.5 2 8.9 2 13s3.4 7.5 7.5 7.5c2.2 0 4.2-1.1 5.5-2.8 1.3 1.7 3.3 2.8 5.5 2.8 4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5zm0 11.5c-1.4 0-2.7-.8-3.4-2.1l-1.6-2.8-1.6 2.8c-.7 1.3-2 2.1-3.4 2.1-2.2 0-4-1.8-4-4s1.8-4 4-4c1.4 0 2.7.8 3.4 2.1l1.6 2.8 1.6-2.8c.7-1.3 2-2.1 3.4-2.1 2.2 0 4 1.8 4 4s-1.8 4-4 4z"/>
        </svg>
      ),
      title: "Meta Business Partner",
      subtitle: "Certified Campaign Manager"
    },
    {
      icon: <ShieldCheck size={32} className="text-brand-navy" />,
      title: "ISO Compliant",
      subtitle: "Data Security & Privacy"
    },
    {
      icon: <Trophy size={32} className="text-brand-navy" />,
      title: "Top Rated Agency",
      subtitle: "Clutch.co Verified"
    },
    {
      icon: <Rocket size={32} className="text-brand-navy" />,
      title: "100+ Brands Scaled",
      subtitle: "Across 8 Industries"
    },
    {
      icon: <TrendingUp size={32} className="text-brand-navy" />,
      title: "$6M+ Ad Spend",
      subtitle: "Managed & Optimised"
    },
    {
      icon: <Users size={32} className="text-brand-navy" />,
      title: "97% Retention Rate",
      subtitle: "Long-Term Partnerships"
    },
    {
      icon: <Clock size={32} className="text-brand-navy" />,
      title: "Results in 90 Days",
      subtitle: "Guaranteed Delivery Timeline"
    }
  ];

  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary-bg pt-40 pb-24 px-6 md:px-12 text-center border-b border-border-warm">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-extrabold text-[56px] md:text-[80px] leading-[1.1] tracking-[-2px] text-brand-navy mb-6">
            We Are MetaZynx
          </h1>
          <p className="font-sans text-[20px] md:text-[24px] text-secondary-text max-w-2xl mx-auto">
            A collective of data scientists, creatives, and growth hackers united by one goal: building empires.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="relative border-l-2 border-border-warm pl-8 space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-accent-orange rounded-full"></div>
                <h3 className="font-display font-bold text-[24px] text-brand-navy mb-1">{item.year}</h3>
                <p className="font-sans text-[17px] text-secondary-text">{item.event}</p>
              </div>
            ))}
          </div>
          
          {/* Vision */}
          <div>
            <span className="font-sans font-bold text-xs text-accent-orange uppercase tracking-[2px] mb-4 block">Our Story</span>
            <h2 className="font-display font-bold text-[36px] md:text-[48px] text-brand-navy tracking-[-1px] mb-6">
              From a single campaign to a 360° powerhouse.
            </h2>
            <p className="font-sans text-[18px] leading-[1.8] text-secondary-text mb-6">
              MetaZynx was born out of frustration with the traditional agency model. Too many agencies focus on vanity metrics—likes, impressions, clicks—while ignoring what actually matters: revenue.
            </p>
            <p className="font-sans text-[18px] leading-[1.8] text-secondary-text">
              We set out to build an agency that operates as an extension of your business. By bringing SEO, Paid Ads, Creative, Development, and ORM under one roof, we eliminate silos and create cohesive, high-performance strategies that drive undeniable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary-bg border-y border-border-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-[36px] md:text-[48px] text-brand-navy tracking-[-1px]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-border-warm shadow-sm hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300">
                <div className="mb-6 bg-primary-bg w-16 h-16 rounded-xl flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-[22px] text-brand-navy mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.7] text-secondary-text">
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
          <h2 className="font-display font-bold text-[36px] md:text-[48px] text-brand-navy tracking-[-1px]">
            Meet The Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl border border-border-warm overflow-hidden shadow-sm group hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300">
              {/* <!-- Replace with real team photos --> */}
              <div className="h-64 bg-secondary-bg relative">
                <Image
                  src={`https://picsum.photos/seed/${member.name.replace(' ', '')}/600/600?blur=2`}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 relative">
                <a href="#" className="absolute -top-6 right-6 w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center hover:bg-accent-orange transition-colors shadow-lg hover:scale-[1.03] duration-200 ease-out">
                  <Linkedin size={20} />
                </a>
                <h3 className="font-display font-bold text-[24px] text-brand-navy mb-1">{member.name}</h3>
                <p className="font-sans text-[14px] font-bold text-accent-orange uppercase tracking-[1px] mb-4">{member.role}</p>
                <p className="font-sans text-[15px] leading-[1.7] text-secondary-text">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* Awards & Recognition */}
      <section className="py-[80px] bg-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="font-sans font-medium text-[12px] text-[#E8440A] uppercase tracking-[3px] block mb-4">
              RECOGNITION
            </span>
            <h2 className="font-display font-bold text-[42px] text-brand-navy mb-4">
              Certified. Recognised. Trusted.
            </h2>
            <p className="font-sans font-light text-[17px] text-[#4A4A4A] max-w-2xl mx-auto">
              Our expertise is validated by the platforms and partners we work with every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#E0DDD6] rounded-[12px] px-[20px] py-[28px] flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(27,45,91,0.1)] transition-all duration-200 ease-in-out"
              >
                <div className="mb-4">
                  {award.icon}
                </div>
                <h3 className="font-sans font-semibold text-[14px] text-brand-navy uppercase tracking-[1px] mb-1">
                  {award.title}
                </h3>
                <p className="font-sans font-light text-[12px] text-[#888888]">
                  {award.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-sans font-light text-[13px] text-[#888888] italic">
              * Google Partner and Meta Business Partner certifications are in process. All performance metrics reflect actual campaign results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-bg text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-[36px] md:text-[48px] text-brand-navy mb-8 tracking-[-1px]">
            Want to know if we&apos;re the right fit?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center h-[60px] px-10 bg-accent-orange text-white font-sans font-bold text-[16px] uppercase tracking-[2px] rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-200 ease-out"
          >
            Book a call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
