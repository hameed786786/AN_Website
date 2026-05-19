import Image from "next/image";

export default function CRMSection() {
    return (
        <section
            id="client-crm"
            className="relative overflow-hidden pt-[100px] pb-[150px] max-lg:pt-[28px] max-lg:pb-[48px]"
        >
            {/* Bottom Left Glow */}
            <div className="absolute left-[420px] bottom-[-400px] z-0 h-[620px] w-[620px] rounded-full bg-[#FFF1BE]/90 blur-[150px] max-lg:hidden" />

            {/* Secondary Glow */}

            {/* Main Container */}
            <div className="relative z-20 mx-auto w-[1265px] max-lg:w-full max-lg:px-4 md:max-lg:px-6">
                {/* Layout */}
                <div className="grid grid-cols-[390px_1fr] items-center gap-[74px] max-lg:grid-cols-1 max-lg:gap-8">
                    {/* Left Content */}
                    <div className="pt-[18px] max-lg:pt-0">
                        {/* Label */}
                        <div className="flex items-center gap-[8px]">
                            <img
                                src="/features/crm.svg"
                                alt="Client & CRM"
                                className="h-[24px] w-[24px] max-lg:h-[20px] max-lg:w-[20px]"
                            />

                            <span
                                className="text-[14px] font-normal leading-[100%] text-[#777777] max-lg:text-[12px]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Client & CRM
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="mt-[26px] w-[430px] text-[36px] font-semibold leading-[122%] tracking-[-1px] text-[#171717] max-lg:mt-4 max-lg:w-full max-lg:text-[28px] max-lg:leading-[120%]"
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            All Your Clients. One Organized System.
                        </h2>

                        {/* Description */}
                        <p
                            className="mt-[30px] w-[420px] text-[16px] font-normal leading-[135%] text-[#7A7A7A] max-lg:mt-4 max-lg:w-full max-lg:text-[14px] max-lg:leading-[150%]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            Track Every Client, Project, Conversation,
                            And Update In One Place — So Your Team Always
                            Knows What&apos;s Happening And What Needs
                            Attention.
                        </p>
                    </div>

                    {/* Dashboard */}
                    <div className="relative flex justify-end max-lg:justify-center">
                        {/* Soft Shadow */}
                        <div className="absolute right-[20px] top-[30px] h-[82%] w-[88%] rounded-[40px] bg-black/10 blur-[65px] max-lg:hidden" />

                        {/* Dashboard Image */}
                        <Image
                            src="/features/crm-dashboard.png"
                            alt="CRM Dashboard"
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