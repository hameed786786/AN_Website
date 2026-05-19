"use client";

import Image from "next/image";
import { useState } from "react";
import { Archivo } from "next/font/google";
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800"],
});

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
    </footer>
  );
}