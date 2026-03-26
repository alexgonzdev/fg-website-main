import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('programs');

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-primary-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6">
            Our Programs
          </h1>
          <p className="font-body text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto mb-12">
            Explore our premium protein programs designed for discerning establishments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Program Cards */}
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-accent-500 mb-4">Beef</h3>
              <p className="text-neutral-300 mb-4">Premium beef selections from trusted ranches</p>
              <a href="/programs/beef" className="text-accent-500 hover:text-accent-400 transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-accent-500 mb-4">Pork</h3>
              <p className="text-neutral-300 mb-4">High-quality pork products and specialty cuts</p>
              <a href="/programs/pork" className="text-accent-500 hover:text-accent-400 transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-accent-500 mb-4">Specialty Poultry</h3>
              <p className="text-neutral-300 mb-4">Farm-raised poultry and specialty birds</p>
              <a href="/programs/specialty-poultry" className="text-accent-500 hover:text-accent-400 transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-accent-500 mb-4">Exotics</h3>
              <p className="text-neutral-300 mb-4">Unique and exotic protein selections</p>
              <a href="/programs/exotics" className="text-accent-500 hover:text-accent-400 transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}