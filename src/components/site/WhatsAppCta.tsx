import type { ReactNode } from "react";
import { Button, buttonVariants, type ButtonProps } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppCtaProps {
  /** Prefilled message; a link is only generated when the number is configured. */
  message: string;
  children: ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
}

/**
 * Shared WhatsApp call-to-action. When the seller's WhatsApp number is not
 * configured yet, the button renders disabled — no live ordering link exists.
 */
export function WhatsAppCta({ message, children, variant = "whatsapp", size, className }: WhatsAppCtaProps) {
  const url = buildWhatsAppUrl(message);

  if (!url) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        disabled
        title="Ordering opens once the seller's WhatsApp number is connected."
      >
        {children}
      </Button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
      aria-label="Continue on WhatsApp"
    >
      {children}
    </a>
  );
}
