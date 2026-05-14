import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero-section";
import  PoweredSection from "@/components/sections/powered-section";
import WhySection from "@/components/sections/why-section"; 
import FAQSection from "@/components/sections/faq-section";
import TestimonialSection from "@/components/sections/testimonial-section";
import FooterSection from "@/components/sections/footer-section";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <PoweredSection />
        <WhySection />
        <FAQSection />
        <TestimonialSection />
        <FooterSection />
      </div>
    </main>
  );
}