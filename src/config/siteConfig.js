// Set the real business contact details here before going live.
// Phone: +91 followed by 10 digits. WhatsApp: country code + number, digits only.
export const BUSINESS_NAME = "Rajputana Ride"
export const TAGLINE = "Reliable Taxi & Tour Services Across Jaipur & Rajasthan"
export const PHONE_NUMBER = ""
export const WHATSAPP_NUMBER = ""
export const EMAIL = ""
export const ADDRESS = "Jaipur, Rajasthan"
export const SOCIAL_LINKS = { instagram: "", facebook: "" }

export function whatsappUrl(
  message = `Hello ${BUSINESS_NAME}, I would like to enquire about a taxi or Rajasthan tour.`,
) {
  return WHATSAPP_NUMBER && /^91[6-9]\d{9}$/.test(WHATSAPP_NUMBER)
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : null
}
