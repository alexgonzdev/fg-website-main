'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Button from '@/components/ui/Button';

/**
 * HeroSection component props interface
 * Based on design document specification
 */
export interface HeroSectionProps {
  /** Main headline text communicating F&G's premium B2B positioning */
  headline: string;
  /** Supporting subheadline text describing the company's core value proposition */
  subheadline: string;
  /** Call-to-action button text */
  ctaText: string;
  /** Call-to-action button link destination (typically to Contact section) */
  ctaHref: string;
  /** Background image URL (required) */
  backgroundImage: string;
  /** Optional background video URL (takes precedence over image when provided) */
  backgroundVideo?: string;
}

/**
 * HeroSection Component
 * 
 * The primary visual impact area on the homepage featuring:
 * - Full viewport height (100vh) for immediate visual impact
 * - Responsive minimum heights: 500px mobile, 550px tablet, 600px desktop
 * - Background image with Next.js Image optimization for <3s load time
 * - Optional video background with image fallback for performance
 * - Gradient overlay for text readability
 * - Preloaded critical images for performance
 * - Compelling headline communicating F&G's premium B2B positioning
 * - Subheadline describing the company's core value proposition
 * - Primary CTA button directing visitors to the Contact section
 * - Mobile-optimized padding and spacing
 * - Touch-friendly CTA button (44px minimum height)
 * 
 * Requirements addressed:
 * - Requirement 2.1: High-quality background image or video showcasing premium meat products
 * - Requirement 2.2: Compelling headline communicating F&G's premium B2B positioning
 * - Requirement 2.3: Subheadline describing the company's core value proposition
 * - Requirement 2.4: Primary CTA button directing visitors to the Contact section
 * - Requirement 2.5: Scale appropriately on mobile while maintaining visual impact
 * - Requirement 2.6: Load within 3 seconds on standard broadband connections
 * - Requirement 9.5: All interactive elements are easily tappable on touch devices (minimum 44px touch targets)
 */
export default function HeroSection({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  backgroundImage,
  backgroundVideo,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Handle video loading state
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !backgroundVideo) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    const handleError = () => {
      setVideoError(true);
      console.warn('Video failed to load, falling back to image');
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [backgroundVideo]);

  // Determine if we should show video or image
  const showVideo = backgroundVideo && !videoError;

  return (
    <section
      className="relative w-full h-[100dvh] min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Hero Banner Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="F&G Meats Hero"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>
      
      {/* Content Container - Centered headline only with responsive spacing */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 text-center max-w-4xl mx-auto">
        {/* Headline - Large, impactful typography with font-heading (Playfair Display) */}
        {/* Responsive scaling for better fit on all screens */}
        <h1 className="font-heading text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-neutral-100 mb-4 sm:mb-6">
          {headline}
        </h1>
        
        {/* Subheadline - Only show if provided */}
        {subheadline && (
          <p className="font-body text-base leading-relaxed sm:text-xl lg:text-2xl text-neutral-200 mb-6 sm:mb-8 max-w-[90%] sm:max-w-2xl">
            {subheadline}
          </p>
        )}
        
        {/* Primary CTA Button - Only show if provided */}
        {ctaText && ctaHref && (
          <Button
            href={ctaHref}
            variant="primary"
            size="lg"
            className="shadow-lg hover:shadow-xl w-full xs:w-auto max-w-[280px] sm:max-w-none min-h-[52px] text-base sm:text-lg"
          >
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
}
