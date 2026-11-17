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
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-6 text-sm leading-relaxed text-muted-foreground">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Privacy Policy</h1>
      <p>
        This website does not create user accounts, store customer details in a database, or take payments online.
      </p>
      <h2 className="text-lg font-bold text-foreground">What we collect</h2>
      <p>
        If you contact us on WhatsApp, the details you send (your name, phone number and message) are received by
        the seller through WhatsApp. WhatsApp's own privacy policy governs that service. The website itself does not
        collect these details.
      </p>
      <h2 className="text-lg font-bold text-foreground">How we use it</h2>
      <p>We use the details you send only to respond to your enquiry and arrange your order.</p>
      <h2 className="text-lg font-bold text-foreground">Retention and sharing</h2>
      <p>
        [Seller to confirm how long enquiry messages are kept and whether they are shared with any delivery or
        payment provider.]
      </p>
      <h2 className="text-lg font-bold text-foreground">Your rights</h2>
      <p>
        You may ask us what personal data we hold about you, ask us to correct or delete it, or withdraw your
        consent. Contact us at [seller contact email or phone].
      </p>
      <a href="/" className="inline-block font-semibold text-primary hover:underline">← Back to home</a>
    </main>
  );
}
