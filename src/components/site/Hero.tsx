import { MessageCircle, Tag } from "lucide-react";
import productImage from "@/assets/product-placeholder.png";
import { siteConfig } from "@/config/site";
import { computeAllOffersPricing, formatPrice, hasConfiguredPricing, lowestFinalPrice } from "@/lib/pricing";
import { buildGeneralEnquiryMessage } from "@/lib/whatsapp";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { Button } from "@/components/ui/button";

/**
 * Product-first hero. Short and conversion-focused: visitors move straight
 * to the four offer cards below — no long descriptions or FAQs here.
 */
export function Hero() {
  const pricing = computeAllOffersPricing(siteConfig.offers);
  const fromPrice = lowestFinalPrice(pricing);
  const anyConfigured = hasConfiguredPricing(pricing);

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(160deg, var(--color-brand-green-soft) 0%, var(--color-background) 45%, var(--color-background) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="order-1 mx-auto w-full max-w-md md:max-w-none">
          <img
            src={productImage}
            width={1024}
            height={1024}
            alt="Advion Cockroach Gel Bait — gel applicator and product packaging"
            className="mx-auto w-full max-w-sm rounded-3xl shadow-lg md:max-w-md"
            fetchPriority="high"
          />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Placeholder product photo — the seller's authentic Advion packaging photo is added before launch.
          </p>
        </div>

        <div className="order-2 text-center md:text-left">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-soft px-3 py-1 text-xs font-semibold text-brand-green-foreground">
            <Tag className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.brand.manufacturer} · Gel bait for cockroaches
          </p>
          <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Target Cockroaches at the Source.
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Explore Advion Cockroach Gel Bait by Syngenta and choose from our available special offers.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              <span className="font-bold text-foreground">{siteConfig.brand.productName}</span> —{" "}
              {siteConfig.product.formulation} · {siteConfig.product.packageSize}
            </p>
            {anyConfigured && fromPrice != null ? (
              <p className="text-lg">
                <span className="font-semibold text-muted-foreground">Starting at </span>
                <span className="text-2xl font-extrabold text-primary">{formatPrice(fromPrice)}</span>
                <span className="ml-1 text-xs text-muted-foreground">{siteConfig.currency.default}</span>
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Prices are being finalised — compare the four offers below and ask us anything on WhatsApp.
              </p>
            )}
            <p className="text-sm font-medium text-brand-green-foreground">
              Special offers are available — compare all four below.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start sm:justify-center">
            <Button asChild size="lg" className="h-12 w-full rounded-xl px-8 text-base font-bold sm:w-auto">
              <a href="#offers">Compare Offers</a>
            </Button>
            <WhatsAppCta
              message={buildGeneralEnquiryMessage()}
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-xl px-6 text-base font-semibold sm:w-auto"
            >
              <MessageCircle aria-hidden="true" />
              Ask on WhatsApp
            </WhatsAppCta>
          </div>
        </div>
      </div>
    </section>
  );
}
