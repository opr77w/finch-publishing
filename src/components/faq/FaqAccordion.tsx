// When: 2026-03-26 | By: claude-sonnet-4-6 | What: FAQ accordion powered by shadcn Accordion and static FAQ data
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data/faqs";

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQS.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
