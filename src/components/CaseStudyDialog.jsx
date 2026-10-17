import Icon from './Icon.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import './CaseStudyDialog.css'

const pad = (n) => String(n).padStart(2, '0')

const closeParentDialog = (event) => event.currentTarget.closest('dialog')?.close()

export default function CaseStudyDialog({ ref, project, index, total, prev, next, onNavigate, onClose }) {
  const titleId = `case-${project.slug}-title`

  return (
    <dialog
      ref={ref}
      className="case-dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        // A click whose target is the <dialog> itself landed on the backdrop.
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
    >
      <div className="case-inner">
        <div className="case-topbar">
          <p className="eyebrow">
            Case study
            <span className="eyebrow-index">
              {pad(index + 1)} / {pad(total)}
            </span>
          </p>
          <button type="button" className="icon-btn" onClick={closeParentDialog} aria-label="Close case study">
            <Icon name="close" />
          </button>
        </div>

        <header className="case-header">
          <h2 id={titleId} className="case-title">
            {project.title}
          </h2>
          <p className="case-summary">{project.summary}</p>
        </header>

        <div className="case-visual">
          <ProjectVisual type={project.visual} label={project.visualLabel} />
        </div>

        <div className="case-body">
          <section className="case-block">
            <h3 className="case-block-title">What I worked on</h3>
            <ul className="case-points">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <div className="case-side">
            <section className="case-block">
              <h3 className="case-block-title">Focus</h3>
              <p>{project.focus}</p>
            </section>
            {project.note && (
              <section className="case-block">
                <h3 className="case-block-title">My role</h3>
                <p>{project.note}</p>
              </section>
            )}
            <section className="case-block">
              <h3 className="case-block-title">Technologies</h3>
              <ul className="tag-list">
                {project.tech.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <p className="case-context">
            Professional work at Smytten. Source code, data, and product screens are confidential, so the
            visual above is an illustration of the concept rather than a screenshot.
          </p>
        </div>

        <nav className="case-nav" aria-label="More case studies">
          <button type="button" className="case-nav-btn" onClick={() => onNavigate(prev.slug)}>
            <span className="case-nav-label">
              <Icon name="arrowLeft" size={14} /> Previous
            </span>
            <span className="case-nav-title">{prev.title}</span>
          </button>
          <button type="button" className="case-nav-btn is-next" onClick={() => onNavigate(next.slug)}>
            <span className="case-nav-label">
              Next <Icon name="arrowRight" size={14} />
            </span>
            <span className="case-nav-title">{next.title}</span>
          </button>
        </nav>
      </div>
    </dialog>
  )
}
