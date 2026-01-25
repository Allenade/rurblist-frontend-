export function EmailSentIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Letter/Document */}
      <rect
        x="55"
        y="20"
        width="90"
        height="100"
        rx="4"
        fill="white"
        stroke="#d1d5db"
        strokeWidth="1.5"
      />
      {/* Orange dot */}
      <rect x="70" y="35" width="15" height="6" rx="3" fill="#e87722" />
      {/* Orange line */}
      <rect x="70" y="50" width="60" height="4" rx="2" fill="#e87722" />
      {/* Gray lines */}
      <rect x="70" y="62" width="50" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="70" y="72" width="45" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="70" y="82" width="40" height="3" rx="1.5" fill="#d1d5db" />

      {/* Envelope back */}
      <path
        d="M30 80 L100 130 L170 80 L170 170 L30 170 Z"
        fill="white"
        stroke="#d1d5db"
        strokeWidth="1.5"
      />

      {/* Orange triangle inside */}
      <path d="M50 170 L100 125 L150 170 Z" fill="#e87722" />

      {/* Envelope flap lines */}
      <path
        d="M30 80 L100 130 L170 80"
        fill="none"
        stroke="#d1d5db"
        strokeWidth="1.5"
      />
    </svg>
  )
}
