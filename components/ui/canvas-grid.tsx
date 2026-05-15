import StripePattern from "./stripe-pattern";

export default function CanvasGrid() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-visible">
            {/* Top Horizontal Line */}
            <div className="absolute top-[10px] h-px w-[1840px] left-[-50px] grid-horizontal-line" />

            {/* Bottom Horizontal Line */}
            <div className="absolute bottom-[150px] left-[-60px] h-px  w-[1940px]  grid-horizontal-line" />
            {/* Left Vertical Line */}
            <div className="absolute left-[22px] top-[20px] h-[77vh] w-px grid-vertical-line" />

            {/* Right Vertical Line */}
            <div className="absolute right-[22px] top-[20px] h-[77vh] w-px grid-vertical-line" />

        </div>
    );
}