import CTAButton from "@/components/ui/cta-button";
import StripePattern from "@/components/ui/stripe-pattern";
import CanvasGrid from "../ui/canvas-grid";

export default function HeroSection() {
  return (
    <section className="pb-6 w-full max-w-[1440px] mx-auto min-h-[759px] relative flex flex-col justify-center">
      <CanvasGrid />

      <div className="absolute left-[-120px] bottom-[120px] z-0 h-[280px] w-[420px] rounded-full bg-[#FFF1BE]/80 blur-[120px]" />

      <div className="">
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center px-6 py-14 text-center md:px-0 md:py-20">
          <h1 className="max-w-[1000px] text-[52px] font-bold leading-[115%] tracking-[-3.6px] text-[#171717] md:text-[92px]">
            We build systems that scale businesses.
          </h1>
          <p
            className="mt-8 max-w-[1066px] text-center text-[20px]  leading-[140%] text-[#7A7A7A] capitalize"
            style={{
              fontFamily: "ArialCustom",
              fontWeight: "400",
            }}
          >
            Procevia is a product by Anthill Networks, created to simplify
            complex workflows and help digital teams operate with clarity,
            speed, and efficiency.
          </p>

          <CTAButton className="mt-9">
            <p
              className="w-[128px] h-[32px] font-bold text-[20px] leading-[32px] tracking-[0%]"
              style={{
                fontFamily: "ArialCustom",
              }}
            >
              Book a Demo
            </p>
          </CTAButton>
        </div>
      </div>

      <StripePattern />
    </section>
  );
}