import { useEffect, useState } from "react"
import { Menu, X, MapPin, Clock3, ArrowUpRight } from "lucide-react"
import { AnimatePresence, m } from "framer-motion"
import { Brand, ContactButton } from "./ui"

export const navLinks = [
  ["Home", "home"],
  ["About", "about"],
  ["Our Fleet", "fleet"],
  ["Services", "services"],
  ["Routes", "routes"],
  ["Contact", "contact"],
]

export default function Header({ notify }) {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const [active, setActive] = useState("home")
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-15% 0px -65% 0px" },
    )
    navLinks.forEach(([, id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])
  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) document.addEventListener("keydown", escape)
    return () => document.removeEventListener("keydown", escape)
  }, [open])
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            <MapPin size={13} />
            Your local travel partner in Jaipur & Rajasthan
          </span>
          <span>
            <Clock3 size={13} />
            24/7 booking assistance <span className="topbar-divider" />
            Local rides. Memorable journeys.
          </span>
        </div>
      </div>
      <header className={`header ${compact ? "header-compact" : ""}`}>
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <ContactButton notify={notify} />
            <button
              className="menu-toggle"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <m.nav
              id="mobile-nav"
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                  {label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
              <ContactButton notify={notify} />
            </m.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
