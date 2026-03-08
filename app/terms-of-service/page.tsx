import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-32">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-20 w-full">
        <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-brand-navy mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-secondary-text font-sans max-w-none">
          <p>Last updated: March 8, 2026</p>
          <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using the MetaZynx website (the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, then you may not access the Service.</p>
          
          <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-4">2. Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of MetaZynx and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MetaZynx.</p>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-4">3. Links to Other Web Sites</h2>
          <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by MetaZynx.</p>
          <p>MetaZynx has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that MetaZynx shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-4">4. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
          <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
