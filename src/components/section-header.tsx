export function SectionHeader({ label, title, subtitle }: { label?: string, title: string, subtitle?: string }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      {label && (
        <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#813332", marginBottom: "1rem" }}>
          {label}
        </p>
      )}
      <h2 style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#1a1a1a", marginBottom: subtitle ? "1rem" : 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.2rem)", color: "#737373", maxWidth: "680px", lineHeight: 1.65, fontWeight: 400 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
