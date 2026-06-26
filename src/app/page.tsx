"use client"

import { Hero } from "@/components/hero"
import { WhoWeServe } from "@/components/sections/who-we-serve"
import { SectionHeader } from "@/components/section-header"
import { ProgramTile } from "@/components/program-tile"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    title: "faith-based counseling and healing",
    client: "Roots & Wings",
    description: "Walking with families through trauma, one honest conversation at a time. Building emotional wholeness rooted in faith.",
    href: "/programs#roots-and-wings",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    title: "education, growth, and family communication",
    client: "The Knowing House",
    description: "Educational programs that strengthen how families learn, talk, and grow together in faith and understanding.",
    href: "/programs#the-knowing-house",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    title: "disaster recovery and restoration",
    client: "Homecoming",
    description: "Compassionate support that rebuilds not just homes, but families' sense of safety, faith, and wholeness.",
    href: "/programs#homecoming",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
  },
  {
    title: "comprehensive family support services",
    client: "Community Care",
    description: "Integrated services connecting families to counseling, education, emergency aid, and long-term support networks.",
    href: "/programs#community-care",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80",
  },
]

const board = [
  { name: "Adriana Palhares Baida", title: "President", color: "#813332" },
  { name: "Paula Mescolin", title: "Vice President", color: "#c18f55" },
  { name: "Paula Barifouse", title: "Secretary", color: "#6a482c" },
  { name: "Tatiana Pellegrini", title: "Director", color: "#813332" },
  { name: "Carol Sampaio", title: "Treasurer", color: "#c18f55" },
]

export default function HomeClient() {
  return (
    <main id="main-content" style={{ position: "relative", minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a", fontFamily: "Quicksand, sans-serif" }}>
      <Hero />

      <WhoWeServe />

      {/* Programs */}
      <section style={{ padding: "7rem 5rem", backgroundColor: "#ffffff" }}>
        <SectionHeader 
            label="our programs"
            title="when a family finds shelter, everything changes."
            subtitle="from crisis to healing — three programs walking alongside families through their hardest seasons."
        />
        <div style={{ marginBottom: "4rem" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginBottom: "3rem" }}>
            {programs.slice(0, 3).map((p) => (
                <ProgramTile key={p.title} {...p} />
            ))}
        </div>
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link 
                href="/programs"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", border: "1px solid #1a1a1a", backgroundColor: "transparent", color: "#1a1a1a", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "lowercase", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#1a1a1a"; el.style.color = "#ffffff" }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = "#1a1a1a" }}
            >
                view all programs
            </Link>
        </div>
      </section>



      {/* Vision Section - Dark */}
      <section style={{ position: "relative", padding: "10rem 5rem", backgroundColor: "#1a1a1a", color: "#ffffff", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.1 }}>
             <div 
                style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1800&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #1a1a1a, #1a1a1a 50%, rgba(26,26,26,0.8))" }} />
        </div>
        
        <div style={{ position: "relative", zIndex: 10, maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#c18f55", marginBottom: "1.5rem" }}>our vision</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "2rem" }}>
                every home is a sanctuary.
            </h2>
            <p style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.125rem)", color: "#a3a3a3", lineHeight: 1.7, marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem", fontWeight: 400 }}>
                A community where every family is emotionally whole and spiritually grounded — where the bond between parent and child is strengthened, and no one carries their pain alone.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2.5rem" }}>
                <Link href="/support" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#813332", color: "#ffffff", padding: "1rem 2.5rem", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "lowercase", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 0 40px rgba(129, 51, 50, 0.4)" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#ffffff"; el.style.color = "#1a1a1a" }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#813332"; el.style.color = "#ffffff" }}
                >
                  find shelter
                </Link>
                <Link href="/about" style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.5)", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", paddingBottom: "2px", transition: "all 0.2s", display: "inline-flex", alignItems: "center" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.8)"}  
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.5)"}
                >
                  learn more about us →
                </Link>
            </div>
        </div>
      </section>

      {/* Board Section */}
      <section style={{ padding: "7rem 5rem", backgroundColor: "#ffffff", borderTop: "1px solid #f0f0f0" }}>
        <SectionHeader
            label="our people"
            title="guided by purpose. rooted in faith."
            subtitle="our board brings together heart, experience, and a shared calling to strengthen families."
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
          {board.map((m) => (
            <div key={m.name} style={{ display: "flex", alignItems: "center", gap: "0.75rem", backgroundColor: "#ffffff", border: "1px solid #e5e5e5", padding: "0.5rem 1.5rem 0.5rem 0.5rem" }}>
              <div style={{ width: 40, height: 40, backgroundColor: m.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "0.875rem", fontWeight: 700, flexShrink: 0 }}>
                {m.name[0]}
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2 }}>{m.name}</p>
                <p style={{ fontSize: "0.7rem", color: "#a3a3a3", letterSpacing: "0.05em", textTransform: "uppercase" }}>{m.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/about/board" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 700, color: "#a3a3a3", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#813332"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#a3a3a3"}
          >
            meet the full board <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </section>

      {/* Dual CTA */}
      <section style={{ padding: "0 5rem 7rem", backgroundColor: "#f9f9f9", borderTop: "1px solid #e5e5e5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: "1400px", margin: "0 auto", paddingTop: "4rem" }}>
          {[
            { label: "support", headline: "need shelter?", sub: "you don't have to carry it alone.", href: "/support", cta: "find shelter", img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80", overlayColor: "rgba(129,51,50,0.88)" },
            { label: "give", headline: "want to help?", sub: "every gift builds a stronger home.", href: "/give", cta: "give now", img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80", overlayColor: "rgba(26,26,26,0.88)" },
          ].map((item) => (
            <div key={item.href} style={{ position: "relative", minHeight: 400, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
              <img src={item.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)", transition: "all 0.7s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(0)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.05)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(1)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${item.overlayColor} 40%, transparent 100%)` }} />
              <div style={{ position: "relative", zIndex: 10, padding: "2.5rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem" }}>{item.label}</p>
                <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 700, color: "white", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.75rem" }}>{item.headline}</h3>
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
