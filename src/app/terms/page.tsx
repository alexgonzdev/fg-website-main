import type { Metadata } from 'next';
import { generatePageMetadata, generateBreadcrumbJsonLd, SITE_URL } from '@/lib/metadata';
import TermsPageClient from './TermsPageClient';

/**
 * Terms of Service Page Metadata
 * 
 * SEO metadata for the Terms of Service page using Next.js 14 Metadata API.
 * 
 * Requirements addressed:
 * - Requirement 10.3: Include meta titles and descriptions for all pages
 * - Requirement 10.4: Implement Open Graph tags for social media sharing
 */
export const metadata: Metadata = generatePageMetadata('terms');

/**
 * Breadcrumb JSON-LD for Terms page
 */
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Terms of Service', url: `${SITE_URL}/terms` },
]);

/**
 * Terms of Service Page
 *
 * Displays the terms of service with placeholder content for F&G Meat Distribution.
 * Includes sections covering usage terms, intellectual property, limitations, and legal provisions.
 *
 * Requirements addressed:
 * - Requirement 11.6: Footer SHALL display copyright information and legal links (Privacy Policy, Terms)
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 */
export default function TermsOfServicePage() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <TermsPageClient />
    </>
  );
}
