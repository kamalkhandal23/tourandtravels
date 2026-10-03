import { MapPin, Mail, ArrowUpRight } from "lucide-react"
import {
  BUSINESS_NAME,
  ADDRESS,
  EMAIL,
  PHONE_NUMBER,
  SOCIAL_LINKS,
} from "../config/siteConfig"
import { Brand, ContactButton } from "./ui"
import { navLinks } from "./Header"

function Instagram({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Facebook({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 21v-8h3l.5-3H14V8c0-1 .3-1.5 1.5-1.5H18V3.3c-.8-.2-1.7-.3-2.5-.3C12 3 10 5 10 8v2H7v3h3v8h4Z" />
    </svg>
  )
}
export default function Footer({ notify }) {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand light />
            <p>
              Reliable taxi and tour services across Jaipur and Rajasthan. A
              comfortable ride, with genuine local hospitality.
            </p>
            <div className="social-links">
              {[
                [Instagram, "instagram", "Instagram"],
                [Facebook, "facebook", "Facebook"],
              ].map(([Icon, key, label]) =>
                SOCIAL_LINKS[key] ? (
                  <a
                    key={key}
                    href={SOCIAL_LINKS[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ) : (
                  <button
                    key={key}
                    aria-label={`${label} — not yet configured`}
                    onClick={() =>
                      notify(
                        "Social profiles will be available once the business links are added to siteConfig.js.",
                      )
                    }
                  >
                    <Icon size={18} />
                  </button>
                ),
              )}
              <ContactButton
                type="whatsapp"
                notify={notify}
                className="social-whatsapp"
              >
                <span className="sr-only">WhatsApp</span>
              </ContactButton>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              {navLinks.map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    {label === "Our Fleet" ? "Fleet" : label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Our Services</h3>
            <ul>
              {[
                "Local Taxi",
                "Airport Transfer",
                "Outstation Taxi",
                "Rajasthan Tours",
                "Corporate Travel",
                "Family & Group Tours",
              ].map((text) => (
                <li key={text}>
                  <a href="#services">{text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <p>
              <MapPin size={17} />
              {ADDRESS}
            </p>
            <ContactButton notify={notify} className="footer-contact-link">
              <span>
                {PHONE_NUMBER || "Call our team"}
                <small>For bookings & enquiries</small>
              </span>
            </ContactButton>
            <ContactButton
              type="whatsapp"
              notify={notify}
              className="footer-contact-link"
            >
              Chat on WhatsApp
              <ArrowUpRight size={14} />
            </ContactButton>
            {EMAIL ? (
              <a className="footer-contact-link" href={`mailto:${EMAIL}`}>
                <Mail size={17} />
                {EMAIL}
              </a>
            ) : (
              <button
                className="footer-contact-link"
                onClick={() =>
                  notify(
                    "The business email address has not been provided. Add it to siteConfig.js before launch.",
                  )
                }
              >
                <Mail size={17} />
                Email enquiries
              </button>
            )}
            <span className="footer-location-tag">
              Based in Jaipur. Travelling across Rajasthan.
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {BUSINESS_NAME}. All Rights Reserved.
          </p>
          <span>Designed for demo purposes</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
