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
    <section className="bg-white py-[60px]">
      <div className="mx-auto max-w-[1440px] px-[80px]">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-black"
            style={{
              fontFamily: "Archivo",
              fontSize: "64px",
              lineHeight: "80px",
              fontWeight: 800,
              letterSpacing: "-2px",
            }}
          >
            Why we built{" "}
            <span className="bg-[#F6D36A] px-[12px]">
              Procevia
            </span>
          </h2>

          <p
            className="mx-auto mt-[32px] max-w-[830px] text-center text-[#7A7A7A]"
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
        <div className="mt-[64px] grid grid-cols-1 gap-[28px] md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative h-[255px] overflow-hidden rounded-[36px] border border-[#E7E7E7] bg-[#F7F7F7] px-[22px] pt-[22px]"
            >
              {/* Content */}
              <div className="relative z-10 max-w-[470px]">
                <h3
                  className="text-black"
                  style={{
                    fontFamily: "Archivo",
                    fontSize: "28px",
                    lineHeight: "38px",
                    fontWeight: 700,
                    letterSpacing: "-1px",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="mt-[14px] text-[#7A7A7A]"
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
              <div className="pointer-events-none absolute bottom-[1px] right-[30px]">
                <Image
                  src={card.image}
                  alt={card.id}
                  width={260}
                  height={260}
                  className="h-auto w-[260px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}