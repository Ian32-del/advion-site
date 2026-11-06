import { MessageCircle } from "lucide-react";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { ProductAboutDialog } from "@/components/site/ProductAboutDialog";
import type { Product } from "@/config/products";
import { siteConfig } from "@/config/site";

export function ProductCard({ product }: { product: Product }) {
  const priceText =
    product.price != null ? `KSh ${product.price.toLocaleString()}` : "Price to be confirmed";

  const shareUrl = `${siteConfig.siteUrl}/#${product.slug}`;
  const orderMessage = [
    "Hi! I'm interested in buying this product:",
    "",
    `${product.productName} - ${product.targetPests.join(", ")}`,
    priceText,
    "",
    shareUrl,
  ].join("\n");

  return (
    <article className="flex flex-col items-center rounded-2xl border bg-card p-6 text-center shadow-sm">
      <img
        src={product.image}
        width={1024}
        height={1024}
        alt={`${product.productName} packaging`}
        loading="lazy"
        className="h-56 w-56 rounded-xl object-cover"
      />
      <p className="mt-4 inline-flex rounded-full bg-brand-green-soft px-3 py-1 text-xs font-semibold text-brand-green-foreground">
        {product.category}
      </p>
      <h2 className="mt-3 text-xl font-bold">{product.productName}</h2>
      <p className="mt-1 text-sm text-muted-foreground">Target pests: {product.targetPests.join(", ")}</p>
      <p className="mt-3 text-2xl font-extrabold text-primary">{priceText}</p>

      <WhatsAppCta
        message={orderMessage}
        variant="whatsapp"
        size="lg"
        className="mt-5 h-12 w-full rounded-xl text-base font-bold"
      >
        <MessageCircle aria-hidden="true" />
        Order on WhatsApp
      </WhatsAppCta>

      <ProductAboutDialog product={product} />
    </article>
  );
}