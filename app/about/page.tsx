import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Linkedin, Target, Eye, Heart, Zap, Award } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About MetaZynx | 360° Performance Marketing Agency',
  description: "Learn about MetaZynx — our story, our team, our values, and why the world's most ambitious brands trust us with their digital marketing.",
};

export default function AboutPage() {
  const timeline = [
    { year: '2020', event: 'Founded' },
    { year: '2021', event: 'First Campaign' },
    { year: '2022', event: 'First ₹1Cr Month' },
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

      {/* Awards & Recognition */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display font-bold text-[32px] mb-12">Awards & Recognition</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-40 h-40 rounded-full border border-white/20 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm hover:-translate-y-[6px] hover:shadow-xl hover:shadow-white/10 transition-all duration-300">
                <Award size={40} className="text-accent-gold mb-2" />
                <span className="font-sans font-bold text-[13px] uppercase tracking-[1px] text-center px-4">Award Title {i}</span>
              </div>
            ))}
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
