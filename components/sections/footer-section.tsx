"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
    "About Us",
    "Features",
    "Price",
    "Testimonials",
    "FAQ",
];

const socialIcons = [
    {
        icon: "/youtube.svg",
        link: "#",
        alt: "Youtube",
    },
    {
        icon: "/whatsapp.svg",
        link: "#",
        alt: "Whatsapp",
    },
    {
        icon: "/instagram.svg",
        link: "#",
        alt: "Instagram",
    },
    {
        icon: "/twitter.svg",
        link: "#",
        alt: "Twitter",
    },
];

export default function FooterSection() {
    const [email, setEmail] = useState("");

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!email) return;

        console.log("Subscribed:", email);

        setEmail("");
    };

    return (
        <footer className="relative mt-2 overflow-visible bg-white pt-12 sm:pt-16 md:pt-20 lg:overflow-hidden lg:pt-32">

            {/* ================= MOBILE VIEW ONLY ================= */}
            <div className="block sm:hidden">

                {/* CURVE */}
                <div className="absolute left-0 top-0 w-full overflow-hidden">
                    <Image
                        src="/background-curve.svg"
                        alt="Background Curve"
                        width={1920}
                        height={320}
                        className="
      w-full
      h-[92px]
      object-cover
      object-top
      scale-[1.45]
      translate-y-[-18px]
    "
                    />
                </div>

                <div className="relative z-20 px-[12px] pt-[90px]">

                    {/* NEWSLETTER */}
                    <div className="rounded-[16px] bg-black px-[14px] pt-[34px] pb-[28px] ">

                        <h2
                            className=" h-[26px] text-center text-[24px] font-bold leading-[120%] text-white"
                            style={{
                                fontFamily: "Archivo",
                            }}
                        >
                            Subscribe Newsletters
                        </h2>

                        {/* FORM */}
                        <form
                            onSubmit={handleSubmit}
                            className="ml-[38px] w-[263px] h-[37.13px] mt-[24px] flex items-center rounded-[4px] bg-white p-[4px] justify-center"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className=" items-center flex-1 border-none bg-transparent px-[10px] text-[10px] text-black outline-none placeholder:text-[#9A9A9A]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            />

                            <button
                                type="submit"
                                className="flex h-[28.88px] w-[92px] items-center justify-center rounded-[3px] bg-[#F6D36A] text-[10px] font-bold text-white transition-all duration-300 active:scale-95"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>

                    {/* NAV + SOCIAL */}
                    <div className="mt-[28px] flex items-start justify-between">

                        {/* LINKS */}
                        <div className="flex flex-col gap-[38px]">

                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    className="text-left text-[14px] font-normal text-black"
                                    style={{
                                        fontFamily: "ArialCustom",
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* SOCIAL */}
                        <div className="flex items-center gap-[14px] pt-[2px]">

                            {socialIcons.map((item) => (
                                <a
                                    key={item.alt}
                                    href={item.link}
                                    className="transition-all duration-300 active:scale-95"
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.alt}
                                        width={24}
                                        height={24}
                                        className="h-[22px] w-[22px]"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="mt-[42px] h-px w-full bg-[#D9D9D9]" />

                    {/* BOTTOM */}
                    <div className="pb-[34px] pt-[24px]">

                        <h3
                            className="text-[18px] font-bold text-[#141B34]"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            © Powered by Anthill Networks.
                        </h3>

                        {/* POLICIES */}
                        <div className="mt-[28px] flex items-center justify-center gap-[34px]">

                            <button
                                className="text-[14px] font-normal text-[#141B34]"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Terms of Service
                            </button>

                            <button
                                className="text-[14px] font-normal text-[#141B34]"
                                style={{
                                    fontFamily: "ArialCustom",
                                    fontWeight: "400",
                                }}
                            >
                                Privacy Policy
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= DESKTOP/TABLET VIEW UNCHANGED ================= */}
            <div className="hidden sm:block">

                {/* Background Curve */}
                <div className="absolute left-0 top-0 w-full">
                    <Image
                        src="/background-curve.svg"
                        alt="Background Curve"
                        width={1920}
                        height={320}
                        className="w-full object-cover"
                    />
                </div>

                <div className="relative z-20 mx-auto max-w-305 px-4 sm:px-5 md:px-6 lg:z-10 lg:px-6">

                    {/* Newsletter Card */}
                    <div className="relative overflow-hidden rounded-[20px] bg-black px-4 py-6 shadow-[0_30px_60px_rgba(0,0,0,0.25)] sm:px-8 sm:py-9 md:px-10 md:py-12 lg:px-20 lg:py-16">
                        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-10">

                            {/* Heading */}
                            <h2
                                className="max-w-60 text-center text-2xl font-bold leading-[100%] text-white sm:max-w-[320px] sm:text-4xl md:max-w-90 md:text-[42px] lg:max-w-95 lg:text-[48px] lg:text-left"
                                style={{
                                    fontFamily: "Archivo",
                                }}
                            >
                                Subscribe
                                <br />
                                Newsletters
                            </h2>

                            {/* Form */}
                            <form
                                onSubmit={handleSubmit}
                                className="flex h-12 w-full max-w-127.5 items-center rounded-lg bg-white p-1 sm:h-16 sm:p-2 md:h-18 md:p-2"
                            >
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    className="h-full flex-1 border-none bg-transparent px-2 text-xs text-black outline-none placeholder:text-[#9A9A9A] sm:px-4 sm:text-base"
                                    style={{
                                        fontFamily: "ArialCustom",
                                    }}
                                />

                                <button
                                    type="submit"
                                    className="h-10 w-24 rounded-md bg-[#F6D36A] text-xs font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#efcb59] sm:h-12 sm:w-37.5 sm:text-[16px] md:h-14 md:w-45 md:text-[18px]"
                                    style={{
                                        fontFamily: "ArialCustom",
                                    }}
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer Nav */}
                    <div className="mt-8 flex flex-col items-center justify-between gap-4 lg:mt-16 lg:flex-row lg:gap-8">

                        {/* Links */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:justify-start lg:gap-10">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    className="text-[13px] font-normal text-black transition-all duration-300 hover:opacity-60 sm:text-[15px] md:text-[16px]"
                                    style={{
                                        fontFamily: "ArialCustom",
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-5">
                            {socialIcons.map((item) => (
                                <a
                                    key={item.alt}
                                    href={item.link}
                                    className="transition-all duration-300 hover:scale-110 hover:opacity-80"
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.alt}
                                        width={24}
                                        height={24}
                                        className="h-4.5 w-4.5 sm:h-6 sm:w-6"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-6 h-px w-full bg-[#D9D9D9] lg:mt-10" />

                    {/* Bottom */}
                    <div className="flex flex-col items-center gap-3 py-6 text-center sm:gap-5 md:flex-row md:items-center md:justify-between md:text-left lg:flex-row lg:justify-end lg:gap-30 lg:py-12">

                        {/* Copyright */}
                        <h3
                            className="text-sm font-bold text-[#141B34] sm:text-lg md:text-[20px] lg:text-[24px] lg:text-left"
                            style={{
                                fontFamily: "ArialCustom",
                            }}
                        >
                            © Powered by Anthill Networks.
                        </h3>

                        {/* Policies */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-10">

                            <button
                                className="text-[11px] font-normal text-[#141B34] transition-all duration-300 hover:opacity-60 sm:text-sm"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Terms of Service
                            </button>

                            <button
                                className="text-[11px] font-normal text-[#141B34] transition-all duration-300 hover:opacity-60 sm:text-sm"
                                style={{
                                    fontFamily: "ArialCustom",
                                }}
                            >
                                Privacy Policy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 