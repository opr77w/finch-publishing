// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Homepage hero section with headline and CTAs
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative py-24 px-4 sm:px-6 text-center bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
          finch publishing.
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight mb-6">
          Illustrated maps and guides for garden lovers
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          Beautiful folded map guides to the finest gardens, parks, nurseries,
          and green spaces across the UK — written and illustrated by experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/our-guides">Browse our guides</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/shop">Visit the shop</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
