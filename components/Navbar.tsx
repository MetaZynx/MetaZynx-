'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="MetaZynx Home">
          <Image
            src="/metazynx-logo.png"
            alt="MetaZynx Logo"
            width={160}
            height={48}
            priority
            style={{
              objectFit: "contain",
              height: "40px",
              width: "auto",
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-sans font-medium text-[15px] transition-colors py-2 ${
                  isActive ? 'text-accent-orange' : 'text-primary-text hover:text-accent-orange'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-orange"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-accent-orange text-white font-sans font-medium text-[15px] uppercase tracking-[1.5px] px-6 py-3 rounded-md hover:scale-[1.03] hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-200 ease-out inline-block"
          >
            Get Free Audit
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-brand-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-primary-bg z-40 flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-display font-bold text-3xl ${isActive ? 'text-accent-orange' : 'text-brand-navy'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="bg-accent-orange text-white font-sans font-medium text-center text-[15px] uppercase tracking-[1.5px] px-6 py-4 rounded-md mt-4 hover:scale-[1.03] transition-all duration-200 ease-out"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Audit
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
