import type { Metadata } from 'next';

/**
 * SEO Metadata Configuration
 * 
 * This module provides centralized metadata configuration for all pages
 * following the Next.js 14 Metadata API.
 * 
 * Requirements addressed:
 * - Requirement 10.3: Include meta titles and descriptions for all pages
 * - Requirement 10.4: Implement Open Graph tags for social media sharing
 * - Requirement 10.8: Implement structured data (JSON-LD) for local business information
 */

// Site-wide constants
export const SITE_URL = 'https://fgmeats.com';
export const SITE_NAME = 'F&G Meat Distribution';
export const DEFAULT_OG_IMAGE = '/images/og/default.jpg';

/**
 * Page metadata interface
 */
export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

/**
 * Metadata configuration for all pages
 */
export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'F&G Meat Distribution | Premium B2B Meat Supplier',
    description: 'F&G delivers premium beef, wagyu, duck, and seafood to restaurants and hotels nationwide. Partner with us for exceptional quality and reliable distribution.',
    keywords: ['meat distribution', 'B2B meat supplier', 'premium beef', 'wagyu', 'restaurant supplier', 'wholesale meat', 'hotel food supplier'],
    ogImage: '/images/og/home.jpg',
  },
  about: {
    title: 'About Us | F&G Meat Distribution',
    description: 'Learn about F&G Meat Distribution\'s 25+ years of excellence in premium meat distribution. Discover our story, mission, and the team behind our commitment to quality.',
    keywords: ['about F&G', 'meat distribution company', 'premium meat supplier history', 'B2B food distribution'],
    ogImage: '/images/og/about.jpg',
  },
  products: {
    title: 'Premium Products & Brands | F&G Meat Distribution',
    description: 'Explore our curated selection of premium beef, American Wagyu, Japanese A5 Wagyu, duck, and sustainable seafood from industry-leading brands.',
    keywords: ['premium beef', 'wagyu beef', 'Snake River Farms', 'Casa Wagyu', 'Culver Duck', 'sustainable seafood', 'restaurant meat supplier'],
    ogImage: '/images/og/products.jpg',
  },
  services: {
    title: 'Distribution Services | F&G Meat Distribution',
    description: 'Comprehensive meat distribution services for restaurants, hotels, and food service establishments. Nationwide delivery with temperature-controlled logistics.',
    keywords: ['meat distribution services', 'food service delivery', 'restaurant supply', 'wholesale meat delivery', 'nationwide distribution'],
    ogImage: '/images/og/services.jpg',
  },
  contact: {
    title: 'Contact Us | F&G Meat Distribution',
    description: 'Get in touch with F&G Meat Distribution. Contact our team for product inquiries, partnership opportunities, or to set up your business account.',
    keywords: ['contact F&G', 'meat supplier contact', 'business inquiry', 'restaurant supplier contact'],
    ogImage: '/images/og/contact.jpg',
  },
  privacy: {
    title: 'Privacy Policy | F&G Meat Distribution',
    description: 'F&G Meat Distribution privacy policy. Learn how we collect, use, and protect your personal information.',
    keywords: ['privacy policy', 'data protection', 'F&G privacy'],
    ogImage: DEFAULT_OG_IMAGE,
  },
  terms: {
    title: 'Terms of Service | F&G Meat Distribution',
    description: 'F&G Meat Distribution terms of service. Read our terms and conditions for using our website and services.',
    keywords: ['terms of service', 'terms and conditions', 'F&G terms'],
    ogImage: DEFAULT_OG_IMAGE,
  },
  programs: {
    title: 'Our Programs | F&G Meat Distribution',
    description: 'Explore our premium protein programs including beef, pork, specialty poultry, and exotic selections for discerning establishments.',
    keywords: ['meat programs', 'beef program', 'pork program', 'specialty poultry', 'exotic proteins', 'premium meat selection'],
    ogImage: '/images/og/programs.jpg',
  },
  'beef-program': {
    title: 'Beef Program | F&G Meat Distribution',
    description: 'Premium beef selections from Snake River Farms, Double R Ranch, St. Helens Beef, and Casa Wagyu. Exceptional quality for discerning establishments.',
    keywords: ['beef program', 'Snake River Farms', 'Double R Ranch', 'Casa Wagyu', 'premium beef', 'American Wagyu'],
    ogImage: '/images/og/beef-program.jpg',
  },
  'pork-program': {
    title: 'Pork Program | F&G Meat Distribution',
    description: 'High-quality pork products and specialty cuts from premium producers. Heritage breeds and unique preparations for creative culinary applications.',
    keywords: ['pork program', 'heritage pork', 'specialty cuts', 'premium pork', 'culinary pork'],
    ogImage: '/images/og/pork-program.jpg',
  },
  'specialty-poultry-program': {
    title: 'Specialty Poultry Program | F&G Meat Distribution',
    description: 'Farm-raised poultry including Culver Duck, heritage chicken, and game birds. Premium poultry for exceptional culinary experiences.',
    keywords: ['specialty poultry', 'Culver Duck', 'heritage chicken', 'game birds', 'premium poultry', 'farm-raised'],
    ogImage: '/images/og/specialty-poultry.jpg',
  },
  'exotics-program': {
    title: 'Exotics Program | F&G Meat Distribution',
    description: 'Unique and exotic protein selections including wild game, specialty seafood, and seasonal offerings for adventurous culinary experiences.',
    keywords: ['exotic proteins', 'wild game', 'specialty seafood', 'seasonal offerings', 'unique proteins', 'exotic meat'],
    ogImage: '/images/og/exotics-program.jpg',
  },
  catalogs: {
    title: 'Catalogs | F&G Meat Distribution',
    description: 'Browse our product catalogs and meat buyers guide. Comprehensive resources for culinary professionals and meat buyers.',
    keywords: ['product catalog', 'meat buyers guide', 'culinary resources', 'meat selection guide', 'professional resources'],
    ogImage: '/images/og/catalogs.jpg',
  },
  'product-catalog': {
    title: 'Product Catalog | F&G Meat Distribution',
    description: 'Complete selection of premium meats including wagyu, heritage pork, specialty poultry, and exotic proteins with detailed specifications.',
    keywords: ['product catalog', 'premium meats', 'wagyu catalog', 'meat specifications', 'culinary products'],
    ogImage: '/images/og/product-catalog.jpg',
  },
  'meat-buyers-guide': {
    title: 'Meat Buyers Guide | F&G Meat Distribution',
    description: 'Professional guide for meat buyers covering grading, storage, purchasing tips, and quality indicators for culinary professionals.',
    keywords: ['meat buyers guide', 'meat grading', 'purchasing guide', 'culinary professional', 'meat quality'],
    ogImage: '/images/og/meat-buyers-guide.jpg',
  },
  'vintage-beef-co': {
    title: 'Vintage Beef Co | F&G Meat Distribution',
    description: 'Australia\'s premier aged beef program featuring three distinct tiers of vaca vieja excellence from grass-fed cattle aged 5-15 years.',
    keywords: ['vintage beef', 'vaca vieja', 'galiciana', 'matriarch', 'aged beef', 'australian beef', 'grass-fed beef'],
    ogImage: '/images/og/vintage-beef-co.jpg',
  },
};

/**
 * Generate metadata for a specific page
 * 
 * @param page - The page key from PAGE_META
 * @param overrides - Optional metadata overrides
 * @returns Next.js Metadata object
 */
export function generatePageMetadata(
  page: keyof typeof PAGE_META,
  overrides?: Partial<Metadata>
): Metadata {
  const pageMeta = PAGE_META[page];
  
  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: page === 'home' ? '/' : `/${page}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: page === 'home' ? SITE_URL : `${SITE_URL}/${page}`,
      siteName: SITE_NAME,
      title: pageMeta.title,
      description: pageMeta.description,
      images: [
        {
          url: pageMeta.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      images: [pageMeta.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...overrides,
  };
}

/**
 * JSON-LD Structured Data for Local Business
 * 
 * This provides search engines with structured information about F&G Meat Distribution
 * following Schema.org LocalBusiness type.
 */
export const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: 'F&G Meat Distribution',
  description: 'F&G Meats partners with leading ranches and producers across the U.S. and abroad to bring carefully selected, premium beef, heritage pork, and specialty proteins to chefs, retailers, and customers nationwide.',
  url: SITE_URL,
  telephone: '+1-XXX-XXX-XXXX',
  email: 'info@fgmeats.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: 'XXXXX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0,
    longitude: 0,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://linkedin.com/company/fgmeats',
    'https://instagram.com/fgmeats',
    'https://facebook.com/fgmeats',
  ],
  image: `${SITE_URL}/images/og/home.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
};

/**
 * JSON-LD for Organization (used on homepage)
 */
export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'F&G Meat Distribution',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/logo.png`,
    width: 200,
    height: 60,
  },
  description: 'F&G Meats partners with leading ranches and producers across the U.S. and abroad to bring carefully selected, premium beef, heritage pork, and specialty proteins to chefs, retailers, and customers nationwide.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'City',
    addressRegion: 'State',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'sales',
    email: 'info@fgmeats.com',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://linkedin.com/company/fgmeats',
    'https://instagram.com/fgmeats',
    'https://facebook.com/fgmeats',
  ],
};

/**
 * JSON-LD for WebSite (used on homepage for sitelinks search box)
 */
export const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: 'F&G Meats partners with leading ranches and producers across the U.S. and abroad to bring carefully selected, premium beef, heritage pork, and specialty proteins to chefs, retailers, and customers nationwide.',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
};

/**
 * JSON-LD for BreadcrumbList
 * 
 * @param items - Array of breadcrumb items with name and url
 * @returns BreadcrumbList JSON-LD object
 */
export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
