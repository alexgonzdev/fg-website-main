import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { 
  generatePageMetadata, 
  LOCAL_BUSINESS_JSON_LD, 
  ORGANIZATION_JSON_LD, 
  WEBSITE_JSON_LD,
  SITE_URL 
} from "@/lib/metadata";
import "./globals.css";

/**
 * Root Layout Metadata
 * 
 * Provides default metadata for all pages using Next.js 14 Metadata API.
 * Individual pages can override these defaults with their own metadata exports.
 * 
 * Requirements addressed:
 * - Requirement 10.3: Include meta titles and descriptions for all pages
 * - Requirement 10.4: Implement Open Graph tags for social media sharing
 */
export const metadata: Metadata = {
  ...generatePageMetadata('home'),
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add verification tokens when available
    // google: 'google-site-verification-token',
  },
};

/**
 * Root Layout Component
 * 
 * This is the root layout for the F&G Meat Distribution website.
 * It integrates the Navigation and Footer components to provide
 * a consistent layout structure across all pages.
 * 
 * Layout Structure:
 * - Navigation: Fixed at top of viewport
 * - Main content: Wrapped in <main> element with proper styling
 * - Footer: At the bottom of the page
 * 
 * Implements Requirements:
 * - 1.5: Navigation remains fixed at top of viewport during scrolling
 * - 11.1: Display a consistent footer across all pages
 * - 8.1: Dark/black primary color scheme reflecting premium positioning
 * - 8.2: Typography that conveys sophistication and readability
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        {/* JSON-LD Structured Data for Local Business - Requirement 10.8 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(WEBSITE_JSON_LD),
          }}
        />
      </head>
      <body className="antialiased font-body bg-primary-900 text-neutral-100 min-h-screen flex flex-col relative">
        {/* Content wrapper with relative positioning */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Skip to main content link for keyboard users - Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-500 focus:text-primary-900 focus:rounded-button focus:font-semibold focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900"
          >
            Skip to main content
          </a>
          
          {/* Fixed Navigation at top */}
          <Navigation />
          
          {/* Main content area */}
          <main 
            className="flex-1 flex flex-col"
            role="main"
            id="main-content"
            tabIndex={-1}
          >
            {children}
          </main>
          
          {/* Footer at bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}