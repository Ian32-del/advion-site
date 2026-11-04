import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { ProductHero } from "@/components/site/ProductHero";
import { ProductDetails } from "@/components/site/ProductDetails";
import { HowToUse } from "@/components/site/HowToUse";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { SupportSection } from "@/components/site/SupportSection";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { products } from "@/config/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syngenta Gel Baits | Advion Products" },
      {
        name: "description",
        content: "Explore Syngenta Advion gel bait products and order on WhatsApp.",
      },
      { property: "og:title", content: "Syngenta Gel Baits | Advion Products" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [selectedSlug, setSelectedSlug] = useState(products[0].slug);
  const selected = products.find((p) => p.slug === selectedSlug) ?? products[0];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-4 pt-12 text-center">
          <h2 className="text-lg font-semibold text-muted-foreground">Choose a product</h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <button
                key={product.slug}
                type="button"
                onClick={() => setSelectedSlug(product.slug)}
                aria-pressed={selected.slug === product.slug}
                className={
                  selected.slug === product.slug
                    ? "rounded-xl border-2 border-primary bg-primary px-5 py-2 font-bold text-primary-foreground"
                    : "rounded-xl border-2 border-border bg-card px-5 py-2 font-bold hover:border-primary/50"
                }
              >
                {product.productName}
              </button>
            ))}
          </div>
        </section>

        <ProductHero product={selected} />
        <ProductDetails />
        <HowToUse />
        <ReviewsCarousel />
        <SupportSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}