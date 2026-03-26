'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  Award,
  Handshake,
  Heart,
  Leaf,
  Shield,
  Star,
  Target,
  Truck,
  Users,
  type LucideIcon,
} from 'lucide-react';

/**
 * CoreValue interface for individual value cards
 */
export interface CoreValue {
  /** Title of the core value */
  title: string;
  /** Description explaining the value */
  description: string;
  /** Icon name from Lucide React */
  icon: string;
}

/**
 * Props for the MissionValues component
 */
export interface MissionValuesProps {
  /** Company mission statement */
  mission: string;
  /** Array of core values to display */
  values: CoreValue[];
}

/**
 * Icon mapping from string names to Lucide React components
 * Allows dynamic icon rendering based on string identifier
 */
const iconMap: Record<string, LucideIcon> = {
  award: Award,
  handshake: Handshake,
  heart: Heart,
  leaf: Leaf,
  shield: Shield,
  star: Star,
  target: Target,
  truck: Truck,
  users: Users,
};

/**
 * MissionValues Component
 * 
 * Displays the company mission statement prominently with supporting core values
 * displayed as cards with icons.
 * 
 * Features:
 * - Mission statement prominently displayed with elegant typography
 * - Core values displayed as responsive grid of cards with icons
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Dark theme styling with gold accents consistent with the premium aesthetic
 * - Responsive grid layout: 1 column on mobile, 2 on tablet, 3 on desktop
 * - Lucide React icons for visual representation of values
 * 
 * Requirements addressed:
 * - Requirement 4.2: Display the company mission statement and core values
 * - Requirement 4.4: Present content in a visually engaging layout with images
 * - Requirement 4.6: Maintain the premium dark aesthetic consistent with the overall site design
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * 
 * @example
 * <MissionValues
 *   mission="To deliver exceptional quality proteins..."
 *   values={[
 *     { title: "Quality", description: "...", icon: "award" },
 *     { title: "Integrity", description: "...", icon: "shield" }
 *   ]}
 * />
 */
export default function MissionValues({ mission, values }: MissionValuesProps) {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="mission-values-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="mission-values-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              Our Mission & Values
            </h2>
            <div className="accent-divider mx-auto" aria-hidden="true" />
          </div>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
            <div className="relative">
              {/* Decorative Quote Marks */}
              <div
                className="absolute -top-4 -left-2 sm:-left-4 text-accent-500/20 text-6xl sm:text-8xl font-heading select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <div
                className="absolute -bottom-8 -right-2 sm:-right-4 text-accent-500/20 text-6xl sm:text-8xl font-heading select-none"
                aria-hidden="true"
              >
                &rdquo;
              </div>

              {/* Mission Statement Content */}
              <div className="bg-transparent rounded-card p-8 sm:p-10 lg:p-12 border border-accent-500/40 backdrop-blur-sm">
                <h3 className="font-heading text-xl sm:text-2xl text-accent-500 mb-4 text-center">
                  Our Mission
                </h3>
                <p className="font-body text-lg sm:text-xl lg:text-2xl text-neutral-100 text-center leading-relaxed italic">
                  {mission}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Values Section */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl text-neutral-100 mb-2">
              Our Core Values
            </h3>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              The principles that guide everything we do at F&G Meat Distribution.
            </p>
          </div>
        </AnimatedSection>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const IconComponent = iconMap[value.icon.toLowerCase()] || Star;

            return (
              <AnimatedSection
                key={value.title}
                animation="slideUp"
                delay={0.3 + index * 0.1}
              >
                <div className="bg-primary-700 rounded-card p-6 sm:p-8 border border-neutral-400/10 shadow-card transition-all duration-base hover:-translate-y-1 hover:border-accent-500/30 hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.4)] h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent-500/10 border border-accent-500/30">
                      <IconComponent
                        className="w-7 h-7 sm:w-8 sm:h-8 text-accent-500"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Value Title */}
                  <h4 className="font-heading text-xl sm:text-2xl text-neutral-100 mb-3">
                    {value.title}
                  </h4>

                  {/* Value Description */}
                  <p className="font-body text-neutral-300 leading-relaxed flex-grow">
                    {value.description}
                  </p>

                  {/* Decorative Bottom Accent */}
                  <div
                    className="mt-6 pt-4 border-t border-neutral-400/10"
                    aria-hidden="true"
                  >
                    <div className="w-12 h-1 bg-accent-500/50 rounded-full" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Sample data for F&G Meat Distribution
 * Use this as default props or for demonstration purposes
 */
export const MISSION_VALUES_DATA: MissionValuesProps = {
  mission:
    'To deliver exceptional quality proteins to the finest culinary establishments, building lasting partnerships through unwavering commitment to excellence, integrity, and personalized service that exceeds expectations.',
  values: [
    {
      title: 'Quality First',
      description:
        'We work with producers we trust. If it doesn\'t meet our standards, it doesn\'t ship. Simple as that.',
      icon: 'award',
    },
    {
      title: 'Real Partnerships',
      description:
        'Long-term relationships, not transactions. Your success is our success—we mean it.',
      icon: 'handshake',
    },
    {
      title: 'Straight Talk',
      description:
        'Honest product info, fair pricing, no games. We say what we mean and deliver what we promise.',
      icon: 'shield',
    },
    {
      title: 'Service That Shows',
      description:
        'We learn your operation, anticipate your needs, and solve problems before they become problems.',
      icon: 'star',
    },
    {
      title: 'Responsible Sourcing',
      description:
        'We partner with producers who do things right—sustainable practices, ethical treatment, quality genetics.',
      icon: 'leaf',
    },
    {
      title: 'Dependable Delivery',
      description:
        'On time, every time. Cold chain maintained. Product arrives the way it should.',
      icon: 'truck',
    },
  ],
};
