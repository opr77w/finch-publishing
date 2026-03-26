// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Newsletter signup page using the full-variant NewsletterSection
import type { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Keep in Touch",
  description:
    "Sign up to hear about new guides and publications from Finch Publishing.",
};

export default function KeepInTouchPage() {
  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 py-16">
      <Card>
        <CardHeader>
          <h1 className="font-serif text-2xl font-medium">Keep in touch</h1>
          <p className="text-sm text-muted-foreground">
            Sign up with your email address to receive news of new titles and
            publications from Finch Publishing. We respect your privacy and
            will never share your details.
          </p>
        </CardHeader>
        <CardContent>
          <NewsletterSection variant="full" />
        </CardContent>
      </Card>
    </div>
  );
}
