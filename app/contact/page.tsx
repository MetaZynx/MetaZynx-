import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact MetaZynx | Book Your Free Marketing Audit',
  description: 'Get in touch with MetaZynx. Book a free 360° marketing audit for your brand. No commitments, just insights.',
};

export default function ContactPage() {
  const services = [
    'SEO & Content',
    'Meta & Google Ads',
    'Graphic Design',
    'Web Development',
    'Influencer & UGC',
    'ORM'
  ];

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
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display font-extrabold text-[48px] md:text-[72px] leading-[1.1] tracking-[-2px] text-secondary-bg mb-6">
            Let&apos;s Build Something Great Together
          </h1>
          <p className="font-sans text-[19px] md:text-[22px] text-gray-300 max-w-2xl mx-auto">
            Book a free 360° marketing audit for your brand. No commitments, just actionable insights.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-border-warm shadow-sm">
              <h2 className="font-display font-bold text-[32px] text-brand-navy mb-8">Request Your Free Audit</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Full Name *</label>
                  <input type="text" id="fullName" required className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors font-sans text-[15px]" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessName" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Business Name *</label>
                    <input type="text" id="businessName" required className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors font-sans text-[15px]" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Phone Number *</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors font-sans text-[15px]" placeholder="+91 98765 43210" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Work Email *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors font-sans text-[15px]" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="budget" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Monthly Marketing Budget *</label>
                  <select id="budget" required className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors bg-white font-sans text-[15px]">
                    <option value="">Select a range...</option>
                    <option value="under-50k">Under ₹50K</option>
                    <option value="50k-2l">₹50K – ₹2L</option>
                    <option value="2l-10l">₹2L – ₹10L</option>
                    <option value="10l-plus">₹10L+</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-[14px] font-bold text-brand-navy mb-3">Services Interested In</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <label key={index} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border border-border-warm rounded-sm checked:bg-accent-orange checked:border-accent-orange transition-colors cursor-pointer" />
                          <CheckCircle2 size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <span className="font-sans text-[15px] text-secondary-text group-hover:text-brand-navy transition-colors">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-[14px] font-bold text-brand-navy mb-2">Message (Optional)</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors resize-none font-sans text-[15px]" placeholder="Tell us about your current challenges and goals..."></textarea>
                </div>

                <button type="submit" className="w-full h-[60px] bg-accent-orange text-white font-sans font-bold text-[16px] uppercase tracking-[2px] rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-200 ease-out flex items-center justify-center gap-2">
                  Request Free Audit <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Details & Process */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Contact Info */}
            <div>
              <h3 className="font-display font-bold text-[28px] text-brand-navy mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={20} className="text-accent-orange" />
                  </div>
                  <div>
                    <p className="font-sans text-[12px] text-secondary-text uppercase tracking-[1.5px] font-bold mb-1">Call Us</p>
                    <a href="tel:+916026767767" className="font-display font-bold text-[22px] text-brand-navy hover:text-accent-orange transition-colors">+91-6026767767</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={20} className="text-accent-orange" />
                  </div>
                  <div>
                    <p className="font-sans text-[12px] text-secondary-text uppercase tracking-[1.5px] font-bold mb-1">Email Us</p>
                    <a href="mailto:info@metazynx.com" className="font-display font-bold text-[22px] text-brand-navy hover:text-accent-orange transition-colors">info@metazynx.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-accent-orange" />
                  </div>
                  <div>
                    <p className="font-sans text-[12px] text-secondary-text uppercase tracking-[1.5px] font-bold mb-1">Address</p>
                    <p className="font-display font-bold text-[22px] text-brand-navy">Chandigarh, India</p>
                  </div>
                </li>
              </ul>

              <a 
                href="https://wa.me/916026767767" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 w-full h-[52px] bg-[#25D366] text-white font-sans font-bold text-[15px] uppercase tracking-[1.5px] rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-200 ease-out flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>

            {/* What Happens Next */}
            <div className="bg-secondary-bg p-8 rounded-2xl border border-border-warm">
              <h3 className="font-display font-bold text-[24px] text-brand-navy mb-6">What happens next?</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-warm before:to-transparent">
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-sans font-bold text-[14px] flex-shrink-0 z-10 shadow-sm">1</div>
                  <div className="pt-1">
                    <p className="font-sans font-bold text-[16px] text-brand-navy">We review your brand within 24hrs</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-sans font-bold text-[14px] flex-shrink-0 z-10 shadow-sm">2</div>
                  <div className="pt-1">
                    <p className="font-sans font-bold text-[16px] text-brand-navy">Our strategist calls you</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-orange text-white flex items-center justify-center font-sans font-bold text-[14px] flex-shrink-0 z-10 shadow-sm">3</div>
                  <div className="pt-1">
                    <p className="font-sans font-bold text-[16px] text-brand-navy">You receive a free custom audit report</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="w-full h-[400px] bg-gray-200 relative flex items-center justify-center border-y border-border-warm">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 bg-white px-8 py-4 rounded-full shadow-lg flex items-center gap-3">
          <MapPin className="text-accent-orange" size={24} />
          <span className="font-display font-bold text-[20px] text-brand-navy">Our Location: Chandigarh</span>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-primary-bg">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-[36px] md:text-[48px] text-brand-navy tracking-[-1px]">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl border border-border-warm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-[18px] text-brand-navy">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
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

      <Footer />
    </main>
  );
}
