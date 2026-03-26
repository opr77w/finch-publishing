// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Static refunds and returns policy page
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refunds &amp; Returns",
};

export default function RefundsReturnsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-medium mb-8">Refunds &amp; Returns</h1>

      <div className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="font-serif text-lg font-medium mb-2">Return eligibility</h2>
          <p className="text-muted-foreground">
            We accept returns within 30 days of receipt. Items must be unused,
            in their original condition, and returned in their original packaging.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-medium mb-2">How to return</h2>
          <p className="text-muted-foreground">
            To initiate a return, please contact us at{" "}
            <a
              href="mailto:hello@finchpublishing.co.uk"
              className="underline underline-offset-2"
            >
              hello@finchpublishing.co.uk
            </a>{" "}
            with your order details and reason for return.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-medium mb-2">Refunds</h2>
          <p className="text-muted-foreground">
            Once your return is received and inspected, we will process your
            refund to your original payment method. Please allow time for your
            card issuer or bank to process the credit.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-medium mb-2">Return shipping costs</h2>
          <p className="text-muted-foreground">
            Customers are responsible for the cost of return shipping.
            Original postage costs are non-refundable.
          </p>
        </div>

        <div className="text-muted-foreground">
          <Link href="/contact" className="underline underline-offset-2 hover:text-foreground transition-colors">
            Contact us
          </Link>{" "}
          if you have any questions about a return.
        </div>
      </div>
    </div>
  );
}
