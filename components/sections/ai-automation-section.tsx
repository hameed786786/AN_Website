import Image from "next/image";

export default function AiAutomationSection() {
    return (
        <>
        <section
            id="ai-automation"
            className="relative overflow-hidden pt-[38px] pb-[80px]"
        >
            {/* Left Gradient Glow */}
            <div className="absolute left-[-240px] top-[250px] z-0 h-[640px] w-[640px] rounded-full bg-[#FFF1BE]/90 blur-[150px]" />

            {/* Secondary Soft Glow */}
            <div className="absolute left-[40px] top-[420px] z-0 h-[360px] w-[360px] rounded-full bg-[#FFF8E7]/90 blur-[120px]" />

            {/* Main Container */}
            <div className="relative z-20 mx-auto w-[1265px]">
                {/* Layout */}
                <div className="grid grid-cols-[390px_1fr] items-center gap-[74px]">
                    {/* Left Content */}
                    <div className="pt-[18px]">
                        {/* Label */}
                        <div className="flex items-center gap-[8px]">
                            <img
                                src="/features/ai.svg"
                                alt="AI Automation"
                                className="h-[24px] w-[24px]"
                            />

                            <span
                                className="text-[14px] font-normal leading-[100%] text-[#777777]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                AI Automation
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="mt-[26px] w-[430px] text-[38px] font-semibold leading-[112%] tracking-[-2.2px] text-[#171717]"
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            Automate Your Entire Workflow With AI
                        </h2>

                        {/* Description */}
                        <p
                            className="mt-[30px] w-[430px] text-[16px] font-normal leading-[170%] text-[#7A7A7A]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            No More Chasing Updates Or Managing Workflows
                            Manually. Procevia Handles It For You.
                        </p>
                    </div>

                    {/* Dashboard */}
                    <div className="relative flex justify-end">
                        {/* Soft Shadow */}
                        <div className="absolute right-[20px] top-[34px] h-[86%] w-[90%] rounded-[44px] bg-black/10 blur-[70px]" />

                        {/* Dashboard Image */}
                        <Image
                            src="/features/ai-dashboard.png"
                            alt="AI Automation Dashboard"
                            width={875}
                            height={494}
                            priority
                            className="relative z-10 h-[494px] w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
            
        </section>
        
        </>
    );
}