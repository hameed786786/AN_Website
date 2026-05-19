import Image from "next/image";

export default function AnalyticsSection() {
    return (
        <section
            id="analytics"
            className="relative overflow-hidden pt-[40px] pb-[90px] max-lg:pt-[24px] max-lg:pb-[44px]"
        >
            {/* Bottom Left Glow */}
            <div className="absolute left-[-120px] bottom-[250px] z-0 h-[620px] w-[820px] rounded-full bg-[#FFF1BE]/90 blur-[150px] max-lg:hidden" />

            {/* Secondary Glow */}
            <div className="absolute left-[120px] bottom-[20px] z-0 h-[360px] w-[360px] rounded-full bg-[#FFF8E7]/90 blur-[120px] max-lg:hidden" />

            {/* Main Container */}
            <div className="relative z-20 mx-auto w-[1265px] max-lg:w-full max-lg:px-4 md:max-lg:px-6">
                {/* Layout */}
                <div className="grid grid-cols-[390px_1fr] items-center gap-[74px] max-lg:grid-cols-1 max-lg:gap-8">
                    {/* Left Content */}
                    <div className="pt-[18px] max-lg:pt-0">
                        {/* Label */}
                        <div className="flex items-center gap-[8px]">
                            <img
                                src="/features/analytics.svg"
                                alt="Analytics"
                                className="h-[24px] w-[24px] max-lg:h-[20px] max-lg:w-[20px]"
                            />

                            <span
                                className="text-[14px] font-normal leading-[100%] text-[#777777] max-lg:text-[12px]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Analytics
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="mt-[26px] w-[430px] text-[36px] font-semibold leading-[122%] tracking-[-1px] text-[#171717] max-lg:mt-4 max-lg:w-full max-lg:text-[28px] max-lg:leading-[120%]"
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            Make Smarter Decisions With Real Data
                        </h2>

                        {/* Description */}
                        <p
                            className="mt-[30px] w-[430px] text-[16px] font-normal leading-[135%] text-[#7A7A7A] max-lg:mt-4 max-lg:w-full max-lg:text-[14px] max-lg:leading-[150%]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            Understand What&apos;s Working, Identify
                            Bottlenecks, And Continuously Improve Your
                            Workflow With Data-Driven Clarity.
                        </p>
                    </div>

                    {/* Dashboard */}
                    <div className="relative flex justify-end max-lg:justify-center">
                        {/* Soft Shadow */}
                        <div className="absolute right-[20px] top-[30px] h-[82%] w-[88%] rounded-[40px] bg-black/10 blur-[65px] max-lg:hidden" />

                        {/* Dashboard Image */}
                        <Image
                            src="/features/analytics-dashboard.png"
                            alt="Analytics Dashboard"
                            width={760}
                            height={360}
                            priority
                            className="relative z-10 h-auto w-[760px] object-contain max-lg:w-full max-lg:max-w-[620px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}