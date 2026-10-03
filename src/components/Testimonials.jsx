import { Quote } from "lucide-react"
import { Reveal, SectionHeading } from "./ui"
const reviews = [
  {
    name: "Ankit S.",
    trip: "Jaipur → Ajmer",
    initials: "AS",
    text: "Driver arrived on time and the car was clean. The Jaipur to Ajmer trip was smooth. Would happily book again.",
  },
  {
    name: "Priya M.",
    trip: "Jaipur city tour",
    initials: "PM",
    text: "We could take our time at each stop. Our driver knew the city well and suggested a lovely place for lunch.",
  },
  {
    name: "Rahul K.",
    trip: "Airport transfer",
    initials: "RK",
    text: "An easy airport pickup after a long flight. Clear communication beforehand and a comfortable ride to our hotel.",
  },
]
export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="JOURNEYS, IN THEIR WORDS"
            title="The Kind of Travel We Believe In"
            description="Simple, comfortable journeys. A personal touch along the way."
          >
            <span className="demo-label">
              Sample reviews · for illustration
            </span>
          </SectionHeading>
        </Reveal>
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.06}>
              <article className="review-card">
                <Quote size={29} strokeWidth={1.4} />
                <blockquote>“{review.text}”</blockquote>
                <div className="review-person">
                  <span>{review.initials}</span>
                  <div>
                    <strong>{review.name}</strong>
                    <small>{review.trip}</small>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="section-note">
          These are sample testimonials, not verified customer reviews. Replace
          with real customer feedback before launch.
        </p>
      </div>
    </section>
  )
}
