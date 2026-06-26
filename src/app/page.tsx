import { CazaHero } from "@/components/caza-hero"
import { WhoWeHelp } from "@/components/sections/who-we-help"
import { SectionHeader } from "@/components/section-header"
import { ProgramCard } from "@/components/program-card"
import { CazaLogo } from "@/components/caza-logo-inline"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    title: "rebuilding a family in crisis",
    client: "Roots & Wings",
    description: "How faith-centered counseling helped a family navigate trauma and rediscover their bond.",
    href: "/our-programs#roots-and-wings",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    delay: 0,
    className: "lg:col-span-2 bg-white",
  },
  {
    title: "learning together, growing stronger",
    client: "The Knowing House",
    description: "How educational support transformed the way one family communicates and thrives.",
    href: "/our-programs#the-knowing-house",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    delay: 0.1,
    className: "bg-white",
  },
  {
    title: "from devastation to home again",
    client: "Homecoming",
    description: "How disaster recovery care restored not just a house — but a family's sense of safety and faith.",
    href: "/our-programs#homecoming",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
    delay: 0.2,
    className: "md:col-span-2 lg:col-span-1 bg-white",
  },
]

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-obsidian selection:bg-amor selection:text-white">
      <CazaHero />

      <WhoWeHelp />

      {/* ── PROGRAMS (= TKG Case Studies) ──────────────────── */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-neutral-50 border-t border-neutral-200">
        <SectionHeader
          label="our programs"
          title="when a family finds shelter, everything changes."
          subtitle="from crisis to healing. our programs work quietly, faithfully, behind the scenes."
          className="mb-10 sm:mb-16 md:mb-24"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
        <div className="mt-10 sm:mt-16 md:mt-24 text-center">
          <Link href="/our-programs" className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-bold text-neutral-400 hover:text-amor transition-colors tracking-wide group">
            explore all programs
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── SIGNATURE OFFER (= TKG dark section) ───────────── */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 md:px-12 lg:px-16 bg-obsidian text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1800&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="text-amor text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 md:mb-8 block">our vision</span>
          <h2 className="text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tighter leading-[1.05] mb-6 sm:mb-8 md:mb-12">
            no one carries their pain alone.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed mb-4 sm:mb-6 max-w-4xl mx-auto text-balance">
            A community where every family has each individual emotionally whole and spiritually grounded — the bond between spouse, parent, and child strengthened forever.
          </p>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto text-balance">
            No judgment. No condition. Just the compassion that comes from walking alongside people who've carried more than they should, for too long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-center items-center">
            <Link
              href="/find-shelter"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-amor text-white px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-bold hover:bg-white hover:text-obsidian transition-all hover:scale-105 duration-300 shadow-[0_0_40px_rgba(129,51,50,0.4)]"
            >
              find shelter
            </Link>
            <Link href="/give" className="text-sm sm:text-base border-b border-white/20 hover:border-white pb-1 transition-all">
              or give to support a family →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOARD (= TKG team teaser) ───────────────────────── */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-white border-t border-neutral-100">
        <SectionHeader
          label="our people"
          title="guided by purpose. rooted in faith."
          subtitle="our board brings together heart, experience, and a shared calling to strengthen families."
          className="mb-10 sm:mb-16 md:mb-24 max-w-6xl"
        />
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {[
            { name: "Adriana Palhares Baida", title: "President",      color: "bg-cruz" },
            { name: "Paula Mescolin",          title: "Vice President", color: "bg-amor" },
            { name: "Paula Barifouse",         title: "Secretary",      color: "bg-barro" },
            { name: "Tatiana Pellegrini",      title: "Director",       color: "bg-po" },
            { name: "Carol Sampaio",           title: "Treasurer",      color: "bg-liga" },
          ].map((m) => (
            <div key={m.name} className="flex items-center gap-3 bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all pl-2 pr-6 py-2">
              <div className={`${m.color} w-10 h-10 flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                {m.name[0]}
              </div>
              <div>
                <p className="text-obsidian text-sm font-bold leading-tight">{m.name}</p>
                <p className="text-neutral-400 text-xs">{m.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 sm:mt-16 md:mt-24 text-center">
          <Link href="/our-people" className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-bold text-neutral-400 hover:text-amor transition-colors tracking-wide group">
            meet the full board
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── DUAL CTA ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-neutral-50 border-t border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="group relative flex flex-col min-h-[320px] sm:min-h-[400px] bg-white overflow-hidden border border-neutral-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-amor/90 via-amor/30 to-transparent" />
            <div className="relative z-10 mt-auto p-8 sm:p-10">
              <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">support</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">need support?</h3>
              <p className="text-white/60 text-sm mb-6">you don't have to carry it alone.</p>
              <Link href="/find-shelter" className="inline-flex items-center gap-2 bg-white text-amor px-6 py-3 text-xs font-bold hover:bg-pele hover:text-white transition-colors">
                find shelter <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
          <div className="group relative flex flex-col min-h-[320px] sm:min-h-[400px] bg-white overflow-hidden border border-neutral-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />
            <div className="relative z-10 mt-auto p-8 sm:p-10">
              <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">give</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">want to help?</h3>
              <p className="text-white/60 text-sm mb-6">every gift builds a stronger home.</p>
              <Link href="/give" className="inline-flex items-center gap-2 bg-pele text-white px-6 py-3 text-xs font-bold hover:bg-amor transition-colors">
                give now <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
