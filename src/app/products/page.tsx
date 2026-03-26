import type { Metadata } from 'next';
import { generatePageMetadata, generateBreadcrumbJsonLd, SITE_URL } from '@/lib/metadata';
import ProductsPageClient from './ProductsPageClient';

/**
 * Products Page Metadata
 * 
 * SEO metadata for the Products & Brands page using Next.js 14 Metadata API.
 * 
 * Requirements addressed:
 * - Requirement 10.3: Include meta titles and descriptions for all pages
 * - Requirement 10.4: Implement Open Graph tags for social media sharing
 */
export const metadata: Metadata = generatePageMetadata('products');

/**
 * Breadcrumb JSON-LD for Products page
 */
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Products & Brands', url: `${SITE_URL}/products` },
]);

/**
 * Products & Brands Page
 * 
 * Displays all product categories with their associated brands.
 * 
 * Layout (from design document):
 * 1. Page Header ("Our Premium Products & Brands")
 * 2. Category: Beef (Snake River Farms, Double R Ranch, St. Helens Beef)
 * 3. Category: Wagyu (Casa Wagyu)
 * 4. Category: Duck (Culver Duck, Tasty Duck)
 * 5. Category: Seafood (Patagonian Sea)
 * 6. Inquiry CTA Section
 * 
 * Requirements Addressed:
 * - Requirement 5.1: Organizes products into clear categories
 * - Requirement 5.2: Displays associated brand information for each category
 * - Requirement 5.3: Displays beef brands (Snake River Farms, Double R Ranch, St. Helens Beef)
 * - Requirement 5.4: Displays Casa Wagyu in Wagyu category
 * - Requirement 5.5: Displays Culver Duck and Tasty Duck in Duck category
 * - Requirement 5.6: Displays Patagonian Sea in Seafood category
 * - Requirement 5.8: Includes high-quality imagery for each category and brand
 * - Requirement 5.9: Includes a CTA encouraging visitors to inquire about specific products
 */
export default function ProductsPage() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ProductsPageClient />
    </>
  );
}
