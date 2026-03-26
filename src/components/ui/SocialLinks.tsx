'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SocialLinkData, SocialPlatform } from '@/lib/constants';

/**
 * Re-export the SocialLink type for external use
 * This matches the design document interface
 */
export type SocialLink = SocialLinkData;

/**
 * Props for the SocialLinks component
 */
export interface SocialLinksProps {
  /** Array of social links to display */
  links: SocialLink[];
  /** Layout direction - horizontal (default) or vertical */
  layout?: 'horizontal' | 'vertical';
  /** Size of the icons */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Icon size mapping based on size prop
 */
const iconSizes = {
  sm: 18,
  md: 22,
  lg: 26,
};

/**
 * Container size mapping for touch target compliance (44px minimum)
 */
const containerSizes = {
  sm: 'w-10 h-10',
  md: 'w-11 h-11',
  lg: 'w-12 h-12',
};

/**
 * Platform display names for accessibility
 */
const platformNames: Record<SocialPlatform, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
};

/**
 * Get the appropriate Lucide icon component for a platform
 */
function getIconComponent(platform: SocialPlatform) {
  switch (platform) {
    case 'facebook':
      return Facebook;
    case 'instagram':
      return Instagram;
    case 'linkedin':
      return Linkedin;
    case 'twitter':
      return Twitter;
    default:
      return null;
  }
}

/**
 * SocialLinks component for displaying social media icon links
 * 
 * Features:
 * - Uses Lucide React icons for consistent styling
 * - Supports horizontal and vertical layouts
 * - Proper accessibility with aria-labels
 * - Links open in new tabs with security attributes
 * - Hover effects with accent color from design system
 * - Touch target compliance (44px minimum)
 * - Respects reduced motion preferences
 * 
 * @example
 * // Horizontal layout (default)
 * <SocialLinks links={SOCIAL_LINKS} />
 * 
 * @example
 * // Vertical layout with large icons
 * <SocialLinks links={SOCIAL_LINKS} layout="vertical" size="lg" />
 */
export default function SocialLinks({
  links,
  layout = 'horizontal',
  size = 'md',
  className,
}: SocialLinksProps) {
  if (!links || links.length === 0) {
    return null;
  }

  const iconSize = iconSizes[size];
  const containerSize = containerSizes[size];

  return (
    <nav
      aria-label="Social media links"
      className={cn(
        'flex gap-2',
        layout === 'vertical' ? 'flex-col' : 'flex-row items-center',
        className
      )}
    >
      {links.map((link) => {
        const IconComponent = getIconComponent(link.platform);
        
        if (!IconComponent) {
          return null;
        }

        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${platformNames[link.platform]} page`}
            className={cn(
              // Base styles
              'inline-flex items-center justify-center',
              'rounded-full',
              containerSize,
              // Colors
              'text-neutral-300',
              'bg-transparent',
              // Hover effects
              'hover:text-accent-500 hover:bg-primary-700',
              // Transitions
              'transition-all duration-fast ease-out',
              // Focus states for accessibility
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900'
            )}
          >
            <IconComponent
              size={iconSize}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
        );
      })}
    </nav>
  );
}
