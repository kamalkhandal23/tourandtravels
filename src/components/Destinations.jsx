import { ArrowRight, ArrowUpRight, Route, Clock3, MapPin } from "lucide-react"
import { routes, tours } from "../data/travel"
import { Reveal, SectionHeading } from "./ui"

export default function Destinations({ onEnquire }) {
  return (
    <>
      <section id="routes" className="section routes-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="GOOD ROADS. GREAT DESTINATIONS."
              title="Popular Taxi Routes"
              description="From Jaipur to your next destination, we’ve got the ride covered."
            />
          </Reveal>
          <div className="routes-grid">
            {routes.map((route, index) => (
              <Reveal key={route.to} delay={(index % 4) * 0.04}>
                <article className="route-card">
                  <div className="route-top">
                    <span className="route-icon">
                      <Route size={21} strokeWidth={1.5} />
                    </span>
                    <span>ONE WAY / ROUND TRIP</span>
                  </div>
                  <h3>
                    Jaipur <ArrowRight size={18} />
                    <span>{route.to}</span>
                  </h3>
                  <p>{route.description}</p>
                  <div className="route-meta">
                    <span>
                      <MapPin size={13} />
                      {route.distance}
                    </span>
                    <span>
                      <Clock3 size={13} />
                      {route.time}
                    </span>
                  </div>
                  <button
                    className="text-link"
                    onClick={() => onEnquire(`Jaipur to ${route.to}`, route.to)}
                  >
                    Book this route
                    <ArrowUpRight size={17} />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="section-note">
            Distances and journey times are approximate and depend on pickup
            location, traffic and stops.
          </p>
        </div>
      </section>
      <section id="tours" className="section tours-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="DISCOVER A LITTLE MORE"
              title="Rajasthan, One Beautiful Journey at a Time"
              description="Go beyond the guidebook. Make room for places, people and moments you’ll remember."
            >
              <a href="#booking" className="text-link">
                Plan a custom tour
                <ArrowUpRight size={18} />
              </a>
            </SectionHeading>
          </Reveal>
          <div className="tours-grid">
            {tours.map((tour, index) => (
              <Reveal key={tour.name} delay={(index % 4) * 0.05}>
                <article className="tour-card">
                  <div className="tour-image">
                    <img
                      src={tour.image}
                      alt={tour.alt}
                      loading="lazy"
                      width="600"
                      height="450"
                    />
                    <span>
                      <Clock3 size={13} />
                      {tour.duration}
                    </span>
                  </div>
                  <div className="tour-body">
                    <span className="tour-tag">{tour.tag}</span>
                    <h3>{tour.name}</h3>
                    <p>{tour.description}</p>
                    <button
                      className="text-link"
                      onClick={() => onEnquire(tour.name, tour.name)}
                    >
                      Explore this tour
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="section-note">
            Tour lengths are suggestions. We’ll tailor your itinerary to your
            time and interests. Safari permits and entry tickets are booked
            separately.
          </p>
        </div>
      </section>
    </>
  )
}
