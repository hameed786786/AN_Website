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
    <footer className="relative mt-2 overflow-hidden bg-white pt-32">
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

      <div className="relative z-10 mx-auto max-w-[1220px] px-6">
        {/* Newsletter Card */}
        <div className="relative overflow-hidden rounded-[20px] bg-black px-20 py-16 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Heading */}
            <h2
              className="max-w-[380px] text-center text-[48px] font-bold leading-[100%] text-white lg:text-left"
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
              className="flex h-[72px] w-full max-w-[510px] items-center rounded-[8px] bg-white p-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="h-full flex-1 border-none bg-transparent px-4 text-[16px] text-black outline-none placeholder:text-[#9A9A9A]"
                style={{
                  fontFamily: "ArialCustom",
                }}
              />

              <button
                type="submit"
                className="h-[56px] w-[180px] rounded-[6px] bg-[#F6D36A] text-[18px] font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#efcb59]"
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
        <div className="mt-16 flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Links */}
          <div className="flex flex-wrap items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                className="text-[16px] font-normal text-black transition-all duration-300 hover:opacity-60"
                style={{
                  fontFamily: "ArialCustom",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
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
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-[#D9D9D9]" />

        {/* Bottom */}
        <div className=" flex justify-end gap-30 py-12 lg:flex-row">
          {/* Copyright */}
          <h3
            className="text-center text-[24px] font-bold text-[#141B34] lg:text-left"
            style={{
              fontFamily: "ArialCustom",
            }}
          >
            © Powered by Anthill Networks.
          </h3>

          {/* Policies */}
          <div className="flex items-center gap-10">
            <button
              className="text-[14px] font-normal text-[#141B34] transition-all duration-300 hover:opacity-60"
              style={{
                fontFamily: "ArialCustom",
              }}
            >
              Terms of Service
            </button>

            <button
              className="text-[14px] font-normal text-[#141B34] transition-all duration-300 hover:opacity-60"
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