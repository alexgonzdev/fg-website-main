'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

/**
 * Props for the ContactInfo component
 */
export interface ContactInfoProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Phone number to display (defaults to CONTACT_INFO.phone) */
  phone?: string;
  /** Email address to display (defaults to CONTACT_INFO.email) */
  email?: string;
  /** Physical address to display (defaults to CONTACT_INFO.address) */
  address?: string;
  /** Whether to show business hours */
  showBusinessHours?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Contact info item component for consistent styling
 */
interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  delay?: number;
}

function ContactInfoItem({ icon, label, value, href, delay = 0 }: ContactInfoItemProps) {
  const content = (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-primary-800/50 border border-neutral-400/10 transition-all duration-base hover:border-white/30 hover:bg-primary-800">
      {/* Icon Container */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white/70 mb-1">{label}</p>
        <p className="text-white font-medium break-words">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <AnimatedSection animation="slideUp" delay={delay}>
        <a
          href={href}
          className="block focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
          aria-label={`${label}: ${value}`}
        >
          {content}
        </a>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection animation="slideUp" delay={delay}>
      {content}
    </AnimatedSection>
  );
}

/**
 * ContactInfo Component
 * 
 * Displays contact information including phone number, email address,
 * and physical address for the Contact page.
 * 
 * Features:
 * - Phone number with click-to-call functionality
 * - Email address with mailto link
 * - Physical address display
 * - Optional business hours section
 * - Dark theme with gold accents (--color-accent-500: #c9a962)
 * - AnimatedSection wrapper for scroll animations
 * - Lucide React icons (Phone, Mail, MapPin)
 * - Responsive design adapting to all screen sizes
 * - Hover effects for interactive feel
 * - Accessible with proper ARIA labels
 * 
 * Requirements addressed:
 * - Requirement 7.5: Display direct contact information including phone number and email address
 * - Requirement 7.6: Display the company location or service area information
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * - Requirement 9.1: Responsive layout adapting to desktop, tablet, and mobile
 * 
 * @example
 * <ContactInfo
 *   title="Contact Information"
 *   description="Reach out to us through any of these channels"
 * />
 * 
 * @example
 * // With custom contact details
 * <ContactInfo
 *   phone="+1-555-123-4567"
 *   email="sales@fgmeats.com"
 *   address="123 Main St, City, State 12345"
 *   showBusinessHours
 * />
 */
export default function ContactInfo({
  title = 'Contact Information',
  description = 'Have questions? Reach out to us through any of these channels and our team will respond promptly.',
  phone = CONTACT_INFO.phone,
  email = CONTACT_INFO.email,
  address = CONTACT_INFO.address,
  showBusinessHours = true,
  className = '',
}: ContactInfoProps) {
  // Format phone number for tel: link (remove formatting)
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;
  
  // Format email for mailto: link
  const emailHref = `mailto:${email}`;

  return (
    <section
      className={`bg-primary-700 rounded-card border border-neutral-400/10 shadow-card overflow-hidden ${className}`}
      aria-labelledby="contact-info-heading"
    >
      {/* Header */}
      <AnimatedSection animation="fadeIn" delay={0}>
        <div className="p-6 sm:p-8 border-b border-neutral-400/10">
          <h3
            id="contact-info-heading"
            className="font-heading text-xl sm:text-2xl text-white mb-2"
          >
            {title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
          <div className="w-16 h-1 bg-white mt-4" />
        </div>
      </AnimatedSection>

      {/* Contact Details */}
      <div className="p-6 sm:p-8 space-y-4">
        {/* Phone */}
        <ContactInfoItem
          icon={<Phone className="w-5 h-5 text-white" aria-hidden="true" />}
          label="Phone"
          value={phone}
          href={phoneHref}
          delay={0.1}
        />

        {/* Email */}
        <ContactInfoItem
          icon={<Mail className="w-5 h-5 text-white" aria-hidden="true" />}
          label="Email"
          value={email}
          href={emailHref}
          delay={0.2}
        />
      </div>

      {/* Footer Note */}
      <AnimatedSection animation="fadeIn" delay={0.5}>
        <div className="px-6 sm:px-8 py-4 bg-primary-800/50 border-t border-neutral-400/10">
          <p className="text-white/70 text-xs sm:text-sm text-center">
            <span className="text-white">●</span>{' '}
            We typically respond to inquiries within 1-2 business days.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}

/**
 * Default data for the ContactInfo component
 * Can be used as default props or for demonstration purposes
 */
export const CONTACT_INFO_DATA: ContactInfoProps = {
  title: 'Contact Information',
  description: 'Have questions? Reach out to us through any of these channels and our team will respond promptly.',
  phone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: CONTACT_INFO.address,
  showBusinessHours: true,
};

