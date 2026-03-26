// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Visual badge for product availability status
import { Badge } from "@/components/ui/badge";

interface Props {
  available: boolean;
}

export default function AvailabilityBadge({ available }: Props) {
  return available ? (
    <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-0">
      Available
    </Badge>
  ) : (
    <Badge variant="secondary">Sold out</Badge>
  );
}
