import Link from 'next/link';
import { Linkedin, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-accent-orange flex items-center justify-center transform -skew-x-12">
              <span className="text-white font-display font-bold text-xl">Z</span>
            </div>
            <span className="font-display font-extrabold text-2xl text-white tracking-tight">
              MetaZynx
            </span>
          </Link>
          <p className="text-gray-300 font-sans font-light text-[15px] leading-relaxed mb-6">
            Performance Without Limits. 360° Digital Marketing. Measurable Results. Zero Compromise.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://in.linkedin.com/company/metazynx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-orange transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/metazynx/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-orange transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com/MetaZynx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-orange transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://www.youtube.com/@MetaZynx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-orange transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-white">Services</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/services/seo" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">SEO & Content</Link></li>
            <li><Link href="/services/ads" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">Meta & Google Ads</Link></li>
            <li><Link href="/services/design" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">Graphic Design</Link></li>
            <li><Link href="/services/development" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">Web Development</Link></li>
            <li><Link href="/services/influencer" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">Influencer & UGC</Link></li>
            <li><Link href="/services/orm" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">ORM</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-white">Company</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/about" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">About</Link></li>
            <li><Link href="/case-studies" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">Case Studies</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">Blog</Link></li>
            <li><Link href="/careers" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">Careers</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-accent-orange transition-colors font-sans text-[15px]">Contact</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-white">Contact</h4>
          <ul className="flex flex-col gap-4 mb-6">
            <li className="flex items-start gap-3 text-gray-300 font-sans text-[15px]">
              <Phone size={18} className="mt-1 text-accent-orange flex-shrink-0" />
              <span>+91-6026767767</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300 font-sans text-[15px]">
              <Mail size={18} className="mt-1 text-accent-orange flex-shrink-0" />
              <a href="mailto:info@metazynx.com" className="hover:text-accent-orange transition-colors">info@metazynx.com</a>
            </li>
            <li className="flex items-start gap-3 text-gray-300 font-sans text-[15px]">
              <MapPin size={18} className="mt-1 text-accent-orange flex-shrink-0" />
              <span>Chandigarh, India</span>
            </li>
          </ul>
          <div className="flex gap-3">
            <span className="bg-white/10 text-white text-xs font-sans px-3 py-1 rounded border border-white/20">GST Registered</span>
            <span className="bg-white/10 text-white text-xs font-sans px-3 py-1 rounded border border-white/20">MSME Certified</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 font-sans text-sm">
          Copyright © {new Date().getFullYear()} MetaZynx | All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white font-sans text-sm transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-white font-sans text-sm transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
