import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { sendContactEmail, getEmailConfigStatus } from '@/lib/email';
import { ZodError } from 'zod';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Validate with Zod schema
    const validated = contactFormSchema.parse(data);
    
    // Log the form submission
    console.log('Contact form submission received:', {
      name: validated.name,
      businessName: validated.businessName,
      email: validated.email,
      phone: validated.phone,
      inquiryType: validated.inquiryType,
      timestamp: new Date().toISOString(),
    });
    
    // Send email using the email service
    const emailResult = await sendContactEmail(validated);
    
    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      
      // Return a user-friendly error but don't expose internal details
      return NextResponse.json(
        { 
          success: false, 
          message: 'We received your inquiry but encountered an issue sending the notification. Our team will still review your submission.' 
        },
        { status: 500 }
      );
    }
    
    // Log email status for monitoring
    const emailStatus = getEmailConfigStatus();
    console.log('Email sent successfully:', {
      emailId: emailResult.id,
      mode: emailStatus.mode,
      configured: emailStatus.configured,
    });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. We will be in touch soon!' 
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      const fieldErrors = error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      }));
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: fieldErrors 
        },
        { status: 400 }
      );
    }
    
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid JSON in request body' 
        },
        { status: 400 }
      );
    }
    
    // Handle other unexpected errors
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

