import { MessageCircle } from "lucide-react";
import { buildGeneralEnquiryMessage } from "@/lib/whatsapp";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { cn } from "@/lib/utils";

/**
 * Floating WhatsApp button, fixed to the bottom-right. On mobile it sits
 * above the sticky order bar so neither control is obscured.
 */
export function FloatingWhatsApp() {
  return (
    <div className={cn("fixed bottom-20 right-4 z-40 md:bottom-6")}>
      <WhatsAppCta
        message={buildGeneralEnquiryMessage()}
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </WhatsAppCta>
      <span className="sr-only">Order on WhatsApp</span>
    </div>
  );
}
