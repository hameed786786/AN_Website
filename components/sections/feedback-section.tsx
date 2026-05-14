import Image from "next/image";

export default function FeedbackSection() {
    return (
        <section
            id="frame-feedback"
            className="relative overflow-hidden pt-[40px] pb-[80px]"
        >
            {/* Bottom Right Glow */}
            <div className="absolute right-[-20px] bottom-[-250px] z-0 h-[600px] w-[620px] rounded-full bg-[#FFF1BE]/90 blur-[150px]" />

            {/* Secondary Glow */}
            <div className="absolute right-[100px] bottom-[20px] z-0 h-[360px] w-[360px] rounded-full bg-[#FFF8E7]/90 blur-[120px]" />

            {/* Main Container */}
            <div className="relative z-20 mx-auto w-[1265px]">
                {/* Layout */}
                <div className="grid grid-cols-[390px_1fr] items-center gap-[74px]">
                    {/* Left Content */}
                    <div className="pt-[18px]">
                        {/* Label */}
                        <div className="flex items-center gap-[8px]">
                            <img
                                src="/features/feedback.svg"
                                alt="Frame Feedback"
                                className="h-[24px] w-[24px]"
                            />

                            <span
                                className="text-[14px] font-normal leading-[100%] text-[#777777]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Frame Feedback
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="mt-[26px] w-[430px] text-[36px] font-semibold leading-[122%] tracking-[-1px] text-[#171717]"
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            Assign. Track. Deliver Without Chaos.
                        </h2>

                        {/* Description */}
                        <p
                            className="mt-[30px] w-[430px] text-[16px] font-normal leading-[135%] text-[#7A7A7A]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            Managing Editors And Tracking Tasks Across
                            Multiple Tools Creates Confusion And Delays.
                            Procevia Centralizes Your Entire Production
                            Workflow, Giving You Complete Visibility And
                            Control Over Every Task, Editor, And Deadline.
                        </p>
                    </div>

                    {/* Dashboard */}
                    <div className="relative flex justify-end">
                        {/* Soft Shadow */}
                        <div className="absolute right-[20px] top-[30px] h-[84%] w-[68%] rounded-[42px] bg-black/10 blur-[70px]" />

                        {/* Dashboard Image */}
                        <Image
                            src="/features/feedback-dashboard.png"
                            alt="Frame Feedback Dashboard"
                            width={560}
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