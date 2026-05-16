import Image from "next/image";
import Link from "next/link";

import CTAButton from "@/components/ui/cta-button";
import SectionWrapper from "@/components/shared/section-wrapper";

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
  return (
    <header className="mt-[10px] w-full py-5">
      <SectionWrapper>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.svg"
              alt="Procevia Logo"
              width={40}
              height={40}
              priority
            />

            <span
              className="text-[24px] font-normal uppercase leading-[32px] text-black"
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
                className="text-[16px] font-normal leading-[32px] text-[#171717] transition-colors duration-300 hover:text-black"
                style={{
                  fontFamily: "ArialCustom",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

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
        </div>
      </SectionWrapper>
    </header>
  );
}