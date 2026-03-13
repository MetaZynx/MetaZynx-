import VanillaCounter from './VanillaCounter';
import { BarChart3, Rocket, TrendingUp } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="bg-secondary-bg border-t border-border-glass py-[80px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center mb-10">
          <div className="h-[1px] bg-border-glass flex-grow max-w-[100px] md:max-w-[200px]"></div>
          <span className="font-mono font-medium text-[12px] text-muted-text uppercase tracking-[4px] px-4 text-center">
            Trusted By Ambitious Brands
          </span>
          <div className="h-[1px] bg-border-glass flex-grow max-w-[100px] md:max-w-[200px]"></div>
        </div>
        
        <div className="flex flex-row justify-start md:justify-center items-center gap-[16px] overflow-x-auto pb-4 md:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Replace these text placeholders with real client logo images */}
          {['FinServe Pro', 'GrowthBrand', 'RetailMax', 'EduFirst', 'RealCo', 'HealthPlus'].map((name) => (
            <div 
              key={name} 
              className="bg-card-bg border border-border-glass rounded-[8px] px-[32px] py-[18px] hover:border-muted-text transition-all duration-200 ease-in-out group shrink-0"
            >
              <span className="font-sans font-medium text-[15px] text-secondary-text group-hover:text-primary-text transition-colors duration-200 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="h-[1px] bg-border-glass my-[40px] w-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center md:border-r border-border-glass relative pb-6 md:pb-0">
            <BarChart3 className="text-brand-action mb-4" size={28} />
            <p className="font-sans font-bold text-[56px] text-primary-text leading-none mb-2 tracking-tighter">
              <VanillaCounter prefix="$" end={6} suffix="M+" />
            </p>
            <p className="font-mono font-medium text-[13px] text-muted-text uppercase tracking-[2px] mb-4">Ad Spend Managed</p>
            <div className="w-[40px] h-[3px] bg-brand-action"></div>
          </div>
          <div className="flex flex-col items-center text-center md:border-r border-border-glass relative pb-6 md:pb-0">
            <Rocket className="text-brand-action mb-4" size={28} />
            <p className="font-sans font-bold text-[56px] text-primary-text leading-none mb-2 tracking-tighter">
              <VanillaCounter end={200} suffix="+" />
            </p>
            <p className="font-mono font-medium text-[13px] text-muted-text uppercase tracking-[2px] mb-4">Campaigns Delivered</p>
            <div className="w-[40px] h-[3px] bg-brand-action"></div>
          </div>
          <div className="flex flex-col items-center text-center relative">
            <TrendingUp className="text-brand-action mb-4" size={28} />
            <p className="font-sans font-bold text-[56px] text-primary-text leading-none mb-2 tracking-tighter">
              <VanillaCounter end={8.4} decimals={1} suffix="x" />
            </p>
            <p className="font-mono font-medium text-[13px] text-muted-text uppercase tracking-[2px] mb-4">Average ROAS</p>
            <div className="w-[40px] h-[3px] bg-brand-action"></div>
          </div>
        </div>

        <div className="mt-[40px] text-center">
          <p className="font-sans font-light text-[14px] text-muted-text italic">
            Brands across e-commerce, real estate, healthcare, education and finance trust Metazynx to deliver results.
          </p>
        </div>
      </div>
    </section>
  );
}
