import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Double R Ranch - Northwest Beef | F&G Meats',
  description: 'Premium Northwest beef from Double R Ranch. 80,000 acres in Washington State, first U.S. program certified Top 1/3 Choice.',
};

export default function RRRanchPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/Screenshot_25-1-2026_214216_www.agribeef.com.jpeg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/75" />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Double R Ranch
          </h1>
          
          {/* Logo */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-lg p-6">
              <img 
                src="/images/DRR Stacked Logo.jpg" 
                alt="Double R Ranch Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            80,000 acres in Washington's Okanogan region. The first U.S. program certified Top 1/3 Choice.
          </p>
        </div>
      </div>

      {/* Program Info Section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Named after founder Robert Rebholtz Sr., Double R Ranch represents the heart of Agri Beef. Family roots in ranching, supporting local farms across the Northwest. The mild climate, open spaces, and natural resources create ideal conditions for raising exceptional cattle.
            </p>
          </div>

          {/* Program Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Signature */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Double R Ranch Signature</h3>
              <p className="text-neutral-300 mb-4">Top 1/3 USDA Choice</p>
              <p className="text-neutral-200">The first program in the U.S. certified as Top 1/3 Choice. Eating quality that rivals Prime with the supply consistency high-volume operations need.</p>
            </div>

            {/* Prime */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Double R Ranch Prime</h3>
              <p className="text-neutral-300 mb-4">USDA Prime Grade</p>
              <p className="text-neutral-200">The top of the USDA marbling scale. Hand-selected for exceptional marbling, representing the finest Northwest beef available.</p>
            </div>

            {/* Choice */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Double R Ranch Choice</h3>
              <p className="text-neutral-300 mb-4">USDA Choice Grade</p>
              <p className="text-neutral-200">Consistent quality, reliable performance. Selected for uniform carcass quality and yield—predictable specs every delivery.</p>
            </div>

            {/* Northwest Feed */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Northwest Grain-Finished</h3>
              <p className="text-neutral-300 mb-4">Local Feed Program</p>
              <p className="text-neutral-200">Pasture-raised, then finished on Northwest rations: wheat, corn, barley, potatoes, and hay. Balanced richness, clean beef flavor.</p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100">The Northwest Advantage</h2>
              <div className="space-y-4 text-neutral-200">
                <p>Cool temperatures, clean water, and open pastureland across Washington, Oregon, and Idaho. These conditions support steady cattle growth, firmer fat development, and the clean beef flavor that defines Northwest beef.</p>
                <p>Processed at Agri Beef's own facilities—full control from fabrication to packaging. Consistent specifications, clean cuts, uniform sizing, dependable yields.</p>
              </div>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About Double R Ranch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">80,000 Acres</h3>
                <p className="text-neutral-300">The Double R Ranch in Loomis, Washington—home to the breeding herd for both Double R Ranch and Snake River Farms programs.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Family Ranchers</h3>
                <p className="text-neutral-300">Cattle raised by a network of family ranchers across the Northwest. Multi-generational expertise, personal care, decades of stewardship.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Vertical Integration</h3>
                <p className="text-neutral-300">From ranch to processing to delivery—Agri Beef controls every step. Quality grades have increased from 63% Choice in 2009 to 80%+ today.</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative border border-accent-500/20">
              <Image
                src="/images/DRR Valley.jpg"
                alt="Northwest Pastureland"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative border border-accent-500/20">
              <Image
                src="/images/Screenshot_23-1-2026_18636_.jpeg"
                alt="Double R Ranch Cuts"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
