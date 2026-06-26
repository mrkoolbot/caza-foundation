"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(".hero-word", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out"
      })
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out"
      }, "-=0.3")

      gsap.to(headlineRef.current, {
        y: -60,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "40% top",
          scrub: 1
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1a1a1a"
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#1a1a1a" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=90')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.4) 100%)", zIndex: 10 }} />
      </div>

      {/* Content */}
      <div
        ref={headlineRef}
        style={{
          position: "relative",
          zIndex: 20,
          width: "100%",
          padding: "0 5rem 7rem",
          paddingTop: "160px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        {/* Headline */}
        <h1 style={{ marginBottom: "2rem" }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.2em",
            color: "white",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontSize: "clamp(2rem, 6vw, 5rem)",
            marginBottom: "2.5rem",
            maxWidth: "900px"
          }}>
            <span className="hero-word" style={{ display: "inline-block", color: "white" }}>
              every home is a sanctuary.&nbsp;
            </span>
          </div>
        </h1>

        {/* Subheader */}
        <p style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
          fontWeight: 400,
          letterSpacing: "0.01em",
          marginBottom: "2.5rem",
          maxWidth: "560px",
          lineHeight: 1.65,
          textShadow: "0 1px 20px rgba(0,0,0,0.6)"
        }}>
          faith-rooted counseling, education, and community support — walking with every family through their hardest seasons.
        </p>

        {/* CTA */}
        <div
          ref={ctaRef}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            maxWidth: "700px"
          }}
        >
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/support" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: "#813332",
              color: "white",
              padding: "1rem 2.5rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              transition: "all 0.3s",
              cursor: "pointer",
              textDecoration: "none"
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "white"; el.style.color = "#1a1a1a" }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#813332"; el.style.color = "white" }}
            >
              find shelter
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/give" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "white",
              padding: "1rem 2.5rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              transition: "all 0.3s",
              cursor: "pointer",
              textDecoration: "none"
            }}>
              give now
            </Link>
          </div>
          <p style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase"
          }}>
            faith-based · family-centered · community-driven.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        opacity: 0.5
      }}>
        <div style={{
          width: "1px",
          height: "40px",
          backgroundColor: "rgba(255,255,255,0.4)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "50%",
            backgroundColor: "white",
            animation: "scrollLine 2s ease-in-out infinite"
          }} />
        </div>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="white" style={{ opacity: 0.6 }}>
          <path d="M5 10L0 4h10L5 10z"/>
        </svg>
      </div>
    </section>
  )
}
