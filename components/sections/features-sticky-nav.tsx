"use client";

import { useEffect, useRef, useState } from "react";
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
  const [activeSection, setActiveSection] =
    useState("ai-automation");

  const navScrollRef =
    useRef<HTMLDivElement | null>(null);

  const itemRefs = useRef<
    Record<string, HTMLButtonElement | null>
  >({});

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
        if (section)
          observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth >= 1024) return;

    const container = navScrollRef.current;

    const activeButton =
      itemRefs.current[activeSection];

    if (!container || !activeButton) return;

    const targetLeft =
      activeButton.offsetLeft -
      (container.clientWidth -
        activeButton.clientWidth) /
        2;

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeSection]);

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
      {/* ================= SECTION HEADING ================= */}
      <section className="w-full pt-[20px] pb-[12px] sm:pt-[26px] sm:pb-[14px] lg:pt-[40px] lg:pb-[20px]">

        <div className="mx-auto w-full max-w-[1265px] px-4 sm:px-6 lg:px-0">

          {/* ================= MOBILE ================= */}
          <div className="block sm:hidden mb-[14px]">

            <h2
              className="
                text-[22px]
                font-bold
                leading-[100%]
                tracking-[-1px]
                text-black
              "
              style={{
                fontFamily: "Geist",
              }}
            >
              <span className="bg-[rgba(255,199,39,1)] px-[6px] py-[2px]">
                Features
              </span>
            </h2>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden sm:block mb-[12px] sm:mb-[14px] lg:mb-[20px]">

            <h2
              className="text-[28px] font-bold leading-[100%] tracking-[-0.8px] text-black sm:text-[34px] sm:tracking-[-1px] lg:text-[64px] lg:tracking-[-2px]"
              style={{
                fontFamily: "Geist",
              }}
            >
              <span className="bg-[rgba(255,199,39,1)] px-[8px] py-[2px] sm:px-[9px] lg:px-[10px]">
                Features
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* ================= STICKY NAV ================= */}
      <div className="sticky top-0 z-50 w-full bg-[#F8F8F8]/95 backdrop-blur-md pt-[6px] sm:pt-[12px] lg:pt-[20px]">

        <div className="mx-auto w-full max-w-[1265px] px-4 sm:px-6 lg:px-0">

          <div>

            {/* ================= NAVIGATION ================= */}
            <div
              ref={navScrollRef}
              className="
                flex items-center justify-start
                overflow-x-auto no-scrollbar

                py-1 px-1 -mx-1

                /* ================= MOBILE ================= */
                max-sm:grid
                max-sm:grid-cols-2
                max-sm:gap-y-[14px]
                max-sm:gap-x-[10px]
                max-sm:overflow-visible
                max-sm:px-[2px]
                max-sm:py-0
                max-sm:mt-[2px]

                /* ================= DESKTOP ================= */
                lg:justify-between
              "
            >
              {featureItems.map((item) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <button
                    key={item.id}

                    ref={(el) => {
                      itemRefs.current[item.id] =
                        el;
                    }}

                    onClick={() =>
                      scrollToSection(item.id)
                    }

                    className={`
                      flex shrink-0 items-center
                      transition-all duration-500 hover:scale-[1.04]

                      /* ================= MOBILE ================= */
                      max-sm:min-h-[24px]
                      max-sm:gap-[6px]
                      max-sm:rounded-full

                      ${
                        isActive
                          ? "max-sm:bg-[rgba(255,199,39,1)] max-sm:px-[12px] max-sm:py-[8px] text-black"
                          : "max-sm:bg-transparent max-sm:px-0 max-sm:py-0 text-[#7A7A7A]"
                      }

                      /* ================= DESKTOP ================= */
                      h-[28px]
                      gap-[5px]
                      rounded-full
                      px-[10px]

                      sm:h-[30px]
                      sm:gap-[6px]
                      sm:px-[12px]

                      lg:h-[34px]
                      lg:gap-[8px]
                      lg:px-[16px]

                      ${
                        isActive
                          ? "bg-[rgba(255,199,39,1)] text-black"
                          : "bg-transparent text-[#7A7A7A]"
                      }
                    `}
                  >
                    {/* ICON */}
                    <img
                      src={item.icon}
                      alt={item.label}

                      className={`
                        transition-all duration-300

                        /* ================= MOBILE ================= */
                        max-sm:h-[15px]
                        max-sm:w-[15px]

                        /* ================= DESKTOP ================= */
                        h-[18px]
                        w-[18px]

                        sm:h-[20px]
                        sm:w-[20px]

                        lg:h-[24px]
                        lg:w-[24px]

                        ${
                          isActive
                            ? "opacity-100 scale-105"
                            : "opacity-70"
                        }
                      `}

                      style={{
                        filter:
                          isActive
                            ? "brightness(0) saturate(100%) contrast(1.25) drop-shadow(0 0 0.45px #000)"
                            : item.id ===
                              "ai-automation"
                            ? "grayscale(1) brightness(0.78) contrast(0.78)"
                            : "grayscale(1) brightness(0.58) contrast(1)",
                      }}
                    />

                    {/* LABEL */}
                    <span
                      className={`
                        whitespace-nowrap
                        leading-[100%]

                        /* ================= MOBILE ================= */
                        max-sm:text-[10px]

                        /* ================= DESKTOP ================= */
                        text-[11px]

                        sm:text-[12px]

                        lg:text-[14px]

                        ${
                          isActive
                            ? "font-bold"
                            : "font-normal"
                        }
                      `}
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

            {/* ================= DIVIDER ================= */}
            <div className="mt-[14px] sm:mt-[18px] lg:mt-[24px] h-px w-full bg-[#B8B8B8]" />
          </div>
        </div>
      </div>
    </>
  );
}