import { useState } from "react";
import { Check, MessageCircle, PiggyBank } from "lucide-react";
import productImage from "@/assets/product-placeholder.png";
import { siteConfig, type Offer } from "@/config/site";
import {
  computeAllOffersPricing,
  findBestValueOfferId,
  formatPercent,
  formatPrice,
  type OfferPricing,
} from "@/lib/pricing";
import { buildOrderMessage } from "@/lib/whatsapp";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { cn } from "@/lib/utils";

interface OfferCardProps {
  offer: Offer;
  pricing: OfferPricing;
  selected: boolean;
  bestValue: boolean;
  onSelect: (offerId: string) => void;
}

function quantityText(offer: Offer): string {
  if (offer.quantityLabel) return offer.quantityLabel;
  if (offer.quantity != null) return `${offer.quantity} × pack`;
  return "Quantity to be confirmed";
}

function PriceRow({ offer, pricing }: { offer: Offer; pricing: OfferPricing }) {
  const currency = siteConfig.currency.default;

  if (!pricing.configured) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-muted/50 px-3 py-4 text-center">
        <p className="text-sm font-semibold text-muted-foreground">Price to be confirmed</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Offer pricing is not configured yet — this is not a live offer.
        </p>
      </div>
    );
  }

  if (!pricing.valid) {
    return (
      <div className="rounded-xl border border-dashed border-destructive/40 bg-destructive/5 px-3 py-4 text-center">
        <p className="text-xs font-medium text-destructive">
          Offer pricing is misconfigured and hidden until fixed.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-baseline justify-center gap-2">
        <span className="text-3xl font-extrabold tracking-tight">
          {formatPrice(pricing.finalPrice as number)}
        </span>
        <span className="text-xs font-medium text-muted-foreground">{currency}</span>
      </div>
      <div className="mt-1 flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground line-through">
          {formatPrice(pricing.originalPrice as number)}
        </span>
        <span className="rounded-full bg-brand-green px-2 py-0.5 text-xs font-bold text-brand-green-foreground">
          Save {formatPrice(pricing.savings as number)}
        </span>
      </div>
      {pricing.discountPercent != null && pricing.discountPercent > 0 && (
        <p className="mt-1.5 text-center text-xs font-semibold text-brand-green-foreground">
          {formatPercent(pricing.discountPercent)} off the original price
        </p>
      )}
      <p className="mt-1 text-center text-[11px] text-muted-foreground">Original price · {currency}</p>
    </div>
  );
}

function OfferCard({ offer, pricing, selected, bestValue, onSelect }: OfferCardProps) {
  const buttonMessage = buildOrderMessage(offer, pricing, siteConfig.currency.default);
  const priceConfigured = pricing.configured && pricing.valid;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-card p-5 text-center shadow-sm transition-all",
        selected
          ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background"
          : "border-border hover:border-primary/50 hover:shadow-md",
      )}
      aria-pressed={selected}
    >
      {bestValue && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-[11px] font-bold text-secondary-foreground shadow">
          BEST VALUE
        </span>
      )}

      <button
        type="button"
        onClick={() => onSelect(offer.id)}
        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-pressed={selected}
        aria-label={`Select ${offer.name}`}
        title={selected ? "Selected" : "Select this offer"}
      />

      <div className="relative z-10 flex flex-1 flex-col pointer-events-none">
        <span className="mx-auto inline-flex items-center gap-1.5 self-start rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-brand-green-foreground">
          {offer.name}
        </span>

        <img
          src={productImage}
          width={1024}
          height={1024}
          alt=""
          loading="lazy"
          className="mx-auto my-4 h-24 w-24 rounded-xl object-cover"
        />

        <p className="text-sm font-medium">{quantityText(offer)}</p>
        {offer.terms && <p className="mt-1 text-xs text-muted-foreground">{offer.terms}</p>}

        <div className="mt-4 flex-1">
          <PriceRow offer={offer} pricing={pricing} />
        </div>

        <WhatsAppCta
          message={buttonMessage}
          variant={priceConfigured ? "default" : "outline"}
          size="lg"
          className="pointer-events-auto mt-5 h-11 w-full rounded-xl text-sm font-bold"
        >
          <MessageCircle aria-hidden="true" />
          {priceConfigured ? "Order This Offer" : "Ask About This Offer"}
        </WhatsAppCta>

        {selected && (
          <p className="mt-3 inline-flex items-center justify-center gap-1 text-xs font-semibold text-primary">
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
            Selected — order below or from the bar at the bottom
          </p>
        )}
      </div>
    </article>
  );
}

interface OffersSectionProps {
  selectedOfferId: string | null;
  onSelect: (offerId: string) => void;
}

/**
 * The most important sales section — the four discount cards sit directly
 * below the hero with no intervening content.
 */
export function OffersSection({ selectedOfferId, onSelect }: OffersSectionProps) {
  const pricing = computeAllOffersPricing(siteConfig.offers);
  const bestValueId = findBestValueOfferId(siteConfig.offers, pricing);

  return (
    <section id="offers" aria-labelledby="offers-heading" className="scroll-mt-24 bg-background py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 id="offers-heading" className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            <PiggyBank className="h-6 w-6 text-brand-green" aria-hidden="true" />
            Choose Your Best Offer
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Compare our four promotional offers and select the option that suits you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {siteConfig.offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              pricing={pricing.get(offer.id) as OfferPricing}
              selected={selectedOfferId === offer.id}
              bestValue={bestValueId === offer.id}
              onSelect={onSelect}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Selecting an offer prepares a WhatsApp enquiry with that offer's details — it is not a completed
          order or payment. Availability, delivery charges and payment options are confirmed on WhatsApp.
        </p>
      </div>
    </section>
  );
}
