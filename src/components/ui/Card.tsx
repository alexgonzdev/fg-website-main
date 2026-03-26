'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Padding size variants for the Card component
 * Based on design system spacing scale
 */
const paddingSizes = {
  sm: 'p-3',      // 12px - compact cards
  md: 'p-6',      // 24px - default (--card-padding: 1.5rem)
  lg: 'p-8',      // 32px - spacious cards
  none: 'p-0',    // No padding - for custom layouts
};

/**
 * Props for the Card component
 */
export interface CardProps {
  /** Card content - used when not using header/body/footer structure */
  children?: ReactNode;
  /** Optional header section content */
  header?: ReactNode;
  /** Optional body section content */
  body?: ReactNode;
  /** Optional footer section content */
  footer?: ReactNode;
  /** Padding size variant */
  padding?: 'sm' | 'md' | 'lg' | 'none';
  /** Whether to enable hover effects (translateY and enhanced shadow) */
  hoverable?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for interactive cards */
  onClick?: () => void;
  /** Accessible label for interactive cards */
  'aria-label'?: string;
}

/**
 * Card component with dark theme styling
 * 
 * Features:
 * - Dark theme background (#1f1f1f / primary-700)
 * - Rounded corners (0.5rem / rounded-card)
 * - Box shadow for depth
 * - Optional hover effects with lift animation
 * - Flexible structure with header, body, and footer sections
 * - Multiple padding size options
 * - Full accessibility support
 * 
 * Design System Values:
 * - Background: var(--color-primary-700) / #1f1f1f
 * - Border radius: var(--card-radius) / 0.5rem
 * - Padding: var(--card-padding) / 1.5rem (default)
 * - Shadow: var(--card-shadow) / 0 4px 6px -1px rgba(0, 0, 0, 0.3)
 * - Hover transform: translateY(-4px)
 * - Transition: 300ms ease
 * 
 * @example
 * // Simple card with children
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * 
 * @example
 * // Card with header, body, and footer
 * <Card
 *   header={<h3>Card Header</h3>}
 *   body={<p>Main content</p>}
 *   footer={<Button>Action</Button>}
 * />
 * 
 * @example
 * // Non-hoverable card with small padding
 * <Card padding="sm" hoverable={false}>
 *   <p>Compact card content</p>
 * </Card>
 * 
 * @example
 * // Interactive card with click handler
 * <Card hoverable onClick={() => console.log('clicked')} aria-label="Click to view details">
 *   <p>Clickable card</p>
 * </Card>
 */
export default function Card({
  children,
  header,
  body,
  footer,
  padding = 'md',
  hoverable = true,
  className,
  onClick,
  'aria-label': ariaLabel,
}: CardProps) {
  // Base styles matching design system
  const baseStyles = [
    'bg-primary-700',           // Card background color
    'rounded-card',             // Border radius: 0.5rem
    'shadow-card',              // Box shadow
    'transition-all',           // Smooth transitions
    'duration-base',            // 300ms transition duration
    'ease-out',                 // Easing function
  ].join(' ');

  // Hover styles - only applied when hoverable is true
  const hoverStyles = hoverable
    ? 'hover:-translate-y-1 hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.4)]'
    : '';

  // Interactive styles - only applied when onClick is provided
  const interactiveStyles = onClick
    ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900'
    : '';

  // Determine if we're using structured layout (header/body/footer) or children
  const hasStructuredContent = header || body || footer;

  // Build the card content
  const cardContent = hasStructuredContent ? (
    <>
      {header && (
        <div className="card-header mb-4 pb-4 border-b border-neutral-400/20">
          {header}
        </div>
      )}
      {body && (
        <div className="card-body">
          {body}
        </div>
      )}
      {footer && (
        <div className="card-footer mt-4 pt-4 border-t border-neutral-400/20">
          {footer}
        </div>
      )}
    </>
  ) : (
    children
  );

  // Render as button for interactive cards (better accessibility)
  if (onClick) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
        aria-label={ariaLabel}
        className={cn(
          baseStyles,
          paddingSizes[padding],
          hoverStyles,
          interactiveStyles,
          className
        )}
      >
        {cardContent}
      </div>
    );
  }

  // Render as div for non-interactive cards
  return (
    <div
      className={cn(
        baseStyles,
        paddingSizes[padding],
        hoverStyles,
        className
      )}
    >
      {cardContent}
    </div>
  );
}

/**
 * CardHeader component for consistent header styling
 * Use within Card's header prop for consistent styling
 */
export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('font-heading text-xl text-neutral-100', className)}>
      {children}
    </div>
  );
}

/**
 * CardTitle component for card titles
 */
export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn('font-heading text-xl font-semibold text-neutral-100', className)}>
      {children}
    </h3>
  );
}

/**
 * CardDescription component for card descriptions
 */
export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-neutral-300 text-sm mt-1', className)}>
      {children}
    </p>
  );
}
