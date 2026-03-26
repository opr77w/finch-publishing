// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Contact page with form and business info aside
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Finch Publishing.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-medium mb-2">Contact</h1>
      <p className="text-muted-foreground mb-10">
        Have a question, suggestion, or wholesale enquiry? We&apos;d love to hear
        from you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <div className="space-y-6 text-sm">
          <div>
            <p className="font-medium mb-1">Email</p>
            <a
              href="mailto:hello@finchpublishing.co.uk"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@finchpublishing.co.uk
            </a>
          </div>
          <div>
            <p className="font-medium mb-1">Address</p>
            <address className="not-italic text-muted-foreground leading-relaxed">
              23 Brailsford Road<br />
              London SW2 2TB<br />
              United Kingdom
            </address>
          </div>
          <div>
            <p className="font-medium mb-1">Hours</p>
            <p className="text-muted-foreground">Monday–Friday, 9:00–17:30</p>
          </div>
          <div className="text-muted-foreground bg-muted rounded-lg p-4 text-xs leading-relaxed">
            Please note: due to new regulations we are currently unable to ship
            to EU countries or Northern Ireland.
          </div>
        </div>
      </div>
    </div>
  );
}
