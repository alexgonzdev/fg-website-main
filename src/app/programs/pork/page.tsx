import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('pork-program');

export default function PorkProgramPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-800 to-primary-900 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Pork Programs
          </h1>
          <p className="font-body text-xl sm:text-2xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Partnering with the finest heritage breeds and producers to bring you premium pork selections
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Snake River Farms Kurobuta */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg mb-8 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-500 text-2xl font-bold">SRF</span>
                    </div>
                    <p className="text-neutral-400 text-sm">Premium Kurobuta</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">Snake River Farms</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  Kurobuta Pork
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/pork/snake-river-farms-kurobuta" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* F&G Meats Berkshire */}
            <div className="group">
              <div className="aspect-[4/3] bg-white rounded-lg mb-8 overflow-hidden flex items-center justify-center p-8">
                <img 
                  src="/images/logo-transparent-black.png" 
                  alt="F&G Meats Berkshire Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">F&G Meats</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  Berkshire Pork
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/pork/fg-berkshire" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
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