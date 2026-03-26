'use client';

import { useState, useCallback } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BrandCard from './BrandCard';
import { cn } from '@/lib/utils';

/**
 * Brand data structure for CategorySection
 */
export interface Brand {
  /** Unique identifier for the brand */
  id: string;
  /** Brand name */
  name: string;
  /** Product category */
  category: string;
  /** Path to brand logo image */
  logo: string;
  /** Full brand description */
  description: string;
  /** Array of brand highlights/features */
  highlights: string[];
  /** Path to brand showcase image */
  image: string;
}

/**
 * Props for the CategorySection component
 */
export interface CategorySectionProps {
  /** Category name (e.g., 'Beef', 'Wagyu', 'Duck', 'Seafood') */
  categoryName: string;
  /** Category description */
  description: string;
  /** Array of brands in this category */
  brands: Brand[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * CategorySection component - Displays a product category with its brands
 * 
 * Features:
 * - Displays category heading with accent divider
 * - Shows category description
 * - Renders BrandCard components for each brand
 * - Manages expanded state (only one brand expanded at a time)
 * - Uses AnimatedSection for scroll animations
 * - Dark theme styling consistent with design system
 * 
 * Requirements Addressed:
 * - Requirement 5.1: Organizes products into clear categories
 * - Requirement 5.2: Displays associated brand information for each category
 * 
 * Design System Integration:
 * - Accent color for divider: var(--color-accent-500) / #c9a962
 * - Heading font: var(--font-heading) / Playfair Display
 * - Consistent spacing using design system scale
 * 
 * @example
 * <CategorySection
 *   categoryName="Beef"
 *   description="Premium domestic beef from trusted ranches"
 *   brands={[
 *     {
 *       id: 'snake-river-farms',
 *       name: 'Snake River Farms',
 *       category: 'Beef',
 *       logo: '/images/brands/snake-river-farms-logo.png',
 *       description: 'Premium American Wagyu beef...',
 *       highlights: ['American Wagyu', 'Sustainable practices'],
 *       image: '/images/brands/snake-river-farms.jpg',
 *     },
 *   ]}
 * />
 */
export default function CategorySection({
  categoryName,
  description,
  brands,
  className,
}: CategorySectionProps) {
  // Track which brand card is currently expanded (only one at a time)
  const [expandedBrandId, setExpandedBrandId] = useState<string | null>(null);

  /**
   * Handle brand card toggle
   * If the clicked brand is already expanded, collapse it
   * Otherwise, expand the clicked brand (and collapse any other)
   */
  const handleBrandToggle = useCallback((brandId: string) => {
    setExpandedBrandId((currentId) => (currentId === brandId ? null : brandId));
  }, []);

  // Don't render if there are no brands
  if (brands.length === 0) {
    return null;
  }

  return (
    <AnimatedSection
      animation="slideUp"
      className={cn('py-12 md:py-16', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Category Header */}
        <div className="mb-8 md:mb-10 text-center">
          {/* Category Name with Accent Divider */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gradient-to-l from-accent-500 to-transparent" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-100">
              {categoryName}
            </h2>
            {/* Accent Divider Line */}
            <div className="flex-1 h-px bg-gradient-to-r from-accent-500 to-transparent" />
          </div>

          {/* Category Description */}
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl text-center mx-auto">
            {description}
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <AnimatedSection
              key={brand.id}
              animation="fadeIn"
              delay={index * 0.1}
              className="h-fit"
            >
              <BrandCard
                name={brand.name}
                category={brand.category}
                logo={brand.logo}
                description={brand.description}
                highlights={brand.highlights}
                image={brand.image}
                expanded={expandedBrandId === brand.id}
                onToggle={() => handleBrandToggle(brand.id)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
