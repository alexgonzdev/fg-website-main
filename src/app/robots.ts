import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

/**
 * Robots.txt Generation
 * 
 * Generates a robots.txt file for search engine crawlers using Next.js 14 Metadata API.
 * 
 * Requirements addressed:
 * - Requirement 10.2: Implement proper semantic HTML structure for SEO
 * - Requirement 10.5: Generate a sitemap.xml file for search engine indexing
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
