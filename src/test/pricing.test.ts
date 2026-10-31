import { describe, expect, it } from "vitest";
import {
  computeOfferPricing,
  findBestValueOfferId,
  formatPrice,
  lowestFinalPrice,
  roundForCurrency,
} from "@/lib/pricing";
import type { Offer } from "@/config/site";
import { CURRENCY_INFO } from "@/config/site";

function makeOffer(overrides: Partial<Offer>): Offer {
  return {
    id: "test",
    name: "Test Offer",
    quantity: null,
    quantityLabel: null,
    originalPrice: null,
    discountPercent: null,
    promoPrice: null,
    terms: null,
    ...overrides,
  };
}

describe("pricing rules", () => {
  it("calculates savings and final price from a percentage discount", () => {
    const result = computeOfferPricing(makeOffer({ originalPrice: 1000, discountPercent: 20 }));
    expect(result.valid).toBe(true);
    expect(result.savings).toBe(200);
    expect(result.finalPrice).toBe(800);
    expect(result.discountPercent).toBe(20);
  });

  it("derives the effective discount from a fixed promotional price", () => {
    const result = computeOfferPricing(makeOffer({ originalPrice: 1000, promoPrice: 750 }));
    expect(result.valid).toBe(true);
    expect(result.finalPrice).toBe(750);
    expect(result.savings).toBe(250);
    expect(result.discountPercent).toBe(25);
  });

  it("treats an offer with no prices as unconfigured, not invalid", () => {
    const result = computeOfferPricing(makeOffer({}));
    expect(result.configured).toBe(false);
    expect(result.valid).toBe(true);
    expect(result.finalPrice).toBeNull();
  });

  it("rejects discounts greater than 100%", () => {
    const result = computeOfferPricing(makeOffer({ originalPrice: 500, discountPercent: 120 }));
    expect(result.valid).toBe(false);
    expect(result.finalPrice).toBeNull();
  });

  it("rejects negative or zero original prices", () => {
    expect(computeOfferPricing(makeOffer({ originalPrice: -5, discountPercent: 10 })).valid).toBe(false);
    expect(computeOfferPricing(makeOffer({ originalPrice: 0, discountPercent: 10 })).valid).toBe(false);
  });

  it("rejects a promotional price higher than the original price", () => {
    const result = computeOfferPricing(makeOffer({ originalPrice: 500, promoPrice: 600 }));
    expect(result.valid).toBe(false);
  });

  it("rejects configuring both a percentage and a fixed promo price", () => {
    const result = computeOfferPricing(
      makeOffer({ originalPrice: 1000, discountPercent: 10, promoPrice: 800 }),
    );
    expect(result.valid).toBe(false);
  });

  it("rounds KES prices to whole shillings", () => {
    expect(roundForCurrency(799.6, "KES")).toBe(800);
    expect(roundForCurrency(799.4, "KES")).toBe(799);
  });

  it("formats prices with the currency's conventions", () => {
    const decimals = CURRENCY_INFO.KES.decimals;
    expect(formatPrice(1000, "KES")).toBe(`KSh1,000`);
    expect(CURRENCY_INFO.USD.decimals).toBe(2);
    expect(formatPrice(10, "USD")).toBe(`$${(10).toLocaleString("en-US", { minimumFractionDigits: decimals > 0 ? 0 : 0, maximumFractionDigits: 0 })}`.replace("$", "$") === "$10.00" ? "$10.00" : "$10.00");
  });

  it("picks the lowest configured final price for the hero 'from' price", () => {
    const offers: Offer[] = [
      makeOffer({ id: "a", originalPrice: 1000, discountPercent: 10 }),
      makeOffer({ id: "b", originalPrice: 1000, discountPercent: 30 }),
      makeOffer({ id: "c" }),
    ];
    // reuse computeAllOffersPricing indirectly via lowestFinalPrice
    const { computeAllOffersPricing } = await_import();
    const map = computeAllOffersPricing(offers);
    expect(lowestFinalPrice(map)).toBe(700);
  });

  it("never awards BEST VALUE with placeholder pricing", () => {
    const offers: Offer[] = [makeOffer({ id: "a" }), makeOffer({ id: "b" })];
    const { computeAllOffersPricing } = await_import();
    expect(findBestValueOfferId(offers, computeAllOffersPricing(offers))).toBeNull();
  });

  it("awards BEST VALUE only to the single highest effective discount", () => {
    const offers: Offer[] = [
      makeOffer({ id: "a", originalPrice: 1000, discountPercent: 10 }),
      makeOffer({ id: "b", originalPrice: 1000, discountPercent: 30 }),
      makeOffer({ id: "c", originalPrice: 1000, discountPercent: 30 }),
    ];
    const { computeAllOffersPricing } = await_import();
    // tie → no single winner → no badge
    expect(findBestValueOfferId(offers, computeAllOffersPricing(offers))).toBeNull();
  });
});

// Small helper so the dynamic import stays inside the test module.
import { computeAllOffersPricing } from "@/lib/pricing";
function await_import() {
  return { computeAllOffersPricing };
}
