import Image from "next/image";

const cards = [
  {
    id: "01",
    title: "Simplicity Over Complexity",
    description:
      "We Design Systems That Are Easy To Use And Powerful In Function.",
    image: "/01.svg",
  },
  {
    id: "02",
    title: "Automation Over Manual Work",
    description:
      "We Reduce Effort Through Intelligent Workflows.",
    image: "/02.svg",
  },
  {
    id: "03",
    title: "Clarity Over Confusion",
    description:
      "We Bring Structure To Chaotic Processes.",
    image: "/03.svg",
  },
  {
    id: "04",
    title: "Speed With Reliability",
    description:
      "We Enable Fast Execution Without Compromising Quality.",
    image: "/04.svg",
  },
];

export default function WhySection() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-[60px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[64px] leading-8 sm:leading-10 md:leading-14 lg:leading-[80px]"
            style={{
              fontFamily: "Archivo",
              fontSize: "64px",
              lineHeight: "80px",
              
              letterSpacing: "-2px",
            }}
          >
            Why we built{" "}
            <span className="bg-[#F6D36A] px-1.5 sm:px-2 md:px-3 lg:px-[12px] py-0.5 sm:py-1 inline-block">
              Procevia
            </span>
          </h2>

          <p
            className="mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-[32px] max-w-[830px] text-center text-[#7A7A7A] text-xs sm:text-sm md:text-base lg:text-[16px] leading-5 sm:leading-6 md:leading-7 lg:leading-[180%]"
            style={{
              fontFamily: "ArialCustom",
              fontSize: "16px",
              lineHeight: "180%",
              fontWeight: 400,
            }}
          >
            Digital Marketing Agencies Face Constant Operational Challenges —
            Managing Multiple Clients, Coordinating With Editors, Handling
            Feedback, And Tracking Progress Across Different Tools. These
            Fragmented Workflows Lead To Delays, Miscommunication, And
            Unnecessary Complexity.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-[64px] grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-[28px] md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative w-full h-auto sm:h-40 md:h-48 lg:h-[235px] overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-3xl lg:rounded-[36px] border border-[#E7E7E7] bg-[#F7F7F7] px-4 sm:px-5 md:px-6 lg:px-[22px] py-4 sm:py-5 md:py-6 lg:py-0 lg:pt-[22px] flex flex-col lg:flex-row lg:items-start"
            >
              {/* Content */}
              <div className="relative z-10 w-full lg:w-[415px] flex-shrink-0">
                <h3
                  className="text-black text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-6 sm:leading-7 md:leading-8 lg:leading-[38px]"
                  style={{
                    fontFamily: "Geist",
                    fontSize: "32px",
                    lineHeight: "38px",
                    fontWeight: 700,
                    letterSpacing: "-1px",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="mt-2 sm:mt-3 md:mt-3 lg:mt-[14px] text-[#7A7A7A] text-xs sm:text-sm md:text-base lg:text-[16px] leading-4 sm:leading-5 md:leading-6 lg:leading-[22px]"
                  style={{
                    fontFamily: "ArialCustom",
                    fontSize: "16px",
                    lineHeight: "22px",
                    fontWeight: 400,
                  }}
                >
                  {card.description}
                </p>
              </div>

              {/* Number SVG */}
              <div className="pointer-events-none absolute lg:absolute bottom-2 sm:bottom-2 md:bottom-2 lg:bottom-[1px] right-3 sm:right-4 md:right-5 lg:right-[23px]">
                <Image
                  src={card.image}
                  alt={card.id}
                  width={260}
                  height={260}
                  className="h-auto w-16 sm:w-24 md:w-32 lg:w-[260px] object-contain opacity-70 sm:opacity-90 lg:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}