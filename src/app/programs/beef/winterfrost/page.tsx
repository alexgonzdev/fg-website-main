import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WinterFrost American Wagyu | F&G Meats',
  description: 'Premium American Wagyu beef from WinterFrost. 100% Tajima Black Wagyu lineage, born and raised in the USA with exceptional marbling and flavor.',
};

export default function WinterFrostPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/wagyu-grazing.jpg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/80" />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            WinterFrost
          </h1>
          
          {/* Logo */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-lg p-6">
              <img 
                src="/images/Screenshot_25-1-2026_14140_www.dropbox.com.jpeg" 
                alt="WinterFrost Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            100% Tajima Black Wagyu genetics. Born and raised in the USA. Buttery, beefy, fork-tender.
          </p>
        </div>
      </div>

      {/* Program Info Section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              WinterFrost crosses American cattle with Tajima Kuroge Washu bulls—the gold standard of Japanese Black Wagyu. Fed premium vegetarian whole grains, never given hormones or growth promotants. Pure genetics, clean production.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 text-center">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Tajima Bloodline</h3>
              <p className="text-neutral-200">The legendary Japanese genetics prized for extraordinary intramuscular marbling. No compromises on lineage.</p>
            </div>

            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 text-center">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">American Raised</h3>
              <p className="text-neutral-200">Born here, fed here. Premium vegetarian grains, zero hormones, zero growth promotants.</p>
            </div>

            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 text-center">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">BMS 6-8</h3>
              <p className="text-neutral-200">Single-tier grading. Consistent marbling, consistent quality, every cut.</p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100">Predictable Excellence</h2>
              <div className="space-y-4 text-neutral-200">
                <p>WinterFrost delivers what other Wagyu programs can't: consistency. Their breeding program harnesses 100% Tajima genetics to produce beef that's buttery, beefy, and reliably tender—every time.</p>
                <p>Processed at Greater Omaha's facility, a name that's meant quality since 1920. The partnership combines heritage genetics with world-class processing.</p>
              </div>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About WinterFrost
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Verified Genetics</h3>
                <p className="text-neutral-300">Expert breed verification: Tajima Wagyu crossed with predominantly Jersey. A-maturity cattle, age and source verified.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Ultrasound Selection</h3>
                <p className="text-neutral-300">Cattle preselected for size, genetics, and marbling using predictive ultrasound technology. Science-backed selection.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Perfect Sizing</h3>
                <p className="text-neutral-300">Precision production means primals in preferred weights only. Ideal for thick-cut steaks, every time.</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="text-center">
            <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100 mb-8">WinterFrost Excellence</h2>
            <div className="max-w-lg mx-auto">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
                <img 
                  src="/images/wf wagyu cuts.jpeg" 
                  alt="WinterFrost American Wagyu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
