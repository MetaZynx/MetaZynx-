'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Introduction",
      content: (
        <>
          <p>Welcome to MetaZynx (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our digital marketing services.</p>
          <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.</p>
        </>
      )
    },
    {
      title: "2. Information We Collect",
      content: (
        <>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.</li>
            <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.</li>
          </ul>
        </>
      )
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
            <li>Create and manage your account and deliver targeted advertising, newsletters, and other information regarding promotions and the site to you.</li>
            <li>Email you regarding your account or order and fulfill and manage purchases, orders, payments, and other transactions related to the site.</li>
            <li>Generate a personal profile about you to make future visits to the site more personalized and increase the efficiency and operation of the site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the site.</li>
            <li>Notify you of updates to the site or our services.</li>
          </ul>
        </>
      )
    },
    {
      title: "4. Information Sharing and Disclosure",
      content: (
        <>
          <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>
        </>
      )
    },
    {
      title: "5. Cookie Policy",
      content: (
        <>
          <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the site to help customize the site and improve your experience. When you access the site, your personal information is not collected through the use of tracking technology.</p>
          <p>Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the site. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser&apos;s settings to notify you each time a cookie is tendered.</p>
        </>
      )
    },
    {
      title: "6. Data Security",
      content: (
        <>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        </>
      )
    },
    {
      title: "7. Your Data Protection Rights",
      content: (
        <>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
            <li>The right to access, update or to delete the information we have on you.</li>
            <li>The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
            <li>The right to object. You have the right to object to our processing of your personal data.</li>
            <li>The right of restriction. You have the right to request that we restrict the processing of your personal information.</li>
            <li>The right to data portability. You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li>
            <li>The right to withdraw consent. You also have the right to withdraw your consent at any time where we relied on your consent to process your personal information.</li>
          </ul>
        </>
      )
    },
    {
      title: "8. Changes to This Privacy Policy",
      content: (
        <>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        </>
      )
    },
    {
      title: "9. Contact Us",
      content: (
        <>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p className="mt-4">
            <strong>MetaZynx</strong><br />
            Chandigarh, India<br />
            Email: <a href="mailto:info@metazynx.com" className="text-accent-orange hover:underline">info@metazynx.com</a><br />
            Phone: +91-6026767767
          </p>
        </>
      )
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
            Privacy Policy
          </h1>
          <p className="font-sans text-[19px] md:text-[22px] text-gray-300 max-w-2xl mx-auto">
            Last updated: March 8, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-20 w-full">
        <div className="prose prose-lg text-secondary-text font-sans max-w-none">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <h2 className="font-display font-bold text-[28px] text-brand-navy mb-6 border-b border-border-warm pb-4">
                {section.title}
              </h2>
              <div className="space-y-4 leading-[1.8]">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
