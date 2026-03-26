'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ServiceAreaMap from '@/components/contact/ServiceAreaMap';
import { useState } from 'react';

/**
 * Contact Page Client Component
 *
 * Client-side component for the Contact page with form handling and interactivity.
 *
 * Requirements addressed:
 * - Requirement 7.1: Contact form captures visitor name, business name, email, phone number, and message
 * - Requirement 7.2: Contact form includes a dropdown for inquiry type
 * - Requirement 7.3: Display success confirmation message on valid submission
 * - Requirement 7.4: Display specific validation error messages for invalid/missing fields
 * - Requirement 7.5: Display direct contact information including phone number and email address
 * - Requirement 7.6: Display the company location or service area information
 * - Requirement 7.7: Include a map or visual representation of the service area
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * - Requirement 9.1: Responsive layout adapting to desktop, tablet, and mobile
 */
export default function ContactPageClient() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  /**
   * Handle successful form submission
   */
  const handleFormSuccess = () => {
    setFormStatus('success');
    setErrorMessage('');
  };

  /**
   * Handle form submission error
   */
  const handleFormError = (error: string) => {
    setFormStatus('error');
    setErrorMessage(error);
  };

  return (
    <main className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/0364f8dc-cbe6-4354-8cb8-ee4c86f91c33.png')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/85" />
      
      {/* Page Header */}
      <section
        className="pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 relative z-10"
        aria-labelledby="contact-page-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" delay={0}>
            <div className="text-center">
              {/* Decorative Element */}
              <div
                className="inline-flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <div className="w-12 h-px bg-white/50" />
                <div className="w-2 h-2 mx-3 bg-white rotate-45" />
                <div className="w-12 h-px bg-white/50" />
              </div>

              {/* Page Title */}
              <h1
                id="contact-page-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
              >
                Contact Us
              </h1>

              {/* Decorative Divider */}
              <div className="w-24 h-1 bg-white mx-auto mt-8 rounded-full" aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="pb-16 sm:pb-20 lg:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Error Banner (if form submission failed) */}
          {formStatus === 'error' && errorMessage && (
            <AnimatedSection animation="fadeIn" className="mb-8">
              <div className="bg-error/10 border border-error/30 rounded-lg p-4 text-center">
                <p className="text-error font-medium">
                  {errorMessage}
                </p>
                <p className="text-neutral-300 text-sm mt-1">
                  Please try again or contact us directly using the information on the right.
                </p>
              </div>
            </AnimatedSection>
          )}

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm
                onSuccess={handleFormSuccess}
                onError={handleFormError}
              />
            </div>

            {/* Right Column - Contact Info & Service Area Map */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Contact Information */}
              <ContactInfo
                title="Contact Information"
                description="Have questions? Reach out to us through any of these channels and our team will respond promptly."
              />

              {/* Service Area Map */}
              <ServiceAreaMap
                title="Nationwide Service Coverage"
                description="F&G Meat Distribution proudly serves premium restaurants, hotels, and food service establishments across the United States."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
