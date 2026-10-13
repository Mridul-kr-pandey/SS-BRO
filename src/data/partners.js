import { encodeImageSrc, homePlacement } from "./imageCatalog";

/**
 * Confirmed Business Network Companies for S.S. Brothers
 * Listed neutrally as provided by the client.
 * Logo/brand artwork is attached only when a client image identifies that company.
 */
export const partners = [
  {
    id: "rosier-foods",
    name: "Rosier Foods Pvt. Ltd.",
    country: "India",
    countryCode: "IN",
    region: "South Asia",
    category: "Food Processing & Packaged Goods",
    logo: encodeImageSrc("/images/client/WhatsApp Image 2026-09-23 at 10.08.58 AM.jpeg")
  },
  {
    id: "siddhi-foods",
    name: "Siddhi Food Products",
    country: "Nepal",
    countryCode: "NP",
    region: "South Asia",
    category: "Food & Consumer Goods",
    logo: encodeImageSrc("/images/client/WhatsApp Image 2026-09-23 at 10.09.00 AM (2).jpeg")
  },
  {
    id: "one-10",
    name: "One-10 Industries Limited",
    country: "Cameroon",
    countryCode: "CM",
    region: "Central Africa",
    category: "Industrial & Manufacturing",
    logo: encodeImageSrc("/images/client/WhatsApp Image 2026-09-23 at 10.09.10 AM.jpeg")
  },
  {
    id: "hawaii-group",
    name: "Hawaii Group SARL",
    country: "Cameroon",
    countryCode: "CM",
    region: "Central Africa",
    category: "Commercial Distribution",
    logo: encodeImageSrc(homePlacement.partners["hawaii-group"])
  },
  {
    id: "aanzi-industries",
    name: "AANZI Industries, SU, LDA",
    country: "Mozambique",
    countryCode: "MZ",
    region: "Southern Africa",
    category: "Diversified Industrial Products",
    logo: encodeImageSrc("/images/client/WhatsApp Image 2026-09-23 at 10.09.06 AM (2).jpeg")
  }
];
