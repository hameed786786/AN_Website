import Image from "next/image";

export default function FloatingLogoCard() {
  return (
    <div className="relative mt-[6px] flex h-[84px] w-[160px] sm:h-[100px] sm:w-[190px] md:h-[124px] md:w-[221px] rotate-[-2deg] items-center justify-center bg-white">
      {/* CanvasGrid Style Dashed Lines */}

      {/* Top */}
      <div className="absolute left-[-12px] sm:left-[-17px] top-[8px] sm:top-[10px] h-px w-[calc(120%-10px)] sm:w-[calc(120%-6px)] bg-[repeating-linear-gradient(to_right,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]" />

      {/* Bottom */}
      <div className="absolute bottom-[8px] left-[-10px] sm:left-[-15px] h-px w-[calc(120%-28px)] sm:w-[calc(120%-20px)] bg-[repeating-linear-gradient(to_right,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]" />

      {/* Left */}
      <div className="absolute left-[8px] sm:left-[10px] top-[-8px] sm:top-[-10px] h-[calc(140%-24px)] sm:h-[calc(140%-20px)] w-px bg-[repeating-linear-gradient(to_bottom,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]" />

      {/* Right */}
      <div className="absolute right-[8px] sm:right-[10px] top-[-8px] sm:top-[-10px] h-[calc(140%-24px)] sm:h-[calc(140%-20px)] w-px bg-[repeating-linear-gradient(to_bottom,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]" />

      {/* Logo */}
      <div className="relative z-10">
        <Image
          src="/Frame 396.svg"
          alt="Procevia"
          width={190}
          height={42}
          className="h-auto w-[140px] sm:w-[160px] md:w-[190px]"
          priority
        />
      </div>
    </div>
  );
}