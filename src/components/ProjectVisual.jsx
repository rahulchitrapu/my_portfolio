import Icon from './Icon.jsx'
import './ProjectVisual.css'

// Abstract, clearly illustrative visuals. The real products are confidential,
// so these depict each project's concept rather than actual screens.

const Line = ({ w = 100, tone }) => (
  <span className={`sk${tone ? ` sk-${tone}` : ''}`} style={{ width: `${w}%` }} />
)

function BuilderVisual() {
  return (
    <>
      <div className="vb-panel">
        <div className="vb-section">
          <span className="vb-pill">Section 1</span>
          <Line w={34} />
        </div>
        {['Q1', 'Q2', 'Q3'].map((q, i) => (
          <div key={q} className={`vb-q${i === 1 ? ' is-dragging' : ''}`}>
            <span className="vb-grip" />
            <span className="vb-qn">{q}</span>
            <span className="vb-lines">
              <Line w={i === 1 ? 78 : 64} tone="strong" />
              <Line w={i === 1 ? 46 : 38} />
            </span>
          </div>
        ))}
        <div className="vb-add">
          <span>+</span> Add question
        </div>
      </div>

      <div className="vb-media">
        <Icon name="image" size={20} />
        <Line w={70} />
      </div>

      <div className="vb-rule">
        <span className="viz-caption">Logic</span>
        <div className="vb-expr">
          <span className="vb-tok">Q2 = A</span>
          <span className="vb-op">AND</span>
          <span className="vb-tok">( Q3 = B</span>
          <span className="vb-op is-or">OR</span>
          <span className="vb-tok">Q4 = C )</span>
        </div>
        <div className="vb-then">
          <Icon name="arrowRight" size={14} /> Skip to Section 3
        </div>
      </div>
    </>
  )
}

function AiVisual() {
  return (
    <>
      <div className="va-prompt">
        <span className="va-spark">
          <Icon name="sparkles" size={18} />
        </span>
        <span className="va-prompt-body">
          <span className="viz-caption">Survey objective</span>
          <span className="va-input">
            <Line w={72} tone="strong" />
            <span className="va-caret" />
          </span>
        </span>
        <span className="va-btn">Generate</span>
      </div>

      <div className="va-list">
        {[0, 1, 2].map((i) => (
          <div key={i} className="va-q" style={{ '--i': i }}>
            <span className="va-badge">AI</span>
            <span className="vb-lines">
              <Line w={[82, 70, 76][i]} tone="strong" />
              <Line w={[52, 60, 44][i]} />
            </span>
            <span className={`va-check${i < 2 ? ' is-on' : ''}`}>
              <Icon name="check" size={12} strokeWidth={2.5} />
            </span>
          </div>
        ))}
      </div>

      <div className="va-audience">
        <span className="viz-caption">Suggested audience</span>
        <div className="va-chips">
          <span className="va-chip is-on">
            <Line w={100} />
          </span>
          <span className="va-chip">
            <Line w={100} />
          </span>
          <span className="va-chip">
            <Line w={100} />
          </span>
        </div>
      </div>
    </>
  )
}

function ChatVisual() {
  return (
    <>
      <div className="vc-window">
        <div className="vc-head">
          <span className="vc-live" />
          Support
          <span className="vc-head-line">
            <Line w={100} />
          </span>
        </div>
        <div className="vc-msg">
          <span className="vc-avatar is-bot">
            <Icon name="sparkles" size={11} strokeWidth={2} />
          </span>
          <span className="vc-bubble">
            <Line w={90} tone="strong" />
            <Line w={60} />
          </span>
        </div>
        <div className="vc-msg is-user">
          <span className="vc-bubble">
            <Line w={100} tone="invert" />
          </span>
        </div>
        <div className="vc-divider">Agent joined</div>
        <div className="vc-msg">
          <span className="vc-avatar" />
          <span className="vc-bubble">
            <Line w={84} tone="strong" />
            <Line w={70} />
          </span>
        </div>
        <div className="vc-typing">
          <span />
          <span />
          <span />
        </div>
        <div className="vc-compose">
          <Line w={60} />
          <span className="vc-send">
            <Icon name="arrowUp" size={12} strokeWidth={2.25} />
          </span>
        </div>
      </div>

      <div className="vc-flow">
        <span className="vc-node">Chatbot</span>
        <span className="vc-link" />
        <span className="vc-node is-question">Agent available?</span>
        <span className="vc-branch">
          <span className="vc-branch-col">
            <span className="vc-link" />
            <span className="vc-node is-accent">Live agent</span>
          </span>
          <span className="vc-branch-col">
            <span className="vc-link" />
            <span className="vc-node is-muted">Ticket</span>
          </span>
        </span>
      </div>
    </>
  )
}

function PersonaVisual() {
  const inputs = ['Attributes', 'Survey responses', 'User actions', 'Tags']
  return (
    <svg className="vp-svg" viewBox="0 0 400 300" aria-hidden="true" focusable="false">
      {inputs.map((label, i) => {
        const y = 50 + i * 62
        return (
          <g key={label}>
            <path className="vp-wire" d={`M146 ${y} C 180 ${y}, 180 150, 206 150`} />
            <rect className="vp-input" x="20" y={y - 17} width="126" height="34" rx="17" />
            <circle className="vp-dot" cx="38" cy={y} r="4" />
            <text className="vp-text" x="50" y={y + 4}>
              {label}
            </text>
          </g>
        )
      })}
      <circle className="vp-hub-ring" cx="226" cy="150" r="28" />
      <circle className="vp-hub" cx="226" cy="150" r="20" />
      <path className="vp-hub-mark" d="M218 150h16M226 142v16" />
      <path className="vp-wire is-out" d="M254 150 H 268" />

      <rect className="vp-card" x="268" y="84" width="114" height="132" rx="12" />
      <text className="vp-caption" x="282" y="108">
        SEGMENT
      </text>
      <g className="vp-people">
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={290 + i * 15} cy="132" r="9" className={i === 0 ? 'is-accent' : undefined} />
        ))}
      </g>
      <rect className="vp-bar is-strong" x="282" y="156" width="78" height="7" rx="3.5" />
      <rect className="vp-bar" x="282" y="172" width="56" height="7" rx="3.5" />
      <rect className="vp-bar" x="282" y="188" width="68" height="7" rx="3.5" />
    </svg>
  )
}

function VideoVisual() {
  return (
    <div className="vv-stage">
      <div className="vv-tile is-main">
        <span className="vv-person" />
        <span className="vv-name">
          <Line w={100} tone="invert" />
        </span>
      </div>
      <div className="vv-tile is-pip">
        <span className="vv-person" />
      </div>
      <span className="vv-badge">
        <span className="vv-rec" /> Live session
      </span>
      <div className="vv-controls">
        <span className="vv-ctrl">
          <Icon name="mic" size={16} />
        </span>
        <span className="vv-ctrl">
          <Icon name="video" size={16} />
        </span>
        <span className="vv-ctrl is-end">
          <Icon name="phoneOff" size={16} />
        </span>
      </div>
    </div>
  )
}

const visuals = {
  builder: BuilderVisual,
  ai: AiVisual,
  chat: ChatVisual,
  persona: PersonaVisual,
  video: VideoVisual,
}

export default function ProjectVisual({ type, label }) {
  const Visual = visuals[type]
  return (
    <div className={`viz viz-${type}`} role="img" aria-label={label}>
      <div className="viz-inner">
        <Visual />
      </div>
      <span className="viz-label" aria-hidden="true">
        Illustration
      </span>
    </div>
  )
}
