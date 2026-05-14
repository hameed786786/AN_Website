import Image from "next/image";

export default function PoweredSection() {
    return (
        <section className="relative overflow-hidden bg-white py-24">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[64px] font-bold leading-[110%] tracking-[-2px] text-black">
                        Powered by{" "}
                        <span className="bg-[#F6D36A] px-2">
                            Anthill Networks
                        </span>
                    </h2>

                    <p
                        className="mx-auto mt-6 max-w-[1050px] text-center text-[16px] font-light leading-[26px] capitalize text-[#4B4B4B]"
                        style={{
                            fontFamily: "ArialCustom",
                        }}
                    >
                        Anthill Networks is a technology-driven company focused on building
                        scalable digital products and systems for modern businesses. We
                        specialize in creating solutions that not only solve immediate
                        challenges but also support long-term growth.
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative mt-16 w-screen h-[714px] overflow-hidden">
                    <Image
                        src="/team-meeting.svg"
                        alt="Anthill Networks Team"
                        width={1200}
                        height={700}
                        className="h-auto w-full object-cover"
                        priority
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 " />

                    {/* Bottom Glass Card */}
                    <div className="ml-[35px] w-[1400px] absolute bottom-8 left-8 right-8 rounded-[24px] border border-white bg-white/10 p-8 ">
                        <h3
                            className="text-[42px] font-bold leading-[110%] tracking-[-1px] text-white"
                            style={{
                                fontFamily: "ClashDisplay",
                            }}
                        >
                            Our Goal
                        </h3>
                        <p
                            className="mt-5 max-w-[1100px] text-[18px] font-semibold leading-[150%] text-white/92"
                            style={{
                                fontFamily: "DMSans",
                            }}
                        >
                            To simplify complex business operations through intelligent
                            technology — from SaaS platforms to custom digital ecosystems,
                            improving efficiency and enabling businesses to scale with
                            confidence.
                        </p>

                        {/* Tags */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            {[
                                "SaaS Product Development",
                                "Custom Platforms",
                                "Workflow Automation Systems",
                                "Scalable Digital Infrastructure",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-sm"
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
        </section>
    );
}