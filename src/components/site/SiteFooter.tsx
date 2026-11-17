import { Instagram, Mail, MapPin, Phone, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";


const POLICY_LINKS = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/delivery-returns", label: "Delivery & Returns" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.95a8.16 8.16 0 0 0 4.77 1.52V7.05a4.8 4.8 0 0 1-1-.36z" />
    </svg>
  );
}

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
            Advion gel bait products by {siteConfig.brand.manufacturer}, for cockroach and ant control.
          </p>
          {/* <p className="mt-2 text-xs text-muted-foreground">
            Advion is a product of Syngenta. All trademarks belong to their respective owners. 
          </p> */}
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
          <h2 className="text-sm font-bold">Follow us</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            {siteConfig.social.instagram && (
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  Instagram
                </a>
              </li>
            )}
            {siteConfig.social.tiktok && (
              <li>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <TikTokIcon className="h-4 w-4" />
                  TikTok
                </a>
              </li>
            )}
          </ul>
        </div>

        
        <div>
          <h2 className="text-sm font-bold">Contact</h2>
          {hasContact ? (
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {contact.businessName && <li>{contact.businessName}</li>}
              {contact.phone && (
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.location && (
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {contact.location}
                </li>
              )}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              {siteConfig.contact.phone ? (
                <>
                  Phone:{" "}
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="font-semibold text-foreground underline">
                    {siteConfig.contact.phone}
                  </a>
                  . You can also use WhatsApp for all enquiries.
                </>
              ) : (
                <>
                  Seller contact details are being configured and will be published here before launch. Until then, use WhatsApp
                  for all enquiries.
                </>
              )}
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
