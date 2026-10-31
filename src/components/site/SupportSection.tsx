import { CreditCard, Globe, Truck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Bullet } from "@/components/site/Bullet";

/** Local & international customer support — delivery zones, charges, payment methods. */
export function SupportSection() {
  const s = siteConfig.support;
  const { localDelivery, regionalShipping, international, paymentMethods } = s;

  return (
    <section id="support" aria-labelledby="support-heading" className="scroll-mt-24 bg-background py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 id="support-heading" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Local &amp; International Customer Support
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            We welcome enquiries from local and international customers. Currency codes are shown with every
            price; supported currencies are {siteConfig.currency.supported.join(", ")}. Any converted prices
            would be labelled as estimates.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <Bullet icon={<Truck className="h-5 w-5" />} className="items-center">
              <h3 className="text-base font-bold">Local Delivery</h3>
            </Bullet>
            {localDelivery.areas.length > 0 ? (
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Delivery areas:</strong>{" "}
                  {localDelivery.areas.join(", ")}
                </li>
                {localDelivery.charges && (
                  <li>
                    <strong className="text-foreground">Delivery charges:</strong> {localDelivery.charges}
                  </li>
                )}
                {localDelivery.timeEstimate && (
                  <li>
                    <strong className="text-foreground">Estimated time:</strong> {localDelivery.timeEstimate}
                  </li>
                )}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                Delivery areas, charges and times are being configured by the seller and will be published
                before launch. Ask on WhatsApp for the latest delivery information.
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <Bullet icon={<Globe className="h-5 w-5" />} className="items-center">
              <h3 className="text-base font-bold">Regional &amp; International</h3>
            </Bullet>
            {regionalShipping.available ? (
              <p className="mt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Regional shipping:</strong> {regionalShipping.zones.join(", ")}
                {regionalShipping.details ? ` — ${regionalShipping.details}` : ""}
              </p>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">{international.note}</p>
            )}
            <p className="mt-3 text-xs text-muted-foreground">
              Product registration, import restrictions and permitted use vary by country — they are checked
              with you on WhatsApp before any shipping arrangement is confirmed.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <Bullet icon={<CreditCard className="h-5 w-5" />} className="items-center">
              <h3 className="text-base font-bold">Payment Methods</h3>
            </Bullet>
            {paymentMethods.length > 0 ? (
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {paymentMethods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                Accepted payment methods are being configured by the seller. Please confirm the available
                options on WhatsApp before paying.
              </p>
            )}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Availability, product registration, shipping arrangements and the total cost are always confirmed
          with you on WhatsApp.
        </p>
      </div>
    </section>
  );
}
