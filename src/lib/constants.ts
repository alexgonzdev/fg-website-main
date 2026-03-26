// Site-wide constants and content

export const SITE_NAME = 'F&G Meat Distribution';
export const SITE_DESCRIPTION = 'Premium B2B meat supplier for restaurants and hotels';

// Navigation link interface
export interface NavLink {
  label: string;
  href: string;
  dropdown?: { label: string; href: string; }[];
}

// Navigation links - Home removed as logo acts as home button
export const NAV_LINKS: NavLink[] = [
  { 
    label: 'Our Legacy', 
    href: '/about',
  },
  { 
    label: 'Programs', 
    href: '/products',
  },
  { 
    label: 'Catalogs', 
    href: '/catalogs',
    dropdown: [
      { label: 'Meat Buyers Guide', href: '/catalogs/meat-buyers-guide' },
    ]
  },
  { label: 'Contact Us', href: '/contact' },
];

// Contact information
export const CONTACT_INFO = {
  phone: '+1-786-828-9990',
  email: 'fngmeats@gmail.com',
  address: 'Miami, FL',
};

// Social media links - typed to match SocialLink interface from SocialLinks component
export type SocialPlatform = 'facebook' | 'instagram' | 'linkedin' | 'twitter';

export interface SocialLinkData {
  platform: SocialPlatform;
  url: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLinkData[] = [
  { platform: 'instagram', url: 'https://instagram.com/fngmeats', icon: 'instagram' },
];

// Legal links
export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

// Trust indicators
export const TRUST_INDICATORS = [
  { value: '25+', label: 'Years in Business', icon: 'calendar' },
  { value: '500+', label: 'Restaurant Partners', icon: 'utensils' },
  { value: '100%', label: 'Quality Guaranteed', icon: 'shield-check' },
];

// Product categories
export type ProductCategory = 'beef' | 'wagyu' | 'duck' | 'seafood' | 'other';

export const PRODUCT_CATEGORIES: Record<ProductCategory, { name: string; description: string; brands: string[] }> = {
  beef: {
    name: 'Beef',
    description: 'Premium domestic beef from trusted ranches',
    brands: ['snake-river-farms', 'double-r-ranch', 'st-helens-beef'],
  },
  wagyu: {
    name: 'Wagyu',
    description: 'Exceptional marbling and flavor',
    brands: ['casa-wagyu'],
  },
  duck: {
    name: 'Duck',
    description: 'Farm-raised duck products',
    brands: ['culver-duck', 'tasty-duck'],
  },
  seafood: {
    name: 'Seafood',
    description: 'Sustainable ocean-to-table selections',
    brands: ['patagonian-sea'],
  },
  other: {
    name: 'Other Premium Proteins',
    description: 'Specialty items and seasonal offerings',
    brands: [],
  },
};

// Brand data structure
export interface Brand {
  id: string;
  name: string;
  category: ProductCategory;
  logo: string;
  description: string;
  highlights: string[];
  image: string;
  featured: boolean;
}

// Comprehensive brand data for all categories
// Using placeholder images until real brand assets are available
export const BRANDS: Brand[] = [
  // Beef Brands
  {
    id: 'snake-river-farms',
    name: 'Snake River Farms',
    category: 'beef',
    logo: 'https://placehold.co/200x200/1f1f1f/c9a962?text=SRF',
    description: 'Snake River Farms is the premier producer of American Wagyu beef, combining the intense marbling of Japanese Wagyu with the robust beef flavor preferred by American palates. Raised on family-owned ranches in the Pacific Northwest, their cattle are fed a proprietary diet and raised with exceptional care to produce beef that rivals the finest in the world.',
    highlights: [
      'American Wagyu excellence with superior marbling',
      'Family-owned ranches in the Pacific Northwest',
      'Proprietary feeding program for optimal flavor',
      'USDA-graded and certified for quality',
      'Award-winning beef featured in top restaurants',
    ],
    image: 'https://placehold.co/800x600/2a2a2a/c9a962?text=Snake+River+Farms',
    featured: true,
  },
  {
    id: 'double-r-ranch',
    name: 'Double R Ranch',
    category: 'beef',
    logo: 'https://placehold.co/200x200/1f1f1f/c9a962?text=DRR',
    description: 'Double R Ranch represents the gold standard in premium Northwest beef. Their cattle are raised on lush Pacific Northwest pastures and finished on a carefully balanced grain diet. With a commitment to quality that spans generations, Double R Ranch delivers consistently exceptional beef that has earned the trust of discerning chefs and restaurateurs.',
    highlights: [
      'Premium Northwest beef with consistent quality',
      'Pasture-raised and grain-finished for optimal flavor',
      'Multi-generational ranching expertise',
      'Strict quality control and grading standards',
      'Trusted by top-tier restaurants nationwide',
    ],
    image: 'https://placehold.co/800x600/2a2a2a/c9a962?text=Double+R+Ranch',
    featured: true,
  },
  {
    id: 'st-helens-beef',
    name: 'St. Helens Beef',
    category: 'beef',
    logo: 'https://placehold.co/200x200/1f1f1f/c9a962?text=SHB',
    description: 'St. Helens Beef sources premium cattle from the fertile valleys surrounding Mount St. Helens, where volcanic soil creates nutrient-rich pastures. Their commitment to sustainable ranching practices and humane animal treatment results in beef that is not only exceptionally flavorful but also responsibly produced.',
    highlights: [
      'Sourced from nutrient-rich volcanic soil regions',
      'Sustainable and humane ranching practices',
      'Rich, distinctive flavor profile',
      'Environmentally conscious production',
      'Full traceability from ranch to table',
    ],
    image: 'https://placehold.co/800x600/2a2a2a/c9a962?text=St+Helens+Beef',
    featured: false,
  },

  // Wagyu Brand
  {
    id: 'casa-wagyu',
    name: 'Casa Wagyu',
    category: 'wagyu',
    logo: 'https://placehold.co/200x200/1f1f1f/c9a962?text=CW',
    description: 'Casa Wagyu brings the art of authentic Japanese Wagyu to discerning American establishments. Sourced from the finest Japanese prefectures including Kagoshima and Miyazaki, their A5-grade Wagyu represents the pinnacle of beef excellence. Each cut features the legendary snowflake marbling that melts at the touch, delivering an unparalleled dining experience.',
    highlights: [
      'Authentic Japanese A5 Wagyu from top prefectures',
      'Legendary snowflake marbling pattern',
      'BMS (Beef Marbling Score) of 8-12',
      'Certificate of authenticity with each order',
      'Temperature-controlled import process',
      'Exclusive cuts for fine dining establishments',
    ],
    image: 'https://placehold.co/800x600/2a2a2a/c9a962?text=Casa+Wagyu',
    featured: true,
  },

  // Duck Brands
  {
    id: 'culver-duck',
    name: 'Culver Duck',
    category: 'duck',
    logo: 'https://placehold.co/200x200/1f1f1f/c9a962?text=CD',
    description: 'Culver Duck has been America\'s premier duck producer for over 90 years, setting the standard for quality and consistency. Their Pekin ducks are raised in climate-controlled barns with access to fresh water, resulting in tender, flavorful meat with the perfect fat-to-meat ratio that chefs demand.',
    highlights: [
      'Over 90 years of duck farming expertise',
      'Premium Pekin ducks with ideal fat content',
      'Climate-controlled, humane raising conditions',
      'Consistent sizing for precise portioning',
      'Full product line from whole duck to specialty cuts',
      'USDA inspected and approved',
    ],
    image: 'https://placehold.co/800x600/2a2a2a/c9a962?text=Culver+Duck',
    featured: true,
  },
  {
    id: 'tasty-duck',
    name: 'Tasty Duck',
    category: 'duck',
    logo: 'https://placehold.co/200x200/1f1f1f/c9a962?text=TD',
    description: 'Tasty Duck specializes in artisanal duck products crafted with traditional methods and modern food safety standards. From their signature duck confit to rendered duck fat, every product is made with attention to detail that elevates any culinary creation.',
    highlights: [
      'Artisanal duck products and specialty items',
      'Traditional preparation methods',
      'Premium duck confit and rendered fat',
      'Small-batch production for quality control',
      'Versatile products for diverse cuisines',
    ],
    image: 'https://placehold.co/800x600/2a2a2a/c9a962?text=Tasty+Duck',
    featured: false,
  },

  // Seafood Brand
  {
    id: 'patagonian-sea',
    name: 'Patagonian Sea',
    category: 'seafood',
    logo: 'https://placehold.co/200x200/1f1f1f/c9a962?text=PS',
    description: 'Patagonian Sea is committed to bringing the pristine waters of Patagonia to your kitchen through sustainably harvested seafood. Their wild-caught fish and shellfish come from some of the cleanest, coldest waters on Earth, ensuring exceptional flavor and texture while protecting marine ecosystems for future generations.',
    highlights: [
      'Sustainably harvested from pristine Patagonian waters',
      'Wild-caught for superior flavor and texture',
      'MSC certified sustainable fishing practices',
      'Full traceability and transparency',
      'Cold-chain integrity from ocean to delivery',
      'Supporting local fishing communities',
      'Zero-waste processing commitment',
    ],
    image: 'https://placehold.co/800x600/2a2a2a/c9a962?text=Patagonian+Sea',
    featured: true,
  },
];

// Helper function to get brands by category
export const getBrandsByCategory = (category: ProductCategory): Brand[] => {
  return BRANDS.filter((brand) => brand.category === category);
};

// Helper function to get featured brands
export const getFeaturedBrands = (): Brand[] => {
  return BRANDS.filter((brand) => brand.featured);
};

// Helper function to get a brand by ID
export const getBrandById = (id: string): Brand | undefined => {
  return BRANDS.find((brand) => brand.id === id);
};
