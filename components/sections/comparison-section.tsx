import Image from "next/image";

const comparisonRows = [
    "Task Assignment",
    "Client Communication",
    "Feedback Collection",
    "Billing & Invoices",
    "Analytics",
    "Integrations",
];

export default function ComparisonSection() {
    return (
        <section className="relative overflow-hidden py-[80px] max-lg:py-[44px]">

            <div className="mx-auto w-[1265px] max-lg:w-full max-lg:px-4 md:max-lg:px-6">

                {/* ================= MOBILE HEADING ================= */}
                <div className="hidden max-lg:block mb-[34px]">

                    <h2
                        className="
                            max-w-[320px]
                            text-[24px]
                            font-bold
                            leading-[168%]
                            tracking-[-1px]
                            text-[#171717]
                        "
                        style={{
                            fontFamily: "Geist",
                        }}
                    >
                        Why Procevia beats your current workflow
                    </h2>
                </div>

                {/* ================= DESKTOP HEADING ================= */}
                <div className="mb-[70px] max-lg:hidden">

                    <h2
                        className="
                            max-w-[760px]
                            text-[64px]
                            font-bold
                            leading-[112%]
                            tracking-[-2px]
                            text-[#171717]
                        "
                        style={{
                            fontFamily: "Geist",
                        }}
                    >
                        <span className="bg-[rgba(255,199,39,1)] px-[8px]">
                            Why Procevia
                        </span>{" "}
                        beats your current workflow
                    </h2>
                </div>

                {/* ================= TABLE ================= */}
                <div
                    className="
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-[#DADADA]

                        max-lg:rounded-[12px]
                    "
                >

                    {/* ================= HEADER ================= */}
                    <div
                        className="
                            grid
                            grid-cols-3
                            bg-[linear-gradient(90deg,_#F7E27A_0%,_#F8F1CC_52%,_#F5C59F_100%)]
                        "
                    >

                        {/* FEATURE */}
                        <div
                            className="
                                flex
                                h-[92px]
                                items-center
                                justify-center
                                border-r
                                border-[#D8D8D8]

                                max-lg:h-[74px]
                                max-lg:px-[8px]
                            "
                        >
                            <span
                                className="
                                    text-[18px]
                                    font-semibold
                                    text-[#343434]

                                    max-lg:text-center
                                    max-lg:text-[12px]
                                    max-lg:leading-[120%]
                                "
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                Name Of The Feature
                            </span>
                        </div>

                        {/* MANUAL */}
                        <div
                            className="
                                flex
                                h-[92px]
                                items-center
                                justify-center
                                border-r
                                border-[#D8D8D8]

                                max-lg:h-[74px]
                                max-lg:px-[8px]
                            "
                        >
                            <span
                                className="
                                    text-[18px]
                                    font-semibold
                                    text-[#343434]

                                    max-lg:text-center
                                    max-lg:text-[12px]
                                    max-lg:leading-[120%]
                                "
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                Manual Process
                            </span>
                        </div>

                        {/* PROCEVIA */}
                        <div
                            className="
                                flex
                                h-[92px]
                                items-center
                                justify-center

                                max-lg:h-[74px]
                                max-lg:px-[8px]
                            "
                        >
                            <span
                                className="
                                    text-[18px]
                                    font-semibold
                                    text-[#343434]

                                    max-lg:text-center
                                    max-lg:text-[12px]
                                    max-lg:leading-[120%]
                                "
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                Procevia
                            </span>
                        </div>
                    </div>

                    {/* ================= ROWS ================= */}
                    {comparisonRows.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                grid grid-cols-3
                                ${
                                    index !== comparisonRows.length - 1
                                        ? "border-b border-[#D8D8D8]"
                                        : ""
                                }
                            `}
                        >

                            {/* FEATURE NAME */}
                            <div
                                className="
                                    flex
                                    h-[116px]
                                    items-center
                                    justify-center
                                    border-r
                                    border-[#D8D8D8]
                                    bg-white

                                    max-lg:h-[50px]
                                    max-lg:px-[6px]
                                "
                            >
                                <span
                                    className="
                                        text-[16px]
                                        font-medium
                                        leading-[135%]
                                        text-[#4A4A4A]

                                        max-lg:text-center
                                        max-lg:text-[10px]
                                        max-lg:leading-[125%]
                                    "
                                    style={{
                                        fontFamily: "Poppins",
                                    }}
                                >
                                    {item}
                                </span>
                            </div>

                            {/* CROSS */}
                            <div
                                className="
                                    flex
                                    h-[116px]
                                    items-center
                                    justify-center
                                    border-r
                                    border-[#D8D8D8]
                                    bg-white

                                    max-lg:h-[50px]
                                "
                            >
                                <Image
                                    src="/features/cross-icon.svg"
                                    alt="Not Available"
                                    width={36}
                                    height={36}
                                    className="
                                        h-[36px]
                                        w-[36px]

                                        max-lg:h-[18px]
                                        max-lg:w-[18px]
                                    "
                                />
                            </div>

                            {/* CHECK */}
                            <div
                                className="
                                    flex
                                    h-[116px]
                                    items-center
                                    justify-center
                                    bg-white

                                    max-lg:h-[50px]
                                "
                            >
                                <Image
                                    src="/features/check-icon.svg"
                                    alt="Available"
                                    width={36}
                                    height={36}
                                    className="
                                        h-[36px]
                                        w-[36px]

                                        max-lg:h-[18px]
                                        max-lg:w-[18px]
                                    "
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}