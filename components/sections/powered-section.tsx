import Image from "next/image";
import { Archivo } from "next/font/google";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["800"],
});

export default function PoweredSection() {
    return (
        <section className="relative overflow-hidden bg-white py-8 sm:py-12 md:py-16 lg:py-4 lg:pb-10">

            {/* ================= MOBILE VIEW ONLY ================= */}
            <div className="block sm:hidden w-full">

                {/* HEADING */}
                <div className="px-[22px] text-center">

                    <h2
                        className={`${archivo.className} text-[22px] font-extrabold leading-[120%] tracking-[-1px] text-black`}
                    >
                        Powered by Anthill Networks
                    </h2>

                    <p
                        className="align-center mx-auto mt-[16px] max-w-[363px] text-center text-[14px] leading-[185%] capitalize text-[#4B4B4B]"
                        style={{
                            fontFamily: "ArialCustom",
                            fontWeight: "400",
                        }}
                    >
                        Anthill Networks is a technology-driven company focused on building
                        scalable digital products and systems for modern businesses. We
                        specialize in creating solutions that not only solve immediate
                        challenges but also support long-term growth.
                    </p>
                </div>

                {/* IMAGE */}
                <div className="relative mt-[32px] w-full">

                    <Image
                        src="/team-meeting.svg"
                        alt="Anthill Networks Team"
                        width={800}
                        height={500}
                        className="h-[290px] w-full object-cover"
                        priority
                    />
                </div>

                {/* CARD */}
                <div className="px-[14px] mt-[28px]">

                    <div className="w-full rounded-[24px]  bg-[#FFFFFF] px-[22px] py-[22px]">

                        <h3
                            className="text-[22px] font-bold leading-[110%] tracking-[-1px] text-[#171717]"
                            style={{
                                fontFamily: "ClashDisplay",
                                fontWeight: "600",
                            }}
                        >
                            Our Goal
                        </h3>

                        <p
                            className={`${dmSans.className} mt-[18px] text-[14px] font-medium leading-[185%] text-[#171717]`}
                        >
                            To simplify complex business operations through intelligent
                            technology — from SaaS platforms to custom digital ecosystems,
                            improving efficiency and enabling businesses to scale with
                            confidence.
                        </p>

                        {/* TAGS */}
                        <div className="mt-[22px] flex flex-wrap gap-[10px]">

                            {[
                                "SaaS Product Development",
                                "Custom Platforms",
                                "Workflow Automation Systems",
                                "Scalable Digital Infrastructure",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="w-[218px] h-[28px] rounded-full border border-[#D9D9D9] bg-[#F5F5F5] px-[10px] py-[5px] text-[14px] leading-[100%] text-black drop-shadow-sm"
                                    style={{
                                        fontFamily: "ArialCustom",
                                        fontWeight: "400",
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= DESKTOP/TABLET VIEW - UNCHANGED ================= */}
            <div className="hidden sm:block">

                <div className="mx-auto flex max-w-300 flex-col items-center px-4 sm:px-6 md:px-8 lg:px-6">

                    {/* HEADING */}
                    <div className="text-center">

                        <h2
                            className={`${archivo.className} text-3xl font-extrabold leading-[110%] tracking-[-1px] text-black sm:text-4xl sm:tracking-[-1.5px] md:text-5xl md:tracking-[-2px] lg:text-[64px]`}
                        >
                            Powered by{" "}
                            <span className="bg-[#F6D36A] px-1.5 sm:px-2">
                                Anthill Networks
                            </span>
                        </h2>

                        <p
                            className="mx-auto mt-4 max-w-262.5 text-center text-xs leading-5 capitalize text-[#4B4B4B] sm:mt-6 sm:text-sm sm:leading-6 md:text-base md:leading-7 lg:text-[16px] lg:leading-6.5"
                            style={{
                                fontFamily: "ArialCustom",
                                fontWeight: "400",
                            }}
                        >
                            Anthill Networks is a technology-driven company focused on building
                            scalable digital products and systems for modern businesses. We
                            specialize in creating solutions that not only solve immediate
                            challenges but also support long-term growth.
                        </p>
                    </div>

                    {/* IMAGE SECTION */}
                    <div className="relative mt-8 h-[420px] w-full overflow-hidden rounded-2xl sm:mt-10 sm:h-[560px] sm:rounded-3xl md:mt-12 md:h-[620px] lg:mt-16 lg:h-178 lg:w-screen lg:rounded-none">

                        <Image
                            src="/team-meeting.svg"
                            alt="Anthill Networks Team"
                            width={1440}
                            height={712}
                            className="h-full w-full object-cover"
                            priority
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/20" />

                        {/* BOTTOM GLASS CARD */}
                        <div className="absolute bottom-3 left-3 right-3 z-20 mx-auto max-w-none rounded-[18px] border border-white bg-black/72 px-4 py-4 backdrop-blur-[2px] sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[22px] sm:p-5 md:bottom-8 md:left-8 md:right-8 md:p-6 lg:bottom-8 lg:left-8 lg:right-8 lg:w-350 lg:rounded-3xl lg:bg-white/10 lg:p-8 lg:text-left">

                            <h3
                                className="text-[14px] font-bold leading-[110%] tracking-[-1px] text-white sm:text-2xl md:text-2xl lg:text-[42px]"
                                style={{
                                    fontFamily: "ClashDisplay",
                                    fontWeight: "600",
                                }}
                            >
                                Our Goal
                            </h3>

                            <p
                                className={`${dmSans.className} mt-1 max-w-full text-[9px] font-semibold leading-4 text-white/92 sm:mt-4 sm:text-sm sm:leading-6 md:text-[12px] md:leading-7 lg:mt-5 lg:max-w-275 lg:text-[18px] lg:leading-[150%]`}
                            >
                                To simplify complex business operations through intelligent
                                technology — from SaaS platforms to custom digital ecosystems,
                                improving efficiency and enabling businesses to scale with
                                confidence.
                            </p>

                            {/* TAGS */}
                            <div className="mt-2 flex flex-wrap gap-1 sm:mt-5 sm:gap-3 lg:mt-6 md:h-8">

                                {[
                                    "SaaS Product Development",
                                    "Custom Platforms",
                                    "Workflow Automation Systems",
                                    "Scalable Digital Infrastructure",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-full bg-white px-2 py-0.5 text-[8px] font-normal text-black shadow-sm sm:px-4 sm:py-2 sm:text-[15px] lg:px-4 lg:py-2 lg:text-[16px] md:text-[8px] md:px-2"
                                        style={{
                                            fontFamily: "ArialCustom",
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}