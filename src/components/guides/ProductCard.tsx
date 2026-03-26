// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Reusable product card used on homepage, catalog, and shop pages
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AvailabilityBadge from "./AvailabilityBadge";
import type { Product } from "@/lib/data/products";

interface Props {
  product: Product;
  showBuyLink?: boolean;
}

export default function ProductCard({ product, showBuyLink = false }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden group">
      <Link href={`/guides/${product.slug}`} className="block overflow-hidden">
        <div className="relative aspect-[4/3] bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="flex-1 pt-4 pb-2">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/guides/${product.slug}`}>
            <h3 className="font-serif text-base font-medium leading-snug hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <AvailabilityBadge available={product.available} />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <p className="mt-3 text-sm font-medium">£{product.price.toFixed(2)}</p>
      </CardContent>
      {showBuyLink && (
        <CardFooter className="pt-0 pb-4">
          {product.available && product.buyUrl ? (
            <Button asChild size="sm" className="w-full">
              <a
                href={product.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy now
              </a>
            </Button>
          ) : (
            <Button size="sm" className="w-full" disabled>
              Sold out
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
