// When: 2026-03-26 | By: claude-sonnet-4-6 | What: FAQ content as typed constants for accordion rendering

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    id: "postage",
    question: "Is postage included?",
    answer:
      "If you live within the UK, postage and packing is free for your first copy in any order. International orders incur additional postage fees, and customers are responsible for any applicable duties and taxes.",
  },
  {
    id: "order-tracking",
    question: "Where's my order?",
    answer:
      "We send orders out by first class post using Royal Mail, so they should arrive with you (if you are based in the UK) within two to three working days. International delivery takes longer and orders are not tracked.",
  },
  {
    id: "suggestions",
    question: "Can I tell you about a great place I know?",
    answer:
      "We love hearing about wonderful places! Send your suggestions to hello@finchpublishing.co.uk and we may include them in future guides.",
  },
  {
    id: "wholesale",
    question: "Can I sell your guides in my shop?",
    answer:
      "We'd love to hear from potential stockists. Please contact us at hello@finchpublishing.co.uk for wholesale and retailer information.",
  },
  {
    id: "eu-shipping",
    question: "Do you ship to the EU?",
    answer:
      "Due to new regulations, we are currently unable to ship to EU countries or Northern Ireland. We apologise for any inconvenience.",
  },
];
