import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Snake River Farms Kurobuta - American Kurobuta Pork | F&G Meats',
  description: '100% purebred Berkshire pork from Snake River Farms. The oldest Berkshire bloodlines in America, known as Kurobuta—the culinary equivalent of Wagyu beef.',
};

export default function SnakeRiverFarmsKurobutaPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/Screenshot_26-1-2026_9560_stock.adobe.com.jpeg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/80" />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Snake River Farms Kurobuta
          </h1>
          
          {/* Logo */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-lg p-6">
              <img 
                src="/images/SRF Logo.jpg" 
                alt="Snake River Farms Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            100% purebred Berkshire. The oldest bloodlines in America. Known in Japan as Kurobuta—the culinary equivalent of Wagyu beef.
          </p>
        </div>
      </div>

      {/* Program Info Section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Snake River Farms produces the world's finest pork using 100% purebred Berkshire genetics. Referred to as Kurobuta ("black hog") in Japan, this breed is highly regarded for its internal marbling, juicy tenderness, and intense flavor. The Wall Street Journal dubbed it "The Other Red Meat."
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* The Pedigree */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">The Marvel Pedigree</h3>
              <p className="text-neutral-200">Oliver Cromwell's army discovered the Berkshire hog in the Shire of Berks, England, approximately 300 years ago. The breed was refined in the 1800s and has remained pure ever since. In Japan, 100% Berkshire pork is considered on par with Wagyu.</p>
            </div>

            {/* Worth the Wait */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Worth the Wait</h3>
              <p className="text-neutral-200">Slow-fed a carefully balanced mix of corn, soybean meal, rolled oats, vitamins and minerals. On feed approximately 10% longer than commodity hogs—extra time that enhances marbling and develops deeper flavor.</p>
            </div>

            {/* Individualized Care */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Individualized Care</h3>
              <p className="text-neutral-200">Herds kept small for daily attention and individualized care. No gestation stalls. Raised without growth promotants. The extraordinary care given to this special breed makes it the finest pork available.</p>
            </div>

            {/* Premium Flavor */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Premium Flavor</h3>
              <p className="text-neutral-200">Small, fine streaks of marbling make each cut tender and juicy. Higher pH indicates superior quality. Unlike traditional white pork, Kurobuta is richer in flavor and much darker in color.</p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100">Family Farm Network</h2>
              <div className="space-y-4 text-neutral-200">
                <p>Raised from start to finish across 35+ family farms throughout the Midwest and Idaho. Snake River Farms manages the entire production process, joining forces with family-owned operations who focus on raising the finest livestock.</p>
                <p>Using the oldest Berkshire bloodlines in the United States, Snake River Farms has cultivated an international following. This is pork with character, structure, and flavor integrity—built for kitchens that demand the best.</p>
              </div>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About SRF Kurobuta
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">100% Purebred</h3>
                <p className="text-neutral-300">True Berkshire genetics—no crossbreeding. The same pure bloodlines that earned Kurobuta its legendary status in Japan.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">35+ Family Farms</h3>
                <p className="text-neutral-300">A network of dedicated family operations across the Midwest and Idaho. Small herds, personal attention, generations of expertise.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">No Shortcuts</h3>
                <p className="text-neutral-300">No gestation stalls, no growth promotants. Extended feeding for enhanced marbling. Quality takes time—and it shows.</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
              <img 
                src="/images/Screenshot_26-1-2026_9560_stock.adobe.com.jpeg" 
                alt="Midwest Family Farms"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
              <img 
                src="/images/Screenshot_26-1-2026_95632_stock.adobe.com.jpeg" 
                alt="Kurobuta Marbling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
