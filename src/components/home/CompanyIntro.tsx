'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

/**
 * CompanyIntro Component
 * 
 * Displays a company introduction section below the hero with a brief overview of F&G.
 * Now includes both About Us content and Service Areas information.
 * 
 * Features:
 * - Section heading with accent divider for visual hierarchy
 * - About Us content describing F&G's founding and approach
 * - Service Areas section with local and international coverage
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Dark theme styling consistent with the premium aesthetic
 * - Responsive design with proper spacing for all breakpoints
 * 
 * Requirements addressed:
 * - Requirement 3.1: Display a company introduction section below the hero with a brief overview of F&G
 * - Requirement 3.6: Reveal content sections with subtle animations when scrolling
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 */
export default function CompanyIntro() {
  return (
    <section
      className="bg-primary-800 py-16 sm:py-20 lg:py-24"
      aria-labelledby="company-intro-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp" delay={0}>
          {/* Section Heading */}
          <h2
            id="company-intro-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4 text-center"
          >
            About F&G Meats
          </h2>
          
          {/* Accent Divider */}
          <div className="accent-divider mx-auto mb-8 sm:mb-12" aria-hidden="true" />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeIn" delay={0.2}>
          {/* About Us Content */}
          <div className="text-center">
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-3xl mx-auto">
              F&G Meats launched in 2024 with one goal: make premium protein easy for Florida's best kitchens. 
              We partner with top ranches and producers, handle the logistics, and deliver quality you can count on. 
              No complexity, no surprises—just great product and real service.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
