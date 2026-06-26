"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(bgRef.current, { scale: 1.08, opacity: 0, duration: 1.8, ease: "power2.out" })
        .from(".hero-word", { y: "110%", opacity: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" }, "-=0.4")
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.3")

      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: 1.2 }
      })

      gsap.to(headlineRef.current, {
        y: -60, opacity: 0, ease: "power1.out",
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "40% top", scrub: 1 }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const lines = ["every home is", "a sanctuary."]

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center bg-cruz">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cruz" />
        <img
          ref={bgRef}
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=85"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cruz via-cruz/60 to-transparent z-10" />
      </div>

      {/* Thin color bar top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teto via-amor to-pele z-20" />

      {/* Content — bottom-aligned like TKG */}
      <div ref={headlineRef} className="relative z-20 w-full px-6 sm:px-10 md:px-16 lg:px-20 pb-20 sm:pb-24 md:pb-28">
        <h1>
          <div className="flex flex-col text-alma font-bold leading-[0.95] tracking-tighter text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] mb-8 sm:mb-10 md:mb-12">
            {lines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <span className="hero-word inline-block">
                  {i === 1 ? <span className="text-pele italic">{line}</span> : line}
                </span>
              </div>
            ))}
          </div>
        </h1>

        <p className="text-alma/60 text-base sm:text-lg md:text-xl font-light tracking-wide mb-8 sm:mb-10 max-w-2xl">
          Powered by faith-rooted counseling, education, and community support — walking with every family through their hardest seasons.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/find-shelter" className="group inline-flex items-center gap-3 bg-amor text-alma px-8 sm:px-10 py-4 sm:py-5 text-sm font-bold hover:bg-teto transition-all duration-300">
              Find Shelter
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/give" className="inline-flex items-center gap-3 border border-alma/40 text-alma px-8 sm:px-10 py-4 sm:py-5 text-sm font-bold hover:border-alma hover:bg-alma/10 transition-all duration-300">
              Give Now
            </Link>
          </div>
          <p className="text-alma/30 text-xs sm:text-sm tracking-[0.2em] hidden sm:block">
            faith-based · family-centered · community-driven.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 sm:right-14 z-20 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-10 bg-alma/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-alma animate-scrollLine" />
        </div>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="#f8f0de"><path d="M5 10L0 4h10L5 10z" /></svg>
      </div>
    </section>
  )
}
