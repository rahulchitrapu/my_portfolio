import { about } from '../data/profile.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'
import './About.css'

export default function About() {
  const [lead, ...rest] = about.paragraphs

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead index="02" label="About" title="About Me" titleId="about-title" />

        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <p className="about-lead">{lead}</p>
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="about-facts" data-reveal style={{ '--reveal-delay': '120ms' }}>
            {about.facts.map((fact) => (
              <div key={fact.label} className="about-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="capabilities">
          {about.capabilities.map((item, i) => (
            <li
              key={item.title}
              className="capability"
              data-reveal
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              <span className="capability-icon">
                <Icon name={item.icon} size={20} />
              </span>
              <h3 className="capability-title">{item.title}</h3>
              <p className="capability-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
