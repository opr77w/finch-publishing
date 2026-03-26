// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Stockists page rendering all 27 stockists grouped by region
import type { Metadata } from "next";
import StockistList from "@/components/stockists/StockistList";

export const metadata: Metadata = {
  title: "Stockists",
  description:
    "Find Finch Publishing guides at bookshops, garden centres, and galleries across the UK and beyond.",
};

export default function StockistsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-medium mb-2">Stockists</h1>
      <p className="text-muted-foreground mb-10">
        Our guides are available at independent bookshops, garden centres, and
        cultural venues across the UK. You can also buy directly from our shop.
      </p>
      <StockistList />
    </div>
  );
}
