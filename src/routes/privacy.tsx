import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Advion Gel Bait Sales Site" },
      {
        name: "description",
        content: "Privacy policy for the Advion Cockroach Gel Bait sales website.",
      },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
      <div className="mt-6 rounded-2xl border border-dashed border-border bg-muted/40 p-6 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Draft policy — to be completed by the seller.</p>
        <p className="mt-3">
          This site does not currently operate user accounts, databases or payment gateways. Order enquiries
          are made through WhatsApp directly with the seller. Before launch, the seller should publish here:
          what data is collected (e.g. WhatsApp enquiries), how it is used and stored, retention periods,
          third-party services involved, and the customer's rights and contact details.
        </p>
        <p className="mt-3">Seller to confirm: {siteConfig.contact.businessName || "[business name]"}</p>
      </div>
      <a href="/" className="mt-8 inline-block text-sm font-semibold text-primary hover:underline">
        ← Back to the offers
      </a>
    </main>
  );
}
