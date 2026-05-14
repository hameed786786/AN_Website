import StripePattern from "./stripe-pattern";

export default function CanvasGrid() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-visible">
            {/* Top Horizontal Line */}
            <div className="absolute top-[20px] h-px w-[1740px] grid-horizontal-line" />

            {/* Bottom Horizontal Line */}
            <div className="absolute bottom-[90px] left-0 h-px  w-[1740px]  grid-horizontal-line" />
            {/* Left Vertical Line */}
            <div className="absolute left-[72px] top-[20px] h-[77vh] w-px grid-vertical-line" />

            {/* Right Vertical Line */}
            <div className="absolute right-[-12px] top-[20px] h-[77vh] w-px grid-vertical-line" />

        </div>
    );
}