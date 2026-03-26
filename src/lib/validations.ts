import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  businessName: z.string().min(2, 'Business name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?[\d\s-()]+$/, 'Please enter a valid phone number'),
  inquiryType: z.enum(['general', 'product', 'partnership', 'careers', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

// Infer the type from the schema for type-safe form handling
export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;

// Inquiry types
export const INQUIRY_TYPES = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'product', label: 'Product Information' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'careers', label: 'Careers' },
  { value: 'other', label: 'Other' },
] as const;

export type InquiryType = typeof INQUIRY_TYPES[number]['value'];

// Contact form data interface
export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  inquiryType: InquiryType;
  message: string;
}
