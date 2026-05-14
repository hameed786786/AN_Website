"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    // Also scroll the navbar to make active item visible on mobile
    const navScrollContainer = document.getElementById("features-nav-scroll-container");
    const activeButton = document.getElementById(`nav-button-${activeSection}`);
    
    if (navScrollContainer && activeButton) {
      const containerRect = navScrollContainer.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      
      // If button is out of view (left or right)
      if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
        navScrollContainer.scrollTo({
          left: navScrollContainer.scrollLeft + (buttonRect.left - containerRect.left) - (containerRect.width / 2) + (buttonRect.width / 2),
          behavior: "smooth"
        });
      }
    }
  }, [activeSection]);

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
  const section = document.getElementById(id);

  if (!section) return;

  const offset = 140;

  const targetPosition =
    section.getBoundingClientRect().top +
    window.scrollY -
    offset;

  const startPosition = window.scrollY;

  const distance =
    targetPosition - startPosition;

  const duration = 1200;

  let start: number | null = null;

  const easeInOutCubic = (t: number) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;

    const timeElapsed =
      currentTime - start;

    const progress = Math.min(
      timeElapsed / duration,
      1
    );

    const ease =
      easeInOutCubic(progress);

    window.scrollTo(
      0,
      startPosition + distance * ease
    );

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="w-full py-[40px] md:py-[80px]"
    >
      <div className="mx-auto w-full max-w-[1265px] px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="mb-[32px] md:mb-[42px]"
        >
          <h2
            className="text-[40px] md:text-[64px] font-bold leading-[100%] tracking-[-1px] md:tracking-[-2px] text-black"
            style={{
              fontFamily: "Geist",
            }}
          >
            <span className="bg-[#f6d36a] px-[8px] md:px-[10px] py-[2px]">
              Features
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="sticky top-[88px] z-40 w-full bg-[#F8F8F8]/95 backdrop-blur-md"
        >
          <div>
            <div id="features-nav-scroll-container" className="flex items-center gap-4 overflow-x-auto no-scrollbar md:justify-between md:gap-0 pb-2 md:pb-0 scroll-smooth">
              {featureItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    id={`nav-button-${item.id}`}
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className={`relative flex h-[34px] shrink-0 items-center gap-[8px] rounded-full px-[16px] transition-all duration-300 ${
                      isActive ? "text-black" : "text-[#7A7A7A]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 28,
                        }}
                        className="absolute inset-0 rounded-full bg-[rgba(255,199,39,1)]"
                      />
                    )}

                    <img
                      src={item.icon}
                      alt={item.label}
                      className={`relative z-10 h-[18px] w-[18px] transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                    />

                    <span
                      className="relative z-10 whitespace-nowrap text-[14px] font-normal leading-[100%]"
                      style={{
                        fontFamily: "ArialCustom",
                      }}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="mt-[16px] md:mt-[24px] h-px w-full origin-left bg-[#B8B8B8]"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}