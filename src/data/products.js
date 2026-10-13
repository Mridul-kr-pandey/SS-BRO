import { encodeImageSrc, homePlacement } from "./imageCatalog";

/**
 * Confirmed Pouch Products Data for S.S. Brothers
 * Images come from homePlacement; SVG placeholders remain where
 * pouch construction cannot be confirmed from client photographs.
 */
export const products = [
  {
    id: "center-seal-pouch",
    name: "Center Seal Pouch",
    image: encodeImageSrc(homePlacement.products["center-seal-pouch"]),
    badge: "Versatile Standard",
    description:
      "Flexible packaging format designed for efficient product filling, protection and presentation across diverse dry and granular goods.",
    keyFeatures: [
      "Center back fin/lap seal",
      "High filling efficiency",
      "Optimal branding surface on front & back"
    ]
  },
  {
    id: "three-side-seal-pouch",
    name: "3-Side Seal Pouch",
    image: encodeImageSrc(homePlacement.products["three-side-seal-pouch"]),
    badge: "Flat Barrier Protection",
    description:
      "Flat pouch format sealed on three edges, maximizing printable space and providing robust barrier protection for single-serve and portion packs.",
    keyFeatures: [
      "Uniform perimeter seals",
      "Maximum face-to-volume ratio",
      "Ideal for sample & single-use packaging"
    ]
  },
  {
    id: "stand-up-zipper-pouch",
    name: "Stand-Up Pouch with Zipper",
    image: encodeImageSrc(homePlacement.products["stand-up-zipper-pouch"]),
    badge: "Retail Shelf Leader",
    description:
      "Popular self-standing pouch with reclosable zipper closure, delivering premium shelf presence and consumer convenience.",
    keyFeatures: [
      "Stable bottom gusset for upright display",
      "Resealable press-to-close zipper",
      "Excellent barrier against moisture and aroma"
    ]
  },
  {
    id: "three-d-pouch",
    name: "3D Pouch",
    image: encodeImageSrc(homePlacement.products["three-d-pouch"]),
    badge: "Box-Pouch Innovation",
    description:
      "Three-dimensional flat bottom pouch offering five distinct printable panels and exceptional cubic volume utilization.",
    keyFeatures: [
      "Completely flat, stable base",
      "5 panels for panoramic brand display",
      "Reduced shelf footprint with higher capacity"
    ]
  },
  {
    id: "quad-seal-pouch",
    name: "Quad Seal Pouch",
    image: encodeImageSrc(homePlacement.products["quad-seal-pouch"]),
    badge: "Heavy-Duty Stability",
    description:
      "Four-corner sealed structure providing rigid reinforced corners, preventing bulging and maintaining a clean rectangular posture.",
    keyFeatures: [
      "Four distinct corner seals for rigidity",
      "Clean seamless front and back panels",
      "Suited for higher fill weights and granular products"
    ]
  },
  {
    id: "two-side-gusset-pouch",
    name: "2-Side Gusset Pouch",
    image: encodeImageSrc(homePlacement.products["two-side-gusset-pouch"]),
    badge: "Expanded Capacity",
    description:
      "Classic packaging format featuring two expandable side gussets that expand during filling to accommodate high product volume.",
    keyFeatures: [
      "Expanding side panels for volume capacity",
      "Compact shipping and storage prior to filling",
      "Strong vertical seam integrity"
    ]
  }
];
