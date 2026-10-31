import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

function formatRemaining(ms: number): string {
  const totalMinutes = Math.max(0, Math.floor(ms / 60000));
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

/**
 * Slim flash-sale announcement bar. A countdown timer is shown ONLY when a
 * genuine sale deadline has been configured in src/config/site.ts — it is a
 * fixed timestamp, so it persists across refreshes and never restarts.
 */
export function AnnouncementBar() {
  const deadline = siteConfig.sale.deadline ? new Date(siteConfig.sale.deadline) : null;
  const hasDeadline = deadline != null && !Number.isNaN(deadline.getTime());
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    if (!hasDeadline) return;
    const tick = () => setNow(Date.now());
    tick();
    const timer = setInterval(tick, 30_000);
    return () => clearInterval(timer);
  }, [hasDeadline]);

  const remainingMs = hasDeadline && now != null ? (deadline as Date).getTime() - now : null;
  const showTimer = remainingMs != null && remainingMs > 0;

  return (
    <div className="bg-brand-green text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs font-semibold sm:text-sm">
        <span className="inline-flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5" aria-hidden="true" />
          {siteConfig.sale.headline}
        </span>
        {showTimer && (
          <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs tabular-nums">
            Ends in {formatRemaining(remainingMs)}
          </span>
        )}
      </div>
    </div>
  );
}