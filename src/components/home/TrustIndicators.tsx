'use client';

import { Calendar, Utensils, ShieldCheck, LucideIcon } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { TRUST_INDICATORS } from '@/lib/constants';

/**
 * Icon mapping for trust indicators
 * Maps icon string names from constants to Lucide React components
 */
const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  utensils: Utensils,
  'shield-check': ShieldCheck,
};

/**
 * TrustIndicators Component
 * 
 * Displays trust indicators such as years in business, number of clients served,
 * and quality certifications in a horizontal row with responsive layout.
 * 
 * Features:
 * - Large, impactful numbers with descriptive labels
 * - Lucide React icons for visual representation
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Responsive layout: stacked on mobile, horizontal row on tablet/desktop
 * - Dark theme styling consistent with the premium aesthetic
 * - Staggered animation delays for visual interest
 * 
 * Requirements addressed:
 * - Requirement 3.5: Display trust indicators such as years in business, number of clients served, or quality certifications
 * - Requirement 3.6: Reveal content sections with subtle animations when scrolling
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * 
 * @example
 * <TrustIndicators />
 */
export default function TrustIndicators() {
  return (
    <section
      className="bg-primary-900 py-16 sm:py-20 lg:py-24"
      aria-labelledby="trust-indicators-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <AnimatedSection animation="slideUp" delay={0}>
          <h2
            id="trust-indicators-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 text-center mb-4"
          >
            Why Choose F&G
          </h2>
          
          {/* Accent Divider */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="w-24 h-1 bg-accent-500 rounded-full" aria-hidden="true" />
          </div>
        </AnimatedSection>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
          {TRUST_INDICATORS.map((indicator, index) => {
            const IconComponent = iconMap[indicator.icon] || Calendar;
            
            return (
              <AnimatedSection
                key={indicator.label}
                animation="slideUp"
                delay={0.1 + index * 0.15}
              >
                <div className="flex flex-col items-center text-center group">
                  {/* Icon Container */}
                  <div className="mb-4 sm:mb-6 p-4 rounded-full bg-primary-700 border border-neutral-400/20 group-hover:border-accent-500/50 transition-colors duration-300">
                    <IconComponent
                      className="w-8 h-8 sm:w-10 sm:h-10 text-accent-500"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  
                  {/* Value - Large impactful number */}
                  <span className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-2 sm:mb-3">
                    {indicator.value}
                  </span>
                  
                  {/* Label */}
                  <span className="font-body text-base sm:text-lg text-neutral-300 uppercase tracking-wider">
                    {indicator.label}
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
