import { Route } from "lucide-react"
import { BookLink, ContactButton, Reveal } from "./ui"
export default function CTA({ notify }) {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-inner">
          <div className="cta-copy">
            <span className="eyebrow">
              <span />
              LET’S GET YOU ON THE ROAD
            </span>
            <h2>
              Planning Your Next
              <br />
              Rajasthan Trip?
            </h2>
            <p>
              Tell us where you want to go and we’ll help you plan a comfortable
              ride.
            </p>
          </div>
          <div className="cta-actions">
            <BookLink>Book Your Ride</BookLink>
            <div>
              <ContactButton notify={notify} className="button button-hero" />
              <ContactButton
                type="whatsapp"
                notify={notify}
                className="button button-hero"
              />
            </div>
            <span>
              <Route size={15} />
              Local rides. Long journeys. Always personal.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
