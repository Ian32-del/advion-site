import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Product } from "@/config/products";

export function ProductAboutDialog({ product }: { product: Product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-3 h-11 w-full rounded-xl font-semibold">
          About this product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>About {product.productName}</DialogTitle>
          <DialogDescription>{product.about.intro}</DialogDescription>
        </DialogHeader>
        <dl className="mt-4 space-y-3 text-sm">
          {product.about.specs.map((spec) => (
            <div key={spec.label}>
              <dt className="font-bold">{spec.label}</dt>
              <dd className="text-muted-foreground">{spec.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 rounded-xl border border-yellow-300 bg-yellow-50 p-3 text-xs text-yellow-900">
          {product.about.warning}
        </p>
      </DialogContent>
    </Dialog>
  );
}