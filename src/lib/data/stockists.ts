// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Complete stockist list with region grouping for display

export interface Stockist {
  name: string;
  location: string;
  region: "London" | "UK Regional" | "International";
}

export const STOCKISTS: Stockist[] = [
  { name: "Barbican Shop", location: "London", region: "London" },
  { name: "Chelsea Physic Garden", location: "London", region: "London" },
  { name: "Clapham Books", location: "London", region: "London" },
  { name: "Daunt Books", location: "Marylebone, London", region: "London" },
  { name: "Electric Daisy Flower Farm Shop", location: "Highgate, London", region: "London" },
  { name: "Fulham Palace Trust", location: "Fulham, London", region: "London" },
  { name: "Hortus", location: "Blackheath, London", region: "London" },
  { name: "Nomad Books", location: "Fulham, London", region: "London" },
  { name: "Primrose Hill Books", location: "London", region: "London" },
  { name: "RBG Kew", location: "London", region: "London" },
  { name: "Royal Academy of Arts", location: "London", region: "London" },
  { name: "The Barnes Bookshop", location: "London", region: "London" },
  { name: "The Notting Hill Bookshop", location: "London", region: "London" },
  { name: "West End Lane Books", location: "Hampstead, London", region: "London" },
  { name: "Blackwells", location: "Oxford", region: "UK Regional" },
  { name: "Emma's Wild Garden", location: "Ormskirk", region: "UK Regional" },
  { name: "Frank", location: "Whitstable", region: "UK Regional" },
  { name: "La Biblioteka", location: "Sheffield", region: "UK Regional" },
  { name: "Long Barn", location: "Alresford", region: "UK Regional" },
  { name: "RHS Harlow Carr", location: "Yorkshire", region: "UK Regional" },
  { name: "RHS Hyde Hall", location: "Essex", region: "UK Regional" },
  { name: "RHS Rosemoor", location: "Devon", region: "UK Regional" },
  { name: "RHS Wisley", location: "Surrey", region: "UK Regional" },
  { name: "Sarah Raven", location: "Perch Hill", region: "UK Regional" },
  { name: "Waterstones", location: "Multiple UK locations", region: "UK Regional" },
  { name: "Hodges Figgis", location: "Dublin, Ireland", region: "International" },
];

// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Group stockists by region for sectioned display
export function getStockistsByRegion(): Record<Stockist["region"], Stockist[]> {
  return STOCKISTS.reduce(
    (acc, s) => {
      acc[s.region].push(s);
      return acc;
    },
    { London: [], "UK Regional": [], International: [] } as Record<Stockist["region"], Stockist[]>
  );
}
