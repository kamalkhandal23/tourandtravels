import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, MotionConfig, LazyMotion, m } from "framer-motion"
import { X, Info } from "lucide-react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import BookingForm from "./components/BookingForm"
import Fleet from "./components/Fleet"
import Services from "./components/Services"
import About from "./components/About"
import Destinations from "./components/Destinations"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import { ContactButton } from "./components/ui"
import { BUSINESS_NAME } from "./config/siteConfig"

const loadMotionFeatures = () =>
  import("./components/motionFeatures").then((module) => module.default)

export default function App() {
  const [selectedCar, setSelectedCar] = useState("")
  const [details, setDetails] = useState({
    pickup: "",
    date: "",
    dropoff: "",
    name: "",
    phone: "",
  })
  const [notice, setNotice] = useState("")
  const notify = useCallback((message: string) => setNotice(message), [])
  useEffect(() => {
    const title = `${BUSINESS_NAME} | Taxi Service in Jaipur & Rajasthan`
    document.title = title
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title)
  }, [])
  useEffect(() => {
    if (!notice) return
    const timeout = window.setTimeout(() => setNotice(""), 12000)
    return () => window.clearTimeout(timeout)
  }, [notice])
  const scrollToBooking = () => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    document.getElementById("booking")?.scrollIntoView({
      behavior: reduced ? "instant" : "smooth",
      block: "start",
    })
    document.getElementById("booking-car")?.focus({ preventScroll: true })
  }
  const onBook = (id: string) => {
    setSelectedCar(id)
    scrollToBooking()
  }
  const onEnquire = (_service: string, destination?: string) => {
    if (destination)
      setDetails((prev) => ({
        ...prev,
        pickup: prev.pickup || "Jaipur",
        dropoff: destination,
      }))
    scrollToBooking()
  }
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header notify={notify} />
        <main id="main">
          <Hero notify={notify} />
          <BookingForm
            selectedCar={selectedCar}
            setSelectedCar={setSelectedCar}
            details={details}
            setDetails={setDetails}
          />
          <Fleet onBook={onBook} notify={notify} />
          <Services onEnquire={onEnquire} />
          <About />
          <Destinations onEnquire={onEnquire} />
          <Testimonials />
          <CTA notify={notify} />
        </main>
        <Footer notify={notify} />
        <ContactButton
          type="whatsapp"
          notify={notify}
          className="floating-whatsapp"
        >
          <span className="sr-only">Chat with us on WhatsApp</span>
        </ContactButton>
        <AnimatePresence>
          {notice && (
            <m.div
              className="notice"
              role="status"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
            >
              <Info size={20} />
              <p>{notice}</p>
              <button
                aria-label="Dismiss message"
                onClick={() => setNotice("")}
              >
                <X size={18} />
              </button>
            </m.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </LazyMotion>
  )
}
