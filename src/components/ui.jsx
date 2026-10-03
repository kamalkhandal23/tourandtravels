import { m, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Phone, MessageCircle, Sun } from "lucide-react"
import { BUSINESS_NAME, PHONE_NUMBER, whatsappUrl } from "../config/siteConfig"

export function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion()
  return (
    <m.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45, delay: reduced ? 0 : delay }}
    >
      {children}
    </m.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  children,
}) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <div>
        <span className="eyebrow">
          <span />
          {eyebrow}
        </span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  )
}

export function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#home"
      aria-label={`${BUSINESS_NAME} home`}
    >
      <span className="brand-mark">
        <Sun size={29} strokeWidth={1.6} />
        <span className="brand-road" />
      </span>
      <span>
        <strong>{BUSINESS_NAME}</strong>
        <small>
          JAIPUR <span>•</span> RAJASTHAN
        </small>
      </span>
    </a>
  )
}

export function ContactButton({
  type = "call",
  children,
  className = "button button-navy",
  notify,
  icon = true,
}) {
  const href =
    type === "call"
      ? PHONE_NUMBER
        ? `tel:${PHONE_NUMBER}`
        : null
      : whatsappUrl()
  const Icon = type === "call" ? Phone : MessageCircle
  const content = (
    <>
      {icon && <Icon size={16} />}
      {children || (type === "call" ? "Call Now" : "WhatsApp Us")}
    </>
  )
  if (!href)
    return (
      <button
        type="button"
        className={className}
        onClick={() =>
          notify(
            "This is a demo. Add the business phone and WhatsApp number in siteConfig.js to enable direct contact.",
          )
        }
      >
        {content}
      </button>
    )
  return (
    <a
      className={className}
      href={href}
      {...(type === "whatsapp"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {content}
    </a>
  )
}

export function BookLink({
  children = "Book Your Ride",
  className = "button button-gold",
  onClick,
}) {
  return (
    <a href="#booking" className={className} onClick={onClick}>
      {children}
      <ArrowUpRight size={18} />
    </a>
  )
}
