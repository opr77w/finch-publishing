// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Full guide detail layout with image, specs, and related guides
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AvailabilityBadge from "./AvailabilityBadge";
import ProductCard from "./ProductCard";
import { PRODUCTS, type Product } from "@/lib/data/products";

interface Props {
  product: Product;
}

export default function GuideDetail({ product }: Props) {
  const related = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Main detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Cover image */}
        <div className="relative aspect-[4/3] bg-muted rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <AvailabilityBadge available={product.available} />
            <span className="text-xs text-muted-foreground">{product.dimensions}</span>
          </div>

          <h1 className="font-serif text-3xl font-medium leading-tight mb-2">
            {product.name}
          </h1>
          <p className="text-muted-foreground mb-4">{product.tagline}</p>

          <p className="text-2xl font-medium mb-6">£{product.price.toFixed(2)}</p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {product.longDescription}
          </p>

          {/* Specs */}
          <ul className="space-y-2 mb-8">
            {product.specs.map((spec) => (
              <li key={spec} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {spec}
              </li>
            ))}
          </ul>

          {product.available && product.buyUrl ? (
            <Button asChild size="lg">
              <a href={product.buyUrl} target="_blank" rel="noopener noreferrer">
                Buy now — £{product.price.toFixed(2)}
              </a>
            </Button>
          ) : (
            <Button size="lg" disabled>
              Currently sold out
            </Button>
          )}

          <p className="text-xs text-muted-foreground mt-3">
            Free UK postage on your first copy.
          </p>
        </div>
      </div>

      {/* Creators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Written by</p>
          <p className="font-medium mb-1">{product.writer}</p>
          <p className="text-sm text-muted-foreground">{product.writerBio}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Illustrated by</p>
          <p className="font-medium mb-1">{product.illustrator}</p>
          <p className="text-sm text-muted-foreground">{product.illustratorBio}</p>
        </div>
      </div>

      {/* Related guides */}
      <Separator className="mb-10" />
      <h2 className="font-serif text-xl font-medium mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {related.map((p) => (
          <ProductCard key={p.slug} product={p} showBuyLink />
        ))}
      </div>
    </div>
  );
}
