"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const pillars = [
  {
    id: "01",
    title: "families in crisis",
    role: "parents, caregivers, and children navigating trauma",
    detail: "When a family is fracturing, we walk in — not away. Faith-centered counseling and support that rebuilds from the inside out.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
  },
  {
    id: "02",
    title: "children & youth",
    role: "young lives shaped by what they see at home",
    detail: "Educational programs and safe spaces that give children the tools to grow, communicate, and dream — even in the middle of hard seasons.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "03",
    title: "disaster survivors",
    role: "families displaced by loss, storms, or crisis",
    detail: "Emergency support that restores not just what was lost — but a family's sense of safety, faith, and home.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80",
  },
]

export function WhoWeServe() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section style={{ position: "relative", padding: "5rem 5rem", backgroundColor: "#ffffff", zIndex: 30 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem", alignItems: "flex-end" }}>
          <SectionHeader label="who we help" title="we walk with families through their hardest seasons." />
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "#737373", lineHeight: 1.7, fontWeight: 400 }}>
            CAZA Foundation meets families exactly where they are — in crisis, in grief, in displacement — and walks with them toward healing, wholeness, and hope.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {pillars.map((item, i) => {
            const isActive = activeId === item.id
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
                style={{ position: "relative", minHeight: 480, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2.5rem", overflow: "hidden", cursor: "pointer" }}
              >
                <img src={item.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease", transform: isActive ? "scale(1.05)" : "scale(1)" }} />
                <div style={{ position: "absolute", inset: 0, backgroundColor: isActive ? "rgba(106,72,44,0.45)" : "rgba(26,26,26,0.6)", transition: "background-color 0.5s" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,26,0.95) 40%, transparent 100%)" }} />

                <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "1.5rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)" }}>{item.id}</span>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", border: isActive ? "none" : "1px solid rgba(255,255,255,0.2)", backgroundColor: isActive ? "white" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.4s" }}>
                    <Plus style={{ width: 14, height: 14, color: isActive ? "#6a482c" : "white" }} />
                  </div>
                </div>

                <div style={{ position: "relative", zIndex: 10, marginTop: "auto" }}>
                  <h4 style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 0.95, color: "white", marginBottom: "0.75rem" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.4, marginBottom: isActive ? "1.5rem" : 0, transition: "margin 0.4s" }}>{item.role}</p>
                  <div style={{ display: "grid", gridTemplateRows: isActive ? "1fr" : "0fr", transition: "grid-template-rows 0.4s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.2)" }}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <Link href="/find-shelter"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1.25rem", fontWeight: 400, color: "#737373", paddingBottom: "2px", borderBottom: "1px solid transparent", transition: "all 0.2s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#1a1a1a"; el.style.borderBottomColor = "#813332" }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#737373"; el.style.borderBottomColor = "transparent" }}
          >
            <span>not sure if we can help?</span>
            <span style={{ fontWeight: 700, color: "#1a1a1a" }}>find shelter</span>
            <ArrowRight style={{ width: 18, height: 18, color: "#813332" }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
