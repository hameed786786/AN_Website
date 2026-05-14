import Image from "next/image";

export default function FloatingLogoCard() {
  return (
    <div className="relative mt-[8px] flex h-[124px] w-[221px] rotate-[-2deg] items-center justify-center  bg-white">
      {/* CanvasGrid Style Dashed Lines */}

      {/* Top */}
      <div className="absolute left-[-1px] top-[10px] h-px w-[calc(120%-10px)] bg-[repeating-linear-gradient(to_right,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]" />

      {/* Bottom */}
      <div className="absolute bottom-[10px] left-[-15px] h-px w-[calc(120%-20px)] bg-[repeating-linear-gradient(to_right,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]" />

      {/* Left */}
      <div className="absolute left-[10px] top-[-10px] h-[calc(140%-20px)] w-px bg-[repeating-linear-gradient(to_bottom,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]" />

      {/* Right */}
      <div className="absolute right-[10px] top-[-10px] h-[calc(140%-20px)] w-px bg-[repeating-linear-gradient(to_bottom,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]" />

      {/* Logo */}
      <div className="relative z-10">
        <Image
          src="/Frame 396.svg"
          alt="Procevia"
          width={190}
          height={42}
          className="h-auto w-[190px]"
          priority
        />
      </div>
    </div>
  );
}