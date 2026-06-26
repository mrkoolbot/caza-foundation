"use client"
import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

export function Cursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const cursorRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      
      const target = e.target as HTMLElement
      const isClickable = target.closest("a, button, .cursor-hover")
      const dataCursor = target.closest("[data-cursor]")?.getAttribute("data-cursor")
      
      setIsHovering(!!isClickable || !!dataCursor)
      setCursorText(dataCursor || "")
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [mouseX, mouseY])

  // Only render on client and if not touch device ideally, but simple for now
  if (typeof window === "undefined") return null

  return (
    <motion.div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center",
        isHovering ? "bg-amor" : "bg-white"
      )}
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? (cursorText ? 80 : 20) : 12,
        height: isHovering ? (cursorText ? 80 : 20) : 12,
      }}
      transition={{ duration: 0.2 }}
    >
        {cursorText && (
            <div className="text-[10px] font-bold tracking-widest text-white lowercase text-center leading-none">
                {cursorText}
            </div>
        )}
    </motion.div>
  )
}
