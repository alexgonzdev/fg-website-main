import { ContactFormData } from './validations';

// Email configuration from environment variables
const EMAIL_CONFIG = {
  // Resend API key - set this in your environment variables
  resendApiKey: process.env.RESEND_API_KEY,
  // Email addresses
  fromEmail: process.env.EMAIL_FROM || 'website@fgmeats.com',
  toEmail: process.env.EMAIL_TO || 'inquiries@fgmeats.com',
  // Development mode flag
  isDevelopment: process.env.NODE_ENV === 'development' || !process.env.RESEND_API_KEY,
};

// Email sending result interface
export interface EmailResult {
  success: boolean;
  message: string;
  id?: string;
  error?: string;
}

// Inquiry type labels for email subject
const INQUIRY_TYPE_LABELS: Record<string, string> = {
  general: 'General Inquiry',
  product: 'Product Information',
  partnership: 'Partnership',
  other: 'Other',
};

/**
 * Generates an HTML email template for contact form submissions
 */
function generateEmailTemplate(data: ContactFormData): string {
  const inquiryTypeLabel = INQUIRY_TYPE_LABELS[data.inquiryType] || data.inquiryType;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #0a0a0a; padding: 30px; border-radius: 8px;">
    <h1 style="color: #c9a962; margin-top: 0; font-family: 'Playfair Display', Georgia, serif;">
      New ${inquiryTypeLabel}
    </h1>
    
    <div style="background-color: #1f1f1f; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
      <h2 style="color: #e5e5e5; margin-top: 0; font-size: 18px;">Contact Information</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #a3a3a3; width: 120px;">Name:</td>
          <td style="padding: 8px 0; color: #ffffff;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a3a3a3;">Business:</td>
          <td style="padding: 8px 0; color: #ffffff;">${escapeHtml(data.businessName)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a3a3a3;">Email:</td>
          <td style="padding: 8px 0; color: #ffffff;">
            <a href="mailto:${escapeHtml(data.email)}" style="color: #c9a962;">${escapeHtml(data.email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a3a3a3;">Phone:</td>
          <td style="padding: 8px 0; color: #ffffff;">
            <a href="tel:${escapeHtml(data.phone)}" style="color: #c9a962;">${escapeHtml(data.phone)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #a3a3a3;">Inquiry Type:</td>
          <td style="padding: 8px 0; color: #ffffff;">${escapeHtml(inquiryTypeLabel)}</td>
        </tr>
      </table>
    </div>
    
    <div style="background-color: #1f1f1f; padding: 20px; border-radius: 6px;">
      <h2 style="color: #e5e5e5; margin-top: 0; font-size: 18px;">Message</h2>
      <p style="color: #ffffff; white-space: pre-wrap; margin: 0;">${escapeHtml(data.message)}</p>
    </div>
    
    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #2a2a2a;">
      <p style="color: #a3a3a3; font-size: 12px; margin: 0;">
        This email was sent from the F&G Meat Distribution website contact form.<br>
        Submitted on: ${new Date().toLocaleString('en-US', { 
          dateStyle: 'full', 
          timeStyle: 'short' 
        })}
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Generates a plain text version of the email for clients that don't support HTML
 */
function generatePlainTextEmail(data: ContactFormData): string {
  const inquiryTypeLabel = INQUIRY_TYPE_LABELS[data.inquiryType] || data.inquiryType;
  
  return `
NEW ${inquiryTypeLabel.toUpperCase()} - F&G MEAT DISTRIBUTION

CONTACT INFORMATION
-------------------
Name: ${data.name}
Business: ${data.businessName}
Email: ${data.email}
Phone: ${data.phone}
Inquiry Type: ${inquiryTypeLabel}

MESSAGE
-------
${data.message}

---
This email was sent from the F&G Meat Distribution website contact form.
Submitted on: ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
  `.trim();
}

/**
 * Escapes HTML special characters to prevent XSS in email templates
 */
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

/**
 * Sends a contact form email using Resend API
 * Falls back to console logging in development mode or when API key is not configured
 */
export async function sendContactEmail(data: ContactFormData): Promise<EmailResult> {
  const inquiryTypeLabel = INQUIRY_TYPE_LABELS[data.inquiryType] || data.inquiryType;
  const subject = `New ${inquiryTypeLabel} from ${data.businessName}`;
  
  // Development mode: log email content instead of sending
  if (EMAIL_CONFIG.isDevelopment) {
    console.log('\n========================================');
    console.log('📧 EMAIL SERVICE (Development Mode)');
    console.log('========================================');
    console.log('From:', EMAIL_CONFIG.fromEmail);
    console.log('To:', EMAIL_CONFIG.toEmail);
    console.log('Subject:', subject);
    console.log('----------------------------------------');
    console.log('Contact Details:');
    console.log('  Name:', data.name);
    console.log('  Business:', data.businessName);
    console.log('  Email:', data.email);
    console.log('  Phone:', data.phone);
    console.log('  Inquiry Type:', inquiryTypeLabel);
    console.log('----------------------------------------');
    console.log('Message:');
    console.log(data.message);
    console.log('========================================\n');
    
    return {
      success: true,
      message: 'Email logged (development mode - no API key configured)',
      id: `dev-${Date.now()}`,
    };
  }
  
  // Production mode: send via Resend API
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMAIL_CONFIG.resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: EMAIL_CONFIG.fromEmail,
        to: EMAIL_CONFIG.toEmail,
        subject: subject,
        html: generateEmailTemplate(data),
        text: generatePlainTextEmail(data),
        reply_to: data.email,
      }),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error('Resend API error:', result);
      return {
        success: false,
        message: 'Failed to send email',
        error: result.message || 'Unknown error from email service',
      };
    }
    
    return {
      success: true,
      message: 'Email sent successfully',
      id: result.id,
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Validates email configuration
 * Returns true if email service is properly configured for production
 */
export function isEmailConfigured(): boolean {
  return !!EMAIL_CONFIG.resendApiKey;
}

/**
 * Gets the current email configuration status
 */
export function getEmailConfigStatus(): {
  configured: boolean;
  mode: 'production' | 'development';
  fromEmail: string;
  toEmail: string;
} {
  return {
    configured: isEmailConfigured(),
    mode: EMAIL_CONFIG.isDevelopment ? 'development' : 'production',
    fromEmail: EMAIL_CONFIG.fromEmail,
    toEmail: EMAIL_CONFIG.toEmail,
  };
}
