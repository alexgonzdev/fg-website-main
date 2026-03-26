'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { MapPin, Globe, Truck, Building2, Star } from 'lucide-react';

/**
 * Props for the ServiceAreaMap component
 */
export interface ServiceAreaMapProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ServiceAreaMap Component
 * 
 * Provides a visual representation of F&G's service areas for the Contact page.
 * Features a stylized map visualization showing nationwide coverage with
 * animated map pins representing key service regions.
 * 
 * Features:
 * - Stylized USA map placeholder with animated location markers
 * - Dark theme with gold accents (--color-accent-500: #c9a962)
 * - AnimatedSection wrapper for scroll animations
 * - Shows key service regions visually
 * - Responsive design adapting to all screen sizes
 * - Hover effects for interactive feel
 * 
 * Requirements addressed:
 * - Requirement 7.7: Include a map or visual representation of the service area
 * - Requirement 7.6: Display the company location or service area information
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * - Requirement 9.1: Responsive layout adapting to desktop, tablet, and mobile
 * 
 * @example
 * <ServiceAreaMap
 *   title="Our Service Coverage"
 *   description="F&G delivers premium products nationwide..."
 * />
 */
export default function ServiceAreaMap({
  title = 'Nationwide Service Coverage',
  description = 'F&G Meat Distribution proudly serves premium restaurants, hotels, and food service establishments across the United States.',
  className = '',
}: ServiceAreaMapProps) {
  // Key service regions with their approximate positions on the stylized map
  const serviceRegions = [
    { name: 'Pacific Northwest', position: { top: '15%', left: '12%' }, delay: 0 },
    { name: 'West Coast', position: { top: '40%', left: '8%' }, delay: 100 },
    { name: 'Southwest', position: { top: '55%', left: '22%' }, delay: 200 },
    { name: 'Mountain Region', position: { top: '35%', left: '28%' }, delay: 150 },
    { name: 'Midwest', position: { top: '30%', left: '50%' }, delay: 250 },
    { name: 'Great Lakes', position: { top: '22%', left: '62%' }, delay: 300 },
    { name: 'Northeast', position: { top: '20%', left: '78%' }, delay: 350 },
    { name: 'Southeast', position: { top: '55%', left: '70%' }, delay: 400 },
    { name: 'Gulf Coast', position: { top: '65%', left: '55%' }, delay: 450 },
  ];

  // Coverage highlights
  const coverageHighlights = [
    { icon: Building2, label: '500+ Restaurant Partners', value: 'Nationwide' },
    { icon: Truck, label: 'Temperature-Controlled', value: 'Delivery' },
    { icon: Star, label: 'Premium Service', value: 'Guaranteed' },
  ];

  return (
    <section
      className={`bg-primary-700 rounded-card border border-neutral-400/10 shadow-card overflow-hidden ${className}`}
      aria-labelledby="service-area-heading"
    >
      {/* Header */}
      <AnimatedSection animation="fadeIn" delay={0}>
        <div className="p-6 sm:p-8 border-b border-neutral-400/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center">
              <Globe
                className="w-5 h-5 text-accent-500"
                aria-hidden="true"
              />
            </div>
            <h3
              id="service-area-heading"
              className="font-heading text-xl sm:text-2xl text-neutral-100"
            >
              {title}
            </h3>
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </AnimatedSection>

      {/* Stylized Map Visualization */}
      <AnimatedSection animation="slideUp" delay={0.2}>
        <div className="relative bg-primary-800 p-4 sm:p-6">
          {/* Map Container */}
          <div 
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-lg border border-accent-500/20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 overflow-hidden"
            role="img"
            aria-label="Stylized map showing F&G's nationwide service coverage across the United States"
          >
            {/* Background Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, var(--color-accent-500) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--color-accent-500) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
              aria-hidden="true"
            />

            {/* Stylized USA Outline */}
            <div className="absolute inset-4 sm:inset-6 lg:inset-8">
              {/* Simplified USA shape using CSS */}
              <div className="relative w-full h-full">
                {/* Main continental shape */}
                <div 
                  className="absolute inset-0 border-2 border-accent-500/30 rounded-lg"
                  style={{
                    clipPath: 'polygon(5% 25%, 15% 15%, 35% 12%, 50% 15%, 65% 10%, 80% 15%, 95% 20%, 98% 35%, 95% 55%, 85% 70%, 70% 75%, 55% 80%, 40% 75%, 25% 70%, 15% 60%, 8% 45%, 5% 35%)',
                    background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.05) 0%, rgba(201, 169, 98, 0.1) 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Service Region Markers */}
                {serviceRegions.map((region) => (
                  <div
                    key={region.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      top: region.position.top,
                      left: region.position.left,
                      animationDelay: `${region.delay}ms`,
                    }}
                  >
                    {/* Pulse Ring */}
                    <div 
                      className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/20 animate-ping"
                      style={{ animationDuration: '2s', animationDelay: `${region.delay}ms` }}
                      aria-hidden="true"
                    />
                    
                    {/* Marker */}
                    <div className="relative">
                      <MapPin 
                        className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 drop-shadow-lg transition-transform duration-base group-hover:scale-125"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-primary-900/95 border border-accent-500/30 rounded text-xs text-neutral-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-fast pointer-events-none z-10">
                      {region.name}
                    </div>
                  </div>
                ))}

                {/* Central Hub Indicator */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-accent-500/40 flex items-center justify-center bg-primary-800/80">
                      <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
                    </div>
                    {/* Radiating lines */}
                    <div className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <div
                          key={angle}
                          className="absolute top-1/2 left-1/2 w-16 sm:w-24 h-px bg-gradient-to-r from-accent-500/40 to-transparent origin-left"
                          style={{ transform: `rotate(${angle}deg)` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex items-center gap-2 px-3 py-1.5 bg-primary-900/90 border border-neutral-400/20 rounded-full">
              <MapPin className="w-3 h-3 text-accent-500" aria-hidden="true" />
              <span className="text-xs text-neutral-300">Service Locations</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Coverage Highlights */}
      <AnimatedSection animation="fadeIn" delay={0.4}>
        <div className="p-4 sm:p-6 bg-primary-800/50 border-t border-neutral-400/10">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {coverageHighlights.map((highlight) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={highlight.label}
                  className="text-center p-2 sm:p-3 rounded-lg bg-primary-700/50 border border-neutral-400/5 transition-all duration-base hover:border-accent-500/30"
                >
                  <IconComponent 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 mx-auto mb-1 sm:mb-2"
                    aria-hidden="true"
                  />
                  <p className="text-accent-400 font-semibold text-xs sm:text-sm">
                    {highlight.value}
                  </p>
                  <p className="text-neutral-400 text-xs hidden sm:block">
                    {highlight.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Bottom Note */}
      <AnimatedSection animation="fadeIn" delay={0.5}>
        <div className="px-6 sm:px-8 py-4 border-t border-neutral-400/10">
          <p className="text-neutral-400 text-xs sm:text-sm text-center">
            <span className="text-accent-500">●</span>{' '}
            Delivery schedules vary by region. Contact us for specific availability in your area.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}

/**
 * Default data for the ServiceAreaMap component
 * Can be used as default props or for demonstration purposes
 */
export const SERVICE_AREA_MAP_DATA: ServiceAreaMapProps = {
  title: 'Nationwide Service Coverage',
  description: 'F&G Meat Distribution proudly serves premium restaurants, hotels, and food service establishments across the United States. Our extensive logistics network ensures reliable, temperature-controlled delivery to major metropolitan areas nationwide.',
};
