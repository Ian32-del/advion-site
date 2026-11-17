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
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-6 text-sm leading-relaxed text-muted-foreground">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Delivery &amp; Returns</h1>
      <h2 className="text-lg font-bold text-foreground">Delivery areas</h2>
      <p>[Seller to list the areas served and confirm them before launch.]</p>
      <h2 className="text-lg font-bold text-foreground">Charges and timing</h2>
      <p>[Seller to state delivery charges and estimated delivery times, or say they are confirmed on WhatsApp.]</p>
      <h2 className="text-lg font-bold text-foreground">International orders</h2>
      <p>
        International delivery are currently offered. Enquiries are welcome, and we will confirm product
        registration, import rules and shipping costs before any order is accepted.
      </p>
      <h2 className="text-lg font-bold text-foreground">Returns and refunds</h2>
      <p>[Seller to state the returns and refunds policy, for example whether damaged or incorrect items can be replaced.]</p>
      <a href="/" className="inline-block font-semibold text-primary hover:underline">← Back to home</a>
    </main>
  );
}
