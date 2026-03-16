import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand */}
        <div>
          <Link href="/" className="flex items-center mb-6 group">
            <Image
              src="/metazynx-logo-dark.png"
              alt="MetaZynx Logo"
              width={160}
              height={48}
              style={{ objectFit: 'contain', height: '40px', width: 'auto' }}
            />
          </Link>
          <p className="text-[#888888] font-sans text-[15px] leading-relaxed mb-6">
            360° Performance Marketing. Measurable Results. No Long-Term Contracts.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://in.linkedin.com/company/metazynx" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#E8440A] transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/metazynx/" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#E8440A] transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com/MetaZynx" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#E8440A] transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://www.youtube.com/@MetaZynx" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#E8440A] transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-sans font-bold text-lg mb-6 text-white">Services</h4>
          <ul className="flex flex-col gap-4">
            {[
              { label: 'SEO & Content', href: '/services/seo' },
              { label: 'Meta & Google Ads', href: '/services/ads' },
              { label: 'Graphic Design', href: '/services/design' },
              { label: 'Web Development', href: '/services/development' },
              { label: 'Influencer & UGC', href: '/services/influencer' },
              { label: 'ORM', href: '/services/orm' },
            ].map(item => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#888888] hover:text-[#E8440A] transition-colors font-sans text-[15px]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="font-sans font-bold text-lg mb-6 text-white">Company</h4>
          <ul className="flex flex-col gap-4">
            {[
              { label: 'About', href: '/about' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Blog', href: '/blog' },
              { label: 'Careers', href: '/careers' },
              { label: 'Contact', href: '/contact' },
            ].map(item => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#888888] hover:text-[#E8440A] transition-colors font-sans text-[15px]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-sans font-bold text-lg mb-6 text-white">Get In Touch</h4>
          <ul className="flex flex-col gap-4 mb-6">
            <li className="flex items-start gap-3 text-[#888888] font-sans text-[15px]">
              <Phone size={18} className="mt-1 text-[#E8440A] flex-shrink-0" />
              <a href="tel:+916026767767" className="hover:text-[#E8440A] transition-colors">+91-6026767767</a>
            </li>
            <li className="flex items-start gap-3 text-[#888888] font-sans text-[15px]">
              <Mail size={18} className="mt-1 text-[#E8440A] flex-shrink-0" />
              <a href="mailto:info@metazynx.com" className="hover:text-[#E8440A] transition-colors">info@metazynx.com</a>
            </li>
            <li className="flex items-start gap-3 text-[#888888] font-sans text-[15px]">
              <MapPin size={18} className="mt-1 text-[#E8440A] flex-shrink-0" />
              <span>Chandigarh, India</span>
            </li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-[#E8440A] text-white font-sans font-bold text-[13px] uppercase tracking-widest px-6 py-3 rounded-md hover:bg-white hover:text-[#0D0D0D] transition-all duration-300"
          >
            Start a Project →
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#888888] font-sans text-sm">
          Copyright © {new Date().getFullYear()} MetaZynx | All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="text-[#888888] hover:text-white font-sans text-sm transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-[#888888] hover:text-white font-sans text-sm transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
