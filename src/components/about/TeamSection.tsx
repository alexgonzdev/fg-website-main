'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

/**
 * TeamMember interface for individual team member data
 */
export interface TeamMember {
  /** Full name of the team member */
  name: string;
  /** Job title or role */
  role: string;
  /** Brief biography or description */
  bio: string;
  /** Image URL for the team member photo */
  image: string;
}

/**
 * Props for the TeamSection component
 */
export interface TeamSectionProps {
  /** Section title */
  title: string;
  /** Array of team members to display */
  members: TeamMember[];
}

/**
 * TeamSection Component
 * 
 * Displays the leadership team in a responsive grid with hover effects.
 * 
 * Features:
 * - Team members displayed in responsive grid with hover effects
 * - Responsive grid: 1 column mobile, 2 tablet, 3-4 desktop
 * - Next.js Image component for optimized team photos
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Dark theme styling with gold accents consistent with the premium aesthetic
 * - Hover effects on team member cards (scale, shadow, border highlight)
 * - Accessible with proper ARIA labels and semantic HTML
 * 
 * Requirements addressed:
 * - Requirement 4.3: Display information about the leadership team or key personnel
 * - Requirement 4.4: Present content in a visually engaging layout with images
 * - Requirement 4.6: Maintain the premium dark aesthetic consistent with the overall site design
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * - Requirement 9.1: Responsive layout adapts to desktop, tablet, and mobile screen sizes
 * 
 * @example
 * <TeamSection
 *   title="Our Leadership Team"
 *   members={[
 *     {
 *       name: "John Smith",
 *       role: "CEO & Founder",
 *       bio: "With over 25 years of experience...",
 *       image: "/images/team/john-smith.jpg"
 *     }
 *   ]}
 * />
 */
export default function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="team-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="team-section-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              {title}
            </h2>
            <div className="accent-divider mx-auto" aria-hidden="true" />
            <p className="text-neutral-300 max-w-2xl mx-auto mt-4">
              Meet the dedicated professionals who lead F&G Meat Distribution with passion, expertise, and an unwavering commitment to excellence.
            </p>
          </div>
        </AnimatedSection>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {members.map((member, index) => (
            <AnimatedSection
              key={member.name}
              animation="slideUp"
              delay={0.1 + index * 0.1}
            >
              <article
                className="group bg-primary-700 rounded-card overflow-hidden border border-neutral-400/10 shadow-card transition-all duration-base hover:-translate-y-2 hover:border-accent-500/40 hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.5)]"
                aria-label={`${member.name}, ${member.role}`}
              >
                {/* Team Member Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at F&G Meat Distribution`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-slow group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-base"
                    aria-hidden="true"
                  />
                  
                  {/* Accent Line on Hover */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-base origin-left"
                    aria-hidden="true"
                  />
                </div>

                {/* Team Member Info */}
                <div className="p-5 sm:p-6">
                  {/* Name */}
                  <h3 className="font-heading text-xl sm:text-2xl text-neutral-100 mb-1 group-hover:text-accent-400 transition-colors duration-fast">
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <p className="font-body text-sm sm:text-base text-accent-500 font-medium mb-3 uppercase tracking-wider">
                    {member.role}
                  </p>
                  
                  {/* Bio */}
                  <p className="font-body text-sm sm:text-base text-neutral-300 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Sample data for F&G Meat Distribution leadership team
 * Use this as default props or for demonstration purposes
 * 
 * Note: Using placeholder images from placehold.co for demonstration.
 * Replace with actual team photos in production:
 * - /images/team/michael-fontaine.jpg
 * - /images/team/sarah-gonzalez.jpg
 * - /images/team/david-chen.jpg
 * - /images/team/amanda-rodriguez.jpg
 */
export const TEAM_SECTION_DATA: TeamSectionProps = {
  title: 'Our Leadership Team',
  members: [
    {
      name: 'Michael Fontaine',
      role: 'CEO & Co-Founder',
      bio: 'With over 30 years of experience in the premium meat industry, Michael founded F&G with a vision to deliver unparalleled quality to the finest culinary establishments across the nation.',
      image: 'https://placehold.co/400x500/1f1f1f/c9a962?text=MF',
    },
    {
      name: 'Sarah Gonzalez',
      role: 'COO & Co-Founder',
      bio: 'Sarah brings two decades of operations expertise to F&G, ensuring our supply chain and logistics meet the exacting standards our restaurant partners expect and deserve.',
      image: 'https://placehold.co/400x500/1f1f1f/c9a962?text=SG',
    },
    {
      name: 'David Chen',
      role: 'VP of Culinary Relations',
      bio: 'A former executive chef with Michelin-starred experience, David bridges the gap between our products and the kitchens they serve, understanding exactly what chefs need.',
      image: 'https://placehold.co/400x500/1f1f1f/c9a962?text=DC',
    },
    {
      name: 'Amanda Rodriguez',
      role: 'Director of Quality Assurance',
      bio: 'Amanda leads our rigorous quality control program, ensuring every product that leaves our facility meets the premium standards that define the F&G brand.',
      image: 'https://placehold.co/400x500/1f1f1f/c9a962?text=AR',
    },
  ],
};
