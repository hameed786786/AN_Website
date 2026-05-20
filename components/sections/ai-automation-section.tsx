import Image from "next/image";

export default function AiAutomationSection() {
    return (
        <>
            <section
                id="ai-automation"
                className="relative overflow-hidden pt-[38px] pb-[80px] max-lg:pt-[24px] max-lg:pb-[44px]"
            >
                {/* ================= DESKTOP GLOW - UNCHANGED ================= */}
                <div className="absolute left-[-240px] top-[250px] z-0 h-[640px] w-[640px] rounded-full bg-[#FFF1BE]/90 blur-[150px] max-lg:hidden" />

                <div className="absolute left-[40px] top-[420px] z-0 h-[360px] w-[360px] rounded-full bg-[#FFF8E7]/90 blur-[120px] max-lg:hidden" />

                {/* ================= MOBILE GLOW ================= */}

                {/* ================= MAIN CONTAINER ================= */}
                <div className="relative z-20 mx-auto w-[1265px] max-lg:w-full max-lg:px-4 md:max-lg:px-6">

                    {/* ================= MOBILE VIEW ONLY ================= */}
                    <div className="hidden max-lg:block">

                        {/* DASHBOARD IMAGE FIRST */}
                        <div className="relative flex justify-center">

                            {/* MOBILE SHADOW */}
                            <div className="absolute top-[12px] h-[90%] w-[94%] rounded-[24px] bg-black/10 blur-[28px]" />

                            {/* IMAGE */}
                            <Image
                                src="/features/ai-dashboard.png"
                                alt="AI Automation Dashboard"
                                width={875}
                                height={494}
                                priority
                                className="
                                    relative z-10
                                    h-auto
                                    w-full
                                    max-w-[390px]
                                    object-contain
                                "
                            />
                        </div>

                        {/* CONTENT BELOW IMAGE */}
                        <div className="mt-[28px]">

                            {/* LABEL */}
                            <div className="flex items-center gap-[7px]">

                                <img
                                    src="/features/ai.svg"
                                    alt="AI Automation"
                                    className="h-[18px] w-[18px]"
                                />

                                <span
                                    className="text-[12px] font-normal leading-[100%] text-[#777777]"
                                    style={{
                                        fontFamily: "ArialCustom",
                                    }}
                                >
                                    AI Automation
                                </span>
                            </div>

                            {/* HEADING */}
                            <h2
                                className="
                                    mt-[18px]
                                    max-w-[320px]
                                    text-[24px]
                                    font-semibold
                                    leading-[122%]
                                    tracking-[-1.3px]
                                    text-[#171717]
                                "
                                style={{
                                    fontFamily: "Geist",
                                    fontWeight: 600,
                                }}
                            >
                                Automate Your Entire Workflow With AI
                            </h2>

                            {/* DESCRIPTION */}
                            <p
                                className="
                                    mt-[16px]
                                    max-w-[330px]
                                    text-[14px]
                                    font-normal
                                    text-[#7A7A7A]
                                "
                                style={{
                                    fontFamily: "ArialCustom",
                                    fontWeight: 400,
                                }}
                            >
                                No More Chasing Updates Or Managing Workflows
                                Manually. Procevia Handles It For You.
                            </p>
                        </div>
                    </div>

                    {/* ================= DESKTOP/TABLET VIEW UNCHANGED ================= */}
                    <div className="grid grid-cols-[390px_1fr] items-center gap-[74px] max-lg:hidden">

                        {/* LEFT CONTENT */}
                        <div className="pt-[18px]">

                            {/* LABEL */}
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

                            {/* HEADING */}
                            <h2
                                className="mt-[26px] w-[430px] text-[38px] font-semibold leading-[112%] tracking-[-2.2px] text-[#171717]"
                                style={{
                                    fontFamily: "Geist",
                                    fontWeight: 600,
                                }}
                            >
                                Automate Your Entire Workflow With AI
                            </h2>

                            {/* DESCRIPTION */}
                            <p
                                className="mt-[30px] w-[430px] text-[16px] font-normal leading-[170%] text-[#7A7A7A]"
                                style={{
                                    fontFamily: "ArialCustom",
                                    fontWeight: 400,
                                }}
                            >
                                No More Chasing Updates Or Managing Workflows
                                Manually. Procevia Handles It For You.
                            </p>
                        </div>

                        {/* DASHBOARD */}
                        <div className="relative flex justify-end">

                            {/* SOFT SHADOW */}
                            <div className="absolute right-[20px] top-[34px] h-[86%] w-[90%] rounded-[44px] bg-black/10 blur-[70px]" />

                            {/* IMAGE */}
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