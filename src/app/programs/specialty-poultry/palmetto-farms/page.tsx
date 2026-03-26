import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Palmetto Farms - Domestic Poussin/Squab/Cornish Hen | F&G Meats',
  description: 'Premium domestic poussin, squab, and Cornish hen from Palmetto Farms. Nearly a century of traditional breeding expertise and consistent quality.',
};

export default function PalmettoFarmsPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/chicken farmmm.jpeg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/80" />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Palmetto Farms
          </h1>
          
          {/* Logo */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-lg p-6">
              <img 
                src="/images/Screenshot_25-1-2026_141236_www.fpwmeats.com.jpeg" 
                alt="Palmetto Farms Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Nearly a century of specialty poultry. Poussin, squab, Cornish hen—tender, delicate, built for fine dining.
          </p>
        </div>
      </div>

      {/* Program Info Section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Palmetto Farms has been raising squab and specialty poultry for close to 100 years. That kind of experience shows—in the consistency, the sizing, and the flavor profiles that have made them a fixture in fine dining kitchens across the country.
            </p>
          </div>

          {/* Product Offerings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Poussin */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 text-center">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Poussin</h3>
              <p className="text-neutral-200">Young chickens harvested at peak tenderness. Delicate flavor, perfect portion size for elegant single-serve presentations.</p>
            </div>

            {/* Squab */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 text-center">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Squab</h3>
              <p className="text-neutral-200">Rich, dark meat with distinctive flavor. A fine dining staple prized for its depth and versatility in sophisticated preparations.</p>
            </div>

            {/* Cornish Hen */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 text-center">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Cornish Hen</h3>
              <p className="text-neutral-200">Classic specialty bird with tender, flavorful meat. Consistent sizing for reliable menu planning and beautiful plating.</p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100">Traditional Excellence</h2>
              <div className="space-y-4 text-neutral-200">
                <p>Traditional breeding methods perfected over generations. Young birds harvested for maximum tenderness, with the delicate, nuanced flavors that set specialty poultry apart from conventional product.</p>
                <p>Each program delivers consistent sizing and reliable specs—the kind of product you can build a menu around without worrying about variation.</p>
              </div>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About Palmetto Farms
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Nearly 100 Years</h3>
                <p className="text-neutral-300">Close to a century of specialty poultry expertise. Experience that shows in every bird.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Consistent Sizing</h3>
                <p className="text-neutral-300">Reliable specs for menu planning. No surprises, no variation—just quality you can count on.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Fine Dining Standard</h3>
                <p className="text-neutral-300">A fixture in the country's best kitchens. Versatility and quality that serious chefs demand.</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
              <img 
                src="/images/chicken farmmm.jpeg" 
                alt="Traditional Breeding"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
              <img 
                src="/images/poussin cooked.jpeg" 
                alt="Fine Dining Quality"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
