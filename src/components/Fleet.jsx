import { useState } from "react"
import {
  CarFront,
  DoorOpen,
  Snowflake,
  UsersRound,
  ArrowUpRight,
  Info,
} from "lucide-react"
import cars from "../data/cars"
import { ContactButton, Reveal, SectionHeading } from "./ui"

export function CarCard({ car, index, onBook, notify }) {
  const [imageError, setImageError] = useState(false)
  return (
    <Reveal delay={(index % 4) * 0.07} className="car-reveal">
      <article className="car-card">
        <div className="car-image-wrap">
          <span className="category-badge">{car.category}</span>
          {imageError ? (
            <div className="car-image-fallback">
              <CarFront size={58} />
              <span>{car.name}</span>
            </div>
          ) : (
            <img
              src={car.image}
              alt={`${car.name} available for taxi booking`}
              loading="lazy"
              width="642"
              height="336"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div className="car-body">
          <h3>{car.name}</h3>
          <span className="price-badge">
            Starting at{" "}
            <strong>
              ₹{car.price}
              <small>/km</small>
            </strong>
          </span>
          <div className="car-specs">
            <span>
              <CarFront />
              {car.running} km Running
            </span>
            <span>
              {car.doors ? (
                <>
                  <DoorOpen />
                  {car.doors} Doors
                </>
              ) : (
                <>
                  <UsersRound />
                  Group Travel
                </>
              )}
            </span>
            <span>
              <Snowflake />
              {car.climate}
            </span>
            <span>
              <UsersRound />
              {car.seats} Seater
            </span>
          </div>
          <div className="car-actions">
            <ContactButton notify={notify} className="button button-outline" />
            <button
              className="button button-navy"
              onClick={() => onBook(car.id)}
              aria-label={`Book ${car.name}`}
            >
              Book Now
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Fleet({ onBook, notify }) {
  const [filter, setFilter] = useState("All Vehicles")
  const filters = [
    "All Vehicles",
    "Sedan",
    "Family",
    "Premium",
    "Luxury",
    "Group Travel",
  ]
  const visible =
    filter === "All Vehicles"
      ? cars
      : cars.filter(
          (car) =>
            car.category === filter ||
            (filter === "Family" && car.category === "Comfort"),
        )
  return (
    <section id="fleet" className="section fleet-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="A RIDE FOR EVERY JOURNEY"
            title="Choose Your Ride"
            description="Comfortable and well-maintained cars for every kind of journey."
          >
            <span className="fleet-count">
              <CarFront size={18} />
              10 vehicles. One reliable promise.
            </span>
          </SectionHeading>
        </Reveal>
        <div className="fleet-filters" aria-label="Filter vehicles">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              className={filter === item ? "selected" : ""}
              onClick={() => setFilter(item)}
            >
              {item === "Sedan" ? "Sedans" : item}
            </button>
          ))}
        </div>
        <div className="fleet-grid">
          {visible.map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              index={index}
              onBook={onBook}
              notify={notify}
            />
          ))}
        </div>
        <p className="fare-note">
          <Info size={15} />
          Indicative outstation rates with a 250 km daily minimum. Toll,
          parking, state tax and driver allowance may be extra. Final fare is
          confirmed before your trip.
        </p>
      </div>
    </section>
  )
}
