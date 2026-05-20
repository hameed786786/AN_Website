"use client";

import { X } from "lucide-react";
import Link from "next/link";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-250 h-screen w-64 bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <span
            className="text-lg font-normal uppercase text-black"
            style={{
              fontFamily: "HEXCO",
            }}
          >
            Menu
          </span>
          <button
            onClick={onClose}
            className="p-1 text-gray-600 hover:text-black"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-0 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="border-b border-gray-100 px-6 py-4 text-base font-normal text-gray-700 transition-colors duration-300 hover:bg-gray-50 hover:text-black"
              style={{
                fontFamily: "ArialCustom",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
