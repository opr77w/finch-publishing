// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Guides catalog page displaying all three products in a grid
import type { Metadata } from "next";
import ProductCard from "@/components/guides/ProductCard";
import { PRODUCTS } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Our Guides",
  description:
    "Browse all illustrated map guides from Finch Publishing — beautifully produced garden companions for the UK.",
};

export default function OurGuidesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-medium mb-2">Our guides</h1>
      <p className="text-muted-foreground mb-10">
        Beautifully illustrated folded map guides to the finest gardens across
        the UK. Written by Natasha Goodfellow and illustrated by commissioned
        artists.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} showBuyLink />
        ))}
      </div>
    </div>
  );
}
