'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  ClipboardList,
  Package,
  Search,
  Truck,
  UserPlus,
  type LucideIcon,
} from 'lucide-react';

/**
 * ProcessStep interface for individual ordering steps
 */
export interface ProcessStep {
  /** Step number for display */
  number: number;
  /** Title of the step */
  title: string;
  /** Description explaining the step */
  description: string;
  /** Icon name from Lucide React */
  icon: string;
}

/**
 * Props for the OrderingProcess component
 */
export interface OrderingProcessProps {
  /** Section title */
  title: string;
  /** Array of process steps to display */
  steps: ProcessStep[];
}

/**
 * Icon mapping from string names to Lucide React components
 * Allows dynamic icon rendering based on string identifier
 */
const iconMap: Record<string, LucideIcon> = {
  'user-plus': UserPlus,
  search: Search,
  'clipboard-list': ClipboardList,
  package: Package,
  truck: Truck,
};

/**
 * OrderingProcess Component
 * 
 * Displays the ordering process as numbered steps with visual step indicators
 * and connecting lines for clarity.
 * 
 * Features:
 * - Ordering process presented as numbered steps for clarity (Design spec)
 * - Step-by-step ordering process reduces friction for new clients (Requirement 6.3)
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Dark theme styling with gold accents consistent with the premium aesthetic
 * - Visual step indicators with connecting lines
 * - Responsive layout: horizontal on desktop, vertical on mobile
 * - Lucide React icons for visual representation of steps
 * - Hover effects for interactive feel
 * 
 * Requirements addressed:
 * - Requirement 6.3: Explain the ordering process for new and existing clients
 * - Requirement 6.5: Present information in an easy-to-scan format
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * 
 * @example
 * <OrderingProcess
 *   title="How to Order"
 *   steps={[
 *     { number: 1, title: "Create Account", description: "...", icon: "user-plus" },
 *     { number: 2, title: "Browse Products", description: "...", icon: "search" }
 *   ]}
 * />
 */
export default function OrderingProcess({
  title,
  steps,
}: OrderingProcessProps) {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="ordering-process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="ordering-process-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              {title}
            </h2>
            <div className="accent-divider mx-auto mb-6" aria-hidden="true" />
            <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Getting started with F&G Meat Distribution is simple. Follow these steps to begin receiving premium products for your establishment.
            </p>
          </div>
        </AnimatedSection>

        {/* Steps Container - Vertical on mobile, Horizontal on desktop */}
        <div className="relative">
          {/* Desktop Horizontal Layout */}
          <div className="hidden lg:block">
            {/* Connecting Line - Desktop */}
            <div 
              className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"
              aria-hidden="true"
            />
            
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const IconComponent = iconMap[step.icon.toLowerCase()] || Package;
                
                return (
                  <AnimatedSection
                    key={step.number}
                    animation="slideUp"
                    delay={0.1 + index * 0.15}
                  >
                    <div className="relative flex flex-col items-center text-center group">
                      {/* Step Number Circle */}
                      <div className="relative z-10 mb-6">
                        <div className="w-32 h-32 rounded-full bg-primary-700 border-2 border-accent-500/30 flex flex-col items-center justify-center transition-all duration-base group-hover:border-accent-500 group-hover:shadow-[0_0_20px_rgba(201,169,98,0.2)]">
                          {/* Step Number */}
                          <span className="font-heading text-4xl text-accent-500 font-bold mb-1">
                            {step.number}
                          </span>
                          {/* Icon */}
                          <IconComponent
                            className="w-6 h-6 text-accent-400"
                            aria-hidden="true"
                          />
                        </div>
                        
                        {/* Connecting Arrow (except for last item) */}
                        {index < steps.length - 1 && (
                          <div 
                            className="absolute top-1/2 -right-6 transform -translate-y-1/2 translate-x-full"
                            aria-hidden="true"
                          >
                            <svg 
                              className="w-8 h-8 text-accent-500/50" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="px-2">
                        <h3 className="font-heading text-xl text-neutral-100 mb-3 transition-colors duration-base group-hover:text-accent-400">
                          {step.title}
                        </h3>
                        <p className="font-body text-neutral-300 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Layout */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Connecting Line */}
              <div 
                className="absolute left-8 sm:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500/30 via-accent-500/20 to-transparent"
                aria-hidden="true"
              />

              <div className="space-y-8">
                {steps.map((step, index) => {
                  const IconComponent = iconMap[step.icon.toLowerCase()] || Package;
                  
                  return (
                    <AnimatedSection
                      key={step.number}
                      animation="slideIn"
                      delay={0.1 + index * 0.1}
                    >
                      <div className="relative flex items-start gap-6 group">
                        {/* Step Number Circle */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-700 border-2 border-accent-500/30 flex flex-col items-center justify-center transition-all duration-base group-hover:border-accent-500 group-hover:shadow-[0_0_15px_rgba(201,169,98,0.2)]">
                            {/* Step Number */}
                            <span className="font-heading text-2xl sm:text-3xl text-accent-500 font-bold">
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Step Content Card */}
                        <div className="flex-1 bg-primary-700 rounded-card p-5 sm:p-6 border border-neutral-400/10 shadow-card transition-all duration-base group-hover:border-accent-500/30 group-hover:-translate-y-1">
                          {/* Icon and Title Row */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center">
                              <IconComponent
                                className="w-5 h-5 text-accent-500"
                                aria-hidden="true"
                              />
                            </div>
                            <h3 className="font-heading text-lg sm:text-xl text-neutral-100 transition-colors duration-base group-hover:text-accent-400">
                              {step.title}
                            </h3>
                          </div>
                          
                          {/* Description */}
                          <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <AnimatedSection animation="fadeIn" delay={0.6}>
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-primary-700 rounded-card p-6 sm:p-8 border border-neutral-400/10 shadow-card max-w-2xl mx-auto">
              <p className="text-neutral-200 text-lg mb-4">
                Ready to get started with premium meat distribution?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent-500 text-primary-900 font-body font-semibold rounded-button min-h-button transition-all duration-fast hover:bg-accent-400 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-700"
              >
                Start Your Account Setup
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/**
 * Sample data for F&G Meat Distribution ordering process
 * Use this as default props or for demonstration purposes
 * 
 * Validates: Requirement 6.3 - Explain the ordering process for new and existing clients
 */
export const ORDERING_PROCESS_DATA: OrderingProcessProps = {
  title: 'How to Order',
  steps: [
    {
      number: 1,
      title: 'Set Up Your Account',
      description:
        'Contact our team to establish your business account. We\'ll verify your credentials and set up your personalized pricing and delivery preferences.',
      icon: 'user-plus',
    },
    {
      number: 2,
      title: 'Browse Our Selection',
      description:
        'Explore our extensive catalog of premium beef, wagyu, duck, and seafood products. Your account manager can help you find the perfect products for your menu.',
      icon: 'search',
    },
    {
      number: 3,
      title: 'Place Your Order',
      description:
        'Submit your order through our convenient ordering system. Specify quantities, cuts, and any special requirements for your delivery.',
      icon: 'clipboard-list',
    },
    {
      number: 4,
      title: 'Receive Your Delivery',
      description:
        'Our temperature-controlled fleet delivers your order fresh to your door. Enjoy consistent quality and reliable service with every delivery.',
      icon: 'truck',
    },
  ],
};
