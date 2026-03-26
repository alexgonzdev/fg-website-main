import type { Metadata } from 'next';
import { generatePageMetadata, generateBreadcrumbJsonLd, SITE_URL } from '@/lib/metadata';
import ContactPageClient from './ContactPageClient';

/**
 * Contact Page Metadata
 * 
 * SEO metadata for the Contact page using Next.js 14 Metadata API.
 * 
 * Requirements addressed:
 * - Requirement 10.3: Include meta titles and descriptions for all pages
 * - Requirement 10.4: Implement Open Graph tags for social media sharing
 */
export const metadata: Metadata = generatePageMetadata('contact');

/**
 * Breadcrumb JSON-LD for Contact page
 */
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Contact', url: `${SITE_URL}/contact` },
]);

/**
 * Contact Page
 *
 * Displays the contact form and contact information for business inquiries.
 *
 * Page Layout (from Design Document):
 * ┌─────────────────────────────────────────┐
 * │              Navigation                  │
 * ├─────────────────────────────────────────┤
 * │            Page Header                  │
 * ├──────────────────┬──────────────────────┤
 * │                  │                      │
 * │   Contact Form   │   Contact Info       │
 * │                  │   - Phone            │
 * │   - Name         │   - Email            │
 * │   - Business     │   - Address          │
 * │   - Email        │                      │
 * │   - Phone        │   Service Area Map   │
 * │   - Type         │                      │
 * │   - Message      │                      │
 * │                  │                      │
 * │   [Submit]       │                      │
 * │                  │                      │
 * ├──────────────────┴──────────────────────┤
 * │               Footer                    │
 * └─────────────────────────────────────────┘
 *
 * Requirements addressed:
 * - Requirement 7.1: Contact form captures visitor name, business name, email, phone number, and message
 * - Requirement 7.2: Contact form includes a dropdown for inquiry type
 * - Requirement 7.3: Display success confirmation message on valid submission
 * - Requirement 7.4: Display specific validation error messages for invalid/missing fields
 * - Requirement 7.5: Display direct contact information including phone number and email address
 * - Requirement 7.6: Display the company location or service area information
 * - Requirement 7.7: Include a map or visual representation of the service area
 */
export default function ContactPage() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ContactPageClient />
    </>
  );
}
