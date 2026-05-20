import Image from "next/image";

export default function IntegrationsSection() {
    return (
        <section
            id="integrations"
            className="relative overflow-hidden pt-[80px] pb-[80px] max-lg:pt-[24px] max-lg:pb-[44px]"
        >
            {/* ================= MOBILE GLOW ================= */}

            {/* ================= MAIN CONTAINER ================= */}
            <div className="relative z-20 mx-auto w-[1265px] max-lg:w-full max-lg:px-4 md:max-lg:px-6">

                {/* ================= MOBILE VIEW ONLY ================= */}
                <div className="hidden max-lg:block">

                    {/* ================= IMAGE FIRST ================= */}
                    <div className="relative flex justify-center">

                        {/* MOBILE SHADOW */}
                        <div className="absolute top-[10px] h-[90%] w-[94%] rounded-[24px] bg-black/10 blur-[28px]" />

                        {/* IMAGE */}
                        <Image
                            src="/features/integrations-dashboard.png"
                            alt="Integrations Dashboard"
                            width={760}
                            height={360}
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

                    {/* ================= CONTENT BELOW ================= */}
                    <div className="mt-[28px]">

                        {/* LABEL */}
                        <div className="flex items-center gap-[7px]">

                            <img
                                src="/features/integrations.svg"
                                alt="Integrations"
                                className="h-[18px] w-[18px]"
                            />

                            <span
                                className="
                                    text-[12px]
                                    font-normal
                                    leading-[100%]
                                    text-[#777777]
                                "
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Integrations
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
                                fontWeight : 600,
                            }}
                        >
                            Connect Everything You Already Use
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
                                fontWeight : 400,
                            }}
                        >
                            Your Agency Already Relies On Multiple Tools —
                            Procevia Brings Them Together Into One Connected
                            Workflow, Reduce Tool-Switching And Context Loss
                            While Keeping Everything Centralized.
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
                                src="/features/integrations.svg"
                                alt="Integrations"
                                className="h-[24px] w-[24px]"
                            />

                            <span
                                className="text-[14px] font-normal leading-[100%] text-[#777777]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Integrations
                            </span>
                        </div>

                        {/* HEADING */}
                        <h2
                            className="mt-[26px] w-[430px] text-[36px] font-semibold leading-[122%] tracking-[-1px] text-[#171717]"
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            Connect Everything You Already Use
                        </h2>

                        {/* DESCRIPTION */}
                        <p
                            className="mt-[30px] w-[430px] text-[16px] font-normal leading-[135%] text-[#7A7A7A]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            Your Agency Already Relies On Multiple Tools —
                            Procevia Brings Them Together Into One Connected
                            Workflow, Reduce Tool-Switching And Context Loss
                            While Keeping Everything Centralized.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-end">

                        {/* SHADOW */}
                        <div className="absolute right-[20px] top-[30px] h-[82%] w-[88%] rounded-[40px] bg-black/10 blur-[65px]" />

                        {/* IMAGE */}
                        <Image
                            src="/features/integrations-dashboard.png"
                            alt="Integrations Dashboard"
                            width={760}
                            height={360}
                            priority
                            className="relative z-10 h-auto w-[760px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}