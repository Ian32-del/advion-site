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
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-6 text-sm leading-relaxed text-muted-foreground">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Terms &amp; Conditions</h1>
      <h2 className="text-lg font-bold text-foreground">Ordering</h2>
      <p>
        Using the "Order on WhatsApp" button starts an enquiry only. It is not a completed order or a payment.
        An order is confirmed when the seller confirms availability, price, delivery and payment with you directly.
      </p>
      <h2 className="text-lg font-bold text-foreground">Prices</h2>
      <p>Prices are shown in Kenya shillings (KSh). Prices shown on this site may change until an order is confirmed.</p>
      <h2 className="text-lg font-bold text-foreground">Product use</h2>
      <p>
        Read and follow the official product label and safety data sheet before use. Product registration and
        permitted use vary by country. Use is restricted to the sites and users stated on the label.
      </p>
      <h2 className="text-lg font-bold text-foreground">No guarantees</h2>
      <p>
        This website summarises publicly published product information. We make no guarantee of results and do not
        claim complete elimination of pests.
      </p>
      <h2 className="text-lg font-bold text-foreground">Limitation of liability</h2>
      {/* <p>
        [Seller or legal adviser to confirm the limitation of liability wording before launch.]
      </p> */}
      <a href="/" className="inline-block font-semibold text-primary hover:underline">← Back to home</a>
    </main>
  );
}
