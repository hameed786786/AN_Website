"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

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

    return (
        <section className="bg-white py-[120px]">
            <div className="mx-auto max-w-[1220px] px-6">
                {/* Heading */}
                <div className="flex items-start justify-between gap-10">
                    <div>
                        <h2
                            className="max-w-[680px] text-[72px] font-extrabold leading-[105%] tracking-[-3px] text-black"
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
                        className="pt-10 text-center text-[20px] font-bold leading-[100%] text-black lg:text-right"
                        style={{
                            fontFamily: "ArialCustom",
                        }}
                    >
                        See what our customers have to say
                    </p>
                </div>

                {/* Main Container */}
                <div className="relative mt-20 ml-[-30px] h-[807px] w-[1220px] overflow-hidden rounded-[36px] bg-[#FFF7DD] px-16 py-12">
                    
                    {/* Controls */}
                    <div className="absolute left-8 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4">
                        <button
                            onClick={handlePrev}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-105"
                        >
                            <ChevronUp
                                size={18}
                                className="text-[#E8BE42]"
                            />
                        </button>

                        <button
                            onClick={handleNext}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-105"
                        >
                            <ChevronDown
                                size={18}
                                className="text-[#E8BE42]"
                            />
                        </button>
                    </div>

                    {/* Testimonial Stack */}
                    <div className="ml-26 flex h-[690px] w-[930px] flex-col gap-5">
                        {testimonials.map(
                            (testimonial, index) => {
                                const isActive =
                                    index === activeIndex;

                                return (
                                    <div
                                        key={testimonial.id}
                                        className={`relative rounded-[22px] border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                                        ${
                                            isActive
                                                ? "border-[#F1D374] bg-white py-7 opacity-100 shadow-[0_10px_30px_rgba(232,190,66,0.18)]"
                                                : "border-transparent bg-[#FFFBEF] py-5 opacity-35"
                                        }`}
                                    >
                                        {/* Floating Quote */}
                                        <div className="absolute left-8 top-0 z-30 -translate-y-1/2">
                                            <Image
                                                src="/Quotes.svg"
                                                alt="Quote"
                                                width={64}
                                                height={64}
                                                className="h-auto w-[64px]"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 px-9 pt-5">
                                            <p
                                                className={`max-w-[700px] text-[16px] font-normal leading-[25px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
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
                                                            className="text-[20px] font-bold text-black"
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
                                                            className="mt-1 text-[14px] text-[#7A7A7A] font-normal"
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
        </section>
    );
}