"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import CTAButton from "@/components/ui/cta-button";
import SectionWrapper from "@/components/shared/section-wrapper";
import MobileSidebar from "./mobile-sidebar";

const navItems = [
  {
    label: "About Us",
    href: "/",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Price",
    href: "/price",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="mt-[4px] w-full py-3 sm:py-4 md:py-5 max-md:px-[16px]">
        <SectionWrapper>
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 flex-shrink-0"
            >
              <Image
                src="/logo.svg"
                alt="Procevia Logo"
                width={40}
                height={40}
                className="h-[30px] w-[30px] md:h-10 md:w-10"
                priority
              />

              <span
                className="text-[28px] md:text-2xl font-normal uppercase leading-none text-black whitespace-nowrap max-md:text-[18px]"
                style={{
                  fontFamily: "HEXCO",
                }}
              >
                PROCEVIA
              </span>
            </Link>

            {/* Nav Links */}
            <nav className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[16px] font-semibold leading-[32px] text-[#171717] transition-colors duration-300 hover:text-black md:text-[16px]"
                  style={{
                    fontFamily: "ArialCustom",
                    fontWeight: "400",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <CTAButton className="hidden md:flex">
                <p
                  className="text-[20px] leading-[32px] tracking-[-0.02em] font-black"
                  style={{
                    fontFamily: "ArialCustom, Arial, sans-serif",
                  }}
                >
                  Book a Demo
                </p>
              </CTAButton>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex md:hidden items-center justify-center p-1 text-black"
                aria-label="Open menu"
              >
                <Image
                  src="/jam_menu.svg"
                  alt="Menu"
                  width={28}
                  height={28}
                  className="h-[28px] w-[28px]"
                />
              </button>
            </div>
          </div>
        </SectionWrapper>
      </header>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}