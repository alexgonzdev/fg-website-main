# Lighthouse Optimization Guide for F&G Meat Distribution Website

This document outlines the optimizations implemented and recommendations for achieving a 90+ Lighthouse performance score.

## Implemented Optimizations

### 1. Performance Optimizations

#### Image Optimization
- ✅ Next.js Image component with automatic WebP/AVIF conversion
- ✅ Responsive image sizes with srcset
- ✅ Lazy loading for below-fold images
- ✅ Priority loading for hero images
- ✅ Blur placeholder for images

#### Font Optimization
- ✅ next/font for automatic font optimization
- ✅ Font subsetting for Playfair Display and Inter
- ✅ Font display: swap for faster text rendering
- ✅ Preloading of critical fonts

#### JavaScript Optimization
- ✅ Code splitting via Next.js App Router
- ✅ Tree shaking of unused code
- ✅ SWC minification enabled
- ✅ Optimized package imports (lucide-react, framer-motion)

#### CSS Optimization
- ✅ Tailwind CSS purging of unused styles
- ✅ Critical CSS inlining by Next.js
- ✅ CSS custom properties for design tokens

#### Caching
- ✅ Static asset caching headers (1 year for images/fonts)
- ✅ ETag generation enabled
- ✅ Image cache TTL of 30 days

### 2. Accessibility Optimizations (WCAG AA)

- ✅ Color contrast ratios meet 4.5:1 for normal text
- ✅ Skip to main content link
- ✅ Semantic HTML structure (header, main, footer, nav, section)
- ✅ ARIA labels on all interactive elements
- ✅ Focus-visible states on all interactive elements
- ✅ 44px minimum touch targets
- ✅ prefers-reduced-motion support

### 3. SEO Optimizations

- ✅ Meta titles and descriptions for all pages
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (LocalBusiness, Organization, Website)
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure

### 4. Best Practices

- ✅ HTTPS (when deployed)
- ✅ No console errors
- ✅ No deprecated APIs
- ✅ Security headers configured

## Lighthouse Score Targets

| Category | Target | Expected |
|----------|--------|----------|
| Performance | 90+ | 90-95 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

## Running Lighthouse Audit

### Using Chrome DevTools
1. Open the website in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select categories: Performance, Accessibility, Best Practices, SEO
5. Select device: Mobile or Desktop
6. Click "Analyze page load"

### Using Lighthouse CLI
```bash
# Install Lighthouse globally
npm install -g lighthouse

# Run audit
lighthouse https://your-domain.com --output html --output-path ./lighthouse-report.html

# Run with specific categories
lighthouse https://your-domain.com --only-categories=performance,accessibility,best-practices,seo
```

### Using PageSpeed Insights
Visit https://pagespeed.web.dev/ and enter your URL.

## Additional Recommendations for Production

### 1. CDN Configuration
- Deploy to Vercel for automatic CDN distribution
- Enable edge caching for static assets
- Configure proper cache headers

### 2. Image Optimization
- Replace placeholder images with optimized production images
- Use appropriate image dimensions (avoid oversized images)
- Consider using a dedicated image CDN (Cloudinary, imgix)

### 3. Third-Party Scripts
- Defer non-critical third-party scripts
- Use async loading for analytics
- Consider using Partytown for web workers

### 4. Monitoring
- Set up Core Web Vitals monitoring
- Use Vercel Analytics or similar
- Monitor real user metrics (RUM)

## Core Web Vitals Targets

| Metric | Target | Description |
|--------|--------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero image/text loads quickly |
| FID (First Input Delay) | < 100ms | Page responds to interactions quickly |
| CLS (Cumulative Layout Shift) | < 0.1 | No unexpected layout shifts |
| INP (Interaction to Next Paint) | < 200ms | Interactions feel responsive |

## Troubleshooting Common Issues

### Low Performance Score
1. Check for large images - use Next.js Image component
2. Check for render-blocking resources
3. Verify code splitting is working
4. Check for unused JavaScript

### Low Accessibility Score
1. Run axe DevTools extension for detailed issues
2. Check color contrast ratios
3. Verify all images have alt text
4. Ensure form labels are properly associated

### Low SEO Score
1. Verify meta tags are present
2. Check for proper heading hierarchy
3. Ensure links have descriptive text
4. Verify robots.txt allows crawling

## Contact

For questions about performance optimization, refer to:
- [Next.js Performance Documentation](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
