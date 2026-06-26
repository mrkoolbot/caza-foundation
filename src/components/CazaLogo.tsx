"use client";

// SVG recreation of CAZA logo mark — house-shaped A's, book underline, foundation script
export function CazaLogo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: 32, md: 48, lg: 72 };
  const h = sizes[size];

  return (
    <div className={`flex flex-col items-start leading-none ${className}`}>
      <div className="flex items-end gap-0.5" style={{ height: h }}>
        {/* C */}
        <span style={{ fontSize: h, fontFamily: "Quicksand, sans-serif", fontWeight: 700, color: "#6a482c", lineHeight: 1 }}>C</span>
        {/* A with house top */}
        <span className="relative inline-block" style={{ fontSize: h, fontFamily: "Quicksand, sans-serif", fontWeight: 700, color: "#6a482c", lineHeight: 1 }}>
          A
          <span className="absolute" style={{ top: "8%", left: "50%", transform: "translateX(-50%)", width: "30%", height: "28%", background: "linear-gradient(135deg, #E8A020, #D44000)", borderRadius: "1px" }} />
        </span>
        {/* Z */}
        <span style={{ fontSize: h, fontFamily: "Quicksand, sans-serif", fontWeight: 700, color: "#6a482c", lineHeight: 1 }}>Z</span>
        {/* A with house top */}
        <span className="relative inline-block" style={{ fontSize: h, fontFamily: "Quicksand, sans-serif", fontWeight: 700, color: "#6a482c", lineHeight: 1 }}>
          A
          <span className="absolute" style={{ top: "8%", left: "50%", transform: "translateX(-50%)", width: "30%", height: "28%", background: "linear-gradient(135deg, #E8A020, #D44000)", borderRadius: "1px" }} />
        </span>
      </div>
      {/* Book underline + foundation */}
      <div className="flex flex-col items-center w-full -mt-1">
        <svg width="100%" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
          <path d="M5,3 Q50,0 95,3" stroke="#a48157" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: h * 0.22, color: "#a48157", letterSpacing: "0.05em", marginTop: 1 }}>
          foundation
        </span>
      </div>
    </div>
  );
}
