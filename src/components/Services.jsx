import {
  CarFront,
  Plane,
  Route,
  Compass,
  MoveUpRight,
  Repeat2,
  BriefcaseBusiness,
  UsersRound,
  ArrowUpRight,
} from "lucide-react"
import { Reveal, SectionHeading } from "./ui"

const services = [
  {
    icon: CarFront,
    title: "Local Jaipur Taxi",
    text: "From everyday errands to a full day of sightseeing, explore Jaipur at your pace.",
  },
  {
    icon: Plane,
    title: "Jaipur Airport Transfers",
    text: "A comfortable start or finish to your trip, with pickup planned around your flight.",
  },
  {
    icon: Route,
    title: "Outstation Taxi",
    text: "Head beyond the city with a dependable cab and a driver who knows the road.",
  },
  {
    icon: Compass,
    title: "Rajasthan Tour Packages",
    text: "Discover forts, lakes and desert towns with an itinerary made around you.",
  },
  {
    icon: MoveUpRight,
    title: "One-Way Taxi",
    text: "Travel from one city to the next without booking an unnecessary return trip.",
  },
  {
    icon: Repeat2,
    title: "Round Trip Taxi",
    text: "Keep your ride with you for the entire journey, including the road back home.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Travel",
    text: "Professional transport for office visits, guest pickups and business trips.",
  },
  {
    icon: UsersRound,
    title: "Family & Group Tours",
    text: "Room for everyone, from family getaways to group travel in a Tempo Traveller.",
  },
]

export default function Services({ onEnquire }) {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="MORE THAN JUST A TAXI"
            title="Our Travel Services"
            description="One trusted travel partner. Wherever the road takes you."
          />
        </Reveal>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={(index % 4) * 0.05}>
              <article className="service-card">
                <span className="service-icon">
                  <Icon size={25} strokeWidth={1.5} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <button className="text-link" onClick={() => onEnquire(title)}>
                  Plan your ride
                  <ArrowUpRight size={16} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
