import type { Metadata } from 'next';
import { generatePageMetadata, generateBreadcrumbJsonLd, SITE_URL } from '@/lib/metadata';
import ServicesPageClient from './ServicesPageClient';

/**
 * Services Page Metadata
 * 
 * SEO metadata for the Services page using Next.js 14 Metadata API.
 * 
 * Requirements addressed:
 * - Requirement 10.3: Include meta titles and descriptions for all pages
 * - Requirement 10.4: Implement Open Graph tags for social media sharing
 */
export const metadata: Metadata = generatePageMetadata('services');

/**
 * Breadcrumb JSON-LD for Services page
 */
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Services', url: `${SITE_URL}/services` },
]);

/**
 * Services Page
 *
 * Displays F&G's distribution services, delivery areas, ordering process,
 * and account requirements with a CTA to contact.
 *
 * Page Layout (from Design Document):
 * ┌─────────────────────────────────────────┐
 * │              Navigation                  │
 * ├─────────────────────────────────────────┤
 * │            Page Header                  │
 * │        "Our Distribution Services"      │
 * ├─────────────────────────────────────────┤
 * │         Services Overview               │
 * ├─────────────────────────────────────────┤
 * │         Delivery Areas                  │
 * ├─────────────────────────────────────────┤
 * │         Ordering Process                │
 * ├─────────────────────────────────────────┤
 * │       Account Requirements              │
 * ├─────────────────────────────────────────┤
 * │               Footer                    │
 * └─────────────────────────────────────────┘
 *
 * Requirements addressed:
 * - Requirement 6.1: Describe the distribution services offered by F&G
 * - Requirement 6.2: Display information about delivery areas and geographic coverage
 * - Requirement 6.3: Explain the ordering process for new and existing clients
 * - Requirement 6.4: Highlight any minimum order requirements or account setup procedures
 * - Requirement 6.5: Present information in an easy-to-scan format
 * - Requirement 6.6: Include a CTA directing visitors to contact F&G for service inquiries
 */
export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ServicesPageClient />
    </>
  );
}
