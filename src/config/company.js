/**
 * Central Company Configuration
 * Update the contact details below when confirmed client details are provided.
 * Empty values display clean placeholders and fall back to the quote / contact flow.
 */
export const COMPANY = {
  name: "SS BROS CO",
  tagline: "Flexible Packaging & Printing Solutions",
  phone: "+91 94793 80057",
  whatsapp: "+91 94793 80057",
  email: "ssbrosco1@gmail.com",
  address: "D-335, Sector 10, Noida, Uttar Pradesh",
  defaultWhatsAppMessage:
    "Hello SS BROS CO, I am interested in your flexible packaging solutions. I would like to know more about your products."
};

export const hasPhone = () => Boolean(COMPANY.phone && COMPANY.phone.trim());
export const hasWhatsApp = () => Boolean(COMPANY.whatsapp && COMPANY.whatsapp.trim());
export const hasEmail = () => Boolean(COMPANY.email && COMPANY.email.trim());
export const hasAddress = () => Boolean(COMPANY.address && COMPANY.address.trim());

/**
 * Returns a valid WhatsApp URL with encoded message, or a number-free wa.me fallback.
 */
export const getWhatsAppUrl = (customMessage = "") => {
  const message = encodeURIComponent(customMessage || COMPANY.defaultWhatsAppMessage);
  if (hasWhatsApp()) {
    const cleanNumber = COMPANY.whatsapp.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanNumber}?text=${message}`;
  }
  return `https://wa.me/?text=${message}`;
};

/**
 * Returns a tel: link when phone is configured; otherwise #contact for in-page fallback.
 */
export const getPhoneUrl = () => {
  if (hasPhone()) {
    return `tel:${COMPANY.phone.replace(/\s+/g, "")}`;
  }
  return "#contact";
};

/**
 * Returns a mailto: link when email is configured; otherwise #contact for in-page fallback.
 */
export const getEmailUrl = (subject = "Flexible Packaging Inquiry") => {
  if (hasEmail()) {
    return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}`;
  }
  return "#contact";
};
