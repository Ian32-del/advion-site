import { Camera, ImageIcon, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * Horizontal review photo carousel. Every card is a clearly identified
 * placeholder — fabricated testimonials, ratings and photos are never shown.
 * The seller replaces these with genuine, permitted content before launch.
 */
export function ReviewsCarousel() {
  const reviews = siteConfig.reviews;
  const hasRealReviews = reviews.some((r) => r.text && r.name);

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-24 bg-card py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            What Customers Say
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Genuine customer photos and reviews appear here.
          </p>
          {!hasRealReviews && (
            <p className="mx-auto mt-3 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              Placeholders below — replaced with verified customer reviews before launch.
            </p>
          )}
        </div>

        <Carousel className="mx-auto mt-10 w-full max-w-5xl" opts={{ align: "start", loop: false }}>
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="basis-[85%] pl-4 sm:basis-[55%] lg:basis-[38%]">
                <figure className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-muted/40 p-5">
                  <div className="flex h-40 items-center justify-center rounded-xl bg-background">
                    {review.photoUrl ? (
                      <img
                        src={review.photoUrl}
                        alt={`Customer photo from ${review.name ?? "a customer"}`}
                        loading="lazy"
                        className="h-full w-full rounded-xl object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <ImageIcon className="h-8 w-8" aria-hidden="true" />
                        <span className="text-xs font-medium">Genuine customer photo goes here</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex items-center gap-1" aria-hidden="true">
                    {(() => {
                      const rating = review.rating;
                      if (!rating) return null;
                      return Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < rating ? "fill-brand-green text-brand-green" : "text-border"}`}
                        />
                      ));
                    })()}
                  </div>
                  <blockquote className="mt-2 flex-1 text-sm text-muted-foreground">
                    {review.text ?? (
                      <span className="italic">
                        “Real review text from a real customer will appear here — nothing is fabricated.”
                      </span>
                    )}
                  </blockquote>
                  <figcaption className="mt-3 flex items-center gap-2 text-xs font-medium">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-green-soft text-brand-green-foreground">
                      <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {review.name ? (
                      <>
                        <span>{review.name}</span>
                        {review.verifiedPurchase && (
                          <span className="rounded-full bg-brand-green-soft px-2 py-0.5 text-[10px] font-bold text-brand-green-foreground">
                            Verified purchase
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-muted-foreground">Review placeholder — replaced before launch</span>
                    )}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Previous reviews" className="hidden md:inline-flex" />
          <CarouselNext aria-label="Next reviews" className="hidden md:inline-flex" />
        </Carousel>

        <div className="mt-10 text-center">
          
        </div>
      </div>
    </section>
  );
}
