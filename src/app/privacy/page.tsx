import type { Metadata } from 'next';
import { generatePageMetadata, generateBreadcrumbJsonLd, SITE_URL } from '@/lib/metadata';
import PrivacyPageClient from './PrivacyPageClient';

/**
 * Privacy Policy Page Metadata
 * 
 * SEO metadata for the Privacy Policy page using Next.js 14 Metadata API.
 * 
 * Requirements addressed:
 * - Requirement 10.3: Include meta titles and descriptions for all pages
 * - Requirement 10.4: Implement Open Graph tags for social media sharing
 */
export const metadata: Metadata = generatePageMetadata('privacy');

/**
 * Breadcrumb JSON-LD for Privacy page
 */
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Privacy Policy', url: `${SITE_URL}/privacy` },
]);

/**
 * Privacy Policy Page
 *
 * Displays the privacy policy with placeholder content for F&G Meat Distribution.
 * Includes sections covering data collection, usage, protection, and user rights.
 *
 * Requirements addressed:
 * - Requirement 11.6: Footer SHALL display copyright information and legal links (Privacy Policy, Terms)
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <PrivacyPageClient />
    </>
  );
}
