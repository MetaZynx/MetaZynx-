'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>By accessing or using the MetaZynx website and our digital marketing services (the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, then you may not access the Service.</p>
          <p>These Terms apply to all visitors, users, clients, and others who access or use the Service.</p>
        </>
      )
    },
    {
      title: "2. Description of Services",
      content: (
        <>
          <p>MetaZynx provides a range of digital marketing services, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
            <li>Search Engine Optimization (SEO)</li>
            <li>Pay-Per-Click (PPC) and Social Media Advertising</li>
            <li>Graphic Design and Branding</li>
            <li>Web Development and UI/UX Design</li>
            <li>Influencer Marketing and User-Generated Content (UGC)</li>
            <li>Online Reputation Management (ORM)</li>
          </ul>
          <p>Specific deliverables, timelines, and scope of work will be outlined in a separate Statement of Work (SOW) or Service Agreement signed by both parties.</p>
        </>
      )
    },
    {
      title: "3. Client Obligations",
      content: (
        <>
          <p>To ensure the successful delivery of our services, clients agree to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
            <li>Provide timely access to necessary platforms (e.g., website CMS, Google Analytics, Meta Business Manager).</li>
            <li>Provide required assets, brand guidelines, and approvals in a timely manner.</li>
            <li>Communicate any changes in business strategy or goals that may impact ongoing campaigns.</li>
          </ul>
          <p>Delays in providing access or approvals may result in corresponding delays in project timelines and deliverables.</p>
        </>
      )
    },
    {
      title: "4. Payment Terms",
      content: (
        <>
          <p>Payment terms are determined by the specific agreement between MetaZynx and the client. General payment terms include:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
            <li><strong>Retainers:</strong> Monthly retainer fees are billed in advance on the 1st of each month.</li>
            <li><strong>Project-Based Work:</strong> Typically requires a 50% upfront deposit, with the remaining balance due upon completion or at agreed-upon milestones.</li>
            <li><strong>Late Payments:</strong> Invoices not paid within 15 days of the due date may incur a late fee of 1.5% per month. MetaZynx reserves the right to pause services for accounts with overdue balances.</li>
          </ul>
        </>
      )
    },
    {
      title: "5. Intellectual Property Rights",
      content: (
        <>
          <p><strong>Pre-existing IP:</strong> Each party retains all rights, title, and interest in their respective pre-existing intellectual property.</p>
          <p><strong>Deliverables:</strong> Upon full payment of all outstanding invoices, MetaZynx grants the client a non-exclusive, worldwide, royalty-free license to use the final deliverables (e.g., ad creatives, website code, graphics) for their intended business purposes. MetaZynx retains the right to use the deliverables in our portfolio and marketing materials, unless a non-disclosure agreement (NDA) specifies otherwise.</p>
        </>
      )
    },
    {
      title: "6. Confidentiality",
      content: (
        <>
          <p>Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of the engagement. This includes business strategies, financial data, customer lists, and trade secrets. This obligation survives the termination of the agreement.</p>
        </>
      )
    },
    {
      title: "7. Limitation of Liability",
      content: (
        <>
          <p>While MetaZynx employs industry best practices to achieve the best possible results, we do not guarantee specific outcomes, such as exact search engine rankings, specific return on ad spend (ROAS), or a guaranteed number of leads/sales, as these depend on third-party algorithms and market factors beyond our control.</p>
          <p>In no event shall MetaZynx, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        </>
      )
    },
    {
      title: "8. Term and Termination",
      content: (
        <>
          <p>Unless otherwise specified in a custom agreement, our standard retainer contracts are month-to-month.</p>
          <p>Either party may terminate the agreement by providing a 30-day written notice. Upon termination, the client is responsible for payment for all services rendered up to the effective date of termination. MetaZynx will transfer all necessary assets and account accesses back to the client upon receipt of final payment.</p>
        </>
      )
    },
    {
      title: "9. Dispute Resolution & Governing Law",
      content: (
        <>
          <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
          <p>Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts located in Chandigarh, India.</p>
        </>
      )
    },
    {
      title: "10. Contact Information",
      content: (
        <>
          <p>If you have any questions about these Terms, please contact us at:</p>
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
            Terms of Service
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
