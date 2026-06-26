"use client"
import Link from "next/link"
import { Hero } from "@/components/Hero"
import { SectionHeader } from "@/components/SectionHeader"
import { ProgramCard } from "@/components/ProgramCard"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    number: "01",
    title: "Roots & Wings",
    type: "Faith-Based Counseling",
    description: "Faith-centered counseling that meets families where they are — offering psychological support, healing conversations, and a safe space to grow.",
    href: "/our-programs#roots-and-wings",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&q=80",
  },
  {
    number: "02",
    title: "The Knowing House",
    type: "Educational Support",
    description: "Educational programs that nurture minds while strengthening family bonds — because learning together is one of the most profound acts of love.",
    href: "/our-programs#the-knowing-house",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    number: "03",
    title: "Homecoming",
    type: "Disaster Recovery",
    description: "Disaster recovery support that goes beyond logistics — addressing emotional wounds and restoring hope when crisis has shaken everything.",
    href: "/our-programs#homecoming",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
  },
]

const board = [
  { name: "Adriana Palhares Baida", title: "President", color: "bg-cruz" },
  { name: "Paula Mescolin", title: "Vice President", color: "bg-amor" },
  { name: "Paula Barifouse", title: "Secretary", color: "bg-barro" },
  { name: "Tatiana Pellegrini", title: "Director", color: "bg-po" },
  { name: "Carol Sampaio", title: "Treasurer", color: "bg-liga" },
]

export default function Home() {
  return (
    <main className="relative min-h-screen bg-alma text-cruz font-quicksand selection:bg-amor selection:text-alma">
      <Hero />

      {/* ── MARQUEE ─────────────────────────────── */}
      <section className="bg-amor py-5 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {Array(8).fill("faith · family · healing · we walk with you · rooted in love · no one carries their pain alone ·").map((t, i) => (
            <span key={i} className="text-alma font-bold text-[11px] tracking-[0.25em] uppercase shrink-0">{t}</span>
          ))}
        </div>
      </section>

      {/* ── MISSION ─────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-alma">
        <SectionHeader
          label="our mission"
          title="We walk with families through their hardest seasons."
          className="mb-10 sm:mb-16 md:mb-24 max-w-5xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
          <div className="border-l-4 border-amor pl-8">
            <p className="text-liga text-lg sm:text-xl leading-relaxed">
              CAZA strengthens families through faith-rooted psychological, educational, and counseling support — so that every home becomes a place where each family member feels safe, known, and whole.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pele/10 border border-po/20 p-8"
            >
              <span className="text-amor text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Vision</span>
              <p className="text-cruz font-semibold text-lg leading-snug italic">
                "A community where every family is emotionally whole, spiritually grounded — and no one carries their pain alone."
              </p>
            </motion.div>
            <Link href="/our-why" className="inline-flex items-center gap-2 text-sm font-bold text-amor hover:gap-4 transition-all group">
              Learn our why <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-alma border-t border-po/10">
        <SectionHeader
          label="our programs"
          title="Three ways we walk with you."
          subtitle="Every program is rooted in faith, shaped by compassion, and built for real families."
          className="mb-10 sm:mb-16 md:mb-24"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {programs.map((p) => (
            <ProgramCard key={p.number} {...p} className={p.number === "01" ? "md:col-span-2 lg:col-span-1" : ""} />
          ))}
        </div>
        <div className="mt-10 sm:mt-16 md:mt-24 text-center">
          <Link href="/our-programs" className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-bold text-liga hover:text-amor transition-colors tracking-wide group">
            View all programs <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── DARK SECTION — VISION ───────────────── */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 md:px-12 lg:px-16 bg-cruz text-alma relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1800&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-cruz via-cruz/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="text-pele text-[10px] sm:text-xs font-bold tracking-[0.3em] mb-6 sm:mb-8 block">our vision</span>
          <h2 className="text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter leading-[1.05] mb-8 sm:mb-12">
            no one carries their pain alone.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-alma/60 leading-relaxed mb-10 sm:mb-16 max-w-3xl mx-auto">
            A community where every family has each individual emotionally whole and spiritually grounded — the bond between spouse, parent, and child strengthened forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
            <Link
              href="/find-shelter"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-amor text-alma px-8 sm:px-10 py-4 sm:py-5 text-sm font-bold hover:bg-teto transition-all duration-300 shadow-[0_0_40px_rgba(129,51,50,0.4)]"
            >
              Find Shelter
            </Link>
            <Link href="/our-why" className="text-sm sm:text-base border-b border-alma/20 hover:border-alma transition-all pb-1">
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOARD ───────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-alma border-t border-po/10">
        <SectionHeader
          label="our people"
          title="Guided by purpose. Rooted in faith."
          subtitle="Our board brings together heart, experience, and a shared calling to strengthen families."
          className="mb-10 sm:mb-16 md:mb-24"
        />
        <div className="flex flex-wrap gap-4">
          {board.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 bg-white border border-po/10 pl-2 pr-6 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`${m.color} w-10 h-10 flex items-center justify-center text-alma text-sm font-bold shrink-0`}>
                {m.name[0]}
              </div>
              <div>
                <p className="text-cruz text-sm font-bold leading-tight">{m.name}</p>
                <p className="text-liga text-xs">{m.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 sm:mt-16">
          <Link href="/our-people" className="inline-flex items-center gap-2 text-sm font-bold text-amor hover:gap-4 transition-all group">
            Meet the full board <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── DUAL CTA ────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-alma/50 border-t border-po/10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative min-h-[320px] flex items-end overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-amor/95 via-amor/50 to-transparent" />
            <div className="relative z-10 p-8 sm:p-10">
              <span className="text-pele text-[10px] font-bold tracking-[0.2em] block mb-3">Support</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-alma mb-3 tracking-tight">Need support?</h3>
              <p className="text-alma/60 text-sm mb-6">You don't have to carry it alone.</p>
              <Link href="/find-shelter" className="inline-flex items-center gap-2 bg-alma text-amor px-6 py-3 text-xs font-bold hover:bg-pele transition-colors">
                Find Shelter <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative min-h-[320px] flex items-end overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-cruz/95 via-cruz/50 to-transparent" />
            <div className="relative z-10 p-8 sm:p-10">
              <span className="text-pele text-[10px] font-bold tracking-[0.2em] block mb-3">Give</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-alma mb-3 tracking-tight">Want to help?</h3>
              <p className="text-alma/60 text-sm mb-6">Every gift builds a stronger home.</p>
              <Link href="/give" className="inline-flex items-center gap-2 bg-pele text-cruz px-6 py-3 text-xs font-bold hover:bg-alma transition-colors">
                Give Now <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
