"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function CazaHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(bgRef.current, { scale: 1.08, opacity: 0, duration: 1.8, ease: "power2.out" })
        .from(".hero-word", { y: "110%", opacity: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" }, "-=0.4")
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.3")

      gsap.to(bgRef.current, {
        yPercent: 20, ease: "none",
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: 1.2 }
      })
      gsap.to(headlineRef.current, {
        y: -60, opacity: 0, ease: "power1.out",
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "40% top", scrub: 1 }
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      style={{ position: "relative", minHeight: "100vh", width: "100%", overflow: "hidden", display: "flex", alignItems: "center", backgroundColor: "#1a1a1a" }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#1a1a1a" }} />
        <div
          ref={bgRef}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1920&q=85')",
            backgroundSize: "cover", backgroundPosition: "center",
            opacity: 0.45,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #1a1a1a 0%, rgba(26,26,26,0.5) 50%, transparent 100%)", zIndex: 1 }} />
      </div>

      {/* Content — bottom-aligned like TKG */}
      <div
        ref={headlineRef}
        style={{ position: "relative", zIndex: 20, width: "100%", padding: "0 5rem 7rem", paddingTop: "120px" }}
      >
        <h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2em", color: "white", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", fontSize: "clamp(2.5rem, 7vw, 7rem)", marginBottom: "2.5rem", maxWidth: "900px" }}>
            {["every home is", "a sanctuary."].map((line, i) => (
              <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
                <span className="hero-word" style={{ display: "inline-block", color: i === 1 ? "#c18f55" : "white", fontStyle: i === 1 ? "italic" : "normal" }}>
                  {line}&nbsp;
                </span>
              </span>
            ))}
          </div>
        </h1>

        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(1rem, 1.5vw, 1.25rem)", fontWeight: 300, letterSpacing: "0.02em", marginBottom: "2.5rem", maxWidth: "560px", lineHeight: 1.6 }}>
          faith-rooted counseling, education, and community support — walking with every family through their hardest seasons.
        </p>

        <div
          ref={ctaRef}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}
        >
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/find-shelter" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", backgroundColor: "#813332", color: "white", padding: "1rem 2.5rem", fontSize: "0.875rem", fontWeight: 700, transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; (e.currentTarget as HTMLElement).style.color = "#1a1a1a" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#813332"; (e.currentTarget as HTMLElement).style.color = "white" }}
            >
              find shelter
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/give" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", border: "1px solid rgba(255,255,255,0.4)", color: "white", padding: "1rem 2.5rem", fontSize: "0.875rem", fontWeight: 700, transition: "all 0.3s" }}>
              give now
            </Link>
          </div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
            faith-based · family-centered · community-driven.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "2rem", right: "3.5rem", zIndex: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.5 }}>
        <div style={{ width: 1, height: 40, backgroundColor: "rgba(255,255,255,0.4)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", backgroundColor: "white", animation: "scrollLine 2s ease-in-out infinite" }} />
        </div>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><path d="M5 10L0 4h10L5 10z" /></svg>
      </div>
    </section>
  )
}
