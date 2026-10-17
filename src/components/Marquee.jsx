import { marqueeItems } from '../data/profile.js'
import './Marquee.css'

// Decorative ticker (hidden from assistive tech); the same skills are listed in the Skills section.
// The list is rendered twice so the -50% translate loops seamlessly.
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul className="marquee-group" key={copy}>
            {marqueeItems.map((item) => (
              <li key={item}>
                {item}
                <span className="marquee-sep">+</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
