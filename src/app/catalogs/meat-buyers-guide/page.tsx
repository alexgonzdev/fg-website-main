import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('meat-buyers-guide');

export default function MeatBuyersGuidePage() {
  return (
    <div className="min-h-screen bg-primary-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6">
            Meat Buyers Guide
          </h1>
          <p className="font-body text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto">
            Professional guide for meat buyers and culinary professionals
          </p>
        </div>
        
        {/* PDF Viewer Section - Free Archive.org Guide */}
        <div className="bg-primary-800 rounded-lg border border-neutral-600 p-8 mb-12">
          <div className="text-center">
            <h2 className="font-heading text-2xl text-accent-500 mb-4">Professional Meat Buyers Guide</h2>
            <p className="text-neutral-300 mb-6">
              Comprehensive professional guide covering beef, lamb, veal, pork, and poultry specifications. 
              This industry-standard resource provides detailed information for meat buyers, chefs, and culinary professionals.
            </p>
            
            {/* Direct PDF Download */}
            <div className="space-y-4">
              <a 
                href="https://catalogimages.wiley.com/images/db/pdf/0471747211.excerpt.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-md font-semibold hover:bg-accent-400 transition-colors text-lg"
              >
                📄 Download Meat Buyers Guide (PDF)
              </a>
            </div>
            
            <p className="text-neutral-400 text-sm mt-6">
              Professional Resource • Industry Standard • Wiley Publication
            </p>
            <p className="text-neutral-500 text-xs mt-2">
              Comprehensive guide for meat buyers and culinary professionals
            </p>
          </div>
        </div>
        
        {/* F&G Expertise Section */}
        <div className="bg-gradient-to-r from-accent-500/10 to-accent-600/10 rounded-lg border border-accent-500/20 p-8 mb-12">
          <div className="text-center">
            <h2 className="font-heading text-2xl text-accent-500 mb-4">F&G Meats Professional Support</h2>
            <p className="text-neutral-200 mb-6 max-w-3xl mx-auto">
              While this guide provides industry-standard specifications, our F&G team brings decades of experience 
              in sourcing and delivering premium meats that exceed these standards. We work with you to ensure 
              every cut meets your exact requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-accent-500 text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-neutral-100 mb-2">Custom Specifications</h3>
                <p className="text-neutral-300 text-sm">Tailored cuts to your exact needs</p>
              </div>
              <div className="text-center">
                <div className="text-accent-500 text-2xl mb-2">🏆</div>
                <h3 className="font-semibold text-neutral-100 mb-2">Premium Quality</h3>
                <p className="text-neutral-300 text-sm">Exceeding industry standards</p>
              </div>
              <div className="text-center">
                <div className="text-accent-500 text-2xl mb-2">🤝</div>
                <h3 className="font-semibold text-neutral-100 mb-2">Expert Guidance</h3>
                <p className="text-neutral-300 text-sm">Professional consultation included</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* What's Inside the Guide */}
        <div className="bg-primary-800 rounded-lg border border-neutral-600 p-8 mb-12">
          <h2 className="font-heading text-2xl text-accent-500 mb-6 text-center">What's Inside This Professional Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-lg text-neutral-100 mb-3">📋 Standardized Specifications</h3>
              <ul className="text-neutral-300 text-sm space-y-2">
                <li>• NAMP item numbers for all cuts</li>
                <li>• Detailed cut descriptions</li>
                <li>• Weight ranges and tolerances</li>
                <li>• Fat limitations and trim specs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-lg text-neutral-100 mb-3">🥩 Complete Coverage</h3>
              <ul className="text-neutral-300 text-sm space-y-2">
                <li>• Beef cuts and specifications</li>
                <li>• Pork cuts and grades</li>
                <li>• Lamb and veal standards</li>
                <li>• Variety meats and by-products</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-lg text-neutral-100 mb-3">📊 Professional Standards</h3>
              <ul className="text-neutral-300 text-sm space-y-2">
                <li>• Industry-standard terminology</li>
                <li>• Quality grade definitions</li>
                <li>• Packaging requirements</li>
                <li>• Inspection standards</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-lg text-neutral-100 mb-3">💼 Business Applications</h3>
              <ul className="text-neutral-300 text-sm space-y-2">
                <li>• Restaurant purchasing specs</li>
                <li>• Hotel food service standards</li>
                <li>• Institutional buying guides</li>
                <li>• Cost control methods</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
            <h3 className="font-heading text-xl text-accent-500 mb-4">Meat Grading</h3>
            <p className="text-neutral-300 text-sm">
              Understanding USDA grading systems, quality indicators, and how to select 
              the right grade for your establishment's needs.
            </p>
          </div>
          
          <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
            <h3 className="font-heading text-xl text-accent-500 mb-4">Storage & Handling</h3>
            <p className="text-neutral-300 text-sm">
              Proper storage temperatures, handling procedures, and food safety protocols 
              to maintain quality and ensure compliance.
            </p>
          </div>
          
          <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
            <h3 className="font-heading text-xl text-accent-500 mb-4">Purchasing Tips</h3>
            <p className="text-neutral-300 text-sm">
              Cost-effective purchasing strategies, seasonal considerations, and building 
              relationships with suppliers for consistent quality.
            </p>
          </div>
          
          <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
            <h3 className="font-heading text-xl text-accent-500 mb-4">Cut Specifications</h3>
            <p className="text-neutral-300 text-sm">
              Detailed breakdown of different cuts, their best uses, cooking methods, 
              and portion sizing for menu planning.
            </p>
          </div>
          
          <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
            <h3 className="font-heading text-xl text-accent-500 mb-4">Quality Indicators</h3>
            <p className="text-neutral-300 text-sm">
              Visual and tactile indicators of meat quality, freshness markers, 
              and red flags to watch for during inspection.
            </p>
          </div>
          
          <div className="bg-primary-800 p-6 rounded-lg border border-neutral-600">
            <h3 className="font-heading text-xl text-accent-500 mb-4">Supplier Relations</h3>
            <p className="text-neutral-300 text-sm">
              Building strong partnerships with meat suppliers, negotiation strategies, 
              and maintaining consistent supply chains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}