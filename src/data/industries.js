import { encodeImageSrc, homePlacement } from "./imageCatalog";

/**
 * Confirmed Industries Data for SS BROS CO.
 * Client photos used only where visual evidence supports the category.
 */
export const industries = [
  {
    id: "nutraceutical",
    name: "Nutraceutical",
    image: encodeImageSrc(homePlacement.industries.nutraceutical),
    subtitle: "Vitamins, Supplements & Nutritional Blends",
    description:
      "Specialized flexible packaging solutions engineered with high barrier films to preserve potency, active ingredients, and freshness against light and moisture.",
    applications: ["Protein & Dietary Powders", "Effervescent Tablets", "Daily Nutrition Sachets"]
  },
  {
    id: "beauty-personal-care",
    name: "Beauty & Personal Care",
    image: encodeImageSrc(homePlacement.industries["beauty-personal-care"]),
    subtitle: "Cosmetics, Skincare & Grooming",
    description:
      "Flexible packaging formats designed for modern personal care products, combining sleek tactile appeal with leak-resistant chemical barriers.",
    applications: ["Face Masks & Serums", "Shampoo & Lotion Refills", "Single-Use Treatment Pouches"]
  },
  {
    id: "ayurvedic",
    name: "Ayurvedic",
    image: encodeImageSrc(homePlacement.industries.ayurvedic),
    subtitle: "Herbal, Natural & Wellness Formulations",
    description:
      "Packaging formats suited to traditional and herbal product categories, ensuring aroma protection and preservative-free product integrity.",
    applications: ["Herbal Churna & Powders", "Botanical Extracts", "Wellness Tea & Decoctions"]
  },
  {
    id: "life-science-healthcare",
    name: "Life Science & Healthcare",
    image: encodeImageSrc(homePlacement.industries["life-science-healthcare"]),
    subtitle: "Diagnostic & Healthcare Products",
    description:
      "Packaging solutions for products requiring professional presentation, hygienic barrier properties, and dependable batch consistency.",
    applications: ["Diagnostic Test Kits", "Sanitizing Wipes & Swabs", "Medical Consumables"]
  }
];
