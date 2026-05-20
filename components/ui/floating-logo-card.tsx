import Image from "next/image";

export default function FloatingLogoCard() {
    return (
        <div
            className="
                relative
                mt-[2px]
                flex
                items-center
                justify-center
                rotate-[-2deg]
                bg-white

                h-[52px]
                w-[112px]

                sm:h-[100px]
                sm:w-[190px]

                md:h-[124px]
                md:w-[221px]
            "
        >
            {/* ================= MOBILE DASHED LINES ================= */}

            {/* Top */}
            <div
                className="
                    absolute
                    left-[-8px]
                    top-[5px]
                    h-px
                    w-[118%]

                    bg-[repeating-linear-gradient(to_right,#9A9A9A_0px,#9A9A9A_5px,transparent_5px,transparent_12px)]

                    sm:left-[-17px]
                    sm:top-[10px]
                    sm:w-[calc(120%-6px)]

                    sm:bg-[repeating-linear-gradient(to_right,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]
                "
            />

            {/* Bottom */}
            <div
                className="
                    absolute
                    bottom-[5px]
                    left-[-8px]
                    h-px
                    w-[118%]

                    bg-[repeating-linear-gradient(to_right,#9A9A9A_0px,#9A9A9A_5px,transparent_5px,transparent_12px)]

                    sm:left-[-15px]
                    sm:bottom-[8px]
                    sm:w-[calc(120%-20px)]

                    sm:bg-[repeating-linear-gradient(to_right,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]
                "
            />

            {/* Left */}
            <div
                className="
                    absolute
                    left-[5px]
                    top-[-6px]
                    w-px
                    h-[128%]

                    bg-[repeating-linear-gradient(to_bottom,#9A9A9A_0px,#9A9A9A_5px,transparent_5px,transparent_12px)]

                    sm:left-[10px]
                    sm:top-[-10px]
                    sm:h-[calc(140%-20px)]

                    sm:bg-[repeating-linear-gradient(to_bottom,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]
                "
            />

            {/* Right */}
            <div
                className="
                    absolute
                    right-[5px]
                    top-[-6px]
                    w-px
                    h-[128%]

                    bg-[repeating-linear-gradient(to_bottom,#9A9A9A_0px,#9A9A9A_5px,transparent_5px,transparent_12px)]

                    sm:right-[10px]
                    sm:top-[-10px]
                    sm:h-[calc(140%-20px)]

                    sm:bg-[repeating-linear-gradient(to_bottom,#9A9A9A_0px,#9A9A9A_8px,transparent_8px,transparent_20px)]
                "
            />

            {/* Logo */}
            <div className="relative z-10">
                <Image
                    src="/Frame 396.svg"
                    alt="Procevia"
                    width={190}
                    height={42}
                    className="
                        h-auto

                        w-[82px]

                        sm:w-[160px]

                        md:w-[190px]
                    "
                    priority
                />
            </div>
        </div>
    );
}