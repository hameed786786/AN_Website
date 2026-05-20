import CTAButton from "@/components/ui/cta-button";
import StripePattern from "@/components/ui/stripe-pattern";
import CanvasGrid from "../ui/canvas-grid";
import FloatingLogoCard from "../ui/floating-logo-card";

export default function FeaturesHeroSection() {
    return (
        <section className="pb-6 w-full max-w-[1440px] mx-auto min-h-[420px] md:min-h-[759px] relative flex flex-col  max-lg:min-h-[433px]">

            <CanvasGrid />

            <div className="">
                <div className="absolute right-[-220px] top-[-10px] z-0 h-[280px] w-[580px] rounded-full bg-[#FFF1BE]/90 blur-[100px] hidden sm:block" />

                {/* ================= MOBILE VIEW ONLY ================= */}
                <div className="mt-[80px] block sm:hidden relative z-10 px-[16px] ">

                    {/* HEADING */}
                    <div className="flex flex-col items-center text-center">

                        {/* LINE 1 */}
                        <h1
                            className="
                                text-[25px]
                                font-bold
                                leading-[135%]
                                tracking-[-1.2px]
                                text-[#171717]
                            "
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            Everything your agencyneeds.
                        </h1>

                        {/* LINE 2 */}
                        <div className="mt-[4px] flex items-center  gap-[-5px]">

                            <h1
                                className="
                                    text-[25px]
                                    font-bold
                                    leading-[135%]
                                    
                                    text-[#171717]
                                "
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                One
                            </h1>

                            {/* FLOATING LOGO */}
                            <div className="scale-[0.58]">
                                <FloatingLogoCard />
                            </div>

                            <h1
                                className="
                                    text-[25px]
                                    font-bold
                                    leading-[135%]
                                    tracking-[-1.2px]
                                    text-[#171717]
                                "
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                system.
                            </h1>
                        </div>

                        {/* DESCRIPTION */}
                        <p
                            className="
                                mt-[34px]
                                max-w-[315px]
                                text-center
                                text-[11px]
                                font-normal
                                leading-[220%]
                                text-[#7A7A7A]
                            "
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            Run Your Entire Agency From One Platform Manage Clients, Assign Work, And Automate Workflows With AI.
                        </p>

                        {/* CTA */}
                        <CTAButton
                            className="
                                mt-[28px]
                                !h-[42px]
                                !w-[145px]
                                !rounded-full
                            "
                        >
                            <p
                                className="
                                    text-[14px]
                                    font-bold
                                    leading-[100%]
                                "
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Book a Demo
                            </p>
                        </CTAButton>
                    </div>
                </div>

                {/* ================= DESKTOP/TABLET VIEW UNCHANGED ================= */}
                <div className="hidden sm:flex relative z-10 mx-auto w-full max-w-[1400px] flex-col items-center px-5 sm:px-6 md:px-10 lg:px-0 py-10 sm:py-14 md:py-18 lg:py-20 text-center max-lg:mx-auto max-lg:max-w-full max-lg:translate-y-0">

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

            {/* ================= MOBILE STRIPE PATTERN ================= */}
            <div className="block sm:hidden mt-[52px]">
                <div
                    className="
                        h-[40px]
                        w-[112%]
                        -ml-[6%]
                        overflow-hidden
                        bg-[repeating-linear-gradient(-45deg,#E8BE42_0px,#E8BE42_2px,transparent_2px,transparent_14px)]
                    "
                />
            </div>

            {/* ================= DESKTOP STRIPE PATTERN ================= */}
            <div className="hidden sm:block mt-[24px] sm:mt-[30px] lg:mt-[20px] lg:mt-[30px] w-full px-4 sm:px-6 lg:ml-[9px] lg:w-[calc(100%-10px)] lg:px-0">
                <StripePattern />
            </div>
        </section>
    );
}