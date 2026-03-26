import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('exotics-program');

export default function ExoticsProgramPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-800 to-primary-900 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 tracking-tight">
            Exotics Programs
          </h1>
          <p className="font-body text-xl sm:text-2xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Partnering with the finest specialty producers to bring you unique culinary experiences
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 lg:gap-20 justify-center">
            
            {/* Vintage Beef Co */}
            <div className="group max-w-md mx-auto">
              <div className="aspect-[4/3] bg-white rounded-lg mb-8 overflow-hidden flex items-center justify-center p-8">
                <img 
                  src="/images/Screenshot_25-1-2026_141713_www.bing.com.jpeg" 
                  alt="Vintage Beef Co Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl lg:text-3xl text-neutral-100 text-center">Vintage Beef Co</h2>
                <p className="text-neutral-300 text-lg leading-relaxed text-center">
                  Vaca Vieja/Galiciana
                </p>
                <div className="pt-2 text-center">
                  <a href="/programs/exotics/vintage-beef-co" className="text-accent-500 hover:text-accent-400 transition-colors font-medium">
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