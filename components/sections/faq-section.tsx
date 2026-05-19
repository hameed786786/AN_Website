"use client";

import { useState, useRef, useEffect } from "react";
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
            className={`overflow-hidden rounded-lg sm:rounded-2xl md:rounded-2xl lg:rounded-[24px] border transition-all duration-500 ${isOpen
                    ? "border-[#E7DDAF] bg-[#FFF8E6] w-full sm:w-full md:w-full lg:w-[589px] h-auto sm:h-auto md:h-auto lg:h-[228px]"
                    : "border-[#ECECEC] bg-white w-full sm:w-full md:w-full lg:w-[589px] h-auto sm:h-auto md:h-auto lg:h-[92.42px]"
                } shadow-[0_4px_18px_rgba(0,0,0,0.04)]`}
        >
            <button
                onClick={onToggle}
                className={`w-full px-3 sm:px-4 md:px-5 lg:px-7 text-left transition-all duration-500 ${isOpen ? "py-4 sm:py-5 md:py-5 lg:py-6" : "py-4 sm:py-5 md:py-5 lg:py-7"
                    }`}
            >
                <div className="flex items-start justify-between gap-3 sm:gap-4 md:gap-4 lg:gap-5">
                    {/* Left */}
                    <div className="flex gap-2 sm:gap-3 md:gap-3 lg:gap-4">
                        {/* Icon */}
                        <div
                            className={` flex h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-9 lg:w-9 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-white" : "bg-[#F7F7FB]"
                                } shadow-sm`}
                        >
                            <Image
                                src={faq.icon}
                                alt={faq.question}
                                width={28}
                                height={28}
                                className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3
                                className={`ml-0 sm:ml-0 md:ml-0 lg:ml-[4px] mt-0 sm:mt-0 md:mt-0 lg:mt-[-8px] leading-[135%] font-bold transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-[20px] ${isOpen
                                        ? "text-black"
                                        : "text-[#16123F]"
                                    }`}
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                {faq.question}
                            </h3>

                            {/* Expandable Content */}
                                                    <ExpandableAnswer isOpen={isOpen}>
                                                        <p
                                                            className="w-full text-xs sm:text-sm md:text-sm lg:text-[14px] leading-6 sm:leading-7 md:leading-7 lg:leading-[190%] text-[#6B6B8A]"
                                                            style={{
                                                                fontFamily: "ArialCustom",
                                                            }}
                                                        >
                                                            {faq.answer}
                                                        </p>
                                                    </ExpandableAnswer>
                        </div>
                    </div>

                    {/* Toggle */}
                    <div
                        className={`mt-0 sm:mt-0 md:mt-0 lg:mt-[-2px] flex h-7 w-7 sm:h-7 sm:w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 shrink-0 items-center justify-center rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-[10px] shadow-sm transition-all duration-500 ${isOpen
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
                            className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"
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
        <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-18">
            <div className="mx-auto max-w-[1220px] px-4 sm:px-6 md:px-6 lg:px-6">
                {/* Heading */}
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 md:gap-8 lg:gap-10">
                    <div className="flex-1">
                        <h2
                            className="w-full sm:w-full md:w-full lg:w-[546px] text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-extrabold leading-tight sm:leading-snug md:leading-snug lg:leading-[105%] tracking-tight sm:tracking-tight md:tracking-tight lg:tracking-[-3px] text-black"
                            style={{
                                fontFamily: "Archivo",
                            }}
                        >
                            Frequently Asked{" "}
                            <span className="bg-[#F6D36A] px-1 sm:px-1.5 md:px-2 lg:px-2 py-0.5 inline-block">
                                Questions.
                            </span>
                        </h2>
                    </div>

                    <p
                        className="w-full sm:w-full md:w-full lg:w-[316px] text-center sm:text-center md:text-center lg:text-right text-base sm:text-lg md:text-lg lg:text-[20px] font-bold leading-normal sm:leading-normal md:leading-normal lg:leading-[100%] text-black pt-0 sm:pt-0 md:pt-0 lg:pt-10"
                        style={{
                            fontFamily: "ArialCustom",
                        }}
                    >
                        Simple answers. Powerful clarity.
                    </p>
                </div>

                {/* FAQ GRID */}
                <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-10 grid gap-3 sm:gap-4 md:gap-4 lg:gap-5 lg:grid-cols-2">
                    {/* Left */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-5">
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
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-5">
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

function ExpandableAnswer({
    children,
    isOpen,
}: {
    children: React.ReactNode;
    isOpen: boolean;
}) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<string>(isOpen ? "auto" : "0px");

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;

        if (isOpen) {
            const scrollH = el.scrollHeight;
            setHeight(`${scrollH}px`);

            const parent = el.parentElement;
            const onTransitionEnd = () => {
                if (isOpen) setHeight("auto");
            };
            parent?.addEventListener("transitionend", onTransitionEnd);
            return () => parent?.removeEventListener("transitionend", onTransitionEnd);
        } else {
            if (height === "auto") {
                const scrollH = el.scrollHeight;
                setHeight(`${scrollH}px`);
                requestAnimationFrame(() => setHeight("0px"));
            } else {
                setHeight("0px");
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        function onResize() {
            const el = contentRef.current;
            if (!el) return;
            if (isOpen && height !== "auto") setHeight(`${el.scrollHeight}px`);
        }

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [isOpen, height]);

    const style: React.CSSProperties = {
        height: height === "auto" ? "auto" : height,
        overflow: "hidden",
        transition: "height 300ms ease, opacity 300ms ease",
        opacity: isOpen ? 1 : 0,
    };

    return (
        <div style={style}>
            <div ref={contentRef} className="pt-3">
                {children}
            </div>
        </div>
    );
}