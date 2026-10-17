import { useEffect } from 'react'

// Marks every [data-reveal] element with [data-revealed] once it scrolls into view.
// A data attribute (not a class) is used so React never overwrites it on re-render.
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const reveal = (el) => el.setAttribute('data-revealed', '')

    if (!('IntersectionObserver' in window)) {
      elements.forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target)
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
