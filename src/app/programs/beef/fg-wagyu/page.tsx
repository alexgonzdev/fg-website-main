import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'F&G Meats Wagyu - American Wagyu | F&G Meats',
  description: 'Premium American Wagyu from F&G Meats. Our signature Wagyu program featuring exceptional marbling and flavor.',
};

export default function FGWagyuPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/wagyu-grazing.jpg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/70" />

      {/* Program Info Section */}
      <div className="relative pt-32 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Program Name */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6 tracking-tight drop-shadow-lg">
              F&G Meats Wagyu
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
            
            {/* Brief Summary */}
            <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-lg">
              F1 American Wagyu raised on Midwest family farms. Japanese genetics, heartland values, zero compromises.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Description Section */}
      <div className="py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Detailed Content */}
            <div className="space-y-8">
              <div>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6 drop-shadow-lg">
                  Our Wagyu program starts with genetics and ends with trust. We work with a tight network of family farms across the Midwest—operations where cattle get individual attention, not industrial processing. Every animal is source- and age-verified, tracked by professional nutritionists, and raised under Never-Ever protocols: no antibiotics, no hormones, no shortcuts.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6 drop-shadow-lg">
                  The result? Beef that tells a story your guests can taste. Full traceability from pasture to plate. Marbling that develops naturally over extended feeding periods. A clean program built for chefs who care about what they serve and where it comes from.
                </p>
              </div>

              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 my-12 border border-accent-500/20">
                <h3 className="font-heading text-2xl text-neutral-100 mb-8 text-center">Two Distinct Lines</h3>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="font-heading text-xl text-accent-500 mb-4">Grain-Finished</h4>
                    <p className="text-neutral-200 text-lg leading-relaxed">
                      Fed 300% longer than commodity beef on a Japanese-style diet. The extended timeline lets intramuscular fat mature slowly, building the buttery richness and low-melt marbling that defines real Wagyu. This is beef that performs—tender, forgiving, and deeply flavorful on the plate.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-heading text-xl text-accent-500 mb-4">Grass-Fed / Grass-Finished</h4>
                    <p className="text-neutral-200 text-lg leading-relaxed">
                      Open pasture from start to finish. A cleaner, more mineral-forward profile with natural sweetness. For chefs who want Wagyu genetics with terroir-driven character—the best of both worlds.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-neutral-200 text-lg leading-relaxed mb-8 drop-shadow-lg">
                  Each generation gets better. Our selective breeding program continuously improves marbling, tenderness, and carcass quality while maintaining the ethical standards that make this program worth talking about. American Wagyu that stands apart—in quality and in story.
                </p>
              </div>

              {/* Additional Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/images/Screenshot_25-1-2026_221611_redtopfarms.com.jpeg" 
                    alt="Midwest Family Farms"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/images/f&g fillet and tommy.jpeg" 
                    alt="Premium Wagyu Marbling"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Inquire Button */}
              <div className="pt-8">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About F&G Wagyu
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb at bottom */}
      <div className="relative z-10 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-neutral-300">
            <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/programs/beef" className="hover:text-accent-500 transition-colors">Beef Programs</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-100">F&G Meats Wagyu</span>
          </nav>
        </div>
      </div>
    </div>
  );
}