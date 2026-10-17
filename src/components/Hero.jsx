import { profile } from '../data/profile.js'
import Icon from './Icon.jsx'
import './Hero.css'

export default function Hero() {
  const { headline } = profile

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-top">
        <p className="eyebrow hero-eyebrow" data-animate>
          <span className="status-dot" aria-hidden="true" />
          {profile.role} · {profile.altRole}
        </p>

        <p className="hero-statement" data-animate>
          {headline.lead} <em>{headline.emphasis}</em> {headline.tail}
        </p>

        <div className="hero-aside" data-animate>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore my work
              <Icon name="arrowDown" size={17} className="icon-nudge-down" />
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
          <div className="hero-links">
            <a href={profile.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={16} />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a href={`mailto:${profile.email}`} className="text-link">
              <Icon name="mail" size={16} />
              Email
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="text-link" download>
                <Icon name="file" size={16} />
                Download resume
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container hero-name-block">
        <ul className="hero-meta" aria-label="At a glance" data-animate>
          {profile.metaStrip.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h1 id="hero-title" className="hero-name" data-animate>
          <span>{profile.firstName}</span> <span>{profile.lastName}</span>
          <span className="hero-cursor" aria-hidden="true" />
        </h1>
      </div>
    </section>
  )
}
