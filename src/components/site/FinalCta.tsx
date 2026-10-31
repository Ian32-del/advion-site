import { MessageCircle, ShoppingBasket } from "lucide-react";
import { buildGeneralEnquiryMessage } from "@/lib/whatsapp";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { Button } from "@/components/ui/button";

/** Final conversion section near the bottom of the page. */
export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="scroll-mt-24 bg-background py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 id="final-cta-heading" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Ready to Explore Our Offers?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Compare the four special offers, pick the one that suits you, and start your order enquiry on
          WhatsApp. We confirm availability, delivery and payment with you directly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppCta
            message={buildGeneralEnquiryMessage()}
            size="lg"
            className="h-12 rounded-xl px-8 text-base font-bold"
          >
            <MessageCircle aria-hidden="true" />
            Order on WhatsApp
          </WhatsAppCta>
          <Button asChild variant="outline" size="lg" className="h-12 rounded-xl px-6 text-base font-semibold">
            <a href="#offers">
              <ShoppingBasket aria-hidden="true" />
              Compare Offers
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
