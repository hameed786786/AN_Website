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
        <section className="relative overflow-hidden bg-white py-4 pb-10">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6">
                {/* Heading */}
                <div className="text-center">
                    <h2
                        className={`${archivo.className} text-[64px] font-extrabold leading-[110%] tracking-[-2px] text-black`}
                    >                        Powered by{" "}
                        <span className="bg-[#F6D36A] px-2">
                            Anthill Networks
                        </span>
                    </h2>

                    <p
                        className="mx-auto mt-6 max-w-[1050px] text-center text-[16px] leading-[26px] capitalize text-[#4B4B4B]"
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

                {/* Image Section */}
                <div className="relative mt-16 w-screen h-[712px] overflow-hidden">
                    <Image
                        src="/team-meeting.svg"
                        alt="Anthill Networks Team"
                        width={1440}
                        height={712}
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
                                fontWeight: "600",
                            }}
                        >
                            Our Goal
                        </h3>
                        <p
                            className={` ${dmSans.className} mt-5 max-w-[1100px] text-[18px] font-semibold leading-[150%] text-white/92`}
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
                                    className="font-normal rounded-full bg-white px-4 py-2 text-[16px] text-black shadow-sm"
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