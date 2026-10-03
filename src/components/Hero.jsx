import { ArrowUpRight, Check, MapPin } from "lucide-react"
import { BookLink, ContactButton, Reveal } from "./ui"

export default function Hero({ notify }) {
  return (
    <section id="home" className="hero">
      <img
        className="hero-image"
        src="/images/jaipur.jpg"
        alt="The warm pink sandstone of Hawa Mahal in the heart of Jaipur"
        fetchPriority="high"
      />
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <Reveal className="hero-content">
          <span className="hero-eyebrow">
            <span />
            ROOTED IN RAJASTHAN. READY FOR YOUR JOURNEY.
          </span>
          <h1>
            Your journey across
            <br />
            <span>Jaipur & Rajasthan</span>
            <br />
            starts here.
          </h1>
          <p>
            Comfortable cabs, professional drivers and reliable travel services.
            From a quick airport pickup to the Rajasthan trip you’ve been
            dreaming of.
          </p>
          <div className="hero-actions">
            <BookLink />
            <ContactButton notify={notify} className="button button-hero" />
          </div>
          <div className="hero-trust">
            <span>
              <Check size={15} />
              Verified drivers
            </span>
            <span>
              <Check size={15} />
              Comfortable cars
            </span>
            <span>
              <Check size={15} />
              On-time pickup
            </span>
            <span>
              <Check size={15} />
              Rajasthan tours
            </span>
          </div>
        </Reveal>
        <div className="hero-location">
          <MapPin size={17} />
          <div>
            <strong>The Pink City</strong>
            <span>Hawa Mahal, Jaipur</span>
          </div>
          <ArrowUpRight size={19} />
        </div>
      </div>
    </section>
  )
}
