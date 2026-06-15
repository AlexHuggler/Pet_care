import { cn } from "@/lib/cn";
import { Logo } from "./illustrations";

export function BrandHeader({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Logo />
      <div className="leading-tight">
        <p className="text-xl font-bold text-text">Furmacy</p>
        <p className="text-sm text-text-secondary">Your pet&rsquo;s health, simplified.</p>
      </div>
    </div>
  );
}
