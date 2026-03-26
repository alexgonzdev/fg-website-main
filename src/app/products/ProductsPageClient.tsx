'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { MessageSquare, Phone } from 'lucide-react';

/**
 * Products Page Client Component - Combined Programs View
 * 
 * Displays all protein programs (Beef, Pork, Specialty Poultry, Exotics) with their brands
 */
export default function ProductsPageClient() {
  return (
    <main className="min-h-screen bg-primary-900 bg-cover bg-center bg-no-repeat bg-fixed relative" style={{ backgroundImage: "url('/images/DRR Valley.jpg')" }}>
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-primary-900/70" />

      {/* Page Header */}
      <AnimatedSection animation="fadeIn" className="pt-32 pb-12 md:pt-40 md:pb-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-6">
              Our Premium Meats
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
              F&G Meats partners with leading ranches and producers across the U.S. and abroad to bring carefully selected, premium beef, heritage pork, and specialty proteins to chefs, retailers, and customers nationwide.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Decorative Divider */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </div>

      {/* BEEF PROGRAMS */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4">Beef Programs</h2>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-1 bg-accent-500 rounded-full" />
              </div>
              <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                From Midwest Angus to American Wagyu—trusted ranches, consistent quality
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Greater Omaha Packing */}
            <AnimatedSection animation="fadeIn" delay={0.1}>
              <div className="group">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/images/Screenshot_25-1-2026_133933_www.dropbox.com.jpeg" 
                    alt="Greater Omaha Packing Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl text-neutral-100 mb-2">Greater Omaha Packing</h3>
                  <p className="text-neutral-400 text-sm mb-3">Premium Midwest Angus & Hereford</p>
                  <a href="/programs/beef/greater-omaha" className="text-accent-500 hover:text-accent-400 transition-colors font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* RR Ranch */}
            <AnimatedSection animation="fadeIn" delay={0.2}>
              <div className="group">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/images/DRR Stacked Logo.jpg" 
                    alt="RR Ranch Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl text-neutral-100 mb-2">RR Ranch</h3>
                  <p className="text-neutral-400 text-sm mb-3">American Angus Upper Choice/Prime</p>
                  <a href="/programs/beef/rr-ranch" className="text-accent-500 hover:text-accent-400 transition-colors font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* WinterFrost American Wagyu */}
            <AnimatedSection animation="fadeIn" delay={0.3}>
              <div className="group">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/images/Screenshot_25-1-2026_14140_www.dropbox.com.jpeg" 
                    alt="WinterFrost American Wagyu Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl text-neutral-100 mb-2">WinterFrost</h3>
                  <p className="text-neutral-400 text-sm mb-3">American Wagyu</p>
                  <a href="/programs/beef/winterfrost" className="text-accent-500 hover:text-accent-400 transition-colors font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* F&G Wagyu */}
            <AnimatedSection animation="fadeIn" delay={0.4}>
              <div className="group">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/images/logo-transparent-black.png" 
                    alt="F&G Meats Wagyu Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl text-neutral-100 mb-2">F&G Meats Wagyu</h3>
                  <p className="text-neutral-400 text-sm mb-3">American Wagyu</p>
                  <a href="/programs/beef/fg-wagyu" className="text-accent-500 hover:text-accent-400 transition-colors font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
      </div>

      {/* PORK PROGRAMS */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4">Pork Programs</h2>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-1 bg-accent-500 rounded-full" />
              </div>
              <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                Heritage Berkshire and Kurobuta—pork with character
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Snake River Farms Kurobuta */}
            <AnimatedSection animation="fadeIn" delay={0.1}>
              <div className="group">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/images/SRF Logo.jpg" 
                    alt="Snake River Farms Kurobuta Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl text-neutral-100 mb-2">Snake River Farms</h3>
                  <p className="text-neutral-400 text-sm mb-3">Kurobuta Pork</p>
                  <a href="/programs/pork/snake-river-farms-kurobuta" className="text-accent-500 hover:text-accent-400 transition-colors font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* F&G Meats Berkshire */}
            <AnimatedSection animation="fadeIn" delay={0.2}>
              <div className="group">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/images/logo-transparent-black.png" 
                    alt="F&G Meats Berkshire Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl text-neutral-100 mb-2">F&G Meats</h3>
                  <p className="text-neutral-400 text-sm mb-3">Berkshire Pork</p>
                  <a href="/programs/pork/fg-berkshire" className="text-accent-500 hover:text-accent-400 transition-colors font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
      </div>

      {/* SPECIALTY POULTRY PROGRAMS */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4">Specialty Poultry</h2>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-1 bg-accent-500 rounded-full" />
              </div>
              <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                Traditional breeding, fine dining quality
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
            {/* Palmetto Farms */}
            <AnimatedSection animation="fadeIn" delay={0.1}>
              <div className="group">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/images/Screenshot_25-1-2026_141236_www.fpwmeats.com.jpeg" 
                    alt="Palmetto Farms Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl text-neutral-100 mb-2">Palmetto Farms</h3>
                  <p className="text-neutral-400 text-sm mb-3">Domestic Poussin/Squab/Cornish Hen</p>
                  <a href="/programs/specialty-poultry/palmetto-farms" className="text-accent-500 hover:text-accent-400 transition-colors font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
      </div>

      {/* EXOTICS PROGRAMS */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4">Exotics</h2>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-1 bg-accent-500 rounded-full" />
              </div>
              <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                Aged beef, rare programs, unforgettable experiences
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
            {/* Vintage Beef Co */}
            <AnimatedSection animation="fadeIn" delay={0.1}>
              <div className="group">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/images/Screenshot_25-1-2026_141713_www.bing.com.jpeg" 
                    alt="Vintage Beef Co Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl text-neutral-100 mb-2">Vintage Beef Co</h3>
                  <p className="text-neutral-400 text-sm mb-3">Vaca Vieja/Galiciana</p>
                  <a href="/programs/exotics/vintage-beef-co" className="text-accent-500 hover:text-accent-400 transition-colors font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Inquiry CTA Section */}
      <section className="bg-primary-800/90 py-16 sm:py-20 lg:py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection animation="slideUp" delay={0}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4">
              Interested in Our Products?
            </h2>
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-24 h-1 bg-accent-500 rounded-full" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.2}>
            <p className="font-body text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
              Questions about specific products? Want to know more about a program? We're here to help.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                leftIcon={<MessageSquare className="w-5 h-5" aria-hidden="true" />}
              >
                Inquire About Products
              </Button>
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
        </div>
      </section>
    </main>
  );
}
