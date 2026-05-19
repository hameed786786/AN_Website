import Image from "next/image";

export default function AiAutomationSection() {
    return (
        <>
        <section
            id="ai-automation"
            className="relative overflow-hidden pt-[38px] pb-[80px] max-lg:pt-[24px] max-lg:pb-[44px]"
        >
            {/* Left Gradient Glow */}
            <div className="absolute left-[-240px] top-[250px] z-0 h-[640px] w-[640px] rounded-full bg-[#FFF1BE]/90 blur-[150px] max-lg:hidden" />

            {/* Secondary Soft Glow */}
            <div className="absolute left-[40px] top-[420px] z-0 h-[360px] w-[360px] rounded-full bg-[#FFF8E7]/90 blur-[120px] max-lg:hidden" />

            {/* Main Container */}
            <div className="relative z-20 mx-auto w-[1265px] max-lg:w-full max-lg:px-4 md:max-lg:px-6">
                {/* Layout */}
                <div className="grid grid-cols-[390px_1fr] items-center gap-[74px] max-lg:grid-cols-1 max-lg:gap-8">
                    {/* Left Content */}
                    <div className="pt-[18px] max-lg:pt-0">
                        {/* Label */}
                        <div className="flex items-center gap-[8px]">
                            <img
                                src="/features/ai.svg"
                                alt="AI Automation"
                                className="h-[24px] w-[24px] max-lg:h-[20px] max-lg:w-[20px]"
                            />

                            <span
                                className="text-[14px] font-normal leading-[100%] text-[#777777] max-lg:text-[12px]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                AI Automation
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="mt-[26px] w-[430px] text-[38px] font-semibold leading-[112%] tracking-[-2.2px] text-[#171717] max-lg:mt-4 max-lg:w-full max-lg:text-[28px] max-lg:leading-[120%] max-lg:tracking-[-1px]"
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            Automate Your Entire Workflow With AI
                        </h2>

                        {/* Description */}
                        <p
                            className="mt-[30px] w-[430px] text-[16px] font-normal leading-[170%] text-[#7A7A7A] max-lg:mt-4 max-lg:w-full max-lg:text-[14px] max-lg:leading-[150%]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            No More Chasing Updates Or Managing Workflows
                            Manually. Procevia Handles It For You.
                        </p>
                    </div>

                    {/* Dashboard */}
                    <div className="relative flex justify-end max-lg:justify-center">
                        {/* Soft Shadow */}
                        <div className="absolute right-[20px] top-[34px] h-[86%] w-[90%] rounded-[44px] bg-black/10 blur-[70px] max-lg:hidden" />

                        {/* Dashboard Image */}
                        <Image
                            src="/features/ai-dashboard.png"
                            alt="AI Automation Dashboard"
                            width={875}
                            height={494}
                            priority
                            className="relative z-10 h-[494px] w-auto object-contain max-lg:h-auto max-lg:w-full max-lg:max-w-[620px]"
                        />
                    </div>
                </div>
            </div>
            
        </section>
        
        </>
    );
}