import { useCallback, useEffect, useRef } from 'react'
import { projects } from '../data/profile.js'
import CaseStudyDialog from './CaseStudyDialog.jsx'
import Icon from './Icon.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import SectionHead from './SectionHead.jsx'
import './Projects.css'

const HASH_PREFIX = '#case-'

export default function Projects() {
  const dialogs = useRef({})
  const triggers = useRef({})

  // Native <dialog>s are the source of truth for open state (focus trap + Esc built in).
  const openCase = useCallback((slug) => {
    const target = dialogs.current[slug]
    if (!target) return
    Object.values(dialogs.current).forEach((dialog) => dialog !== target && dialog?.open && dialog.close())
    if (!target.open) target.showModal()
    target.querySelector('.case-inner')?.scrollTo(0, 0)
    history.replaceState(null, '', `${HASH_PREFIX}${slug}`)
  }, [])

  const handleClose = (slug) => {
    // When stepping to the next case study another dialog is already open; only clean up on a real close.
    if (Object.values(dialogs.current).some((dialog) => dialog?.open)) return
    history.replaceState(null, '', window.location.pathname + window.location.search)
    triggers.current[slug]?.focus()
  }

  // Support shareable links such as /#case-survey-creator
  useEffect(() => {
    const { hash } = window.location
    if (hash.startsWith(HASH_PREFIX)) openCase(hash.slice(HASH_PREFIX.length))
  }, [openCase])

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          index="01"
          label="Selected work"
          title="Selected Projects"
          titleId="projects-title"
          intro="Products I've worked on at Smytten — from survey tooling and AI-assisted workflows to real-time support and audience data."
        />

        <ol className="project-list">
          {projects.map((project, i) => (
            <li key={project.slug} className="project" data-reveal>
              <div className="project-main">
                <span className="project-index">
                  {String(i + 1).padStart(2, '0')}
                  <span aria-hidden="true"> / {String(projects.length).padStart(2, '0')}</span>
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <button
                  type="button"
                  ref={(el) => {
                    triggers.current[project.slug] = el
                  }}
                  className="btn btn-sm project-cta"
                  aria-haspopup="dialog"
                  onClick={() => openCase(project.slug)}
                >
                  View case study
                  <span className="sr-only">: {project.title}</span>
                  <Icon name="arrowRight" size={16} className="icon-nudge-right" />
                </button>
              </div>

              {/* Mouse shortcut to the same dialog; keyboard users use the button above. */}
              <div className="project-visual" onClick={() => openCase(project.slug)}>
                <ProjectVisual type={project.visual} label={project.visualLabel} />
              </div>

              <dl className="project-meta">
                <div>
                  <dt>My contribution</dt>
                  <dd>{project.contribution}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>
                    <ul className="tag-list">
                      {project.tech.map((tech) => (
                        <li key={tech} className="tag">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </div>

      {projects.map((project, i) => (
        <CaseStudyDialog
          key={project.slug}
          ref={(el) => {
            dialogs.current[project.slug] = el
          }}
          project={project}
          index={i}
          total={projects.length}
          prev={projects[(i - 1 + projects.length) % projects.length]}
          next={projects[(i + 1) % projects.length]}
          onNavigate={openCase}
          onClose={() => handleClose(project.slug)}
        />
      ))}
    </section>
  )
}
