import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-32">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-brand-navy mb-8">Our Services</h1>
        <p className="font-sans text-[19px] text-secondary-text max-w-3xl">
          We provide a comprehensive suite of digital marketing services designed to scale your brand and maximize ROI.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Placeholder content */}
          <div className="bg-white p-8 rounded-xl border border-border-warm">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">SEO & Content</h2>
            <p className="font-sans text-secondary-text">Dominate search rankings with data-driven SEO strategies and high-converting content that drives organic growth.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-border-warm">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Meta & Google Ads</h2>
            <p className="font-sans text-secondary-text">Precision-targeted paid campaigns engineered for maximum ROAS and scalable customer acquisition.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-border-warm">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Graphic Design</h2>
            <p className="font-sans text-secondary-text">Premium visual identities, ad creatives, and brand assets that capture attention and drive action.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-border-warm">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Web Development</h2>
            <p className="font-sans text-secondary-text">High-performance, conversion-optimized websites built on modern tech stacks for serious brands.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
