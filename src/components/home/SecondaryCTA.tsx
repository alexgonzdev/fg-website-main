'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { ArrowRight, Phone } from 'lucide-react';

/**
 * SecondaryCTA Component
 * 
 * A secondary call-to-action section on the homepage that encourages visitors
 * to explore products or contact F&G. Features a compelling headline, supporting
 * text, and two CTA buttons.
 * 
 * Features:
 * - Compelling headline to drive engagement
 * - Brief supporting text explaining the value proposition
 * - Two CTA buttons: one for products, one for contact
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Slightly different background (primary-700) for visual separation
 * - Responsive design with proper spacing for all breakpoints
 * - Icons on buttons for visual interest
 * 
 * Requirements addressed:
 * - Requirement 3.4: Include a secondary CTA section encouraging visitors to explore products or contact F&G
 * - Requirement 3.6: Reveal content sections with subtle animations when scrolling
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * 
 * @example
 * <SecondaryCTA />
 */
export default function SecondaryCTA() {
  return (
    <section
      className="bg-primary-700 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      aria-labelledby="secondary-cta-heading"
    >
      {/* Decorative Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Headline */}
        <AnimatedSection animation="slideUp" delay={0}>
          <h2
            id="secondary-cta-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
          >
            Ready to Elevate Your Menu?
          </h2>
          
          {/* Accent Divider */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-24 h-1 bg-accent-500 rounded-full" aria-hidden="true" />
          </div>
        </AnimatedSection>

        {/* Supporting Text */}
        <AnimatedSection animation="fadeIn" delay={0.2}>
          <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            Discover our curated selection of premium proteins from the world&apos;s 
            finest producers, or get in touch with our team to discuss how we can 
            serve your establishment&apos;s unique needs.
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Products CTA Button */}
            <Button
              href="/products"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              Explore Our Products
            </Button>

            {/* Contact CTA Button */}
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="w-5 h-5" aria-hidden="true" />}
            >
              Contact Us Today
            </Button>
          </div>
        </AnimatedSection>

        {/* Additional Supporting Text */}
        <AnimatedSection animation="fadeIn" delay={0.6}>
          <p className="font-body text-sm sm:text-base text-neutral-400 mt-8 sm:mt-10">
            Join over 500 restaurants and hotels who trust F&G for their premium protein needs.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
