import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile.js'
import Icon from './Icon.jsx'
import './Contact.css'

const linkedinLabel = profile.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('idle')
  const resetTimer = useRef()

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    }
    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setCopyStatus('idle'), 2400)
  }

  const contactItems = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
    { label: 'Phone', value: profile.phone.display, href: profile.phone.href, icon: 'phone' },
    { label: 'LinkedIn', value: linkedinLabel, href: profile.linkedin, icon: 'linkedin', external: true },
  ]

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="eyebrow" data-reveal>
          <span className="eyebrow-index">(06)</span>
          Contact
        </p>
        <h2 id="contact-title" className="contact-title" data-reveal>
          Let&rsquo;s talk about <em>what you&rsquo;re building.</em>
        </h2>

        <div className="contact-row" data-reveal>
          <p className="contact-intro">
            Whether it&rsquo;s a role, a project, or a question about my work, I&rsquo;d be glad to hear from
            you. You can reach me by email or phone, or connect with me on LinkedIn.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Icon name="mail" size={17} />
              Email me
            </a>
            <button type="button" className="btn" onClick={copyEmail}>
              <Icon name={copyStatus === 'copied' ? 'check' : 'copy'} size={17} />
              {copyStatus === 'copied' ? 'Copied' : 'Copy email'}
            </button>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn" download>
                <Icon name="file" size={17} />
                Resume
              </a>
            )}
          </div>
          <p className="sr-only" role="status">
            {copyStatus === 'copied' && 'Email address copied to clipboard'}
            {copyStatus === 'failed' && `Couldn't copy automatically. The email address is ${profile.email}`}
          </p>
        </div>

        <ul className="contact-list">
          {contactItems.map((item, i) => (
            <li key={item.label} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
              <a
                href={item.href}
                className="contact-card"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <span className="contact-card-label">
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </span>
                <span className="contact-card-value">{item.value}</span>
                <Icon name="arrowUpRight" size={20} className="contact-card-arrow" />
                {item.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
