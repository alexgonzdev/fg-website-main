import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('catalogs');

export default function CatalogsPage() {
  return (
    <div className="min-h-screen bg-primary-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6">
            Our Catalogs
          </h1>
          <p className="font-body text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto">
            Explore our comprehensive meat buying guide
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          {/* Meat Buyers Guide */}
          <div className="bg-primary-800 p-8 rounded-lg border border-neutral-600 hover:border-accent-500 transition-colors">
            <h3 className="font-heading text-2xl text-accent-500 mb-4">Meat Buyers Guide</h3>
            <p className="text-neutral-300 mb-6">
              Professional guide for meat buyers with detailed information about cuts, 
              grading, storage, and purchasing recommendations.
            </p>
            <a 
              href="/catalogs/meat-buyers-guide" 
              className="inline-block bg-accent-500 text-primary-900 px-6 py-3 rounded-md font-semibold hover:bg-accent-400 transition-colors"
            >
              View Buyers Guide →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}