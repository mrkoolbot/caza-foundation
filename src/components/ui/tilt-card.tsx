"use client"

import { useRef, useEffect } from "react"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number // 1-15, default 8
}

export function TiltCard({ children, className = "", intensity = 8 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -intensity
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * intensity

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        card.style.transition = "transform 0.1s ease-out"
      })
    }

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId)
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
      card.style.transition = "transform 0.4s ease-out"
    }

    const handleMouseEnter = () => {
      card.style.transition = "transform 0.1s ease-out"
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)
    card.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      cancelAnimationFrame(rafId)
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
      card.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [intensity])

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
}
