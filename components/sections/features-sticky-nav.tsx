"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

const featureItems = [
  {
    id: "ai-automation",
    label: "AI Automation",
    icon: "/features/ai.svg",
  },
  {
    id: "task-management",
    label: "Task Management",
    icon: "/features/task.svg",
  },
  {
    id: "client-crm",
    label: "Client & CRM",
    icon: "/features/crm.svg",
  },
  {
    id: "billing-payments",
    label: "Billing & Payments",
    icon: "/features/billing.svg",
  },
  {
    id: "frame-feedback",
    label: "Frame Feedback",
    icon: "/features/feedback.svg",
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: "/features/integrations.svg",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: "/features/analytics.svg",
  },
];

export default function FeaturesStickyNav() {
  const [activeSection, setActiveSection] = useState("ai-automation");

  useEffect(() => {
    const sections = featureItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1.4,
      scrollTo: {
        y: `#${id}`,
        offsetY: 140,
      },
      ease: "power3.inOut",
    });
  };

  return (
    <>
      <section className="w-full pt-[40px] pb-[20px]">
        <div className="mx-auto w-[1265px]">
          {/* Features Heading */}
          <div className="mb-[20px]">
            <h2
              className="text-[64px] font-bold leading-[100%] tracking-[-2px] text-black"
              style={{
                fontFamily: "Geist",
              }}
            >
              <span className="bg-[rgba(255,199,39,1)] px-[10px] py-[2px]">
                Features
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-0 z-50 w-full bg-[#F8F8F8]/95 backdrop-blur-md pt-[20px] ">
        <div className="mx-auto w-[1265px]">
          <div>
            <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-1 px-1 -mx-1">
              {featureItems.map((item) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      scrollToSection(item.id)
                    }
                    className={`flex h-[34px] shrink-0 items-center gap-[8px] rounded-full px-[16px] transition-all duration-500 hover:scale-[1.04] ${
                      isActive
                        ? "bg-[rgba(255,199,39,1)] text-black"
                        : "bg-transparent text-[#7A7A7A]"
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                        className={`h-[24px] w-[24px] transition-all duration-300 ${
                        isActive
                          ? "opacity-100 scale-105"
                          : "opacity-70"
                      }`}
                        style={{
                          filter:
                            isActive
                              ? "brightness(0) saturate(100%) contrast(1.25) drop-shadow(0 0 0.45px #000)"
                              : item.id === "ai-automation"
                                ? "grayscale(1) brightness(0.78) contrast(0.78)"
                                : "grayscale(1) brightness(0.58) contrast(1)",
                        }}
                    />

                          <span
                            className={`whitespace-nowrap text-[14px] leading-[100%] ${isActive ? 'font-bold' : 'font-normal'}`}
                            style={{
                              fontFamily: "ArialCustom",
                            }}
                          >
                            {item.label}
                          </span>
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="mt-[24px] h-px w-full bg-[#B8B8B8]" />
          </div>
        </div>
      </div>
    </>
  );
}