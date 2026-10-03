import {
  ShieldCheck,
  Sparkles,
  ReceiptText,
  Headphones,
  MapPinned,
  Route,
  Check,
  MapPin,
} from "lucide-react"
import { BUSINESS_NAME } from "../config/siteConfig"
import { Reveal, BookLink, SectionHeading } from "./ui"

const reasons = [
  [
    ShieldCheck,
    "Experienced drivers",
    "Professional, courteous drivers who put your comfort first.",
  ],
  [
    Sparkles,
    "Clean & comfortable cars",
    "Well-maintained vehicles, ready for the journey ahead.",
  ],
  [
    ReceiptText,
    "Transparent pricing",
    "Know your fare and any additional charges before you go.",
  ],
  [
    Headphones,
    "24/7 booking assistance",
    "A helpful point of contact for early pickups and late arrivals.",
  ],
  [
    Route,
    "Flexible travel plans",
    "Your schedule, your stops. Travel the way that suits you.",
  ],
  [
    MapPinned,
    "Local Rajasthan knowledge",
    "Thoughtful recommendations from people who know the place.",
  ],
]

export default function About() {
  return (
    <>
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <Reveal className="about-visual">
            <img
              src="/images/jaipur.jpg"
              loading="lazy"
              alt="Historic architecture and local street life outside Jaipur’s Hawa Mahal"
            />
            <div className="about-caption">
              <MapPin size={24} />
              <div>
                <strong>Locally rooted. Personally committed.</strong>
                <span>Your journey, with a little Rajasthan hospitality.</span>
              </div>
            </div>
          </Reveal>
          <Reveal className="about-content">
            <SectionHeading
              eyebrow="YOUR LOCAL TRAVEL PARTNER"
              title="Travel Jaipur With Confidence"
            />
            <p>
              There’s a better way to see Rajasthan: with someone who knows the
              roads, the places and the little things that make a journey
              special.
            </p>
            <p>
              At {BUSINESS_NAME}, we provide reliable taxi and tour services
              across Jaipur and Rajasthan. From an airport transfer to a week on
              the road, our experienced drivers and comfortable vehicles help
              you travel with peace of mind.
            </p>
            <div className="about-checks">
              {[
                "On-time, planned pickups",
                "Clear fares, no surprises",
                "Local knowledge that helps",
                "Travel options that fit you",
              ].map((text) => (
                <span key={text}>
                  <Check size={16} />
                  {text}
                </span>
              ))}
            </div>
            <BookLink>Let’s Plan Your Journey</BookLink>
          </Reveal>
        </div>
      </section>
      <section className="section why-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="THE LITTLE THINGS THAT MATTER"
              title="A Good Journey Starts With Trust"
              description="Practical care, local experience and a personal approach to every trip."
            />
          </Reveal>
          <div className="why-grid">
            {reasons.map(([Icon, title, text], index) => (
              <Reveal key={title} delay={(index % 3) * 0.05}>
                <article>
                  <span className="why-icon">
                    <Icon size={23} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
