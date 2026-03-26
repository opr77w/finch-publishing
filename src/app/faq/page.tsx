// When: 2026-03-26 | By: claude-sonnet-4-6 | What: FAQ page with shadcn Accordion and contact CTA
import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Finch Publishing guides.",
};

export default function FaqPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-medium mb-2">FAQ</h1>
      <p className="text-muted-foreground mb-10">
        Answers to the most common questions about our guides, orders, and
        postage.
      </p>
      <FaqAccordion />
      <div className="mt-12 text-sm text-muted-foreground">
        Still have a question?{" "}
        <Link href="/contact" className="text-foreground underline underline-offset-2 hover:text-primary">
          Contact us
        </Link>
        .
      </div>
    </div>
  );
}
