"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: "primary" | "outline"
  target?: string
}

export function AnimatedButton({ href, children, className = "", variant = "primary", target }: AnimatedButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return

    const handleMouseEnter = async () => {
      const { animate } = await import("animejs")
      animate(btn, {
        scale: [1, 1.03],
        duration: 200,
        ease: "outQuad"
      })
    }

    const handleMouseLeave = async () => {
      const { animate } = await import("animejs")
      animate(btn, {
        scale: [1.03, 1],
        duration: 200,
        ease: "outQuad"
      })
    }

    const handleMouseDown = async () => {
      const { animate } = await import("animejs")
      animate(btn, {
        scale: [1.03, 0.97],
        duration: 100,
        ease: "outQuad"
      })
    }

    const handleMouseUp = async () => {
      const { animate } = await import("animejs")
      animate(btn, {
        scale: [0.97, 1],
        duration: 150,
        ease: "outElastic(1, 0.6)"
      })
    }

    btn.addEventListener("mouseenter", handleMouseEnter)
    btn.addEventListener("mouseleave", handleMouseLeave)
    btn.addEventListener("mousedown", handleMouseDown)
    btn.addEventListener("mouseup", handleMouseUp)

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter)
      btn.removeEventListener("mouseleave", handleMouseLeave)
      btn.removeEventListener("mousedown", handleMouseDown)
      btn.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <Link
      ref={btnRef}
      href={href}
      target={target}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-colors duration-300 ${className}`}
      style={{ willChange: "transform" }}
    >
      {/* Border draw on hover */}
      <span className="border-draw absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="border-draw-top" />
        <span className="border-draw-right" />
        <span className="border-draw-bottom" />
        <span className="border-draw-left" />
      </span>
      {children}
    </Link>
  )
}
