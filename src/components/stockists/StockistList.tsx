// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Grouped stockist list rendered into regional sections
import { Separator } from "@/components/ui/separator";
import { getStockistsByRegion, type Stockist } from "@/lib/data/stockists";

// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Renders a single region's stockist entries
function StockistGroup({
  title,
  items,
}: {
  title: string;
  items: Stockist[];
}) {
  return (
    <div>
      <h2 className="font-serif text-lg font-medium mb-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((s) => (
          <li key={s.name} className="flex items-baseline gap-2 text-sm">
            <span className="font-medium">{s.name}</span>
            <span className="text-muted-foreground">— {s.location}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StockistList() {
  const byRegion = getStockistsByRegion();

  return (
    <div className="space-y-10">
      <StockistGroup title="London" items={byRegion.London} />
      <Separator />
      <StockistGroup title="UK Regional" items={byRegion["UK Regional"]} />
      <Separator />
      <StockistGroup title="International" items={byRegion.International} />
    </div>
  );
}
