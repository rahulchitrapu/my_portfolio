// "RC" monogram drawn with strokes (no font dependency). Shares its geometry with public/favicon.svg.
export default function Monogram({ size = 30, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="15" fill="var(--accent)" />
      <g
        fill="none"
        stroke="var(--accent-ink)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 45V19h8a6.5 6.5 0 0 1 0 13h-8M18 32l8 13" />
        <path d="M50.1 22.8A10 13 0 1 0 50.1 41.2" />
      </g>
    </svg>
  )
}
