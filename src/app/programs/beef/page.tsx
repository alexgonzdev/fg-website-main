import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('beef-program');

export default function BeefProgramPage() {
  return (
    <div className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/OUR SERVICES .jpeg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/85" />
      
      {/* Hero Section */}
      <div className="py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Beef Programs
          </h1>
          <p className="font-body text-xl sm:text-2xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Partnering with the world's finest ranchers and producers to bring you premium beef selections
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 lg:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Greater Omaha Packing */}
            <div className="group">
              <div className="aspect-[4/3] bg-white rounded-lg mb-8 overflow-hidden flex items-center justify-center p-8">
                <img 
                  src="/images/Screenshot_25-1-2026_133933_www.dropbox.com.jpeg" 
                  alt="Greater Omaha Packing Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">Greater Omaha Packing</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  Premium Midwest Angus & Hereford
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/beef/greater-omaha" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* RR Ranch */}
            <div className="group">
              <div className="aspect-[4/3] bg-white rounded-lg mb-8 overflow-hidden flex items-center justify-center p-8">
                <img 
                  src="/images/DRR Stacked Logo.jpg" 
                  alt="RR Ranch Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">RR Ranch</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  American Angus Upper Choice/Prime
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/beef/rr-ranch" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* WinterFrost American Wagyu */}
            <div className="group">
              <div className="aspect-[4/3] bg-white rounded-lg mb-8 overflow-hidden flex items-center justify-center p-8">
                <img 
                  src="/images/Screenshot_25-1-2026_14140_www.dropbox.com.jpeg" 
                  alt="WinterFrost American Wagyu Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">WinterFrost</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  American Wagyu
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/beef/winterfrost" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* F&G Wagyu */}
            <div className="group">
              <div className="aspect-[4/3] bg-white rounded-lg mb-8 overflow-hidden flex items-center justify-center p-8">
                <img 
                  src="/images/logo-transparent-black.png" 
                  alt="F&G Meats Wagyu Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">F&G Meats Wagyu</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  American Wagyu
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/beef/fg-wagyu" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}