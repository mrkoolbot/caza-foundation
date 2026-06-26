"use client"
import Link from "next/link"
import { CazaHero } from "@/components/caza-hero"
import { WhoWeHelp } from "@/components/sections/who-we-help"
import { SectionHeader } from "@/components/section-header"
import { ProgramCard } from "@/components/program-card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    title: "rebuilding a family in crisis",
    client: "Roots & Wings",
    description: "How faith-centered counseling helped a family navigate trauma and rediscover their bond — one honest conversation at a time.",
    href: "/our-programs#roots-and-wings",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    delay: 0,
    className: "lg:col-span-2",
  },
  {
    title: "learning together, growing stronger",
    client: "The Knowing House",
    description: "Educational support that transformed the way one family communicates, learns, and thrives together.",
    href: "/our-programs#the-knowing-house",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    delay: 0.1,
    className: "",
  },
  {
    title: "from devastation to home again",
    client: "Homecoming",
    description: "Disaster recovery care that restored not just a house — but a family's sense of safety, faith, and wholeness.",
    href: "/our-programs#homecoming",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
    delay: 0.2,
    className: "md:col-span-2 lg:col-span-1",
  },
]

const board = [
  { name: "Adriana Palhares Baida", title: "President",      color: "#6a482c" },
  { name: "Paula Mescolin",          title: "Vice President", color: "#813332" },
  { name: "Paula Barifouse",         title: "Secretary",      color: "#994b36" },
  { name: "Tatiana Pellegrini",      title: "Director",       color: "#a48157" },
  { name: "Carol Sampaio",           title: "Treasurer",      color: "#6b6560" },
]

export default function Home() {
  return (
    <main style={{ backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "Quicksand, sans-serif" }}>

      <CazaHero />

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#813332", padding: "1rem 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "3rem", animation: "marquee 28s linear infinite", whiteSpace: "nowrap" }}>
          {Array(10).fill("faith · family · healing · we walk with you · rooted in love · no one carries their pain alone ·").map((t, i) => (
            <span key={i} style={{ color: "white", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", flexShrink: 0 }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ── WHO WE HELP ──────────────────────────────────────────── */}
      <WhoWeHelp />

      {/* ── PROGRAMS ─────────────────────────────────────────────── */}
      <section style={{ padding: "8rem 5rem", backgroundColor: "#f9f9f9", borderTop: "1px solid #e5e5e5" }}>
        <div style={{ marginBottom: "5rem" }}>
          <SectionHeader
            label="our programs"
            title="when a family finds shelter, everything changes."
            subtitle="from crisis to healing. three programs built to walk with families through their hardest seasons."
          />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
        <div style={{ marginTop: "5rem", textAlign: "center" }}>
          <Link href="/our-programs" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1.125rem", fontWeight: 700, color: "#737373" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#813332"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#737373"}
          >
            explore all programs <ArrowRight style={{ width: 20, height: 20 }} />
          </Link>
        </div>
      </section>

      {/* ── DARK VISION SECTION ──────────────────────────────────── */}
      <section style={{ position: "relative", padding: "10rem 5rem", backgroundColor: "#1a1a1a", color: "white", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1800&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          {/* Tiny eyebrow */}
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#813332", marginBottom: "2rem" }}>our vision</p>
          {/* Giant headline */}
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.0, marginBottom: "2.5rem" }}>
            no one carries<br />their pain alone.
          </h2>
          {/* Medium body */}
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
            A community where every family is emotionally whole and spiritually grounded — the bond between parent and child strengthened, and no one left behind.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "3rem" }}>
            <Link href="/find-shelter" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#813332", color: "white", padding: "1.25rem 3rem", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.05em", boxShadow: "0 0 40px rgba(129,51,50,0.4)", transition: "all 0.3s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "white"; el.style.color = "#1a1a1a" }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#813332"; el.style.color = "white" }}
            >
              find shelter
            </Link>
            <Link href="/our-why" style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "2px", transition: "all 0.2s" }}>
              learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOARD ────────────────────────────────────────────────── */}
      <section style={{ padding: "8rem 5rem", backgroundColor: "#ffffff", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ marginBottom: "5rem" }}>
          <SectionHeader
            label="our people"
            title="guided by purpose. rooted in faith."
            subtitle="our board brings together heart, experience, and a shared calling to strengthen families."
          />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {board.map((m) => (
            <div key={m.name} style={{ display: "flex", alignItems: "center", gap: "0.75rem", backgroundColor: "white", border: "1px solid #e5e5e5", padding: "0.5rem 1.5rem 0.5rem 0.5rem" }}>
              <div style={{ width: 40, height: 40, backgroundColor: m.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.875rem", fontWeight: 700, flexShrink: 0 }}>
                {m.name[0]}
              </div>
              <div>
                {/* Hierarchy: name bigger than title */}
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2 }}>{m.name}</p>
                <p style={{ fontSize: "0.7rem", color: "#a3a3a3", letterSpacing: "0.05em" }}>{m.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "4rem" }}>
          <Link href="/our-people" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem", fontWeight: 700, color: "#a3a3a3", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#813332"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#a3a3a3"}
          >
            meet the full board <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </section>

      {/* ── DUAL CTA ─────────────────────────────────────────────── */}
      <section style={{ padding: "0 5rem 8rem", backgroundColor: "#f9f9f9", borderTop: "1px solid #e5e5e5" }}>
        <div style={{ paddingTop: "8rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {[
            { label: "support", headline: "need support?", sub: "you don't have to carry it alone.", href: "/find-shelter", cta: "find shelter", img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80", overlayColor: "rgba(129,51,50,0.88)" },
            { label: "give", headline: "want to help?", sub: "every gift builds a stronger home.", href: "/give", cta: "give now", img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80", overlayColor: "rgba(26,26,26,0.88)" },
          ].map((item) => (
            <div key={item.href} className="group" style={{ position: "relative", minHeight: 400, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
              <img src={item.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)", transition: "all 0.7s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(0)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.05)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(1)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${item.overlayColor} 40%, transparent 100%)` }} />
              <div style={{ position: "relative", zIndex: 10, padding: "2.5rem" }}>
                {/* Tiny eyebrow */}
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem" }}>{item.label}</p>
                {/* Big headline */}
                <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 700, color: "white", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.75rem" }}>{item.headline}</h3>
                {/* Small body */}
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem" }}>{item.sub}</p>
                <Link href={item.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "white", color: "#813332", padding: "0.75rem 1.5rem", fontSize: "0.75rem", fontWeight: 700, transition: "all 0.2s" }}>
                  {item.cta} <ArrowRight style={{ width: 12, height: 12 }} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
