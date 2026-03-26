// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Shop listing page with all products and buy links
import type { Metadata } from "next";
import ProductCard from "@/components/guides/ProductCard";
import { PRODUCTS } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Buy illustrated garden map guides from Finch Publishing. Free UK postage on your first copy.",
};

export default function ShopPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-medium mb-2">Shop</h1>
      <p className="text-muted-foreground mb-2">
        Free UK postage on your first copy in any order. Dispatched by Royal
        Mail first class within two working days.
      </p>
      <p className="text-sm text-muted-foreground mb-10 bg-muted rounded-lg px-4 py-3 inline-block">
        Please note: we are currently unable to ship to EU countries or
        Northern Ireland.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} showBuyLink />
        ))}
      </div>
    </div>
  );
}
