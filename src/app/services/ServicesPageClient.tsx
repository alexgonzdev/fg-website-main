'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceOverview, {
  SERVICE_OVERVIEW_DATA,
} from '@/components/services/ServiceOverview';
import DeliveryAreas, {
  DELIVERY_AREAS_DATA,
} from '@/components/services/DeliveryAreas';
import OrderingProcess, {
  ORDERING_PROCESS_DATA,
} from '@/components/services/OrderingProcess';
import AccountRequirements, {
  ACCOUNT_REQUIREMENTS_DATA,
} from '@/components/services/AccountRequirements';

/**
 * Services Page Client Component
 *
 * Client-side component for the Services page with animations and interactivity.
 *
 * Requirements addressed:
 * - Requirement 6.1: Describe the distribution services offered by F&G
 * - Requirement 6.2: Display information about delivery areas and geographic coverage
 * - Requirement 6.3: Explain the ordering process for new and existing clients
 * - Requirement 6.4: Highlight any minimum order requirements or account setup procedures
 * - Requirement 6.5: Present information in an easy-to-scan format
 * - Requirement 6.6: Include a CTA directing visitors to contact F&G for service inquiries
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 */
export default function ServicesPageClient() {
  return (
    <div 
      className="min-h-screen w-full"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/cannonball%20truck%20.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Page Header */}
      <section
        className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
        aria-labelledby="services-page-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                id="services-page-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6"
              >
                Our Distribution Services
              </h1>

              {/* Page Subtitle */}
              <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive meat distribution solutions tailored for premium
                restaurants, hotels, and food service establishments. Experience
                the F&G difference in quality, reliability, and service.
              </p>

              {/* Decorative Divider */}
              <div className="accent-divider mx-auto mt-8" aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview Section */}
      <ServiceOverview
        title={SERVICE_OVERVIEW_DATA.title}
        description={SERVICE_OVERVIEW_DATA.description}
        services={SERVICE_OVERVIEW_DATA.services}
      />

      {/* Delivery Areas Section */}
      <DeliveryAreas
        title={DELIVERY_AREAS_DATA.title}
        description={DELIVERY_AREAS_DATA.description}
        regions={DELIVERY_AREAS_DATA.regions}
        mapImage={DELIVERY_AREAS_DATA.mapImage}
      />

      {/* Ordering Process Section */}
      <OrderingProcess
        title={ORDERING_PROCESS_DATA.title}
        steps={ORDERING_PROCESS_DATA.steps}
      />

      {/* Account Requirements Section (includes CTA to Contact) */}
      <AccountRequirements
        title={ACCOUNT_REQUIREMENTS_DATA.title}
        requirements={ACCOUNT_REQUIREMENTS_DATA.requirements}
        minimumOrder={ACCOUNT_REQUIREMENTS_DATA.minimumOrder}
        ctaText={ACCOUNT_REQUIREMENTS_DATA.ctaText}
        ctaHref={ACCOUNT_REQUIREMENTS_DATA.ctaHref}
      />
    </div>
  );
}
