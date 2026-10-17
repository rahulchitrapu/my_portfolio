import { experience } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'
import './Experience.css'

export function Period({ start, end }) {
  return (
    <>
      <time dateTime={start.iso}>{start.label}</time>
      <span aria-hidden="true"> — </span>
      <span className="sr-only"> to </span>
      {end.iso ? <time dateTime={end.iso}>{end.label}</time> : <span>{end.label}</span>}
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHead
          index="04"
          label="Experience"
          title="Experience"
          titleId="experience-title"
          intro="4+ years building web applications — first on deputation from MountBlue Technologies, and now as a Software Engineer at Smytten."
        />

        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline-item" data-reveal>
              <p className="timeline-when">
                <Period start={job.start} end={job.end} />
                {job.current && <span className="timeline-badge">Current</span>}
              </p>

              <div className="timeline-marker" aria-hidden="true">
                <span className={`timeline-dot${job.current ? ' is-current' : ''}`} />
              </div>

              <article className="timeline-body">
                <h3 className="timeline-role">{job.role}</h3>
                <p className="timeline-company">
                  {job.company}
                  {job.note && <span className="timeline-note">{job.note}</span>}
                </p>
                <p className="timeline-summary">{job.summary}</p>
                <ul className="timeline-highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="tag-list" aria-label="Technologies">
                  {job.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
