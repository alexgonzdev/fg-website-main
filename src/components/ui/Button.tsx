'use client';

import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Button variant styles based on design system:
 * - Primary: Gold background (#c9a962), dark text, hover state (#d4b978)
 * - Secondary: Transparent background, gold border, gold text, fills on hover
 * - Outline: Transparent background, neutral border, white text
 */
const variantStyles = {
  primary: [
    'bg-accent-500 text-primary-900',
    'hover:bg-accent-400 hover:-translate-y-0.5',
    'active:translate-y-0',
    'focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900',
  ].join(' '),
  secondary: [
    'bg-transparent text-accent-500 border-2 border-accent-500',
    'hover:bg-accent-500 hover:text-primary-900',
    'focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900',
  ].join(' '),
  outline: [
    'bg-transparent text-neutral-100 border border-neutral-400',
    'hover:border-neutral-200 hover:text-neutral-100',
    'focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900',
  ].join(' '),
};

/**
 * Button size styles:
 * - sm: Smaller padding, smaller text
 * - md: Default size with 44px min-height for touch target compliance
 * - lg: Larger padding, larger text
 */
const sizeStyles = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[52px]',
};

/**
 * Base button styles applied to all variants
 */
const baseStyles = [
  'inline-flex items-center justify-center',
  'font-body font-semibold',
  'rounded-button',
  'transition-all duration-fast ease-out',
  'cursor-pointer',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  'select-none',
].join(' ');

/**
 * Loading spinner component for button loading state
 */
function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin h-4 w-4', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

/**
 * Base props shared by all button types
 */
interface BaseButtonProps {
  /** Button content */
  children: ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Left icon */
  leftIcon?: ReactNode;
  /** Right icon */
  rightIcon?: ReactNode;
}

/**
 * Props for button element
 */
interface ButtonAsButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  /** Render as button element */
  as?: 'button';
  /** No href for button */
  href?: never;
}

/**
 * Props for anchor element
 */
interface ButtonAsAnchorProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  /** Render as anchor element */
  as: 'a';
  /** Link destination */
  href: string;
}

/**
 * Props for Next.js Link
 */
interface ButtonAsLinkProps extends BaseButtonProps {
  /** Render as Next.js Link */
  as?: 'link';
  /** Link destination */
  href: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps;

/**
 * Button component that can render as button, anchor, or Next.js Link
 * 
 * Features:
 * - Three variants: primary, secondary, outline
 * - Three sizes: sm, md, lg
 * - Polymorphic rendering with `as` prop
 * - Automatic Link detection when `href` is provided
 * - Full accessibility support with proper focus states
 * - Touch target compliance (44px minimum height)
 * - Loading state support
 * - Icon support (left and right)
 * 
 * @example
 * // Primary button
 * <Button variant="primary">Click me</Button>
 * 
 * @example
 * // Link button (internal)
 * <Button href="/contact" variant="secondary">Contact Us</Button>
 * 
 * @example
 * // External link
 * <Button as="a" href="https://example.com" target="_blank">External Link</Button>
 */
export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    fullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    ...restProps
  } = props;

  // Build the className
  const buttonClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  );

  // Content to render inside the button
  const content = isLoading ? (
    <>
      <LoadingSpinner className="mr-2" />
      <span>Loading...</span>
    </>
  ) : (
    <>
      {leftIcon && <span className="mr-2 flex-shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex-shrink-0">{rightIcon}</span>}
    </>
  );

  // Render as anchor element
  if (props.as === 'a') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _as, href, ...anchorProps } = restProps as Omit<ButtonAsAnchorProps, keyof BaseButtonProps>;
    return (
      <a
        href={href}
        className={buttonClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  // Render as Next.js Link (when href is provided without as="a")
  if ('href' in props && props.href) {
    const { href, ...linkProps } = restProps as Omit<ButtonAsLinkProps, keyof BaseButtonProps>;
    return (
      <Link href={href} className={buttonClassName} {...linkProps}>
        {content}
      </Link>
    );
  }

  // Render as button element (default)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as: _as, ...buttonProps } = restProps as Omit<ButtonAsButtonProps, keyof BaseButtonProps>;
  return (
    <button
      type="button"
      className={buttonClassName}
      disabled={isLoading || buttonProps.disabled}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
