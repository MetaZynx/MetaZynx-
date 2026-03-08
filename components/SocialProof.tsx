import VanillaCounter from './VanillaCounter';

export default function SocialProof() {
  return (
    <section className="bg-secondary-bg py-16 border-b border-border-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="font-sans font-bold text-xs text-muted-text uppercase tracking-[2px]">Trusted By Ambitious Brands</span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Replace these with real client logos */}
          {['FinServe Pro', 'GrowthBrand', 'RetailMax', 'EduFirst', 'RealCo', 'HealthPlus'].map((name) => (
            <div key={name} className="h-12 flex items-center justify-center px-4">
              <span className="font-display font-bold text-xl text-brand-navy">{name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-border-warm pt-12">
          <div className="text-center md:border-r border-border-warm">
            <p className="font-stats text-5xl text-brand-navy mb-2">
              <VanillaCounter prefix="₹" end={50} suffix="Cr+" />
            </p>
            <p className="font-sans text-sm text-secondary-text uppercase tracking-wider font-medium">Ad Spend Managed</p>
          </div>
          <div className="text-center md:border-r border-border-warm">
            <p className="font-stats text-5xl text-brand-navy mb-2">
              <VanillaCounter end={200} suffix="+" />
            </p>
            <p className="font-sans text-sm text-secondary-text uppercase tracking-wider font-medium">Campaigns Delivered</p>
          </div>
          <div className="text-center">
            <p className="font-stats text-5xl text-brand-navy mb-2">
              <VanillaCounter end={8.4} decimals={1} suffix="x" />
            </p>
            <p className="font-sans text-sm text-secondary-text uppercase tracking-wider font-medium">Average ROAS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
