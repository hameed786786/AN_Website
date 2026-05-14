"use client";

import { useEffect, useState } from "react";

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
  const [activeSection, setActiveSection] =
    useState("ai-automation");

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
        threshold: 0.4,
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
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="w-full py-[80px]">
      <div className="mx-auto w-[1265px]">
        {/* Features Heading */}
        <div className="mb-[42px]">
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

        {/* Sticky Nav */}
        <div className="sticky top-[88px] z-40 w-full bg-[#F8F8F8]/95 backdrop-blur-md">
          <div>
            <div className="flex items-center justify-between">
              {featureItems.map((item) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      scrollToSection(item.id)
                    }
                    className={`flex h-[34px] shrink-0 items-center gap-[8px] rounded-full px-[16px] transition-all duration-300 ${
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
                          ? "opacity-100"
                          : "opacity-70"
                      }`}
                    />

                    <span
                      className="whitespace-nowrap text-[14px] font-normal leading-[100%]"
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
    </section>
  );
}