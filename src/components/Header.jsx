import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import Icon from './Icon.jsx'
import Monogram from './Monogram.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import './Header.css'

const spyIds = navLinks.flatMap((link) => [link.id, ...(link.also ?? [])])

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const spiedId = useScrollSpy(spyIds)
  const activeId = navLinks.find((link) => link.id === spiedId || link.also?.includes(spiedId))?.id

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false)
    const desktop = window.matchMedia('(min-width: 900px)')
    const onResize = () => desktop.matches && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled || menuOpen ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={`${profile.name} — back to top`} onClick={closeMenu}>
          <Monogram size={32} className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.role}</span>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Primary">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="nav-link"
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="btn btn-sm header-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
          )}
          <a href="#contact" className="btn btn-primary btn-sm header-cta">
            Get in touch
          </a>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' is-open' : ''}`} hidden={!menuOpen}>
        <nav className="container" aria-label="Mobile">
          <ul className="mobile-nav-list">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="mobile-nav-link"
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  <span className="mobile-nav-index">{String(index + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            <a href={`mailto:${profile.email}`} className="text-link">
              {profile.email}
            </a>
            <a href={profile.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">
              LinkedIn <Icon name="arrowUpRight" size={15} />
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="text-link" download>
                Download resume
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
