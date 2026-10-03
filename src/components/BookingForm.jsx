import { useState } from "react"
import {
  CarFront,
  MapPin,
  CalendarDays,
  UserRound,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"
import cars from "../data/cars"
import { BUSINESS_NAME, whatsappUrl } from "../config/siteConfig"
import { Reveal } from "./ui"

export function localToday() {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
}
export function validateBooking(data, selectedCar) {
  const errors = {}
  if (!cars.some((car) => car.id === selectedCar))
    errors.car = "Please choose a car."
  if (!data.pickup.trim()) errors.pickup = "Enter a pickup location."
  if (!data.date || data.date < localToday())
    errors.date = "Choose today or a future date."
  if (!data.dropoff.trim()) errors.dropoff = "Enter a drop-off location."
  if (!data.name.trim()) errors.name = "Enter your name."
  if (!/^[6-9]\d{9}$/.test(data.phone.trim()))
    errors.phone = "Enter a valid Indian 10-digit mobile number."
  return errors
}
export function bookingMessage(data, selectedCar) {
  const car = cars.find((car) => car.id === selectedCar)
  const date = new Date(`${data.date}T12:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return `Hello ${BUSINESS_NAME},\n\nI would like to book a taxi.\n\nName: ${data.name.trim()}\nPhone: ${data.phone.trim()}\nCar: ${car.name}\nPickup Location: ${data.pickup.trim()}\nPickup Date: ${date}\nDrop-off Location: ${data.dropoff.trim()}\n\nPlease confirm the booking.`
}

export default function BookingForm({
  selectedCar,
  setSelectedCar,
  details,
  setDetails,
}) {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("")
  const [sending, setSending] = useState(false)
  const change = (name, value) => {
    setDetails((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setStatus("")
  }
  const submit = (e) => {
    e.preventDefault()
    const issues = validateBooking(details, selectedCar)
    setErrors(issues)
    setStatus("")
    if (Object.keys(issues).length) {
      document.getElementById(`booking-${Object.keys(issues)[0]}`)?.focus()
      return
    }
    const url = whatsappUrl(bookingMessage(details, selectedCar))
    if (!url) {
      setStatus(
        "Your details are ready. This demo needs a business WhatsApp number in siteConfig.js before requests can be sent. No booking has been made.",
      )
      return
    }
    setSending(true)
    window.open(url, "_blank", "noopener,noreferrer")
    setStatus(
      "Your request is ready in WhatsApp. Tap Send there to contact us. Your ride is confirmed only after our team replies.",
    )
    window.setTimeout(() => setSending(false), 800)
  }
  const field = (name, label, placeholder, Icon, type = "text") => (
    <div className="form-field">
      <label htmlFor={`booking-${name}`}>
        {label}
        <span>*</span>
      </label>
      <div className={`input-wrap ${errors[name] ? "input-error" : ""}`}>
        <Icon size={17} />
        <input
          id={`booking-${name}`}
          name={name}
          type={type}
          value={details[name]}
          onChange={(e) => change(name, e.target.value)}
          placeholder={placeholder}
          required
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          {...(type === "date" ? { min: localToday() } : {})}
          {...(name === "phone"
            ? {
                inputMode: "numeric",
                autoComplete: "tel-national",
                maxLength: 10,
              }
            : {})}
          {...(name === "name" ? { autoComplete: "name", maxLength: 80 } : {})}
          {...(["pickup", "dropoff"].includes(name) ? { maxLength: 200 } : {})}
        />
      </div>
      {errors[name] && (
        <span className="field-error" id={`${name}-error`}>
          {errors[name]}
        </span>
      )}
    </div>
  )
  return (
    <div className="container booking-container">
      <Reveal className="booking-panel">
        <section id="booking" aria-labelledby="booking-title">
          <div className="booking-heading">
            <div>
              <span className="booking-heading-icon">
                <CarFront size={20} />
              </span>
              <h2 id="booking-title">Where would you like to go?</h2>
            </div>
            <span>
              <MessageCircle size={15} />
              Easy booking via WhatsApp
            </span>
          </div>
          <form onSubmit={submit} noValidate>
            <div className="booking-fields">
              <div className="form-field">
                <label htmlFor="booking-car">
                  Select Car<span>*</span>
                </label>
                <div
                  className={`input-wrap ${errors.car ? "input-error" : ""}`}
                >
                  <CarFront size={17} />
                  <select
                    id="booking-car"
                    name="car"
                    value={selectedCar}
                    required
                    aria-invalid={!!errors.car}
                    aria-describedby={errors.car ? "car-error" : undefined}
                    onChange={(e) => {
                      setSelectedCar(e.target.value)
                      setErrors((prev) => ({ ...prev, car: undefined }))
                      setStatus("")
                    }}
                  >
                    <option value="">Choose your ride</option>
                    {cars.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name} — ₹{car.price}/km
                      </option>
                    ))}
                  </select>
                </div>
                {errors.car && (
                  <span id="car-error" className="field-error">
                    {errors.car}
                  </span>
                )}
              </div>
              {field(
                "pickup",
                "Pick Up Location",
                "Airport, hotel or address",
                MapPin,
              )}
              {field("date", "Pick Up Date", "", CalendarDays, "date")}
              {field(
                "dropoff",
                "Drop Off Location",
                "Where are you headed?",
                MapPin,
              )}
              {field("name", "Your Name", "Enter your full name", UserRound)}
              {field(
                "phone",
                "Phone Number",
                "10-digit mobile number",
                Phone,
                "tel",
              )}
            </div>
            <div className="booking-bottom">
              <span>
                <ShieldCheck size={17} />
                No advance payment required to enquire.
                <br className="mobile-only" /> We’ll confirm availability & the
                fare.
              </span>
              <button
                type="submit"
                className="button button-gold"
                disabled={sending}
              >
                {sending ? "Opening WhatsApp…" : "Book Now"}
                <ArrowUpRight size={19} />
              </button>
            </div>
            {status && (
              <p className="booking-status" role="status">
                <CheckCircle2 size={19} />
                {status}
              </p>
            )}
          </form>
        </section>
      </Reveal>
    </div>
  )
}
