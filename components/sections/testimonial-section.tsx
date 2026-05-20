"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote:
            '"We’ve cut project turnaround time by almost 40%. The automation and client tracking features are absolute game-changers!"',
        name: "Sarah Mitchell",
        role: "Operations Lead at PixelCraft",
    },
    {
        id: 2,
        quote:
            '"Our team collaboration became smoother overnight. Everything feels centralized and easy to manage."',
        name: "David Parker",
        role: "Founder at Elevate Studio",
    },
    {
        id: 3,
        quote:
            '"This dashboard completely transformed how our agency operates — assigning tasks and tracking progress has never been this seamless."',
        name: "Jhon Luther",
        role: "Creative Director at AdNova Agency",
    },
    {
        id: 4,
        quote:
            '"Finally, a tool built for agencies! Everything from scheduling to revenue tracking feels effortless and beautifully organized."',
        name: "Emma Roberts",
        role: "CEO at Flux Media",
    },
    {
        id: 5,
        quote:
            '"We replaced three separate tools with Procevia. Productivity improved instantly across every department."',
        name: "Michael Ray",
        role: "Agency Manager at BrightPath",
    },
];

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(2);

    const handlePrev = () => {
        setActiveIndex((prev) =>
            prev === 0
                ? testimonials.length - 1
                : prev - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prev) =>
            prev === testimonials.length - 1
                ? 0
                : prev + 1
        );
    };

    const activeTestimonial =
        testimonials[activeIndex];

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-30">

            {/* ================= MOBILE VIEW ONLY ================= */}
            <div className="block sm:hidden px-[14px]">

                {/* HEADING */}
                <div>
                    <h2
                        className="text-[22px] font-extrabold leading-[118%] tracking-[-1px] text-black"
                        style={{
                            fontFamily: "Archivo",
                        }}
                    >
                        Loved by Marketing
                        <br />

                        <span className="bg-[#F6D36A] px-[4px]">
                            Teams Worldwide
                        </span>
                    </h2>

                    <p
                        className="mt-[28px] text-[14px] leading-[145%] text-black"
                        style={{
                            fontFamily: "ArialCustom",
                        }}
                    >
                        See what our customers have to say
                    </p>
                </div>

                {/* CARD SECTION */}
                <div className="mt-[48px] rounded-[24px] bg-[#FFF7DD] px-[18px] pt-[72px] pb-[36px]">

                    {/* CARD */}
                    <div className="relative rounded-[22px] border border-[#F1D374] bg-white px-[28px] pt-[34px] pb-[28px] shadow-[0_10px_30px_rgba(232,190,66,0.18)]">

                        {/* QUOTE ICON */}
                        <div className="absolute left-[12px] top-0 -translate-y-1/2">
                            <Image
                                src="/Quotes.svg"
                                alt="Quote"
                                width={64}
                                height={64}
                                className="w-[52px] h-auto"
                            />
                        </div>

                        {/* CONTENT */}
                        <p
                            className="w-[288px] h-[130px] text-[16px] leading-[185%] text-[#202020]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            {
                                activeTestimonial.quote
                            }
                        </p>

                        <div className="mt-[28px]">
                            <h3
                                className="text-[20px] font-bold text-black"
                                style={{
                                    fontFamily: "ArialCustom",
                                    fontWeight: "700",
                                }}
                            >
                                {
                                    activeTestimonial.name
                                }
                            </h3>

                            <p
                                className="mt-[8px] text-[14px] leading-[150%] text-[#7A7A7A]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                {
                                    activeTestimonial.role
                                }
                            </p>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-[40px] flex items-center justify-center gap-[18px]">

                        <button
                            onClick={handlePrev}
                            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all duration-300 active:scale-95"
                        >
                            <ChevronLeft
                                size={20}
                                className="text-[#E8BE42]"
                            />
                        </button>

                        <button
                            onClick={handleNext}
                            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all duration-300 active:scale-95"
                        >
                            <ChevronRight
                                size={20}
                                className="text-[#E8BE42]"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= DESKTOP VIEW UNCHANGED ================= */}
            <div className="hidden sm:block">
                <div className="mx-auto max-w-305 px-3 sm:px-4 md:px-6 lg:px-6">

                    {/* Heading */}
                    <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 lg:flex-row lg:gap-10">
                        <div className="w-full lg:w-auto">
                            <h2
                                className="max-w-170 text-2xl font-extrabold leading-[110%] tracking-[-1px] text-black sm:text-3xl sm:tracking-[-1.2px] md:text-4xl md:tracking-[-1.5px] lg:text-[72px] lg:leading-[105%] lg:tracking-[-3px]"
                                style={{
                                    fontFamily: "Archivo",
                                }}
                            >
                                Loved by Marketing
                                <br />
                                Teams{" "}
                                <span className="bg-[#F6D36A] px-2">
                                    Worldwide
                                </span>
                            </h2>
                        </div>

                        <p
                            className="pt-0 text-left text-xs font-bold leading-[120%] text-black sm:text-sm md:text-base lg:pt-10 lg:text-right lg:text-[20px] lg:leading-[100%]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            See what our customers have to say
                        </p>
                    </div>

                    {/* Main Container */}
                    <div className="relative mt-8 ml-0 h-auto w-full overflow-hidden rounded-3xl bg-[#FFF7DD] px-3 py-4 sm:mt-10 sm:rounded-[28px] sm:px-4 sm:py-6 md:px-6 md:py-8 lg:mt-20 lg:-ml-7.5 lg:h-214.25 lg:w-305 lg:rounded-[36px] lg:px-16 lg:py-12">

                        {/* Controls */}
                        <div className="absolute right-3 top-3 z-20 flex flex-row gap-2.5 sm:gap-3 lg:left-8 lg:right-auto lg:top-1/2 lg:flex-col lg:-translate-y-1/2 lg:gap-4">
                            <button
                                onClick={handlePrev}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-105 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
                            >
                                <ChevronUp
                                    size={16}
                                    className="h-3.5 w-3.5 text-[#E8BE42] sm:h-4 sm:w-4"
                                />
                            </button>

                            <button
                                onClick={handleNext}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-105 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
                            >
                                <ChevronDown
                                    size={16}
                                    className="h-3.5 w-3.5 text-[#E8BE42] sm:h-4 sm:w-4"
                                />
                            </button>
                        </div>

                        {/* Testimonial Stack */}
                        <div className="flex w-full flex-col gap-3 pt-8 sm:gap-4 sm:pt-10 lg:ml-26 lg:h-172.5 lg:w-232.5 lg:pt-0">
                            {testimonials.map(
                                (testimonial, index) => {
                                    const isActive =
                                        index === activeIndex;

                                    return (
                                        <div
                                            key={testimonial.id}
                                            className={`relative mb-2.5 rounded-[16px] border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-3 sm:rounded-[18px] md:rounded-[20px]
                                        ${
                                            isActive
                                                ? "border-[#F1D374] bg-white py-4 opacity-100 shadow-[0_10px_30px_rgba(232,190,66,0.18)] sm:py-5 lg:py-7"
                                                : "border-transparent bg-[#FFFBEF] py-3 opacity-35 sm:py-4"
                                        }`}
                                        >

                                            {/* Floating Quote */}
                                            <div className="absolute left-3 top-0 z-30 -translate-y-1/2 sm:left-5 lg:left-8">
                                                <Image
                                                    src="/Quotes.svg"
                                                    alt="Quote"
                                                    width={64}
                                                    height={64}
                                                    className="h-auto w-8 sm:w-10 lg:w-16"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 lg:px-9 lg:pt-5">
                                                <p
                                                    className={`max-w-175 text-sm font-normal leading-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-sm sm:leading-6 md:text-[15px] md:leading-6
                                                ${
                                                    isActive
                                                        ? "text-[#202020]"
                                                        : "text-[#A9A18A]"
                                                }`}
                                                    style={{
                                                        fontFamily:
                                                            "ArialCustom",
                                                    }}
                                                >
                                                    {
                                                        testimonial.quote
                                                    }
                                                </p>

                                                {/* Expanded Info */}
                                                <div
                                                    className={`grid overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                                                ${
                                                    isActive
                                                        ? "mt-7 grid-rows-[1fr] opacity-100"
                                                        : "mt-0 grid-rows-[0fr] opacity-0"
                                                }`}
                                                >
                                                    <div className="overflow-hidden">
                                                        <div className="animate-[fadeIn_0.75s_cubic-bezier(0.22,1,0.36,1)]">
                                                            <h3
                                                                className="text-sm font-bold text-black sm:text-base md:text-[18px]"
                                                                style={{
                                                                    fontFamily:
                                                                        "ArialCustom",
                                                                }}
                                                            >
                                                                {
                                                                    testimonial.name
                                                                }
                                                            </h3>

                                                            <p
                                                                className="mt-1 text-xs font-normal text-[#7A7A7A] sm:text-sm md:text-[13px]"
                                                                style={{
                                                                    fontFamily:
                                                                        "ArialCustom",
                                                                }}
                                                            >
                                                                {
                                                                    testimonial.role
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Glow */}
                                            {isActive && (
                                                <div className="absolute inset-0 rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
                                            )}
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}