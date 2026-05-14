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
        "h-12 rounded-xl bg-[#F6D36A] px-6 text-base font-bold text-black shadow-md hover:bg-[#ebc95f]",
        className
      )}
    >
      {children}
    </Button>
  );
}