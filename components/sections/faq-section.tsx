"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
    {
        id: 1,
        icon: "/faq/Info.svg",
        question:
            "How can this dashboard help my agency manage projects more efficiently?",
        answer:
            "Our platform centralizes every part of your workflow — from assigning tasks to tracking progress and payments — so your team can collaborate faster, stay organized, and deliver results on time.",
    },
    {
        id: 2,
        icon: "/faq/calendar.svg",
        question:
            "Does the platform support client management and performance tracking?",
        answer:
            "Yes. Procevia gives agencies a centralized workspace to monitor performance, deadlines, approvals, and reporting.",
    },
    {
        id: 3,
        icon: "/faq/card.svg",
        question:
            "Can I assign and monitor tasks for multiple team members at once?",
        answer:
            "Absolutely. Create tasks, assign responsibilities, track timelines, and monitor progress from a unified dashboard.",
    },
    {
        id: 4,
        icon: "/faq/flag.svg",
        question:
            "Is the dashboard customizable to match my agency’s workflow?",
        answer:
            "Yes. Procevia adapts to your internal processes with customizable workflows, stages, and operational structures.",
    },
    {
        id: 5,
        icon: "/faq/user.svg",
        question:
            "How does the payment and revenue tracking feature work?",
        answer:
            "Track invoices, payments, pending balances, and overall financial performance directly within your workflow.",
    },
    {
        id: 6,
        icon: "/faq/home.svg",
        question:
            "Do I need any technical setup or training to get started?",
        answer:
            "No technical setup is required. The platform is designed for intuitive onboarding and immediate usability.",
    },
];

function FAQCard({
    faq,
    isOpen,
    onToggle,
}: {
    faq: (typeof faqData)[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={`overflow-hidden rounded-[24px] border transition-all duration-500 ${isOpen
                    ? "border-[#E7DDAF] bg-[#FFF8E6] w-[589px] h-[228px]"
                    : "border-[#ECECEC] bg-white w-[589px] h-[92.42px]"
                } shadow-[0_4px_18px_rgba(0,0,0,0.04)]`}
        >
            <button
                onClick={onToggle}
                className={`w-full px-7 text-left transition-all duration-500 ${isOpen ? "py-6 " : "py-7 "
                    }`}
            >
                <div className="flex items-start justify-between gap-5">
                    {/* Left */}
                    <div className="flex gap-4">
                        {/* Icon */}
                        <div
                            className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-white" : "bg-[#F7F7FB]"
                                } shadow-sm`}
                        >
                            <Image
                                src={faq.icon}
                                alt={faq.question}
                                width={28}
                                height={28}
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h3
                                className={` leading-[135%] font-bold transition-all duration-300 ${isOpen
                                        ? "max-w-[478px] h-[74px] text-[20px] font-bold text-black h-[41px]"
                                        : "max-w-[478px] h-[74px] text-[20px] font-bold text-[#16123F]"
                                    }`}
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                {faq.question}
                            </h3>

                            {/* Expandable Content */}
                            <div
                                className={`grid transition-all duration-300 ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p
                                        className="h-[103px] w-[425px] text-[14px] leading-[190%] text-[#6B6B8A]"
                                        style={{
                                            fontFamily: "ArialCustom",
                                        }}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Toggle */}
                    <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] shadow-sm transition-all duration-500 ${isOpen
                                ? "bg-[#F6D36A]"
                                : "bg-[#F6F4FB]"
                            }`}
                    >
                        <Image
                            src={
                                isOpen
                                    ? "/faq/minus.svg"
                                    : "/faq/plus.svg"
                            }
                            alt="toggle"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </button>
        </div>
    );
}

export default function FAQSection() {
    const [openId, setOpenId] = useState<number>(1);

    return (
        <section className="bg-white py-18">
            <div className="mx-auto max-w-[1220px] px-6">
                {/* Heading */}
                <div className=" flex items-start justify-between gap-10">
                    <div>
                        <h2
                            className="w-[546px] h-[160px] text-[64px] font-extrabold leading-[105%] tracking-[-3px] text-black"
                            style={{
                                fontFamily: "Archivo",
                            }}
                        >
                            Frequently Asked{" "}
                            <span className="bg-[#F6D36A] px-2">
                                Questions.
                            </span>
                        </h2>
                    </div>

                    <p
                        className="w-[316px] h-[23px] pt-10 text-center text-[20px] font-bold leading-[100%] tracking-[0%] text-black lg:text-right"
                        style={{
                            fontFamily: "ArialCustom",
                        }}
                    >
                        Simple answers. Powerful clarity.
                    </p>
                </div>

                {/* FAQ GRID */}
                <div className="w-[1198px] h-[454px] mt-10 grid gap-5 lg:grid-cols-2">
                    {/* Left */}
                    <div className="flex flex-col gap-5">
                        {faqData.slice(0, 3).map((faq) => (
                            <FAQCard
                                key={faq.id}
                                faq={faq}
                                isOpen={openId === faq.id}
                                onToggle={() =>
                                    setOpenId(
                                        openId === faq.id ? 0 : faq.id
                                    )
                                }
                            />
                        ))}
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-5">
                        {faqData.slice(3, 6).map((faq) => (
                            <FAQCard
                                key={faq.id}
                                faq={faq}
                                isOpen={openId === faq.id}
                                onToggle={() =>
                                    setOpenId(
                                        openId === faq.id ? 0 : faq.id
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}