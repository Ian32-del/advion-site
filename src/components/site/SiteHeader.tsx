import { MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "#how-to-use", label: "How to Use" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faqs", label: "FAQs" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Advion Gel Bait by Syngenta, home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-sm font-extrabold text-brand-green-foreground">
            A
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight">Advion Gel Bait</span>
            <span className="block text-[11px] text-muted-foreground">by Syngenta</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Page sections">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div aria-hidden="true" />
      </div>
    </header>
  );
}