// ============================================================
// CENTRAL SITE CONFIGURATION
// This is the single file the seller edits before launch:
// WhatsApp number, prices, discounts, currency, sale deadline,
// delivery zones, payment methods, contact details, reviews.
//
// IMPORTANT — launch rules (enforced elsewhere in the code):
//  - Never invent prices, discounts, quantities or stock levels.
//  - Values left as `null` are UNCONFIGURED: the site shows
//    "to be confirmed" placeholders and never presents them
//    as genuine offers.
// ============================================================

export type CurrencyCode = "KES" | "USD" | "GBP" | "EUR";

export const CURRENCY_INFO: Record<
  CurrencyCode,
  { symbol: string; decimals: number }
> = {
  KES: { symbol: "KSh", decimals: 0 },
  USD: { symbol: "$", decimals: 2 },
  GBP: { symbol: "£", decimals: 2 },
  EUR: { symbol: "€", decimals: 2 },
};

export interface Offer {
  id: string;
  /** Editable offer label, e.g. "Special Offer". */
  name: string;
  /** Confirmed package quantity for this offer (e.g. 2 = two tubes). null = not confirmed yet. */
  quantity: number | null;
  /** Quantity label shown when configured, e.g. "2 × 30 g tube". */
  quantityLabel: string | null;
  /** Original (undiscounted) price in the default currency. null = not configured. */
  originalPrice: number | null;
  /** Percentage discount (0-100). Used when promoPrice is null. null = not configured. */
  discountPercent: number | null;
  /** Fixed promotional price. When set, the effective discount is calculated from originalPrice. */
  promoPrice: number | null;
  /** Optional short terms note, e.g. "Save more when you buy two". null = none. */
  terms: string | null;
}

export interface ReviewPlaceholder {
  id: string;
  /** Genuine review text — leave null until you have real, permitted reviews. */
  text: string | null;
  /** Customer display name, only with their permission. */
  name: string | null;
  /** Actual rating 1-5, only where the customer gave one. */
  rating: number | null;
  /** Photo URL for a genuine customer-submitted photo. */
  photoUrl: string | null;
  /** Set true only when purchase has actually been verified. */
  verifiedPurchase: boolean;
}

export const siteConfig = {
  brand: {
    productName: "Advion Cockroach Gel Bait",
    manufacturer: "Syngenta",
    tagline: "Target cockroaches at the source",
  },

  // Full public URL of the live site. Used for WhatsApp link previews.
  // Change to your custom domain once it's connected.
  siteUrl: "https://adviongel.netlify.app",

  // WhatsApp contact — international format, digits ONLY (e.g. "254712345678").
  // While empty, all live ordering links are disabled by the site.
  whatsapp: {
    number: "254743916374", // ← CONFIGURE BEFORE LAUNCH
  },

  currency: {
    default: "KES" as CurrencyCode,
    supported: ["KES", "USD", "GBP", "EUR"] as CurrencyCode[],
    // Set true only if you provide a reliable exchange-rate conversion;
    // converted prices are then labelled "estimate".
    showConversions: false,
  },

  // Flash sale. Set `deadline` to an ISO date string (e.g. "2026-11-30T23:59:00Z")
  // ONLY when a genuine sale deadline exists — the timer then persists across
  // page refreshes and never restarts automatically. null = no timer shown.
  sale: {
    headline: "FLASH SALE — Explore Our Special Advion Offers!",
    deadline: null as string | null,
  },

  // ── The four offers (all for the same product) ─────────────
  // Configure either discountPercent (percentage off originalPrice)
  // or a fixed promoPrice — never both.
  offers: [
    {
      id: "special-offer",
      name: "Special Offer",
      quantity: null,
      quantityLabel: null,
      originalPrice: null,
      discountPercent: null,
      promoPrice: null,
      terms: null,
    },
    {
      id: "extra-savings",
      name: "Extra Savings",
      quantity: null,
      quantityLabel: null,
      originalPrice: null,
      discountPercent: null,
      promoPrice: null,
      terms: null,
    },
    {
      id: "premium-discount",
      name: "Premium Discount",
      quantity: null,
      quantityLabel: null,
      originalPrice: null,
      discountPercent: null,
      promoPrice: null,
      terms: null,
    },
    {
      id: "best-deal",
      name: "Best Deal",
      quantity: null,
      quantityLabel: null,
      originalPrice: null,
      discountPercent: null,
      promoPrice: null,
      terms: null,
    },
  ] as Offer[],

  // ── Verified product information (verify against the official
  //    label for your market before publishing) ────────────────
  product: {
    // Standard Advion pack — confirm the exact pack sold in your market.
    packageSize: "30 g syringe applicator",
    formulation: "Gel bait",
    activeIngredient: "Indoxacarb 0.06%",
    targetPests: [
      "German cockroaches",
      "American cockroaches",
      "Oriental cockroaches",
      "Brown-banded cockroaches",
    ],
    applicationLocations: [
      "Indoor cracks and crevices",
      "Kitchens and food-handling areas, per the label",
      "Residential, commercial and industrial sites, per the label",
    ],
    storage: "Store in the original container, in a cool dry place, away from children and pets.",
    restrictions:
      "Product registration and permitted use vary by country. Confirm the product is registered and approved for sale and use in the customer's location before ordering.",
    labelNote:
      "Always follow the official product label and safety data sheet for your market. This site summarises publicly published product information and does not replace the label.",
  },

  // ── Delivery, payment and international enquiries ──────────
  // All values below are seller-configurable; edit before launch.
  support: {
    localDelivery: {
      // List only areas you actually serve.
      areas: [] as string[],
      charges: null as string | null,
      timeEstimate: null as string | null,
    },
    regionalShipping: {
      available: false,
      zones: [] as string[],
      details: null as string | null,
    },
    international: {
      // Never promise international shipping — enquiries only, until confirmed.
      acceptingEnquiries: true,
      note:
        "International delivery is not confirmed. Send a WhatsApp enquiry with your location and we will check product registration, import restrictions, shipping arrangements and total cost.",
    },
    paymentMethods: [] as string[],
  },

  // ── Seller contact details (shown in the footer) ────────────
  contact: {
    businessName: "+254 743 916 374", // ← CONFIGURE BEFORE LAUNCH
    phone: "",
    email: "",
    location: "",
  },

  // ── Customer reviews ────────────────────────────────────────
  // Placeholders are shown clearly as placeholders. Replace them
  // with genuine, permitted reviews and photos before launch.
  reviews: [
    { id: "review-1", text: null, name: null, rating: null, photoUrl: null, verifiedPurchase: false },
    { id: "review-2", text: null, name: null, rating: null, photoUrl: null, verifiedPurchase: false },
    { id: "review-3", text: null, name: null, rating: null, photoUrl: null, verifiedPurchase: false },
    { id: "review-4", text: null, name: null, rating: null, photoUrl: null, verifiedPurchase: false },
    { id: "review-5", text: null, name: null, rating: null, photoUrl: null, verifiedPurchase: false },
    { id: "review-6", text: null, name: null, rating: null, photoUrl: null, verifiedPurchase: false },
  ] as ReviewPlaceholder[],

  // FAQ content lives in src/config/faq.ts so it stays readable.
} satisfies Record<string, unknown>;

/** True once the WhatsApp number has been configured (digits only, 8-15 digits). */
export const isWhatsAppConfigured = (): boolean =>
  /^\d{8,15}$/.test(siteConfig.whatsapp.number);
