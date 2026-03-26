// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Static privacy policy and terms page
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy &amp; Terms",
};

export default function PrivacyAndTermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 prose prose-sm dark:prose-invert">
      <h1 className="font-serif text-3xl font-medium mb-8">Privacy &amp; Terms</h1>

      <h2 className="font-serif text-xl font-medium mt-8 mb-3">Privacy Policy</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        We collect personal information (name and email address) only when you
        make a purchase or sign up to our newsletter. We do not sell, share, or
        rent your data to third parties.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        If you would like your data deleted, please contact us at{" "}
        <a href="mailto:hello@finchpublishing.co.uk" className="underline">
          hello@finchpublishing.co.uk
        </a>{" "}
        and we will remove it promptly.
      </p>

      <h2 className="font-serif text-xl font-medium mt-8 mb-3">Cookies</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Our website uses cookies to identify visitors and understand how the
        site is used. By continuing to browse you consent to the use of cookies.
      </p>

      <h2 className="font-serif text-xl font-medium mt-8 mb-3">Intellectual Property</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        All content on this website — including illustrations, text, and maps —
        is protected by copyright and belongs to Finch Publishing or its
        licensors. Personal use viewing and printing is permitted; any
        commercial reproduction requires written permission.
      </p>

      <h2 className="font-serif text-xl font-medium mt-8 mb-3">Shipping Policy</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Orders are dispatched via Royal Mail within two working days. Free UK
        postage applies to the first copy in any order. International customers
        are responsible for postage costs and any applicable customs duties or
        taxes.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Due to new regulations, we are currently unable to ship to EU countries
        or Northern Ireland.
      </p>

      <h2 className="font-serif text-xl font-medium mt-8 mb-3">Applicable Law</h2>
      <p className="text-muted-foreground leading-relaxed">
        These terms are governed by the laws of England and Wales.
      </p>
    </div>
  );
}
