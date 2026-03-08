import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-32">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-brand-navy mb-8">About MetaZynx</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div>
            <h2 className="font-display font-bold text-[32px] text-brand-navy mb-6">Performance Without Limits</h2>
            <p className="font-sans text-[19px] leading-[1.7] text-secondary-text mb-6">
              MetaZynx is a premier 360° performance marketing agency. We deliver measurable growth through SEO, Meta Ads, Google Ads, influencer marketing, ORM, web development and graphic design for high-growth brands.
            </p>
            <p className="font-sans text-[19px] leading-[1.7] text-secondary-text">
              Our approach is data-driven, transparent, and focused entirely on ROI. We don&apos;t just run campaigns; we build empires.
            </p>
          </div>
          <div className="bg-secondary-bg p-12 rounded-2xl border border-border-warm flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="font-stats text-6xl text-accent-gold mb-2">97%</p>
                <p className="font-sans text-sm text-brand-navy uppercase tracking-wider font-bold">Client Retention</p>
              </div>
              <div>
                <p className="font-stats text-6xl text-accent-gold mb-2">₹50Cr+</p>
                <p className="font-sans text-sm text-brand-navy uppercase tracking-wider font-bold">Ad Spend Managed</p>
              </div>
              <div>
                <p className="font-stats text-6xl text-accent-gold mb-2">200+</p>
                <p className="font-sans text-sm text-brand-navy uppercase tracking-wider font-bold">Campaigns</p>
              </div>
              <div>
                <p className="font-stats text-6xl text-accent-gold mb-2">8.4x</p>
                <p className="font-sans text-sm text-brand-navy uppercase tracking-wider font-bold">Average ROAS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
