import CTAButton from "@/components/ui/cta-button";
import StripePattern from "@/components/ui/stripe-pattern";
import CanvasGrid from "../ui/canvas-grid";
export default function HeroSection() {
  return (
    <section className="pb-6 w-[1440px] relative">
        <CanvasGrid />
        <div className="">
          <div className="mx-auto flex max-w-[1100px] flex-col items-center px-6 py-14 text-center md:px-0 md:py-20">
            <h1 className="max-w-[1000px] text-[52px] font-bold leading-[115%] tracking-[-3.6px] text-[#171717] md:text-[92px]">
              We build systems that scale businesses.
            </h1>

            <p className="mt-8 max-w-[1066px] text-center text-[20px] font-normal leading-[33px] text-[#7A7A7A] capitalize">
              Procevia is a product by Anthill Networks, created to simplify
              complex workflows and help digital teams operate with clarity,
              speed, and efficiency.
            </p>

            <CTAButton className="mt-8">
              Book a Demo
            </CTAButton>
          </div>
        </div>
        <StripePattern />
    </section>
  );
}