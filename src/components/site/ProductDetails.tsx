import {
  AlertTriangle,
  Bug,
  Droplets,
  Home,
  Package,
  ShieldCheck,
  Thermometer,
} from "lucide-react";
import productImage from "@/assets/product-placeholder.png";
import { siteConfig } from "@/config/site";
import { Bullet } from "@/components/site/Bullet";
import { Product } from "@/config/products";

/** Product details & benefits — placed below the offer cards, two-column on desktop. */
export function ProductDetails({ product }: { product: Product }) {
  const p = siteConfig.product;

  return (
    <section id="details" aria-labelledby="details-heading" className="scroll-mt-24 bg-card py-14">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 md:grid-cols-2">
        <div>
          <img
            src={productImage}
            width={1024}
            height={1024}
            alt="Advion Cockroach Gel Bait packaging and applicator"
            loading="lazy"
            className="mx-auto w-full max-w-sm rounded-3xl shadow-md"
          />
        </div>

        <div>
          <h2 id="details-heading" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            About Advion Cockroach Gel Bait
          </h2>
          <p className="mt-3 text-muted-foreground">
            {siteConfig.brand.productName} by {siteConfig.brand.manufacturer} is a professional gel bait
            used to control cockroach infestations at their harbourage points.
          </p>

          <div className="mt-6 space-y-4">
            <Bullet icon={<Package className="h-5 w-5" />}>
              <span>
                <strong>Formulation &amp; package:</strong> {p.formulation} · {p.packageSize}
              </span>
            </Bullet>
            <Bullet icon={<Droplets className="h-5 w-5" />}>
              <span>
                <strong>Active ingredient:</strong> {p.activeIngredient}
              </span>
            </Bullet>
            <Bullet icon={<Bug className="h-5 w-5" />}>
              <span>
                <strong>Target pests:</strong> {p.targetPests.join(", ")}.
              </span>
            </Bullet>
            <Bullet icon={<Home className="h-5 w-5" />}>
              <span>
                <strong>Application locations:</strong> {p.applicationLocations.join("; ")}.
              </span>
            </Bullet>
            <Bullet icon={<Thermometer className="h-5 w-5" />}>
              <span>
                <strong>Storage &amp; handling:</strong> {p.storage}
              </span>
            </Bullet>
            <Bullet icon={<ShieldCheck className="h-5 w-5" />}>
              <span>
                <strong>Sale &amp; use restrictions:</strong> {p.restrictions}
              </span>
            </Bullet>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-foreground">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
            <p>
              {p.labelNote} The supplied packaging is directed at commercial applicators — verify the exact
              product label, intended user category and registration in your market before use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
