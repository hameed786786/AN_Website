import CTAButton from "@/components/ui/cta-button";
import StripePattern from "@/components/ui/stripe-pattern";
import CanvasGrid from "../ui/canvas-grid";
import FloatingLogoCard from "../ui/floating-logo-card";

export default function FeaturesHeroSection() {
    return (
        <section className="pb-6 w-full max-w-[1440px] mx-auto min-h-[420px] md:min-h-[759px] relative flex flex-col justify-center max-lg:min-h-screen">

            <CanvasGrid />

            <div className="">
                <div className="absolute right-[-220px] top-[100px] z-0 h-[280px] w-[580px] rounded-full bg-[#FFF1BE]/90 blur-[100px] hidden sm:block" />

                {/* MAIN CONTENT */}
                <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center px-5 sm:px-6 md:px-10 lg:px-0 py-10 sm:py-14 md:py-18 lg:py-20 text-center max-lg:mx-auto max-lg:max-w-full max-lg:translate-y-0 md:mt-[-100px]">

                    {/* HEADING */}
                    <div className="flex flex-col items-center justify-center md:ml-0 lg:ml-[80px]">

                        {/* LINE 1 */}
                        <h1
                            className="text-[34px] sm:text-[52px] md:text-[72px] lg:text-[92px] font-bold leading-[108%] tracking-[-1.8px] md:tracking-[-2.8px] lg:tracking-[-3.6px] text-[#171717]"
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            Everything your agencyneeds.
                        </h1>

                        {/* LINE 2 */}
                        <div className="mt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-7">

                            <h1
                                className="text-[34px] sm:text-[52px] md:text-[72px] lg:text-[92px] font-bold leading-[108%] tracking-[-1.8px] md:tracking-[-2.8px] lg:tracking-[-3.6px] text-[#171717]"
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                One
                            </h1>

                            {/* FLOATING LOGO */}
                            <FloatingLogoCard />

                            <h1
                                className="text-[34px] sm:text-[52px] md:text-[72px] lg:text-[92px] font-bold leading-[108%] tracking-[-1.8px] md:tracking-[-2.8px] lg:tracking-[-3.6px] text-[#171717]"
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                system.
                            </h1>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p
                        className="mt-6 max-w-[320px] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[1066px] text-center text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] font-normal leading-[150%] md:leading-[135%] lg:leading-[100%] text-[#7A7A7A] capitalize"
                        style={{
                            fontFamily: "ArialCustom",
                        }}
                    >
                        Run Your Entire Agency From One Platform
                        Manage Clients, Assign Work, And Automate
                        Workflows With AI.
                    </p>

                    {/* CTA */}
                    <CTAButton className="mt-8 sm:mt-10 md:mt-12 lg:mt-15">

                        <p
                            className="font-bold w-[110px] sm:w-[120px] md:w-[128px] h-[32px] text-[14px] sm:text-[16px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] tracking-[0%]"
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

            {/* STRIPE PATTERN */}
            <div className="mt-[24px] sm:mt-[30px] md:mt-[-20px] lg:mt-[-5px] w-full px-4 sm:px-6 lg:ml-[19px] lg:w-[calc(100%-10px)] lg:px-0">
                <StripePattern />
            </div>
        </section>
    );
}