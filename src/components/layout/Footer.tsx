'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS, LEGAL_LINKS } from '@/lib/constants';
import { getCurrentYear } from '@/lib/utils';
import SocialLinks from '@/components/ui/SocialLinks';

/**
 * Footer Component
 * 
 * Site-wide footer with navigation, contact info, social links, and legal links.
 * This component implements a dark premium aesthetic consistent with the site design.
 * 
 * Implements Requirements:
 * - 11.1: Display a consistent footer across all pages
 * - 11.2: Include navigation links to all main sections
 * - 11.3: Display contact information (phone, email)
 * - 11.4: Display the company address or service area
 * - 11.5: Include social media links if applicable
 * - 11.6: Display copyright information and legal links (Privacy Policy, Terms)
 * - 11.7: Maintain the dark premium aesthetic consistent with the site design
 * 
 * Layout:
 * - Responsive: stacked on mobile, multi-column on desktop
 * - Navigation links section (Task 3.5)
 * - Contact info and social links (Task 3.6)
 * - Legal links and copyright (Task 3.7)
 */

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer 
      className={`
        bg-primary-800 border-t border-neutral-400/20
        ${className}
      `}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link 
                href="/" 
                className="inline-block group"
                aria-label="F&G Meat Distribution - Home"
              >
                <img 
                  src="/images/fnglogo.png" 
                  alt="F&G Meats - Premium Beef Distribution"
                  className="h-24 w-auto group-hover:opacity-80 transition-opacity duration-300"
                  style={{ maxWidth: '400px' }}
                />
              </Link>
              <p className="mt-4 text-sm text-neutral-300 max-w-xs">
                F&G Meats partners with leading ranches and producers across the U.S. and abroad to bring carefully selected, premium beef, heritage pork, and specialty proteins to chefs, retailers, and customers nationwide.
              </p>
            </div>

            {/* Navigation Links Section */}
            <div className="lg:col-span-1">
              <h3 className="font-heading text-lg font-semibold text-neutral-100 mb-4">
                Quick Links
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="
                          text-sm text-neutral-300 
                          hover:text-accent-500 
                          transition-colors duration-300
                          inline-flex items-center
                          min-h-[44px] py-2
                          focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2 rounded-sm
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Info Section */}
            <div className="lg:col-span-1">
              <h3 className="font-heading text-lg font-semibold text-neutral-100 mb-4">
                Contact Us
              </h3>
              <address className="not-italic space-y-1">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, '')}`}
                  className="
                    flex items-center gap-3 text-sm text-neutral-300
                    hover:text-accent-500 transition-colors duration-300
                    group min-h-[44px] py-2 rounded-sm
                    focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2
                  "
                  aria-label={`Call us at ${CONTACT_INFO.phone}`}
                >
                  <Phone 
                    size={18} 
                    strokeWidth={1.5}
                    className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{CONTACT_INFO.phone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="
                    flex items-center gap-3 text-sm text-neutral-300
                    hover:text-accent-500 transition-colors duration-300
                    group min-h-[44px] py-2 rounded-sm
                    focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2
                  "
                  aria-label={`Email us at ${CONTACT_INFO.email}`}
                >
                  <Mail 
                    size={18} 
                    strokeWidth={1.5}
                    className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{CONTACT_INFO.email}</span>
                </a>

                {/* Address */}
                <div
                  className="flex items-center gap-3 text-sm text-neutral-300 min-h-[44px] py-2"
                  aria-label={`Our location: ${CONTACT_INFO.address}`}
                >
                  <MapPin 
                    size={18} 
                    strokeWidth={1.5}
                    className="text-accent-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </address>
            </div>

            {/* Social Links Section */}
            <div className="lg:col-span-1">
              <h3 className="font-heading text-lg font-semibold text-neutral-100 mb-4">
                Follow Us
              </h3>
              <p className="text-sm text-neutral-300 mb-4">
                Stay connected with F&G for the latest updates and industry insights.
              </p>
              <SocialLinks 
                links={SOCIAL_LINKS} 
                layout="horizontal" 
                size="md"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar - Legal Links and Copyright */}
        <div className="py-6 border-t border-neutral-400/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright Notice */}
            <p className="text-sm text-neutral-300 text-center sm:text-left">
              © {getCurrentYear()} F&G Meat Distribution. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav aria-label="Legal navigation">
              <ul className="flex items-center gap-4 sm:gap-6">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="
                        text-sm text-neutral-300
                        hover:text-accent-500
                        transition-colors duration-300
                        inline-flex items-center
                        min-h-[44px] py-2
                        focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2 rounded-sm
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
