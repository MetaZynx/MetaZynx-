import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-32">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
        <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-brand-navy mb-8">Let&apos;s Talk Growth</h1>
        <p className="font-sans text-[19px] text-secondary-text max-w-3xl mb-16">
          Ready to scale your brand? Fill out the form below, and our team will get back to you within 24 hours to schedule your free 360° audit.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl border border-border-warm shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block font-sans text-sm font-bold text-brand-navy mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-sans text-sm font-bold text-brand-navy mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-bold text-brand-navy mb-2">Work Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="company" className="block font-sans text-sm font-bold text-brand-navy mb-2">Company Name</label>
                <input type="text" id="company" className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors" placeholder="Acme Corp" />
              </div>

              <div>
                <label htmlFor="budget" className="block font-sans text-sm font-bold text-brand-navy mb-2">Monthly Marketing Budget</label>
                <select id="budget" className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors bg-white">
                  <option value="">Select a range...</option>
                  <option value="<1L">Less than ₹1 Lakh</option>
                  <option value="1L-5L">₹1 Lakh - ₹5 Lakhs</option>
                  <option value="5L-20L">₹5 Lakhs - ₹20 Lakhs</option>
                  <option value=">20L">More than ₹20 Lakhs</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-sm font-bold text-brand-navy mb-2">How can we help?</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-border-warm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>

              <button type="submit" className="w-full h-[52px] bg-accent-orange text-white font-sans font-medium text-[15px] uppercase tracking-[1.5px] rounded-md hover:bg-opacity-90 transition-all shadow-md shadow-accent-orange/20">
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="font-display font-bold text-3xl text-brand-navy mb-6">Direct Contact</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent-orange" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-secondary-text uppercase tracking-wider font-medium mb-1">Call Us</p>
                    <p className="font-sans font-bold text-xl text-brand-navy">+91-6026767767</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent-orange" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-secondary-text uppercase tracking-wider font-medium mb-1">Email Us</p>
                    <a href="mailto:info@metazynx.com" className="font-sans font-bold text-xl text-brand-navy hover:text-accent-orange transition-colors">info@metazynx.com</a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-orange" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-secondary-text uppercase tracking-wider font-medium mb-1">Visit Us</p>
                    <p className="font-sans font-bold text-xl text-brand-navy">Chandigarh, India</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-brand-navy p-8 rounded-2xl text-white">
              <h4 className="font-display font-bold text-2xl mb-4">Why Book an Audit?</h4>
              <ul className="space-y-3 font-sans text-[15px] text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-orange mt-1">•</span>
                  <span>Uncover hidden revenue opportunities in your current campaigns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-orange mt-1">•</span>
                  <span>Get a clear, actionable roadmap for the next 90 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-orange mt-1">•</span>
                  <span>Zero commitment required. Keep the strategy even if we don&apos;t partner.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
