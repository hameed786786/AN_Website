import StripePattern from "./stripe-pattern";

export default function CanvasGrid() {
    return (
        <div
            className="
                pointer-events-none absolute inset-0 overflow-visible

                max-md:overflow-hidden
            "
        >
            {/* Top Horizontal Line */}
            <div
                className="
                    absolute top-[10px] h-px 
                    w-[1840px] left-[-50px] 
                    grid-horizontal-line

                    max-md:w-[120%]
                    max-md:left-[-20px]
                    max-md:top-[18px]
                "
            />

            {/* Bottom Horizontal Line */}
            <div
                className="
                    absolute bottom-[160px] left-[-60px] 
                    h-px w-[1940px] grid-horizontal-line z-10 
                    md:bottom-[350px] lg:bottom-[155px]

                    max-md:w-[120%]
                    max-md:left-[-20px]
                    max-md:bottom-[66px]
                "
            />

            {/* Left Vertical Line */}
            <div
                className="
                    absolute left-[22px] top-[20px] 
                    h-[82vh] w-px grid-vertical-line 
                    md:h-[65vh] lg:h-[84vh]

                    max-md:left-[16px]
                    max-md:top-[26px]
                    max-md:h-[62vh]
                "
            />

            {/* Right Vertical Line */}
            <div
                className="
                    absolute right-[22px] top-[20px] 
                    h-[82vh] w-px grid-vertical-line 
                    md:h-[65vh] lg:h-[84vh]

                    max-md:right-[16px]
                    max-md:top-[26px]
                    max-md:h-[62vh]
                "
            />
        </div>
    );
}