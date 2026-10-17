import Icon from './Icon.jsx'

// Both icons are rendered; CSS shows the one matching the active theme,
// so server-rendered markup never mismatches on hydration.
export default function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement
    const current =
      root.dataset.theme ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next = current === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={toggleTheme}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
    >
      <Icon name="moon" className="theme-icon-moon" />
      <Icon name="sun" className="theme-icon-sun" />
    </button>
  )
}
