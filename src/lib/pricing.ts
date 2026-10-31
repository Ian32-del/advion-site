// Pricing engine for the four offer cards.
// Rules (from the seller's spec):
//  - savings   = originalPrice × discountPercentage
//  - finalPrice = originalPrice − savings
//  - If a fixed promotional price is configured, the effective
//    discount percentage is derived from the original price.
//  - Prices are rounded to the selected currency's normal conventions.
//  - Invalid configurations (negative prices, discounts > 100%,
//    inconsistent values) are rejected, never rendered.

import { CURRENCY_INFO, siteConfig, type CurrencyCode, type Offer } from "@/config/site";

export interface OfferPricing {
  /** False until the seller has configured real prices for this offer. */
  configured: boolean;
  /** False when the configured values are inconsistent (e.g. discount > 100%). */
  valid: boolean;
  error?: string;
  originalPrice: number | null;
  savings: number | null;
  finalPrice: number | null;
  /** Effective discount percentage, derived even for fixed promo prices. */
  discountPercent: number | null;
}

export function roundForCurrency(amount: number, currency: CurrencyCode): number {
  const decimals = CURRENCY_INFO[currency].decimals;
  const factor = 10 ** decimals;
  return Math.round(amount * factor) / factor;
}

export function computeOfferPricing(offer: Offer): OfferPricing {
  const currency = siteConfig.currency.default;
  const unconfigured: OfferPricing = {
    configured: false,
    valid: true,
    originalPrice: null,
    savings: null,
    finalPrice: null,
    discountPercent: null,
  };

  const original = offer.originalPrice;
  const percent = offer.discountPercent;
  const promo = offer.promoPrice;

  if (original == null && promo == null && percent == null) return unconfigured;

  if (percent != null && promo != null) {
    return { ...unconfigured, valid: false, error: "Configure either a discount percentage or a fixed promotional price, not both." };
  }

  if (original == null) {
    return { ...unconfigured, valid: false, error: "Original price is required to show discounts and savings." };
  }

  if (!Number.isFinite(original) || original <= 0) {
    return { ...unconfigured, valid: false, error: "Original price must be a positive number." };
  }

  let finalPrice: number | null = null;
  let savings: number | null = null;
  let discountPercent: number | null = null;

  if (percent != null) {
    if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
      return { ...unconfigured, valid: false, error: "Discount percentage must be between 0 and 100." };
    }
    savings = roundForCurrency((original * percent) / 100, currency);
    finalPrice = roundForCurrency(original - savings, currency);
    discountPercent = percent;
  } else if (promo != null) {
    if (!Number.isFinite(promo) || promo <= 0) {
      return { ...unconfigured, valid: false, error: "Promotional price must be a positive number." };
    }
    finalPrice = roundForCurrency(promo, currency);
    if (finalPrice > original) {
      return { ...unconfigured, valid: false, error: "Promotional price cannot be higher than the original price." };
    }
    savings = roundForCurrency(original - finalPrice, currency);
    discountPercent = Math.round((savings / original) * 1000) / 10; // one decimal
  }

  return {
    configured: true,
    valid: true,
    originalPrice: roundForCurrency(original, currency),
    savings,
    finalPrice,
    discountPercent,
  };
}

/** Compute pricing for every configured offer. */
export function computeAllOffersPricing(offers: Offer[]): Map<string, OfferPricing> {
  const map = new Map<string, OfferPricing>();
  for (const offer of offers) map.set(offer.id, computeOfferPricing(offer));
  return map;
}

/** True when at least one offer has valid, configured pricing. */
export function hasConfiguredPricing(pricing: Map<string, OfferPricing>): boolean {
  for (const p of pricing.values()) if (p.configured && p.valid && p.finalPrice != null) return true;
  return false;
}

/** Lowest configured final price, for the hero's "from" price. */
export function lowestFinalPrice(pricing: Map<string, OfferPricing>): number | null {
  const values = [...pricing.values()]
    .filter((p) => p.configured && p.valid && p.finalPrice != null)
    .map((p) => p.finalPrice as number);
  return values.length ? Math.min(...values) : null;
}

export function formatPrice(amount: number, currency: CurrencyCode = siteConfig.currency.default): string {
  const { symbol, decimals } = CURRENCY_INFO[currency];
  return `${symbol}${amount.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

export function formatPercent(value: number): string {
  return Number.isInteger(value) ? `${value}%` : `${value}%`;
}

/**
 * "BEST VALUE" may only be shown when one offer genuinely gives the most
 * discount for the displayed conditions (highest effective discount).
 * With placeholder/unconfigured pricing, no badge is ever shown.
 */
export function findBestValueOfferId(offers: Offer[], pricing: Map<string, OfferPricing>): string | null {
  const entries = offers
    .map((o) => ({ offer: o, pricing: pricing.get(o.id) }))
    .filter(
      (e): e is { offer: Offer; pricing: OfferPricing } =>
        !!e.pricing?.configured && e.pricing.valid && e.pricing.discountPercent != null,
    );
  if (entries.length < 2) return null;
  const maxDiscount = Math.max(...entries.map((e) => e.pricing.discountPercent as number));
  const winners = entries.filter((e) => e.pricing.discountPercent === maxDiscount);
  return winners.length === 1 ? (winners[0]?.offer.id ?? null) : null;
}
