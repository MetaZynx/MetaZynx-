import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Briefcase, Users, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers | Join the MetaZynx Team',
  description: 'Join a team of passionate digital marketers, designers, and developers. Explore open positions at MetaZynx.',
  alternates: {
    canonical: 'https://www.metazynx.com/careers',
  },
};

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior SEO Strategist',
      department: 'SEO & Content',
      location: 'Remote / Chandigarh',
      type: 'Full-time'
    },
    {
      title: 'Performance Marketing Manager',
      department: 'Paid Media',
      location: 'Remote / Chandigarh',
      type: 'Full-time'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Chandigarh',
      type: 'Full-time'
    },
    {
      title: 'Content Writer (B2B)',
      department: 'Content',
      location: 'Remote',
      type: 'Contract'
    }
  ];

  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-navy pt-40 pb-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-display font-extrabold text-[48px] md:text-[72px] leading-[1.1] tracking-[-2px] text-secondary-bg mb-6">
            Build the Future of <span className="text-accent-orange">Digital</span> With Us.
          </h1>
          <p className="font-sans text-[19px] md:text-[22px] text-gray-300 max-w-2xl mx-auto">
            We&apos;re always looking for ambitious, creative, and data-driven individuals to join our growing team.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-[36px] md:text-[48px] text-brand-navy mb-6 tracking-[-1px]">
              Why MetaZynx?
            </h2>
            <p className="font-sans text-[18px] text-secondary-text max-w-2xl mx-auto">
              We believe in hiring the best and giving them the autonomy to do their best work. Here is what you can expect when you join us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary-bg p-8 rounded-2xl border border-border-warm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Zap className="text-accent-orange" size={28} />
              </div>
              <h3 className="font-display font-bold text-[20px] text-brand-navy mb-3">Fast-Paced Growth</h3>
              <p className="font-sans text-[15px] text-secondary-text">Work with high-growth brands and accelerate your career trajectory.</p>
            </div>
            <div className="bg-secondary-bg p-8 rounded-2xl border border-border-warm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Users className="text-accent-orange" size={28} />
              </div>
              <h3 className="font-display font-bold text-[20px] text-brand-navy mb-3">Brilliant Team</h3>
              <p className="font-sans text-[15px] text-secondary-text">Collaborate with some of the smartest minds in performance marketing.</p>
            </div>
            <div className="bg-secondary-bg p-8 rounded-2xl border border-border-warm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Briefcase className="text-accent-orange" size={28} />
              </div>
              <h3 className="font-display font-bold text-[20px] text-brand-navy mb-3">Flexible Work</h3>
              <p className="font-sans text-[15px] text-secondary-text">We value output over hours. Enjoy remote-friendly options and flexible schedules.</p>
            </div>
            <div className="bg-secondary-bg p-8 rounded-2xl border border-border-warm text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Heart className="text-accent-orange" size={28} />
              </div>
              <h3 className="font-display font-bold text-[20px] text-brand-navy mb-3">Health & Wellness</h3>
              <p className="font-sans text-[15px] text-secondary-text">Comprehensive health coverage and wellness stipends for you and your family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-6 md:px-12 bg-secondary-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-[36px] md:text-[48px] text-brand-navy mb-12 tracking-[-1px] text-center">
            Open Positions
          </h2>
          
          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-border-warm flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow duration-300">
                <div>
                  <h3 className="font-display font-bold text-[22px] text-brand-navy mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 font-sans text-[14px] text-secondary-text">
                    <span className="font-medium text-accent-orange">{job.department}</span>
                    <span className="w-1 h-1 rounded-full bg-border-warm"></span>
                    <span>{job.location}</span>
                    <span className="w-1 h-1 rounded-full bg-border-warm"></span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center h-[48px] px-8 border-2 border-brand-navy text-brand-navy font-sans font-bold text-[14px] uppercase tracking-[1.5px] rounded-md hover:bg-brand-navy hover:text-white transition-colors flex-shrink-0"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-sans text-[16px] text-secondary-text mb-6">
              Don&apos;t see a role that fits? We&apos;re always open to connecting with great talent.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 font-sans font-bold text-[15px] text-accent-orange hover:text-brand-navy transition-colors uppercase tracking-[1px]"
            >
              Send an Open Application <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* HTML Comment for future content replacement */}
      {/* TODO: Integrate with a recruiting ATS (like Greenhouse or Lever) to dynamically pull job listings. */}

      <Footer />
    </main>
  );
}
