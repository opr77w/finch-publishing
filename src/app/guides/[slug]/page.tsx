// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Statically generated individual guide pages
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GuideDetail from "@/components/guides/GuideDetail";
import { getProductBySlug, getAllSlugs } from "@/lib/data/products";

// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Generate static params for all three guide slugs
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <GuideDetail product={product} />;
}
