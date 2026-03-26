'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { MapPin, Globe, Truck, CheckCircle } from 'lucide-react';
import Image from 'next/image';

/**
 * Props for the DeliveryAreas component
 */
export interface DeliveryAreasProps {
  /** Section title */
  title: string;
  /** Section description */
  description: string;
  /** Array of region names for delivery coverage */
  regions: string[];
  /** Optional map image URL for visualization */
  mapImage?: string;
}

/**
 * DeliveryAreas Component
 * 
 * Displays geographic coverage information with an optional map visualization
 * and a list of delivery regions.
 * 
 * Features:
 * - Delivery areas shown with optional map visualization (Design spec)
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Dark theme styling with gold accents consistent with the premium aesthetic
 * - Responsive layout: stacked on mobile, side-by-side on desktop
 * - Lucide React MapPin icons for visual representation of regions
 * - Hover effects for interactive feel
 * 
 * Requirements addressed:
 * - Requirement 6.2: Display information about delivery areas and geographic coverage
 * - Requirement 6.5: Present information in an easy-to-scan format
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * 
 * @example
 * <DeliveryAreas
 *   title="Our Delivery Coverage"
 *   description="We serve restaurants and hotels across the nation..."
 *   regions={["Northeast", "Southeast", "Midwest", "Southwest", "West Coast"]}
 *   mapImage="/images/services/delivery-map.jpg"
 * />
 */
export default function DeliveryAreas({
  title,
  description,
  regions,
  mapImage,
}: DeliveryAreasProps) {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="delivery-areas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-500/10 border border-accent-500/30 mb-6">
              <Globe
                className="w-8 h-8 text-accent-500"
                aria-hidden="true"
              />
            </div>
            <h2
              id="delivery-areas-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              {title}
            </h2>
            <div className="accent-divider mx-auto mb-6" aria-hidden="true" />
            <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </AnimatedSection>

        {/* Content Grid - Map and Regions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map Visualization */}
          <AnimatedSection animation="slideIn" delay={0.2}>
            <div className="relative">
              {mapImage ? (
                <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-neutral-400/10 shadow-card">
                  <Image
                    src={mapImage}
                    alt="F&G Meat Distribution delivery coverage map"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay gradient for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                </div>
              ) : (
                /* Placeholder map visualization when no image provided */
                <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-neutral-400/10 shadow-card bg-primary-700">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Stylized map placeholder with animated elements */}
                      <div className="relative">
                        <div className="w-48 h-32 sm:w-64 sm:h-40 border-2 border-accent-500/30 rounded-lg relative">
                          {/* Map pin markers */}
                          <div className="absolute top-4 left-6 animate-pulse">
                            <MapPin className="w-5 h-5 text-accent-500" />
                          </div>
                          <div className="absolute top-8 right-8 animate-pulse delay-100">
                            <MapPin className="w-5 h-5 text-accent-400" />
                          </div>
                          <div className="absolute bottom-6 left-1/3 animate-pulse delay-200">
                            <MapPin className="w-5 h-5 text-accent-500" />
                          </div>
                          <div className="absolute bottom-10 right-1/4 animate-pulse delay-300">
                            <MapPin className="w-5 h-5 text-accent-400" />
                          </div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-150">
                            <MapPin className="w-6 h-6 text-accent-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-neutral-300 text-sm mt-4 text-center">
                      Nationwide Distribution Network
                    </p>
                  </div>
                </div>
              )}

              {/* Coverage Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent-500 text-primary-900 px-6 py-2 rounded-full font-body font-semibold text-sm shadow-lg flex items-center gap-2">
                <Truck className="w-4 h-4" aria-hidden="true" />
                <span>Nationwide Coverage</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Regions List */}
          <AnimatedSection animation="slideUp" delay={0.3}>
            <div className="bg-primary-700 rounded-card p-6 sm:p-8 border border-neutral-400/10 shadow-card">
              <h3 className="font-heading text-2xl sm:text-3xl text-neutral-100 mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-accent-500" aria-hidden="true" />
                Service Regions
              </h3>
              
              <ul className="space-y-3" role="list" aria-label="Delivery service regions">
                {regions.map((region) => (
                  <li
                    key={region}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary-800/50 border border-neutral-400/5 transition-all duration-base hover:border-accent-500/30 hover:bg-primary-800"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center">
                      <CheckCircle
                        className="w-4 h-4 text-accent-500"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="font-body text-neutral-200 text-base sm:text-lg">
                      {region}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-neutral-400/10">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  <span className="text-accent-500 font-semibold">Note:</span>{' '}
                  Delivery schedules and availability may vary by region. Contact us for specific delivery information in your area.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom CTA Section */}
        <AnimatedSection animation="fadeIn" delay={0.5}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-neutral-300 text-lg mb-4">
              Not sure if we deliver to your area?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent-500 text-primary-900 font-body font-semibold rounded-button min-h-button transition-all duration-fast hover:bg-accent-400 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-800"
            >
              Contact Us to Confirm
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/**
 * Sample data for F&G Meat Distribution delivery areas
 * Use this as default props or for demonstration purposes
 */
export const DELIVERY_AREAS_DATA: DeliveryAreasProps = {
  title: 'Our Delivery Coverage',
  description:
    'F&G Meat Distribution proudly serves premium restaurants, hotels, and food service establishments across the United States. Our extensive logistics network ensures reliable, temperature-controlled delivery to major metropolitan areas nationwide.',
  regions: [
    'Northeast (New York, Boston, Philadelphia, Washington D.C.)',
    'Southeast (Miami, Atlanta, Charlotte, New Orleans)',
    'Midwest (Chicago, Detroit, Minneapolis, St. Louis)',
    'Southwest (Dallas, Houston, Phoenix, Denver)',
    'West Coast (Los Angeles, San Francisco, Seattle, Portland)',
    'Mountain Region (Salt Lake City, Las Vegas, Albuquerque)',
  ],
  mapImage: undefined, // Set to a valid image path when available
};
