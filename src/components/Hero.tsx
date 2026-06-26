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
      // Cinematic entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(bgRef.current, {
        scale: 1.08,
        opacity: 0,
        duration: 1.8,
        ease: "power2.out"
      })
      .from(".hero-word", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out"
      }, "-=0.4")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out"
      }, "-=0.3")

      // Parallax on scroll
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2
        }
      })

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

  const words = ["every home is a sanctuary.", "CAZA walks with families through their hardest seasons — faith-rooted counseling, education, and support."]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center bg-black"
    >
      {/* Background — image + gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Base dark fallback */}
        <div className="absolute inset-0 bg-black" />
        {/* Hero image */}
        <img
          ref={bgRef}
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=85"
          alt="Family"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        {/* Cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-cruz via-cruz/50 to-transparent z-10" />
      </div>

      {/* Content — bottom aligned like AKQA */}
      <div
        ref={headlineRef}
        className="relative z-20 w-full px-6 sm:px-10 md:px-16 lg:px-20 pb-16 sm:pb-20 md:pb-24 lg:pb-28"
      >
        {/* Headline — word by word reveal */}
        <h1>
          <div className="flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] text-alma font-bold leading-[1.05] tracking-tighter text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-8 sm:mb-10 md:mb-12 max-w-5xl">
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block"
              >
                <span className="hero-word inline-block">
                  {word.split(" ").map((w, j) => (
                    <span key={j} className="mr-[0.25em]">{w}</span>
                  ))}
                </span>
              </span>
            ))}
          </div>
        </h1>

        {/* Bottom row — CTA + tagline */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 bg-amor text-alma px-8 sm:px-10 py-4 sm:py-5 text-sm font-bold hover:bg-alma hover:text-cruz transition-all duration-300"
          >
            Find Shelter
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            href="/give"
            className="group inline-flex items-center gap-4 border-2 border-alma text-alma px-8 sm:px-10 py-4 sm:py-5 text-sm font-bold hover:bg-alma hover:text-cruz transition-all duration-300"
          >
            Give Now
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <p className="text-alma/40 text-xs sm:text-sm tracking-[0.2em] hidden sm:block">
            Faith rooted. Family centered.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 sm:right-14 z-20 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-10 bg-alma/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-alma animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="text-alma opacity-60">
          <path d="M5 10L0 4h10L5 10z"/>
        </svg>
      </div>
    </section>
  )
}
