/**
 * Internal visual classification of client-provided images.
 * Not rendered to users. Filenames are original WhatsApp names.
 *
 * Classification is based on inspecting photograph/artwork content,
 * not filenames. Product construction is only assigned when it is
 * visible. Snack pillow packs are NOT claimed as Center Seal vs
 * 3-Side Seal unless construction can be seen.
 */

const CLIENT = "/images/client";

export const encodeImageSrc = (path) => encodeURI(path);

const f = (name) => `${CLIENT}/${name}`;

export const imageCatalog = [
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.48 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "WOYE Crunchy Stars snack pack front artwork. Pillow-style bag silhouette; construction not visible.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.49 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "WOYE Crunchy Hearts snack pack artwork. Pillow-style; construction not visible.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.51 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "WOYE Crunchy Drums snack pack artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.52 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "WOYE Crunchy Noodle Bites snack pack artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.52 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "WOYE Crunchy Dino snack pack artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.52 AM (2).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "WOYE Crunchy Pasta Bites snack pack artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.53 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "HAWAII Chili Lime extruded snack pack. Brand mark HAWAII is visible (Hawaii Group identification on packaging, not a standalone logo file).",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery", "partners"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.53 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "HAWAII Potato Chips Classic pack artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.54 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "HAWAII Pop Rings Masala snack pack artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.54 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Healthy SaaM Sticks Masala Masti snack pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.55 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Healthy SaaM Sticks Smoked Garlic snack pack (near-duplicate of Masala Masti layout).",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.55 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Kshatri Namkeen Peanut snack pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.56 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Sun Gold Katori snack pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.58 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "A-One Corn Chips pack shown at a 3/4 angle with drop shadow. Strong hero/gallery composition; construction still not confirmed.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["hero", "gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.58 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Healthy SaaM Sticks Achari Masti (layout duplicate of other Healthy SaaM packs).",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.59 AM.jpeg"),
    visualType: "side-gusset-pouch-render",
    notes: "3D render of orange R&M Ayurvedic Medicine pouch. Side panel/gusset is clearly visible; zipper-style top shown. Standing with a side face.",
    possibleProductTypes: ["2-Side Gusset Pouch"],
    possibleIndustries: ["Ayurvedic"],
    recommendedUsage: ["products", "industries"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.08.59 AM (1).jpeg"),
    visualType: "side-gusset-pouch-render",
    notes: "3D render of R&M Ayurvedic churna pouch with visible side gusset. Same construction family as the orange R&M pack.",
    possibleProductTypes: ["2-Side Gusset Pouch"],
    possibleIndustries: ["Ayurvedic"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.00 AM.jpeg"),
    visualType: "stand-up-zipper-photo",
    notes: "Photograph of Hun-g Powder stand-up pouch on a production table. Self-standing, zipper top, scissors-cut notch. Label reads Ayurvedic Medicine.",
    possibleProductTypes: ["Stand-Up Pouch with Zipper"],
    possibleIndustries: ["Ayurvedic"],
    recommendedUsage: ["products", "about", "hero"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.00 AM (1).jpeg"),
    visualType: "stand-up-zipper-photo",
    notes: "Photograph of R&M Health Mix Powder stand-up zipper pouch. Label reads Ayurvedic Medicine.",
    possibleProductTypes: ["Stand-Up Pouch with Zipper"],
    possibleIndustries: ["Ayurvedic"],
    recommendedUsage: ["why-choose-us", "gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.00 AM (2).jpeg"),
    visualType: "stand-up-zipper-render",
    notes: "Assam Sip tea stand-up pouch render with zipper at top, standing on a white surface.",
    possibleProductTypes: ["Stand-Up Pouch with Zipper"],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.01 AM.jpeg"),
    visualType: "stand-up-zipper-render",
    notes: "Back panel of a stand-up zipper pouch (Ayurvedic proprietary medicine copy). Zipper visible at top.",
    possibleProductTypes: ["Stand-Up Pouch with Zipper"],
    possibleIndustries: ["Ayurvedic"],
    recommendedUsage: ["unused"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.01 AM (1).jpeg"),
    visualType: "stand-up-zipper-render",
    notes: "R&M Shaktiwardhak Powder stand-up zipper pouch front. Ayurvedic branding. Clean studio render.",
    possibleProductTypes: ["Stand-Up Pouch with Zipper"],
    possibleIndustries: ["Ayurvedic"],
    recommendedUsage: ["industries", "hero"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.02 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Tangoo Zikzag snack pack artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.02 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Panwar Achaari Masti roasted makhana pack. Pillow-style; construction not confirmed.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.03 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Crazy Crisp Chatpata Samosa frozen/snack pack. Wider pillow format.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.03 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Panwar Chocolate Coated Makhana pack (near-duplicate layout of other Panwar packs).",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.03 AM (2).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Panwar Peri Peri roasted makhana pack (near-duplicate layout).",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.04 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Crazy Crisp Hara Bhara Kabab frozen pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.04 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Tangoo Triangle Chatpata Masala snack pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.05 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Gaya ji Namkeen pasta-style snack pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.05 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "NS Maze Macaroni Pasta pack artwork. Incomplete product window (grey placeholder). Lower visual quality for Home.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "medium"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.06 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "X&S Cheddar Cheese Wafers pack with empty grey product window. Incomplete artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "medium"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.06 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Sanghratan Red Chilli Powder pack. Rounded-top pillow/gusset spice bag; construction not confirmed from front artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.06 AM (2).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Fro-Fresh Frozen Sweet Corn pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.07 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Sanghratan Turmeric Powder pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.07 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Sanghratan Coriander Powder pack (layout duplicate of other Sanghratan spice packs).",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.09 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "X&S Peri Peri Wafers pack with empty product window. Incomplete artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "medium"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.10 AM.jpeg"),
    visualType: "narrow-sachet",
    notes: "Osmo RO membrane tall narrow sachet. Typical 3-side-seal stick/sachet proportion (sealed perimeter, no zipper, not self-standing).",
    possibleProductTypes: ["3-Side Seal Pouch"],
    possibleIndustries: [],
    recommendedUsage: ["products"],
    confidence: "medium"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.10 AM (1).jpeg"),
    visualType: "stand-up-zipper-photo",
    notes: "Photograph of R&M Ayurvedic churna pouch lying flat. Zipper at top. Same SKU as the 3D gusset render.",
    possibleProductTypes: ["Stand-Up Pouch with Zipper", "2-Side Gusset Pouch"],
    possibleIndustries: ["Ayurvedic"],
    recommendedUsage: ["gallery"],
    confidence: "medium"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.10 AM (2).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Fro-Fresh Frozen Mix Veg pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.11 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Fresqo Potato Chilli Chips pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.11 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Fresqo Cream & Onion Chips pack (layout duplicate of other Fresqo).",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.12 AM.jpeg"),
    visualType: "stand-up-zipper-photo",
    notes: "Back of photographed R&M Ayurvedic pouch. Zipper visible. Weaker composition.",
    possibleProductTypes: ["Stand-Up Pouch with Zipper"],
    possibleIndustries: ["Ayurvedic"],
    recommendedUsage: ["unused"],
    confidence: "medium"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.12 AM (1).jpeg"),
    visualType: "stand-up-zipper-render",
    notes: "Trinetram Flavored Makhana Cream Onion stand-up pouch with zipper. Premium studio render.",
    possibleProductTypes: ["Stand-Up Pouch with Zipper"],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["hero", "gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.13 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Vinku Cream Onion Potato Chips 3/4 pack render. Strong composition.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["hero", "gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.13 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Vinku Indian Masala Potato Chips pack (same family as cream onion).",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.14 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Papa Masala Chips pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.14 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Papa Hara Matar snack pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.14 AM (2).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Gaya ji Katori snack pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.15 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Frumee Noodles Chatpata Masala snack pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.15 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "ChanGu's Chatpati Katori snack pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.16 AM.jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Radhika Marwadi Mehndi Henna Natural Black hair-colour pack. Beauty / personal care is explicit on the artwork.",
    possibleProductTypes: [],
    possibleIndustries: ["Beauty & Personal Care"],
    recommendedUsage: ["industries", "gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.16 AM (1).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "Radhika Henna Natural Brown (same SKU family as black).",
    possibleProductTypes: [],
    possibleIndustries: ["Beauty & Personal Care"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.16 AM (2).jpeg"),
    visualType: "flexible-pouch-artwork",
    notes: "ChanGu's Palak Paneer crunchy snacks pack.",
    possibleProductTypes: [],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["gallery"],
    confidence: "high"
  },
  {
    file: f("WhatsApp Image 2026-09-23 at 10.09.17 AM.jpeg"),
    visualType: "stand-up-zipper-render",
    notes: "Trinetram Makhana Cream Onion alternate colourway. Zipper and stand-up form visible. Near-duplicate of 10.09.12 AM (1).",
    possibleProductTypes: ["Stand-Up Pouch with Zipper"],
    possibleIndustries: ["Food / FMCG"],
    recommendedUsage: ["unused"],
    confidence: "high"
  }
];

/** No original S.S. Brothers logo file exists in the client collection or repo. */
export const brandLogo = null;

/**
 * Home Page placement. Each path is used at most once on the Home Page
 * except where a section needs a collage of distinct images.
 */
export const homePlacement = {
  hero: {
    primary: f("WhatsApp Image 2026-09-23 at 10.09.12 AM (1).jpeg"),
    secondary: f("WhatsApp Image 2026-09-23 at 10.09.13 AM.jpeg")
  },
  about: f("WhatsApp Image 2026-09-23 at 10.09.00 AM.jpeg"),
  whyChooseUs: f("WhatsApp Image 2026-09-23 at 10.09.00 AM (1).jpeg"),
  products: {
    "center-seal-pouch": f("WhatsApp Image 2026-09-23 at 10.08.58 AM.jpeg"),
    "three-side-seal-pouch": f("WhatsApp Image 2026-09-23 at 10.09.10 AM.jpeg"),
    "stand-up-zipper-pouch": f("WhatsApp Image 2026-09-23 at 10.09.01 AM (1).jpeg"),
    "three-d-pouch": "/images/products/three-d-pouch.svg",
    "quad-seal-pouch": "/images/products/quad-seal-pouch.svg",
    "two-side-gusset-pouch": f("WhatsApp Image 2026-09-23 at 10.08.59 AM.jpeg")
  },
  industries: {
    nutraceutical: f("WhatsApp Image 2026-09-23 at 10.08.59 AM (1).jpeg"),
    "beauty-personal-care": f("WhatsApp Image 2026-09-23 at 10.09.16 AM.jpeg"),
    ayurvedic: f("WhatsApp Image 2026-09-23 at 10.09.00 AM.jpeg"),
    "life-science-healthcare": "/images/industries/healthcare.svg"
  },
  partners: {
    "hawaii-group": f("WhatsApp Image 2026-09-23 at 10.08.53 AM.jpeg")
  },
  gallery: [
    {
      image: f("WhatsApp Image 2026-09-23 at 10.08.53 AM (1).jpeg"),
      tag: "Snack Packaging",
      title: "Printed Flexible Snack Packs"
    },
    {
      image: f("WhatsApp Image 2026-09-23 at 10.09.00 AM (2).jpeg"),
      tag: "Stand-Up Pouches",
      title: "Zipper Pouch Formats"
    },
    {
      image: f("WhatsApp Image 2026-09-23 at 10.09.07 AM.jpeg"),
      tag: "Spice Packaging",
      title: "Powder & Spice Packs"
    },
    {
      image: f("WhatsApp Image 2026-09-23 at 10.09.16 AM (1).jpeg"),
      tag: "Personal Care",
      title: "Beauty & Hair-Care Pouches"
    },
    {
      image: f("WhatsApp Image 2026-09-23 at 10.09.13 AM (1).jpeg"),
      tag: "Brand Printing",
      title: "Retail Snack Graphics"
    },
    {
      image: f("WhatsApp Image 2026-09-23 at 10.09.10 AM (2).jpeg"),
      tag: "Frozen Foods",
      title: "Frozen Product Packaging"
    },
    {
      image: f("WhatsApp Image 2026-09-23 at 10.09.04 AM.jpeg"),
      tag: "Ready-to-Cook",
      title: "Frozen Snack Formats"
    },
    {
      image: f("WhatsApp Image 2026-09-23 at 10.09.14 AM (1).jpeg"),
      tag: "Namkeen",
      title: "Colourful Retail Packs"
    }
  ]
};
