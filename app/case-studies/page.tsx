import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-32">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-brand-navy mb-8">Case Studies</h1>
        <p className="font-sans text-[19px] text-secondary-text max-w-3xl mb-16">
          Explore how we&apos;ve helped ambitious brands scale their revenue, optimize their ad spend, and dominate their markets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-border-warm overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 bg-secondary-bg flex items-center justify-center border-b border-border-warm">
                <span className="font-display font-bold text-2xl text-brand-navy opacity-50">Brand {i}</span>
              </div>
              <div className="p-8">
                <span className="text-xs font-sans font-bold uppercase tracking-[1px] text-accent-orange mb-4 block">E-Commerce</span>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Scaling ROAS from 2x to 8.4x in 90 Days</h3>
                <p className="font-sans text-secondary-text mb-6">How we restructured their Meta Ads account and implemented a data-driven creative strategy to unlock massive growth.</p>
                <a href="#" className="font-sans font-medium text-[15px] text-brand-navy hover:text-accent-orange transition-colors uppercase tracking-[1px]">Read Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
