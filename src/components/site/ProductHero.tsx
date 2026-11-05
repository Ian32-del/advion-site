import { MessageCircle, Tag } from "lucide-react";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { siteConfig, isWhatsAppConfigured } from "@/config/site";
import type { Product } from "@/config/products";

export function ProductHero({ product }: { product: Product }) {
  const orderMessage = `Hello, I'd like to order ${product.productName}.`;

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(160deg, var(--color-brand-green-soft) 0%, var(--color-background) 45%, var(--color-background) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="mx-auto w-full max-w-md md:max-w-none">
          <img
            src={product.image}
            width={1024}
            height={1024}
            alt={`${product.productName} packaging`}
            className="mx-auto w-full max-w-sm rounded-3xl shadow-lg md:max-w-md"
            fetchPriority="high"
          />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Placeholder product photo. The seller's authentic packaging photo is added before launch.
          </p>
        </div>

        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-soft px-3 py-1 text-xs font-semibold text-brand-green-foreground">
            <Tag className="h-3.5 w-3.5" aria-hidden="true" />
            {product.manufacturer} · {product.category}
          </p>
          <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {product.headline}
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">{product.description}</p>

          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-bold text-foreground">{product.productName}</span>:{" "}
              {product.formulation} · {product.packageSize}
            </p>
            <p>Target pests: {product.targetPests.join(", ")}</p>
            <p className="text-2xl font-extrabold text-primary">
                {product.price != null ? `KSh ${product.price.toLocaleString()}` : "Price to be confirmed"}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <WhatsAppCta
              message={orderMessage}
              variant="default"
              size="lg"
              className="h-12 w-full rounded-xl px-8 text-base font-bold sm:w-auto"
            >
              <MessageCircle aria-hidden="true" />
              Order on WhatsApp
            </WhatsAppCta>
          </div>
        </div>
      </div>
    </section>
  );
}