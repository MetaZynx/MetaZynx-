import { Metadata } from 'next';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact MetaZynx | Book Your Free Marketing Audit',
  description: 'Get in touch with MetaZynx. Book a free 360° marketing audit for your brand. No commitments, just insights.',
  alternates: {
    canonical: 'https://www.metazynx.com/contact',
  },
};

export default function ContactPage() {
  const faqs = [
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing is custom-tailored to your specific goals, current baseline, and the scope of work required. We offer flexible retainers based on performance and deliverables. Book an audit to get a precise quote.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'We believe in earning your business every month. While we recommend a minimum 3-month engagement to see compounding results, our standard contracts are month-to-month with a 30-day notice period.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Paid media campaigns (Meta/Google Ads) typically show initial results within 2-4 weeks. Organic strategies like SEO and Content Marketing take 3-6 months to build significant momentum.'
    },
    {
      question: 'Who will be managing my account?',
      answer: 'You will be assigned a dedicated Account Manager who acts as your strategic lead, supported by a team of specialists (media buyers, SEO experts, designers) executing the day-to-day work.'
    },
    {
      question: 'What is included in the free audit?',
      answer: 'Our free audit includes a comprehensive review of your current ad accounts, SEO technical health, website conversion rate, and competitor analysis. We present our findings along with a 90-day growth roadmap.'
    }
  ];

  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-24">
      {/* Hero Section */}
      <section className="bg-primary-bg pt-20 pb-24 px-6 md:px-12 text-center relative overflow-hidden border-b border-border-glass">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-6 block">
            [ Contact Us ]
          </span>
          <h1 className="font-sans font-black text-[48px] md:text-[72px] leading-[1.05] tracking-tighter text-primary-text mb-6">
            Let&apos;s Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-text to-secondary-text">Great Together</span>
          </h1>
          <p className="font-sans text-[19px] md:text-[22px] text-secondary-text max-w-2xl mx-auto leading-[1.6]">
            Book a free 360° technical and marketing audit for your brand. No commitments, just actionable insights.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-card-bg p-8 md:p-10 rounded-2xl border border-border-glass shadow-sm">
              <h2 className="font-sans font-bold text-[32px] text-primary-text mb-8 tracking-tight">Request Your Free Audit</h2>
              
              <ContactForm />
            </div>
          </div>

          {/* Right Column: Contact Details & Process */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Contact Info */}
            <div>
              <h3 className="font-sans font-bold text-[28px] text-primary-text mb-6 tracking-tight">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-xl flex items-center justify-center flex-shrink-0 mt-1 border border-border-glass">
                    <Phone size={20} className="text-brand-action" />
                  </div>
                  <div>
                    <p className="font-mono text-[12px] text-muted-text uppercase tracking-[1.5px] font-medium mb-1">Call Us</p>
                    <a href="tel:+916026767767" className="font-sans font-bold text-[22px] text-primary-text hover:text-brand-action transition-colors">+91-6026767767</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-xl flex items-center justify-center flex-shrink-0 mt-1 border border-border-glass">
                    <Mail size={20} className="text-brand-action" />
                  </div>
                  <div>
                    <p className="font-mono text-[12px] text-muted-text uppercase tracking-[1.5px] font-medium mb-1">Email Us</p>
                    <a href="mailto:info@metazynx.com" className="font-sans font-bold text-[22px] text-primary-text hover:text-brand-action transition-colors">info@metazynx.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-xl flex items-center justify-center flex-shrink-0 mt-1 border border-border-glass">
                    <MapPin size={20} className="text-brand-action" />
                  </div>
                  <div>
                    <p className="font-mono text-[12px] text-muted-text uppercase tracking-[1.5px] font-medium mb-1">Address</p>
                    <p className="font-sans font-bold text-[22px] text-primary-text">Chandigarh, India</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-xl flex items-center justify-center flex-shrink-0 mt-1 border border-border-glass">
                    <Instagram size={20} className="text-brand-action" />
                  </div>
                  <div>
                    <p className="font-mono text-[12px] text-muted-text uppercase tracking-[1.5px] font-medium mb-1">Instagram</p>
                    <a href="https://www.instagram.com/metazynx/" target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-[22px] text-primary-text hover:text-brand-action transition-colors">@metazynx</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* What Happens Next */}
            <div className="bg-secondary-bg p-8 rounded-2xl border border-border-glass">
              <h3 className="font-sans font-bold text-[24px] text-primary-text mb-6 tracking-tight">What happens next?</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-glass before:to-transparent">
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-bg border border-border-glass text-primary-text flex items-center justify-center font-mono font-bold text-[14px] flex-shrink-0 z-10 shadow-sm">1</div>
                  <div className="pt-1">
                    <p className="font-sans font-bold text-[16px] text-primary-text">We review your brand within 24hrs</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-bg border border-border-glass text-primary-text flex items-center justify-center font-mono font-bold text-[14px] flex-shrink-0 z-10 shadow-sm">2</div>
                  <div className="pt-1">
                    <p className="font-sans font-bold text-[16px] text-primary-text">Divyam personally reviews your brand within 24hrs</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-action text-white flex items-center justify-center font-mono font-bold text-[14px] flex-shrink-0 z-10 shadow-sm">3</div>
                  <div className="pt-1">
                    <p className="font-sans font-bold text-[16px] text-primary-text">You receive a free custom audit report</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="w-full h-[400px] bg-secondary-bg relative flex items-center justify-center border-y border-border-glass overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none"></div>
        <div className="relative z-10 bg-card-bg px-8 py-4 rounded-full shadow-lg flex items-center gap-3 border border-border-glass">
          <MapPin className="text-brand-action" size={24} />
          <span className="font-sans font-bold text-[20px] text-primary-text">Our Location: Chandigarh</span>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-primary-bg">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="font-mono font-medium text-[13px] text-brand-action uppercase tracking-[2px] mb-4 block">
              [ FAQ ]
            </span>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-primary-text tracking-tighter leading-[1.1]">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-card-bg rounded-xl border border-border-glass overflow-hidden [&_summary::-webkit-details-marker]:hidden hover:border-brand-action/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-sans font-bold text-[18px] text-primary-text tracking-tight">
                  {faq.question}
                  <span className="transition group-open:rotate-180 text-muted-text">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 font-sans text-[15px] leading-[1.7] text-secondary-text">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
