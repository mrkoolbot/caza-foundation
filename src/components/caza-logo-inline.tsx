export function CazaLogo({ light = false, height = 36 }: { light?: boolean; height?: number }) {
  const fill = light ? "#ffffff" : "#6a482c"
  const accent = light ? "#c18f55" : "#a48157"
  return (
    <svg viewBox="0 0 220 58" xmlns="http://www.w3.org/2000/svg" style={{ height, width: "auto" }} aria-label="CAZA Foundation">
      <defs>
        <linearGradient id={`hg-${light}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8A020" />
          <stop offset="100%" stopColor="#D44000" />
        </linearGradient>
      </defs>
      <text x="2" y="43" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="46" fill={fill}>C</text>
      <text x="36" y="43" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="46" fill={fill}>A</text>
      <rect x="51" y="10" width="9" height="9" rx="1.5" fill={`url(#hg-${light})`} />
      <text x="72" y="43" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="46" fill={fill}>Z</text>
      <text x="106" y="43" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="46" fill={fill}>A</text>
      <rect x="121" y="10" width="9" height="9" rx="1.5" fill={`url(#hg-${light})`} />
      <path d="M2,50 Q111,44 218,50" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="54" y="57" fontFamily="Georgia, serif" fontStyle="italic" fontSize="11" fill={accent} letterSpacing="1">foundation</text>
    </svg>
  )
}
