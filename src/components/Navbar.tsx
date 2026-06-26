"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { CazaLogo } from "@/components/caza-logo-inline"

const navLinks = [
  { name: "our why",       href: "/our-why" },
  { name: "our programs",  href: "/our-programs" },
  { name: "our people",    href: "/our-people" },
  { name: "walk with us",  href: "/walk-with-us" },
  { name: "find shelter",  href: "/find-shelter" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  const darkPages = ["/"]
  const onDark = !isScrolled && darkPages.includes(pathname) && !isMobileMenuOpen

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 overflow-visible",
          isScrolled
            ? "px-6 sm:px-10 py-4 bg-white/98 backdrop-blur-xl border-b border-black/6 shadow-sm"
            : "px-6 sm:px-10 md:px-14 py-4 md:py-5 bg-transparent"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Logo */}
        <Link href="/" className="relative z-50 flex-shrink-0">
          <CazaLogo light={onDark} height={32} />
        </Link>

        {/* Desktop Nav — centered like TKG */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2 overflow-visible">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-medium tracking-[0.12em] transition-colors duration-200 hover:text-amor",
                onDark ? "text-white/80" : "text-obsidian/70",
                pathname === link.href && "text-amor"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/give"
            className={cn(
              "inline-flex items-center justify-center text-xs font-bold transition-all duration-200 border px-5 py-2.5 whitespace-nowrap",
              onDark
                ? "border-white/40 text-white hover:bg-white hover:text-obsidian"
                : "border-obsidian text-obsidian hover:bg-obsidian hover:text-white"
            )}
          >
            give now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden z-50 flex flex-col gap-[5px] items-end justify-center w-8 h-8"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "close menu" : "open menu"}
        >
          <span className={cn("block h-[1.5px] transition-all duration-300 origin-center", isMobileMenuOpen ? "w-6 rotate-45 translate-y-[6.5px] bg-obsidian" : cn("w-6", onDark ? "bg-white" : "bg-obsidian"))} />
          <span className={cn("block h-[1.5px] transition-all duration-300", isMobileMenuOpen ? "opacity-0 w-0" : cn("w-4", onDark ? "bg-white" : "bg-obsidian"))} />
          <span className={cn("block h-[1.5px] transition-all duration-300 origin-center", isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[6.5px] bg-obsidian" : cn("w-6", onDark ? "bg-white" : "bg-obsidian"))} />
        </button>
      </motion.header>

      {/* Mobile fullscreen menu — dark like TKG */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col md:hidden"
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
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block text-4xl sm:text-5xl font-bold tracking-tight py-3 border-b border-white/10 transition-colors hover:text-amor",
                      pathname === link.href ? "text-amor" : "text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-12 flex items-center justify-between">
              <span className="text-white/30 text-xs tracking-widest">cazafoundationinc.org</span>
              <Link href="/give" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center bg-amor text-white px-6 py-3 text-xs font-bold tracking-widest hover:bg-teto transition-colors">
                give now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
