'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import CompanyStory, { COMPANY_STORY_DATA } from '@/components/about/CompanyStory';
import MissionValues, { MISSION_VALUES_DATA } from '@/components/about/MissionValues';
import { MessageSquare, Phone } from 'lucide-react';

/**
 * About Page Client Component
 * 
 * Client-side component for the About Us page with animations and interactivity.
 */
export default function AboutPageClient() {
  return (
    <div className="min-h-screen w-full about-page-bg">
      {/* Page Header */}
      <AnimatedSection animation="fadeIn" className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Page Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-6">
              About F&G Meats
            </h1>
            
            {/* Page Description */}
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
              Started in 2024. Built on relationships, not transactions. We supply Florida's top restaurants, hotels, and country clubs with premium beef and specialty proteins—and we make the ordering process simple.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Decorative Divider */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </div>

      {/* Company Story Section */}
      <CompanyStory {...COMPANY_STORY_DATA} />

      {/* Mission & Values Section */}
      <MissionValues {...MISSION_VALUES_DATA} />

      {/* Contact CTA Section */}
      <section
        className="bg-primary-800/90 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        aria-labelledby="contact-cta-heading"
      >
        {/* Decorative Background Elements */}
        <div 
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Headline */}
          <AnimatedSection animation="slideUp" delay={0}>
            <h2
              id="contact-cta-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              Ready to Partner with Us?
            </h2>
            
            {/* Accent Divider */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-24 h-1 bg-accent-500 rounded-full" aria-hidden="true" />
            </div>
          </AnimatedSection>

          {/* Supporting Text */}
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
              Join the family of restaurants and hotels that trust F&G for their premium protein needs. 
              Our team is ready to discuss how we can serve your establishment with the same dedication 
              and excellence that has defined us.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="slideUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Primary Contact CTA Button */}
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                leftIcon={<MessageSquare className="w-5 h-5" aria-hidden="true" />}
              >
                Get in Touch
              </Button>

              {/* Secondary Phone CTA Button */}
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                leftIcon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Contact Our Team
              </Button>
            </div>
          </AnimatedSection>

          {/* Additional Supporting Text */}
          <AnimatedSection animation="fadeIn" delay={0.6}>
            <p className="font-body text-sm sm:text-base text-neutral-400 mt-8 sm:mt-10">
              We look forward to building a lasting partnership with your establishment.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
