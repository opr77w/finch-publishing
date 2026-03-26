// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Featured guides grid on the homepage
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/guides/ProductCard";
import { PRODUCTS } from "@/lib/data/products";

export default function FeaturedGuides() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="font-serif text-2xl font-medium mb-1">Our guides</h2>
          <p className="text-sm text-muted-foreground">
            Produced in the UK. Illustrated by hand.
          </p>
        </div>
        <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
          <Link href="/our-guides">View all</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <div className="mt-6 sm:hidden">
        <Button asChild variant="outline" className="w-full">
          <Link href="/our-guides">View all guides</Link>
        </Button>
      </div>
    </section>
  );
}
