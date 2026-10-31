import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/config/faq";

/** Accessible FAQ accordion, placed near the bottom of the page. */
export function FaqSection() {
  return (
    <section id="faqs" aria-labelledby="faqs-heading" className="scroll-mt-24 bg-card py-14">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 id="faqs-heading" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-8">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-sm font-semibold sm:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
