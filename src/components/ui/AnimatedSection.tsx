'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Animation variants for different animation types
 * Each variant defines initial (hidden) and animate (visible) states
 */
const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
  slideUp: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  slideIn: {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
};

/**
 * Reduced motion variants - no transform animations, only opacity
 * Respects user's prefers-reduced-motion preference
 */
const reducedMotionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

/**
 * Props for the AnimatedSection component
 */
export interface AnimatedSectionProps {
  /** Content to be animated */
  children: ReactNode;
  /** Type of animation to apply */
  animation?: 'fadeIn' | 'slideUp' | 'slideIn';
  /** Delay before animation starts (in seconds) */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
  /** Duration of the animation (in seconds) */
  duration?: number;
  /** Amount of element that must be visible before triggering (0-1) */
  threshold?: number;
  /** Whether to animate only once or every time element enters viewport */
  once?: boolean;
}

/**
 * AnimatedSection component - Scroll-triggered animation wrapper
 * 
 * Features:
 * - Uses Framer Motion for smooth animations
 * - Uses Intersection Observer (via Framer Motion's whileInView) to detect viewport entry
 * - Three animation types: fadeIn, slideUp, slideIn
 * - Configurable delay for staggered animations
 * - Respects user's prefers-reduced-motion preference
 * - Animates only once by default (not on every scroll)
 * 
 * Design System Integration:
 * - Subtle animations enhance premium feel (Requirement 3.6)
 * - Reduced motion support ensures accessibility compliance
 * - Smooth transitions using design system timing (300ms base)
 * 
 * @example
 * // Basic fade in animation
 * <AnimatedSection>
 *   <h2>Section Title</h2>
 * </AnimatedSection>
 * 
 * @example
 * // Slide up with delay for staggered effect
 * <AnimatedSection animation="slideUp" delay={0.2}>
 *   <Card>Content</Card>
 * </AnimatedSection>
 * 
 * @example
 * // Slide in from left
 * <AnimatedSection animation="slideIn" delay={0.1} className="my-8">
 *   <p>Animated paragraph</p>
 * </AnimatedSection>
 */
export default function AnimatedSection({
  children,
  animation = 'fadeIn',
  delay = 0,
  className,
  duration = 0.5,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  // Select appropriate variants based on reduced motion preference
  const variants = prefersReducedMotion
    ? reducedMotionVariants
    : animationVariants[animation];

  // Transition configuration
  const transition = {
    duration: prefersReducedMotion ? 0.2 : duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as const, // Smooth ease-out curve (cubic bezier)
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: threshold,
      }}
      variants={variants}
      transition={transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
