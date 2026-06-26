"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, CSSProperties } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

  const headerStyle: CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: isScrolled ? "1rem 2.5rem" : "1.25rem 3.5rem",
    backgroundColor: isScrolled ? "rgba(255,255,255,0.98)" : "transparent",
    backdropFilter: isScrolled ? "blur(20px)" : "none",
    borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
    boxShadow: isScrolled ? "0 1px 20px rgba(0,0,0,0.05)" : "none",
    transition: "all 0.5s ease",
  }

  return (
    <>
      <motion.header
        style={headerStyle}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Logo */}
        <Link href="/" style={{ position: "relative", zIndex: 50, flexShrink: 0 }}>
          <CazaLogo light={onDark} height={34} />
        </Link>

        {/* Desktop Nav — centered */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: pathname === link.href ? "#813332" : onDark ? "rgba(255,255,255,0.8)" : "rgba(26,26,26,0.7)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#813332"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = pathname === link.href ? "#813332" : onDark ? "rgba(255,255,255,0.8)" : "rgba(26,26,26,0.7)"}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            href="/give"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em",
              border: onDark ? "1px solid rgba(255,255,255,0.4)" : "1px solid #1a1a1a",
              color: onDark ? "white" : "#1a1a1a",
              padding: "0.625rem 1.25rem",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = onDark ? "white" : "#1a1a1a"; el.style.color = onDark ? "#1a1a1a" : "white" }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = onDark ? "white" : "#1a1a1a" }}
          >
            give now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{ display: "none", flexDirection: "column", gap: 5, alignItems: "flex-end", justifyContent: "center", width: 32, height: 32, background: "none", border: "none", cursor: "pointer", zIndex: 50 }}
          className="md-hamburger"
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: 24, height: 1.5, backgroundColor: onDark || isMobileOpen ? (isMobileOpen ? "#1a1a1a" : "white") : "#1a1a1a", transform: isMobileOpen ? "rotate(45deg) translateY(6.5px)" : "none", transition: "all 0.3s" }} />
          <span style={{ display: "block", width: 16, height: 1.5, backgroundColor: onDark ? "white" : "#1a1a1a", opacity: isMobileOpen ? 0 : 1, transition: "all 0.3s" }} />
          <span style={{ display: "block", width: 24, height: 1.5, backgroundColor: onDark || isMobileOpen ? (isMobileOpen ? "#1a1a1a" : "white") : "#1a1a1a", transform: isMobileOpen ? "rotate(-45deg) translateY(-6.5px)" : "none", transition: "all 0.3s" }} />
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{ position: "fixed", inset: 0, zIndex: 40, backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "0 2rem", gap: "0.5rem" }}>
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 + i * 0.06 }}>
                  <Link href={link.href} onClick={() => setIsMobileOpen(false)} style={{ display: "block", fontSize: "clamp(2rem, 8vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.1)", color: pathname === link.href ? "#c18f55" : "white", transition: "color 0.2s" }}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div style={{ padding: "0 2rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", letterSpacing: "0.15em" }}>cazafoundationinc.org</span>
              <Link href="/give" onClick={() => setIsMobileOpen(false)} style={{ backgroundColor: "#813332", color: "white", padding: "0.75rem 1.5rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em" }}>give now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          nav { display: none !important; }
          .md-hamburger { display: flex !important; }
          header > div:last-of-type { display: none !important; }
        }
      `}</style>
    </>
  )
}
