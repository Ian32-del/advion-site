// WhatsApp click-to-chat helpers.
// The ordering channel is https://wa.me/<number>?text=<urlencoded message>.
// When the seller's number is not configured, no link is ever generated and
// every ordering button on the site renders disabled.

import { siteConfig, type Offer } from "@/config/site";
import { formatPercent, formatPrice, type OfferPricing } from "@/lib/pricing";

export function buildWhatsAppUrl(message: string): string | null {
  if (!/^\d{8,15}$/.test(siteConfig.whatsapp.number)) return null;
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Prefilled enquiry message. Only fields that are actually configured are
 * included — placeholder prices/quantities never appear as fake values.
 */
export function buildOrderMessage(
  offer: Offer,
  pricing: OfferPricing | undefined,
  currencyCode: string,
): string {
  const lines: string[] = ["Hello! I am interested in Advion Cockroach Gel Bait.", ""];

  lines.push(`Selected offer: ${offer.name}`);

  if (offer.quantity != null || offer.quantityLabel) {
    lines.push(`Quantity: ${offer.quantityLabel ?? `${offer.quantity} × pack`}`);
  }

  if (pricing?.configured && pricing.valid) {
    if (pricing.originalPrice != null) {
      lines.push(`Original price: ${formatPrice(pricing.originalPrice)}`);
    }
    if (pricing.discountPercent != null) {
      lines.push(`Discount: ${formatPercent(pricing.discountPercent)}`);
    }
    if (pricing.finalPrice != null) {
      lines.push(`Final price: ${formatPrice(pricing.finalPrice)}`);
    }
    lines.push(`Currency: ${currencyCode}`);
  }

  lines.push("", "My delivery location is: [CUSTOMER TO PROVIDE]", "");
  lines.push(
    "Please confirm availability, delivery charges, applicable product restrictions, and payment options.",
  );

  return lines.join("\n");
}

/** Generic enquiry message (no selected offer). */
export function buildGeneralEnquiryMessage(): string {
  return [
    "Hello! I am interested in Advion Cockroach Gel Bait.",
    "",
    "Please share the available offers, delivery options and payment methods.",
  ].join("\n");
}
