import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Advion Gel Bait Sales Site" },
      {
        name: "description",
        content: "Terms and conditions for ordering Advion Cockroach Gel Bait through this website.",
      },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Terms &amp; Conditions</h1>
      <div className="mt-6 rounded-2xl border border-dashed border-border bg-muted/40 p-6 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Draft terms — to be completed by the seller.</p>
        <p className="mt-3">
          Before launch, the seller should publish here: how orders are formed (WhatsApp enquiries are not
          completed orders or payments), pricing and currency terms, accepted payment methods, delivery
          arrangements, product registration and permitted-use disclaimers, and limitation of liability. No
          effectiveness guarantees or complete-elimination claims are made.
        </p>
      </div>
      <a href="/" className="mt-8 inline-block text-sm font-semibold text-primary hover:underline">
        ← Back to the offers
      </a>
    </main>
  );
}
