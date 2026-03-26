import type { Metadata } from 'next';
import { generatePageMetadata, generateBreadcrumbJsonLd, SITE_URL } from '@/lib/metadata';
import AboutPageClient from './AboutPageClient';

/**
 * About Page Metadata
 * 
 * SEO metadata for the About Us page using Next.js 14 Metadata API.
 * 
 * Requirements addressed:
 * - Requirement 10.3: Include meta titles and descriptions for all pages
 * - Requirement 10.4: Implement Open Graph tags for social media sharing
 */
export const metadata: Metadata = generatePageMetadata('about');

/**
 * Breadcrumb JSON-LD for About page
 */
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'About Us', url: `${SITE_URL}/about` },
]);

/**
 * About Us Page
 * 
 * Displays company information including history, mission, values, and leadership team.
 * 
 * Layout (from design document):
 * 1. Page Header ("About F&G Meats")
 * 2. Company Story (with timeline visualization)
 * 3. Mission & Core Values
 * 4. Leadership Team
 * 5. Contact CTA Section
 * 
 * Requirements Addressed:
 * - Requirement 4.1: Display the company story including founding history and growth
 * - Requirement 4.2: Display the company mission statement and core values
 * - Requirement 4.3: Display information about the leadership team or key personnel
 * - Requirement 4.4: Present content in a visually engaging layout with images
 * - Requirement 4.5: Include a CTA directing visitors to the Contact page
 * - Requirement 4.6: Maintain the premium dark aesthetic consistent with the overall site design
 */
export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <AboutPageClient />
    </>
  );
}
