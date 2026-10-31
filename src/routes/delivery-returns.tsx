import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/delivery-returns")({
  head: () => ({
    meta: [
      { title: "Delivery & Returns — Advion Gel Bait Sales Site" },
      {
        name: "description",
        content: "Delivery and returns policy for Advion Cockroach Gel Bait orders.",
      },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Delivery &amp; Returns</h1>
      <div className="mt-6 rounded-2xl border border-dashed border-border bg-muted/40 p-6 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Draft policy — to be completed by the seller.</p>
        <p className="mt-3">
          Before launch, the seller should publish here: confirmed local delivery areas, delivery charges and
          estimated times, regional and international shipping arrangements (only once confirmed), how returns
          and refunds are handled, and any product restrictions on sale or shipment by country. No free
          shipping or delivery guarantees are promised until configured.
        </p>
      </div>
      <a href="/" className="mt-8 inline-block text-sm font-semibold text-primary hover:underline">
        ← Back to the offers
      </a>
    </main>
  );
}
