import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

/**
 * Sitemap Generation
 * 
 * Generates a sitemap.xml file for search engine indexing using Next.js 14 Metadata API.
 * 
 * Requirements addressed:
 * - Requirement 10.5: Generate a sitemap.xml file for search engine indexing
 * 
 * The sitemap includes all main pages of the F&G Meat Distribution website:
 * - Homepage
 * - About Us
 * - Products & Brands
 * - Services
 * - Contact
 * - Privacy Policy
 * - Terms of Service
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  
  // Define all pages with their metadata
  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return pages;
}
