'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Phone, Calendar } from 'lucide-react';

/**
 * Terms of Service Page Client Component
 *
 * Client-side component for the Terms of Service page with animations.
 *
 * Requirements addressed:
 * - Requirement 11.6: Footer SHALL display copyright information and legal links (Privacy Policy, Terms)
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 */

interface TermsSection {
  id: string;
  title: string;
  content: string[];
}

const TERMS_SECTIONS: TermsSection[] = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      'By accessing and using the F&G Meat Distribution website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.',
      'We reserve the right to modify these terms at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.',
    ],
  },
  {
    id: 'use-of-website',
    title: '2. Use of Website',
    content: [
      'You may use our website for lawful purposes only. You agree not to use the website in any way that violates any applicable federal, state, local, or international law or regulation.',
      'You agree not to attempt to gain unauthorized access to any portion of the website, other accounts, computer systems, or networks connected to the website, or to interfere with the proper working of the website.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '3. Intellectual Property Rights',
    content: [
      'The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by F&G Meat Distribution, its licensors, or other providers of such material.',
      'These materials are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any content from our website without our prior written consent.',
    ],
  },
  {
    id: 'business-inquiries',
    title: '4. Business Inquiries and Communications',
    content: [
      'When you submit an inquiry through our contact form, you agree to provide accurate and complete information. We will use this information to respond to your inquiry and may contact you regarding our products and services.',
      'Any information, feedback, or suggestions you provide to us through the website may be used by F&G Meat Distribution without any obligation to you.',
    ],
  },
  {
    id: 'product-information',
    title: '5. Product Information',
    content: [
      'The product information displayed on our website is for informational purposes only. While we strive to provide accurate and up-to-date information, we do not warrant that product descriptions, pricing, or other content on the website is accurate, complete, reliable, current, or error-free.',
      'Actual product availability, pricing, and specifications are subject to change and will be confirmed at the time of order. All business transactions are subject to separate agreements between F&G Meat Distribution and the purchasing party.',
    ],
  },
  {
    id: 'disclaimer',
    title: '6. Disclaimer of Warranties',
    content: [
      'THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. F&G MEAT DISTRIBUTION DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      'We do not warrant that the website will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected.',
    ],
  },
  {
    id: 'limitation-liability',
    title: '7. Limitation of Liability',
    content: [
      'IN NO EVENT SHALL F&G MEAT DISTRIBUTION, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.',
      'Our total liability to you for any claims arising from or related to the website shall not exceed the amount you paid to us, if any, for accessing the website during the twelve (12) months prior to the claim.',
    ],
  },
  {
    id: 'indemnification',
    title: '8. Indemnification',
    content: [
      'You agree to defend, indemnify, and hold harmless F&G Meat Distribution and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising out of or relating to your violation of these Terms of Service or your use of the website.',
    ],
  },
  {
    id: 'governing-law',
    title: '9. Governing Law',
    content: [
      'These Terms of Service and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.',
      'Any legal action or proceeding relating to your access to or use of the website shall be instituted in a state or federal court located in our principal place of business, and you agree to submit to the jurisdiction of such courts.',
    ],
  },
  {
    id: 'severability',
    title: '10. Severability',
    content: [
      'If any provision of these Terms of Service is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.',
    ],
  },
];

const LAST_UPDATED = 'January 1, 2024';

export default function TermsPageClient() {
  return (
    <main className="min-h-screen bg-primary-900">
      {/* Page Header */}
      <section
        className="bg-primary-900 pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20"
        aria-labelledby="terms-page-heading"
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
                id="terms-page-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6"
              >
                Terms of Service
              </h1>

              {/* Page Subtitle */}
              <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
                Please read these terms carefully before using the F&G Meat Distribution website. 
                By accessing our website, you agree to be bound by these terms.
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

      {/* Terms Content */}
      <section className="bg-primary-900 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <div className="bg-primary-800 rounded-lg p-6 sm:p-8 mb-8 border border-neutral-400/10">
              <p className="text-neutral-200 leading-relaxed">
                Welcome to F&G Meat Distribution. These Terms of Service (&quot;Terms&quot;) govern your 
                access to and use of our website located at fgmeats.com (the &quot;Website&quot;). 
                F&G Meat Distribution (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides this Website to offer 
                information about our premium meat distribution services to restaurants, hotels, 
                and food service establishments.
              </p>
            </div>
          </AnimatedSection>

          {/* Terms Sections */}
          <div className="space-y-8">
            {TERMS_SECTIONS.map((section, index) => (
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
          <AnimatedSection animation="fadeIn" delay={0.7}>
            <div className="mt-12 bg-primary-700 rounded-lg p-6 sm:p-8 border border-accent-500/20">
              <h2 className="font-heading text-xl sm:text-2xl text-neutral-100 mb-4">
                Contact Us
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-neutral-200">
                  <Mail className="w-5 h-5 text-accent-500" aria-hidden="true" />
                  <a
                    href="mailto:legal@fgmeats.com"
                    className="hover:text-accent-400 transition-colors"
                  >
                    legal@fgmeats.com
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
