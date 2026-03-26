import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greater Omaha Packing | F&G Meats',
  description: 'Premium Midwest Angus and Hereford beef from Greater Omaha Packing. Since 1920, delivering unparalleled quality from family-owned producers.',
};

export default function GreaterOmahaPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/ranching.jpg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/80" />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Greater Omaha Packing
          </h1>
          
          {/* Logo */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-lg p-6">
              <img 
                src="/images/Screenshot_25-1-2026_133933_www.dropbox.com.jpeg" 
                alt="Greater Omaha Packing Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Over a century in the beef business. Midwest corn-fed cattle, single-source processing, global reach.
          </p>
        </div>
      </div>

      {/* Program Info Section */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Since 1920, Greater Omaha has sourced cattle from family producers within 250 miles of their facility. Single-source processing means total control—from the pasture to your plate.
            </p>
          </div>

          {/* Brand Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* 1920 Angus */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">1920 Angus</h3>
              <p className="text-neutral-300 mb-4">Top Choice or Higher (G-104)</p>
              <p className="text-neutral-200">The flagship. Named for the founding year, built on a century of selection for superior marbling.</p>
            </div>

            {/* Classic Angus */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Classic Angus</h3>
              <p className="text-neutral-300 mb-4">USDA Choice or Higher (G-104A)</p>
              <p className="text-neutral-200">Reliable Angus that performs. Consistent specs, consistent flavor, every order.</p>
            </div>

            {/* 1881 Hereford */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">1881 Hereford</h3>
              <p className="text-neutral-300 mb-4">Upper 2/3 Choice or Higher (G-103)</p>
              <p className="text-neutral-200">Heritage breed, heritage flavor. Rich, tender, and distinctly Hereford.</p>
            </div>

            {/* Classic Hereford */}
            <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-8 border border-accent-500/20">
              <h3 className="font-heading text-2xl text-accent-500 mb-4">Classic Hereford</h3>
              <p className="text-neutral-300 mb-4">USDA High Select or Higher (G-103A)</p>
              <p className="text-neutral-200">Everyday quality with character. Solid performance at a smart price point.</p>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-neutral-100">Sourcing & Standards</h2>
              <div className="space-y-4 text-neutral-200">
                <p>Hereford, Angus, and Black Baldy cattle from trusted Midwest families. English heritage genetics, strict feed requirements, age verification on every head.</p>
                <p>Grading runs well above industry average. That's how they ship to all 50 states and 70+ countries with the same quality every time.</p>
              </div>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire About Greater Omaha
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">100+ Years</h3>
                <p className="text-neutral-300">A century of beef. Pioneers in food safety and humane handling, still leading the way.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Single-Source</h3>
                <p className="text-neutral-300">One facility, total control. Hand-selected family producers, corn-fed cattle, humane practices throughout.</p>
              </div>
              <div className="bg-primary-900/60 backdrop-blur-sm rounded-lg p-6 border border-accent-500/20">
                <h3 className="font-heading text-xl text-accent-500 mb-3">Global Reach</h3>
                <p className="text-neutral-300">All 50 states. 70+ countries. Same quality, same consistency, anywhere in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
