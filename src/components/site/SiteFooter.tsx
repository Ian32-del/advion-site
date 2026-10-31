import { Mail, MapPin, Phone, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

const POLICY_LINKS = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/delivery-returns", label: "Delivery & Returns" },
];

export function SiteFooter() {
  const { contact } = siteConfig;
  const hasContact = contact.businessName || contact.phone || contact.email || contact.location;

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-sm font-extrabold text-brand-green-foreground">
              A
            </span>
            <span className="text-sm font-bold">Advion Gel Bait</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {siteConfig.brand.productName} by {siteConfig.brand.manufacturer} · {siteConfig.product.formulation} ·{" "}
            {siteConfig.product.packageSize}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Advion is a product of Syngenta. All trademarks belong to their respective owners. This site is
            operated by an independent seller.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold">Information</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {POLICY_LINKS.map((link) => (
              <li key={link.to}>
                <a href={link.to} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#faqs" className="transition-colors hover:text-foreground">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold">Contact</h2>
          {hasContact ? (
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {contact.businessName && <li>{contact.businessName}</li>}
              {contact.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {contact.phone}
                </li>
              )}
              {contact.email && (
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" aria-hidden="true" /> {contact.email}
                </li>
              )}
              {contact.location && (
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" /> {contact.location}
                </li>
              )}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              Seller contact details are being configured and will be published here before launch. Until
              then, use WhatsApp for all enquiries.
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div className="flex gap-3 rounded-xl border border-border bg-muted/50 p-4 text-xs leading-relaxed text-muted-foreground">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-foreground" aria-hidden="true" />
          <p>
            <strong className="text-foreground">Product safety disclaimer:</strong> Read the official product
            label before use. Keep out of reach of children and pets. Product registration, permitted use and
            application directions vary by country — this website summarises publicly published product
            information and does not replace the official label or safety data sheet. No effectiveness
            guarantees or complete-elimination claims are made.
          </p>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {contact.businessName || "Seller"}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
