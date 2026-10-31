import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  computeAllOffersPricing,
  formatPrice,
} from "@/lib/pricing";
import { buildOrderMessage } from "@/lib/whatsapp";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { Button } from "@/components/ui/button";

interface StickyOrderBarProps {
  selectedOfferId: string | null;
}

/**
 * Compact sticky bottom bar (mobile only) showing the selected offer's price
 * and an ordering button. The floating WhatsApp control sits above it.
 */
export function StickyOrderBar({ selectedOfferId }: StickyOrderBarProps) {
  const offer = siteConfig.offers.find((o) => o.id === selectedOfferId) ?? null;
  const pricing = offer ? computeAllOffersPricing(siteConfig.offers).get(offer.id) : undefined;
  const priceConfigured = pricing?.configured && pricing.valid && pricing.finalPrice != null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <div className="min-w-0">
          {offer ? (
            <>
              <p className="truncate text-xs font-semibold">{offer.name}</p>
              <p className="text-sm font-extrabold">
                {priceConfigured ? (
                  <>
                    {formatPrice(pricing!.finalPrice as number)}{" "}
                    <span className="text-[10px] font-medium text-muted-foreground">
                      {siteConfig.currency.default}
                    </span>
                  </>
                ) : (
                  <span className="text-xs font-medium text-muted-foreground">Price to be confirmed</span>
                )}
              </p>
            </>
          ) : (
            <p className="text-xs text-muted-foreground">Select an offer above</p>
          )}
        </div>
        {offer ? (
          <WhatsAppCta
            message={buildOrderMessage(offer, pricing, siteConfig.currency.default)}
            size="sm"
            className="h-10 shrink-0 rounded-lg px-4 text-sm font-bold"
          >
            <MessageCircle aria-hidden="true" />
            Order
          </WhatsAppCta>
        ) : (
          <Button asChild variant="outline" size="sm" className="h-10 shrink-0 rounded-lg px-4 text-sm font-semibold">
            <a href="#offers">Choose an offer</a>
          </Button>
        )}
      </div>
    </div>
  );
}
