// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Homepage assembling hero, featured guides, and newsletter sections
import Hero from "@/components/home/Hero";
import FeaturedGuides from "@/components/home/FeaturedGuides";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata = {
  title: "finch publishing.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedGuides />
      <NewsletterSection variant="inline" />
      <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-medium mb-2">Beautifully illustrated</p>
            <p className="text-muted-foreground leading-relaxed">
              Each guide is hand-illustrated by a commissioned artist, making
              every map a work of art as well as a practical companion.
            </p>
          </div>
          <div>
            <p className="font-medium mb-2">Sustainably produced</p>
            <p className="text-muted-foreground leading-relaxed">
              Printed in the UK using vegetable-based inks on FSC-accredited
              paper, to ISO14001 environmental standards.
            </p>
          </div>
          <div>
            <p className="font-medium mb-2">Free UK postage</p>
            <p className="text-muted-foreground leading-relaxed">
              Postage and packing is free for your first copy in any UK order.
              Dispatched by Royal Mail first class.
            </p>
          </div>
        </div>
      </div>
      <NewsletterSection variant="inline" />
    </>
  );
}
