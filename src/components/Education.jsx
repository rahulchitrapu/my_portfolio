import { education } from '../data/profile.js'
import { Period } from './Experience.jsx'
import SectionHead from './SectionHead.jsx'

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container section-compact">
        <SectionHead index="05" label="Education" title="Education" titleId="education-title" />

        <ul className="edu-list">
          {education.map((item) => (
            <li key={item.institution} className="edu-item" data-reveal>
              <div>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-school">
                  {item.institution}, {item.location}
                </p>
              </div>
              <div className="edu-meta">
                <p className="edu-when">
                  <Period start={item.start} end={item.end} />
                </p>
                {item.grade && <p className="edu-grade">Grade: {item.grade}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
