import Link from 'next/link';
import { Linkedin, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-bg text-primary-text pt-20 pb-8 px-6 md:px-12 border-t border-border-glass">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-8 h-8 bg-brand-action flex items-center justify-center transform -skew-x-12 group-hover:scale-105 transition-transform">
              <span className="text-white font-sans font-bold text-xl">Z</span>
            </div>
            <span className="font-sans font-black text-2xl tracking-tight text-primary-text">
              MetaZynx
            </span>
          </Link>
          <p className="text-secondary-text font-sans text-[15px] leading-relaxed mb-6">
            Performance Without Limits. 360° Digital Marketing. Measurable Results. Zero Compromise.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://in.linkedin.com/company/metazynx" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-brand-action transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/metazynx/" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-brand-action transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com/MetaZynx" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-brand-action transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://www.youtube.com/@MetaZynx" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-brand-action transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-sans font-bold text-lg mb-6 text-primary-text">Services</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/services/seo" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">SEO & Content</Link></li>
            <li><Link href="/services/ads" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">Meta & Google Ads</Link></li>
            <li><Link href="/services/design" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">Graphic Design</Link></li>
            <li><Link href="/services/development" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">Web Development</Link></li>
            <li><Link href="/services/influencer" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">Influencer & UGC</Link></li>
            <li><Link href="/services/orm" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">ORM</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="font-sans font-bold text-lg mb-6 text-primary-text">Company</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/about" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">About</Link></li>
            <li><Link href="/case-studies" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">Case Studies</Link></li>
            <li><Link href="/blog" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">Blog</Link></li>
            <li><Link href="/careers" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">Careers</Link></li>
            <li><Link href="/contact" className="text-secondary-text hover:text-brand-action transition-colors font-sans text-[15px]">Contact</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-sans font-bold text-lg mb-6 text-primary-text">Contact</h4>
          <ul className="flex flex-col gap-4 mb-6">
            <li className="flex items-start gap-3 text-secondary-text font-sans text-[15px]">
              <Phone size={18} className="mt-1 text-brand-action flex-shrink-0" />
              <span>+91-6026767767</span>
            </li>
            <li className="flex items-start gap-3 text-secondary-text font-sans text-[15px]">
              <Mail size={18} className="mt-1 text-brand-action flex-shrink-0" />
              <a href="mailto:info@metazynx.com" className="hover:text-brand-action transition-colors">info@metazynx.com</a>
            </li>
            <li className="flex items-start gap-3 text-secondary-text font-sans text-[15px]">
              <MapPin size={18} className="mt-1 text-brand-action flex-shrink-0" />
              <span>Chandigarh, India</span>
            </li>
          </ul>
          <div className="flex gap-3">
            <span className="bg-secondary-bg text-muted-text text-xs font-mono px-3 py-1 rounded border border-border-glass">GST Registered</span>
            <span className="bg-secondary-bg text-muted-text text-xs font-mono px-3 py-1 rounded border border-border-glass">MSME Certified</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-border-glass flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-text font-sans text-sm">
          Copyright © {new Date().getFullYear()} MetaZynx | All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="text-muted-text hover:text-primary-text font-sans text-sm transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-muted-text hover:text-primary-text font-sans text-sm transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
