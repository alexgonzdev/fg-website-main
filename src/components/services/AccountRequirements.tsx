'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { CheckCircle, DollarSign } from 'lucide-react';

/**
 * Props for the AccountRequirements component
 */
export interface AccountRequirementsProps {
  /** Section title */
  title: string;
  /** Array of requirements to display */
  requirements: string[];
  /** Minimum order information (optional) */
  minimumOrder?: string;
  /** CTA button text */
  ctaText: string;
  /** CTA button link destination */
  ctaHref: string;
}

/**
 * AccountRequirements Component
 * 
 * Displays account setup requirements and minimum order information with a clear
 * CTA to contact for account setup.
 * 
 * Features:
 * - Account requirements clearly listed with CTA to contact (Design spec)
 * - Clear minimum order requirements set proper expectations (Requirement 6.4)
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Dark theme styling with gold accents consistent with the premium aesthetic
 * - CheckCircle icons from Lucide React for requirements list
 * - Responsive layout with proper spacing
 * - Clear CTA button linking to contact page
 * 
 * Requirements addressed:
 * - Requirement 6.4: Highlight any minimum order requirements or account setup procedures
 * - Requirement 6.5: Present information in an easy-to-scan format
 * - Requirement 6.6: Include a CTA directing visitors to contact F&G for service inquiries
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * 
 * @example
 * <AccountRequirements
 *   title="Account Requirements"
 *   requirements={[
 *     "Valid business license or resale certificate",
 *     "Established food service business"
 *   ]}
 *   minimumOrder="$500 minimum order for delivery"
 *   ctaText="Apply for an Account"
 *   ctaHref="/contact"
 * />
 */
export default function AccountRequirements({
  title,
  requirements,
  minimumOrder,
  ctaText,
  ctaHref,
}: AccountRequirementsProps) {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="account-requirements-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="account-requirements-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              {title}
            </h2>
            <div className="accent-divider mx-auto mb-6" aria-hidden="true" />
            <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              To ensure we provide the best service to our partners, we have a few requirements for new accounts.
            </p>
          </div>
        </AnimatedSection>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slideUp" delay={0.1}>
            <div className="bg-primary-700 rounded-card p-6 sm:p-8 lg:p-10 border border-neutral-400/10 shadow-card">
              {/* Requirements List */}
              <div className="mb-8">
                <h3 className="font-heading text-xl sm:text-2xl text-neutral-100 mb-6">
                  What You&apos;ll Need
                </h3>
                <ul className="space-y-4" role="list">
                  {requirements.map((requirement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center transition-all duration-base group-hover:bg-accent-500/20 group-hover:border-accent-500/50">
                          <CheckCircle
                            className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <span className="font-body text-neutral-200 text-base sm:text-lg leading-relaxed">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimum Order Section */}
              {minimumOrder && (
                <div className="mb-8 p-4 sm:p-6 bg-primary-600 rounded-lg border border-accent-500/20">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center">
                        <DollarSign
                          className="w-6 h-6 sm:w-7 sm:h-7 text-accent-500"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg sm:text-xl text-neutral-100 mb-1">
                        Minimum Order
                      </h4>
                      <p className="font-body text-neutral-300 text-base sm:text-lg">
                        {minimumOrder}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Divider */}
              <div
                className="border-t border-neutral-400/10 mb-8"
                aria-hidden="true"
              />

              {/* CTA Section */}
              <div className="text-center">
                <p className="text-neutral-300 text-base sm:text-lg mb-6">
                  Ready to partner with F&G Meat Distribution? Our team is here to help you get started.
                </p>
                <Button
                  href={ctaHref}
                  variant="primary"
                  size="lg"
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Additional Info Note */}
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <div className="mt-8 text-center">
              <p className="text-neutral-400 text-sm sm:text-base">
                Have questions about our requirements?{' '}
                <a
                  href={ctaHref}
                  className="text-accent-500 hover:text-accent-400 underline underline-offset-2 transition-colors duration-fast"
                >
                  Contact our team
                </a>{' '}
                for more information.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/**
 * Sample data for F&G Meat Distribution account requirements
 * Use this as default props or for demonstration purposes
 * 
 * Validates: Requirement 6.4 - Highlight any minimum order requirements or account setup procedures
 */
export const ACCOUNT_REQUIREMENTS_DATA: AccountRequirementsProps = {
  title: 'Account Requirements',
  requirements: [
    'Valid business license or resale certificate for food service operations',
    'Established restaurant, hotel, catering company, or food service business',
    'Ability to receive refrigerated deliveries during business hours',
    'Commitment to regular ordering schedule (weekly or bi-weekly recommended)',
    'Designated point of contact for order coordination and delivery',
  ],
  minimumOrder: '$500 minimum order per delivery to ensure efficient service and product freshness',
  ctaText: 'Apply for an Account',
  ctaHref: '/contact',
};
