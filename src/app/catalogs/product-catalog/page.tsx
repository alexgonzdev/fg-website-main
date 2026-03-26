import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('product-catalog');

export default function ProductCatalogPage() {
  return (
    <div className="min-h-screen bg-primary-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6">
            Product Catalog
          </h1>
          <p className="font-body text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto">
            Complete selection of premium meats and specialty products
          </p>
        </div>
        
        {/* Beef Section */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl text-accent-500 mb-8">Premium Beef</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-neutral-100 mb-3">Snake River Farms Wagyu</h3>
              <p className="text-neutral-300 text-sm mb-4">American Wagyu with exceptional marbling</p>
              <ul className="text-neutral-400 text-sm space-y-1">
                <li>• Ribeye Steaks</li>
                <li>• Strip Steaks</li>
                <li>• Filet Mignon</li>
                <li>• Ground Wagyu</li>
              </ul>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-neutral-100 mb-3">Double R Ranch</h3>
              <p className="text-neutral-300 text-sm mb-4">Premium Northwest beef</p>
              <ul className="text-neutral-400 text-sm space-y-1">
                <li>• Prime Ribeye</li>
                <li>• NY Strip</li>
                <li>• Tenderloin</li>
                <li>• Chuck Roast</li>
              </ul>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-neutral-100 mb-3">Casa Wagyu</h3>
              <p className="text-neutral-300 text-sm mb-4">Authentic Japanese A5 Wagyu</p>
              <ul className="text-neutral-400 text-sm space-y-1">
                <li>• A5 Ribeye</li>
                <li>• A5 Strip</li>
                <li>• A5 Tenderloin</li>
                <li>• Specialty Cuts</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Pork Section */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl text-accent-500 mb-8">Premium Pork</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-neutral-100 mb-3">Heritage Breed Pork</h3>
              <p className="text-neutral-300 text-sm mb-4">Traditional breeds with superior flavor</p>
              <ul className="text-neutral-400 text-sm space-y-1">
                <li>• Pork Chops</li>
                <li>• Tenderloin</li>
                <li>• Shoulder</li>
                <li>• Belly</li>
              </ul>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-neutral-100 mb-3">Specialty Cuts</h3>
              <p className="text-neutral-300 text-sm mb-4">Unique preparations and cuts</p>
              <ul className="text-neutral-400 text-sm space-y-1">
                <li>• Bone-in Chops</li>
                <li>• Rack of Pork</li>
                <li>• Specialty Sausages</li>
                <li>• Custom Cuts</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Poultry Section */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl text-accent-500 mb-8">Specialty Poultry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-neutral-100 mb-3">Culver Duck</h3>
              <p className="text-neutral-300 text-sm mb-4">Premium Pekin ducks</p>
              <ul className="text-neutral-400 text-sm space-y-1">
                <li>• Whole Duck</li>
                <li>• Duck Breast</li>
                <li>• Duck Legs</li>
                <li>• Duck Confit</li>
              </ul>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-neutral-100 mb-3">Heritage Chicken</h3>
              <p className="text-neutral-300 text-sm mb-4">Free-range heritage breeds</p>
              <ul className="text-neutral-400 text-sm space-y-1">
                <li>• Whole Chicken</li>
                <li>• Chicken Breast</li>
                <li>• Thighs & Legs</li>
                <li>• Wings</li>
              </ul>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
              <h3 className="font-heading text-xl text-neutral-100 mb-3">Game Birds</h3>
              <p className="text-neutral-300 text-sm mb-4">Specialty game birds</p>
              <ul className="text-neutral-400 text-sm space-y-1">
                <li>• Quail</li>
                <li>• Pheasant</li>
                <li>• Cornish Hen</li>
                <li>• Guinea Fowl</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}