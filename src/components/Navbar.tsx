"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Our Why", href: "/our-why" },
  { name: "Our Programs", href: "/our-programs" },
  { name: "Our People", href: "/our-people" },
  { name: "Walk With Us", href: "/walk-with-us" },
  { name: "Find Shelter", href: "/find-shelter" },
]

function CazaLogoSVG({ light = false }: { light?: boolean }) {
  const fill = light ? "#f8f0de" : "#6a482c"
  const accent = light ? "#c18f55" : "#a48157"
  return (
    <svg viewBox="0 0 220 56" xmlns="http://www.w3.org/2000/svg" style={{ height: 36, width: "auto" }}>
      <defs>
        <linearGradient id="houseGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8A020" />
          <stop offset="100%" stopColor="#D44000" />
        </linearGradient>
      </defs>
      <text x="2" y="42" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="44" fill={fill}>C</text>
      <text x="34" y="42" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="44" fill={fill}>A</text>
      <rect x="49" y="9" width="9" height="9" rx="1.5" fill="url(#houseGlow)" />
      <text x="68" y="42" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="44" fill={fill}>Z</text>
      <text x="100" y="42" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="44" fill={fill}>A</text>
      <rect x="115" y="9" width="9" height="9" rx="1.5" fill="url(#houseGlow)" />
      <path d="M2,48 Q110,43 218,48" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="52" y="56" fontFamily="Georgia, serif" fontStyle="italic" fontSize="11" fill={accent} letterSpacing="1">foundation</text>
    </svg>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  const darkPages = ["/"]
  const onDark = !isScrolled && darkPages.includes(pathname) && !isMobileOpen

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500",
          isScrolled
            ? "px-6 sm:px-10 py-4 bg-white/98 backdrop-blur-xl border-b border-neutral-100 shadow-sm"
            : "px-6 sm:px-10 md:px-14 py-5 bg-transparent"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link href="/" className="relative z-50 flex-shrink-0">
          <CazaLogoSVG light={onDark} />
        </Link>

        {/* Desktop Nav — centered like TKG */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-semibold tracking-[0.12em] transition-colors duration-200 hover:text-amor",
                onDark ? "text-alma/80" : "text-liga",
                pathname === link.href && "text-amor"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/give"
            className={cn(
              "inline-flex items-center justify-center text-xs font-bold tracking-wider transition-all duration-200 border px-5 py-2.5",
              onDark
                ? "border-alma/40 text-alma hover:bg-alma hover:text-cruz"
                : "border-cruz text-cruz hover:bg-cruz hover:text-alma"
            )}
          >
            Give Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden z-50 flex flex-col gap-[5px] items-end justify-center w-8 h-8"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("block h-[1.5px] transition-all duration-300 origin-center", isMobileOpen ? "w-6 rotate-45 translate-y-[6.5px] bg-cruz" : cn("w-6", onDark ? "bg-alma" : "bg-cruz"))} />
          <span className={cn("block h-[1.5px] transition-all duration-300", isMobileOpen ? "opacity-0 w-0" : cn("w-4", onDark ? "bg-alma" : "bg-cruz"))} />
          <span className={cn("block h-[1.5px] transition-all duration-300 origin-center", isMobileOpen ? "w-6 -rotate-45 -translate-y-[6.5px] bg-cruz" : cn("w-6", onDark ? "bg-alma" : "bg-cruz"))} />
        </button>
      </motion.header>

      {/* Mobile fullscreen menu — dark like TKG */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-cruz flex flex-col md:hidden"
          >
            <div className="flex flex-col justify-center flex-1 px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "block text-4xl sm:text-5xl font-bold tracking-tight py-3 border-b border-alma/10 transition-colors hover:text-pele",
                      pathname === link.href ? "text-pele" : "text-alma"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-12">
              <Link href="/give" onClick={() => setIsMobileOpen(false)} className="inline-flex items-center justify-center bg-amor text-alma px-6 py-3 text-xs font-bold tracking-widest">
                Give Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
