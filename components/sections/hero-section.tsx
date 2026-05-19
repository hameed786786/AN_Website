import CTAButton from "@/components/ui/cta-button";
import StripePattern from "@/components/ui/stripe-pattern";
import CanvasGrid from "../ui/canvas-grid";

export default function HeroSection() {
  return (
    <section className="pb-6 w-full max-w-360 mx-auto min-h-screen lg:min-h-189.75 relative flex flex-col items-center justify-center">
      <CanvasGrid />

      <div className="absolute -left-30 bottom-30 z-0 h-70 w-105 rounded-full bg-[#FFF1BE]/80 blur-[120px] max-lg:-left-22.5 max-lg:bottom-20 max-lg:h-50 max-lg:w-75 max-lg:blur-[90px]" />

      <div className="">
        <div className="relative z-10 mx-auto flex max-w-350 flex-col items-center px-6 py-17 text-center md:px-0 md:py-20 max-lg:translate-y-2">
          <h1 className="max-w-250 text-[52px] font-bold leading-[115%] tracking-[-3.6px] text-[#171717] md:text-[92px] max-lg:max-w-90! max-lg:text-[34px]! max-lg:leading-[120%]! max-lg:tracking-[-1.5px]!">
            We build systems that scale businesses.
          </h1>
          <p
            className="mt-8 max-w-266.5 text-center text-[20px] leading-[140%] text-[#7A7A7A] capitalize max-lg:mt-5! max-lg:max-w-85! max-lg:text-[15px]! max-lg:leading-[160%]!"
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
              className="text-[20px] leading-8 tracking-[-0.02em] font-black max-lg:text-[16px] max-lg:leading-6"
              style={{
                fontFamily: "ArialCustom, Arial, sans-serif"
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