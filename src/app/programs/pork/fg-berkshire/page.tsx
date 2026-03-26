import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'F&G Meats Berkshire - Heritage Pork | F&G Meats',
  description: 'Premium heritage Berkshire pork from F&G Meats. 300-year-old breed, superior marbling, raised on small American family farms.',
};

export default function FGBerkshirePage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/Screenshot_26-1-2026_94612_stock.adobe.com.jpeg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/80" />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            F&G Meats Berkshire
          </h1>
          
          {/* Logo */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-lg p-6">
              <img 
                src="/images/logo-transparent-black.png" 
                alt="F&G Meats Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            A 300-year-old heritage breed. Once kept by royalty at Windsor Castle. Known in Japan as Kurobuta—the Wagyu of pork.
          </p>
        </div>
      </div>

      {/* Program Info Section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              We raise our Berkshire like our Wagyu—as a delicacy. We've bred our Berkshire with a select genetic mix of heritage breeds to enhance flavor, consistency, tenderness, marbling, and color. The result is pork that makes you forget everything you thought you knew about "the other white meat."
            </p>
          </div>

          {/* Quality Attributes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Marbling */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Superior Marbling</h3>
              <p className="text-neutral-200">Fine intramuscular fat throughout—not thick or coarse. This marbling creates a more tender, flavorful eating experience with natural sweetness and deep umami.</p>
            </div>

            {/* Color */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Deep Color</h3>
              <p className="text-neutral-200">Dark pink to red—not pale or white. Higher Minolta levels indicate darker, more flavorful meat. Our genetics and humane handling produce some of the best pH levels in the industry.</p>
            </div>

            {/* Flavor */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Clean Flavor</h3>
              <p className="text-neutral-200">Berkshire means cleaner, creamier flavor. No acidic twang like commodity pork. Higher pH correlates with less acidity, better quality, and superior tenderness.</p>
            </div>

            {/* Heritage */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Heritage Breed</h3>
              <p className="text-neutral-200">Native to Berkshire County, England. First reported in the U.S. in 1823. Sent as gifts to Japanese emperors in the 1860s, where it became known as Kurobuta—"black pig."</p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100">Raised Right</h2>
              <div className="space-y-4 text-neutral-200">
                <p>Our hogs come from small American family farms—many multi-generational operations that would be ignored by large corporations. Our program gives these farms a chance to compete while continuing traditions they've perfected over decades.</p>
                <p>All farms are third-party audited and monitored by animal nutritionists. You get Ma and Pa quality with the consistency and ease of a professional program.</p>
              </div>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About F&G Berkshire
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Never Ever</h3>
                <p className="text-neutral-300">No antibiotics, no growth promotants (including ractopamine), no animal by-products, no artificial ingredients. Always vegetarian-fed, source and age verified.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Humane Handling</h3>
                <p className="text-neutral-300">Third-party audited for humane treatment. CO2 stunning provides anesthesia, eliminates damage from electrical stunning, preserves natural color, and improves pH levels.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Craft Processing</h3>
                <p className="text-neutral-300">State-of-the-art facilities with traditional attention to detail. Small batch processing, expert hand cutting, humane harvest. Born, raised, and harvested in the USA.</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
              <img 
                src="/images/Screenshot_26-1-2026_94612_stock.adobe.com.jpeg" 
                alt="Family Farm Partners"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
              <img 
                src="/images/berk belly.jpeg" 
                alt="Berkshire Marbling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
