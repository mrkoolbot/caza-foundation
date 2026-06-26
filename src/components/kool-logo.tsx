"use client"

export function KoolLogo({ className = "" }: { className?: string; textColor?: string; size?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/kool-logo-v2.png"
      alt="kool events"
      className={className}
      style={{ height: "80px", width: "auto", display: "block", margin: "0 auto" }}
    />
  )
}
