'use client';

import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

/**
 * Featured brand data structure
 */
interface FeaturedBrand {
  id: string;
  name: string;
  category: string;
  description: string;
}

/**
 * Featured brands data - 6 premium brands as specified in requirements
 * Requirement 3.2: Display featured products/brands section showcasing key premium brands
 * Requirement 3.3: Display at least 6 brand logos or cards
 */
const FEATURED_BRANDS: FeaturedBrand[] = [
  {
    id: 'snake-river-farms',
    name: 'Snake River Farms',
    category: 'American Wagyu',
    description: 'Premium American Wagyu beef known for exceptional marbling and rich, buttery flavor.',
  },
  {
    id: 'double-r-ranch',
    name: 'Double R Ranch',
    category: 'Premium Beef',
    description: 'Northwest-raised beef with consistent quality and superior taste from sustainable ranches.',
  },
  {
    id: 'st-helens-beef',
    name: 'St. Helens Beef',
    category: 'Premium Beef',
    description: 'Hand-selected premium beef cuts with exceptional tenderness and flavor profiles.',
  },
  {
    id: 'casa-wagyu',
    name: 'Casa Wagyu',
    category: 'Wagyu',
    description: 'Authentic Wagyu beef with extraordinary marbling and melt-in-your-mouth texture.',
  },
  {
    id: 'culver-duck',
    name: 'Culver Duck',
    category: 'Duck',
    description: 'Farm-raised Pekin duck products known for tender meat and rich, savory flavor.',
  },
  {
    id: 'patagonian-sea',
    name: 'Patagonian Sea',
    category: 'Seafood',
    description: 'Sustainably sourced premium seafood from the pristine waters of Patagonia.',
  },
];

/**
 * FeaturedBrands component - Displays 6 featured brand cards in a responsive grid
 * 
 * Features:
 * - Responsive grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
 * - Card component for each brand with dark theme styling
 * - AnimatedSection for scroll-triggered animations with staggered delays
 * - Section heading with accent divider
 * - CTA button to view all products
 * 
 * Requirements:
 * - Requirement 3.2: Display featured products/brands section showcasing key premium brands
 * - Requirement 3.3: Display at least 6 brand logos or cards
 * - Requirement 3.6: Reveal content sections with subtle animations on scroll
 * 
 * @example
 * <FeaturedBrands />
 */
export default function FeaturedBrands() {
  return (
    <section 
      className="py-16 md:py-24 bg-primary-800"
      aria-labelledby="featured-brands-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-12 md:mb-16">
          <h2 
            id="featured-brands-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-neutral-100 mb-4"
          >
            Our Premium Brands
          </h2>
          
          {/* Accent Divider */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-accent-500 rounded-full" />
          </div>
          
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto">
            We partner with the finest producers to bring exceptional quality to your kitchen
          </p>
        </AnimatedSection>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {FEATURED_BRANDS.map((brand, index) => (
            <AnimatedSection
              key={brand.id}
              animation="slideUp"
              delay={0.1 * index}
            >
              <Card 
                className="h-full flex flex-col"
                hoverable
              >
                {/* Brand Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-500 bg-accent-500/10 rounded-full">
                    {brand.category}
                  </span>
                </div>
                
                {/* Brand Name */}
                <CardTitle className="text-2xl mb-3">
                  {brand.name}
                </CardTitle>
                
                {/* Brand Description */}
                <CardDescription className="text-base flex-grow">
                  {brand.description}
                </CardDescription>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fadeIn" delay={0.6} className="text-center">
          <Button 
            href="/products" 
            variant="secondary"
            size="lg"
          >
            View All Products & Brands
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
