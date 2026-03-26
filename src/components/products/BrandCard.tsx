'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Props for the BrandCard component
 * Based on design document specification
 */
export interface BrandCardProps {
  /** Brand name */
  name: string;
  /** Product category (e.g., 'Beef', 'Wagyu', 'Duck', 'Seafood') */
  category: string;
  /** Path to brand logo image */
  logo: string;
  /** Full brand description */
  description: string;
  /** Array of brand highlights/features */
  highlights: string[];
  /** Path to brand showcase image */
  image: string;
  /** Whether the card is currently expanded */
  expanded?: boolean;
  /** Callback function when card is toggled */
  onToggle: () => void;
}

/**
 * BrandCard component - Expandable card displaying brand information
 * 
 * Features:
 * - Default state shows logo, name, and brief description
 * - Click expands to reveal full description, highlights, and imagery
 * - Smooth animation on expand/collapse using Framer Motion
 * - Respects user's prefers-reduced-motion preference
 * - Dark theme styling consistent with design system
 * 
 * Design System Integration:
 * - Background: var(--color-primary-700) / #1f1f1f
 * - Border radius: var(--card-radius) / 0.5rem
 * - Accent color for highlights: var(--color-accent-500) / #c9a962
 * - Smooth transitions using design system timing (300ms base)
 * 
 * Accessibility:
 * - Keyboard accessible (Enter/Space to toggle)
 * - Proper ARIA attributes for expandable content
 * - Visible focus states with focus-visible ring
 * - Reduced motion support
 * 
 * @example
 * <BrandCard
 *   name="Snake River Farms"
 *   category="Beef"
 *   logo="/images/brands/snake-river-farms-logo.png"
 *   description="Premium American Wagyu beef..."
 *   highlights={['American Wagyu', 'Sustainable practices']}
 *   image="/images/brands/snake-river-farms.jpg"
 *   expanded={isExpanded}
 *   onToggle={() => setIsExpanded(!isExpanded)}
 * />
 */
export default function BrandCard({
  name,
  category,
  logo,
  description,
  highlights,
  image,
  expanded = false,
  onToggle,
}: BrandCardProps) {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  // Truncate description for collapsed state (first 100 characters)
  const briefDescription = description.length > 100 
    ? `${description.substring(0, 100)}...` 
    : description;

  // Animation variants for the expanded content
  const expandedContentVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' as const },
        opacity: { duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeInOut' as const },
      },
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' as const },
        opacity: { duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : 0.1, ease: 'easeInOut' as const },
      },
    },
  };

  // Animation variants for the chevron icon rotation
  const chevronVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  /**
   * Handle keyboard events for accessibility
   * Toggles the card on Enter or Space key press
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent page scroll on Space
      onToggle();
    }
  };

  return (
    <div
      className={cn(
        'bg-primary-700 rounded-card shadow-card overflow-hidden',
        'transition-all duration-base ease-out',
        'hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.4)]',
        expanded && 'ring-1 ring-accent-500/30'
      )}
    >
      {/* Clickable Header Section - Always Visible */}
      <div
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className={cn(
          'cursor-pointer p-6',
          'transition-colors duration-fast',
          'hover:bg-primary-600/50',
          // Focus-visible styles for keyboard accessibility
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700'
        )}
        role="button"
        aria-expanded={expanded}
        aria-controls={`brand-content-${name.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <div className="flex items-start gap-4">
          {/* Brand Logo */}
          <div className="relative w-16 h-16 flex-shrink-0 bg-primary-600 rounded-lg overflow-hidden">
            <Image
              src={logo}
              alt={`${name} logo`}
              fill
              loading="lazy"
              className="object-contain p-2"
              sizes="64px"
            />
          </div>

          {/* Brand Info */}
          <div className="flex-1 min-w-0">
            {/* Category Badge */}
            <span className="inline-block text-xs font-medium text-accent-500 uppercase tracking-wider mb-1">
              {category}
            </span>
            
            {/* Brand Name */}
            <h3 className="font-heading text-xl font-semibold text-neutral-100 mb-2">
              {name}
            </h3>
            
            {/* Brief Description (collapsed state) */}
            {!expanded && (
              <p className="text-neutral-300 text-sm line-clamp-2">
                {briefDescription}
              </p>
            )}
          </div>

          {/* Expand/Collapse Indicator */}
          <motion.div
            variants={chevronVariants}
            animate={expanded ? 'expanded' : 'collapsed'}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
            className="flex-shrink-0 text-neutral-300"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      {/* Expandable Content Section */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`brand-content-${name.replace(/\s+/g, '-').toLowerCase()}`}
            variants={expandedContentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {/* Divider */}
              <div className="h-px bg-neutral-400/20 mb-6" />

              {/* Brand Image */}
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-6">
                <Image
                  src={image}
                  alt={`${name} products`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </div>

              {/* Full Description */}
              <p className="text-neutral-200 text-base leading-relaxed mb-6">
                {description}
              </p>

              {/* Highlights List */}
              {highlights.length > 0 && (
                <div>
                  <h4 className="font-heading text-sm font-semibold text-accent-500 uppercase tracking-wider mb-3">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-neutral-300 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
