import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { ProductCard } from "@/components/site/ProductCard";
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
      { title: "Advion Gel Bait by Syngenta | Cockroach and Insect Control" },
    { name: "description", content: "Advion gel bait products for cockroaches and insects. Order on WhatsApp." },
    { property: "og:title", content: "Advion Gel Bait by Syngenta" },
    { property: "og:description", content: "Advion gel bait products for cockroaches and insects. Order on WhatsApp." },
    { property: "og:image", content: "https://adviongel.netlify.app/cockroach-preview.jpg" },
    { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-5xl px-4 py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
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