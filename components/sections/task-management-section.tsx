import Image from "next/image";

export default function TaskManagementSection() {
    return (
        <section
            id="task-management"
            className="relative overflow-hidden pt-[40px] pb-[80px]"
        >
            <div className="absolute right-[-220px] top-[120px] z-0 h-[620px] w-[620px] rounded-full bg-[#FFF1BE]/90 blur-[150px]" />

            <div className="absolute right-[120px] top-[260px] z-0 h-[360px] w-[360px] rounded-full bg-[#FFF8E7]/90 blur-[120px]" />

            <div className="relative z-20 mx-auto w-[1265px]">
                <div className="grid grid-cols-[390px_1fr] items-center gap-[74px]">
                    <div className="pt-[18px]">
                        <div className="flex items-center gap-[8px]">
                            <img
                                src="/features/task.svg"
                                alt="Task Management"
                                className="h-[24px] w-[24px]"
                            />

                            <span
                                className="text-[14px] font-normal leading-[100%] text-[#777777]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Task Management
                            </span>
                        </div>

                        <h2
                            className="mt-[26px] w-[430px] text-[36px] font-semibold leading-[122%] tracking-[-1px] text-[#171717]"
                            style={{
                                fontFamily: "Geist",
                            }}
                        >
                            Assign. Track. Deliver Without Chaos.
                        </h2>

                        <p
                            className="mt-[30px] w-[420px] text-[16px] font-normal leading-[135%] text-[#7A7A7A]"
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

                    <div className="relative flex justify-end">
                        <div className="absolute right-[20px] top-[34px] h-[86%] w-[90%] rounded-[44px] bg-black/10 blur-[70px]" />

                        <Image
                            src="/features/task-dashboard.png"
                            alt="Task Management Dashboard"
                            width={875}
                            height={494}
                            priority
                            className="relative z-10 h-[494px] w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}