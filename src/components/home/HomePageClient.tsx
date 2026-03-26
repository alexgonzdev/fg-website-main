'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

/**
 * Full-viewport section component with background image and scroll-snap
 */
function FullSection({
  backgroundImage,
  children,
  overlay = 'bg-black/50',
  className = '',
}: {
  backgroundImage: string;
  children: React.ReactNode;
  overlay?: string;
  className?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative h-[100dvh] min-h-[600px] flex items-center justify-center snap-start snap-always overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          quality={85}
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>
      <div className={`relative z-10 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {children}
      </div>
    </section>
  );
}

/**
 * Hero section with 3 vertical images layout
 */
function HeroWithVerticalImages({
  images,
  children,
}: {
  images: { src: string; alt: string }[];
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[100dvh] min-h-[600px] flex items-center justify-center snap-start snap-always bg-neutral-950 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 gap-6 lg:gap-10 max-w-[100vw] overflow-hidden box-border">
        
        {/* Text content - left side on desktop, top on mobile */}
        <div className={`flex-shrink-0 text-center lg:text-left lg:max-w-[400px] xl:max-w-[450px] transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {children}
        </div>
        
        {/* 3 Vertical Images - right side on desktop, bottom on mobile */}
        <div className="flex gap-3 sm:gap-4 lg:gap-5 h-[45vh] sm:h-[50vh] lg:h-[70vh] max-h-[500px] lg:max-h-[600px] flex-shrink-0">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative w-24 sm:w-32 lg:w-40 xl:w-44 h-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${0.2 + index * 0.15}s`,
              }}
            >
              {/* Decorative frame effect */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-xl sm:rounded-2xl z-20 pointer-events-none" />
              
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={90}
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 176px"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority={index === 0}
              />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 z-10" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

/**
 * Staggered animation wrapper for content within sections
 */
function AnimatedContent({ 
  children, 
  delay = 0,
  className = '' 
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) {
  return (
    <div 
      className={className}
      style={{ 
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * CTA Button styled like Bush Brothers
 */
function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block border-2 border-white text-white px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black transition-all duration-300"
    >
      {children}
    </Link>
  );
}

export default function HomePageClient() {
  // Hero images - 3 vertical images for the hero section
  const heroImages = [
    { src: '/images/meat/WhatsApp Image 2026-01-25 at 13.35.38.jpeg', alt: 'Premium beef cuts' },
    { src: '/images/meat/WhatsApp Image 2026-01-25 at 13.35.38 (1).jpeg', alt: 'Quality meat selection' },
    { src: '/images/meat/WhatsApp Image 2026-01-25 at 13.35.38 (2).jpeg', alt: 'Specialty meats' },
  ];

  return (
    <main className="h-[100dvh] overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      {/* Hero Section - 3 Vertical Images Layout */}
      <HeroWithVerticalImages images={heroImages}>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 lg:mb-6 tracking-wide leading-tight">
          THE ART OF
          <br />
          <span className="text-white">BEEF BUYING</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-md mx-auto lg:mx-0 font-light mb-6 lg:mb-8">
          Premium proteins for Florida&apos;s finest establishments
        </p>
        <CTAButton href="/contact">
          Get Started
        </CTAButton>
      </HeroWithVerticalImages>

      {/* Our Legacy Section */}
      <FullSection 
        backgroundImage="/images/better quality amazonico opening.jpg"
        overlay="bg-black/60"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedContent>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-8 tracking-wide">
              OUR LEGACY
            </h2>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              F&amp;G Meats is a dynamic distributor of premium proteins, supplying high-quality 
              beef and specialty meats to Florida&apos;s leading restaurants, hotels, and country clubs. 
              Built on reliability, product variety, and hands-on service, we operate with a 
              partnership-driven approach focused on making the protein-ordering process seamless 
              and effortless for every client.
            </p>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <CTAButton href="/about">
              Get to Know F&amp;G Meats
            </CTAButton>
          </AnimatedContent>
        </div>
      </FullSection>

      {/* Our Quality Section */}
      <FullSection 
        backgroundImage="/images/ranching.jpg"
        overlay="bg-black/55"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedContent>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-8 tracking-wide">
              OUR QUALITY
            </h2>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              We supply the finest custom-aged, expertly trimmed meats to fine restaurants, 
              five-star hotels, clubs, and other prestigious dining venues. These establishments 
              depend on us for the highest quality proteins to delight their customers and 
              enhance their brands.
            </p>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <CTAButton href="/products">
              View Our Premium Meats
            </CTAButton>
          </AnimatedContent>
        </div>
      </FullSection>

      {/* Our Service Section */}
      <FullSection 
        backgroundImage="/images/cannonball truck .jpeg"
        overlay="bg-black/55"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedContent>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-8 tracking-wide">
              OUR SERVICE
            </h2>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Trust is established by reliability, honesty, consistency, and a commitment to 
              our customers' success. We take a consultative approach to working with great 
              chefs and restaurant executives. We customize our service to build relationships 
              lasting for decades.
            </p>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <CTAButton href="/services">
              Explore Our Services
            </CTAButton>
          </AnimatedContent>
        </div>
      </FullSection>

      {/* Service Areas Section */}
      <FullSection 
        backgroundImage="/images/DRR Valley.jpg"
        overlay="bg-black/60"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedContent>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-8 tracking-wide">
              OUR REACH
            </h2>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              We provide reliable, regular delivery all across South Florida — Miami-Dade, 
              Broward, Palm Beach, and surrounding counties. Beyond our local footprint, 
              we also manage international export programs across Europe, Asia, South America, 
              and the Caribbean.
            </p>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <CTAButton href="/contact">
              Contact Us Today
            </CTAButton>
          </AnimatedContent>
        </div>
      </FullSection>
    </main>
  );
}
