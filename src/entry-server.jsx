// Build-time entry used by scripts/prerender.js to turn the app into static HTML.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export { education, experience, profile, site, skills } from './data/profile.js'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
