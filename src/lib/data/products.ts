// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Static product data for all three Finch guides

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  available: boolean;
  image: string;
  dimensions: string;
  buyUrl: string | null;
  specs: string[];
  writer: string;
  illustrator: string;
  writerBio: string;
  illustratorBio: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "a-london-floral",
    name: "A London Floral",
    tagline: "Unmissable destinations for flower lovers",
    description:
      "An illustrated map guide featuring over 80 fabulous floral destinations including parks, gardens, markets, nurseries, botanic gardens, florists, and flower schools throughout London.",
    longDescription:
      "Explore London's finest floral destinations with this beautifully illustrated map guide. From rose gardens and herb gardens to urban flower markets and specialist nurseries, A London Floral is your guide to the city's most spectacular blooms. Featuring botanic spaces, dining venues among flowers, and hidden horticultural gems across the capital.",
    price: 8.5,
    available: false,
    image: "/finch/images/london-floral.jpg",
    dimensions: "594 × 420mm",
    buyUrl: null,
    specs: [
      "Beautifully illustrated folded map in slip case",
      "Over 80 floral destinations",
      "Produced in the UK to ISO14001 environmental standards",
      "Vegetable-based inks on FSC-accredited paper",
    ],
    writer: "Natasha Goodfellow",
    writerBio:
      "Natasha contributes to Gardens Illustrated, Elle Decoration UK, and The Simple Things.",
    illustrator: "Clover Robin",
    illustratorBio:
      "Clover Robin is an artist and illustrator and the author of Cut Paper Pictures (Quarto, 2018).",
  },
  {
    slug: "a-cotswold-garden-companion",
    name: "A Cotswold Garden Companion",
    tagline: "Discover the gardens of the Cotswolds",
    description:
      "An illustrated companion to the most beautiful gardens, nurseries, and green spaces across the Cotswolds — from Chipping Campden to Bradford on Avon. Published March 2022.",
    longDescription:
      "Journey through the rolling hills and honey-stone villages of the Cotswolds with this illustrated garden companion. Covering approximately 800 square miles, it features 55+ gardens including Jacobean estates, English landscape movement classics, William Morris-inspired gardens, contemporary designs, and specialist plant nurseries.",
    price: 8.5,
    available: true,
    image: "/finch/images/cotswold-companion.jpg",
    dimensions: "594 × 420mm",
    buyUrl: "https://www.finchpublishing.co.uk/shop",
    specs: [
      "Beautifully illustrated folded map in slip case",
      "55+ gardens and nurseries",
      "Produced in the UK to ISO14001 environmental standards",
      "Vegetable-based inks on FSC-accredited paper",
    ],
    writer: "Natasha Goodfellow",
    writerBio:
      "Natasha contributes to Gardens Illustrated, Elle Decoration UK, and Country Life.",
    illustrator: "Jo Parry",
    illustratorBio:
      "Jo Parry works across publishing, art, and children's books with clients including RNLI, BBC, and Quarto.",
  },
  {
    slug: "a-sussex-garden-companion",
    name: "A Sussex Garden Companion",
    tagline: "Discover the gardens of Sussex",
    description:
      "An illustrated companion to the most beautiful gardens, nurseries, and green spaces across Sussex — from the High Weald to the chalk downlands.",
    longDescription:
      "From the South Downs to the coast, Sussex is home to some of England's most remarkable gardens. This illustrated companion features 50+ gardens including 15th-century aristocratic estates, contemporary designs, rose gardens, cottage gardens, and historic orchards — from the High Weald in the east to the fertile greensands in the west.",
    price: 8.5,
    available: true,
    image: "/finch/images/sussex-companion.jpg",
    dimensions: "594 × 420mm",
    buyUrl: "https://www.finchpublishing.co.uk/shop",
    specs: [
      "Beautifully illustrated folded map in slip case",
      "50+ gardens and green spaces",
      "Produced in the UK to ISO14001 environmental standards",
      "Vegetable-based inks on FSC-accredited paper",
    ],
    writer: "Natasha Goodfellow",
    writerBio:
      "Natasha contributes to Gardens Illustrated, House & Garden, and Country Life.",
    illustrator: "Ruby Taylor",
    illustratorBio:
      "Ruby Taylor works with Google, L'Occitane, HarperCollins, and the Victoria and Albert Museum.",
  },
];

// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Helpers to look up products and generate static params
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
