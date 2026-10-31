import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BulletProps {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Bullet({ icon, children, className }: BulletProps) {
  return (
    <div className={cn("flex items-start gap-3 text-sm leading-relaxed", className)}>
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green-foreground [&_svg]:h-5 [&_svg]:w-5">
        {icon}
      </span>
      <div className="text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">{children}</div>
    </div>
  );
}
