import { useEffect, useState } from 'react'

// Returns the id of the section currently crossing the middle band of the viewport.
// `ids` must be a stable array (e.g. defined at module level).
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return

    const visible = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        setActiveId(ids.find((id) => visible.has(id)) ?? '')
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
