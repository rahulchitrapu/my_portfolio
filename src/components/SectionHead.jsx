export default function SectionHead({ index, label, title, titleId, intro }) {
  return (
    <header className="section-head" data-reveal>
      <p className="eyebrow">
        <span className="eyebrow-index">({index})</span>
        {label}
      </p>
      <h2 id={titleId} className="section-title">
        {title}
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}
