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
        <section className="relative overflow-hidden py-[80px]">
            <div className="mx-auto w-[1265px]">
                {/* Heading */}
                <div className="mb-[70px]">
                    <h2
                        className="max-w-[760px] text-[64px] font-bold leading-[112%] tracking-[-2px] text-[#171717]"
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

                {/* Table */}
                <div className="h-[800px] overflow-hidden rounded-[20px] border border-[#DADADA]">
  
                    {/* Header */}
                    <div className="grid grid-cols-3 bg-[linear-gradient(90deg,_#F7E27A_0%,_#F8F1CC_52%,_#F5C59F_100%)]">

                        <div className="flex h-[92px] items-center justify-center border-r border-[#D8D8D8]">
                            <span
                                className="text-[18px] font-semibold text-[#171717]"
                                style={{
                                    fontFamily: "ClashDisplay",
                                }}
                            >
                                Name Of The Feature
                            </span>
                        </div>

                        <div className="flex h-[92px] items-center justify-center border-r border-[#D8D8D8]">
                            <span
                                className="text-[18px] font-semibold text-[#171717]"
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                Manual Process
                            </span>
                        </div>

                        <div className="flex h-[92px] items-center justify-center">
                            <span
                                className="text-[18px] font-semibold text-[#171717]"
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                Procevia
                            </span>
                        </div>

                    </div>

                    {/* Rows */}
                    {comparisonRows.map((item, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-3 ${index !== comparisonRows.length - 1
                                ? "border-b border-[#D8D8D8]"
                                : ""
                                }`}
                        >
                            {/* Feature Name */}
                            <div className="flex h-[116px] items-center justify-center border-r border-[#D8D8D8] bg-white">
                                <span
                                    className="text-[16px] font-medium text-[#4A4A4A]"
                                    style={{
                                        fontFamily: "poppins",
                                    }}
                                >
                                    {item}
                                </span>
                            </div>

                            {/* Manual Process */}
                            <div className="flex h-[116px] items-center justify-center border-r border-[#D8D8D8] bg-white">
                                <Image
                                    src="/features/cross-icon.svg"
                                    alt="Not Available"
                                    width={36}
                                    height={36}
                                    className="h-[36px] w-[36px]"
                                />
                            </div>

                            {/* Procevia */}
                            <div className="flex h-[116px] items-center justify-center bg-white">
                                <Image
                                    src="/features/check-icon.svg"
                                    alt="Available"
                                    width={36}
                                    height={36}
                                    className="h-[36px] w-[36px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}