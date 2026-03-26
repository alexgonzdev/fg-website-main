'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

/**
 * Milestone interface for timeline events
 */
export interface Milestone {
  year: number;
  description: string;
}

/**
 * Props for the CompanyStory component
 */
export interface CompanyStoryProps {
  /** Section title */
  title: string;
  /** Array of content paragraphs */
  content: string[];
  /** Year the company was founded */
  foundingYear: number;
  /** Array of milestone events for the timeline */
  milestones: Milestone[];
  /** Image URL for the company story section */
  image: string;
}

/**
 * CompanyStory Component
 * 
 * Displays the company history narrative with a timeline visualization for milestones.
 * 
 * Features:
 * - Company history narrative with text content
 * - Timeline visualization for milestones
 * - Image support with Next.js Image optimization
 * - Responsive layout: text + image side by side on desktop, stacked on mobile
 * - Timeline: horizontal on desktop, vertical on mobile
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Dark theme styling with gold accents consistent with the premium aesthetic
 * 
 * Requirements addressed:
 * - Requirement 4.1: Display the company story including founding history and growth
 * - Requirement 4.4: Present content in a visually engaging layout with images
 * - Requirement 4.6: Maintain the premium dark aesthetic consistent with the overall site design
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * 
 * @example
 * <CompanyStory
 *   title="Our Story"
 *   content={["Founded in 1998...", "Today, we serve..."]}
 *   foundingYear={1998}
 *   milestones={[{ year: 1998, description: "Company founded" }]}
 *   image="/images/about/company-story.jpg"
 * />
 */
export default function CompanyStory({
  title,
  content,
  foundingYear,
  milestones,
  image,
}: CompanyStoryProps) {
  // Calculate years in business
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - foundingYear;

  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="company-story-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="company-story-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              {title}
            </h2>
            <div className="accent-divider mx-auto" aria-hidden="true" />
          </div>
        </AnimatedSection>

        {/* Content Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
          {/* Text Content */}
          <AnimatedSection animation="slideIn" delay={0.1}>
            <div className="space-y-6">
              {/* Content Paragraphs */}
              {content.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-base sm:text-lg text-neutral-200 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <div className="relative aspect-[4/3] lg:aspect-square rounded-card overflow-hidden border border-neutral-400/20 bg-neutral-800">
              <Image
                src={image}
                alt={`${title} - F&G Meat Distribution`}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Timeline Section */}
        <AnimatedSection animation="slideUp" delay={0.3}>
          <div className="mb-8 sm:mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl text-neutral-100 text-center mb-2">
              Our Journey
            </h3>
            <p className="text-neutral-300 text-center max-w-2xl mx-auto">
              Key milestones that have shaped F&G Meat Distribution into the trusted partner we are today.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline - Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden lg:block">
            {/* Timeline Line */}
            <div 
              className="absolute top-6 left-0 right-0 h-0.5 bg-neutral-400/30"
              aria-hidden="true"
            />
            
            {/* Timeline Items */}
            <div className="grid grid-cols-1" style={{ gridTemplateColumns: `repeat(${milestones.length}, 1fr)` }}>
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  animation="slideUp"
                  delay={0.4 + index * 0.1}
                >
                  <div className="relative flex flex-col items-center text-center px-4">
                    {/* Timeline Dot */}
                    <div 
                      className="w-4 h-4 rounded-full bg-accent-500 border-4 border-primary-900 z-10 mb-4"
                      aria-hidden="true"
                    />
                    
                    {/* Year */}
                    <span className="font-heading text-xl sm:text-2xl text-accent-500 font-semibold mb-2">
                      {milestone.year}
                    </span>
                    
                    {/* Description */}
                    <p className="font-body text-sm text-neutral-300 max-w-[200px]">
                      {milestone.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mobile Timeline (Vertical) */}
          <div className="lg:hidden">
            {/* Timeline Line */}
            <div 
              className="absolute top-0 bottom-0 left-6 w-0.5 bg-neutral-400/30"
              aria-hidden="true"
            />
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  animation="slideIn"
                  delay={0.4 + index * 0.1}
                >
                  <div className="relative flex items-start gap-6 pl-0">
                    {/* Timeline Dot */}
                    <div 
                      className="flex-shrink-0 w-4 h-4 rounded-full bg-accent-500 border-4 border-primary-900 z-10 mt-1"
                      aria-hidden="true"
                    />
                    
                    {/* Content */}
                    <div className="flex-1 pb-2">
                      {/* Year */}
                      <span className="font-heading text-xl text-accent-500 font-semibold block mb-1">
                        {milestone.year}
                      </span>
                      
                      {/* Description */}
                      <p className="font-body text-base text-neutral-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Sample data for F&G Meat Distribution
 * Use this as default props or for demonstration purposes
 */
export const COMPANY_STORY_DATA: CompanyStoryProps = {
  title: 'Our Story',
  content: [
    'F&G Meats started with a simple idea: chefs deserve a distributor who actually understands their needs. We saw the gap—too many suppliers focused on volume over quality, logistics over relationships. So we built something different.',
    'Our founders came from the culinary and food service world. They knew what it meant to need reliable product, consistent specs, and a partner who picks up the phone. From day one, we\'ve worked with the best ranches and producers to ensure every cut meets the standards professional kitchens demand.',
    'Today, we serve some of Miami\'s most respected restaurants—from award-winning fine dining to neighborhood favorites. The approach hasn\'t changed: quality product, honest service, and partnerships that last.',
  ],
  foundingYear: 2024,
  milestones: [
    {
      year: 2024,
      description: 'F&G Meats founded',
    },
    {
      year: 2024,
      description: 'Began distributing commodity and Argentine beef in South Florida',
    },
    {
      year: 2025,
      description: 'Partnered with top producers to expand offerings',
    },
    {
      year: 2025,
      description: 'Launched F&G Wagyu and Berkshire programs from the Midwest',
    },
    {
      year: 2025,
      description: 'Partnered with Amazonico, Forte Dei Marmi, Maison Ostrow and more',
    },
    {
      year: 2026,
      description: 'Added exotic programs: Kosher Wagyu, Vaca Vieja Galician style',
    },
    {
      year: 2026,
      description: 'Sourcing from the world\'s top producers, making beef buying a pleasure',
    },
  ],
  image: '/images/better quality amazonico opening.jpg',
};
