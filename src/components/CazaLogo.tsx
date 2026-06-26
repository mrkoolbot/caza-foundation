"use client"

export function CazaLogo() {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="houseGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#E8A020" }} />
          <stop offset="100%" style={{ stopColor: "#D44000" }} />
        </linearGradient>
      </defs>
      
      {/* CAZA text */}
      <text x="0" y="44" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="48" fill="currentColor">C</text>
      <text x="32" y="44" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="48" fill="currentColor">A</text>
      
      {/* First house window */}
      <rect x="46" y="10" width="10" height="10" rx="1" fill="url(#houseGlow)" />
      
      <text x="72" y="44" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="48" fill="currentColor">Z</text>
      
      {/* Second A */}
      <text x="104" y="44" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="48" fill="currentColor">A</text>
      
      {/* Second house window */}
      <rect x="118" y="10" width="10" height="10" rx="1" fill="url(#houseGlow)" />
      
      {/* Book underline curve */}
      <path d="M0,50 Q100,44 200,50" stroke="#a48157" strokeWidth="1.5" fill="none"/>
      
      {/* "foundation" script */}
      <text x="30" y="59" fontFamily="Georgia, serif" fontStyle="italic" fontSize="11" fill="#a48157">foundation</text>
    </svg>
  )
}
