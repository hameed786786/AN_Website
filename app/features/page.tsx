import Navbar from "@/components/layout/navbar";
import FooterSection from "@/components/sections/footer-section";

import FeaturesHeroSection from "@/components/sections/features-hero-section";
import FeaturesStickyNav from "@/components/sections/features-sticky-nav";
import FeatureShowcaseSection from "@/components/sections/ai-automation-section";
import CRMSection from "@/components/sections/crm-section";
import BillingSection from "@/components/sections/billing-section";
import FeedbackSection from "@/components/sections/feedback-section";
import IntegrationsSection from "@/components/sections/integrations-section";
import AnalyticsSection from "@/components/sections/analytics-section";
import ComparisonSection from "@/components/sections/comparison-section";
import TaskManagementSection from "@/components/sections/task-management-section";
export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen bg-[#F8F8F8] overflow-x-clip">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <FeaturesHeroSection />
    
      {/* Feature Sections Container (Limits Sticky Nav scope) */}
      <div className="relative w-full">
        {/* Sticky Nav */}
        <FeaturesStickyNav />
        {/* AI Automation etc. */}
        <FeatureShowcaseSection />
        <TaskManagementSection />
        <CRMSection />
        <BillingSection />
        <FeedbackSection />
        <IntegrationsSection />
        <AnalyticsSection />
      </div>

      <div id="comparison-section">
        <ComparisonSection />
      </div>
      <FooterSection />
    </main>
  );
}