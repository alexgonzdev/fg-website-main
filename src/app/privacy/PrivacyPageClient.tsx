'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Phone, Calendar } from 'lucide-react';

/**
 * Privacy Policy Page Client Component
 *
 * Client-side component for the Privacy Policy page with animations.
 *
 * Requirements addressed:
 * - Requirement 11.6: Footer SHALL display copyright information and legal links (Privacy Policy, Terms)
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 */

interface PolicySection {
  id: string;
  title: string;
  content: string[];
}

const POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'information-collection',
    title: '1. Information We Collect',
    content: [
      'We collect information you provide directly to us when you fill out our contact form, request information about our products and services, or communicate with us. This information may include your name, business name, email address, phone number, and any other information you choose to provide.',
      'We may also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.',
    ],
  },
  {
    id: 'information-use',
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect to respond to your inquiries and provide customer service, process and fulfill your requests for information about our products and services, send you marketing communications (with your consent), improve our website and services, and comply with legal obligations.',
      'We may also use your information to communicate with you about products, services, and events offered by F&G Meat Distribution that we think may be of interest to you.',
    ],
  },
  {
    id: 'information-sharing',
    title: '3. Information Sharing',
    content: [
      'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.',
      'We may also disclose your information if required by law, to protect our rights or property, or in connection with a business transaction such as a merger or acquisition.',
    ],
  },
  {
    id: 'data-security',
    title: '4. Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.',
      'We regularly review our security procedures and consider appropriate new security technology and methods to protect your data.',
    ],
  },
  {
    id: 'cookies',
    title: '5. Cookies and Tracking Technologies',
    content: [
      'Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.',
      'We use analytics services to help us understand how visitors use our website. These services may collect information about your use of our website and other websites.',
    ],
  },
  {
    id: 'your-rights',
    title: '6. Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information. To exercise these rights, please contact us using the information provided below.',
      'If you have previously consented to receive marketing communications from us, you may opt out at any time by following the unsubscribe instructions in those communications or by contacting us directly.',
    ],
  },
  {
    id: 'third-party-links',
    title: '7. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
  },
  {
    id: 'changes',
    title: '8. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.',
    ],
  },
];

const LAST_UPDATED = 'January 1, 2024';

export default function PrivacyPageClient() {
  return (
    <main className="min-h-screen bg-primary-900">
      {/* Page Header */}
      <section
        className="bg-primary-900 pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20"
        aria-labelledby="privacy-page-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" delay={0}>
            <div className="text-center">
              {/* Decorative Element */}
              <div
                className="inline-flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <div className="w-12 h-px bg-accent-500/50" />
                <div className="w-2 h-2 mx-3 bg-accent-500 rotate-45" />
                <div className="w-12 h-px bg-accent-500/50" />
              </div>

              {/* Page Title */}
              <h1
                id="privacy-page-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6"
              >
                Privacy Policy
              </h1>

              {/* Page Subtitle */}
              <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
                Your privacy is important to us. This policy explains how F&G Meat Distribution 
                collects, uses, and protects your personal information.
              </p>

              {/* Last Updated Date */}
              <div className="inline-flex items-center gap-2 text-neutral-400 text-sm">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Last Updated: {LAST_UPDATED}</span>
              </div>

              {/* Decorative Divider */}
              <div className="accent-divider mx-auto mt-8" aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Policy Content */}
      <section className="bg-primary-900 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <div className="bg-primary-800 rounded-lg p-6 sm:p-8 mb-8 border border-neutral-400/10">
              <p className="text-neutral-200 leading-relaxed">
                F&G Meat Distribution (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting 
                your privacy. This Privacy Policy describes how we collect, use, and share information 
                about you when you visit our website or interact with our services. By using our website, 
                you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </AnimatedSection>

          {/* Policy Sections */}
          <div className="space-y-8">
            {POLICY_SECTIONS.map((section, index) => (
              <AnimatedSection
                key={section.id}
                animation="slideUp"
                delay={0.1 + index * 0.05}
              >
                <div
                  id={section.id}
                  className="bg-primary-800/50 rounded-lg p-6 sm:p-8 border border-neutral-400/10"
                >
                  <h2 className="font-heading text-xl sm:text-2xl text-neutral-100 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-neutral-300 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact Section */}
          <AnimatedSection animation="fadeIn" delay={0.6}>
            <div className="mt-12 bg-primary-700 rounded-lg p-6 sm:p-8 border border-accent-500/20">
              <h2 className="font-heading text-xl sm:text-2xl text-neutral-100 mb-4">
                Contact Us
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-neutral-200">
                  <Mail className="w-5 h-5 text-accent-500" aria-hidden="true" />
                  <a
                    href="mailto:privacy@fgmeats.com"
                    className="hover:text-accent-400 transition-colors"
                  >
                    privacy@fgmeats.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-neutral-200">
                  <Phone className="w-5 h-5 text-accent-500" aria-hidden="true" />
                  <a
                    href="tel:+1-XXX-XXX-XXXX"
                    className="hover:text-accent-400 transition-colors"
                  >
                    +1-XXX-XXX-XXXX
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
