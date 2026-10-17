import { skills } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          index="03"
          label="Skills"
          title="Technical Skills"
          titleId="skills-title"
          intro="The technologies I work with, grouped by where they sit in the stack."
        />

        <dl className="skills-table">
          {skills.map((skill, i) => (
            <div
              key={skill.group}
              className="skill-row"
              data-reveal
              style={{ '--reveal-delay': `${i * 50}ms` }}
            >
              <dt className="skill-group">
                <span className="skill-index">{String(i + 1).padStart(2, '0')}</span>
                {skill.group}
              </dt>
              <dd>
                <ul className="tag-list skill-tags">
                  {skill.items.map((item) => (
                    <li key={item} className="tag skill-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
