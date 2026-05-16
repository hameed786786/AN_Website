import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CTAButton({
  children,
  className,
}: CTAButtonProps) {
  return (
    <Button
      className={cn(
        "w-[172px] h-[48px] rounded-2xl bg-[#F6D36A] px-6 text-base font-bold text-black shadow-sm hover:bg-[#ebc95f]",
        className
      )}
    >
      {children}
    </Button>
  );
}