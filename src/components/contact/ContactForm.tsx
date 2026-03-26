'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Building2, Mail, Phone, MessageSquare, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { contactFormSchema, INQUIRY_TYPES, type ContactFormData } from '@/lib/validations';
import { cn } from '@/lib/utils';

/**
 * Props for the ContactForm component
 */
export interface ContactFormProps {
  /** Callback function called on successful form submission */
  onSuccess: () => void;
  /** Callback function called when an error occurs */
  onError: (error: string) => void;
}

/**
 * Form field wrapper component for consistent styling
 */
interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function FormField({ label, htmlFor, required = false, error, children, icon }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-white"
      >
        {label}
        {required && <span className="text-white ml-1">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
            {icon}
          </div>
        )}
        {children}
      </div>
      {error && (
        <p className="text-sm text-error flex items-center gap-1.5 mt-1" role="alert">
          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * ContactForm component - Handles business inquiry submissions
 * 
 * Features:
 * - All required form fields (name, businessName, email, phone, inquiryType, message)
 * - React Hook Form for form state management with Zod validation via zodResolver
 * - Real-time validation on blur with inline error messages
 * - Submit button disabled until form is valid
 * - Loading state during submission
 * - Success message displayed on completion
 * - Error handling with user-friendly messages
 * - Dark theme with gold accents
 * - AnimatedSection wrapper for scroll animations
 * - Accessible form with proper labels and ARIA attributes
 * 
 * Design System Integration:
 * - Uses Playfair Display for headings, Inter for body text
 * - Dark theme with gold accents (--color-accent-500: #c9a962)
 * - Consistent spacing and typography from design tokens
 * 
 * @example
 * <ContactForm
 *   onSuccess={() => console.log('Form submitted successfully')}
 *   onError={(error) => console.error('Form error:', error)}
 * />
 */
export default function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Enable real-time validation on blur
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: '',
    },
  });

  /**
   * Handle form submission
   */
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - will be replaced with actual API route in Task 8.7
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Log form data for development
      console.log('Form submitted:', data);
      
      // Reset form and show success state
      reset();
      setIsSuccess(true);
      onSuccess();
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      onError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input base styles
  const inputBaseStyles = cn(
    'w-full bg-primary-700 border border-neutral-400 rounded-md',
    'text-white placeholder:text-neutral-400',
    'transition-all duration-fast',
    'focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  );

  const inputWithIconStyles = cn(inputBaseStyles, 'pl-12 pr-4 py-3');
  const inputWithoutIconStyles = cn(inputBaseStyles, 'px-4 py-3');

  // Success state
  if (isSuccess) {
    return (
      <AnimatedSection animation="fadeIn" className="w-full">
        <div className="bg-primary-700 rounded-lg p-8 text-center border border-success/30">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-heading text-2xl text-white mb-3">
            Thank You for Reaching Out!
          </h3>
          <p className="text-white/90 max-w-md mx-auto">
            We&apos;ve received your inquiry and will get back to you within 1-2 business days.
            Our team is excited to discuss how we can serve your business.
          </p>
          <Button
            variant="secondary"
            className="mt-6"
            onClick={() => setIsSuccess(false)}
          >
            Send Another Message
          </Button>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection animation="slideUp" className="w-full">
      <div className="bg-primary-700 rounded-lg p-6 md:p-8 border border-neutral-400/20">
        {/* Form Header */}
        <div className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-2">
            Get in Touch
          </h2>
          <p className="text-white/90">
            Fill out the form below and our team will respond promptly.
          </p>
          <div className="w-16 h-1 bg-white mt-4" />
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Name and Business Name - Two columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <FormField
              label="Your Name"
              htmlFor="name"
              required
              error={errors.name?.message}
              icon={<User className="w-5 h-5" />}
            >
              <input
                id="name"
                type="text"
                placeholder="John Smith"
                className={inputWithIconStyles}
                disabled={isSubmitting}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name')}
              />
            </FormField>

            {/* Business Name Field */}
            <FormField
              label="Business Name"
              htmlFor="businessName"
              required
              error={errors.businessName?.message}
              icon={<Building2 className="w-5 h-5" />}
            >
              <input
                id="businessName"
                type="text"
                placeholder="Your Restaurant or Company"
                className={inputWithIconStyles}
                disabled={isSubmitting}
                aria-invalid={errors.businessName ? 'true' : 'false'}
                aria-describedby={errors.businessName ? 'businessName-error' : undefined}
                {...register('businessName')}
              />
            </FormField>
          </div>

          {/* Email and Phone - Two columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Field */}
            <FormField
              label="Email Address"
              htmlFor="email"
              required
              error={errors.email?.message}
              icon={<Mail className="w-5 h-5" />}
            >
              <input
                id="email"
                type="email"
                placeholder="john@restaurant.com"
                className={inputWithIconStyles}
                disabled={isSubmitting}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email')}
              />
            </FormField>

            {/* Phone Field */}
            <FormField
              label="Phone Number"
              htmlFor="phone"
              required
              error={errors.phone?.message}
              icon={<Phone className="w-5 h-5" />}
            >
              <input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className={inputWithIconStyles}
                disabled={isSubmitting}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                {...register('phone')}
              />
            </FormField>
          </div>

          {/* Inquiry Type Field */}
          <FormField
            label="Inquiry Type"
            htmlFor="inquiryType"
            required
            error={errors.inquiryType?.message}
          >
            <div className="relative">
              <select
                id="inquiryType"
                className={cn(inputWithoutIconStyles, 'appearance-none cursor-pointer pr-10')}
                disabled={isSubmitting}
                aria-invalid={errors.inquiryType ? 'true' : 'false'}
                aria-describedby={errors.inquiryType ? 'inquiryType-error' : undefined}
                {...register('inquiryType')}
              >
                {INQUIRY_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
            </div>
          </FormField>

          {/* Message Field */}
          <FormField
            label="Message"
            htmlFor="message"
            required
            error={errors.message?.message}
            icon={<MessageSquare className="w-5 h-5" />}
          >
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your business needs, the products you're interested in, or any questions you have..."
              className={cn(inputWithIconStyles, 'resize-none pt-3')}
              disabled={isSubmitting}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              {...register('message')}
            />
          </FormField>

          {/* Required Fields Note */}
          <p className="text-sm text-white/70">
            <span className="text-white">*</span> Required fields
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={isSubmitting}
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </Button>
        </form>
      </div>
    </AnimatedSection>
  );
}
