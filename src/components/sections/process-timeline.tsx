"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: "01",
    title: "diagnose",
    description: "we audit your brand, narrative, and key experiences: what you say, how you show up and how it feels to work with you."
  },
  {
    number: "02",
    title: "design",
    description: "we co-create the strategy, narrative and roadmap so everything points in one direction."
  },
  {
    number: "03",
    title: "deploy",
    description: "we support roll-out, coaching and optimization so the work doesn't die in a slide deck."
  }
]

export function ProcessTimeline() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only apply horizontal scroll on desktop
    if (isMobile) return

    const ctx = gsap.context(() => {
      const container = containerRef.current
      const wrapper = wrapperRef.current
      
      if (!container || !wrapper) return

      const totalScroll = container.scrollWidth - document.documentElement.clientWidth

      gsap.to(container, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 1,
          end: () => "+=" + container.scrollWidth,
          invalidateOnRefresh: true,
        }
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [isMobile])

  // Mobile Layout
  if (isMobile) {
    return (
      <section className="relative bg-white text-cruz border-t border-neutral-200 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Intro Section */}
          <div className="mb-12">
            <SectionHeader 
              label="how we work"
              title="a simple process. deep work."
              subtitle="every engagement is tailored, but our approach is consistent and disciplined."
            />
          </div>

          {/* Steps - Vertical Stack on Mobile */}
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 border border-neutral-200 bg-neutral-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <span className="text-amor text-lg sm:text-xl font-bold tracking-widest">{step.number}</span>
                  <div className="h-px flex-1 bg-neutral-200" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter lowercase">{step.title}</h3>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed lowercase">{step.description}</p>
              </div>
            ))}
            
            {/* Final Callout Card */}
            <Link 
              href="/solutions"
              className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 bg-cruz text-white rounded-lg active:bg-amor transition-colors duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold lowercase">ready to start?</h3>
              <p className="text-white/70 text-base sm:text-lg lowercase">see how we can apply this process to your brand.</p>
              <span className="text-white text-base sm:text-lg font-bold flex items-center gap-3 lowercase">
                see engagement models <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // Desktop Layout with Horizontal Scroll
  return (
    <section ref={wrapperRef} className="relative bg-white text-cruz overflow-hidden border-t border-neutral-200">
        <div ref={containerRef} className="flex h-screen items-center w-fit px-6 md:px-12 lg:px-16 gap-12 md:gap-24 lg:gap-32">
            
            {/* Intro Section */}
            <div className="w-[40vw] lg:w-[30vw] flex-shrink-0">
                <SectionHeader 
                    label="how we work"
                    title="a simple process. deep work."
                    subtitle="every engagement is tailored, but our approach is consistent and disciplined."
                />
            </div>

            {/* Steps */}
            {steps.map((step, i) => (
                <div key={i} className="w-[40vw] lg:w-[30vw] flex-shrink-0 flex flex-col gap-6 lg:gap-8 p-8 lg:p-10 border border-neutral-200 bg-neutral-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group rounded-lg">
                    <div className="flex items-center gap-4">
                        <span className="text-amor text-lg lg:text-xl font-bold tracking-widest">{step.number}</span>
                        <div className="h-px flex-1 bg-neutral-200 group-hover:bg-amor transition-colors duration-500" />
                    </div>
                    <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter lowercase">{step.title}</h3>
                    <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed lowercase">{step.description}</p>
                </div>
            ))}
            
            {/* Final Callout Card */}
             <div className="w-[40vw] lg:w-[30vw] flex-shrink-0 flex flex-col justify-center gap-6 lg:gap-8 p-8 lg:p-12 bg-cruz text-white group cursor-pointer hover:bg-amor transition-colors duration-500 rounded-lg">
                <h3 className="text-3xl lg:text-4xl font-bold lowercase">ready to start?</h3>
                <p className="text-white/70 text-base lg:text-lg lowercase">see how we can apply this process to your brand.</p>
                <Link href="/solutions" className="text-white text-lg lg:text-xl font-bold flex items-center gap-4 group-hover:gap-6 transition-all lowercase">
                    see engagement models <ArrowRight />
                </Link>
             </div>
        </div>
    </section>
  )
}
