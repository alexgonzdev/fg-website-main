import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vintage Beef Co - Vaca Vieja / Galician Style | F&G Meats',
  description: 'Australian Galician-style aged beef from Vintage Beef Co. Grass-fed breeding cattle aged 5-15 years with rich, developed flavor and superb marbling.',
};

export default function VintageBeefCoPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/Screenshot_25-1-2026_1576_www.instagram.com.jpeg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/70" />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Vintage Beef Co
          </h1>
          
          {/* Logo */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-lg p-6">
              <img 
                src="/images/Screenshot_25-1-2026_141713_www.bing.com.jpeg" 
                alt="Vintage Beef Co Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Australia's take on Spanish Galician beef. Retired breeding cattle, 100% grass-fed, aged 5-15 years. Rich, developed flavor with superb marbling.
          </p>
        </div>
      </div>

      {/* Program Info Section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Vintage Beef Co is produced from British bred beef cows aged at least 5 years (average 8-9 years) and Wagyu cows ranging 9-15 years. These retired breeding cattle are turned out to pasture where they feed only on grass in a relaxed environment—more than twice the age of regular cattle. The result is a distinct eating experience Europeans have enjoyed for years.
            </p>
          </div>

          {/* Three Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Reserva */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-2">Reserva</h3>
              <p className="text-neutral-400 text-sm mb-4">MB 1-2</p>
              <p className="text-neutral-200">Looking for beef that's actually beefy? Reserva delivers old-cow flavor without breaking the budget. Matured meat with a great story to tell.</p>
            </div>

            {/* Galiciana */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-2">Galiciana</h3>
              <p className="text-neutral-400 text-sm mb-4">MB 3+</p>
              <p className="text-neutral-200">For the serious beef connoisseur. Full flavor with delicious marbling—takes you back to Basque country. Only 25% of cattle achieve this grade.</p>
            </div>

            {/* The Matriarch */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-2">The Matriarch</h3>
              <p className="text-neutral-400 text-sm mb-4">Vintage Wagyu</p>
              <p className="text-neutral-200">Breeding stock from Australia's finest Wagyu. Ages up to fifteen years. Spectacular depth of flavor, creamy marbling—The Grande Dame of old cows.</p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100">The Galician Tradition</h2>
              <div className="space-y-4 text-neutral-200">
                <p>Similar to Vaca Vieja from the Spanish/French Basque region, but with deeper fat coverage that protects the loin during dry aging. Clean, minerally grass-fed flavor with savory notes of cheese.</p>
                <p>Produced from Greenham Tasmania and Greenham Gippsland meatworks. Natural State Hanging Method—carcasses hung from the hip in their natural position for better eating quality in hindquarter cuts.</p>
              </div>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About Vintage Beef Co
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">100% Grass-Fed</h3>
                <p className="text-neutral-300">All cattle including Wagyu. Certified by third-party audited Greenham Never Ever program. No antibiotics, no hormones, GMO-free.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">5-15 Years Aged</h3>
                <p className="text-neutral-300">British breeds minimum 5 years (average 8-9). Wagyu cows 9-15 years. More than twice the age of regular cattle—time builds flavor.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Tenderstretched</h3>
                <p className="text-neutral-300">Natural State Hanging from the hip promotes better eating quality. Carcase weight 300-350kg. Rigorous grading standards.</p>
              </div>
            </div>
          </div>

          {/* Flavor Profile */}
          <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20 mb-16">
            <h2 className="font-heading text-2xl text-neutral-100 mb-6 text-center">The Flavor Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-accent-500 font-semibold mb-2">Robust Beef</h4>
                <p className="text-neutral-300 text-sm">Deep, developed flavor from extended aging on pasture</p>
              </div>
              <div>
                <h4 className="text-accent-500 font-semibold mb-2">Savory Cheese</h4>
                <p className="text-neutral-300 text-sm">Complex umami notes unique to aged grass-fed beef</p>
              </div>
              <div>
                <h4 className="text-accent-500 font-semibold mb-2">Mineral Finish</h4>
                <p className="text-neutral-300 text-sm">Clean, grass-fed character from pristine Australian pastures</p>
              </div>
              <div>
                <h4 className="text-accent-500 font-semibold mb-2">Buttery Marbling</h4>
                <p className="text-neutral-300 text-sm">Superb fat distribution for tenderness and richness</p>
              </div>
            </div>
          </div>

          {/* Source */}
          <div className="text-center mb-16">
            <p className="text-neutral-200 text-sm drop-shadow-lg">
              Sourced from Southern Australia and Tasmania—temperate climate, high rainfall, fertile soils. Ideal conditions for raising exceptional grass-fed cattle.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
              <img 
                src="/images/vintage beef cows.jpeg" 
                alt="Vintage Beef Cattle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-accent-500/20">
              <img 
                src="/images/vintage beef cut ribeye.jpeg" 
                alt="Vintage Beef Ribeye"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
