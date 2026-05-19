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
                {/* Heading */}
                <div className="mb-[70px] max-lg:mb-8">
                    <h2
                        className="max-w-[760px] text-[64px] font-bold leading-[112%] tracking-[-2px] text-[#171717] max-lg:max-w-full max-lg:text-[34px] max-lg:leading-[118%] max-lg:tracking-[-1px]"
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
                <div className="h-[800px] overflow-hidden rounded-[20px] border border-[#DADADA] max-lg:h-auto">
  
                    {/* Header */}
                    <div className="grid grid-cols-3 bg-[linear-gradient(90deg,_#F7E27A_0%,_#F8F1CC_52%,_#F5C59F_100%)]">

                        <div className="flex h-[92px] items-center justify-center border-r border-[#D8D8D8] max-lg:h-[56px] max-lg:px-1">
                            <span
                                className="text-[18px] font-semibold text-[#171717] max-lg:text-center max-lg:text-[10px] max-lg:leading-[120%]"
                                style={{
                                    fontFamily: "ClashDisplay",
                                }}
                            >
                                Name Of The Feature
                            </span>
                        </div>

                        <div className="flex h-[92px] items-center justify-center border-r border-[#D8D8D8] max-lg:h-[56px] max-lg:px-1">
                            <span
                                className="text-[18px] font-semibold text-[#171717] max-lg:text-center max-lg:text-[10px] max-lg:leading-[120%]"
                                style={{
                                    fontFamily: "Geist",
                                }}
                            >
                                Manual Process
                            </span>
                        </div>

                        <div className="flex h-[92px] items-center justify-center max-lg:h-[56px] max-lg:px-1">
                            <span
                                className="text-[18px] font-semibold text-[#171717] max-lg:text-center max-lg:text-[10px] max-lg:leading-[120%]"
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
                            <div className="flex h-[116px] items-center justify-center border-r border-[#D8D8D8] bg-white max-lg:h-[66px] max-lg:px-2">
                                <span
                                    className="text-[16px] font-medium text-[#4A4A4A] max-lg:text-center max-lg:text-[11px] max-lg:leading-[120%]"
                                    style={{
                                        fontFamily: "poppins",
                                    }}
                                >
                                    {item}
                                </span>
                            </div>

                            {/* Manual Process */}
                            <div className="flex h-[116px] items-center justify-center border-r border-[#D8D8D8] bg-white max-lg:h-[66px]">
                                <Image
                                    src="/features/cross-icon.svg"
                                    alt="Not Available"
                                    width={36}
                                    height={36}
                                    className="h-[36px] w-[36px] max-lg:h-[18px] max-lg:w-[18px]"
                                />
                            </div>

                            {/* Procevia */}
                            <div className="flex h-[116px] items-center justify-center bg-white max-lg:h-[66px]">
                                <Image
                                    src="/features/check-icon.svg"
                                    alt="Available"
                                    width={36}
                                    height={36}
                                    className="h-[36px] w-[36px] max-lg:h-[18px] max-lg:w-[18px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}