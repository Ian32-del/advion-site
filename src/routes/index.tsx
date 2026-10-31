import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { OffersSection } from "@/components/site/OffersSection";
import { ProductDetails } from "@/components/site/ProductDetails";
import { HowToUse } from "@/components/site/HowToUse";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { SupportSection } from "@/components/site/SupportSection";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyOrderBar } from "@/components/site/StickyOrderBar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Advion Cockroach Gel Bait by Syngenta — Compare 4 Special Offers",
      },
      {
        name: "description",
        content:
          "Explore Advion Cockroach Gel Bait by Syngenta, compare four special discount offers, and start your order enquiry on WhatsApp. Local and international customer support.",
      },
      { property: "og:title", content: "Advion Cockroach Gel Bait — Compare 4 Special Offers" },
      {
        property: "og:description",
        content:
          "Choose from four Advion Cockroach Gel Bait offers and start your order enquiry on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/**
 * Single-product sales page. Section order is fixed by the seller's spec:
 * announcement bar → header → hero → four offer cards → product details →
 * how to use → review carousel → support → FAQ → final CTA → footer.
 * The four offer cards sit directly below the hero with nothing in between.
 */
function Index() {
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <Hero />
        <OffersSection selectedOfferId={selectedOfferId} onSelect={setSelectedOfferId} />
        <ProductDetails />
        <HowToUse />
        <ReviewsCarousel />
        <SupportSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      {/* Spacer so the sticky mobile bar never covers footer content. */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <StickyOrderBar selectedOfferId={selectedOfferId} />
      <FloatingWhatsApp />
    </div>
  );
}
