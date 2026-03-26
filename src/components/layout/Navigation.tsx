'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

/**
 * Navigation Component
 * 
 * Responsive navigation bar with:
 * - Desktop: Horizontal navigation bar with hover effects and dropdown support
 * - Mobile: Hamburger icon that triggers full-screen overlay menu
 * - Active link styling with accent color
 * - Fixed positioning at top of viewport
 * - Semi-transparent background with blur effect on scroll
 * - Hover feedback: animated underline effect on desktop links
 * - Dropdown menus for navigation items with submenus
 * - Accessibility: Focus trapping in mobile menu, ARIA attributes
 * - Respects prefers-reduced-motion preference
 * 
 * Implements Requirements:
 * - 1.3: Mobile hamburger menu
 * - 1.4: Full-screen overlay for mobile navigation
 * - 1.5: Fixed positioning at top of viewport during scrolling
 * - 1.6: Visual feedback (hover animations) on desktop navigation links
 */

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  // Use the usePathname hook to detect current route
  const pathname = usePathname();
  
  // Use provided currentPath or fall back to pathname from hook
  const activePath = currentPath ?? pathname;
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Desktop dropdown state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Scroll state for blur effect
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Refs for focus management
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const lastLinkRef = useRef<HTMLAnchorElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Handle dropdown hover
  const handleDropdownEnter = useCallback((label: string) => {
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const isDropdownClick = Object.values(dropdownRefs.current).some(ref => 
        ref?.contains(target)
      );
      
      if (!isDropdownClick && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isMobileMenuOpen) {
          closeMobileMenu();
          openButtonRef.current?.focus();
        } else if (activeDropdown) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, activeDropdown, closeMobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Focus management - focus first element when menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Small delay to ensure animation has started
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  // Scroll detection for blur effect
  // Adds semi-transparent background with blur when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      // Trigger blur effect after scrolling 20px
      const scrollThreshold = 20;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus trap within mobile menu
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key !== 'Tab' || !isMobileMenuOpen) return;

    const focusableElements = menuRef.current?.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }, [isMobileMenuOpen]);

  // Handle click outside to close menu
  const handleOverlayClick = useCallback((event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeMobileMenu();
    }
  }, [closeMobileMenu]);

  // Animation duration based on reduced motion preference
  const animationDuration = prefersReducedMotion ? 0 : 0.3;
  const exitDuration = prefersReducedMotion ? 0 : 0.2;

  // Animation variants for the overlay
  const overlayVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: 'easeOut' as const
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: exitDuration,
        ease: 'easeIn' as const
      }
    }
  };

  // Animation variants for the menu content
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: prefersReducedMotion ? 0 : -20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: animationDuration,
        ease: 'easeOut' as const,
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        delayChildren: prefersReducedMotion ? 0 : 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: prefersReducedMotion ? 0 : -20,
      transition: {
        duration: exitDuration,
        ease: 'easeIn' as const
      }
    }
  };

  // Animation variants for individual menu items
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: animationDuration,
        ease: 'easeOut' as const
      }
    },
    exit: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 10,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.15
      }
    }
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.15,
        ease: 'easeOut' as const
      }
    },
    exit: { 
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: 'easeIn' as const
      }
    }
  };

  return (
    <>
      <header>
        <nav 
          className={`
            fixed top-0 left-0 right-0 w-full z-40
            transition-all duration-300 ease-in-out
            ${isScrolled 
              ? 'bg-primary-900/90 backdrop-blur-md shadow-lg' 
              : 'bg-primary-900'
            }
          `}
          role="navigation"
          aria-label="Main navigation"
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-nav-mobile md:h-nav">
            {/* Logo/Brand Name - Left side */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="flex items-center group"
                aria-label={`${SITE_NAME} - Home`}
              >
                {/* F&G Logo - Simple img tag */}
                <img 
                  src="/images/fnglogo.png" 
                  alt="F&G Meats - Premium Beef"
                  className="h-16 sm:h-24 w-auto"
                  style={{ maxWidth: '400px' }}
                />
              </Link>
            </div>

            {/* Desktop Navigation Links - Right side */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = activePath === link.href || (link.dropdown && link.dropdown.some(item => activePath === item.href));
                const hasDropdown = link.dropdown && link.dropdown.length > 0;
                
                if (hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(link.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        className={`
                          relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium
                          transition-colors duration-300 group rounded-sm flex items-center gap-1
                          focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2
                          ${isActive 
                            ? 'text-accent-500' 
                            : 'text-neutral-200 hover:text-accent-500'
                          }
                        `}
                        aria-expanded={activeDropdown === link.label}
                        aria-haspopup="true"
                        onClick={() => {
                          // Toggle dropdown on click as fallback
                          setActiveDropdown(activeDropdown === link.label ? null : link.label);
                        }}
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === link.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        {/* Active indicator underline - static for active links */}
                        {isActive && (
                          <span 
                            className="absolute bottom-0 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-accent-500"
                            aria-hidden="true"
                          />
                        )}
                        {/* Hover underline animation - only for non-active links */}
                        {!isActive && (
                          <span 
                            className="absolute bottom-0 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-accent-500 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            ref={(el) => { dropdownRefs.current[link.label] = el; }}
                            className="absolute top-full left-0 mt-2 w-48 bg-primary-800 border border-neutral-600 rounded-md shadow-xl overflow-hidden"
                            style={{ zIndex: 9999 }}
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onMouseEnter={() => setActiveDropdown(link.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            {link.dropdown?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-3 text-sm text-neutral-200 hover:text-accent-500 hover:bg-primary-700 transition-colors duration-200 border-b border-neutral-700 last:border-b-0"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium
                      transition-colors duration-300 group rounded-sm
                      focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2
                      ${isActive 
                        ? 'text-accent-500' 
                        : 'text-neutral-200 hover:text-accent-500'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {/* Active indicator underline - static for active links */}
                    {isActive && (
                      <span 
                        className="absolute bottom-0 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-accent-500"
                        aria-hidden="true"
                      />
                    )}
                    {/* Hover underline animation - only for non-active links */}
                    {!isActive && (
                      <span 
                        className="absolute bottom-0 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-accent-500 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button - Hamburger icon */}
            <div className="md:hidden">
              <button
                ref={openButtonRef}
                type="button"
                onClick={toggleMobileMenu}
                className="p-2 text-neutral-200 hover:text-accent-500 transition-colors duration-300 touch-target rounded-md focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {/* Hamburger icon - transforms to X when open */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    initial={false}
                    animate={isMobileMenuOpen ? { d: 'M6 18L18 6' } : { d: 'M4 6h16' }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    initial={false}
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, d: 'M4 12h16' }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    initial={false}
                    animate={isMobileMenuOpen ? { d: 'M6 6l12 12' } : { d: 'M4 18h16' }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        </nav>
      </header>

      {/* Spacer to prevent content from being hidden behind fixed navigation */}
      <div className="h-nav-mobile md:h-nav" aria-hidden="true" />

      {/* Mobile Menu Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            className="fixed inset-0 z-50 md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleOverlayClick}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-primary-900/95 backdrop-blur-sm" />
            
            {/* Menu Content */}
            <motion.div
              className="relative flex flex-col h-full"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between px-4 h-nav-mobile border-b border-neutral-400/20">
                {/* Logo */}
                <Link 
                  href="/" 
                  className="flex items-center group"
                  onClick={closeMobileMenu}
                  aria-label={`${SITE_NAME} - Home`}
                >
                  <img 
                    src="/images/fnglogo.png" 
                    alt="F&G Meats - Premium Beef"
                    className="h-12 w-auto"
                    style={{ maxWidth: '300px' }}
                  />
                </Link>
                
                {/* Close button */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMobileMenu}
                  className="p-2 text-neutral-200 hover:text-accent-500 transition-colors duration-300 touch-target rounded-md focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center px-8">
                <ul className="space-y-2">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = activePath === link.href || (link.dropdown && link.dropdown.some(item => activePath === item.href));
                    const isFirst = index === 0;
                    const isLast = index === NAV_LINKS.length - 1;
                    const hasDropdown = link.dropdown && link.dropdown.length > 0;
                    
                    return (
                      <motion.li key={link.href} variants={itemVariants}>
                        {hasDropdown ? (
                          <div className="space-y-2">
                            <div className={`
                              block py-4 text-2xl font-heading font-medium text-center
                              ${isActive ? 'text-accent-500' : 'text-neutral-100'}
                            `}>
                              {link.label}
                              {isActive && (
                                <motion.div 
                                  className="mx-auto mt-2 w-12 h-0.5 bg-accent-500"
                                  layoutId="mobile-active-indicator"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                            <div className="pl-4 space-y-1">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMobileMenu}
                                  className={`
                                    block py-2 text-lg font-body text-center
                                    transition-colors duration-300 touch-target rounded-md
                                    focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2
                                    ${activePath === item.href 
                                      ? 'text-accent-500' 
                                      : 'text-neutral-200 hover:text-accent-500 active:text-accent-400'
                                    }
                                  `}
                                  aria-current={activePath === item.href ? 'page' : undefined}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            ref={isFirst ? firstLinkRef : isLast ? lastLinkRef : undefined}
                            href={link.href}
                            onClick={closeMobileMenu}
                            className={`
                              block py-4 text-2xl font-heading font-medium text-center
                              transition-colors duration-300 touch-target rounded-md
                              focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2
                              ${isActive 
                                ? 'text-accent-500' 
                                : 'text-neutral-100 hover:text-accent-500 active:text-accent-400'
                              }
                            `}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {link.label}
                            {/* Active indicator */}
                            {isActive && (
                              <motion.div 
                                className="mx-auto mt-2 w-12 h-0.5 bg-accent-500"
                                layoutId="mobile-active-indicator"
                                aria-hidden="true"
                              />
                            )}
                          </Link>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer area with subtle branding */}
              <motion.div 
                className="px-8 py-6 text-center border-t border-neutral-400/20"
                variants={itemVariants}
              >
                <p className="text-sm text-neutral-300">
                  Premium Meat Distribution
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
