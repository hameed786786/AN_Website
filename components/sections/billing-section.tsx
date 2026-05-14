import Image from "next/image";

export default function BillingSection() {
    return (
        <section
            id="billing-payments"
            className="relative overflow-hidden pt-[100px] pb-[120px]"
        >
            {/* Main Container */}
            <div className="relative z-20 mx-auto w-[1265px]">
                {/* Layout */}
                <div className="grid grid-cols-[390px_1fr] items-center gap-[84px]">
                    {/* Left Content */}
                    <div className="pt-[18px]">
                        {/* Label */}
                        <div className="flex items-center gap-[8px]">
                            <img
                                src="/features/billing.svg"
                                alt="Billing & Payments"
                                className="h-[24px] w-[24px]"
                            />

                            <span
                                className="text-[14px] font-normal leading-[100%] text-[#777777]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Billing & Payments
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="mt-[26px] w-[430px] text-[36px] font-semibold leading-[122%] tracking-[-1px] text-[#171717]"
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            Track Money Without Spreadsheets
                        </h2>

                        {/* Description */}
                        <p
                            className="mt-[30px] w-[480px] text-[16px] font-normal leading-[135%] text-[#7A7A7A]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            Eliminate Manual Tracking And Reduce Errors
                            With A System Designed To Align Your Operations
                            With Your Revenue Flow.
                        </p>
                    </div>

                    {/* Dashboard */}
                    <div className="relative flex justify-end">
                        {/* Soft Shadow */}
                        <div className="absolute right-[20px] top-[30px] h-[82%] w-[88%] rounded-[40px] bg-black/10 blur-[65px]" />

                        {/* Dashboard Image */}
                        <Image
                            src="/features/billing-dashboard.png"
                            alt="Billing Dashboard"
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