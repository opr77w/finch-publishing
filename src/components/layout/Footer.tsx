// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Footer with brand, navigation, business info, and social links
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Inline SVG social icons (lucide-react v1 removed social icons)
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand + social */}
          <div>
            <p className="font-serif text-base font-medium mb-2">
              finch publishing.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Illustrated maps and guides for garden lovers.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/finch_publishing_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconInstagram />
              </a>
              <a
                href="https://www.facebook.com/finchpublishing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconFacebook />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Quick links
            </p>
            <nav className="flex flex-col gap-2 text-sm">
              {[
                { label: "Our Guides", href: "/our-guides" },
                { label: "Shop", href: "/shop" },
                { label: "Stockists", href: "/stockists" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Keep in Touch", href: "/keep-in-touch" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Contact
            </p>
            <address className="not-italic text-sm text-muted-foreground space-y-1 leading-relaxed">
              <p>23 Brailsford Road</p>
              <p>London SW2 2TB</p>
              <p>United Kingdom</p>
              <p className="pt-2">
                <a
                  href="mailto:hello@finchpublishing.co.uk"
                  className="hover:text-foreground transition-colors"
                >
                  hello@finchpublishing.co.uk
                </a>
              </p>
              <p className="text-xs pt-1">Monday–Friday, 9:00–17:30</p>
            </address>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2024 Finch Publishing. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacy-and-terms" className="hover:text-foreground transition-colors">
              Privacy &amp; Terms
            </Link>
            <Link href="/refunds-returns" className="hover:text-foreground transition-colors">
              Refunds &amp; Returns
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
