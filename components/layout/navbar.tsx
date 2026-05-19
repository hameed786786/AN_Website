"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
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
      <header className="mt-[10px] w-full py-3 sm:py-4 md:py-5">
        <SectionWrapper>
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-3 flex-shrink-0"
            >
              <Image
                src="/logo.svg"
                alt="Procevia Logo"
                width={40}
                height={40}
                className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-10 lg:w-10"
                priority
              />

              <span
                className="text-sm sm:text-base md:text-lg lg:text-2xl font-normal uppercase leading-5 sm:leading-6 md:leading-8 lg:leading-8 text-black whitespace-nowrap"
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
                  className="text-[16px] font-normal leading-[32px] text-[#171717] transition-colors duration-300 hover:text-black md:text-[12px]"
                  style={{
                    fontFamily: "ArialCustom",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {/* CTA */}
              <CTAButton className="hidden md:flex">
                <p
                  className="text-[20px] leading-[32px] tracking-[-0.02em] font-black"
                  style={{
                    fontFamily: "ArialCustom, Arial, sans-serif"
                  }}
                >
                  Book a Demo
                </p>
              </CTAButton>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex md:hidden items-center justify-center p-1.5 text-gray-700 hover:text-black transition-colors flex-shrink-0"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </SectionWrapper>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
}