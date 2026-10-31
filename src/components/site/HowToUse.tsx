import { BookOpen, ClipboardCheck, MapPinned, Syringe, TriangleAlert } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Bullet } from "@/components/site/Bullet";

const STEPS = [
  {
    icon: BookOpen,
    title: "Read the label",
    text: "Review the approved instructions and safety precautions for your market before anything else.",
  },
  {
    icon: MapPinned,
    title: "Identify suitable locations",
    text: "Follow the label and relevant pest-control guidance to find the right treatment points.",
  },
  {
    icon: Syringe,
    title: "Apply as directed",
    text: "Use only the approved application method and quantities stated on the label.",
  },
  {
    icon: ClipboardCheck,
    title: "Monitor and follow up",
    text: "Follow the label's inspection and maintenance instructions after application.",
  },
] as const;

/**
 * How to use — four illustrated steps. No dosages, placement quantities or
 * treatment schedules are invented; everything points back to the label.
 */
export function HowToUse() {
  return (
    <section id="how-to-use" aria-labelledby="howto-heading" className="scroll-mt-24 bg-background py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 id="howto-heading" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            How to Use the Product
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Always work from the official product label — these steps summarise it.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="absolute right-4 top-4 text-4xl font-extrabold text-brand-green-soft">
                {index + 1}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green text-brand-green-foreground">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm">
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
          <div className="text-muted-foreground">
            <p className="font-semibold text-foreground">Important — professional use &amp; storage</p>
            <p className="mt-1">
              The supplied packaging refers to commercial applicators. Verify the exact product label,
              intended user category and applicable registration before publishing or following
              consumer-facing instructions. {siteConfig.product.storage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
