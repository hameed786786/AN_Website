import CTAButton from "@/components/ui/cta-button";
import StripePattern from "@/components/ui/stripe-pattern";
import CanvasGrid from "../ui/canvas-grid";
import FloatingLogoCard from "../ui/floating-logo-card";

export default function FeaturesHeroSection() {
  return (
    <section className="pb-6 w-full max-w-[1440px] mx-auto min-h-[759px] relative flex flex-col justify-center">
      <CanvasGrid />

      <div className="">
        <div className="absolute right-[-220px] top-[100px] z-0 h-[280px] w-[580px] rounded-full bg-[#FFF1BE]/90 blur-[100px]" />

        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center px-10 py-14 text-center md:px-0 md:py-20">
          {/* Heading */}
          <div className="ml-[80px] flex flex-col items-center">
            {/* Line 1 */}
            <h1
              className="text-[52px] font-bold leading-[115%] tracking-[-3.6px] text-[#171717] md:text-[92px]"
              style={{
                fontFamily: "Geist",
              }}
            >
              Everything your agencyneeds.
            </h1>

            {/* Line 2 */}
            <div className="mt-[-10px] flex items-center justify-center gap-5 md:gap-7">
              <h1
                className="text-[52px] font-bold leading-[115%] tracking-[-3.6px] text-[#171717] md:text-[92px]"
                style={{
                  fontFamily: "Geist",
                }}
              >
                One
              </h1>

              {/* Floating Logo */}
              <FloatingLogoCard />

              <h1
                className="text-[52px] font-bold leading-[115%] tracking-[-3.6px] text-[#171717] md:text-[92px]"
                style={{
                  fontFamily: "Geist",
                }}
              >
                system.
              </h1>
            </div>
          </div>

          {/* Description */}
          <p
            className="mt-8 max-w-[1066px] text-center text-[20px] font-normal leading-[100%] text-[#7A7A7A] capitalize"
            style={{
              fontFamily: "ArialCustom",
            }}
          >
            Run Your Entire Agency From One Platform Manage
            Clients, Assign Work, And Automate Workflows
            With AI.
          </p>

          {/* CTA */}
          <CTAButton className="mt-15">
            <p
              className="font-bold w-[128px] h-[32px] text-[20px] leading-[32px] tracking-[0%]"
              style={{
                fontFamily: "ArialCustom",
                fontWeight: 700,
              }}
            >
              Book a Demo
            </p>
          </CTAButton>
        </div>
      </div>

      {/* Stripe Pattern */}
      <StripePattern />
    </section>
  );
}